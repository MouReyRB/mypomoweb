import {useGlobalColor} from "@/store/background";
import {useAudioPlayer} from "@/store/audio-player";
import {useMusicPlayed} from "@/store/music-played";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {Icon} from "@iconify/react";
import {Button} from "@/components/ui/button";

const musicList = [
    {
        title: "Light Piano Beat Calm Spring Nature Lofi Vlog _ Rise by Chill Pulse",
        url: "https://pomodororey.blob.core.windows.net/music/1.mp3?sp=r&st=2024-06-07T12:23:05Z&se=2024-06-29T20:23:05Z&spr=https&sv=2022-11-02&sr=b&sig=kJO5JaAxOjI5cOLRqC%2FquQIFlI5oNObLaB6H%2B0poJi0%3D"
    },
    {
        title: "massobeats - honey jam",
        url: "https://pomodororey.blob.core.windows.net/music/2.mp3?sp=r&st=2024-06-07T12:27:20Z&se=2024-06-29T20:27:20Z&spr=https&sv=2022-11-02&sr=b&sig=Y1NEj%2BRsB2%2FDKJu1WmFU5VwnH3VAXNhxq4fIfCFA4lY%3D"
    },
    {
        title: "Artificial.Music - And So It Begins",
        url: "https://pomodororey.blob.core.windows.net/music/3.mp3?sp=r&st=2024-06-07T12:29:30Z&se=2024-06-29T20:29:30Z&spr=https&sv=2022-11-02&sr=b&sig=M%2F16Y2Dc9osNNUjtz4MNpeW14%2B3%2Bx8CT5yrVOavSEZk%3D"
    },
    {
        title: "'Dreamy Mode' cute background music",
        url: "https://pomodororey.blob.core.windows.net/music/4.mp3?sp=r&st=2024-06-07T12:29:46Z&se=2024-06-29T20:29:46Z&spr=https&sv=2022-11-02&sr=b&sig=TMA6jXzGuqiTv1Tmf2iLzjBhoG4t1UOqDzwZ8QByMFY%3D"
    },
    {
        title: "massobeats - aromatic",
        url: "https://pomodororey.blob.core.windows.net/music/5.mp3?sp=r&st=2024-06-07T12:30:03Z&se=2024-06-29T20:30:03Z&spr=https&sv=2022-11-02&sr=b&sig=Bf1%2BR8H4trvcFfUs3nOjxnjzoLfbpuRRm1%2BoJAlWNdE%3D"
    },
    {
        title: "massobeats - bloom",
        url: "https://pomodororey.blob.core.windows.net/music/6.mp3?sp=r&st=2024-06-07T12:30:12Z&se=2024-06-29T20:30:12Z&spr=https&sv=2022-11-02&sr=b&sig=HkT4Xay78xm8Uf6ynAauNkim1xqQrlg90ZjsiZ7n6Fc%3D"
    },
    {
        title: "massobeats - breeze",
        url: "https://pomodororey.blob.core.windows.net/music/7.mp3?sp=r&st=2024-06-07T12:30:22Z&se=2024-06-29T20:30:22Z&spr=https&sv=2022-11-02&sr=b&sig=gYjPTD1jmzV5TqOsRHvh7%2FqW0XSc7NPeYYmypw3VN78%3D"
    },
    {
        title: "massobeats - chamomile",
        url: "https://pomodororey.blob.core.windows.net/music/8.mp3?sp=r&st=2024-06-07T12:30:32Z&se=2024-06-29T20:30:32Z&spr=https&sv=2022-11-02&sr=b&sig=YYpg4SYkeZzyGP%2F7PxXVHKfmS0CeOS4iyTzWtvBzGDs%3D"
    },
    {
        title: "massobeats - drizzle",
        url: "https://pomodororey.blob.core.windows.net/music/9.mp3?sp=r&st=2024-06-07T12:30:43Z&se=2024-06-29T20:30:43Z&spr=https&sv=2022-11-02&sr=b&sig=%2BgsCkCGgJ%2Bd7tL1zRD2nNVvirLVCa%2Fwel4dySR80j%2Fk%3D"
    },
    {
        title: "massobeats - floral",
        url: "https://pomodororey.blob.core.windows.net/music/10.mp3?sp=r&st=2024-06-07T12:23:25Z&se=2024-06-29T20:23:25Z&spr=https&sv=2022-11-02&sr=b&sig=JdGKmE8%2BSJ%2FgcY1%2FF4AEWOOCL3mz5IyiuGS9CvPT7ec%3D"
    },
    {
        title: "massobeats - gift",
        url: "https://pomodororey.blob.core.windows.net/music/11.mp3?sp=r&st=2024-06-07T12:23:35Z&se=2024-06-29T20:23:35Z&spr=https&sv=2022-11-02&sr=b&sig=qEFAYHVSR8fC6GXTjCXCfT3x5JQ%2FSWs9ymbZuE4mLWU%3D"
    },
    {
        title: "massobeats - hillside",
        url: "https://pomodororey.blob.core.windows.net/music/12.mp3?sp=r&st=2024-06-07T12:23:48Z&se=2024-06-29T20:23:48Z&spr=https&sv=2022-11-02&sr=b&sig=APNCzEwcf8Pc2R%2B709Sc1zRtNgKH6j0h9M9rz%2Bun20o%3D"
    },
    {
        title: "massobeats - jasmine tea",
        url: "https://pomodororey.blob.core.windows.net/music/13.mp3?sp=r&st=2024-06-07T12:25:35Z&se=2024-06-29T20:25:35Z&spr=https&sv=2022-11-02&sr=b&sig=%2FSgv4O8DgEaAUMaxkYBO7ZZQdeXeHdRf7wyseYQIxc0%3D"
    },
    {
        title: "massobeats - lavender",
        url: "https://pomodororey.blob.core.windows.net/music/14.mp3?sp=r&st=2024-06-07T12:25:48Z&se=2024-06-29T20:25:48Z&spr=https&sv=2022-11-02&sr=b&sig=ceyGI84WT7w1knNZA5ntA5lpGNGzgtcjSZxyHrFjC8Q%3D"
    },
    {
        title: "massobeats - lotus",
        url: "https://pomodororey.blob.core.windows.net/music/15.mp3?sp=r&st=2024-06-07T12:26:01Z&se=2024-06-29T20:26:01Z&spr=https&sv=2022-11-02&sr=b&sig=g3jM1cCuRIxBoAVHBi3V16JtMxd2XGLizN3e1ZcrBtc%3D"
    },
    {
        title: "massobeats - lucid",
        url: "https://pomodororey.blob.core.windows.net/music/16.mp3?sp=r&st=2024-06-07T12:26:11Z&se=2024-06-29T20:26:11Z&spr=https&sv=2022-11-02&sr=b&sig=EVY1NCkSbglXK1T9mNBxQRGbt1Fe4paXKBNQ51KSv5E%3D"
    },
    {
        title: "massobeats - mango tea",
        url: "https://pomodororey.blob.core.windows.net/music/17.mp3?sp=r&st=2024-06-07T12:26:22Z&se=2024-06-29T20:26:22Z&spr=https&sv=2022-11-02&sr=b&sig=ZCMuO6KtxZ3%2BG4TUzc9MwcAHWyV35mMuVO5MjT4sVso%3D"
    },
    {
        title: "massobeats - midnight",
        url: "https://pomodororey.blob.core.windows.net/music/18.mp3?sp=r&st=2024-06-07T12:26:40Z&se=2024-06-29T20:26:40Z&spr=https&sv=2022-11-02&sr=b&sig=5s25JtwbR0H4%2FhX%2FgD5W8LuUNp8%2FMsR%2FdN%2Ff0XORQ9w%3D"
    },
    {
        title: "massobeats - noon",
        url: "https://pomodororey.blob.core.windows.net/music/19.mp3?sp=r&st=2024-06-07T12:27:01Z&se=2024-06-29T20:27:01Z&spr=https&sv=2022-11-02&sr=b&sig=XmUfwsMDgZnGzwH3qebSdrNzAhUMr2HH0HWn%2BtGqInc%3D"
    },
    {
        title: "massobeats - peach prosecco",
        url: "https://pomodororey.blob.core.windows.net/music/20.mp3?sp=r&st=2024-06-07T12:27:31Z&se=2024-06-29T20:27:31Z&spr=https&sv=2022-11-02&sr=b&sig=rrneG%2B7u3KgLQ24h66lkcTn%2FttbY5tkVP%2FHJ8U1wVk0%3D"
    },
    {
        title: "massobeats - rose water",
        url: "https://pomodororey.blob.core.windows.net/music/21.mp3?sp=r&st=2024-06-07T12:27:46Z&se=2024-06-29T20:27:46Z&spr=https&sv=2022-11-02&sr=b&sig=DXhyjDEDVGAV8k8bucz2hDn3%2BsfECzGwU2MFqLMmCqM%3D"
    },
    {
        title: "massobeats - serenity",
        url: "https://pomodororey.blob.core.windows.net/music/22.mp3?sp=r&st=2024-06-07T12:28:02Z&se=2024-06-29T20:28:02Z&spr=https&sv=2022-11-02&sr=b&sig=8mOgQgm5FAGzDK3187G3mxf7qo1UgHAbz7k%2FQnJtgd0%3D"
    },
    {
        title: "massobeats - taro swirl",
        url: "https://pomodororey.blob.core.windows.net/music/23.mp3?sp=r&st=2024-06-07T12:28:19Z&se=2024-06-29T20:28:19Z&spr=https&sv=2022-11-02&sr=b&sig=KoQ4T9AiD3n6UhnlwHRxx3V8DbzuQoIZwFOjhQaMyx8%3D"
    },
    {
        title: "massobeats - warmth",
        url: "https://pomodororey.blob.core.windows.net/music/24.mp3?sp=r&st=2024-06-07T12:28:30Z&se=2024-06-29T20:28:30Z&spr=https&sv=2022-11-02&sr=b&sig=WJAfVJna1aYrNUSRRn9Di2BhXq5PGQQDEj4IOFgYeac%3D"
    },
    {
        title: "'Mushroom's Life' cute background music",
        url: "https://pomodororey.blob.core.windows.net/music/25.mp3?sp=r&st=2024-06-07T12:28:41Z&se=2024-06-29T20:28:41Z&spr=https&sv=2022-11-02&sr=b&sig=HJqzGPk5opyvoKRgZKN4Cw5uivaAYC3ehTVUK0PaXBI%3D"
    },
];

