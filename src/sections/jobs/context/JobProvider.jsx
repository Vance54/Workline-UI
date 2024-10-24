import { useEffect, useReducer } from "react";
import { jobsReducer } from "./jobsReducer";
import { JobContext } from "./JobContext"
import { getPageData } from "../helpers/getDataPage";


const init = () => {
    return [
        {
            number: 0,
            content: [],
            totalElements: 0,
            totalPages: 0,
            numberOfElements:0
        },
        {
            puestoB: '',
            sectorB: '',
            tipoContratoB:'',
            ciudadB:'',
            salarioAnualMinimo:0,
            modalidadB:''
        }
    ]
}

export const JobProvider = ({ children }) => {

    const [jobPageState, dispatch] = useReducer(jobsReducer, [], init);

    const updatePage = (page = {}) => {
        const action = {
            type: 'update_page',
            payload: {
                number: page.number,
                content: page.content || [],
                totalElements: page.totalElements || 0,
                totalPages: page.totalPages || 0,
                numberOfElements: page.numberOfElements || 0
            }
        };
        dispatch(action);
    };

    const updateSearch = (search = {}) => {
        const action = {
            type: 'update_search',
            payload: search
        };
        dispatch(action);
    }

    useEffect ( () => {
        const fetchData = async() => {
            const resultado = await getPageData(0 , null);
            console.log(resultado)
            updatePage(resultado);
            
        }
        fetchData();
    }, [])


    return (
        <JobContext.Provider value={{
            jobPageState: jobPageState,
            updatePage,
            updateSearch
        }}>
            { children }
        </JobContext.Provider>
    );
};