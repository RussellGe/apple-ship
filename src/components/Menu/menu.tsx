import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type SelectCallback = (selectedIndex: number) => void
type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onSelect?: SelectCallback;
}
interface IMenuContext {
    index: number;
    onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({
    index: 0
})

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props

    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('apple-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const handleClick = (index: number) => {
        setActive(index)
        onSelect && onSelect(index)
    }
    const passedContext: IMenuContext = {
        index: currentActive? currentActive : 0,
        onSelect: handleClick
    }
    return <ul className={classes} style={style} data-testid="test-menu">
        <MenuContext.Provider value={passedContext}>
        {children}
        </MenuContext.Provider>
        </ul>
}
Menu.defaultProps = {
    mode: 'horizontal',
    defaultIndex: 0
}

export default Menu

