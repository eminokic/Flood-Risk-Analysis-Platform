#!/bin/zsh

ZONE="us-central1-a"
CLUSTER="cluster-1"

source ./bin/check_env.sh

gcloud config set project $GKE_PROJECT


echo
gcloud container clusters get-credentials --zone=$ZONE $CLUSTER
kubectl config set-context --current --namespace dev
echo
