list1 = [1,2,3,4,4]
total = 8

#  using naive methods
# O(n*n)  // time complexity
def naiveMethod(list1, total):

    lenght = len(list1)
    for i in (list1):
        for j in range(i+1,lenght):
            if(i+list1[j]==total):
                print("found")



# using a set
# O(n)   // time complexity
def refractedMethod(list1,total):
    comp = set()
    for i in list1:
        if((i) in comp):
            print("found")
        else:
            comp.add(total-i)


naiveMethod(list1,total)
refractedMethod(list1,total)