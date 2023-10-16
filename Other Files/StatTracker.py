import sys
import ctypes

def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False
        
if is_admin():
  # Do stuff
  print()
  
else:
    # Re-run the program with admin rights
    sys.stdout.write('Not running as admin, relaunching...?\n')
    ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)
    exit(0)

import os
os.system('')
print("Welcome to the Stat Tracker! Setting up File.")


import pandas as pd
import openpyxl
from datetime import date

wb = openpyxl.Workbook()
ws = wb.active

date = str(date.today())

data = [["Date:", date, ], 
["GN", "Winner", "Loser", "Scorer", "W-Streak", "L-Streak", ], 
]

extraData = []

print("File Setup.")
print("Starting program....")

a=""
b=""
c=""
gn = 1
wstreak = 0
lSa = 0
lSb = 0
lSc = 0


def Start() :
    global a
    global b
    global c
    print("Enter starting team. ")
    print("Type \033[0;34m1 for \033[0;34mChoc-Tops")
    print("\033[0;37mType \033[0;31m2 \033[0;37mfor \033[0;31mTraffic Controllers")
    print("\033[0;37mType \033[0;33m3 \033[0;37mfor \033[0;33mGentle Men\033[0;37m")
    starter = int(input("Enter: "))

    if((starter != 1) and (starter != 2) and (starter != 3)) :
        print("That is not an option.")
        Start()
    print()
    print("Enter other team. ")
    print("Type\033[0;34m 1 \033[0;37mfor \033[34m Choc-Tops")
    print("\033[0;37mType \033[0;31m2 \033[0;37mfor \033[0;31mTraffic Controllers")
    print("\033[0;37mType \033[0;33m3 \033[0;37mfor \033[0;33mGentle Men\033[0;37m")
    other = int(input("Enter: "))
    print()

    if((other == starter) or ((other > 3)) or (other < 0)) :
        print("This is not an option.")
        Start()
    
    if starter == 1 :
        a="\033[0;34mChoc-Tops\033[0;37m"
        CT=a
    elif starter == 2 :
        a="\033[0;31mTraffic Controllers\033[0;37m"
    else : a = "\033[0;33mGentle Men\033[0;37m"

    if other == 1 :
        b="\033[0;34mChoc-Tops\033[0;37m"
    elif other == 2 :
        b="\033[0;31mTraffic Controllers\033[0;37m"
    else : b = "\033[0;33mGentle Men\033[0;37m"

    if (a=="\033[0;34mChoc-Tops\033[0;37m" and b=="\033[0;31mTraffic Controllers\033[0;37m") :
        c="\033[0;33mGentle Men\033[0;37m"
    elif (a=="\033[0;34mChoc-Tops\033[0;37m" and b=="\033[0;33mGentle Men\033[0;37m") :
        c="\033[0;31mTraffic Controllers\033[0;37m"
    elif (a=="\033[0;31mTraffic Controllers\033[0;37m" and b=="\033[0;34mChoc-Tops\033[0;37m") :
        c="\033[0;33mGentle Men\033[0;37m"
    elif (a=="\033[0;31mTraffic Controllers\033[0;37m" and b=="\033[0;33mGentle Men\033[0;37m") :
        c="\033[0;34mChoc-Tops\033[0;37m"
    elif (a=="\033[0;33mGentle Men\033[0;37m" and b=="\033[0;34mChoc-Tops\033[0;37m") :
        c="\033[0;31mTraffic Controllers\033[0;37m"
    elif (a=="\033[0;33mGentle Men\033[0;37m" and b=="\033[0;31mTraffic Controllers\033[0;37m") :
        c="\033[0;34mChoc-Tops\033[0;37m"



    print("The starting teams are " + a + " and " + b + " with the bench team being " + c)

    Main()

def TrimColours(text) :
    text = text.replace('\033[0;34m', '')
    text = text.replace('\033[0;33m', '')
    text = text.replace('\033[0;31m', '')
    text = text.replace('\033[0;37m', '')
    return(text)

def Main() :
    global a
    global b
    global c
    global gn
    global wstreak
    global lSa
    global lSb
    global lSc
    print()
    print()
    print()
    winner = ''
    loser = ''

    winN = int(input("Enter 1 if " + a + " won, enter 2 if " + b + " won. "))
    if winN != 1 and winN != 2 : 
        print("This was not an option.") 
        Main()
    else : 
        if winN == 1 :
            winner = a
            loser = b
        else :
            winner = b
            loser = a
        scorer = input("Enter player name that scored ")
        print("\nThe " + winner + " have won against the " + loser + " with \033[4m\033[1;35m" + scorer + "\033[0m winning the game.\n")
        if(winner == a) :
            wstreak += 1
            lSb += 1
            data.append([gn, TrimColours(winner), TrimColours(loser), scorer, wstreak, lSb])
        else :
            wstreak = 1
            lSb = 1
            data.append([gn, TrimColours(winner), TrimColours(loser), scorer, wstreak, lSb])


        savedlsB = lSb
        savedlsC = lSc

        lSc = savedlsB
        lSb = savedlsC
        a = winner
        b = c
        c = loser
        gn += 1

        Backup()

        con = input("Type anything except for abcd to continue: ")
        if con != ("abcd") :
            print()
            print()
            print()
            Main()
        else :
            Export()


        
def Export() :
    print ("Exporting....")
    global data

    for i in data: 
        ws.append(i)

    wb.save(os.path.join('output.xlsx'))

    print("Exported.")
    x = input("Press enter to exit. ")

def Backup() :
    print ("Backing up....")
    global data
    global gn
    for i in data: 
        ws.append(i)

    name = 'DataBackups/' + str(gn) + '.xlsx'
    wb.save(os.path.join('Backup.xlsx'))

    print("Backed up.")

Start()