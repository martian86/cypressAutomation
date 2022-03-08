pipeline{
  agent any
  parameters{
    choice(name:'scriptName', ['regressiontest','firstTestCase','recordDashboardTest','doubleDataBindingTest', 'multipleTests'])
  }

  stages{
    stage('Build'){
      steps{
        echo 'Building the project'
      }
    }
    stage('Test'){
      steps{
        bat 'npm run multipleTests'
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