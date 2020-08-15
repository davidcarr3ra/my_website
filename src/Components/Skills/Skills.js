import React, { Component } from 'react';

class Skills extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomColor2() {
    const rdn = Math.floor(Math.random() * 5); // random integer from 0 to 4
    switch(rdn) {
      case 0:
        return "#11ABB0";
      case 1:
        return "#0763b0";
      case 2:
        return "#617690";
      case 3:
        return "#6066ad";
      case 4:
        return "#a590ad";
    }
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor2()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="skills">

        <div className="row skill">

           <div className="three columns header-col">
              <h1><span>Skills</span></h1>
           </div>

           <div className="nine columns main-col">

              {/*<p>{skillmessage}
              </p>*/}

              <div className="bars">
                <ul className="skills">
                 {skills}
                </ul>
              </div>
           </div>
        </div>
      </section>
    );
  }
}

export default Skills;

