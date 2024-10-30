#Project by Zeynep
# Random imported for user ID's
import random
# Class Person holds name, age, country of origin, a list argument for friends
# This class also holds a function to append more friends
class Person:
    def __init__(self, name, age, origincountry, friends):
        self.name = name
        self.age = age
        self.origincountry = origincountry
        self.friends = []
    def addfriends(self, x):
        self.friends.append(x)
    def clearfriends(self):
        self.friends.clear()
# These are the 5 people object being created
person1 = Person("Jeff", "30", "US", "Bob")
person2 = Person("Pedro", "26", "Mexico", "Amy")
person3 = Person("Fred", "15", "Canada", "Ozwald")
person4 = Person("Annie", "10", "Spain", "Zara")
person5 = Person("Catie", "4", "Lithuania", "Annie")
# additional person object as "me"
me = Person("Zeynep", "14", "Turkiye", "Vicoria")
flist = [person1, person2, person3, person4, person5]
#unfriending a person
in2 = input("Do you want to get rid of a friend?, 1 for yes:  ")
if in2 == "1":
    in1 = int(input("Which friend to get rid of?:\n Type 0 for Jeff, Type 1 for Pedro\n Type 2 for Fred, Type 3 for Annie\n And Type 4 for Cathie "))
    flist.pop(in1)
# Adding the list friends to my list
for i in flist:
    me.addfriends(i.name)
# Now im just appending and writing in the file
with open("brandnew.txt", "w") as file:
    for i in range(len(me.friends)):
        file.write(str(i+1) + " " + f"{me.friends[i]}\n")
