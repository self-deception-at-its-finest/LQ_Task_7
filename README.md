## Tech stack

-   [NodeJS](https://nodejs.org/)(version 20 or later)
-   [WDIO](https://webdriver.io/docs/gettingstarted)
  - [Docker](https://www.docker.com/)

## Install
-   Install [NodeJS](https://nodejs.org/)
-   Install [Git](https://git-scm.com/)

Clone this repo:

```bash
git clone https://github.com/self-deception-at-its-finest/LQ_Task_7
```

-   Go to the project folder

```bash
cd LQ_Task_7
```

-   Install dependencies:

```bash
npm i
```
**Run tests in Chrome**
```bash
npm run test:chrome
```
**Run tests in Edge**
```bash
npm run test:edge
```
**Run tests in Firefox**
```bash
npm run test:firefox
```
**Generate report**
```bash
npm run allure:generate
```
**Open report**
```bash
npm run allure:open
```
## Docker

**To build image**
```bash
docker build -t webdriver-tests .
```
**To run image**
```bash
docker run --rm webdriver-tests
```
### CI

When running the `workflow.yml` workflow, the HTML report is deployed to the `test-reports` branch. The GitHub Pages feature is enabled in this branch, and you can view the deployed report by following this [link](https://self-deception-at-its-finest.github.io/LQ_Task_7/).



