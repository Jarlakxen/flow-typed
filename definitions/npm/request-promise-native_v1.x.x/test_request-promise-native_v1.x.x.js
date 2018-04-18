/* @flow */

import request, { type Response } from 'request-promise-native'


const res1: Promise<any> = request('http://google.com')

const res2: Promise<any> = request({
  method: 'GET',
  uri: 'https://graph.facebook.com/me',
  qs: {
    fields: 'id, email, first_name, last_name, gender'
  }
})

const res3: Promise<any> = request('http://google.com').promise()

const res4: Promise<Response> =  request({
  method: 'GET',
  uri: 'https://graph.facebook.com/me',
  qs: {
    fields: 'id, email, first_name, last_name, gender'
  },
  resolveWithFullResponse: true
})

// $ExpectError
const res5: Promise<any> =  request({
  method: 'GET',
  uri: 'https://graph.facebook.com/me',
  qs: {
    fields: 'id, email, first_name, last_name, gender'
  },
  resolveWithFullResponse: true
})

// $ExpectError
request(1234)
