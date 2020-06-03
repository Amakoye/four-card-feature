import React,{Component} from 'react';

//const cardClass = this.props.class;
class SingleCard extends Component{
   
    render(){
        return(
            <div className={"card "+this.props.class}>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <img src={this.props.img} alt=""/>        
            </div>
        )
    }
}

export default SingleCard;