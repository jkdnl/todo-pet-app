import React from 'react';

const TableWrapper= ({children}: { children: React.ReactNode }) => {
    return (
        <div className="md:w-8/12 md:mx-auto lg:w-1/2 m-2 p-2">
            {children}
        </div>
    );
};

export default TableWrapper;