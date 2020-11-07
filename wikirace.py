import wikipedia

pageOneText = input("Page one: ")
pageTwoText = input("Page two: ")

pageOne = wikipedia.page(pageOneText)
pageTwo = wikipedia.page(pageTwoText)

def GetAllPages(page):
    returnList = []
    for i in range(len(page.links)):
        returnList.append(page.links[i])
    return returnList
def GetNumOfSameElements(list1, list2, limit):
    returnInt = 0
    for i in range(len(list1)):
        if len(list1[i]) > limit:
            returnInt += list2.count(list1[i])
    return returnInt
def GetNumOfElement(list1, element, limit):
    returnInt = 0
    for i in range(len(list1)):
        if len(list1[i]) > limit:
            returnInt += 1
    return returnInt

currentPage = pageOne
linksToExplore = []

while(currentPage != pageTwo):
    pageLinks = GetAllPages(currentPage)
    pageValue = []

    highestTotal = 0
    indexOfTotal = 0

    for i in range(len(pageLinks)):
        try:
            pageValue.append(GetNumOfSameElements(wikipedia.page(pageLinks[i]).content.split(" "), pageTwo.content.split(" "), 2))
        except:
            pass
        print(pageValue[len(pageValue)-1])
    for i in range(len(pageValue)):
        if(pageValue[i] > highestTotal):
            highestTotal = pageValue[i]
            indexOfTotal = i
    
    currentPage = wikipedia.page(pageLinks[indexOfTotal])
    print("New page")
print("DONE")
    
