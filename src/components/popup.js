import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
                <div className="title">
          <h1>OUPS &#127880;</h1>
        </div>
        <div className="body">
          <p>Vous venez de découvrir une fonctionnalité qui n’est pas encore disponible pour le moment, il faudrait attendre la nouvelle mise à jour du site !</p>
        </div>
            </div>
        </div>
    ) : "";
}

export default Popup