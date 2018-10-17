import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Dropdown from "./Dropdown";
import axios from "axios";
import moment from "moment";
import "./Blog.css";

class Blog extends Component {
  state = {
    docs: [],
    limit: 3,
    page: 1,
    pages: 0,
    total: 0
  };

  componentWillMount() {
    this.getProjects();
  }

  getProjects = () => {
    let queryString = `/api/blog/get/${this.state.page}/${this.state.limit}`;
    console.log("query", queryString);
    axios
      .get(queryString)
      .then(res => {
        console.log("blog result", res.data);

        this.setState(
          {
            docs: [...res.data.docs],
            limit: res.data.limit,
            page: res.data.page,
            pages: res.data.pages,
            total: res.data.total
          },
          function() {
            console.log("state", this.state);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  nextPage = e => {
    e.preventDefault();
    this.setState({ page: this.state.page + 1 }, () => this.getProjects());
  };

  prevPage = e => {
    e.preventDefault();
    this.setState({ page: this.state.page - 1 }, () => this.getProjects());
  };

  jumpPage = e => {
    e.preventDefault();
    this.setState({ page: e.target.id.split("-")[1] }, () =>
      this.getProjects()
    );
  };

  showPrev = () => {
    if (this.state.page <= this.state.pages && this.state.page > 1) {
      return (
        <button className="btn page-btn" onClick={this.prevPage}>
          Prev
        </button>
      );
    }
  };

  showNext = () => {
    if (this.state.page < this.state.pages) {
      return (
        <button className="btn page-btn" onClick={this.nextPage}>
          Next
        </button>
      );
    }
  };

  setLimit = n => {
    return this.setState(
      {
        limit: n
      },
      () => this.getProjects()
    );
  };

  render() {
    return (
      <div>
        <Jumbotron header="Blog" />

        <div className="container top-container">
          <div className="row">
            <div className="col-md-10">
              <div className="blog-header">
                <h1 className="headerA">The Redivo Group Blog Spot</h1>
                <h4 className="headerB">Sharing our experiences</h4>.
              </div>
            </div>
            <div className="col-md-2">
              Results per page
              <Dropdown
                title={`${this.state.limit}`}
                items={[
                  {
                    name: "1",
                    onClick: () => {
                      this.setLimit(1);
                    }
                  },
                  {
                    name: "3",
                    onClick: () => {
                      this.setLimit(3);
                    }
                  },
                  {
                    name: "5",
                    onClick: () => {
                      this.setLimit(5);
                    }
                  },
                  {
                    name: "10",
                    onClick: () => {
                      this.setLimit(10);
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div
          className="testimonial-container"
          style={{
            backgroundImage: `url(${"../public/img/testimonial-bg.jpg"})`
          }}
        >
          <div className="container">
            <div className="blog-post-container">
              {this.state.docs.map(function(post, i) {
                return (
                  <div
                    className="blog-holder"
                    rel={post._id}
                    key={i + post._id}
                    id={`blog-post-${post._id}`}
                  >
                    <div className="row">
                      <div className="col-md-8">
                        <div className="blog-body-div mx-auto ">
                          <div className="blog-header-div">
                            <h3
                              className="blog-title"
                              id={`blog-title-${post._id}`}
                            >
                              {post.title}
                            </h3>
                            <h5
                              className="blog-date"
                              id={`blog-date-${post._id}`}
                            >
                              {moment(post.updatedAt).format(
                                `dddd, MMMM Do YYYY h:mmA`
                              )}
                            </h5>
                          </div>
                          <div className="blog-text-div">
                            <p
                              className="blog-text"
                              key={`text-${i}`}
                              id={`blog-text-p-${i}`}
                            >
                              {post.text}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="blog-img-div mx-auto text-center">
                          <img
                            className="blog-img img-fluid"
                            id={`blog-img-${post._id}`}
                            src={`https://redivo-backend.herokuapp.com/imgs/${
                              post.img
                            }`}
                            alt={`img-${post.img}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="blog-box">
          <div className="container">
            <div className="row btn-row">
              <div className="col-6 btn-left">{this.showPrev()}</div>
              <div className="col-6 btn-right">{this.showNext()}</div>
            </div>
            <div class="text-center">
              <p id="pageNums">
                Page {this.state.page} of {this.state.pages}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
