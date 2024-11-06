import Link from 'next/link'
import ImageCard from "./ImageCard"


const Card = ({
    propertyName,
    slug,
    rentalPrice,
    beds,
    image
            }) => {
    console.log(image); // Check the structure of `image`
    return (
        <Link href={`/property/${slug}`}>
            <div className="card">
                <ImageCard
                    url={image.url}
                    fileName={image.fileName}
                    width={300}
                    height={150}
                />
            </div>
        </Link>
    )
}

export default Card