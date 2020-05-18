#python
# Clase 11-05-2020
# Script básico para conectar a una web con python
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

###
# Clase 11-05-2020
# Script para extraer información de una URL
# URL = http://web.mta.info/developers/turnstile.html (permite conectar cada cierto tiempo)

#pip install bs4 # antes este módulo se llamaba BeautifulSoup
#pip install urllib	# solo en caso de no tenerlo ya

from bs4 import BeautifulSoup as BS # importamos un paquete del módulo
import urllib	# antes se llamaba urlib2
from urllib.request import urlopen # pedimos la función urlopen a la librería


url = 'http://web.mta.info/developers/turnstile.html' # url en variable como string
html = urlopen(url)
# print(html)
soup = BS(html)	#aplicamos beautifulsoup al hrml que hemos obtenido
# print(soup)

elem = soup.find_all('a')	#hallamos todos los a tags
# <a href="link" attrs>Texto visible</a>

for i in range(5):	#bucle para ver los primeros 5 elementos
	print(elem[i])


# Deberes para Semana 18-20/05
# 1. Elegir otra URL (opcional) y mostrar:
# 	a) 5 últimos elementos
# 	b) 5 cualesquiera elementos (aleatorio)
# 	c) todos los elementos ordenados (ej: 1 por línea si es conveniente)
# 2. Hacer lo anterior de estas formas:
# 	a. variables
# 	b. creando una función e invocándola
# 	c. usando métodos disponibles en Python (cualesquiera convenientes)

#Script para listar los tags a de una URL

from urllib.request import urlopen
import re

html = urlopen("http://kite.com")
text = html.read()
plaintext = text.decode('utf8')
links = re.findall("href=[\"\'](.*?)[\"\']", plaintext)
links[:5] 