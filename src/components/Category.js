import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Category extends Component
{
    constructor()
    {
        super();
        this.state = {
            category: null,
            dataLoaded: false
        }
    }

    componentDidMount()
    {
        axios({
            method: 'GET',
            url: `/api/categories/${this.props.match.params.id}`
        })
        .then(data => {
            this.setState({
                category: data.data.data,
                dataLoaded: true
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    renderCategory()
    {
        const category = this.state.category;
        if(this.state.dataLoaded)
        {
            return (
                <div>
                    <p className="category">{category.category}</p>
                </div>
            )
        }
        else
        {
            return <p>Loading...</p>
        }
    }

    render()
    {
        return (
            <div className='Category'>
                {this.renderCategory()}
                <Link to="/">Back to Categories</Link>
            </div>
        )
    }
}

export default Category;