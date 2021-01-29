from django.shortcuts import render
import datetime

# Create your views here.
date = datetime.datetime.now()
def index(request):
    return render(request, "newyear/index.html", {
        "date": date.month == 1 and date.day == 1
    })