import requests, json
from datetime import datetime, timedelta

def get_skins():
    with open('backend/data/skins.json', 'r') as file:
        skins = json.load(file)
    if skins and datetime.now() - datetime.fromisoformat(skins['fetchedOn']) <= timedelta(days=1):
        return skins['data']
    
    json_data = requests.get('https://fortnite-api.com/v2/cosmetics/br?language=pt-BR').json()

    if json_data['status'] != 200:
        raise Exception("Failed to fetch skins from Fortnite API")
    
    json_data['fetchedOn'] = datetime.now().isoformat()

    with open('backend/data/skins.json', 'w') as file:
        json.dump(json_data, file, indent=2)
    
    return json_data['data']
