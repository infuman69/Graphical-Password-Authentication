import os
import dotenv

# this loads the .env file contents
dotenv.load_dotenv()

# stores the .env file contents in different variables
username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
cluster_name = os.getenv("CLUSTER_NAME")
database = os.getenv("DATABASE")