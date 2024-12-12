import { Pause, Play } from "./Player"
import { usePlayerStore } from "../store/playerStore"



export function CardPlayButton({ id, size = 'small' }) {
    const { currentMusic,
        isPlaying,
        setIsPlaying,
        setCurrentMusic } = usePlayerStore(state => state)

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                const randomIndex = Math.floor(Math.random() * songs.length)
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[randomIndex] })

            })
    }

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

    return (
        <div className="card-play-button">
            <button onClick={handleClick} className="p-3 bg-green-500 rounded-full hover:scale-105 transition hover:bg-green-400">
                {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
            </button>
        </div>
    )
}