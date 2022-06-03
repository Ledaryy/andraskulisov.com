#!/bin/bash
#
# Author: Andrew Kulishov <support@andrewkulishov.com>
# Copyright (C) 2022 Andrew Kulishov - All Rights Reserved
# 
# Created on Sun May 29 2022
# 
# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and confidential
# 
# If there are any issues contact me on the email above.
#


echo "Deploying to the production environment"

echo "Removing old containers"
sudo docker-compose -f ./compose/docker-compose.prod.yml down -v &&

echo "Updating the code"
sudo git pull &&

echo "Clearing the old images"
sudo docker image prune -a -f &&

echo "Clearing the port 80"
sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill

echo "Building new containers and starting them"
sudo docker-compose -f ./compose/docker-compose.prod.yml up --build &&
echo "Done"