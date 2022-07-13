import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsFillPlayFill, BsFillStopFill, BsArrowClockwise } from "react-icons/bs";

const Card = ({ image, id, question }) => {
  const { identificador } = useParams()
  const style = identificador ? 'video__conteiner__details' : 'video__conteiner'
  const [btn, setBtn] = useState({ videoState: 'play' })

  const handleClick = () => {
    switch (btn.videoState) {
      case 'play':
        setBtn({ videoState: 'recording' })
        break;
      case 'recording':
        setBtn({ videoState: 'reload' })
        break;
      case 'reload':
        setBtn({ videoState: 'play' })
        break;
      default:
        break;
    }
  }
  return (
    <div className={`card__container ${identificador ? 'w-d-card' : 'w-h-card'}`}>
      <div className={style}>
        <img className='video' src={image} alt={image} />
        {
          btn.videoState === 'play' && <span onClick={handleClick} className="btn"><BsFillPlayFill /></span>
        }
        {
          btn.videoState === 'recording'
          && (
            <>
              <span onClick={handleClick} className="btn"><BsFillStopFill /></span>
              <span className='rec'>1:30 / 2:00 <span className='rec-icon'></span></span>
            </>
          )
        }
        {
          btn.videoState === 'reload' && <span onClick={handleClick} className="btn"><BsArrowClockwise /></span>
        }

      </div>
      <p>{question}</p>
    </div>
  )
}

export default Card