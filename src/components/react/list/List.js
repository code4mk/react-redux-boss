import React, { Component } from 'react'
import axios from 'axios'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 1, title: "This is your webpack"},
        {id: 2, title: "This is your vue"},
        {id: 3, title: "This is your react"},
        {id: 4, title: "This is your angular"},
        {id: 5, title: "This is your ionic"},
        {id: 6, title: "This is your native"}
      ],
      axiosposts: []
    }
  }
  componentDidMount() {
   const self = this;
   axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(function (response){
      self.setState({ axiosposts: response.data })
     })
     .catch(function (error){
       console.log(error)
     });
}
  render() {
    return (
        <div className="columns">
          <div className="column is-8 is-offset-2">
          <section className="hero is-danger form-part">
            <div className="hero-body">
          <div>
            <h1>Default List</h1>
            <div>
              <table className="table  is-bordered is-striped is-narrow is-fullwidth">
                <thead>
                  <tr>
                    <th> ID </th>
                    <th> Title </th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.posts.map((post) =>
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td key={post.id}> {post.title}</td>
                    </tr>
                  )
                 }
                </tbody>
              </table>
            </div>

            <h1>Axios List</h1>
            <div>
              <table className="table  is-bordered is-striped is-narrow is-fullwidth">
                <thead>
                  <tr>
                    <th> ID </th>
                    <th> Title </th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.axiosposts.map((post) =>
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td key={post.id}> {post.title}</td>
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
export default List
