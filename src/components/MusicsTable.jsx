import { usePlayerStore } from "../store/playerStore"


export const MusicsTable = ({ songs }) => {
    
    const state = usePlayerStore()
    

    const isPlaying = (id) => {
        const song = songs.find(song => song.id === id)
        if (state.isPlaying === false) {
            return (
                <h3 className="text-white text-base font-normal">
                    {song.title}
                </h3>
            )
        } else {
            if (state.currentMusic.song.id === id) {
                return (
                    <h3 className="text-green-400 text-base font-normal">
                        {song.title}
                    </h3>
                )
            } else {
                return (
                    <h3 className="text-white text-base font-normal">
                        {song.title}
                    </h3>
                )
            }
        }   
    }

    const { currentMusic, setIsPlaying } = usePlayerStore(state => state)

    const setCurrentMusic = (id) => () => {
        const song = songs.find(song => song.id === id)
        if (currentMusic.song.id === id) {
            setIsPlaying(!state.isPlaying)
        } else {
            setIsPlaying(true)
            state.setCurrentMusic({ songs, playlist: { id: 1, name: "Playlist" }, song })
        }
    }

    

    return (
        <table className="table-auto text-left min-w-full divide-y divide-gray-500/50">
            <thead className="">
                <tr className="text-gray-300 text-sm font-light">
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Título</th>
                    <th className="px-4 py-2">Álbum</th>
                    <th className="px-4 py-2">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="h-[10px]"></tr>
                {
                    songs.map((song, index) => ( 
                        <tr onClick={setCurrentMusic(song.id)} className="text-white text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
                            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
                                {index + 1}
                            </td>
                            <td className="px-4 py-2 flex gap-3">
                                <picture>
                                    <img
                                        src={song.image}
                                        alt={song.title}
                                        className="w-11 h-11 object-cover rounded-md"
                                    />
                                </picture>
                                <div className="flex flex-col">
                                    
                                        {isPlaying(song.id)}
                                    
                                    <span>{song.artists.join(", ")}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2">{song.album}</td>
                            <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                                {song.duration}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}