const MusicMenu = ({setModal}) => {
    const globalColor = useGlobalColor((state) => state.globalColor)
    const audioPlayer = useAudioPlayer((state) => state.audioPlayer)
    const setAudioPlayer = useAudioPlayer((state) => state.setAudioPlayer)
    const musicPlayed = useMusicPlayed((state) => state.musicPlayed)
    const setMusicPlayed = useMusicPlayed((state) => state.setMusicPlayed)
    const setIsMusicPlayed = useMusicPlayed((state) => state.setIsMusicPlayed)
    const isMusicPlayed = useMusicPlayed((state) => state.isMusicPlayed)

    const playMusic = (item) => {
        if (audioPlayer && musicPlayed === item) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            setAudioPlayer(null)

            setIsMusicPlayed(false)
        } else {
            if (audioPlayer && musicPlayed !== item) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }

            const newAudioPlayer = new Audio(item.url);

            newAudioPlayer.play();

            setAudioPlayer(newAudioPlayer);

            setMusicPlayed(item)
            setIsMusicPlayed(true)
        }
    };

    return (
        <>
            <div
                className="transition-all h-3/4 w-full md:h-1/2 fixed flex-col top-10 right-0 md:w-1/3 bg-secondary rounded-l-lg p-5 space-y-5 text-slate-700">
                <div className="flex justify-between items-center">
                    <Icon icon="material-symbols-light:music-note-rounded" className="text-2xl"/>
                    <p>Music</p>
                    <Button variant="ghost" onClick={() => setModal(null)}>
                        <Icon icon="material-symbols-light:close-rounded" className="text-2xl"/>
                    </Button>
                </div>
                <ScrollArea className="h-3/4 w-full border rounded-lg border-slate-300">
                    <div className="p-4">
                        {musicList.map((item, index) => (
                            <>
                                <div
                                    key={index}
                                    onClick={() => playMusic(item)}
                                    className="text-sm flex justify-between cursor-pointer hover:bg-slate-200 items-center p-2 rounded-lg"
                                >
                                    {item.title}
                                    <Icon
                                        icon={`material-symbols-light:${isMusicPlayed && musicPlayed.url === item.url ? 'stop-rounded' : 'play-arrow-rounded'}`}
                                        className="text-xl"/>
                                </div>
                                <Separator className="my-2"/>
                            </>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}

export default MusicMenu