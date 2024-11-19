import { FormularioDatosUsuario } from "./FormularioDatosUsuario";
import { useState } from "react";
import { BarraLateral } from "./BarraLateral";
import { obtenerMisExperiencias } from '/src/global/api/seccionBusca'
import { ExperienciaCard } from "./usuarioBusca";
import { NuevaExperienciaCard } from './usuarioBusca/NuevaExperienciaCard';

import '../styles/menuWrapper.css';
import { EntidadGrid } from "./usuarioBusca";

export const MenuWrapper = () => {

    const [componenteActivo, setComponenteActivo] = useState(<EntidadGrid clave='experiencias' peticion={obtenerMisExperiencias}
        Componente={ExperienciaCard} NuevaEntidadComponente={NuevaExperienciaCard} />);

    return (
        <main className="menu-container">
            <BarraLateral cambiarComponenteActivo={setComponenteActivo} />
            {componenteActivo}
        </main>
    )
}
