import React from 'react';
import './App.css';
import mockData from './mockData'

type itemData = {
  companyName: string,
  imageURL: string,
  jobTitle: string,
  elapsed: string,
  field: string,
  skills: string[]
}

const Item = (itemData: itemData) => {
  return (
    <div className="Item col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="Inner">
        <div className="Top">
          <div className="Top1">
            <div className="ImageContainer col-3 col-sm-2 col-md-12 col-lg-12">
              <img className="Image" src={itemData.imageURL} alt="binance"/>
            </div>
            <div className="DescriptionContainer col-9 col-sm-10 col-md-12 col-lg-12">
              <p className="CompanyName">{itemData.companyName}</p>
              <div className="JobTitle">{itemData.jobTitle}</div>
            </div>
          </div>
          <div className="Top2">
            <div className="col-6 centered">
              <div className="Elapsed">{itemData.elapsed}</div>
            </div>
            <div className="col-6">
              <span className="Field">{itemData.field}</span>
            </div>
          </div>
        </div>
        <div className="Bottom">
          {itemData.skills.map((skill, index) => 
            <React.Fragment><span className="Skill">{skill}</span>&nbsp;</React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        {mockData.map(Item)}
      </div>
    </div>
  );
}

export default App;
