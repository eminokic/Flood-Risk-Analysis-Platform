FROM continuumio/miniconda3

WORKDIR /app

COPY environment.yml .
RUN conda env create -f environment.yml

RUN conda activate myenv
RUN echo "Make sure flask is installed:"
RUN python -c "import flask"

COPY main.py .
ENTRYPOINT ["python", "main.py"]