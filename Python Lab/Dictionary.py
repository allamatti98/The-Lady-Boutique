details = {
    "name": "Alex Hunter",
    "age": "23",
    "single": "True"
}
print (details["single"])
words = {
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Three",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
}
contact = input("Kindly enter your conatact: ")
output = ""
for no in contact:
    #Method 1
    print(words.get(no))
    #Method 2
    output += words.get(no) + " "
print(output)