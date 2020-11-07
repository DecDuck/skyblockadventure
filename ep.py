import pytesseract

pytesseract.pytesseract.tesseract_cmd = 'C:/Users/decla/AppData/Local/Tesseract-OCR/tesseract.exe'

word = pytesseract.image_to_string('C:/Users/decla/Documents/PythonServer/save.png')
words = word.split("\n")
for i in range(0, len(words)):
    try:
        if words[i] == '' or words[i] == " ":
            del words[i]
    except IndexError:
        pass
print(word)

list1 = words[:int(len(words)/2)]
list2 = words[int(len(words)/2):]

for i in range(0, len(list1)):
    if ";" in list1[i]:
        list1[i] = list1[i].split(";")[0].lower()

for i in range(0, len(list2)):
    if ";" in list2[i]:
        list2[i] = list2[i].split(";")[0].lower()

linkedWords = {}
for i in range(0, int(len(words)/2)):
    linkedWords.update({ list1[i] : list2[i] })

print(linkedWords)