from django.conf import settings
from django.db import models


class User(models.Model):
    id = models.CharField(primary_key=True, max_length=20)
    password = models.CharField(max_length=20)
    nickname = models.CharField(max_length=50)
    height = models.IntegerField()
    weight = models.IntegerField()
    birthYear = models.IntegerField()
    gender = models.BooleanField()

    def __str__(self):
        return self.nickname