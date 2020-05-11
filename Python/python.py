#python
#Script básico para conectar a una web con python
import requests
url = 'https://www.idealista.com/alquiler-habitacion/madrid/centro/mapa'
response = requests.get(url)
response
# error 403 = Forbidden / Prohibido
url = 'http://web.mta.info/developers/turnstyle.html'
response = requests.get(url)
response
# response 200 = Success / Conexión con éxito
#Google
url = 'https://www.google.es'
response = requests.get(url)
response
#etc.

#Cuando hay conexión:
print(response.text) #sale todo el HTML que hayas encontrado en la URL