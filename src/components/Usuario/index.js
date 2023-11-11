import './style.css'


function Usuario({usuario}){
    return(
        <div className='contenedor-usuario'>
            <img src={usuario.photoUrl} alt = "" />
            <h3>{`${usuario.name} ${usuario.lastName}`}</h3>
            <h4>{usuario.type}</h4>

        </div>
    );
}

export default Usuario;