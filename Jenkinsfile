node {
    stage('Checkout SCM'){
        git branch: 'main' , url: 'https://github.com/divyangi-affine/post-app-1.git'
    }

    stage('Installing node modules'){
        sh "npm install"
    }

    stage('Build'){
        sh "ng build --prod"
    }
    stage('Deploy'){
        sh "pm2 restart all"
    }
}