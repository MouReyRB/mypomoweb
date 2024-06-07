import { useGlobalColor } from "@/store/background";
import { useAudioPlayer } from "@/store/audio-player";
import { useMusicPlayed } from "@/store/music-played";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { storage } from "@/app/firebaseConfig"; // Import storage from firebaseConfig
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

const musicList = [
    { title: "Light Piano Beat Calm Spring Nature Lofi Vlog _ Rise by Chill Pulse", path: "music/1.mp3" },
    { title: "massobeats - honey jam", path: "music/2.mp3" },
    { title: "Artificial.Music - And So It Begins", path: "music/3.mp3" },
    { title: "'Dreamy Mode' cute background music", path: "music/4.mp3" },
    { title: "massobeats - aromatic", path: "music/5.mp3" },
    { title: "massobeats - bloom", path: "music/6.mp3" },
    { title: "massobeats - breeze", path: "music/7.mp3" },
    { title: "massobeats - chamomile", path: "music/8.mp3" },
    { title: "massobeats - drizzle", path: "music/9.mp3" },
    { title: "massobeats - floral", path: "music/10.mp3" },
    { title: "massobeats - gift", path: "music/11.mp3" },
    { title: "massobeats - hillside", path: "music/12.mp3" },
    { title: "massobeats - jasmine tea", path: "music/13.mp3" },
    { title: "massobeats - lavender", path: "music/14.mp3" },
    { title: "massobeats - lotus", path: "music/15.mp3" },
    { title: "massobeats - lucid", path: "music/16.mp3" },
    { title: "massobeats - mango tea", path: "music/17.mp3" },
    { title: "massobeats - midnight", path: "music/18.mp3" },
    { title: "massobeats - noon", path: "music/19.mp3" },
    { title: "massobeats - peach prosecco", path: "music/20.mp3" },
    { title: "massobeats - rose water", path: "music/21.mp3" },
    { title: "massobeats - serenity", path: "music/22.mp3" },
    { title: "massobeats - taro swirl", path: "music/23.mp3" },
    { title: "massobeats - warmth", path: "music/24.mp3" },
    { title: "'Mushroom's Life' cute background music", path: "music/25.mp3" }
];

const MusicMenu = ({ setModal }) => {
    const globalColor = useGlobalColor((state) => state.globalColor);
    const audioPlayer = useAudioPlayer((state) => state.audioPlayer);
    const setAudioPlayer = useAudioPlayer((state) => state.setAudioPlayer);
    const musicPlayed = useMusicPlayed((state) => state.musicPlayed);
    const setMusicPlayed = useMusicPlayed((state) => state.setMusicPlayed);
    const setIsMusicPlayed = useMusicPlayed((state) => state.setIsMusicPlayed);
    const isMusicPlayed = useMusicPlayed((state) => state.isMusicPlayed);
    const [musicUrls, setMusicUrls] = useState({});

    useEffect(() => {
        const fetchUrls = async () => {
            const urls = {};
            for (const item of musicList) {
                const musicRef = ref(storage, item.path);
                urls[item.path] = await getDownloadURL(musicRef);
            }
            setMusicUrls(urls);
        };
        fetchUrls();
    }, []);

    const playMusic = async (item) => {
        const url = musicUrls[item.path];
        if (audioPlayer && musicPlayed === item) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            setAudioPlayer(null);
            setIsMusicPlayed(false);
        } else {
            if (audioPlayer && musicPlayed !== item) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }
            const newAudioPlayer = new Audio(url);
            newAudioPlayer.play();
            setAudioPlayer(newAudioPlayer);
            setMusicPlayed(item);
            setIsMusicPlayed(true);
        }
    };

    return (
        <div className="transition-all h-3/4 w-full md:h-1/2 fixed flex-col top-10 right-0 md:w-1/3 bg-secondary rounded-l-lg p-5 space-y-5 text-slate-700">
            <div className="flex justify-between items-center">
                <Icon icon="material-symbols-light:music-note-rounded" className="text-2xl" />
                <p>Music</p>
                <Button variant="ghost" onClick={() => setModal(null)}>
                    <Icon icon="material-symbols-light:close-rounded" className="text-2xl" />
                </Button>
            </div>
            <ScrollArea className="h-3/4 w-full border rounded-lg border-slate-300">
                <div className="p-4">
                    {musicList.map((item, index) => (
                        <div key={index} onClick={() => playMusic(item)} className="text-sm flex justify-between cursor-pointer hover:bg-slate-200 items-center p-2 rounded-lg">
                            {item.title}
                            <Icon icon={`material-symbols-light:${isMusicPlayed && musicPlayed.path === item.path ? 'stop-rounded' : 'play-arrow-rounded'}`} className="text-xl" />
                        </div>
                    ))}
                    <Separator className="my-2" />
                </div>
            </ScrollArea>
        </div>
    );
};

export default MusicMenu;
