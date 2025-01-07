import { Input } from "antd"
import { ReactNode } from "react"

interface OptionsProps { title: ReactNode, children: ReactNode }
function Options({ title, children }: OptionsProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="select-none">{title}</label>
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

            <Options title="输入框">
              <Input></Input>
            </Options>

            <Options title="输入框2">
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
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  保存
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}