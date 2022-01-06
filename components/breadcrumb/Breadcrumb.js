import React from 'react'
import Breadcrumbs from 'nextjs-antd-breadcrumbs';

function Breadcrumb() {
    return (
        <Breadcrumbs 
            className='breadcrumb'
            useDefaultStyle 
            omitRootLabel
            rootLabel="Home" 
        />
    )
}

export default Breadcrumb
