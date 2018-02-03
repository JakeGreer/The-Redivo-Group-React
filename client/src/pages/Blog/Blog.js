import React, { Component } from 'react'
import  Jumbotron from "../../components/Jumbotron"
import { Container } from "../../components/Grid"
import "./Blog.css";

class Blog extends Component {
    render() {
        return (
            
            <div>
                <Jumbotron 
                    header = "Blog"
                />
                <Container>

                </Container>
            </div>
        )
    }
}

export default Blog