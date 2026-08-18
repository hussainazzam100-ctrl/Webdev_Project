import json
from django.http import JsonResponse
from django.shortcuts import render
from .models import Product


from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect

from django.contrib.auth.decorators import user_passes_test
from django.views.decorators.http import require_http_methods

from django.views.decorators.csrf import csrf_exempt


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

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
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
                "message": "Login successful",
                "is_staff": user.is_staff,
                "username": user.username
            })

        return JsonResponse({
            "success": False,
            "message": "Invalid username or password"
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

def staff_required(view_func):
    return user_passes_test(lambda user: user.is_staff)(view_func)

@staff_required
def admin_products(request):
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


def staff_required(view_func):
    def wrapper(request, *args, **kwargs):

        if not request.user.is_authenticated:
            return JsonResponse({
                "success": False,
                "message": "Login required"
            }, status=401)

        if not request.user.is_staff:
            return JsonResponse({
                "success": False,
                "message": "Admin access required"
            }, status=403)

        return view_func(request, *args, **kwargs)

    return wrapper

@csrf_exempt
@staff_required
@require_http_methods(["POST"])
def add_product(request):

    data = json.loads(request.body)

    product = Product.objects.create(
        name=data["name"],
        category=data["category"],
        price=data["price"],
        oldprice=data.get("oldPrice"),
        image=data["image"],
        description=data["description"],
        specification=data.get("specifications", [])
    )

    return JsonResponse({
        "success": True,
        "id": product.id,
        "message": "Product added successfully"
    })

@csrf_exempt
@staff_required
@require_http_methods(["DELETE"])
def delete_product(request, product_id):

    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return JsonResponse({
            "success": False,
            "message": "Product not found"
        }, status=404)

    product.delete()

    return JsonResponse({
        "success": True,
        "message": "Product deleted successfully"
    })

