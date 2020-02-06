import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ErrorList from './ErrorList'

Enzyme.configure({ adapter: new Adapter() })

describe("ErrorList", () => {
  let wrapper
  let customErrors = [
    "Name can't be blank",
    "I shouldn't have dropped out of college",
    "An array of errors"
  ]
  
  beforeEach(() => {
    wrapper = mount(
      <ErrorList
        errors={customErrors}
      />
    )
  })

  it("should return an li element containing an error", () => {
    expect(wrapper.find("li").first().text()).toBe("Name can't be blank")
  })

  it("should return all of the errors provided", () => {
    expect(wrapper.find("li").length).toBe(3);
  })
})
