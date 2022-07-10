import React, { useState } from "react";
import classeNames from "classnames"

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface BaseAlertProps {
    title?: string
    content: string
    type?: AlertType
    showClose?: boolean
    onClose?: () => void
}

type AlertDefaultProps = React.BaseHTMLAttributes<HTMLDivElement>

export type AlertProps = Partial<BaseAlertProps & AlertDefaultProps>

const Alert: React.FC<AlertProps> = (props) => {
    const [hide, setHide] = useState(false)
    const {title, content, type, showClose, onClose, ...restProps} = props
    const classes = classeNames('alert', {[`alert-${type}`]: type})
    const handleClose = (e: React.MouseEvent) => {
        if(onClose) {
            onClose()
        }
        setHide(true)
    }
    return hide ? (<div className={classes} {...restProps}>
       {title ? <span className='title'>{title}</span> : null} 
       {content}
       {showClose ? <span onClick={handleClose} className="close">关闭</span> : null}
    </div>) : null
}

Alert.defaultProps = {
    type: 'default',
    showClose: true
}

export default Alert