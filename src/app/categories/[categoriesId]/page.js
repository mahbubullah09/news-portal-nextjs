import React from 'react';

const DynamicNewsPage = ({params, searchParams}) => {

    console.log(params);
    return (
        <div>
            <h1>{searchParams.category} page</h1>
        </div>
    );
};

export default DynamicNewsPage;