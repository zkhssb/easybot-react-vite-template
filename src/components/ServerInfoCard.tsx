import { ServerInfo } from "easybot-image-sdk/server.js";

export interface ServerInfoCardProps {
    server: ServerInfo
}
export function ServerInfoCard({ server }: ServerInfoCardProps) {
    return (
        <div className="bg-gray-200 rounded-lg shadow-gray-400 shadow-sm">
            <div className="flex gap-2 p-4 pb-0 items-center h-[90px]">
                <div className="h-full flex items-center">
                    <img className="w-16 h-16" src={server.icon_url}></img>
                </div>
                <div>
                    <h1 className="text-[16px] text-gray-800">{server.server_name}</h1>
                    <div className="flex flex-row gap-1">
                        <div>
                            {
                                server.is_online
                                    ? <label className="text-[13px] bg-green-500 p-1 pl-2 pr-2 rounded-sm text-white">在线</label>
                                    : <label className="text-[13px] bg-red-500 p-1 pl-2 pr-2 rounded-sm text-white">离线</label>
                            }
                        </div>
                        <div>
                            {
                                server.is_papi_supported
                                    ? <label className="text-[13px] bg-green-500 p-1 pl-2 pr-2 rounded-sm text-white">PAPI</label>
                                    : <label className="text-[13px] bg-red-500 p-1 pl-2 pr-2 rounded-sm text-white">PAPI</label>
                            }
                        </div>
                        <div>
                            {
                                server.is_command_supported
                                    ? <label className="text-[13px] bg-green-500 p-1 pl-2 pr-2 rounded-sm text-white">命令</label>
                                    : <label className="text-[13px] bg-red-500 p-1 pl-2 pr-2 rounded-sm text-white">命令</label>
                            }
                        </div>
                        <div>
                            {
                                server.is_online_mode
                                    ? <label className="text-[13px] bg-green-500 p-1 pl-2 pr-2 rounded-sm text-white">正版验证</label>
                                    : <label className="text-[13px] bg-purple-500 p-1 pl-2 pr-2 rounded-sm text-white">离线验证</label>
                            }
                        </div>
                        {
                            server.has_geyser
                                ? <div><label className="text-[13px] bg-green-500 p-1 pl-2 pr-2 rounded-sm text-white">间歇泉</label></div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
            {
                (server.server_version !== '' && server.server_version !== '')
                ? <div className="flex pl-6 pr-4 pb-2 text-[12px] justify-between">
                    <label>{server.server_version}</label>
                    <label>v{server.plugin_version}</label>
                </div>
                : <div className="flex pb-4 text-[12px]"></div>
            }
        </div>
    )
}