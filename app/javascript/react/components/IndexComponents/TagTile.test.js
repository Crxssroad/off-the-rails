import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter, Link } from 'react-router-dom'

import TagTile from './TagTile'

Enzyme.configure({ adapter: new Adapter() })

describe("TagTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <TagTile
          key={"1"}
          tag={{
            name: "Fire",
            id: 1
          }}
        />
      </BrowserRouter>
    )
  })

  it("should render a link element containing the name of the park", () => {
    expect(wrapper.find("Link").text()).toBe("Fire")
  })

  it("should render a link to all the parks matching the tag", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/tags/1/parks")
  })
})
