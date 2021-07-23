#!/bin/zsh


source ./bin/check_env.sh

gcloud config set project $GKE_PROJECT

if [[ $1 != "create" && $1 != "delete" && $1 != "reset" ]]; then
    echo "USAGE: First argument must be create/delete/reset"
    echo
    exit 1
fi

BUILD_CONFIG="build.yaml"
REPO="walkerignite-app"
REPO_OWNER="MavenWave-DevOps"

create_triggers () {
    
    gcloud beta builds triggers create github \
    --name $1-cicd \
    --build-config $BUILD_CONFIG \
    --branch-pattern $2 \
    --repo-name $REPO \
    --repo-owner $REPO_OWNER \
    --substitutions _CLUSTER=$CLUSTER,_ENV=$LIFECYCLE,_APP_ENV=$1,_ZONE=$ZONE
    
}

delete_triggers () {
    touch /tmp/yes.txt
    echo 'y' > /tmp/yes.txt
    gcloud beta builds triggers delete $1-cicd < /tmp/yes.txt
    
}

init () {
    create_triggers dev dev
    create_triggers stage stage
    create_triggers prod master
}

destroy () {
    delete_triggers dev
    delete_triggers stage
    delete_triggers prod
}

if [[ $1 == "create" ]]; then
    init
    elif [[ $1 == "delete" ]]; then
    destroy
    elif [[ $1 == "reset" ]]; then
    destroy
    init
fi


