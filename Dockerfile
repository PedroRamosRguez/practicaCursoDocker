FROM ubuntu:17.10
RUN apt-get update && \
apt-get install -y python3-pip
ADD . /django-app
WORKDIR /django-app
RUN pip3 install -r requirements.txt