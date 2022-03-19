FROM cypress/included:9.1.1
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./Jenkinsfile .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN ["npx","cypress","run"]
ENTRYPOINT ["--spec","cypress/integration/regression/*"]