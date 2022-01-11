import React from 'react'
import { AppProvider } from '../../context/AppContext'

function Loader() {
    const {state, dispatch} = React.useContext(AppProvider)
    return (
        <>
            {state.loading &&
            <div className="loading">
                <span className="l l1"></span>
                <span className="l l2"></span>
                <span className="l l3"></span>
                <span className="l l4"></span>
                <span className="l l5"></span>
                <span className="l l6"></span>
                <span className="l l7"></span>
                <span className="l l8"></span>
                <span className="l l9"></span>
            </div>
            }
        </>
    )
}

export default Loader
