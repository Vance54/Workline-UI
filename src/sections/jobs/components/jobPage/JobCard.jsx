import { useNavigate } from 'react-router';
import { getViewString } from '../../../../global/helpers';

import '../../styles/jobPage/jobCard.css'
import { convertirFechaCliente } from '../../../../global/helpers/fechas';

export const JobCard = ({oferta}) => {
  const navigate = useNavigate();

  const redirect = () => {
    const id = oferta.id
    navigate(`/ofertasDeTrabajo/oferta/${id}`);
  }

  return (
    <li className='job-card' onClick={redirect}>
        <section className='first-section'>
            <h4>{oferta.puesto}</h4>
            <h5>{oferta.ciudad}</h5>
            <h6>{oferta.nombreEmpresa}</h6>
        </section>
        <ul className='second-section'>
          <li>{oferta.salarioAnual}</li>
          <li>{getViewString(oferta.tipoContrato)}</li>
          <li>{oferta.horas + ' horas'}</li>
          <li>{convertirFechaCliente(oferta.fechaPublicacion)}</li>
        </ul>
    </li>
  )
}
