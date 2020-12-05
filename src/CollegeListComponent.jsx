import React,{ useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup  from 'react-bootstrap/CardGroup'
import { Button} from 'react-bootstrap';

import { cityCollegeDetails } from "./staticfiles/staticdata.jsx";

const CollegeListComponent = () =>
{

  const [appliedStatus, setAppliedStatus] = useState("Apply");
  const [referenceId, setRefernceId] = useState([]);


  
   useEffect(() => {    
      console.log(`You clicked  times`); 
      
    });

return( 
  

  <div>

    <div>

<h1>Select Your College from the below List :</h1>

    </div>


    
<CardGroup>
{cityCollegeDetails.length > 0 ? (
        cityCollegeDetails.map((college) => (
          <Card border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
          <Card.Body>
            <Card.Title>{college.collegeName}</Card.Title>
            <Card.Text> {college.collegeDesc}
              
            </Card.Text>
            <Button onClick={() =>document.getElementById(`${college.collegeID}`).style.display ="block"} variant="primary">View Courses</Button>
            <table id={college.collegeID} style={{ display: 'none' }}>

            <thead>
      <tr>
            <th>Course </th>
    
           <th>Apply</th>
      </tr>
      </thead>
      <tbody>
      
      

           <tr key={college.collegeID}>
            
           
            <td>{college.courses}</td>
            <button onClick={() =>{setAppliedStatus("Applied"); /*setRefernceId(referenceId.push(`${college.collegeID}_${college.courses}`)); */ alert(`Thanks for applying to this course. Your Ref id is :  studentId_${college.collegeID}_${college.courses}`)}}> {appliedStatus}</button>
          </tr>
        

      
      </tbody>
            </table>
          </Card.Body>
        </Card>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Colleges</td>
        </tr>
      )}

</CardGroup>

<div>
   
   <h3> You have applied for the following courses :</h3>  


   
   </div>   
 
  </div>
);

      }

export default CollegeListComponent;