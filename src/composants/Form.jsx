import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProfilContext } from "../context/profilContext"


export const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        commentary: ""
    })

    const profilContext = useContext(ProfilContext)
    const navigate = useNavigate()

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value})
    }

    function handleSubmit(e) {
        const { name, email, address, commentary } = form;
        e.preventDefault()
        if( name.length > 0 && email.length > 0 && address.length > 0 ) {
            profilContext.setProfil({ ...form })
            navigate("/commande")
        } else {
            alert("Veuillez remplir les 3 premiers champs")
        }
    }

    return <div>
        <h2>Votre profil</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mt-4" name="name" placeholder="Nom" value={form.name} onChange={handleChange} />
            <input type="text" className="form-control mt-4" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="text" className="form-control mt-4" name="address" placeholder="Adresse" value={form.address} onChange={handleChange} />
            <textarea type="text" className="form-control mt-4" name="commentary" placeholder="Commentaire" value={form.commentary} onChange={handleChange} />
            <input type="submit" className="btn btn-warning mt-4" value="Commander" />
        </form>
    </div>
}