#!/bin/bash

# Configuration
VPS_HOST="64.23.179.212"
VPS_USER="root"
APP_DIR="/var/www/portefolio"

echo "🚀 Connexion au VPS et déploiement Frontend (Docker)..."                 

ssh -T "$VPS_USER@$VPS_HOST" << EOF
  echo "📁 Accès au dossier d'application..."
  cd "$APP_DIR" || { echo "❌ Dossier introuvable"; exit 1; }
  
  echo "💾 Stash des modifications locales (si existantes)..."
  git stash push -m "auto-stash before pull \$(date)" || echo "⚠️ Aucun changement à stasher"

  echo "📥 Pull des dernières modifications..."
  git pull origin main || { echo "❌ Échec git pull"; exit 1; }
  
  echo "🛑 Arrêt des conteneurs Docker..."
  docker-compose -f docker-compose.yml down || { echo "❌ Échec docker-compose down"; exit 1; }
  
  echo "🚀 Redémarrage du conteneur (rebuild si changements détectés)..."
  docker-compose -f docker-compose.yml up -d --build || { echo "❌ Échec docker-compose up"; exit 1; }
  
  echo "📊 Statut du conteneur..."
  docker-compose -f docker-compose.yml ps
  
  echo "📋 Derniers logs (10 lignes)..."
  docker-compose -f docker-compose.yml logs --tail=10
  
  echo "✅ Déploiement Frontend terminé avec succès!"
EOF