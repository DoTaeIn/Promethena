pipeline {
  agent any

  environment {
    NODE_VERSION = 'v22.12.0'
    NODE_RUNTIME = "${WORKSPACE}/.node-runtime"
    IMAGE_NAME = 'promethena-site'
    CONTAINER_NAME = 'promethena-site'
    HOST_PORT = '31003'
  }

  // GitHub webhook을 연결하면 이 블록은 제거하고 webhook trigger를 사용한다.
  // 그전까지는 새 Products/*.md 커밋을 최대 5분 안에 감지한다.
  triggers {
    pollSCM('H/5 * * * *')
  }

  stages {
    stage('Setup Node') {
      steps {
        sh '''#!/bin/sh
          set -eu

          if [ -x "$NODE_RUNTIME/bin/node" ]; then
            "$NODE_RUNTIME/bin/node" --version
            exit 0
          fi

          case "$(uname -m)" in
            x86_64) NODE_ARCH='x64' ;;
            aarch64|arm64) NODE_ARCH='arm64' ;;
            *) echo "Unsupported CPU architecture: $(uname -m)" >&2; exit 1 ;;
          esac

          rm -rf "$NODE_RUNTIME"
          mkdir -p "$NODE_RUNTIME"
          curl -fsSL "https://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-$NODE_ARCH.tar.xz" \
            | tar -xJ --strip-components=1 -C "$NODE_RUNTIME"
          "$NODE_RUNTIME/bin/node" --version
          "$NODE_RUNTIME/bin/npm" --version
        '''
      }
    }

    stage('Install') {
      steps {
        dir('site') {
          sh '''#!/bin/sh
            set -eu
            export PATH="$NODE_RUNTIME/bin:$PATH"
            npm ci
          '''
        }
      }
    }

    stage('Build') {
      steps {
        dir('site') {
          sh '''#!/bin/sh
            set -eu
            export PATH="$NODE_RUNTIME/bin:$PATH"
            npm run build
            test -f dist/index.html
          '''
        }
      }
    }

    stage('Docker Build') {
      steps {
        sh '''#!/bin/sh
          set -eu
          docker build --pull \
            --tag "$IMAGE_NAME:$BUILD_NUMBER" \
            --tag "$IMAGE_NAME:latest" \
            .
        '''
      }
    }

    stage('Deploy') {
      steps {
        sh '''#!/bin/sh
          set -eu
          docker rm -f "$CONTAINER_NAME" 2>/dev/null || true
          docker run -d \
            --name "$CONTAINER_NAME" \
            --restart always \
            --publish "$HOST_PORT:80" \
            "$IMAGE_NAME:$BUILD_NUMBER"
        '''
      }
    }
  }

  post {
    success {
      archiveArtifacts artifacts: 'site/dist/**', fingerprint: true
    }
  }
}
