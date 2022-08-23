import React from 'react'

const PopupPost = ({setOpenPostPage}) => {

  const noImage = true;

  return (
    <div className='container md:w-[75%] mx-auto py-[2rem]'>
      <div className="cancel-page-btn text-right">
        <div className="cancel-icon mb-[4rem] text-[1.2rem] dark:text-gray-300 text-gray-500  cursor-pointer" onClick={() => setOpenPostPage(false)}>
          X
        </div>
      </div>
      <div className="blog-content flex justify-between items-start">
          <div className="story-preview w-[48%]">
            <h1 className='font-bold mb-[1rem] text-gray-700'>Story Preview</h1>
            <div className="image-preview-container mb-[1rem]">
              {noImage ? <div className="image-container h-[14rem] w-[100%] bg-gray-200 flex items-center justify-center text-center"><small className='text-gray-600'>Include a high quality image in your story to make it pop!</small></div> : <img src="" alt="" />}
            </div>
            <h1 className='font-bold text-[1.1rem] text-gray-700 mb-[.27rem]'>My First Title</h1>
            <div className='mb-[.55rem]'>
              <input type="text" className="bg-transparent outline-none w-[100%] story-title border-slate-500 border-solid border-b border-t pt-[.55rem] pb-[.1rem] placeholder:text-gray-600" placeholder='This is the beginning'></input>
            </div> 
            <div className="sidenote">
              <p className='text-gray-600 text-[.9rem]'><span className='font-bold mr-[.25rem]'>Note:</span>Changes here will affect how your story appears in public places like the homepage — not the contents of the story itself.</p>
            </div>
          </div>

          <div className="publish-section w-[44%]">
            <div className="publiser mb-[.8rem]">
              <p>Publishing to : <span className='font-bold'>Adebayo</span></p>
            </div>
            <div className="body">
              <p className='text-[.85rem] mb-[1rem]'>Add a topic so readers know what your story is about</p>

              <div className="topics-update text-black">
                <select name="topics" id="" className='w-full py-[1.2rem] outline-none border-solid border-[0.1rem] rounded-[3px] border-gray-300 mb-[2rem]'>
                  <option value="" disabled>Add a topic...</option>
                  <option value="relationship">Relationship</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="sports">Sports</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="gaming">Gaming</option>
                </select>
              </div>
            </div>

            <div className="publish-btn">
              <button className='bg-green-800 hover:bg-green-900 h-[2rem] w-[6rem] text-white font-semibold rounded-[20px] disabled:opacity-[.6]'>Publish</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PopupPost