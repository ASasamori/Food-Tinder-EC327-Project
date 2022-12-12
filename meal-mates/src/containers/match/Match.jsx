import React from 'react'
import resturant from '../../assets/example_resturant_photo.jpeg'; 
import './match.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  Resturant Description
`;

const Match = (matched) => {
  console.log(matched)
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="App">
      <div>{matched.name}</div>
      <div className="message">It's a Match!</div>

        <br />

        <img src={matched.image_url} alt="resturnat" width = "650" height = "400"/>;

        <br /><br />

        {/* https://ant.design/components/collapse#collapsepanel */}
        <Collapse onChange={onChange}>
          <Panel header="This is panel header 1" key="1">
            <p>{ matched.name }</p>
          </Panel>
        </Collapse>

        <br /><br />

      <button className="button">See Other</button>
    </div>
  );
}

export default Match