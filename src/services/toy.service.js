// import { storageService } from './async-storage.service.js'
// import { userService } from './user.service.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'toyDB'
const BASE_URL = 'toy/'

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
  getDefaultFilter,
}

function query(filterBy = {}) {
  return httpService.get(BASE_URL, filterBy)
}
function getById(toyId) {
  return httpService.get(BASE_URL + toyId)
}
function remove(toyId) {
  // return Promise.reject('Not now!')
  return httpService.delete(BASE_URL + toyId)
}
function save(toy) {
  if (toy._id) {
    return httpService.put(BASE_URL, toy)
  } else {
    // when switching to backend - remove the next line
    return httpService.post(BASE_URL, toy)
  }
}

function getEmptyToy() {
  return {
    name: '',
    price: '',
    inStock: true,
    labels: []
  }
}

function getDefaultFilter() {
  return { txt: '', maxPrice: '', status: '', labels: [] }
}

function _createToys() {
  let toys = utilService.loadFromStorage(STORAGE_KEY)
  if (!toys || !toys.length) {
      toys = [
        {
          _id: 't101',
          name: 'Talking Doll1',
          price: 123,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
        {
          _id: 't102',
          name: 'Talking Doll2',
          price: 123,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
        {
          _id: 't103',
          name: 'Talking Doll3',
          price: 123,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: 1631031801011,
          inStock: true,
        },
      ]

      utilService.saveToStorage(STORAGE_KEY, toys)
  }
}