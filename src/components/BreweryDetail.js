import React from 'react'
import { useNavigate, useParams } from 'react-router'

export default function BreweryDetail({data}) {

    const {brew_id} = useParams()
    const brewery = data.find(brew => brew.id === brew_id)
    const brew_props = Object.keys(brewery).filter(prop => prop !== "id")
    const navigate = useNavigate();

    function goBack() {
        navigate("/")
    }

    return (
        <div id="detail-box">
            <div id="detail-card">
                    <h3>Showing details of each brewery</h3>
                <section>
                    {brew_props.map((prop) => (
                        <div key={prop}>
                            <strong>{prop}:</strong>
                            <span> {brewery[prop] ? brewery[prop] : "null"},</span>
                            <br></br>
                        </div>
                    ))}
                    </section>
                <button className="detail-btn back-btn" onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}
