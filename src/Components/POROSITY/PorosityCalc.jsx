import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import "./Porosity.css"




const Porositycalc = () => {

    const [Total_Volume, setTotalVolume]= useState("")
    const [Solid_Volume, setSolidVolume]= useState("")
    const [poreVolume, setPore]= useState(0)
    const [CalculatePorosity, SetCalculatePorosity]= useState(0)

    const handleChange1 = (e)=> {
        setTotalVolume(e.target.value)
    }

    const handleChange2 = (e)=> {
        setSolidVolume(e.target.value)
    }



    

    const handleSubmit=(event)=> {
        event.preventDefault()
        setPore(parseInt(Total_Volume) - parseInt(Solid_Volume))
        let PoreVolume = (parseInt(Total_Volume) - parseInt(Solid_Volume)) 
        let porosity = PoreVolume / Total_Volume
        let result = porosity * 100
        SetCalculatePorosity(result)
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
    <ListGroup.Item>Pore Volume =  <span className ="pore-volume">{poreVolume}cm^3</span></ListGroup.Item>
    <ListGroup.Item>Porosity = <span className = "porosity">{CalculatePorosity}%</span> </ListGroup.Item>
  </ListGroup>
</Card>




       
</div>
    


            
        </Container>
    );
}

export default Porositycalc;
