import React from 'react'
import { Link } from 'react-router-dom'

export default function BreweryCard({item}) {
    return (
        <div className="brewery-card">
            <section>
                <span>{item.name}</span> <br></br>
                <span>{item.brewery_type}</span> <br></br>
                <span>{item.city}</span>
            </section>
            <Link to={`/details/${item.id}`} className="detail-btn">
                View Details
            </Link>
        </div>
    );
}
