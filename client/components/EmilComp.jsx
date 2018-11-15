import React from 'react'

import MobileComp from './MobileComp'


const EmilComp = () => {

    function renderMobile(){
        if (window.innerWidth<'769'){
            return(
                <React.Fragment>
                    <MobileComp />
                </React.Fragment>
            )
        }
    }

    return(
        <div id='name'>
            <h1 id='Emil'>Emil Schroder</h1>
            {renderMobile()}
        </div>
        
    )
}

export default EmilComp