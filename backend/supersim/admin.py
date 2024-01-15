from django.contrib import admin

from supersim.models import Wrestler, Company, WrestlerRelation, Contract

# Register your models here.
admin.site.register(Wrestler)
admin.site.register(Company)
admin.site.register(WrestlerRelation)
admin.site.register(Contract)
