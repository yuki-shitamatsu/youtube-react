import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis'

const VideoDetail = () => {
  const location = useLocation()
  const setSelectVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    console.log('id', id);
    await fetchSelectedData(id).then((res) => {
      console.log('res', res)
    })
  }
  useEffect(() => {
    setSelectVideo()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
