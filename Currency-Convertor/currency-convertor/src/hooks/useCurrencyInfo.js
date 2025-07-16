// import { useEffect  , useState} from "react";


// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         fetch(`https://mocki.io/v1/8d1cf80c-2aaf-4ae2-a3e0-1f19732f105d`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency]);

//     console.log(data);
//     return data;
// }



// export default useCurrencyInfo;



import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Static currency conversion data
        const staticData = {
            usd: {
                inr: 83.50,
                eur: 0.93,
                gbp: 0.80,
                jpy: 154.32,
                aud: 1.52,
                usd: 1
            },
            inr: {
                usd: 0.012,
                eur: 0.011,
                gbp: 0.0096,
                jpy: 1.85,
                aud: 0.018,
                inr: 1
            },
            eur: {
                usd: 1.08,
                inr: 90.25,
                gbp: 0.86,
                jpy: 166.15,
                aud: 1.64,
                eur: 1
            },
            gbp: {
                usd: 1.25,
                inr: 104.50,
                eur: 1.16,
                jpy: 193.25,
                aud: 1.91,
                gbp: 1
            }
        };

        setData(staticData[currency] || {});
        console.log(data);
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;