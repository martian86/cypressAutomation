FROM cypress/included:9.1.1
RUN mkdir my-cypress-project
# RUN mkdir /my-cypress-project    #This also works
# There can be number of RUN and COPY commands in a docker file
# RUN Command always runs when a container is executed.
WORKDIR /my-cypress-project

# In COPY Command, the first '.' means current directory and second '.'means working directory
# COPY ./Jenkinsfile .      #This also works
COPY ["./Jenkinsfile","."]
COPY ./cypress.json .
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN ["npm","ci"]
# Either you can put an ENTRYPOINT Command followed by CMD or you can use only CMD
# If you use ENTRYPOINT, then CMD is used to provide arguments to ENTRYPOINT
# If there are multiple ENTRYPOINT commands, only the last one is considered
# If there are multiple CMD commands, only the last one is considered
#ENTRYPOINT ["./node_modules/.bin/cypress", "run","--spec","cypress/integration/regression/*"]
ENTRYPOINT ["npx","cypress","run"]
CMD ["--spec","cypress/integration/PageObjectsModelTest.js"]