import { PlayerInfo } from "easybot-image-sdk/server.js";
import "./PlayerInfocard.css";
import axios from "axios";
import React from "react";

export interface PlayerInfoCardProps {
    player: PlayerInfo;
}

// 获取玩家皮肤并裁剪头部与头发纹理
async function getPlayerHeadImage(player: PlayerInfo): Promise<string> {
    const response = await axios.get(player.skin_url, {
        responseType: "blob",
    });
    const imageBlob = response.data;

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = URL.createObjectURL(imageBlob);
        img.onload = () => {
            // 创建 Canvas
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                reject(new Error("Failed to get canvas context"));
                return;
            }
            canvas.width = 8;
            canvas.height = 8;
            ctx.drawImage(img, 8, 8, 8, 8, 0, 0, 8, 8);
            ctx.drawImage(img, 40, 8, 8, 8, 0, 0, 8, 8);
            resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = () => reject(new Error("Failed to load image"));
    });
}

export function PlayerInfoCard({ player }: PlayerInfoCardProps) {
    const [headImage, setHeadImage] = React.useState<string | null>(null);

    React.useEffect(() => {
        getPlayerHeadImage(player)
            .then((image) => setHeadImage(image))
            .catch((err) => console.error(err));
    }, [player]);

    return (
        <div className="bg-gray-200 rounded-lg shadow-gray-400 shadow-sm p-2 flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
                {headImage ? (
                    <img className="player-avatar w-8 h-8 rounded-md" src={headImage} alt="Player Head" />
                ) : (
                    <></>
                )}
                <label>{player.name}</label>
            </div>
            <div>
                {player.bedrock ? <label className="text-gray-500 font-extrabold text-[14px] bg-gray-300 p-1 rounded-md">基岩版</label> : <></>}
            </div>
        </div>
    );
}
