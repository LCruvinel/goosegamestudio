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
- runtime reverse proxy (Caddy with automatic HTTPS)
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

- `SITE_DOMAIN` (your public domain pointing to the VM)
- `CADDY_EMAIL` (email used for Let's Encrypt)
- `NEXT_PUBLIC_SITE_URL` (your public domain or VM URL)
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_CONTACT_EMAIL`

### 5. Build and start containers

```bash
sudo docker compose pull caddy
sudo docker compose up -d --build
```

### 6. Validate deployment

```bash
sudo docker compose ps
sudo docker compose logs --tail=150 app
sudo docker compose logs --tail=150 caddy
curl -I https://<YOUR_DOMAIN>
```

Expected result: HTTPS `200` or `301/308` from Caddy and both containers running.

### 7. Open networking in Oracle Cloud

In your Oracle Cloud VCN security list / NSG, allow inbound TCP `80` and `443` from your target CIDR.

Optional host firewall (if UFW is enabled):

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
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

HTTPS is handled by Caddy automatically when `SITE_DOMAIN` points to this server and ports `80` and `443` are reachable from the internet.
If the domain is not yet pointed to the VM, certificate issuance will fail until DNS is updated.
If you do not control DNS at all, you cannot obtain a publicly trusted certificate for the final domain yet; use HTTP for temporary testing or Caddy's private `tls internal` mode for local-only testing with browser trust warnings.

### Temporary testing options

If your production domain still points to another IP, use one of these approaches while you test this VM:

- create a temporary subdomain like `staging.yourdomain.com` and point only that DNS record to this server
- use a temporary domain that you control and point it to this VM
- for private-only testing, use Caddy's `tls internal` mode, knowing browsers will show a trust warning because the certificate is signed by Caddy's local CA

In all cases, keep `SITE_DOMAIN` and `NEXT_PUBLIC_SITE_URL` aligned with the temporary hostname you are actually using.

If you cannot change DNS anywhere, the simplest safe path is to keep this environment on HTTP until the final migration window, then switch to public HTTPS when the domain becomes available here.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — create the production build
- `npm run start` — run the production server
- `npm run lint` — lint the codebase
- `npm run type-check` — run TypeScript type checking
- `npm run format` — format with Prettier
