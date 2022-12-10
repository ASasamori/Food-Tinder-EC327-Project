import React from 'react'
import resturant from '/Users/jakelee/Documents/EC327/EC327_Project/Food-Tinder-EC327-Project/meal-mates/src/assets/example_resturant_photo.jpeg'; 
import './match.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  Resturant Description
`;

const Match = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="App">
      <div className="message">It's a Match!</div>

        <br />

        <img src={resturant} alt="resturnat" width = "650" height = "400"/>;

        <br /><br />

        {/* https://ant.design/components/collapse#collapsepanel */}
        <Collapse onChange={onChange}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <br /><br />

      <button className="button">See Other</button>
    </div>
  );
}

export default Match