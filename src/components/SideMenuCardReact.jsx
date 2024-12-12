import { usePlayerStore } from "../store/playerStore"
import { Volume } from "./Player"

export const SideMenuCardReact = (playlist) => {

    const { id, title, cover } = playlist.playlists
    const artistsString = playlist.playlists.artists.join(',')

    const state = usePlayerStore()

    const activePlaylist = usePlayerStore(state => state.currentMusic.playlist?.id === id)

    let className = 'playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-800'

    let hidden = 'hidden'
    let green = 'text-zinc-100'

    if (activePlaylist) {
        className += ' playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md bg-gray-800'
        hidden = ''
        green += 'text-green-400'
    }

    return (

        <a
            href={`/playlist/${id}`}
            className={className}
        >
            <picture className="h-12 w-12 flex-none">
                <img
                    src={cover}
                    alt={`Cover of ${title}`}
                    className="w-full h-full object-cover rounded-md"
                />
            </picture>

            <div className="flex flex-auto flex-col truncate">
                <h4 className={`${green} text-sm`}>{title}</h4>
                <span className="text-gray-400 text-xs">{artistsString}</span>
            </div>
            <div className={`${hidden} text-green-400 pr-2`}>
                <Volume id={id} />
            </div>
        </a>
    )

}
