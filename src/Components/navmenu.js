import React from 'react'

function navmenu({x}) {
    return (
        <ul className="list">
            {x.map(el => el.drop ?
                <li className="titre">{el.titre}
                    <ul className="dropdown">
                        { el.drop.map(e =>
                                <li>{e}</li>
                            )}
                    </ul>

                </li> : <li className="titre">{el.titre}</li>
            )}
        </ul>
    )
}






















export default navmenu