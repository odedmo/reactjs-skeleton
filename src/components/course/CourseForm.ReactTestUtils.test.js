import expect from 'expect';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    allAuthors: [],
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const output = TestRenderer.create(<CourseForm {...props}/>);

  return {
    props,
    output
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    const outputData = output.toJSON();
    expect(outputData.type).toBe('form');
    let [ h1 ] = outputData.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const outputData = output.toJSON();
    const submitButton = outputData.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    const outputData = output.toJSON();
    const submitButton = outputData.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
