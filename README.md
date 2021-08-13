# Ignite SCI Project
This is the repository for Ignite logistics project regarding the business case. 

## Setting Up Repository (Example)
git clone https://github.com/eminokic/ignite-sci-project.git ignite-sci-project-eminokic 

cd ignite-sci-project-eminokic

git remote add upstream https://github.com/ignite-sci-project/ignite-sci-project

### Checking out a Branch

git checkout -b given-branch-name                                        

## Setting Up Project

Download the Node.js package manager (lts version 14.17.3).

Load project into visual studio code.

npm install packages if the npm package manager does not appear, and run npm start once ready.

## Setting Up Project (backend)

virtualenv venv -p python3
source venv/bin/activate

pip install Django
pip3 install djangorestframework
pip install --upgrade google-cloud-bigquery

python manage.py runserver

## Docker

The software will be containerized via Docker for better VM utilization on GCP.
The frontend as well as the backend projects will be containerized as their own projects.

## Terraform