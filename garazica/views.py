from django.shortcuts import render, HttpResponse

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def home(request):
    return render(request,"home.html")


def ajax_handler(request):
    print("moze")
    if request.method == 'POST':
        # Handle the POST request
        data = {
            'message': 'This is a response from the Django view!'
        }
        return JsonResponse(data)

    else:
        # Handle other request methods if necessary
        return render(request, 'my_template.html')

def stop(request):
    print("stop")
    if request.method == 'POST':
        # Handle the POST request
        data = {
            'message': 'This is a response from the Django view!, stop'
        }
        return JsonResponse(data)

    else:
        # Handle other request methods if necessary
        return render(request, 'my_template.html') 

def down(request):
    print("down")
    if request.method == 'POST':
        # Handle the POST request
        data = {
            'message': 'This is a response from the Django view!, down'
        }
        return JsonResponse(data)

    else:
        # Handle other request methods if necessary
        return render(request, 'my_template.html')  
