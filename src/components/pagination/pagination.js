import React from 'react';

const Pagination = ({page, setPage}) => {
    return (
        <div className="pagination">
            {
                Array(Math.ceil(5)).fill(0).map((buttonNum,idx)=>
                    (
                        <button key={idx} className="bg-transparent hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-1 px-2 mt-2  border border-pink-600 hover:border-transparent rounded mr-2 "
                          onClick={() => setPage(idx)}>{idx+1}</button>
                    ))
            }
        </div>
    );
};

export default Pagination;