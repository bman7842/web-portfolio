### Docker Instructions:
1. `docker build -t beeman-portfolio-dev .`
2. `docker run -d -p 8000:8000 -v ~/Projects/beeman-portfolio/src:/usr/src/app/src --name beeman-portfolio beeman-portfolio-dev`
