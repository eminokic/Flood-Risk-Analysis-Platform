#!/bin/zsh

set +e
set +x

source ./bin/check_env.sh


if [[ $1 != "install" && $1 != "upgrade" && $1 != "delete" ]]; then
    echo "USAGE: First argument must be install/upgrade/delete"
    echo
    exit 1
fi

if [[ $2 != "dev" && $2 != "stage" && $2 != "prod" ]]; then
    echo "USAGE: Second argument must be dev/stage/prod"
    echo
    exit 1
fi

CHART_DIR=./helm
SECRETS_DIR=./secrets/
VALUES_FILE="$CHART_DIR/values/$2.yaml"
CHART_NAME="ignite-logistics-$2"

if [[ $1 == "install" ]]; then
    echo "Installing $2"
    helm install $CHART_NAME $CHART_DIR --create-namespace --namespace $2 -f $VALUES_FILE \
    --set google.project=$GKE_PROJECT \
    --set-file django.key=$SECRETS_DIR/django-key.txt \
    --set-file django.password=$SECRETS_DIR/email-password.txt \
    --set-file db.password=$SECRETS_DIR/$2-sql-password.txt \
    --set-file google.sa=$SECRETS_DIR/gke-worker.json \
    --set-file google.oauth_id=$SECRETS_DIR/oauth-id.txt \
    --set-file google.oauth_secret=$SECRETS_DIR/oauth-secret.txt \
    $3
    
    
    elif [[ $1 == "upgrade" ]]; then
    echo "Upgrading $2"
    helm upgrade $CHART_NAME $CHART_DIR --namespace $2 -f $VALUES_FILE \
    --set google.project=$GKE_PROJECT \
    --set-file django.key=$SECRETS_DIR/django-key.txt \
    --set-file django.password=$SECRETS_DIR/email-password.txt \
    --set-file db.password=$SECRETS_DIR/$2-sql-password.txt \
    --set-file google.sa=$SECRETS_DIR/gke-worker.json \
    --set-file google.oauth_id=$SECRETS_DIR/oauth-id.txt \
    --set-file google.oauth_secret=$SECRETS_DIR/oauth-secret.txt \
    $3
    
    elif [[ $1 == "delete" ]]; then
    echo "Deleting $2"
    helm delete $CHART_NAME --namespace $2
fi
