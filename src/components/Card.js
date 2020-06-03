import React,{ Component } from "react";

import SingleCard from "./SingleCard";

import supervisor from './assets/images/icon-supervisor.svg';
import team from './assets/images/icon-team-builder.svg';
import karma from './assets/images/icon-karma.svg';
import calc from './assets/images/icon-calculator.svg';


const card = [
    {class:'card-super', title:'Supervisor', body:'Monitors activity to identify project roadblocks', img:supervisor},
    {class:'card-team', title:'Team Builder', body:'Scans our talent network to create the optimal team for your project', img:team},
    {class:'card-calc', title:'Calculator', body:'Uses data from past projects to provide better delivery estimates', img:calc},
    {class:'card-karma', title:'Karma', body:'Regularly evaluates our talent to ensure quality', img:karma}
]

class Card extends Component{
    render(){
        return(
            <div className="container">
               {
                   card.map((singleCard,index)=>{
                       return <SingleCard {...singleCard} key={index}/>
                   })
               }
            </div>
        )
    }
}

export default Card;
