# Django Vitevue example

Example usage of [django-vitevue](https://github.com/synw/django-vitevue). Two examples are
available:

- [Single page app](#create-a-single-page-app): create a Vite spa and compile to a Django index template
- [Included app](#included-app): create a Vite app and compile to a Django local template

## Install

Clone and cd in the repository dir to install:

```
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
static assets in `static/frontend`

### Build the frontend

Run the Vitejs frontend dev server as usual:

```
cd frontend
yarn dev
```

To build the frontend:

```
yarn build
```

This creates the template and static files

### Serve the generated frontend build

Run the dev server:

```
python django_vitevue_example/manage.py runserver
```

On `/` a regular Django template is served. The generated index template is
served on the `/spa/` url

### Generate Typescript models from the backend models

```
python django_vitevue_example/manage.py tsmodels trades -w
```

Generate an api for the models:

```
python django_vitevue_example/manage.py tsapi trades -w
```

## Included app

Now we will create a frontend to be compiled to a specific Django template
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

