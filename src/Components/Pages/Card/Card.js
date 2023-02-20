import React from 'react'
import "./Card.scss";

const Card = ({ data, query }) => {
    return (
        <>
            {query.length !== 0 ? <div className='filter-msg'>You are viewing filtered result</div> : ""}
            <div className='card-body'>
                {data.map((item) => (
                    <div className="card" key={item.id}>
                        <div className='img-style'>
                            <img
                                src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg"
                                alt='men'
                                className="img-child"
                            />
                        </div>
                        <div className='card-details'>
                            <ul key={item.id} className="item-style">
                                <li>{item.name}</li>
                                <li>{item.age}</li>
                                <li>{item.occupation}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card;