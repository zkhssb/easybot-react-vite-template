import { getPlayerList, PlayerInfo } from "easybot-image-sdk/server.js";
import { isRenderering, setViewportHeight, setViewportWidth } from "easybot-image-sdk/viewport.js";
import { useEffect, useState } from "react";
import { PlayerInfoCard } from "../components/PlayerInfoCard";
const generateRandomPlayer = (): PlayerInfo => {
    const randomName = `Player${Math.floor(Math.random() * 100000000)}`;
    const randomUUID = Math.random().toString(36).substr(2, 9);
    const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    return { name: randomName, uuid: randomUUID, ip: randomIP, skin_url: "https://textures.minecraft.net/texture/284e8bbc52bcc9513ee0bc84de84c34ec44454b0e0174c8df5694cc115c14b8d", bedrock: Math.random() < 0.5 };
};

const generateRandomPlayers = (count: number): PlayerInfo[] => {
    const players: PlayerInfo[] = [];
    for (let i = 0; i < count; i++) {
        players.push(generateRandomPlayer());
    }
    return players;
};

export function Players() {
    const [players, setPlayers] = useState<PlayerInfo[]>([]);
    const [err, setErr] = useState<string>('');

    useEffect(() => {
        const setViewpoet = async function () {
            if (isRenderering()) {
                await setViewportWidth(460);
                await setViewportHeight(
                    document.getElementById("root")?.clientHeight || 0
                );
            }
        }
        setViewpoet()
    }, [players]);


    useEffect(() => {
        const setup = async () => {
            if (isRenderering()) {
                const res = await getPlayerList();
                if (res.has_error) {
                    setErr(res.error_message);
                } else {
                    setPlayers(res.players);
                }
            } else {
                const randomPlayerCount = Math.floor(Math.random() * 11) + 10;
                const randomPlayers = generateRandomPlayers(randomPlayerCount);
                setPlayers(randomPlayers);
            }
        }
        setup();
    }, []);

    return (
        <div className="flex items-center justify-center p-20">
            <div>
                <div className="p-8 w-[450px]">
                    <div className="flex flex-col gap-4 text-gray-800">
                        <div className="flex items-center flex-col select-none">
                            <div className="flex items-center">
                                <img draggable="false" className="w-14 h-14" src="./assets/icon.png" alt="icon" />
                                <label className="text-3xl">玩家列表</label>
                            </div>
                            <div className="mt-5"></div>
                            {
                                err !== '' ? err : (
                                    <div>
                                        <div className="text-gray-500 text-sm text-center" >
                                            当前玩家数量 {players.length}
                                        </div>
                                        <div className="mt-5"></div>
                                        <div className="flex flex-col gap-2 justify-center items-center">
                                            {players.map((player, index) => (
                                                <div
                                                    key={index}
                                                    className="w-[400px]"
                                                >
                                                    <PlayerInfoCard player={player} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}