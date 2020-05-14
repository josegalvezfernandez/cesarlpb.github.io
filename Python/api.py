# API
#Apikey: zv3u0zzhv10ojbnnrzm1rhc4rnxpjcv5
#Secret: L4z1zpuu1LKH
#Access is free to a maximum of 100 req/month and 
#it’s limited by 1 req/sec. If you need to perform a greater number of requests, 
#let us know.
def get_oauth_token():
	http_obj = Http()
	url = "https://api.idealista.com/oauth/token"
	apikey= urllib.parse.quote_plus('zv3u0zzhv10ojbnnrzm1rhc4rnxpjcv5')
	secret= urllib.parse.quote_plus('L4z1zpuu1LKH')
	auth = base64.encode(apikey + ':' + secret)
	body = {'grant_type':'client_credentials'}
	headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8','Authorization' : 'Basic ' + auth}
	resp, content = http_obj.request(url,method='POST',headers=headers, body=urllib.parse.urlencode(body))
	return content
get_oauth_token()