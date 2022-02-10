import os
from shutil import copy

from django.conf import settings
from django.core.management.base import BaseCommand

from vv.conf.manager import VvConfManager


class Command(BaseCommand):
    help = "Copy the frontend demo app"

    def handle(self, *args, **options):
        # verbosity = options["verbosity"]
        if settings.DEBUG is False:
            print("This command only works in debug mode: do not use in production")
            return
        # get the settings
        manager = VvConfManager()
        # print("Manager conf", manager.conf)
        file_to_copy = manager.conf.staticfiles_dir / "demo/App.vue"
        # print("FILE", file_to_copy)
        destination = manager.conf.vv_base_dir / "frontend/src"
        # print("DEST", destination)
        os.remove(destination / "App.vue")
        copy(file_to_copy, destination)
        print("Demo frontend app copied")
        print("Install the dependencies in the frontend:")
        print("yarn add js-cookie @snowind/api")
        print("or npm install js-cookie @snowind/api")
