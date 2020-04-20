import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Self Esteem', duration: '4:16' },
        { title: "Can't Fight This Feeling", duration: '4:54' },
        { title: 'The River', duration: '3:15' },
        { title: 'Keep On Loving You', duration: '3:21' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})