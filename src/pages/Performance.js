import React from 'react';
import './Performance.css';

function Performance() {
    return (
        <div className='performance'>
            <div className="performance__flexContainer">
                <div className="performance__video">
                    <iframe title="videoOne"
                        src="https://www.youtube.com/embed/rB8TYrsjjoE">        
                    </iframe>
                </div>
                <div className="performance__video">
                    <iframe title="videoTwo"
                        src="https://www.youtube.com/embed/fM70uPsMLis">        
                    </iframe>
                </div>

                <div className="performance__video">
                    <iframe title="videoTwo"
                        src="https://www.youtube.com/embed/Yt7ikda6SxQ">        
                    </iframe>
                </div>
                
                <div className="performance__video">
                    <iframe title="videoTwo"
                        src="https://www.youtube.com/embed/ZmhMRCNwOLE">        
                    </iframe>
                </div>
                
                <div className="performance__video">
                    <iframe title="videoTwo"
                        src="https://www.youtube.com/embed/yTXoZMfFCMM">        
                    </iframe>
                </div>
                
                
            </div>
        </div>
    )
}

export default Performance
