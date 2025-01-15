//rfc
import ReactDOM from 'react-dom';
import "./Modal.css";

export default function Modal({children, handleCerrar}) {
    return ReactDOM.createPortal((
        <div>
            <div className="modal-fondo">
                <div className="modal">
                    {children}
                    <button onClick={handleCerrar}>Cerrar</button>
                </div>
            </div>
        </div>
    ), document.body)
}
