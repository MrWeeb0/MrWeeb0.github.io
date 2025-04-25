from pydantic import BaseModel, EmailStr
from typing import Optional, List

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class ProgressCreate(BaseModel):
    topic: str
    lesson: str
    completed: bool

class ProgressResponse(BaseModel):
    id: int
    user_id: int
    topic: str
    lesson: str
    completed: bool

    class Config:
        from_attributes = True

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True