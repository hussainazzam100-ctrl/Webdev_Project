from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    specification = models.JSONField(default=list, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    oldprice = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    category = models.CharField(max_length=100)
    image = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.name
