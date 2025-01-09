import { getServerInfo, ServerInfo } from "easybot-image-sdk/server.js";
import { isRenderering, setViewportHeight, setViewportWidth } from "easybot-image-sdk/viewport.js";
import { useEffect, useState } from "react";
import { ServerInfoCard } from "../components/ServerInfoCard";

export function Servers() {
    const [servers, setServers] = useState<ServerInfo[]>([]);

    useEffect(() => {
        const setup = async () => {
            const debug = !isRenderering();
            if (!debug) {
                setServers(await getServerInfo())
            } else {
                setServers([
                    {
                        token: '',
                        server_name: '服务器名称',
                        server_version: 'Paper 1.19.2-SNAPSHOT',
                        plugin_version: '1.2.0',
                        is_papi_supported: true,
                        is_command_supported: true,
                        has_geyser: false,
                        is_online_mode: true,
                        is_online: true,
                        icon_url: "https://papermc.io/favicon.ico"
                    },
                    {
                        token: '',
                        server_name: '服务器名称',
                        server_version: 'Paper 1.19.2-SNAPSHOT',
                        plugin_version: '1.2.0',
                        is_papi_supported: true,
                        is_command_supported: true,
                        has_geyser: false,
                        is_online_mode: false,
                        is_online: true,
                        icon_url: "https://papermc.io/favicon.ico"
                    },
                    {
                        token: '',
                        server_name: '服务器名称',
                        server_version: '',
                        plugin_version: '',
                        is_papi_supported: true,
                        is_command_supported: true,
                        has_geyser: false,
                        is_online_mode: false,
                        is_online: true,
                        icon_url: "https://papermc.io/favicon.ico"
                    }
                ])
            }
        }
        setup();
    }, []);

    useEffect(() => {
        const setViewpoet = async function () {
            if (isRenderering()) {
                await setViewportWidth(455);
                await setViewportHeight(
                    document.getElementById("root")?.clientHeight || 0
                );
            }
        }
        setViewpoet()
    }, [servers]);

    return (
        <div className="flex items-center justify-center p-20">
            <div>
                <div className="p-8 w-[450px]">
                    <div className="flex flex-col gap-4 text-gray-800">
                        <div className="flex items-center flex-col select-none">
                            <div className="flex items-center">
                                <img draggable="false" className="w-14 h-14" src="./assets/icon.png" alt="icon" />
                                <label className="text-3xl">服务器列表</label>
                            </div>
                            <div className="mt-5"></div>
                            {
                                <div>
                                    <div className="text-gray-500 text-sm text-center">当前服务器数量：{servers.length}</div>
                                    <div className="mt-5"></div>
                                    <div className="flex gap-2 flex-col">
                                        {
                                            servers.map(server => (
                                                <div className="w-[380px]">
                                                    <ServerInfoCard server={server} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}