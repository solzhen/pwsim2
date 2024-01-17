from .serializer import WrestlerSerializer, CompanySerializer, WrestlerRelationSerializer, ContractSerializer
from rest_framework import viewsets
from .models import Company, Wrestler, WrestlerRelation, Contract
from django.http import JsonResponse
from . import consts

#const views
def get_constants(request):
    return JsonResponse({'constants': consts.MY_CONSTANTS})
def get_styles(request):
    return JsonResponse({'styles': consts.STYLE_CHOICES})
def get_nationalities(request):
    return JsonResponse({'nationalities' : consts.NATIONALITY_CHOICES})
def get_months(request):
    return JsonResponse({'months' : consts.MONTH_CHOICES})
def get_moves(request):
    return JsonResponse({'moves' : consts.WRESTLING_MOVES_CHOICES})

# Create your views here.
class WrestlerView(viewsets.ModelViewSet):
    queryset = Wrestler.objects.all()
    serializer_class = WrestlerSerializer
    
class CompanyView(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    
class WrestlerRelationView(viewsets.ModelViewSet):
    queryset = WrestlerRelation.objects.all()
    serializer_class = WrestlerRelationSerializer
    
class ContractView(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer