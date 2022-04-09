from pydantic import BaseModel, Field


class User(BaseModel):
    email: str = Field(...)
    first_name: str = Field(...)
    last_name: str = Field(...)
    username: str = Field(...)
    password: list[int] = Field(...)

    class Config:
        arbitrary_types_allowed = True