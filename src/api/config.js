/**
 * @return {String} PROCESS_ENVIRONMENTS
 * The available process Environments
 */
export const PROCESS_ENVIRONMENTS = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'testing'
}

/**
* @return {String} ROUTER_MODE
* The router mode can be set here
*/

export const ROUTER_MODE = 'history' // hash

/**
* @return {String} API_COVID19_ROOT
* The Root URL for back-end calls for covid19
*/
// export const API_COVID19_ROOT = 'http://localhost:3004'
export const API_COVID19_ROOT = 'https://api.covid19api.com/'
