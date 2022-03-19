pipeline{
  agent any

  parameters{
    choice(name:'scriptName', choices:['pageObjectsTest','regressiontest','firstTestCase','dockerTests'])
  }

  stages{
    stage('Build'){
      steps{
        echo 'Building the project'
        sh 'docker build -t my-cypress-image:1.1.0'
      }
    }
    stage('Test'){
      steps{
        sh 'docker run my-cypress-image:1.1.0'
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