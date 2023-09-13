import { combineReducer, combineReducers } from "redux"
import { movieReducer } from "./movieReducer.js"

export let rootReducer = combineReducers({ movieReducer: movieReducer })