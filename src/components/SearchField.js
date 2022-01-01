import React, {useState} from 'react'

export default function SearchField({data, doSearch}) {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSubmit = (e) => {
        if (e.target.value !== "") {
            
        }
    }

    return (
        <form id="search-bar" onSubmit={handleSubmit}>
            <input type="text" onChange={e => setSearchQuery(e.target.value)} value={searchQuery}></input>
            <button>Search</button>
        </form>
    )
}
