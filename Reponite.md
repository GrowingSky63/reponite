# Reponite

Uma aplicação web para explorar skins e itens da loja do Fortnite, desenvolvida com React no frontend e Flask no backend.

## 📋 Pré-requisitos

### Para execução sem Docker:
- Python 3.8 ou superior
- Node.js 16 ou superior
- npm ou yarn

### Para execução com Docker:
- Docker
- Docker Compose (opcional)

## 🚀 Como executar

### 📦 Opção 1: Usando Docker (Recomendado)

#### Método 1: Docker Build Manual

1. **Construa a imagem Docker:**
```bash
docker build -t reponite https://github.com/GrowingSky63/reponite.git
```

2. **Execute o container:**
```bash
docker run -p <porta-de-sua-escolha>:3131 reponite
```

3. **Acesse a aplicação:**
   - Abra seu navegador e vá para: `http://localhost:<porta-de-sua-escolha>`

### 🔧 Opção 2: Execução Manual (Desenvolvimento)

#### 1. Configuração do Backend

1. **Navegue para o diretório raiz:**
```bash
cd reponite
```

2. **Crie e ative um ambiente virtual Python:**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. **Clone o repositório no diretório raiz**
```bash
git clone https://github.com/GrowingSky63/reponite .
```

3. **Instale as dependências do Python:**
```bash
pip install -r requirements.txt
```

#### 2. Configuração do Frontend

1. **Navegue para o diretório frontend:**
```bash
cd frontend
```

2. **Instale as dependências do Node.js:**
```bash
npm install
# ou
yarn install
```

3. **Construa o projeto React:**
```bash
npm run build
# ou
yarn build
```

#### 3. Execução da Aplicação

1. **Volte para o diretório raiz:**
```bash
cd ..
```

2. **Execute a aplicação:**
```bash
# Windows (com venv ativado)
python run.py

# Linux/Mac (com venv ativado)
python3 run.py
```

3. **Acesse a aplicação:**
   - Abra seu navegador e vá para: `http://localhost:3131`

## 🔄 Desenvolvimento

### Frontend (React)

Para desenvolvimento do frontend com hot reload:

```bash
cd frontend
npm start
# ou
yarn start
```

Isso iniciará o servidor de desenvolvimento na porta 3000. Configure o proxy para a API em `package.json` se necessário.

## 📁 Estrutura do Projeto

```
reponite/
├── backend/               # Código do servidor Flask
│   ├── __init__.py
│   ├── app.py            # Rotas da API
│   ├── get_repository.py # Integração com Fortnite API
│   └── repository/       # Cache de dados (criado automaticamente)
├── frontend/             # Aplicação React
│   ├── public/           # Arquivos estáticos
│   ├── src/              # Código fonte React
│   └── build/            # Build de produção (criado após npm build)
├── requirements.txt      # Dependências Python
├── run.py               # Script de inicialização
├── Dockerfile           # Configuração Docker
└── README.md
```

## 🌐 Endpoints da API

- `GET /api/v1/skins` - Lista paginada de skins
  - Parâmetros: `page`, `limit`, `type`
- `GET /api/v1/skins/types` - Lista de tipos disponíveis
- `GET /api/v1/shop` - Lista paginada de itens da loja
  - Parâmetros: `page`, `limit`

## 🛠️ Tecnologias Utilizadas

### Frontend:
- React 19.1.0
- React Router DOM 7.6.2
- Bootstrap 5.3.7

### Backend:
- Flask 3.1.1
- Requests 2.32.4
- Python 3.8+

## 📝 Notas Importantes

1. **Cache de Dados**: A aplicação faz cache dos dados da Fortnite API por 24 horas no diretório `backend/repository/`

2. **Primeira Execução**: Na primeira execução, a aplicação irá baixar dados da Fortnite API, o que pode levar alguns minutos

3. **Rede**: Certifique-se de ter conexão com a internet para buscar dados da Fortnite API

4. **Porta**: A aplicação roda por padrão na porta 3131. Certifique-se de que esta porta esteja disponível

## 🐳 Dockerfile Explicado

O Dockerfile inclui:
- Instalação do Python 3, pip, Node.js e npm
- Criação de ambiente virtual Python
- Instalação de dependências do backend
- Build da aplicação React
- Exposição da porta 3131
- Comando de inicialização

## 📞 Suporte

Para problemas ou dúvidas, contate a equipe de desenvolvimento:
- Eric Verschoor - 63eric36@gmail.com
- Tatsuo Ohata - tatsuoohata@gmail.com
- Andre Aires - andreairesgg@gmail.com

## 📄 Licença

Este projeto foi desenvolvido como parte de um projeto acadêmico.