import React from 'react'
import {useRouter} from 'next/router'

function Id() {
    const router = useRouter();
    const { params } = router.query;
    
    console.log(params)

    return (
        <div>
           Note 
        </div>
    )
}

export default Id;
