from django.db import models
from django.core.validators import RegexValidator


class ShopAdmins_Model(models.Model):
    admin_username = models.CharField(max_length=200)
    admin_password = models.CharField(max_length=200)


class ShopProducts_Model(models.Model):
    product_title = models.CharField(max_length=200)
    product_availability = models.PositiveIntegerField()
    product_price = models.FloatField()
    product_image = models.CharField(max_length=2000)
    product_rate = models.PositiveSmallIntegerField()
    product_display = models.TextField()
    product_resoloution = models.CharField(max_length=200)
    product_size = models.FloatField()
    product_os = models.CharField(max_length=100)


class ShopUsers_Model(models.Model):
    user_usname = models.CharField(max_length=200)
    user_password = models.CharField(max_length=200)
    user_email = models.EmailField()
    user_phoneNumber_validator = RegexValidator(
        regex=r"^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$", message="Use +989xxxxxxxxx or 09xxxxxxxxx")
    user_phone_number = models.CharField(
        validators=[user_phoneNumber_validator], max_length=17, blank=True)
