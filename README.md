## Frontend


### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/rsharkey-dev/parthean_interview/.git
cd parthean_interview/frontennd
```

2. Install the required packages listed in `package-lock.json`:

```bash
npm install
```

### Running the Application

1. Start the Expo development server:

```bash
npx expo start
```

2. Launch the iPhone simulator by pressing 'i' in the terminal

3. The application will open in the simulator, allowing you to interact with it as if you were using a real iPhone device.




## Backend

This application provides a Dockerized environment for calculating the Sharpe ratio for a portfolio of stocks. It consists of two Docker containers: one running an Nginx web server and the other hosting a Node.js application. The Node.js application exposes an API endpoint `/sharpe` to generate a Sharpe ratio based on input stock data.

### Prerequisites

Before you begin, make sure you have Docker and Docker Compose installed on your system.

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Getting Started

To run the Sharpe Ratio Calculator application, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/rsharkey-dev/parthean_interview/.git
cd parthean_interview/backend
```

2. Build and start the Docker containers using Docker Compose:

```bash
docker-compose up --build
```

This command will create and run the Nginx and Node.js containers, and you'll be able to access the application at `http://localhost:80`.

### Usage

The application provides a single API endpoint to calculate the Sharpe ratio for a given portfolio of stocks. You can make requests to the `/sharpe` endpoint using tools like `curl` or a web browser.

Example `curl` request:

```bash
curl --location --request GET 'http://localhost:80/sharpe?AAPL=3&GOOG=5&MSFT=5&years=4'
```

Replace the stock symbols (`AAPL`, `GOOG`, `MSFT`) and share quantities with your own data. The `years` parameter represents the number of years for which you want to calculate the Sharpe ratio.

### Nginx Container

The Nginx container serves as a reverse proxy for the Node.js application. It handles incoming requests and forwards them to the Node.js server. This setup provides an additional layer of security and load balancing.

### Node.js Application

The Node.js application calculates the Sharpe ratio based on the provided stock data. It exposes the `/sharpe` endpoint and handles incoming requests, returning the calculated Sharpe ratio.

### Cleaning Up

To stop and remove the Docker containers, run:

```bash
docker-compose down
```
