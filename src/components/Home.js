import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Home extends Component
{
    constructor()
    {
        super();
        this.state = {
            categories: [],
            dataLoaded: false
        }
    }

    componentDidMount()
    {
        axios({
            method: 'GET',
            url: '/api/categories'
        })
        .then(data => {
            this.setState({
                categories: data.data.data,
                dataLoaded: true
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    renderCategories()
    {
        if(this.state.dataLoaded)
        {
            return this.state.categories.map(category => {
                return (
                    <div key={category.id}>
                        <Link to={`/${category.id}`}>{category.category}</Link>
                    </div>
                )
            })
        } else {
            return <p>Loading...</p>
        }
    }

    render()
    {
        return (
            <div className="Home">
                <h1>Categories</h1>
                {this.renderCategories()}
            </div>
        )
    }
}

export default Home;