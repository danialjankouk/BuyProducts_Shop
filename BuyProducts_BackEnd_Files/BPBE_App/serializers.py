from rest_framework import serializers
from .models import ShopProducts_Model


class ShopProducts_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProducts_Model
        fields = '__all__'
