import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter, Link } from 'react-router-dom'

import ParkTile from './ParkTile'

Enzyme.configure({ adapter: new Adapter() })

describe("ParkTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ParkTile
          id="1"
          name="Six Flags"
          description="Cool things happen"
        />
      </BrowserRouter>
    )
  })
  
  it("should render an h4 element containing the name of the park", () => {
    expect(wrapper.find("h4").text()).toBe("Six Flags")
  })

  it("should render paragraph tag with the park description", () => {
    expect(wrapper.find("p").text()).toBe("Cool things happen")
  })

  it("should render a link to parks show page", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/parks/1")
  })
})
