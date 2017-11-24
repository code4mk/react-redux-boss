import React, { Component } from 'react'
import axios from 'axios'
class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [
        {id:1, name: 'posts'},
        {id:2, name: 'comments'}
      ],
      meValue: '',
      axiosposts: []
    };
  }

  componentDidMount() {
   const self = this;
   // let url = this.state.selectOptions[this.state.meKey-1].name
   let url = this.state.meValue
   if (this.state.meValue !== '') {
     return (
       axios.get(`https://jsonplaceholder.typicode.com/${url}`)
         .then(function (response){
          self.setState({ axiosposts: response.data })
         })
         .catch(function (error){
           console.log(error)
         })
     )
   }
}
  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2">
      <section className="hero is-danger form-part">
        <div className="hero-body">
          <div className="">
            <h1 className="title">
                Input Form System
                    <p><strong>{this.state.selectOptions[0].name}</strong></p>
                <p>{this.state.meValue}</p>
            </h1>
           <h2 className="subtitle">
             <div className="columns">
               <div className="column is-8">
                 <div className="select">
                    <select value={this.state.meValue} onClick={this.componentDidMount.bind(this)}  onChange={(e) => {this.setState({meValue: e.target.value})}}>
                    <option  >Select One</option>
                    {
                        this.state.selectOptions.map((post) =>
                        <option  key={post.id} value={post.value}>{post.name}</option>
                      )
                     }
                  </select>
                  </div>
               </div>
             </div>
           </h2>
           <div className="column is-10 is-offset-1">
             <table className="table  is-bordered is-striped is-narrow">
               <thead>
                 <tr>
                   <th> ID </th>
                   <th> Body </th>
                 </tr>
               </thead>
               <tbody>
               {
                 this.state.axiosposts.map((post) =>
                   <tr key={post.id}>
                     <td>{post.id}</td>
                     <td key={post.id}> {post.body}</td>
                   </tr>
                 )
               }
               </tbody>
             </table>
           </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    );
  }
}
export default SelectForm
