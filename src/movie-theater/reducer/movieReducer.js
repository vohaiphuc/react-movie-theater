import { theaterMap } from "../danhSachGhe.js";

const initialState = {
    theaterMap: theaterMap,
}

export let movieReducer = (state = initialState, { type, payload }) => {
    let cloneTheaterMap = [...state.theaterMap]
    let selectedSeatNumber = payload
    switch (type) {
        case "SELECT":
            var locateSeat = findSeatInMap(cloneTheaterMap, selectedSeatNumber)
            if (locateSeat.found) {
                let seat = cloneTheaterMap[locateSeat.rowIndex].danhSachGhe[locateSeat.seatIndex]
                if (!seat.daDat) {
                    seat.daChon = !seat.daChon
                }
            }
            return { ...state, theaterMap: cloneTheaterMap }
        case "CANCEL":
            var locateSeat = findSeatInMap(cloneTheaterMap, selectedSeatNumber)
            if (locateSeat.found) {
                cloneTheaterMap[locateSeat.rowIndex].danhSachGhe[locateSeat.seatIndex].daChon = false
            }
            return { ...state, theaterMap: cloneTheaterMap }
        default:
            return state
    }
}

const findSeatInMap = (theaterMap, selectedSeatNumber) => {
    var rowIndex
    var seatIndex
    var found = true
    var selectedRow = selectedSeatNumber.slice(0, 1)
    var index = theaterMap.findIndex((item) => {
        return item.hang === selectedRow
    })
    if (index < 0) {
        console.log("Không tìm thấy hàng này:", selectedRow);
        found = false
    } else {
        var danhSachGhe = theaterMap[index].danhSachGhe
        var indexSelectedSeat = danhSachGhe.findIndex((item) => {
            return item.soGhe === selectedSeatNumber
        })
        if (indexSelectedSeat < 0) {
            console.log("Không tìm thấy ghế này:", selectedSeatNumber);
            found = false
        } else {
            rowIndex = index
            seatIndex = indexSelectedSeat
        }
    }
    return {
        found,
        rowIndex,
        seatIndex
    }
}