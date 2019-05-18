### ToDo List  

[Back](/README.md) 


## Backend 

    - pasport-google  
        -- How to create Authorization by role ? 
        -- How to identify Authorization card ?  
    
    - Added transactions to create Participants Role.
        -- Do we need to add transaction logic with create Participants Role ? 
    
    - Sign In/Log In  ??
        -- How to resolve Log In transaction with composer-rest-server ? 

## Frontend 
    
    - Connect to network 
        -- How to connect to network ? 
    
    - Create Sign In/Log In Form
        -- How to get status of Participant role ?  

    - Detect Participant role
        -- How to Detect Participant role ? 
    
    - Added Participant from UI  
        -- Where to send forms from UI ?   
        -- How to get status of transaction ?    

    for example  (create ) 
        ```
        {
        "$class": "ba_academy.models.participants.SystemAdmininstrator",
        "id": "1736",
            "info": {
                "$class": "ba_academy.models.participants.ParticipantInfo",
                "firstName": "",
                "midlName": "",
                "lastName": "",
                "email": ""
            }
        }   

         
        {
            "$class": "ba_academy.models.participants.Manager",
            "id": "6702",
            "info": {
                "$class": "ba_academy.models.participants.ParticipantInfo",
                "firstName": "",
                "midlName": "",
                "lastName": "",
                "email": ""
            }
        }

        {
        "$class": "ba_academy.models.participants.Teacher",
            "subjects": [],
            "id": "0407",
                "info": {
                    "$class": "ba_academy.models.participants.ParticipantInfo",
                    "firstName": "",
                    "midlName": "",
                    "lastName": "",
                    "email": ""
                }
        }

        {
            "$class": "ba_academy.models.participants.Student",
            "subjectIds": [],
            "attendanceIds": [],
            "marks": [],
            "id": "4165",
                "info": {
                    "$class": "ba_academy.models.participants.ParticipantInfo",
                    "firstName": "",
                    "midlName": "",
                    "lastName": "",
                    "email": ""
                }
        }

        {
        "$class": "ba_academy.models.assets.AssetTimeEntry",
        "timeEntryId": "9881",
        "spentOn": "2019-05-18T09:43:33.649Z",
        "duration": 0,
        "subject": "resource:ba_academy.models.assets.Subject#5886",
        "participant": "resource:ba_academy.models.participants.SystemAdmininstrator#6448"
        }

        {
        "$class": "ba_academy.models.assets.Subject",
        "code": "5312",
        "name": "",
        "teacher": "resource:ba_academy.models.participants.Teacher#5842",
        "studentIds": []
        }

        ```
