# Pi Approximation App

## Description
This app approximates the value of Pi using the Monte Carlo method by generating random points inside a square and checking how many fall within a circle inscribed in the square. The ratio of points inside the circle to the total points is used to estimate Pi.

## How It Works
The app generates random points in a 2D plane and checks whether each point falls inside the circle. It then uses the formula: Pi ≈ 4 * (points inside the circle / total points)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/xVlad44/pi-aprox.git
    ```

2. Install the required dependencies for the server and client:
   ```bash
   pip install -r requirements.txt 
   ```

   ```bash
    cd client
    npm install
    ```
3. Run the app:
    ```bash
    fastapi run server.py
    ```
    
    ```bash
     cd client
     npm run dev
     ```

## Live Demo
You can access a live demo of the app [here](https://xvlad44.github.io/pi-aprox-demo/).











