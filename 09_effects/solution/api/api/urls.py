from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from notes import views

router = DefaultRouter()
router.register("notes", views.NoteViewSet)

urlpatterns = router.urls
