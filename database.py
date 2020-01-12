import pymongo
import time
client = pymongo.MongoClient(host="localhost",port=27017)
db = client["zhibu"]
collection = db["records"]

def insert_db(result):
    struct_time = time.localtime()
    date = time.strftime("%Y-%m-%d", struct_time)
    time_ = time.strftime("%H:%M:%S", struct_time)
    record = {"date":date,"time":time_,"result":result}
    collection.insert_one(record)