import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    }

    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    color: '#ff0000',
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    fontSize: '20px',
    fontWeight: 'bold'
}

export default TodoItem
