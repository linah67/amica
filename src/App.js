import './App.css';

function App() {
  return (
    <div className="App">
      <ul className='nav'>
        <li><button className='b'> Home</button></li>
        <li><button className='b'>Discover</button></li>
        <li><button className='b'> How it works</button></li>
        <li><button className='b'> About Us</button></li>
        <li><button className='b'> Contact Us</button></li>
       <ul className='r'>
       <li > <button className='b'> Login</button></li>
       <li><button className='b2'> Get Started</button></li>
       <li><button className='b' > EN</button></li>
       </ul>
      </ul>      
     
       <div className='container'>
       <div className='containerV'>
          <span className='title'> About Amica</span>
          <p>
          Established in 2017 , Amica is mental health an well<br></br>-being service for students from 13 to 19 years old ,<br></br>and , 
          we aim to improve the lifestyle and increase their <br></br>productivity.</p>
       </div>
       <img  alt='amica' src={require("./amica.png")}  width="450" height="200"/>
      </div>
      <div className='body'>
      <span className='title'> Who We Are</span>
      <p className='paragraph'>
      Amica is an organization that helps students improve their health wellbeing and increase productivity. As <br></br> it provides the students with a full health environment from challenges, tests, exercises, and live <br></br> sessions to how to deal with their mental health, and one on one sessions (Physiological – Nutrition - <br></br> Counseling) to realize their stress, and finally, if they need a specialist, we will provide them.
      </p>
      <div className='container2'>
      <div className='containerV2'>
      <h1> Problems we are solving</h1>
      <h2>
        Life's Stresses
      </h2>
      <p className='paragraph2'>
      Amica is a organization that helps students improve their health wellbeing and increase productivity. As <br></br> it provides the students with a full health environment from challenges, tests, exercises, and live <br></br> sessions to how to deal with their mental health, and one on one sessions (Physiological – Nutrition - <br></br> Counseling) to realize their stress, and finally, if they need a specialist, we will provide them.
      </p>
      <button>  Learn More</button>
      </div>
      <img  alt='amica' src={require("./pic1.png")}  width="900" height="490"/>
      </div>
      <div className='container3'>
        <div className='square'>

        </div>
        <div className='square'>

        </div>
      </div>
      </div>
     
    
    </div>
  );
}

export default App;
