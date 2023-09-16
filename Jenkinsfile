pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

         stage('clean container') {
              steps {
                     bat 'docker container taptreck'
                     bat 'docker rm taptreck'
                     bat 'docker rmi images -f beer-front-app'
              }
            }

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                powershell 'docker build -t beer-front-app .'
                powershell 'docker run -d -p 80:80 --name taptreck beer-front-app'
            }
        }
    }
}