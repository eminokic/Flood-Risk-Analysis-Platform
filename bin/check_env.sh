#!/bin/zsh

export GKE_PROJECT="ignite-logistics"

if [[ ! $GKE_PROJECT ]]; then
    echo "Must set GKE_PROJECT in bash env"
    exit 1
fi

