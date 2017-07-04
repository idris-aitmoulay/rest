import * as validation from '.'

beforeEach(() => {

})

describe('mail validation', () => {
  it('OK mail', () => {
    expect(validation.mailValidator('test@gmail.com')).toEqual(true)
  })

  it('NG mail', () => {
    expect(validation.mailValidator('testgmail.com')).toEqual(false)
  })
})

describe('phone validation', () => {
  it('OK phone', () => {
    expect(validation.telValidator('012345678910')).toEqual(true)
  })

  it('NG phone', () => {
    expect(validation.telValidator('0801234')).toEqual(false)
  })
})
