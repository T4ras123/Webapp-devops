# Deployments

This project is a web application with a React frontend, a NestJS backend, and a MySQL database, all managed and deployed using Docker/K8s/Helm. Reverse proxy is implemented with NGINX.

## Technologies

- **Frontend**: React, Nginx
- **Backend**: NestJS, Node.js
- **Database**: MySQL

----

## Docker

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Installation

Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-webapp.git
   cd my-webapp
   ```

### Running the application

Run the container

```bash
docker compose up -d 
```

----

## K8s

  Images for services are pulled from DockerHub [repository](https://hub.docker.com/repository/docker/vover173/webapp-docker/general)

### Run

Install [docker](https://docs.docker.com/engine/install/) or any other virtualization technology

Install [minikube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download) & [kubectl](https://kubernetes.io/docs/tasks/tools/) (optional)

Run in CLI

launch everything yourself with

```bash
kubectl apply -f *.yaml
```

or

```bash
minikube kubectl -- apply -f 
```

----

## Helm

Install helm [here](https://helm.sh/)

### Launch

```bash
minikube start

helm install frontend ./frontend
helm install backend ./backend
helm install db ./db
```

----
