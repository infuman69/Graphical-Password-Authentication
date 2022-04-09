from fastapi import FastAPI, Response
from models.user import User
from fastapi.middleware.cors import CORSMiddleware


import mongo_loader

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "working"}


@app.post("/signup", status_code=201)
async def signup(response: Response, user: User):
    try:
        db = mongo_loader.get_cluster0()
        users_db = db["Users"]
        print("1ok")
        users_db.insert_one(
            {
                "_id": user.email,
                "username": user.username,
                "password": user.password,
                "first_name": user.first_name,
                "last_name": user.last_name,
            }
        )

        return {"success": True}

    except Exception as e:
        print(e)
        response.status_code = 400
        return {"success": False}


@app.get("/login/{username}/{password}")
async def login(response: Response, username: str, password: str):
    try:
        db = mongo_loader.get_cluster0()
        users_db = db["Users"]

        user_obj = users_db.find_one({"username": username, "password": password})

        if user_obj is None:
            response.status_code = 400
            return {"success": False}

        else:
            return user_obj

    except:
        response.status_code = 400
        return {"success": False}
