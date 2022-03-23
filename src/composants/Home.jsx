import { useContext, useState } from "react"
import { PanierContext } from "../context/panierContext";


export const Home = () => {
    const [products, setProducts] = useState([
        {id : 1 , titre : "Produit 1", contenu : "description produit 1", prix : 10},
        {id : 2 , titre : "Produit 2", contenu : "description produit 2", prix : 20},
        {id : 3 , titre : "Produit 3", contenu : "description produit 3", prix : 30},
        {id : 4 , titre : "Produit 4", contenu : "description produit 4", prix : 40},
        {id : 5 , titre : "Produit 5", contenu : "description produit 5", prix : 50},
    ]);

    const divStyle = {
        float: 'right',
        verticalAlign : 'bottom',
        fontWeight : 'bold',
        marginTop : '5px',
        fontSize : '20px'
    };

    let { panier } = useContext(PanierContext)

    function addProduct(product) {
        panier.push(product)
    }

    return <>
    <h1>Catalogue</h1>
    { products.map((product , index) => {
          return <article key={index} className="col-4">
          <table className="table table-striped border border-light rounded-3">
              <tbody>
                  <tr><td><h2>{ product.titre }</h2></td></tr>
                  <tr><td>{ product.contenu }</td></tr>
                  <tr>
                      <td className="align-right">
                          <button className="btn btn-primary" onClick={() => addProduct(product)}>ajouter au panier</button>
                          <span style={divStyle}>{ product.prix }€</span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </article>
    } )}
    </>
}