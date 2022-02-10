import {build, fake, sequence} from 'test-data-bot'

//test form with fake data
const userBuilder = build('User').fields({
  email: sequence(x => `name${x}@test.com`),
  emailABTasty: sequence(x => `name${x}@abtasty.com`),
  password: fake(f => f.internet.password()),
})

export {userBuilder}
