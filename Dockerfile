FROM node:20-slim

RUN apt-get update && apt-get install -y wget gnupg ca-certificates unzip \
 && wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
 && apt install -y ./google-chrome-stable_current_amd64.deb \
 && rm google-chrome-stable_current_amd64.deb

RUN npm install -g allure-commandline --save-dev

WORKDIR /usr/src/app

RUN rm -rf allure-results allure-report

COPY package*.json ./
RUN npm ci

COPY . .

RUN rm -rf allure-results allure-report

ENV BASE_URL="https://telnyx.com"

CMD ["sh", "-c", "rm -rf allure-results allure-report && npm run test"]