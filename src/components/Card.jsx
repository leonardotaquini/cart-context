import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className="card d-flex" style={{ width: '18rem' }}>
                <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Product Image"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title flex-fill">Nombre del Producto</h5>
                    <p className="card-text flex-fill">
                        Descripción corta del producto. Puedes agregar más detalles aquí.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item flex-fill">Precio: $XX.XX</li>
                    <li className="list-group-item flex-fill">Disponibilidad: En Stock</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-outline-primary w-100">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}
