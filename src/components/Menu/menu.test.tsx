import React from "react";
import { cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react'
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>
                active
            </MenuItem>
            <MenuItem disabled index={1}>
                disabled
            </MenuItem>
            <MenuItem index={2}>
                test
            </MenuItem>
        </Menu>
    )
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        wrapper = render(generateMenu(testProps))
        menuElement= screen.getByTestId('test-menu')
        activeElement = screen.getByText('active')
        disabledElement = screen.getByText('disabled')
      })
      it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('apple-menu test')
        // eslint-disable-next-line testing-library/no-node-access
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
      })
      it('click items should change active and call the right callback', () => {
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const thirdItem = wrapper.getByText('test')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
      })
      it('should render vertical mode when mode is set to vertical', () => {
        cleanup()
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const wrapper = render(generateMenu(testVerProps))
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
      })
})