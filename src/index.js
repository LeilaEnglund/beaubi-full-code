import React from "react";
import ReactDOM from "react-dom";
import { useForm } from 'react-hook-form';
import { Container} from "semantic-ui-react";
import "./style.css";
import Example from "./form";
import Form from "./newForm";
import $ from "jquery";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
  
    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
 
 <div>
<div class="header" expand="lg">
        <div class="header-cont">
        
      <img class="logo" src="beaubi_logo.png" alt='logo'width="150" height="60"/>
      </div>
      </div>
  <App>

   



<div class="thb_title  style7  " id="thb-title-5e8b3aba96479">
    
  	<div class="thb_title_inner">

  		
              	  <h4>PRODUCT LIBRARY</h4>

        
    </div>
    </div>
    
    <p>Help us to build a library of products wanted by you</p>
 
    <Form />

  </App>
  </div>,
  document.getElementById("root")
);

const scriptURL = 'https://script.google.com/macros/s/AKfycbzsOg97v-SDaVibiJqN9tzp38TtpPcGuKiNcN6Cx-zQUha_ajK2/exec'
const form = document.forms['test-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(form)
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

