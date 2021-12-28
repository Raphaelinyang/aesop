import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import img1 from './img1.webp';
import img2 from './img2.png';
import './App.css';

function App() {
  

  function under() {
    
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}  >

   <div style={{ display:'flex', width: '100%',  background: 'orange', color: 'white', justifyContent: 'center',  }} >
     <p style={{ textAlign: 'center', width: '100%', fontSize: '2.5vmin' }} >Our stores in France and Belgium are open. Call and Collect is available in the Netherlands. Find a nearby store.      <a><b>Find a nearby store</b> </a>
 </p>
   </div>

   <div style={{ display:'flex', width: '100%',  background: 'black', justifyContent: 'center', paddingTop: '1%', paddingBottom: '1%' }} >
     <a style={{ textAlign: 'center', width: '100%', fontSize: '2.5vmin', fontStyle: 'bold', color: 'white' }} onMouseOver={under} >Enjoy complimentary carbon neutral shipping on all orders to France </a>
   </div>

   <div style={{ display:'flex', width: '90%', justifyContent: 'space-between', flexDirection: 'row', padding: "1.8%", position:'sticky'  }} >
  <div style={{ display:'flex', width: '60%', justifyContent: 'space-between', flexDirection: 'row' }}>
    <p>Skin Care</p>
    <p>Body & Hand</p>
    <p>Hair</p>
    <p>Fragrance</p>
    <p>Home</p>
    <p>Kits & Travel</p>
    <p>Gifts</p>
    <p>Read</p>
    <p>Stores</p>
  </div>

  <div style={{ display:'flex', width: '10%', justifyContent: 'space-around', flexDirection: 'row' }} >
    <p>login</p>
    <p>cart</p>
  </div>
</div>

<div style={{ display:'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center'  }} >
  <div style={{ width:'10%', justifyContent: 'center', textAlign: 'center' }} >
    <p style={{ fontSize: '6vmin', alignItems: 'flex-start' }} >AESOP</p>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', width: '30%',   }} >
    <p style={{ fontSize: '6vmin' }} >Eleventh-hour gifts</p>
    <p>Defer no more with an array of gifts to please. Whether for skin, body or home, our festive selection is suitable for recipients of all stripes. </p>
    <div style={{ display: 'flex', flexDirection: 'row', width: '60%', justifyContent: 'space-between', background: 'grey', paddingTop: '1%', paddingBottom:'1%', paddingLeft:'3%', paddingRight:'3%',  borderRadius: 1 }} > 
      <p style={{ color: 'white' }}>Browse all gifts </p>
      <p> -- </p>
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', width: '40%', justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' }} >
    <img src={img1} style={{ display: 'flex', width: '100%' }} />
    <img src={img2} style={{ display: 'flex', width: '80%', marginTop: '-50%', justifyContent: 'flex-end' }} />
  </div>
</div>
    </div>
  );
}

export default App;
