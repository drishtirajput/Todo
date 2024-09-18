import React from 'react'
import { BsPlusLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export default function QnA_Section({ question, answer }) {

    const [showMore, setShowMore] = React.useState(false)
    const showAnswer = () => {
        setShowMore(!showMore)
    }

    return (
        <div>
            <div className='w-[85%]'>
                <div className=' border-t-[1px] border-[#787878] py-6'>
                    <div className='flex'>
                        <div className='w-[90%]'><p className='font-semibold text-[30px] text-[#787878]'>{question}</p></div>
                        <div className='mx-auto text-[20px] my-auto flex-1'>
                            <button onClick={showAnswer}>{!showMore ?<BsPlusLg /> :<RxCross1 />}</button></div>
                    </div>
                    {showMore && (
                        <div className='mt-4 p-4 w-[90%]'>
                            <p>
                                {answer}
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
