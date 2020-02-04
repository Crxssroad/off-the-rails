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

  it("should render a parkTitleText element containing the name of the park", () => {
    expect(wrapper.find("div.parkTitleText").text()).toBe("Six Flags")
  })

  it("should render a link to parks show page", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/parks/1")
  })
})
