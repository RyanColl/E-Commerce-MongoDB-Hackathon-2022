import React, {useEffect} from 'react'
function Shipping() {
    useEffect(() => {
        // change modal properties from here
        document.getElementById('modal').style.height = '430px'
    })
    return (
        <div className='tracking-div' id='TrackingDiv'>
        {/* <div style={{display: 'grid', placeItems: 'center', padding: '2em'}}> */}
            <p>Spend over $50 and shipping is free! Creators Club members unlock free shipping on any order.</p><br />
        
            <p><b>Streetz Footwear</b> can only ship to Canada and the United States.</p><br />
            <p className='bolded'>Standard Delivery:</p>
            <p>All shipping occurs from within the United States.</p>
            <p>Delivery time = 4 - 6 business days</p><br />
            <p className='bolded'>Public Holidays:</p>
            <p>Orders placed on or 1 day before a public holiday may take longer to be delivered. So, please expect additional delivery time.</p>
        </div>
        // </div>
    )
}

export default Shipping
