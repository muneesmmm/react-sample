import { useState } from 'react';
import items from './data';
import Menu from './Menu';
import Button from './Button';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

function Portfolios() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div>
      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

    </div>
  );
}

      export default Portfolios
