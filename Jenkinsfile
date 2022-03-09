pipeline{
  agent{
    docker {image 'cypress/included:9.1.1'}
  }

  stages{
    stage('Build'){
      steps{
        echo 'Building the project'
      }
    }
    stage('Test'){
      steps{
        bat "npm run firstTestCase"
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