FROM python:3.7-slim
ENV PYTHONUNBUFFERED 1

RUN mkdir /backend
RUN mkdir -p /backend/accounts/migrations
RUN mkdir -p /backend/posts/migrations

RUN touch /backend/accounts/migrations/__init__.py
RUN touch /backend/posts/migrations/__init__.py

WORKDIR /backend
EXPOSE 8000

COPY . /backend/
RUN pip3 --no-cache-dir install -r requirements.txt

CMD ["gunicorn", "-b", "0.0.0.0:8000", "project-config.wsgi"]