import urllib.request, urllib.error, urllib.parse
url = "https://en.wikipedia.org/wiki/Lou_Taylor_Pucci"
response = urllib.request.urlopen(url)
with open("wiki.html","w") as f:
  f.write(str(response.read()))