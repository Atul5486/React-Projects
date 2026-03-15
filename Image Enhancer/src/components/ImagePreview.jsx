import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  const handleSaveImage = () => {
    if (!props.enhanced) return

    const link = document.createElement('a')
    link.href = props.enhanced
    link.download = 'enhanced-image.png' // you can customize filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      
      {/* Original Image */}
      <div className='bg-white shadow-lg overflow-hidden rounded-xl h-100'>
        <h2 className='text-xl font-semibold text-center bg-gray-800 text-white p-2'>
          Original Image
        </h2>

        {!props.uploaded && (
          <div className='flex items-center justify-center h-full bg-gray-200'>
            No Image selected
          </div>
        )}

        {props.uploaded && (
          <img
            src={props.uploaded}
            alt='Original'
            className='w-full h-full object-cover'
          />
        )}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg overflow-hidden rounded-xl h-100 relative'>
        <h2 className='text-xl font-semibold text-center bg-green-800 text-white p-2'>
          Enhanced Image
        </h2>

        {!props.enhanced && (
          props.loading ? (
            <Loading />
          ) : (
            <div className='flex items-center justify-center h-full bg-gray-200'>
              No Enhanced Image
            </div>
          )
        )}

        {props.enhanced && !props.loading && (
          <>
            <img
              src={props.enhanced}
              alt='Enhanced'
              className='w-full h-full object-cover'
            />

            {/* Save Button */}
            <div className='absolute bottom-4 right-4'>
              <button
                onClick={handleSaveImage}
                className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md'
              >
                Save Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ImagePreview
