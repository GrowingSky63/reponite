FROM ubuntu:latest

# Atualizar e instalar dependências
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos (já respeitando .dockerignore)
COPY . .

# Criar e ativar ambiente virtual Python
RUN python3 -m venv venv

# Instalar requirements.txt no venv
RUN ./venv/bin/pip install -r requirements.txt

# Entrar na pasta frontend e instalar dependências
WORKDIR /app/frontend
RUN npm ci

# Executar build do frontend
RUN npm run build

# Voltar para diretório raiz
WORKDIR /app

# Expor porta 3131
EXPOSE 3131

# Iniciar servidor com Python do venv
CMD ["./venv/bin/python3", "run.py"]