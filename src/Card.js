import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="card-container">
                    <header className='card-header'>
                        <span initials="JD">
                            <h2>Jane Doe</h2>
                        </span>
                    </header>
                    <main>
                        <ul>
                            <li><span>Birthday</span>Jan 1, 1990</li>
                            <li><span>Address</span> 123 street, Dallas, TX</li>
                            <li><span>Phone</span> 212-234-5763</li>
                        </ul>
                    </main>
                </section>
            </React.Fragment>
        );
    }
}

export default Card;
