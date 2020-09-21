from pathlib import Path
import pandas as pd
from django.core.management.base import BaseCommand
from backend import settings
from api import models


class Command(BaseCommand):
    help = "initialize database"
    DATA_DIR = Path(settings.BASE_DIR).parent / "Data"
    DATA_FILE = str(DATA_DIR / "dump.pkl")

    def _load_dataframes(self):
        try:
            data = pd.read_pickle(Command.DATA_FILE)
        except:
            print(f"[-] Reading {Command.DATA_FILE} failed")
            exit(1)
        return data

    def _initialize(self):
        """

        """
        print("[*] Loading data...")
        dataframes = self._load_dataframes()

        print("[*] Initializing stores...")
        models.Fitness.objects.all().delete()
        fitnesses = dataframes["fitness"]
        fitness_bulk = [
            models.Fitness(
                id=fitness.id,
                store_name=fitness.age,
                gender=fitness.gender,
                height=fitness.height,
                weight=fitness.weight,
                fat=fitness.fat,
                sit_up=fitness.sit_up,
                standing_jump=fitness.standing_jump,
                twist_sit_up=fitness.twist_sit_up,
                squat=fitness.squat,
                running_jump=fitness.running_jump,
                bmi=fitness.bmi,
            )
            for fitness in fitnesses.itertuples()
        ]
        models.Fitness.objects.bulk_create(fitness_bulk)

        print("[+] Done")

    def handle(self, *args, **kwargs):
        self._initialize()
