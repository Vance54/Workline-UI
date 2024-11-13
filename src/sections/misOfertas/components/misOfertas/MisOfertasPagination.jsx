import { Pagination, Stack } from '@mui/material'
import { useContext } from 'react'
import { MisOfertasContext } from '../../context'

import '../../../jobs/styles/jobPage/jobPagination.css'

export const MisOfertasPagination = () => {


    const { pagina: {totalPages}, servirPagina } = useContext( MisOfertasContext );



    return (
        <section className='job-pagination-wrapper'>
            <Stack 
                spacing={2} 
                sx={{
                justifyContent: 'center', // Centra horizontalmente el contenido
                alignItems: 'center',
                width:'100%',
                marginBottom:'5%' // Asegura que los elementos estén centrados verticalmente
                }}
            >
                <Pagination count={totalPages} onChange={(e,value) => { servirPagina(value - 1)}} shape="rounded"
                sx={{
                    '& .MuiPaginationItem-root':{
                    fontSize: '1.4rem',
                    minWidth: '48px', // Establece un ancho mínimo mayor para los botones
                    height: '48px',
                    }
                }} />
            </Stack>
        </section>
  )
}