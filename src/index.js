import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
// import db, { Friend } from '../db/index'

// console.log('Hello');

class Friends extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
    };
    this.incrementor = this.incrementor.bind(this);
  }

 async componentDidMount () {
    try{
      const response = await axios.get('./api/friends');
      const friends = response.data;


      this.setState({friends});

    } catch(err) {
      console.log('Error');
    }
  }

  incrementor(rating) {
    const finder =
    this.setState({})
  }


  render() {
    return (

      <div id="main">
         <h1>Friends List</h1>
         <button>Create</button>
          <div id="friend">
            {
              this.state.friends.map(elem => {
                return (
                  <div id="container" key={elem.id}>
                    <li>{elem.name}</li>
                      <h1>5</h1>
                        <button onClick={() => this.incrementor(elem) }>+</button>
                        <button>-</button>
                        <button>x</button>
                  </div>
                )
              })
            }
          </div>
      </div>
    )
  }
}

ReactDOM.render(<Friends />, document.getElementById('friends-list'));
// const render = (friends)=> {
//   const ul = document.querySelector('ul');
//   const error = document.querySelector('#error');
//   error.innerText = '';
//   friends.sort((a, b)=> b.rating - a.rating);
//   const html = friends.map( friend => {
//     return `
//       <li data-id='${friend.id}'>
//         <h2>${ friend.name }</h2>
//         <span>${ friend.rating }</span>
//         <button data-id='${friend.id}'>+</button><button data-id='${friend.id}'>-</button><button data-id='${friend.id}'>x</button>
//       </li>
//     `;
//   }).join('');
//   ul.innerHTML = html;
// };

// const init = async()=> {
//   const response = await axios.get('/api/friends');
//   let friends = response.data;
//   render(friends);
//   const ul = document.querySelector('ul');
//   const form = document.querySelector('form');
//   const error = document.querySelector('#error');

//   ul.addEventListener('click', async(ev)=> {
//     if(ev.target.tagName === 'BUTTON'){
//       if(ev.target.innerHTML === 'x'){
//         const id = ev.target.getAttribute('data-id')*1;
//         await axios.delete(`/api/friends/${id}`);
//         friends = friends.filter(friend => friend.id !== id);
//         render(friends);
//       }
//       else {
//         const id = ev.target.getAttribute('data-id')*1;
//         const friend = friends.find(item => item.id === id);
//         const increase = ev.target.innerHTML === '+';
//         friend.rating = increase ? ++friend.rating : --friend.rating;
//         await axios.put(`/api/friends/${friend.id}`, { rating: friend.rating });
//         render(friends);
//       }
//     }
//   });

//   form.addEventListener('submit', async(ev)=> {
//     ev.preventDefault();
//     try {
//       const response = await axios.post('/api/friends');
//       friends.push(response.data);
//       render(friends);
//     }
//     catch(ex){
//       error.innerText = ex.response.data.error;
//     }
//   });
// };

// init();
