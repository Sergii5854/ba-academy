# BA Academy 

key words:
    
    Hyperledger, Composer, Fabric 

## Vocabulary:
[Vocabulary](docs/Vocabulary.md)
[Upgrade network](docs/howToUpgradeNetwork.md)
 
#### Motivation / Reason : 
// TODO added more description 
```
    Daybook on blockchain 
    Balance of marks
    Sale of marks
```   

## Task: 
// TODO added more description 

Create a decentralized educational system.
The main goal of decentralization is to reduce the teacher's influence on the final result of training 
Students can use their marks:
- to fill up the subject on which they do not have enough marks 
- exchange points with each other students 
    
    
### Technical specifications   

#### Modules: 

  - Count Students Marks 
  - Count Students  Visiting 
    
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
    
