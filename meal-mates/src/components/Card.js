import React from 'react'
import './Card.css'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Actions from './Actions'

const left = {
    bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
    justifySelf: 'end',
}
const right = {
    bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
    justifySelf: 'start',
}

function Card({title, imageUrl, body, changeActionChoice, additionFunc}) {
    // Set the drag hook and define component movement based on gesture data
    const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
        x: 0,
        scale: 1,
        ...left,
    }))
      
    const bind = useDrag(({ active, movement: [mx], cancel }) => {
        if (mx > 350) {
            cancel()
            additionFunc(3)
        }

        if (mx < -350) {
            cancel()
            additionFunc(3)
        }

        api.start({
          x: active ? mx : 0,
          scale: active ? 1.1 : 1,
          ...(mx < 0 ? left : right),
          immediate: name => active && name === 'x',
        })
    })

    // const bind = useDrag(({ down, movement: [mx, my], cancel, active }) => {
        
    //     api.start({ 
    //         x: active ? mx : 0,
    //         scale: active ? 1.1 : 1,
    //         ...(x < 0 ? left : right), 
    //         immediate: name => active && name === 'x', 
    //     })
    //     // api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    // })

    const avSize = x.to({
        map: Math.abs,
        range: [50, 300],
        output: [0.5, 1],
        extrapolate: 'clamp',
    })

    return (
        <div className="container">
            <animated.div {...bind()} className="backdrop" style={{ background: bg }}>
                <animated.div className="card-container" style={{ x, scale }}>
                    <div>
                        <div className="image-container">
                            <img src={imageUrl} alt='' />
                        </div>

                        <div className="card-content">
                            <div className="card-title">
                                <h3>{title}</h3>
                            </div>
                            <div className="card-body">
                                <p>{body}</p>
                            </div>
                        </div>
                        <Actions
                            person='fa'
                            changeActionChoice={ changeActionChoice } // figure out how to test this function
                        />
                    </div>
                </animated.div>
            </animated.div>
        </div>
    )
}

export default Card