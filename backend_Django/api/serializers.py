from .models import Fitness
from rest_framework import serializers


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fitness
        fields = [
            "id",
            "age",
            "gender",
            "height",
            "weight",
            "fat",
            "sit_up",
            "standing_jump",
            "twist_sit_up",
            "squat",
            "running_jump",
            "bmi",
        ]
