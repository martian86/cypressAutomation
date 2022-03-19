FROM cypress/included:9.1.1
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./Jenkinsfile .
COPY ./cypress.json .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN ["npm","ci"]
ENTRYPOINT ["./node_modules/.bin/cypress", "run","--spec","cypress/integration/regression/*"]