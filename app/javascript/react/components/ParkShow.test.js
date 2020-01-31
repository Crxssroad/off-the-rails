import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ParkShow from './ParkShow'

Enzyme.configure({ adapter: new Adapter() })

describe("ParkShow", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <ParkShow
        id="1"
        name="Six Flags"
        description="Cool things happen"
      />
    )
  })

  it("", () => {
    expect(true).toBe(true)
  })
})
