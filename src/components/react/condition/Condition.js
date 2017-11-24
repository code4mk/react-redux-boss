import React, { Component } from 'react'

class Condition extends Component {
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
      status: true
    };
  }
  condtionTrue(){
    this.setState((prevState, props) => ({
      status: true
    }));
  }
  condtionFalse(){
    this.setState((prevState, props) => ({
      status: false
    }));
  }
  render() {
    return (
      <div className="columns ">
        <div className="column is-8 is-offset-2 ">
        <section className="hero is-danger component-part">
          <div className="hero-body">
            <div className="">
            <a className="button btn-getreact is-primary is-outlined" onClick={(e) => this.condtionTrue()}>True</a>
            <a className="button btn-getreact is-link is-outlined" onClick={(e) => this.condtionFalse()}>False</a>
                  {(() => {
                    if (this.state.status) {
                      return (
                        <div className="column is-10 is-offset-1 ">
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
                      );
                    } else {
                      return (
                        <h2>You have no post!</h2>
                      );
                    }
                  })()}
            </div>
          </div>
        </section>
        </div>
      </div>
    );
  }
}
export default Condition
