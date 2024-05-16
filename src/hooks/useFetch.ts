import { useEffect, useState } from 'react';

interface Error {
        code: number,
        message: string
}

interface UseFetchState {
    data: any,
    isLoading: boolean,
    hasError: boolean,
    error: Error | null,
}

interface LocalCache {
    [key: string]: any
}

const localCache: LocalCache = {
    //'url': data,
};

/*
    const data = {
        'key1': 'value1',
        'key2': 'value2'
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

*/


export const useFetch = ( url: string, cache:boolean = false) => {

    const [state, setState] = useState<UseFetchState>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
      getFetch();
    }, [url])
    
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async() => {

        if( cache && localCache[url] ){
            console.log('Usando caché');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        //le estamos forzando una espera a la llamada para pruebas en local
        setLoadingState();

        //const resp = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
        const resp = await fetch( url ); //,requestOptions

        // sleep
        await new Promise( resolve => setTimeout(resolve,2000));

        if( !resp.ok ){

            console.log({resp});

            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        //console.log({data});

        // Manejo de caché
        if(cache){
            localCache[url] = data;
        }
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}