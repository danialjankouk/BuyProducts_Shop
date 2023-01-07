from django.shortcuts import render
from datetime import datetime
from django.views.generic import TemplateView, DetailView, ListView, CreateView, UpdateView
from django.views.generic.edit import DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework import viewsets
from . import models
from . import serializers
from . import forms


class AllProducts_Viewset(viewsets.ModelViewSet):
    queryset = models.ShopProducts_Model.objects.all()
    serializer_class = serializers.ShopProducts_Serializer


# my_obj = AllProducts_Viewset()


class HomePage_View(TemplateView):
    template_name = 'HTML_Templates/Home_Page/home_page.html'
    extra_context = {'today': datetime.today()}
    # extra_context = {'toosk': my_obj}

# objects.get(pk=pk)


class AddProduct_View(CreateView):
    model = models.ShopProducts_Model
    form_class = forms.ShopProducts_From
    success_url = '/products-list'
    template_name = 'HTML_Templates/Products_Page/addingProducts.html'


class ListAllProducts(ListView):
    model = models.ShopProducts_Model
    template_name = 'HTML_Templates/Products_Page/productsList_page.html'
    context_object_name = 'All_Products'
    extra_context = {'products_numbers': len(model.objects.all())}


class DeleteProduct(DeleteView):
    model = models.ShopProducts_Model
    success_url = '/products-list'
    context_object_name = 'delproduct'
    template_name = 'HTML_Templates/Products_Page/delete_a_Product.html'


class EditProduct(UpdateView):
    model = models.ShopProducts_Model
    form_class = forms.ShopProducts_From
    context_object_name = 'upproduct'
    success_url = '/products-list'
    template_name = 'HTML_Templates/Products_Page/edit_a_product.html'


class ListAllUsers(ListView):
    model = models.ShopUsers_Model
    template_name = 'HTML_Templates/User_Page/shop_all_users.html'
    context_object_name = 'All_Users'
