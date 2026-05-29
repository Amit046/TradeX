# 1. ATM Machine Simulation + Login System

username = "admin"
password = "1234"
balance = 10000

u = input("Enter username: ")
p = input("Enter password: ")

if u == username and p == password:
    print("Login Successful")

    while True:
        print("\n1.Check Balance")
        print("2.Deposit")
        print("3.Withdraw")
        print("4.Exit")

        choice = int(input("Enter choice: "))

        if choice == 1:
            print("Balance =", balance)

        elif choice == 2:
            amount = int(input("Enter deposit amount: "))
            balance += amount
            print("Updated Balance =", balance)

        elif choice == 3:
            amount = int(input("Enter withdraw amount: "))
            if amount <= balance:
                balance -= amount
                print("Updated Balance =", balance)
            else:
                print("Insufficient Balance")

        elif choice == 4:
            print("Thank You")
            break

        else:
            print("Invalid Choice")

else:
    print("Invalid Username or Password")


# 2. Determine Child, Teenager, Adult

age = int(input("\nEnter age: "))

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
else:
    print("Adult")


# 3. Check number divisible by 5 and 11

num = int(input("\nEnter number: "))

if num % 5 == 0 and num % 11 == 0:
    print("Divisible by both 5 and 11")
else:
    print("Not divisible by both")


# 4. Check whether number is 3 digit

num = int(input("\nEnter number: "))

if 100 <= num <= 999:
    print("3-digit number")
else:
    print("Not a 3-digit number")


# 5. Check vowel or consonant

ch = input("\nEnter character: ")

if ch in "aeiouAEIOU":
    print("Vowel")
else:
    print("Consonant")


# 6. Check Positive, Negative or Zero

num = int(input("\nEnter number: "))

if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")