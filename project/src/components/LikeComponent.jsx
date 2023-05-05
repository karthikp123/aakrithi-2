import {useState} from 'react'
import { faHeart as faHeartHollow} from '@fortawesome/free-regular-svg-icons'
import { faHeart  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LikeComponent = (props) => {
  
  const [like, setLike] = useState(false);
  const [num, setNum] = useState(props?.num | 0);

  const handleLike = () => {
    if(!like) 
      setNum(num+1) 
    else 
      setNum(num-1)
    setLike(!like);
  }

  return (
    <>
      <FontAwesomeIcon style={{cursor: "pointer"}} icon={like? faHeart : faHeartHollow} onClick={handleLike}/>
      {props.showNum && <span>{num} likes</span>}
    </>
  )
}

export default LikeComponent