import Image from "next/image"

function Post( { name, message, email, timestamp, postImage, image}) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={image} width={40} height={40} className="rounded-full"/>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="h-56 relative md:h-96 bg-white">
          <Image src={postImage} alt="image" objectFit="cover"
          layout="fill"/>
        </div>
      )}
    </div>
  )
}

export default Post
