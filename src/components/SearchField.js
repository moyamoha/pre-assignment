import React, {useState} from 'react'

export default function SearchField({setFilter}) {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setFilter(searchQuery)
    }

    const handlePressEnter = (event) => {
        event.preventDefault()
        if(event.keyCode === 13) {// if user presses Enter key
            setFilter(searchQuery)
        }
    }
    return (
        <form id="search-bar" onSubmit={handleSubmit}>
            <input
                placeholder="search by city ..."
                type="text"
                id="search-input"
                onKeyUp={handlePressEnter}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
            ></input>
            <button type="submit" id="search-btn">
                Search Brewery
            </button>
        </form>
    );
}
