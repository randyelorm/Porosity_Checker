import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import "./Porosity.css"




const Porositycalc = () => {

    const [num1, setAdd1]= useState("")
    const [num2, setAdd2]= useState("")
    const [poreVolume, setPore]= useState(0)
    const [numtotal, setTotal]= useState(0)

    const handleChange1 = (e)=> {
        setAdd1(e.target.value)
    }

    const handleChange2 = (e)=> {
        setAdd2(e.target.value)
    }



    

    const handleSubmit=(event)=> {
        event.preventDefault()
        setPore(parseInt(num1) - parseInt(num2))
        let PoreVolume = (parseInt(num1) - parseInt(num2)) 
        let porosity = PoreVolume / num1
        let result = porosity * 100
        setTotal(result)
    }



    return (
<Container className = "container" >
        <div className = "Porosity-Container">
   <Form className = "form" onSubmit = {handleSubmit} >
     <h2> POROSITY BY VOLUMES <span className ="calculator">CALCULATOR</span> </h2> 
     <i>
         Porosity is the value used to describe how much empty, or void, space is present in a given sample.
      </i> 
     
     <br /> <br /> 
     <Form.Group className="mb-3"   >
                <Form.Label className ="label-text">Total Volume (cm^3) </Form.Label>
                <Form.Control
                 type="number" 
                 onChange = {handleChange1}  
                 placeholder="Enter Total Volume" 
                 className ="form-input "
                 
                 />
            </Form.Group>
    
            <Form.Group  className="mb-3">
                <Form.Label className ="label-text">Solid Volume (cm^3) </Form.Label>
                <Form.Control
                 type="number"  
                 onChange = {handleChange2} 
                 placeholder="Enter Total Volume"
                 className ="form-input" 
                 
                 />
            </Form.Group>
          
    
         <Button variant="primary" className = "calculate-porosity-btn" type="submit">
              Calculate Porosity 
       </Button>
        </Form>

    

     
     
<Card style={{ width: '15rem' }} className ="card">
  <ListGroup variant="flush" className = "Listgroup">
    <ListGroup.Item>Pore Volume = <span className ="pore-volume">{poreVolume}cm^3</span></ListGroup.Item>
    <ListGroup.Item>Porosity = <span className = "porosity">{numtotal}%</span> </ListGroup.Item>
  </ListGroup>
</Card>




       
</div>
    


            
        </Container>
    );
}

export default Porositycalc;
