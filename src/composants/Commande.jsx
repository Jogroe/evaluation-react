import { useContext } from "react"
import { PanierContext } from "../context/panierContext";

export const Commande = () => {

    let panierContext = useContext(PanierContext)

    return <div>
        <h1>Bon de commande</h1>
        <div>Merci pour votre commande!</div>
        <table className="table table-striped border border-light">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prix</th>
                </tr>
            </thead>
            <tbody>
                { panierContext.panier.map((panier , index) => {
                    return<tr key={index}>
                        <td>{panier.id}</td>
                        <td>{panier.titre}</td>
                        <td>{panier.prix}€</td>
                    </tr>
                } )}
            </tbody>
          </table>
        <hr />
        <h2>Détail livraison</h2>
        <ul>
            <li>nom:</li>
            <li>email:</li>
            <li>adresse:</li>
            <li>commentaire:</li>
        </ul>
    </div>
}