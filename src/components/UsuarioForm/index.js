import "./style.css"

function UsuarioForm() {
    return (
        <div className="form-container">
            <form className="form" onSubmit={() => console.log("submitted")}>
                <button onClick={() => console.log("cerrando")} type="button">X</button>
                <label htmlFor="form-name">Nombre:</label>
                <input id="form-name" name="name" type="text"/>
                <label htmlFor="form-lastname">Apellido:</label>
                <input id="form-lastname" name="lastName" type="text"/>
                <label htmlFor="form-type">Type:</label>
                <select id="form-type" name="type">
                {
                    ['ADMIN', 'SUPER_ADMIN', 'NORMAL'].map((type, index) => <option key={index}>{type}</option>)
                }
                </select>
                <label htmlFor="form-photo-url">Photo:</label>
                <input id="form-photo-url" name="photoUrl" type="text"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default UsuarioForm;