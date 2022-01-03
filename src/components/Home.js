import React, {useState } from 'react'
import SearchField from './SearchField'
import BreweryCard from './BreweryCard'

export default function Home({breweries}) {

    const [filter, setFilter] = useState("")
    const showingData = filter !== "" ? (
        breweries.filter(brew => brew.city.toLowerCase().includes(filter.toLowerCase())) // Searching by city
    ) : breweries;

    return (
        <div id="main-content">
            <SearchField setFilter={setFilter}></SearchField>
            <div id="brewery-list">
                {showingData
                    ? (showingData.length > 0 ? showingData.map((brewery) => (
                        <BreweryCard
                            key={brewery.id}
                            item={brewery}
                        ></BreweryCard>
                    )) : <p style={{"color": "white"}}>Check your search query</p>)
                    : <p style={{color: "white"}}>Loading breweries' data...</p>}
            </div>
        </div>
    );
}
