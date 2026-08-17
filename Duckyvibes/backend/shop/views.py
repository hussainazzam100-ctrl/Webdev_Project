from django.http import JsonResponse
from django.shortcuts import render
from .models import Product
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect

def home(request):
    products = Product.objects.all()
    return render(request, "shop/home.html", {"products": products})

def product_data(request):
    products = Product.objects.all()

    data = []

    for product in products:
        data.append({
            "id": product.id,
            "name": product.name,
            "category": product.category,
            "price": float(product.price),
            "oldPrice": float(product.oldprice) if product.oldprice is not None else None,
            "image": product.image,
            "description": product.description,
            "specifications": product.specification or []
        })

    return JsonResponse(data, safe=False)

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            return JsonResponse({
                "success": True,
                "message": "Login successful"
            })

        return JsonResponse({
            "success": False,
            "message": "Invalid email or password"
        }, status=401)

    return JsonResponse({
        "success": False,
        "message": "POST request required"
    }, status=405)


def logout_view(request):
    logout(request)

    return JsonResponse({
        "success": True,
        "message": "Logged out"
    })