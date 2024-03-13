
import mysql.connector
import json

con = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="Jemil@123",
    database="karka"
)

cursor = con.cursor(dictionary=True)
query = "select name, place from students limit 5"
cursor.execute(query)
result =cursor.fetchall()

print(result)



myDict = [{'name': a['name'], 'place': a['place']} for a in result]
print(myDict)




# print(this)
# print (type(a))

# json=json.dumps(this)
# print(json)
# print (type(json))