import Vue from 'vue'
import moment from 'moment'

/* A global event bus */
export const EventBus = new Vue()

/* The global (main) date format */
const globalDateFormat = 'YYYY-MM-DD'

/**
 * Converts a date to a particular format or uses the global format
 *
 * @params date - A string containing the date that needs to be converted
 * @params dateFormat - A string containing the format of the date
 * if not defined will default to the global format
 */
export function dateTimeFormat (date, dateFormat = globalDateFormat) {
  return moment(date).format(dateFormat)
}

/**
 * Generates a random integer between min (included) and max (excluded)
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
