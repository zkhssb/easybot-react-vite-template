import { isRenderering, setViewportHeight, setViewportWidth } from "easybot-image-sdk/viewport.js"
import "./Template.css"
import { useEffect } from "react"
export function Template() {
    useEffect(() => {
        const setViewpoet = async function () {
            if (isRenderering()) {
                await setViewportWidth(770);
                await setViewportHeight(880);
            }
        }
        setViewpoet()
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <img
                    draggable="false"
                    className="absolute h-[700px] left-[-175px] top-[-350px] select-none hidden md:block hidden-on-small-height clip-bottom"
                    src="./assets/bg.png"
                    alt="background"
                />
                <img
                    draggable="false"
                    className="absolute h-[700px] left-[-175px] top-[-350px] select-none hidden md:block hidden-on-small-height show-bottom"
                    src="./assets/bg.png"
                    alt="background"
                />

                <div className="bg-gray-100 rounded-lg shadow-2xl p-8 min-w-[400px] md:min-w-[450px]">
                    <div className="flex flex-col gap-4 text-gray-800">
                        <div className="flex items-center flex-col select-none">
                            <div className="flex items-center">
                                <img draggable="false" className="w-14 h-14" src="./assets/icon.png" alt="icon" />
                                <label className="text-3xl">测试模板1</label>
                            </div>
                            <label>如你所见吧,这是一个待修改的模板</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}