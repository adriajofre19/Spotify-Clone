import { create } from "zustand";
import { playlists, songs } from "../lib/data";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));