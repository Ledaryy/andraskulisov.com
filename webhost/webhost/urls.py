#
# Author: Andrew Kulishov <support@andrewkulishov.com>
# Copyright (C) 2022 Andrew Kulishov - All Rights Reserved
#
# Created on Fri Jun 03 2022
#
# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and confidential
#
# If there are any issues contact me on the email above.
#


from django.contrib import admin
from django.urls import path, include

from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("portfolio.urls")),
    path(
        "favicon.ico",
        RedirectView.as_view(url=staticfiles_storage.url("static/img/favicon.ico")),
    ),
]
