from django.urls import path, include
from rest_framework import routers
from .views import WrestlerView, CompanyView, WrestlerRelationView, ContractView
from . import views

router = routers.DefaultRouter()
router.register('wrestlers', WrestlerView, 'wrestlers')
router.register('companies', CompanyView, 'companies')
router.register('wrestler_relations', WrestlerRelationView, 'wrestler_relations')
router.register('contracts', ContractView, 'contracts')


from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Wrestling API",
        default_version='v1',
        description="Wrestling API",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="cristobal_sades@hotmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("api/v1/", include(router.urls) ),
    path('playground/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/v1/constants/', views.get_constants, name='get_constants'),
    path('api/v1/constants/styles/', views.get_styles, name='get_styles'),
    path('api/v1/constants/nationalities/', views.get_nationalities, name='get_nationalities'),
    path('api/v1/constants/months/', views.get_months, name='get_months'),
    path('api/v1/constants/moves/', views.get_moves, name='get_moves'),
]
