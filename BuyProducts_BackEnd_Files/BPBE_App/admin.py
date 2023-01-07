from django.contrib import admin
from . import models


class ShopAdminsModel_Register(admin.ModelAdmin):
    list_display = ('admin_username',)


class ShopProductsModel_Register(admin.ModelAdmin):
    list_display = ('product_title', 'product_availability',
                    'product_price', 'product_rate')


class ShopUsersModel_Register(admin.ModelAdmin):
    list_display = ('user_usname', 'user_email',)


admin.site.register(models.ShopAdmins_Model, ShopAdminsModel_Register)
admin.site.register(models.ShopProducts_Model, ShopProductsModel_Register)
admin.site.register(models.ShopUsers_Model, ShopUsersModel_Register)
