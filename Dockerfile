FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN python3 -m venv venv

RUN ./venv/bin/pip install -r requirements.txt

WORKDIR /app/frontend
RUN npm ci

RUN npm run build

WORKDIR /app

EXPOSE 3131

CMD ["./venv/bin/python3", "run.py"]