import React from 'react'
import { useParams } from 'react-router-dom'

const BrandDetails = () => {

    const params = useParams()

    return (
        <div>
            <div>
                <h2>Popular</h2>
                <h3>{params.id}</h3>
                <h2>Luxe</h2>
                <h2>New</h2>
            </div>
        </div>
    )
}

export default BrandDetails