import Usuario from '../Usuario';
import './style.css'


function ListaUsuarios(){
    return (
        <div className="lista-usuarios">
            <Usuario usuario={
                {
                 name : "Sebas",
                 lastName : "Alarcon",
                 type : "Admin",
                 photoUrl: "https://live.staticflickr.com/8478/29142086241_e81d6facfa_c.jpg",

            }} />
          
        </div>
    )
}



export default ListaUsuarios;