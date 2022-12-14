import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
                <div className="title">
                <img class="svg 404"  src="/assets/img/popupface.svg" alt=""/>
          <h1>OUPS &#127880;</h1>
        </div>
        <div className="body">

          <p> Coming Soon!!</p>
        </div>
            </div>
        </div>
    ) : "";
}

export default Popup