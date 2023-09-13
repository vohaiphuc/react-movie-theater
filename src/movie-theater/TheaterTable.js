import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Table, Divider, ConfigProvider } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

const columns = [
    {
        title: '',
        dataIndex: 'seatCancel',
    },
    {
        title: 'Số ghế',
        dataIndex: 'seatNumber',
    },
    {
        title: 'Giá',
        dataIndex: 'seatPrice',
    },
];

export class TheaterTable extends Component {
    renderDataRow = () => {
        let theaterMap = this.props.theaterMap
        let selectedSeatList = []
        theaterMap.forEach((row, index) => {
            let selectedSeatInSameRow = row.danhSachGhe.filter(seat => seat.daChon == true)
            selectedSeatList.push(...selectedSeatInSameRow)
        })

        let data = []
        selectedSeatList.forEach((seat, index) => {
            data.push({
                key: index,
                seatNumber: seat.soGhe,
                seatPrice: seat.gia.toLocaleString(),

                seatCancel: <CloseCircleFilled onClick={() => { this.props.handleCancelSeat(seat) }} />,
            })
        })
        let footer = {
            key: "total",
            seatNumber: "Tổng tiền",
            seatPrice: this.calTotal(selectedSeatList).toLocaleString(),
        }
        data.push(footer)
        return data
    }
    calTotal = (selectedSeatList) => {
        let priceList = selectedSeatList.map(seat => seat.gia)
        return priceList.reduce((prev, current) => { return prev + current }, 0)
    }
    render() {
        return <Table
            columns={columns}
            dataSource={this.renderDataRow()}
            size="middle" pagination={{
                position: ["none", "none"],
            }}
            id='table-seat'
        />
    }
}

const mapStateToProps = (state) => {
    return { theaterMap: state.movieReducer.theaterMap }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCancelSeat: (seat) => {
            let action = {
                type: "CANCEL",
                payload: seat.soGhe
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheaterTable)
