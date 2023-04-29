import './App.css';
import Button from '@mui/material/Button'



function GenrateComponent() {
  const items = [<Button>hello</Button>, 2, 3, 4, 5];

  
  return (
    <div className="App">
       {items.map((item)=>(
          item
       ))}

    </div>       
  );
}

export default GenrateComponent;