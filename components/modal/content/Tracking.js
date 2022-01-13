import React, { useEffect } from 'react'

function Tracking() {
    useEffect(() => {
        // change modal properties from here
        document.getElementById('modal').style.height = '300px'
    })
    return (
        <div className='tracking-div' id='TrackingDiv'>
            <span><b>Streetz Footwear</b> can only ship to Canada and the United States.</span><br />
            <span><b>Standard Delivery:</b></span>
            <span>All shipping occurs from within the United States.</span>
            <span>Delivery time = 4 - 6 business days</span><br />
            <span><b>Public Holidays: </b><br />Orders placed on or 1 day before a public holiday may take longer to be delivered. So, please expect additional delivery time.</span>
        </div>
    )
}

export default Tracking
