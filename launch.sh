#!/bin/bash
set -e

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

composer card import --file token-admin.card
echo 'Starting REST server...'
composer-rest-server -c admin@ba_academy -a false