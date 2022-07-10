import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import Button , { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'classTest'
}

const disabledProps: ButtonProps = {
   disabled: true,
   onClick: jest.fn() 
}
describe('Button Component', () => {
    it('Render in dom', () => {
        render(<Button>Nice</Button>);
        const element = screen.queryByText('Nice');
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
    })
    it('Should render the correct default button', () => {
        render(<Button {...defaultProps}>Nice</Button>);
        const element = screen.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toBe('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('Should render the correct component based on different props', () => {
        render(<Button {...testProps}>Nice</Button>);
        const element = screen.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-primary btn-lg classTest')
    })
    it('Should render a link when btnType equals link and href is provided', () => {
        render(<Button btnType={ButtonType.Link} href='http'>Nice</Button>);
        const element = screen.getByText('Nice') 
        expect(element).toBeInTheDocument()
        expect(element.tagName).toBe('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('Should render disabled button when disabled set to true', () => {
        render(<Button {...disabledProps}>Nice</Button>)
        const element = screen.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toBeCalled()
    })
})
