#type a 2d list.
#print out individual row then some numbers then all numbers
#change some values in the list.
numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
print(numbers[0])
print(numbers[1][1])
numbers[2][2] = 2
print(numbers[2])
print(numbers)

matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for list in matrix:
    for no in list:
        print (no)


print(matrix)
for row in matrix:
    for number in row:
        print(number)
matrix[1][1] = 0
for row in matrix:
    print (row)
numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for list in numbers:
    for nos in list:
        print(nos)
print (numbers)
for list in numbers:
    print(list)
numbers[0][1]= 0
print(numbers)