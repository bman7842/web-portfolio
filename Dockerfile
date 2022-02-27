# nginx state for serving content

FROM node:14

WORKDIR /usr/src/app

#Pre-reqs
RUN npm install -g gatsby-cli
RUN npm install tailwindcss autoprefixer
RUN npm install postcss gatsby-plugin-postcss

COPY package.json .

RUN npm install

COPY gatsby-browser.js .
COPY gatsby-config.js .
COPY postcss.config.js .
COPY tailwind.config.js .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]