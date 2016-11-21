import React from 'react';
import {shallow} from 'enzyme';
import App, {DogList} from './PetApp';
import AdoptPage from './AdoptDog';

describe('Basic math and logic', () => {
    //tests go here!, can be test() as well
    it('should confirm that 1 + 1 = 2', () => {
        //run this code to test
        console.log('hello world');
        var expected = 1 + 1;
        var actual = 2;
        expect(expected).toEqual(2);
    });
    it('should do something else', () => {
        expect(Math.sqrt(2)).toEqual(1.41);
    });
    it('should not contain my name in the array', () => {
        expect(['Joel', 'Luis', 'Cameron']).not.toContain('non')
    });
    it('should not be over 10', () => {
        var arr = [8,6,7,5,3,0,9];
        for (var i = 0; i < arr.length; i++) {
            expect(arr[i]).not.toBeGreaterThan(10);
        }
    });
});

describe ('<App> component', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow(<App/>);
        console.log(wrapper.html());
        console.log(wrapper.find('.container'));
    });
});

describe ('<DogList> component', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = shallow(<DogList/>);
    });
    it('has the correct title', () => {
        expect( wrapper.find('h2').text()).toEqual('Dogs for Adoption');
    });

    it('shows all the dog cards', () => {
        var theCards = wrapper.find('DogCard');
        expect(theCards.length).toEqual(5);
    });
});

describe ('<AdoptPage/> component', () => {
    it('should adopt a dog on click', () => {
        const wrapper = shallow(<AdoptPage params={dogName: 'Fido'}/>);
        var button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.find('button').text()).toRqual('Already adopted!');
    });
});


