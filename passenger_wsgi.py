# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u1074205/data/www/ledary.com/backend')
sys.path.insert(1, '/var/www/u1074205/data/djangoenv/lib/python3.9/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()