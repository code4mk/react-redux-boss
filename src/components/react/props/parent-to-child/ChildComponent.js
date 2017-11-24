import React, { Component } from 'react'

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.myPropsPosts
    }
  }
  render() {
    return (
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
                This is Props .  All data comes from Parent Component
            </h1>
           <div className="subtitle">
             <div className="columns">
               <div className="column is-8">
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
             </div>
           </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ParentComponent
