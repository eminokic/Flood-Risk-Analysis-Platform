# Setting Up Django Project

### Setup virtual environment

virtualenv venv -p python3
source venv/bin/activate

### Install all dependencies

pip install Django
pip3 install djangorestframework
pip install --upgrade google-cloud-bigquery
python -m pip install django-cors-headers

export /your/credentials/

python manage.py runserver