/**
 *
 * 无限滚动效果组件
 * @author mZ1680 <https://github.com/mZ1680>
 * @date 2021-01-17
 */

import React, { memo, useEffect, useRef, useCallback } from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'

const ReactMarquee = memo(({ className, children, marqueeSpeed = 80 }) => {
  const myMarquee = useRef(null)
  const myMarqueeWrap = useRef(null)

  useEffect(() => {
    setDuration()
  }, [children])

  const setDuration = useCallback(() => {
    const subWidth = getElWidth(myMarquee) + getElWidth(myMarqueeWrap)
    const duration = subWidth / marqueeSpeed
    myMarqueeWrap.current.style.animationDuration = `${duration}s`
  }, [children, myMarquee, myMarqueeWrap, marqueeSpeed])

  const getElWidth = useCallback(el => {
    return el.current.offsetWidth
  }, [])

  const cls = classnames({
    [styles.marquee]: true,
    [className]: !!className,
  })
  return (
    <div className={cls} ref={myMarquee}>
      <div className={styles.marquee__wrap} ref={myMarqueeWrap}>
        {children}
      </div>
    </div>
  )
})

export default ReactMarquee
