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
                bat 'docker rm taptreck'
                bat 'docker rmi images -f beer-front-app'
                bat 'docker build -t beer-front-app .'
                bat 'docker run -d -p 80:80 --name taptreck beer-front-app'
            }
        }
    }
}