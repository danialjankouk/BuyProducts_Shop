from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.HomePage_View.as_view(), name='BP_BE_Home'),
    path('add-product', views.AddProduct_View.as_view(), name='BP_BE_AddProduct'),
    path('products-list', views.ListAllProducts.as_view(),
         name='BP_BE_AllProducts'),
    path('users-list', views.ListAllUsers.as_view(), name='BP_BE_AllUsers'),
    path('products-list/<int:pk>/delproduct',
         views.DeleteProduct.as_view(), name='delpro'),
    path('products-list/<int:pk>/editproduct',
         views.EditProduct.as_view(), name='editpro'),
]

# path('products-list/delproduct/<int:pk>',
#         views.DeleteProduct.as_view(), name='delpro'),
