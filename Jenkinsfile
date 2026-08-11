pipeline {
  agent any

  // Lazy default: checks the repo for changes every 5 min and builds if anything changed
  // (a new Products/*.md counts as "anything changed"). Swap for a GitHub/GitLab webhook
  // trigger instead if Jenkins is reachable from your git host — that builds on push,
  // no polling delay.
  triggers {
    pollSCM('H/5 * * * *')
  }

  stages {
    stage('Install') {
      steps {
        dir('site') {
          sh 'npm ci'
        }
      }
    }

    stage('Build') {
      steps {
        dir('site') {
          sh 'npm run build'
        }
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts artifacts: 'site/dist/**', fingerprint: true
      }
    }
  }
}
