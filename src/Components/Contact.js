import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>¡Un solo toque!</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Tus Nombres <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Asunto</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">¿Cómo puedo apoyarte?<span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Enviar Mensaje</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning">¡Uppss, Hubo un error!</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Su mensaje ha sido enviado con éxito<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Mis Contáctos</h4>
					   <p className="address">
						   {name}<br/>
						   {street} <br/>
						   {city}, {state} <br/>
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">¡Gracias por tu interés!</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        Con gusto podemos apoyarte a organizar la forma de implementar tus ideas con métodos prácticos que te ayuden a multiplicar el resultado de tus proyectos.
                        </span>
                     </li>
                     <li>
                        <span>
                        No es necesario que inventes lo que ya está definido y probado, sólo debes aprenderlo y aplicarlo. Te decimos como.
                        </span>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
