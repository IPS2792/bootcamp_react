import React from 'react'

function Card({
    category,
    title,
    description,
    author,
    publicationDate,
    readTime
}) {
    return (
        <div>
            <div>
                <p>{category}</p>
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <p>{author}</p>
                <p>{publicationDate}, {readTime}</p>
            </div>
            <div>
                <figure>
                    <img alt='card-p' src={'https://picsum.photos/200/300'} />
                </figure>
            </div>
        </div>
    )
}

export default Card