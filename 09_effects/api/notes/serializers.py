from rest_framework import serializers

from . import models


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Note
        fields = "__all__"
