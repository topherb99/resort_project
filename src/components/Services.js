import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaApplePay, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {

state = {
  services:[
    {
      icon:<FaCocktail/>,
      title:"literally drink yourself stupid",
      info:"If you've got a mild to severe drinking problem we've got you covered, all our drinks are FREE!!"
    },
    {
      icon:<FaApplePay/>,
      title:"Multiple payment types",
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon:<FaShuttleVan/>,
      title:"Free Shuttle",
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon:<FaBeer/>,
      title:"Beer is always good",
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
}
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    )
  }
}
