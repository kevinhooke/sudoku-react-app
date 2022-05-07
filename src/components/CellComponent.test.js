import React from 'react';
import renderer, { create }  from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import CellComponent from './CellComponent.jsx';

describe('Renders a Cell', () => {

    it('Renders cell with initial given value of 1 - snapshot compare', () => {
        let value = {
            value: "1"
        }
        const component = renderer.create(<CellComponent value={value}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Renders input, initialGiven = false', () => {
        let value = {
            value: "1",
            initialGiven: false
        }
        const renderer = new ShallowRenderer();
        renderer.render(<CellComponent value={value}/>);
        const result = renderer.getRenderOutput();

        //console.log(result);
        expect(result.type).toBe('div');

        // expected: <input className="cell" onChange={handleChange} type="text" value="1" />
        expect(result.props.children.type).toBe("input");
        expect(result.props.children.props.className).toBe("cell");
        expect(result.props.children.props.value).toBe("1");
    })

    it('Renders div, initialGiven = true', () => {
        let value = {
            value: "1",
            initialGiven: true
        }
        const renderer = new ShallowRenderer();
        renderer.render(<CellComponent value={value}/>);
        const result = renderer.getRenderOutput();

        //console.log(result);
        expect(result.type).toBe('div');
        expect(result.props.children.type).toBe("div");
        expect(result.props.children).toEqual(
            <div>1</div>
        );
    })
})