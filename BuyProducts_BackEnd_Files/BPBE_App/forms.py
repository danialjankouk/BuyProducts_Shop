from django import forms
from . import models


class ShopProducts_From(forms.ModelForm):
    class Meta:
        model = models.ShopProducts_Model
        fields = ('product_title', 'product_availability',
                  'product_price', 'product_image', 'product_rate',
                  'product_display', 'product_resoloution', 'product_size', 'product_os')
        labels = {
            'product_title': 'Enter the Product Name',
            'product_availability': 'How many products was added?',
            'product_price': 'Enter the Product Price',
            'product_image': 'Product Image URL',
            'product_rate': 'What is the Product Rate?',
            'product_display': 'Enter the Product Display',
            'product_resoloution': 'Enter the Product Camera Resoloution',
            'product_size': 'Enter Size of the Product',
            'product_os': 'What is the Product OS?',
        }
