import { useContext } from "react"
import { ProfilContext } from "../context/profilContext";

export const Profil = (props) => {

    const { profil } = useContext(ProfilContext)

    return <div>
        <h2>Détail livraison</h2>
        <ul>
            <li>Nom: { props.profil.name }</li>
            <li>Email: { props.profil.email }</li>
            <li>Adresse: { props.profil.address }</li>
            <li>Commentaire: { props.profil.commentary }</li>
        </ul>
    </div>
}