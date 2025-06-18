import sys
from pathlib import Path
import traceback

# adicionando o diretório raiz do projeto ao Python path, para que os módulos possam ser importados corretamente
ROOT_DIR = Path(__file__).parent
sys.path.insert(0, str(ROOT_DIR))

def main():
    try:
        from backend.app import app
        
        app.config['DEBUG'] = False
        app.config['TESTING'] = False
        
        print("Iniciando servidor do Reponite")
        
        # Inicia o servidor em todos os ips da máquina, usando a porta 5000
        app.run(
            host='0.0.0.0',
            port=3131,
            debug=False,
            threaded=True
        )
    # Se alguma exception estourar fora do controle do backend, o programa deve ser encerrado.
    except Exception:
        traceback.print_exc()
        sys.exit(1)

if __name__ == '__main__':
    main()