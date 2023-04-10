import React from 'react'
import './Footer.css'

function Footers() {
    return (
        <div className='footerContainer'>
            <div className='footer'>
                <div style={{marginTop: '10px'}}>{`ARTEMIS 1 a randomised, 20-month, multicentre, subject- and efficacy evaluator-masked, parallel-group, phase 3 clinical study.`}<sup>20</sup></div>
                <div >{`Bimatoprost implant is under investigation. The safety and efficacy of this product have not been established.`}</div>
                <div style={{marginTop:"15px"}}>{`References:`}</div>
                <div >{`20. Medeiros FA, et al. Ophthalmology. 2020;127(12):1627-1641.`}</div>
                </div>
        </div>
    )
}

export default Footers