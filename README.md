# Goose Game Studio

Production-ready Next.js 15 starter for a game studio marketing website.

## Stack

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Docker
- Docker Compose

## Getting started

```bash
npm install
npm run dev
```

The app will be available on http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Docker

```bash
docker compose up --build
```

## Deploy on Oracle Cloud (Ubuntu 26.04 + Docker 29.8.2)

This project is already containerized with:

- multi-stage Next.js production image
- runtime reverse proxy (Nginx)
- healthchecks and restart policy

### 1. Connect to your VM

```bash
ssh ubuntu@<YOUR_ORACLE_VM_PUBLIC_IP>
```

### 2. Verify Docker and Compose

```bash
docker --version
docker compose version
```

If Docker needs sudo on your VM, use `sudo` in all Docker commands below.

### 3. Install Git (if needed) and clone

```bash
sudo apt-get update
sudo apt-get install -y git
git clone <YOUR_REPOSITORY_URL>
cd goosegamestudio
```

### 4. Configure environment

```bash
cp .env.example .env
nano .env
```

Set at least:

- `NEXT_PUBLIC_SITE_URL` (your public domain or VM URL)
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_CONTACT_EMAIL`

### 5. Build and start containers

```bash
sudo docker compose pull
sudo docker compose up -d --build
```

### 6. Validate deployment

```bash
sudo docker compose ps
sudo docker compose logs --tail=150 app
sudo docker compose logs --tail=150 nginx
curl -I http://127.0.0.1
```

Expected result: HTTP `200` or `301/308` from Nginx and both containers `healthy`.

### 7. Open networking in Oracle Cloud

In your Oracle Cloud VCN security list / NSG, allow inbound TCP `80` from your target CIDR.

Optional host firewall (if UFW is enabled):

```bash
sudo ufw allow 80/tcp
sudo ufw status
```

### 8. Update workflow

```bash
git pull
sudo docker compose up -d --build
sudo docker image prune -f
```

### 9. Stop or restart

```bash
sudo docker compose restart
sudo docker compose down
```

### HTTPS note

Current compose/nginx setup publishes HTTP on port `80`.
For HTTPS in production, add TLS termination (for example: load balancer, Caddy, Traefik, or Nginx with certificates).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — create the production build
- `npm run start` — run the production server
- `npm run lint` — lint the codebase
- `npm run type-check` — run TypeScript type checking
- `npm run format` — format with Prettier
