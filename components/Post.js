import Image from "next/image"
import { ChatAltIcon, ChatIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid"

function Post( { name, message, email, timestamp, postImage, image}) {
  return (
    <div className="flex flex-col rounded-2xl">
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

      <div className="flex justify-between items-center rounded-b-2x
      shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4"/>
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatIcon className="h-4"/>
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ShareIcon className="h-4"/>
          <p className="text-xs sm:text-base">Share</p>
        </div>

      </div>
    </div>
  )
}

export default Post
