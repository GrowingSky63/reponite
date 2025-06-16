from flask import Flask, request
import traceback, requests
from .get_skins import get_skins

# Definindo qual pasta deve ser servida ao cliente (tudo que o react construir, poderá ser servido ao cliente)
app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

SKINS: list = get_skins()

# Fornecer rotas para o react
@app.errorhandler(404)
@app.route('/')
def index(error=None):
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_proxy(path):
    # Fornece arquivos estáticos do diretório build do React
    return app.send_static_file(path)

# API Própria para conseguir páginar as skins
@app.route('/api/v1/skins', methods=['GET'])
def skins():
    try:
        # Verificação do tipo do método HTTP
        match request.method:
            case 'GET':
                # Obtendo os parâmetros selecionados
                skin_id = request.args.get('id')
                args = request.args.to_dict().keys()
                page = int(request.args.get('page', 1))
                limit = int(request.args.get('limit', 10))
                skins_to_return = SKINS

                if 'id' in args:
                    skin_id.strip()
                    return {"status": 200, "data": [skin for skin in SKINS if skin['id'] == skin_id][0]}, 200
                
                if 'limit' in args:
                    if limit < 1 or limit > 100:
                        return {"error": "Limit must be between 1 and 100."}, 400
                
                if 'type' in args:
                    skin_type = request.args.get('type').strip().lower()
                    skins_to_return = [skin for skin in SKINS if skin['type']['value'].lower() == skin_type]
                
                skin_count = len(skins_to_return)
                start = (page - 1) * limit
                end = start + limit
                max_page = (skin_count // limit) + (1 if skin_count % limit > 0 else 0)

                return {"status": 200, "page": page, "limit": limit, "max_page": max_page, "data": skins_to_return[start:end]}, 200
                

            case _:
                raise NotImplementedError("Método não implementado")
    except Exception:
        traceback.print_exc()
        return {"status": 500, "data": "Internal server error"}, 500

@app.route('/api/v1/skins/types', methods=['GET'])
def skins_types():
    try:
        # Verificação do tipo do método HTTP
        match request.method:
            case 'GET':
                skin_types = list({skin['type']['value'] for skin in SKINS})
                return {"status": 200, "data": skin_types}, 200
                

            case _:
                raise NotImplementedError("Método não implementado")
    except Exception as e:
        traceback.print_exc()
        return {"status": 500, "data": "Internal server error"}, 500