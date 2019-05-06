### Task 
[Back](/README.md)

#### Description: 

Create a decentralized educational system. DLT 
The main goal of this dApp is to increase the student's influence on the final result of education and track attendance and marks on blockchain. 
Students can use their marks:
- To fill up the subject on which they do not have enough marks;
- Exchange/trade marks with each other students;
- Daybook on blockchain 
    

### Technical specifications   

#### Modules: 
  - Participant
  - Student Marks
  - Student Attendance  
    
#### Roles:     
  
 - SystemAdmininstrator
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
 - Subject {
        studence[]
        teacher
   }
 - SubjectCodes{
        name
        description 
   }
 - Students {
     subjects[]
     marks[]  
     attendance[]
   }
 - Teachers{
    subjects[]
   }
    		
#### Methods: 

- Distribution of marks
- Validation of issue marks 
- Sending marks
- Creating Subject
- Adding Participant (with empty data)  
- Track attendance
    		
    
#### Query:    
- to be in charge of the Ratings:
 - grades
 - the date 
 - the subject 
- to know by Attendance 
  - attendance
