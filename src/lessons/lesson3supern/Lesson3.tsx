import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');

    // const searchFilm = () => {
    //     API.searchFilmsByTitle(searchName)
    //         .then(result => {
    //             console.log(result)
    //             if(result.data.Response === 'True') {
    //                 setSerachResult(JSON.stringify(result.data.Search));
    //             } else {
    //                 setSerachResult(result.data.Error);
    //             }
    //         }).catch(err => {
    //         console.log('err ', err)
    //     })
    //
    // };

    const searchFilm = async () => {
       try {
           //const result = await API.searchFilmsByTitle(searchName);
           const { data } = await API.searchFilmsByTitle(searchName);
           // console.log('data ', data);
           // if (data.Response === 'True') {
           //     setSerachResult(JSON.stringify(data.Search));
           // } else {
           //     setSerachResult(data.Error);
           // }

           // if (data.Response === 'True') setSerachResult(JSON.stringify(data.Search));
           // else setSerachResult(data.Error);

           const { Response, Search, Error } = data;
           Response === 'True'
               ? setSerachResult(JSON.stringify(Search))
               : setSerachResult(Error);
       } catch(e) {
           console.dir(e);
       }
    }

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;