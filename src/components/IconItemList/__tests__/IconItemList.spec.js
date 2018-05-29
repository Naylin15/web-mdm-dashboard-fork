import React from 'react'
import IconItemList from "../index"

describe('IconItemList', () => {
    it('should call componentDidMount', () => {
        sinon.spy(IconItemList.prototype, 'componentDidMount')
        const wrapper = mount(<IconItemList image="profile.png"/>)
        expect(IconItemList.prototype.componentDidMount.calledOnce).toBeTruthy()
      })
})