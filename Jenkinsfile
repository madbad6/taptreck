pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
                powershell 'docker run -d -p 80:80 taptreck beer-front-app'
            }
        }
    }
}