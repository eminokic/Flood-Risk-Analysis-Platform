#!/bin/zsh

set +e
set +x

source ./bin/check_env.sh

gcloud config set project $GKE_PROJECT

if [[ $1 != "get" && $1 != "init" && $1 != "push" && $1 != "delete" ]]; then
    echo "USAGE: First argument must be get/init/push/delete"
    echo
    exit 1
fi


if [[ $1 == "delete" ]]; then
    echo "Are you sure you want to delete all $INFRA_LIFECYCLE secrets?"
    read answer
    
    if [[ $answer != "yes" ]] && [[ $answer != "y" ]]; then
        exit 1
    fi
fi

SECRETS_DIR="./secrets/$INFRA_LIFECYCLE"

if [[ ! -d $SECRETS_DIR ]]; then
    mkdir -p $SECRETS_DIR/
    
    touch $SECRETS_DIR/django-key.txt
    echo "$LIFECYCLE-fake-django-key" > $SECRETS_DIR/django-key.txt
    
    touch $SECRETS_DIR/email-password.txt
    echo "$LIFECYCLE-fake-email-password" > $SECRETS_DIR/email-password.txt
    
    touch $SECRETS_DIR/dev-sql-password.txt
    echo "$LIFECYCLE-fake-dev-sql-password" > $SECRETS_DIR/dev-sql-password.txt
    
    touch $SECRETS_DIR/stage-sql-password.txt
    echo "$LIFECYCLE-fake-stage-sql-password" > $SECRETS_DIR/stage-sql-password.txt
    
    touch $SECRETS_DIR/prod-sql-password.txt
    echo "$LIFECYCLE-fake-prod-sql-password" > $SECRETS_DIR/prod-sql-password.txt
    
    touch $SECRETS_DIR/master-sql-password.txt
    echo "$LIFECYCLE-fake-master-sql-password" > $SECRETS_DIR/master-sql-password.txt
    
    touch $SECRETS_DIR/gke-worker.json
    echo "$LIFECYCLE-fake-gke-worker" > $SECRETS_DIR/gke-worker.json
    
    touch $SECRETS_DIR/oauth-id.txt
    echo "$LIFECYCLE-fake-oauth-id" > $SECRETS_DIR/oauth-id.txt
    
    touch $SECRETS_DIR/oauth-secret.txt
    echo "$LIFECYCLE-fake-oauth-secret" > $SECRETS_DIR/oauth-secret.txt
fi

for FILE in `ls $SECRETS_DIR`; do
    
    name=${FILE%%.*}
    
    if [[ $1 == "get" ]]; then
        echo "Accessing secret $name"
        gcloud secrets versions access "latest" --secret $name > $SECRETS_DIR/$FILE
        
        elif [[ $1 == "init" ]]; then
        gcloud beta secrets create $name \
        --replication-policy="user-managed" \
        --data-file=$SECRETS_DIR/$FILE \
        --locations=$REGION
        
        elif [[ $1 == "push" ]]; then
        gcloud secrets versions add $name \
        --data-file=$SECRETS_DIR/$FILE
        
        elif [[ $1 == "delete" ]]; then
        touch /tmp/yes.txt
        echo 'y' > /tmp/yes.txt
        gcloud secrets delete $name < /tmp/yes.txt
    fi
done

