import React from 'react'
import prd1 from './prd1.jpg';
import pine from './pine green.webp'
import red from './red.jpg'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'

export default function Shoppingsec() {
  return (
    <div>
      <div class="container my-4">
        <span>

        <h1>Company : The Shoe House</h1>
        </span>
         <div class="row">
             <div class="col">
                <img src={prd1} height='200' width='300' alt=''/>
                <div>
                    <p>Jordan Air 1<br/>UK 7-10<br/>Rs.4999
                    <br/>

                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                qty
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">1</a></li>
                <li><a className="dropdown-item" href="/">2</a></li>
                <li><a className="dropdown-item" href="/">3</a></li></ul>

                <br/>
                   
                    <button type="button" class="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                    
            </div>
            <div class="col">
            <img src={pine} height='200' width='300' alt=''/>   
            <div>
                    <p>Jordan Pine green Sb-4<br/>UK 7-10<br/>Rs.14999
                    <br/>
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                qty
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">1</a></li>
                <li><a className="dropdown-item" href="/">2</a></li>
                <li><a className="dropdown-item" href="/">3</a></li></ul>

                <br/>
                    <button type="button" class="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                
            </div>
            <div class="col">
            <img src={red} height='200' width='300' alt=''/>  
            <div>
                    <p>Cherry red Canvas<br/>UK 7-10<br/>Rs.5999
                    <br/>

                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                qty
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">1</a></li>
                <li><a className="dropdown-item" href="/">2</a></li>
                <li><a className="dropdown-item" href="/">3</a></li></ul>

                <br/>

                    <button type="button" class="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                
             </div>
        </div>
        </div>
        <div class="container my-4">
            <h1> Company : Sneakhoods</h1>
         <div class="row">
             <div class="col">
                <img src={img1} height='200' width='300' alt=''/>
                <div>
                    <p>Chunky yellow m1-2<br/>UK 7-10<br/>Rs.7999
                    <br/>

                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                qty
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">1</a></li>
                <li><a className="dropdown-item" href="/">2</a></li>
                <li><a className="dropdown-item" href="/">3</a></li></ul>

                <br/>

                    <button type="button" class="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                    
            </div>
            <div class="col">
            <img src={img2} height='200' width='300' alt=''/>   
            <div>
                    <p>Jordan Air 1<br/>UK 7-10<br/>Rs.3999
                    <br/>

                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                qty
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">1</a></li>
                <li><a className="dropdown-item" href="/">2</a></li>
                <li><a className="dropdown-item" href="/">3</a></li></ul>

                <br/>
                    <button type="button" class="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                
            </div>
            <div class="col">
            <img src={img3} height='200' width='300' alt=''/>  
            <div>
                    <p>Notion brown sneaker<br/>UK 7-10<br/>Rs.8999
                    <br/>
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                qty
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">1</a></li>
                <li><a className="dropdown-item" href="/">2</a></li>
                <li><a className="dropdown-item" href="/">3</a></li></ul>

                <br/>
                    <button type="button" class="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                
             </div>
        </div>
        </div>
    </div>
  )
}
