def GetValue(hand, table):

    #Royal Flush
    pass

class Card:

    suit = "A"
    number = 0

    def __init__(self, suit, number):
        self.suit = suit
        self.number = number
    def getRead(self):
        suitString = ""
        numberString = ""
        if(suit == "S"):
            suitString = " of Spades"
        if(suit == "C"):
            suitString = " of Clubs"
        if(suit == "H"):
            suitString = " of Hearts"
        if(suit == "D"):
            suitString = " of Diamonds"
        if(number == 0):
            numberString = "Ace"
        if(numberString == 11):
            numberString = "Jack"
        if(numberString == 12):
            numberString = "Queen"
        if(numberString == 13):
            numberString = "King"
        return numberString + suitString
    def getID(self):
        return suit + number
