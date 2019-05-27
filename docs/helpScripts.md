# BA Academy 

[Back](/README.md)

steps to start network and application

 install prereqs, composer, fabric etc.
 Assuming to use HLFV12 with composer v0.20.5+ 
 
 ### run fabric scripts from User root:

    ~/fabric-dev-servers/startFabric.sh

    ~/fabric-dev-servers/createPeerAdminCard.sh

### run composer scripts from project root:
 run commands: in bna folder 
    bna folder - is project folder ( ba_academy ) 

    mkdir ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/ba_academy@0.0.1.bna

    composer network install -a ./dist/ba_academy@0.0.1.bna -c PeerAdmin@hlfv1
 
    composer network start --networkName ba_academy --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file token-admin.card

    composer card import --file token-admin.card

    composer-rest-server -c admin@ba_academy -a false

### Create Participants instance

    composer participant add -c admin@ba_academy -d '{"$class":"ba_academy.models.participants.SystemAdmininstrator","id":"SysAdmin","info":{"$class":"ba_academy.models.participants.ParticipantInfo","firstName":"Max","midlName":"Anatolievich","lastName":"Smith","email":"sysAdmin@ba.academy"}}'

    composer participant add -c admin@ba_academy -d '{"$class":"ba_academy.models.participants.Manager","id":"ManagerUsers","info":{"$class":"ba_academy.models.participants.ParticipantInfo","firstName":"Jon","midlName":"Oleksandrovich","lastName":"Smith","email":"manager@ba.academy"}}'

    composer participant add -c admin@ba_academy -d '{"$class":"ba_academy.models.participants.Teacher","id":"Teacher1", "subjects":"English" ,"info":{"$class":"ba_academy.models.participants.ParticipantInfo","firstName":"Sergii","midlName":"Ivanovuch","lastName":"Test","email":"teacher@ba.academy"}}'

    composer participant add -c admin@ba_academy -d '{"$class":"ba_academy.models.participants.Student","id":"Student1", "subjectIds":"1","attendanceIds":1.2,"marks":3,"info":{"$class":"ba_academy.models.participants.ParticipantInfo","firstName":"Anton","midlName":"Maksimovich","lastName":"Testenko","email":"student@ba.academy"}}'

### Identity. For instance participent create indentity card 

    composer identity issue -u SystemAdmininstratorUsers -a ba_academy.models.participants.SystemAdmininstrator#SysAdmin -c admin@ba_academy -x     

    composer identity issue -u ManagerUsers -a ba_academy.models.participants.Manager#ManagerUsers -c admin@ba_academy -x  

    composer identity issue -u Teacher1 -a ba_academy.models.participants.Teacher#Teacher1 -c admin@ba_academy -x

    composer identity issue -u Student1 -a ba_academy.models.participants.Student#Student1 -c admin@ba_academy


### Import card to network
    composer card import --file SystemAdmininstratorUsers@ba_academy.card
    composer card import --file ManagerUsers@ba_academy.card
    composer card import --file Teacher1@ba_academy.card
    composer card import --file Student1@ba_academy.card

### Start rest server from Identity (user)
!Important note: before start stop your previus  composer-rest-server !

    composer-rest-server -c SystemAdmininstratorUsers@ba_academy -a false
    composer-rest-server -c ManagerUsers@ba_academy -a false
    composer-rest-server -c Teacher1@ba_academy -a false
    composer-rest-server -c Student1@ba_academy -a false

### Create time entry  rest-server
open brouser http://localhost:3000/explorer 

select ba_academy_models_assets_AssetTimeEntry

then select POST /ba_academy.models.assets.AssetTimeEntry

insert in data valid json: (change id )

### Or start Playground 
Start playground: 

    composer-playground

###  For login 

    http://localhost:3000/auth/github/

