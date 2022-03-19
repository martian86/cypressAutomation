FROM cypress/browsers:node16.5.0-chrome94-ff93
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./Jenkinsfile .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN ["npm","ci"]
ENTRYPOINT ["./node_modules/.bin/cypress", "run","--spec","cypress/integration/regression/*"]