import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { PanierContext } from "../context/panierContext";


export const Panier = () => {
    const valid = {
        textDecoration : 'none',
        color : 'black'
    };

    let panierContext = useContext(PanierContext)

    function deleteProduct(product) {
        panierContext.setPanier(panierContext.panier.filter((item) => item.id !== product))
    }

    

    return <div>
        <h1>Votre Panier</h1>
        <table className="table table-striped border border-light">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prix</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                { panierContext.panier.map((panier , index) => {
                    return<tr key={index} id={panier.id}>
                        <td>{panier.id}</td>
                        <td>{panier.titre}</td>
                        <td>{panier.prix}€</td>
                        <td><button className="btn btn-danger" onClick={() => deleteProduct(panier.id)}>supprimer</button></td>
                    </tr>
                } )}
            </tbody>
          </table>
        <hr />
        <h2>Votre profil</h2>
        <form >
            <input type="text" className="form-control mt-4" placeholder="votre nom" name="name"/>
            <input type="text" className="form-control mt-4" placeholder="votre email"  name="email"/>
            <input type="text" className="form-control mt-4" placeholder="votre rue / code postal / ville"  name="adress"/>
            <textarea className="form-control mt-4" name="comment" placeholder="commentaires" rows="5" ></textarea>
            <Link to="/commande" type="submit" style={valid} className="btn btn-warning mt-4">Commander</Link>
        </form>
    </div>
}