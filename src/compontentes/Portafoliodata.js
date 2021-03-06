import React, { useStates, useEffect } from 'react';

const Portafoliodata = () => {

    const [data, setData] = useStates([]);
    useEffect(() => {
        fetch('http://localhost:3001/portafoliodb')
            .then(response => response.json() )
            .then(data => setData(data))
    }, [data]);

}

export default Portafoliodata;