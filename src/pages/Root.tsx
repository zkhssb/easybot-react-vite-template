import { Input } from "antd"
import { ReactNode } from "react"

interface OptionsProps { title: ReactNode, children: ReactNode, icon?: ReactNode }
function Options({ title, children, icon }: OptionsProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {icon !== null ? icon : <></>}
        <label className="select-none">{title}</label>
      </div>
      {children}
    </div>
  )
}

export default function Root() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="bg-gray-100 rounded-lg shadow-2xl p-8 min-w-[400px] md:min-w-[450px]">
          <div className="flex flex-col gap-4 text-gray-800">
            <div className="flex items-center flex-col select-none">
              <div className="flex items-center">
                <img draggable="false" className="w-14 h-14" src="./assets/icon.png" alt="icon" />
                <label className="text-3xl">开发模板</label>
              </div>
              <label>这是一个设置页面</label>
            </div>

            <Options icon={<span className="icon-[mdi--video-input-component]"></span>} title="输入框">
              <Input></Input>
            </Options>

            <Options icon={<span className="icon-[mdi--gamepad-circle]"></span>} title="输入框2">
              <Input></Input>
            </Options>

            <div className="flex mt-4 w-full justify-between items-end">
              <div>
                <label>v1.0.0</label>
              </div>
              <div>
                <button
                  onClick={() => {
                    alert('保存成功');
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded items-center"
                >
                  <div className="flex items-center gap-2">
                  <span className="icon-[mdi--content-save-all]"></span>
                    保存
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}