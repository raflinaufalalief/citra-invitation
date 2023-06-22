import React, { useState } from "react"
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md"

const Accordion = ({ accordion }) => {
  // accordion state
  const [isOpen, setIsOpen] = useState(false)
  // destructure accordion
  const { question, answer } = accordion
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <div className="border rounded-sm bg-white/80 hover:bg-white/60 ">
        <div className="min-h-[60px]  flex items-center justify-between Sdesktop:px-[30px] mobile:px-[6px] tablet:px-[15px]">
          <h6 className="font-semibold Sdesktop:text-lg mobile:text-base">
            {question}
          </h6>
          <div>
            {isOpen ? (
              <MdOutlineKeyboardArrowUp className="text-[20px] text-neutral-500" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
        <div
          className={` bg-accent/70 ${
            isOpen ? "min-h-[150px] Sdesktop:min-h-[100px]" : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all Sdesktop:px-[30px] mobile:px-[6px]`}
        >
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
