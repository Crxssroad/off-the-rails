import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import ParkDetailTile from './ParkDetailTile'

Enzyme.configure({ adapter: new Adapter() })

describe("Park Detail Tile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <ParkDetailTile
        name="Epcot"
        description="Largest golf ball in the world"
      />
    )
  })

  it('should have a name', () => {
    expect(wrapper.find("div.showPageRibbon").text()).toBe("Epcot")
  })

  it('should have a description', () => {
    expect(wrapper.find("p").text()).toBe("Largest golf ball in the world")
  })
})
