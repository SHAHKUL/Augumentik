// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="log">
          <img src="https://cdn-icons-png.flaticon.com/512/55/55027.png" />
          <h1>Blackcombine</h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Solution</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
            <hr></hr>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p id="tag">
              Business Platform For More Productive & Integrated Operations
            </p><br/>
            <p id="para">
              Let Blackcombine take care fo the attendance, payroll,
              bookkeeping, and taxation processes so you can focus more on
              business development.
            </p><br/>
            <div className="ctrl">
            <button id="get">Get Started</button>
            <button id="learn">  <span ><i id="fon" class="fa-solid fa-fingerprint fa-2x"></i></span>Learn More</button>
          
           
            </div>
            <div ><br></br>
              <p>Popular</p>
              <div className="ord">
                <p><i  id="font" class="fa-brands fa-paypal"></i>Payroll & HRIS</p>
                <p><i id="font" class="fa-solid fa-file-invoice"></i>Accountancy</p>
                <p><i id="font" class="fa-solid fa-money-bill"></i>Taxation</p>
                <p> <i id="font" class="fa-solid fa-chart-simple"></i>CRM</p>
              </div>
            </div>
          </div>
          <div  className="col-6"><img id="fine" src="https://www.smartinsights.com/wp-content/uploads/2018/10/blockchain-3019121_1280.png"/> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
