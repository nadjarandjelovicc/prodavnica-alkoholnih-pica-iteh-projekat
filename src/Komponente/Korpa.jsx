import React, { useState } from 'react'
import PiceKartica from './PiceKartica'

function Korpa({pica,onAdd,onRemove }) {
 
  return (
    <div> 
        <div className='svaPica'>
              
            <table>
                <thead>
                    <tr><th>ID</th><th>NAZIV</th><th>CENA</th><th>KOLICINA</th></tr>
                </thead>
                <tbody>
                        {pica.map((p)=>(<tr><td>{p.id}</td><td>{p.naziv}</td><td>{p.cena}</td><td>{p.kolicina}</td></tr>))}
                </tbody>
            </table>

               
                

        </div>
    </div>
  )
}

export default Korpa;