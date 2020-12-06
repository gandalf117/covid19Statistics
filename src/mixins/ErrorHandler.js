import HttpStatus from '@/classes/http/HttpStatus'

/*
  Handles errors for requests
 */
export let errorHandler = {
  methods: {
    handleError (err) {
      if (err.response) {
        if (err.response.status === HttpStatus.NOT_FOUND) {
          console.error('Api was not found! It probably has changed.')
          console.error('Please, make sure the api is defined correctly in the api/config.js file.')
        }
        if (err.response.status === HttpStatus.FORBIDDEN) {
          console.error('Not authorized to visit this api!')
        }
      } else {
        console.error('RUNTIME ERROR:', err)
      }
    }
  }
}
