import env_config
from pymongo import MongoClient
import sys


# function to get the cluster instance
def get_cluster0():
    CONNECTION_STRING = (
        "mongodb+srv://"
        + env_config.username
        + ":"
        + env_config.password
        + "@"
        + env_config.cluster_name
        + ".mongodb.net/"
        + env_config.database
        + "?retryWrites=true&w=majority"
    )

    client = MongoClient(CONNECTION_STRING)
    
    db = client["GraphicalAuth"]
    print("ok")

    return db


if __name__ == "__main__":
    dbname = get_cluster0()