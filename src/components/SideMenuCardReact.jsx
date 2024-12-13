import { use, useEffect } from "react"
import { usePlayerStore } from "../store/playerStore"
import { Volume } from "./Player"

export const SideMenuCardReact = (playlist) => {

    const { id, title, cover } = playlist.playlists
    const artistsString = playlist.playlists.artists.join(',')


    const state = usePlayerStore()

    const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(state => state)

    const GetColorOfName = (id,title) => {
        if(currentMusic.playlist != null) {
            if(currentMusic.playlist.id == id){
                return (
                    <h4 className='text-green-400 text-sm'>{title}</h4>
                )
            } else {
                return (
                    <h4 className='text-white text-sm'>{title}</h4>
                )
            }
        } else {
            return (
                <h4 className='text-white-400 text-sm'>{title}</h4>
            )
        }
    }
    
    const GetActivePlaylist = (id) => {
        if(currentMusic.playlist != null) {
            if(currentMusic.playlist.id == id){
                return (
                    <div className='text-green-400 pr-2'>
                        <Volume id={id} />
                    </div>
                )
            } else {
                <div className='text-green-400 pr-2 hidden'>
                    
                </div>
            }
        } else {
            return (
                <div className='text-green-400 pr-2 hidden'>
                    
                </div>
            )
        }
    }


        return (
            <a
                href={`/playlist/${id}`}
                className='playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-800'
            >
                <picture className="h-12 w-12 flex-none">
                    <img
                        src={cover}
                        alt={`Cover of ${title}`}
                        className="w-full h-full object-cover rounded-md"
                    />
                </picture>
    
                <div className="flex flex-auto flex-col truncate">
                    {GetColorOfName(id,title)}
                    <span className="text-gray-400 text-xs">{artistsString}</span>
                </div>
                    {GetActivePlaylist(id)}
            </a>
        )
}
