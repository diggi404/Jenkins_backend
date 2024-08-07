pipeline {
    agent { label 'agent1' }

    stages {
        stage('Git Checkout') {
            steps {
                git (url: 'https://github.com/diggi404/Jenkins_backend.git', branch: 'main', poll: 'true')
            }
        }
        
        stage('Build image'){
            steps{
                sh 'docker build -t express_app_img:latest .'
            }
        }
        stage('Remove Old Container'){
            steps{
                sh '''
                container_id=$(docker ps -q --filter "name=express_app")
                if [ -n "$container_id" ]; then
                    docker rm -f $container_id 2>/dev/null
                fi
                '''
            }
            
        }
        stage('Start new container') {
            steps {
                sh 'docker run -dit --name=express_app -e PORT=8080 -p 8080:8080 express_app_img'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
