from pathlib import Path
from typing import Dict, List, Union


VITE_APPS: List[Dict[str, Union[Path, str]]] = [
    {
        "directory": "partialapp",
        "template": "partialapp.html",
        "static": "partialapp",
    }
]
