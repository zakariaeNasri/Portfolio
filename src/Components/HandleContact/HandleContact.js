import React from 'react';
import axios from 'axios';
import './HandleContact.css'
import Loca from'../../Photos/pin.png'
import Gmail from'../../Photos/gmail.png'
import Phone from '../../Photos/phone-call.png'

class HandleContact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    
    e.preventDefault();
    axios({
      method: "POST",
      url:"https://git.heroku.com/myportfolio48.git/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: "", email: "", message: ""})
  }

  render() {
    return(
      
      <div className="containerC">
      <span className="big-circle" />
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Contact me for Work 
          </p>
          <div className="info">
            <div className="information">
              <img src={Loca} className="icon" alt="" />
              <p>Morocco , Oujda</p>
            </div>
            <div className="information">
              <img src={Gmail} className="icon" alt="" />
              <p>nasrizakariae.dev@gmail.com</p>
            </div>
            <div className="information">
              <img src={Phone} className="icon" alt="" />
              <p>+212 6 37 21 43 66</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/zaki.nasri2/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://wa.me/+212637214366">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="https://www.instagram.com/zakaria.nasri.48/">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/zakariae-nasri-957019204/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one" />
          <span className="circle two" />
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <h3 className="title">Contact me</h3>
            <div className="input-container">
              <input placeholder="USERNAME.." required type="text" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} className="input" />
             
            </div>
            <div className="input-container">
              <input placeholder="EMAIL ADRESS.."required  type="email" name="email"  id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="input" />
              
            </div>
            
            <div className="input-container textarea">
              <textarea placeholder="WRITE YOUR MESSAGE HERE.." required name="message" className="input" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              
            </div>
            <input type="submit" defaultValue="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
/*
 <form  id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <h1>Contact me</h1>
          <div className="form-group">
              
              <input required placeholder="Full Name" type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              
              <input required placeholder="Email Adress" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              
              <textarea required placeholder="Write your message.............." className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>*/

export default HandleContact;