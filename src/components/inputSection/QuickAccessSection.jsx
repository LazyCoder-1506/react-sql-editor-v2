import React, { useState } from 'react'

const QuickAccessSection = () => {
  const [activePane, setActivePane] = useState("history")

  function setHeightEqualToEditorSection() {
    const height = document.getElementById('editor-section')?.clientHeight;
    document.getElementById('quick-access-section').style.height = `${height}px`;
  }

  return (
    <>
      <div className="bg-white border rounded-md shadow-lg relative p-4" id='quick-access-section'>
        <div className="grid grid-cols-2">
          <button type='button' onClick={() => setActivePane("history")} className={"cursor-pointer hover:bg-primary-fade font-medium rounded-tl-md text-center py-2" + (activePane === "history" ? " border-b-2 border-primary text-primary" : " border-b border-slate-300")}>Query History</button>
          <button type='button' onClick={() => setActivePane("frequent")} className={"cursor-pointer hover:bg-primary-fade font-medium rounded-tr-md text-center py-2" + (activePane === "frequent" ? " border-b-2 border-primary text-primary" : " border-b border-slate-300")}>Frequently Used</button>
        </div>
        <div className='absolute overflow-auto py-3' style={{ height: "calc(100% - 64px)" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laborum nostrum accusamus voluptatem rem itaque laudantium ex numquam exercitationem harum quisquam sed architecto cupiditate enim aliquid velit aut, labore consectetur!
        </div>
      </div>
    </>
  )
}

export default QuickAccessSection