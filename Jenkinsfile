pipeline{
  agent any
  parameters{
    choice(name:'scriptName', choices: ['regressiontest','firstTestCase','recordDashboardTest','doubleDataBindingTest', 'multipleTests'],description:'Choices for running the different tests')
  }

  stages{
    stage('Build'){
      steps{
        echo 'Building the project'
      }
    }
    stage('Test'){
      steps{
        bat "npm run ${scriptName}"
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