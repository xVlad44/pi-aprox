from typing import Union
import fastapi
import random
app = fastapi.FastAPI()

from fastapi.middleware.cors import CORSMiddleware
import matplotlib.pyplot as plt
import io


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def generatePoints(n:int):
    points = []
    for _ in range (n):
        x = random.uniform(-1,1)
        y = random.uniform(-1,1)
        points.append([x,y])
    return points

def plotPoints(points):
    inside_x, inside_y = [], []
    outside_x, outside_y = [], []

    for x, y in points:
        if x**2 + y**2 <= 1:
            inside_x.append(x)
            inside_y.append(y)
        else:
            outside_x.append(x)
            outside_y.append(y)


    plt.figure(figsize=(6,6))
    plt.scatter(inside_x, inside_y, color='red',label='Inside',s=1)
    plt.scatter(outside_x, outside_y, color='blue',label='Outside',s=1)
    plt.text(0, 0, f'Pi = {4*len(inside_x)/len(points)}', fontsize=18, ha='center')
    plt.gca().set_aspect('equal', adjustable='box')
    plt.xlim(-1,1)
    plt.ylim(-1,1)
    plt.legend()


    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    plt.close()

    return buf

   

@app.get("/")
def read_root():
    return {"message": "World"}

@app.get("/plot")
def get_plot(n:int):
    points = generatePoints(n)
    buf = plotPoints(points)
    return fastapi.responses.StreamingResponse(buf, media_type="image/png")
