from django.contrib import admin
from django.urls import path

from shop.views import (
    home,
    product_data,
    login_view,
    logout_view,
    admin_products,
    add_product,
    delete_product
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('products-data/', product_data, name='product_data'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('admin-products/', admin_products, name='admin_products'),
    path('admin-products/add/', add_product, name='add_product'),
    path('admin-products/<int:product_id>/delete/', delete_product, name='delete_product'),
]