import React from "react";
import { useBikes } from "../hooks/useBikeList";
import { Link } from "react-router-dom";
import "./BikeList.css"


export default function BikeList() {

    const { error, loading, data } = useBikes();
    if (loading) return <>Loading..</>
    if (error) return <>Something went wrong</>
    return <div className="bike-list">{
        data.characters.results.map(bike => {
            return <div class="card text-center">


                <Link to={{ pathname: `/catalog/${bike.id}` }}> <img src={bike.image} alt="morty" />
                    <div class="px-6 py-4">
                        <h2 class="product-title">{bike.name}</h2>
                    </div></Link>
            </div>
        })
    }</div>
}