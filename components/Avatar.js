import Image from "next/image"

const Avatar = ({url,className}) => {
    return (
        <div
        className={`h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}>
        <Image 
        loading="lazy"
        src={url}
        alt="Avatar"
        width={45}
        height={45}
        className={`rounded-full ${className}`}
        />
        </div>
    )
}

export default Avatar
