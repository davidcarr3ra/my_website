import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer id="contact">
        <div>
          <h1 className="tc pb4">Contact</h1>
          <p className="tc pl4 pr4">Best way to get in touch with me: <a href="mailto: david.carrera@columbia.edu">david.carrera@columbia.edu</a>. Feel free to reach out!</p>
          
          {/*<div className="row">
            <div className="twelve-columns">
              <ul className="social-links">
                  {networks}
              </ul>
            </div>
          </div>*/}
        </div>

       <div className="row">
          <div className="twelve columns">
             <ul className="social-links">
                {networks}
             </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
       </div>
      </footer>
    );
  }
}

export default Footer;
