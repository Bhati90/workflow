#!/bin/bash
#!/bin/bash
pip install --upgrade pip setuptools wheel
uvicorn main:app --host=0.0.0.0 --port=8000

chmod +x start.sh
