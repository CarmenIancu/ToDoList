import React, { Component } from 'react';
import './App.css';


class App extends Component {
constructor() {
    super();
    this.state = {
      userInput:'',
      list:[]
    }
    
  }

addItem=(event) => {
  this.setState({userInput:event.target.value})
}



deleteItem=(key,e)=>{
const newerlist=this.state.list.filter(function(list){
  return (list.key !== key)
});
this.setState({list:newerlist})
}


onSubmit =(event) => {
event.preventDefault();
if (this.state.userInput !== '') {
const newList ={
  value:this.state.userInput,
  key:Date.now()};
const list = this.state.list;
list.push(newList);
this.setState({list: list, userInput:''})
}

}   

  render() {
    return (
        <div className='tc' >
        <div className ='br3 pd3 ma2 grow bw2 shadow5 madras'>
          <h1> Carmen's To Do List </h1>
          <p> Get it done today! </p>
        </div>

     
      <form
      onSubmit={(event)=> this.onSubmit(event)}>
        <input 
        type="text"
        onChange={(event)=>this.addItem(event)}
        value={this.state.userInput}
        placeholder ='add item...'
        />

      </form>
    
      <ul>
          {this.state.list.map((item,key)=>{
            return(
              <article key={key} onClick={()=>this.deleteItem(item.key)} class="tc br2 ba lined-paper dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
              <img alt='aliens' src = {`https://robohash.org/set_set4/${key}`} height={50} width={50}/>
              <li>{item.value}</li>
              </article>)
          })
        }
        </ul>
      
        </div>
   ) 
  }
}

export default App;
