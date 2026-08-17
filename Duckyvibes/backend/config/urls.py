from django.contrib import admin
from django.urls import path
from shop.views import home, product_data, login_view, logout_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('products-data/', product_data, name='product_data'),

    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
]