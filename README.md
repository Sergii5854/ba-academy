# BA Academy 

key words:
    
    Hyperledger, Composer, Fabric, JavaScript, Blockchain, IBM. 

## Vocabulary:

  [Task](docs/Task.md)

  [Vocabulary](docs/Vocabulary.md)
  
  [Upgrade network](docs/howToUpgradeNetwork.md)
 


### Technical specifications   

#### Modules: 

  
  - Count Students Marks 
  - Count Students Visiting 
    
#### Roles:     
  
 - SysAdmin 
    - deploy APP
    - peerAdmin
    - network admin
    - added manager
    
 - Manager
    - assign teachers 
    - HR 
    - added teachers
    - added students 
    
 - Teacher
 
 - Student

#### Models: 
 - Subject
 - SubjectCodes{
    name
    description 
    }
 - Students [
     subjects[]
     marks[]  
     attendant[]
    ]
 - Teachers{
    subjects[]
    }
    		
#### Methods: 

- Distribution of marks
- Validation of issue marks 
- Sending marks
- Creating Subject
- Adding Participant (with empty data)    
    		
    
#### Query:    
- to be in charge of the Ratings:
 - grades
 - the date 
 - the subject 
- to know by Visiting 
  - attendance
    
