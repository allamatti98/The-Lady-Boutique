#STEP 1. Print in the desired format
ID = "Wadas4342"
Q = '5'

print ( "  { 'price' : " + "'"+ ID + "'" + ", 'quantity' : " + Q + "}"     )
print(f" {{ 'price' : '{ID}' , 'quantity' : '{Q}' }} ")

#Step 2 Define a shortcut function to do so

def list(id, quantity):
    print(f" {{ 'price' : '{id}' , 'quantity' : {quantity} }} ")
list("gdfg43534543", 6)