import requests, json, os
from datetime import datetime, timedelta

REPOSITORY_PATH = os.path.normpath('backend/repository/')
API_URL = 'https://fortnite-api.com/v2/'

def _fetch_json_data(endpoint: str) -> dict:
    response = requests.get(f'{API_URL}{endpoint}', params={'language': 'pt-BR'})

    if response.status_code != 200:
        raise Exception(f"Failed to fetch data from Fortnite API: {response.status_code}")
    
    data = response.json()
    data['fetchedOn'] = datetime.now().isoformat()

    return data

def get_skins():
    file_path = os.path.join(REPOSITORY_PATH, 'skins.json')
    endpoint = 'cosmetics/br'

    if not os.path.exists(file_path):
        os.makedirs(REPOSITORY_PATH, exist_ok=True)

        with open(file_path, 'w') as file:
            json_data = _fetch_json_data(endpoint)
            json.dump(json_data, file, indent=2)
        
        return json_data['data']

    with open(file_path, 'r') as file:
        skins = json.load(file)

    if skins['data'] and datetime.now() - datetime.fromisoformat(skins['fetchedOn']) <= timedelta(days=1):
        return skins['data']
    
    json_data = _fetch_json_data('skins')

    with open(file_path, 'w') as file:
        json.dump(json_data, file, indent=2)
    
    return json_data['data']

def get_shop():
    file_path = os.path.join(REPOSITORY_PATH, 'shop.json')
    endpoint = 'shop'

    if not os.path.exists(file_path):
        os.makedirs(REPOSITORY_PATH, exist_ok=True)

        with open(file_path, 'w') as file:
            json_data = _fetch_json_data(endpoint)
            
            filtered_entries = [entry for entry in json_data['data']['entries'] if 'brItems' in entry]
            json_data['data']['entries'] = filtered_entries

            json.dump(json_data, file, indent=2)
        
        return json_data['data']

    with open(file_path, 'r') as file:
        shop = json.load(file)

    if shop['data'] and datetime.now() - datetime.fromisoformat(shop['fetchedOn']) <= timedelta(days=1):
        return shop['data']
    
    json_data = _fetch_json_data('shop')

    filtered_entries = [entry for entry in json_data['data']['entries'] if 'brItems' in entry]
    json_data['data']['entries'] = filtered_entries

    with open(file_path, 'w') as file:
        json.dump(json_data, file, indent=2)
    
    return json_data['data']