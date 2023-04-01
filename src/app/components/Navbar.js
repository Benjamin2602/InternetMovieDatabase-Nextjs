import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-4 dark:bg-slate-700 bg-pink-200 lg:text-lg p-4">
    {/* params are the genre  */}
      <NavbarItem title="Trending"
       param="fetchTrending"/>
      <NavbarItem title="Top Rated"
       param="fetchTopRated"/>
    </div>
  )
}
