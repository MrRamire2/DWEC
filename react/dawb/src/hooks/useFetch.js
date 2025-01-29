import { useState, useEffect } from "react"

export const useFetch = (url, newData = null) => {
    const [datos, setDatos] = useState(null);
    const [cargando,setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchDatos = async () => {
            setCargando(true);

            try{
            const response = await fetch(url);

                if(!response.ok) {
                    throw new Error(response.statusText);
                }

            const json = await response.json();
            
            
            setCargando(false);
            setDatos(json);
            setError(null);
            } catch(err){
                setCargando(false);
                setError('No se pudieron obtener los datos...');
                console.log(err);
            }

        };
        fetchDatos();

    }, [url, newData]);
return {datos: datos, cargando:cargando, error}
};