#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status.

export COMPOSER_CARD=admin@ba_academy
export COMPOSER_NAMESPACES=never
export COMPOSER_AUTHENTICATION=true
export COMPOSER_MULTIUSER=true

export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "786f16a0916f5bd20367",
    "clientSecret": "5f9e563af5f568f27aa10b95f6aa4ad5bae86803",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "/",
    "failureRedirect": "/"
  },
  "google": {
    "provider": "google",
    "module": "passport-google-oauth2",
    "clientID": "936963877811-66tba9cubos3pclvm1l5k18mubspfive.apps.googleusercontent.com",
    "clientSecret": "Vv2bY6kjAfc4yILLnwC5PLvq",
    "authPath": "/auth/google",
    "callbackURL": "/auth/google/callback",
    "scope": "https://www.googleapis.com/auth/plus.login",
    "successRedirect": "/",
    "failureRedirect": "/"
  }
}'

echo 'Starting Fabric'
~/fabric-dev-servers/startFabric.sh
echo 'Creating peer admin card...'
~/fabric-dev-servers/createPeerAdminCard.sh
echo 'Creating archive...'
mkdir ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/ba_academy@0.0.1.bna
echo 'Installing network with PeerAdmin card...'
composer network install -a ./dist/ba_academy@0.0.1.bna -c PeerAdmin@hlfv1
echo 'Starting network...'
composer network start --networkName ba_academy --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file token-admin.card

# do not exit if command fails
set +e
composer card import --file token-admin.card
set -e

echo 'Starting REST server with custom UI...'
# cd ba-academy/ && npm start

composer-rest-server