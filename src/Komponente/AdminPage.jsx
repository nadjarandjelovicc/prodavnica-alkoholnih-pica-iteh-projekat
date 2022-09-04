import React from 'react'
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';

function AdminPage({pica,deletePice,editPice}) {
  return (
    
    <div>
            <h1>Dobrodosli na admin stranicu</h1>
            <table>
                <thead>
                    <tr><th>ID</th><th>NAZIV</th><th>CENA</th><th>OBRISI</th><th>IZMENI</th></tr>
                </thead>
                <tbody>
                        {pica.map((p)=>(<tr><td>{p.id}</td><td>{p.naziv}</td><td>{p.cena}</td><td><button className="btn" onClick={() => deletePice(p.id)}><BsFillTrashFill></BsFillTrashFill></button></td><td><button className="btn" onClick={() => editPice(p.id)}><BsPencilFill></BsPencilFill></button></td></tr>))}
                </tbody>
            </table>
    </div>



    
  )
}

export default AdminPage;