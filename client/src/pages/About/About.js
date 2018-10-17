import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import AboutCards from "./AboutCards";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron header="About Us" />
        <Container>
          <AboutCards
            image="../public/img/Rechelle.jpg"
            text="Richelle is recognized for her experience and expertise in the real estate industry.
                                       There isn't any she hasn't seen while being a leader in the field of residential and
                                       commercial real estate over the years. Richelle is also on the leading edge with marketing with
                                       her bi monthly magazines, Blog, and high profile advertising. She has many awards over the years
                                       and her latest is Winning top 10 best real estate agents in California 2017-2018. Richelle is not
                                       only known for her notable sales career she also is a proud supporter of helping others and some
                                       charities she supports are The Family Assistance Ministries, CHOC Children's, and Salvation army."
            role="President"
            name="Richelle Redivo"
            attributes="Realtor, Broker, Investor"
          />
          <AboutCards
            image="../public/img/Ryan-Redivo.png"
            text="A native in Orange County, California. With an established Mother the business Ryan
                                       found his love for Orange County real estate at a young age. It's in his blood. After College,
                                       He obtained his Real Estate License. Ryan is known for his responsiveness and attention to
                                       detail as well as a proud supporter of the Family Assistance Ministries, CHOC Children's, and
                                       the Boys And Girls club of America."
            role="Sales Director"
            name="Ryan Redivo"
            attributes="Realtor, Investor, Entrepreneur"
          />
          <AboutCards
            image="../public/img/Kayla.png"
            text="Kayla's love for Real Estate begun very young. She has been the marketing
                                       director since the beginning. Her expertise in marketing keeps our listings getting
                                       the best exposure. Kayla graduated West Coast University obtaining a bachelors degree
                                       with high honors. She continuously supports CHOC Children's and the Family Assistance Ministries."
            role="Marketing Director"
            name="Kayla Redivo"
            attributes="BSN"
          />
        </Container>
      </div>
    );
  }
}

export default About;
