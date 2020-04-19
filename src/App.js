import React from 'react';


function Food({name, picture}){
 
  return <div>
  <h1>I like {name}</h1>
  <img src ={picture}/>

  </div>

          
}
const foodILike = [
  {
    name:"kimchi",
    image:"http://jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg"

  },
  {
    name:"ramen" ,
    image:"https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df63d7694f947067095cec7a6fad4c46379a15f123308146ba5f62265370e7f0aa6"

  },
  {
    name:"chicken" ,
    image:"http://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg"
  }
 
];
function App() {
  return (
    <div>
    
      {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image} />
      ))
      }
    
    </div>
  );
}

export default App;
