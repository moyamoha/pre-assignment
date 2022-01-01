import React from 'react'

export default function Home({data, setData}) {
    return (
        <div id="main-content">
            <SearchField data={data} doSearch={setData}></SearchField>
        </div>
    )
}
