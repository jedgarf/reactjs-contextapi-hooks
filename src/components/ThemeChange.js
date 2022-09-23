import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeChange extends Component {
    static contextType = ThemeContext;
    render() { 
        // console.log(this.context);
        const { toggleTheme } = this.context;
        console.log(toggleTheme);
        return (
            <center>
                <button className='btn-primary' onClick={toggleTheme}>
                    Change Theme
                </button>
            </center>
        );
    }
}
 
export default ThemeChange;