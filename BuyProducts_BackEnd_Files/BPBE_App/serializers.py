from rest_framework import serializers
from .models import ShopProducts_Model, ShopUsers_Model


class ShopProducts_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProducts_Model
        fields = '__all__'


class ShopUsers_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ShopUsers_Model
        fields = '__all__'
        read_only_fields = ('id',)
