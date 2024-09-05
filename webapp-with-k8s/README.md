# webapp-with-kubernetes

## Discription 
NodeJS [application](https://github.com/T4ras123/Webapp-docker) launched in kubernetes using minikube.

### Services 
- Frontend : React
- Backend : NestJS
- Database : MySQL

  Images for services are pulled from DockerHub [repository](https://hub.docker.com/repository/docker/vover173/webapp-docker/general)

## Run 
Install [docker](https://docs.docker.com/engine/install/) or any other virtualization technology

Install [minikube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download) & [kubectl](https://kubernetes.io/docs/tasks/tools/) (optional)

Run in CLI
```bash
run.sh
```
or launch everything yourself with 
```bash
kubectl apply -f *.yaml
```
or 
```bash
minikube kubectl -- apply -f 
```
