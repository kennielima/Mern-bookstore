import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={e => e.stopPropagation()} className='flex flex-col relative w-[600px] max-w-full h-[400px] bg-white p-4 rounded-xl'>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start books-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start books-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='mt-4'></p>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem consequatur accusamus aperiam cumque? Perspiciatis vitae molestiae id, pariatur commodi odio officia mollitia, sit error officiis et doloribus. Ad, neque?</p>
            </div>
        </div>
    )
}

export default BookModal