import React, {useEffect, useState, useMemo} from "react";
import './App.css';
import Count from "./Count";
import Text from './Text';

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [color,setColor] = useState("#16a085")
  const colors = useMemo(() => {
    return ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
  },[]);
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((res) => res.json())
    .then((data) => {
      setData(data.quotes);
    })
    .catch((err) => console.log(err));
  },[])

  useEffect(()=> {
    setColor(colors[index % 12])
  },[index,colors])

  const handleNext = () => {
    if(index === data.length - 1)
      return;
    else
      setIndex(index + 1);
  }

  const handlePrev = () => {
    if(index <= 0)
      return;
    else
      setIndex(index - 1);
  }

  return (
    <div className="Bod" style={{backgroundColor:color}}>
      <div className="App" style={{color:color}}>
        <Count current={index + 1} total={data.length} className="count" />
        <Text disp={data[index]} />
        <div className="Buttons">
        <button onClick= {() => handlePrev()} className= {index <= 0 ? 'disable': ''} style={{backgroundColor:color}}>Previous</button>
        <button onClick= {() => handleNext()} className={index === data.length - 1 ? 'disable':''} style={{backgroundColor:color}}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
