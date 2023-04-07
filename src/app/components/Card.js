import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'

export default function Card({result}) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-gray-600 sm:shadow-md rounded-lg sm:border sm:border-gray-400 sm:m-2 transition-shadow duration-200 group">
    <Link href={`/movie/${result.id}`}>
        <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            width={500}
            height={300}
            alt="image is not found"
            className="sm:rounded-t-lg group-hover:opacity-80 translate-opacity duration-200"
            style={{
                maxWidth: '100%',
                height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg">
        </Image>
        <div className="p-2">
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center"> {result.release_date || result.first_air_date}
        <FaRegThumbsUp className="h-5 mr-1 ml-3"/> {result.vote_count} 
        </p>

        </div>
    </Link>
      
    </div>
  )
}
