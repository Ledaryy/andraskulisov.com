/*
 * Author: Andrew Kulishov <support@andrewkulishov.com>
 * Copyright (C) 2022 Andrew Kulishov - All Rights Reserved
 * 
 * Created on Sat Jun 04 2022
 * 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * 
 * If there are any issues contact me on the email above.
 */


# Start
sudo bash deploy.sh

# Image cleanup
sudo docker image ls -a
sudo docker image prune -a -f

# Port cleanup
sudo lsof -i tcp:80 -s tcp:listen
sudo lsof -t -i tcp:80 -s tcp:listen | sudo xargs kill