import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <div className="Item col-12 col-sm-12 col-md-6 col-lg-4">
          <div className="Inner">
            <div className="Top">
              <div className="Top1">
                <div className="ImageContainer col-3 col-sm-2 col-md-12 col-lg-12">
                  <img className="Image" src="https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ21UIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4a34bcb984abb4039442899477a50dbbc0011076/Binance.png" alt="binance"/>
                </div>
              </div>
              <div className="Top2">
                Top2
              </div>
            </div>
            <div className="Bottom">Bottom</div>
          </div>
        </div>
        <div className="Item col-12 col-sm-12 col-md-6 col-lg-4">
          Hello
        </div>
        <div className="Item col-12 col-sm-12 col-md-6 col-lg-4">
          Hello
        </div>
      </div>
    </div>
  );
}

export default App;
