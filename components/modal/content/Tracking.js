import React from 'react'
import { useEffect } from 'react/cjs/react.development'

function Tracking() {
    useEffect(() => {
        // change modal properties from here
        document.getElementById('modal').style.height = '300px'
    })
    return (
        <div id='tracking' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column',  padding: '0.5em'}}>
            <span><b>Streetz Footwear</b> can only ship to Canada and the United States.</span><br />
            <span>Standard Delivery:</span>
            <span>All shipping occurs from within the United States.</span>
            <span>Delivery time = 4 - 6 business days</span><br />
            <span><b>Public Holidays: </b>Orders placed on or 1 day before a public holiday may take longer to be delivered. So, please expect additional delivery time.</span>
        </div>
    )
}

export default Tracking
