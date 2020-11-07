import tkinter as tk
from tkinter import ttk

def topiglatin(text):
    words = text.lower().split(" ")
    output = ""
    for word in words:
        if(word[0] in "aeiou"):
            output = output + (word + "yay") + " "
        else:
            output = output + (word[1:] + word[0] + "ay") + " "
    return output
def frompiglatin(text):
    words = text.lower().split(" ")
    output = ""
    for word in words:
        removedWord = word[:-2]
        if(removedWord[:1] == "y"):
            output = output + removedWord[:-1] + " "
            print("Ends in y")
        else:
            removedWord = setcharinstring(0, removedWord[-1], " " + removedWord)
            removedWord = removedWord[:-1]
            output = output + removedWord + " "
    return output
def handleButtonOutputTo():
    #outputTextTo.delete(0, 'end')
    outputTextTo.insert(0, "Output: " + topiglatin(inputTextTo.get()))
    outputTextTo.update()
    window.update()
def handleButtonOutputFrom():
    outputTextFrom.config(text="Output: " + frompiglatin(inputTextFrom.get()))
    outputTextFrom.update()
    window.update()
def setcharinstring(location, replace, string):
    s = list(string)
    s[location] = replace
    return "".join(s)

window = tk.Tk()
window.title("Pig Latin Converter")
window.geometry("300x200")

icon = tk.PhotoImage(file="piglatin.gif")
window.iconphoto(False, icon)

tabController = ttk.Notebook(master=window)



backTo = tk.Frame()
backTo.pack_propagate(0)
backTo.pack()
titleTo = tk.Label(master=backTo, text="To Pig Latin Converter! \n By decduck3")
titleTo.pack()
tabController.add(backTo, text="To")
inputTextTo = tk.Entry(master=backTo)
inputTextTo.pack()
outputTextTo = tk.Entry(master=backTo)
outputTextTo.insert(0, "Output: ")
outputTextTo.pack()
outputTextTo.config(state="readonly")
convertButtonTo = tk.Button(master=backTo, text="Convert", command=handleButtonOutputTo)
convertButtonTo.pack()

backFrom = tk.Frame()
backFrom.pack_propagate(0)
backFrom.pack()
titleFrom = tk.Label(master=backFrom, text="From Pig Latin Converter! \n By decduck3")
titleFrom.pack()
tabController.add(backFrom, text="From")
inputTextFrom = tk.Entry(master=backFrom)
inputTextFrom.pack()
outputTextFrom = tk.Label(master=backFrom, text="Output: ")
outputTextFrom.pack()
convertButtonFrom = tk.Button(master=backFrom, text="Convert", command=handleButtonOutputFrom)
convertButtonFrom.pack()



tabController.pack(fill=tk.BOTH, expand=1)

window.mainloop()

   