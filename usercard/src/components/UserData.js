import axios from 'axios'
import React, { Component } from 'react';
import UserCard from './UserCard'

class UserData extends React.Component {
constructor() {
  super();
    this.state = {
        userData: [],
        followers: [
          "biskoi",
          "tetondan",
          "dustinmyers",
          "justsml",
          "luishrd",
          "bigknell"
        ]
      }
    }
      componentDidMount() {
        console.log("mounted")
        axios
          .get('https://api.github.com/users/daltonmiller')
          .then(res => {
            console.log(res)
            this.setState({ userData: [...this.state.userData, res.data] })
          })
            .catch(err => console.log('nope', err))

            setTimeout(this.state.followers.forEach(follower => (
              axios.get(`https://api.github.com/users/${follower}`)
              .then(res => {
                this.setState({
                  userData: [...this.state.userData, res.data]
                })
              })
              .catch(err => console.log(err.message))
            )), 100)
        
          
          
      }

  
      render() {
        console.log("rendering")
      return(
        <div className="App">
         usercard
         <div>
         {this.state.userData.map(user => (
           <UserCard key={user.id} userData={user} />
         ))}
         </div>
        </div>
      );
    }
  }
    export default UserData