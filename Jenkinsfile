pipeline{
  agent any

  stages{
    stage('Build'){
      steps{
        echo 'Building the project'
        bat 'docker build -t my-cypress-image:1.1.0'
      }
    }
    stage('Test'){
      steps{
        bat 'docker run my-cypress-image:1.1.0'
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