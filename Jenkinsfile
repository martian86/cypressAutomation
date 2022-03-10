pipeline{
  agent any

  stages{
    stage('Build'){
      steps{
        echo 'Building the project'
      }
    }
    stage('Test'){
      steps{
        bat "docker run -v \"%cd%\":\"/e2e\" -w /e2e cypress/included:9.1.1 --spec cypress/integration/firstTestCase.js"
      }
    }
    stage('Deploy'){
      steps{
        echo 'Deploying the application'
      }
    }
  }
  post{
    success{
      echo 'Execution is successful. Jai Shri Ram!'
    }
  }
}