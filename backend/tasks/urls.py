from django.urls import path, include
from rest_framework.routers import DefaultRouter
from.views import ProfileViewSet, PostViewSet

router = DefaultRouter()
router.register(r'profile', ProfileViewSet, basename='profile')
router.register(r'posts', ProfileViewSet, basename='post')

urlpatterns = [
    path('', include(router.urls)),
]
