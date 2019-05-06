### How to Upgrade network 

[Back](/README.md)

update package.json version from 0.0.n to 0.0.n+1

    composer archive create --sourceType dir --sourceName . -a ./dist/ba_timetracker@0.0.8.bna

    composer network install -a ./dist/ba_timetracker@0.0.8.bna -c PeerAdmin@hlfv1
 
    composer network upgrade -c PeerAdmin@hlfv1  --networkName ba_timetracker --networkVersion 0.0.8
 
    composer network start --networkName ba_timetracker --networkVersion 0.0.8 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file token-admin.card
