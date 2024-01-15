from .serializer import WrestlerSerializer, CompanySerializer, WrestlerRelationSerializer, ContractSerializer
from rest_framework import viewsets
from .models import Company, Wrestler, WrestlerRelation, Contract

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