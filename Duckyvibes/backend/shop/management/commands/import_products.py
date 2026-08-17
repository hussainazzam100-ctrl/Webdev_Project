import json
from pathlib import Path

from django.core.management.base import BaseCommand
from shop.models import Product


class Command(BaseCommand):
    help = "Import products from product_data.json"

    def handle(self, *args, **options):

        json_file = Path("product_data.json")

        with open(json_file, "r", encoding="utf-8") as file:
            products = json.load(file)

        for item in products:
            Product.objects.update_or_create(
                id=item["id"],
                defaults={
                    "name": item["name"],
                    "category": item["category"],
                    "price": item["price"],
                    "oldprice": item.get("oldPrice"),
                    "image": item.get("image", ""),
                    "description": item["description"],
                    "specification": item.get("specification", [])
                }
            )

        self.stdout.write(
            self.style.SUCCESS(
                f"Successfully imported {len(products)} products."
            )
        )