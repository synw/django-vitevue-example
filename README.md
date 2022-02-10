# Django Vitevue example

Example usage of [django-vitevue](https://github.com/synw/django-vitevue). Two examples are
available:

- [Single page app](#create-a-single-page-app): create a Vite spa and compile to a Django index template
- [Included app](#included-app): create a Vite app and compile to a Django local template

## Install

Clone and cd in the repository dir and create a virtualenv. Then install:

```
pip install -r requirements.txt
python django_vitevue_example/manage.py migrate
```

The basic backend is installed. Now let's generate a Vitejs Vue frontend and it's
Typescript models

## Create a single page app

### Create a frontend

Create a Vue 3 Typescript frontend from an official Vite template:

```
yarn create vite frontend --template=vue-ts
```

Install the frontend packages:

```
cd frontend
yarn install
cd ..
```

### Configure the frontend

Run the config command in dry mode:

```
python django_vitevue_example/manage.py viteconf
```

It outputs the config and the npm packages to install. Install the required npm packages:

```
cd frontend 
yarn add -D move-file-cli del-cli npm-run-all
cd ..
```

Now let's write the compilation config and commands to 
the `frontend/vite.config.ts` and `frontend/package.json` files:

```
python django_vitevue_example/manage.py viteconf -w
```

By default the compilation will output an `index.html` template and put the
static assets in `static/frontend`. See the django-vitevue doc for more options

### Build the frontend

At this stage we have a Vue frontend running in dev mode. Run the Vitejs frontend dev server:

```
cd frontend
yarn dev
```

Check localhost:3000 to see the frontend in dev mode. Run the backend and open localhost:8000/spa/:

```
cd ..
python django_vitevue_example/manage.py runserver
```

You will see a missing template error because we have not yet compiled the
frontend to a template and static files. To build the frontend:

```
cd frontend
yarn build
```

This creates the template and static files. Reload the page at localhost:8000/spa/

On `/` a regular Django template is served. The generated index template is
served on the `/spa/` url

### Generate Typescript models from the backend models

```
python django_vitevue_example/manage.py tsmodels trades -w
```

Generate an api for the models:

```
python django_vitevue_example/manage.py tsapi trades
```

Check the frontend directory: some models has been created from the Django
backend models, and an api helper has been added

Copy the frontend demo using a management command and install the js dependencies:

```
python django_vitevue_example/manage.py copydemo
cd frontend
yarn add js-cookie @snowind/api
```

To test the api create a user, run the backend and open the demo with the frontend dev server:

```
python django_vitevue_example/manage.py createsuperuser
cd frontend
yarn dev
```

And open localhost:3000. This will show a login/logout demo and a sample api call

## Included app

This is to create a frontend to be compiled to a specific Django template
as a partial app. Create the app:

```
yarn create vite partialapp --template=vue-ts
cd partialapp
yarn install
yarn add -D move-file-cli del-cli npm-run-all
cd ..
```

Generate a Vite config in partial template mode:

```
python django_vitevue_example/manage.py viteconf --app=partialapp -p -w
```

Build the frontend:

```
python django_vitevue_example/manage.py createsuperuser
cd partialapp
yarn build
```

This will create a `partialapp.html` template that can be included in the main template

