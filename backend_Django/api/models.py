from django.utils import timezone
from django.db import models


class Fitness(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    age = models.IntegerField()
    gender = models.BooleanField()
    height = models.IntegerField()
    weight = models.IntegerField()
    fat = models.FloatField(null=True)
    sit_up = models.IntegerField(null=True)
    standing_jump = models.IntegerField(null=True)
    twist_sit_up = models.IntegerField(null=True)
    squat = models.IntegerField(null=True)
    running_jump = models.IntegerField(null=True)
    bmi = models.IntegerField(null=True)

    @property
    def category_list(self):
        return self.category.split("|") if self.category else []
