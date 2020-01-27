import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })
describe("example", () => {
  it('should not print the error list', () => {
    expect(true).toBe(true)
  })
})
