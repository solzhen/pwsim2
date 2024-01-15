from rest_framework import serializers
from .models import Wrestler, Company, WrestlerRelation, Contract

class WrestlerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wrestler
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        
class WrestlerRelationSerializer(serializers.ModelSerializer):   
    class Meta:
        model = WrestlerRelation
        fields = '__all__'

class ContractSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Contract
        fields = '__all__'