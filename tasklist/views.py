from django import forms
from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.urls.base import reverse



# Create your views here.

class NewTasklistForm(forms.Form):
    task = forms.CharField(label="New Task")


def index(request):
    if "tasklist" not in request.session:
        request.session["tasklist"] = []
    return render(request, "tasklist/index.html", {
        "tasklist": request.session["tasklist"]
    })

def add(request):
    if request.method == "POST":
        form = NewTasklistForm(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task"]
            request.session["tasklist"] += [task]
            return HttpResponseRedirect(reverse("tasklist:index"))
        else:
            return render(request, "tasklist/add_task.html", {
                "form": form
            })
    return render(request, "tasklist/add_task.html", {
        "form": NewTasklistForm()
    })