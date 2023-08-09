### Parthean Interview

Pre-requisites:

Make sure you have Docker installed and running as well as Node and Expo Installed.

## Backend

The backend portion of the assignment is very simple to get started. Simple navigate to the backend directory and run

```
docker compose up
```
  Our service will be running on localhost:80/sharpe

  
   This will start the docker containers that run the server. One is an nginx reverse proxy to help handle traffic and add a layer of protection if we want to deploy our backend in a production environment. The second container is our actual server that calculates the sharpe ratio. It has a single endpoint /sharpe and this allows us to calculate the sharp ratio of a portfolio. 
   
   The GET REQUEST takes in the stock ticker as a key, and the number of shares in the portfolio as the corresponding value. You can then specify the duration of investment using years as a key and the number of years as the value, the default if not specified is 5 years. An example request is below

```
curl --location --request GET 'localhost:80/sharpe?AAPL=3&GOOG=5&MSFT=5&years=4' 
```
