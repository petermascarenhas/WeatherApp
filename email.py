import pymongo
from pymongo import MongoClient


def main():
    uri = 'mongodb://peter:peter@ds251287.mlab.com:51287/subscribers'
    client = MongoClient(uri, connectTimeoutMS=30000)
    db=client.subscribers.subscribers

    records= db.find()
    for r in records:
        print r['email']



if __name__ == "__main__":
    main()