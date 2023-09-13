import { Col, Row, Space, Typography } from 'antd'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MAX_NUMBER_SEATS } from './constants/constants'
import { theaterMap } from './danhSachGhe'

let { Title, Text } = Typography

export class TheaterMap extends Component {
    renderFirstRow = () => {
        let row = new Array(MAX_NUMBER_SEATS + 1).fill("")
        return row.map((n, i) => {
            return <Col span={1} key={i}>
                <Text type='warning' strong>{i < 1 ? "x" : i}</Text>
            </Col>
        })
    }
    renderSeat = (row) => {
        // let row = new Array(MAX_NUMBER_SEATS + 1).fill("")
        let danhSachGhe = [
            { soGhe: row.hang }, // Tên hàng (A, B, C,... J), soGhe dùng để tạo component key (bên dưới)
            ...row.danhSachGhe
        ]
        return danhSachGhe.map((seat, i) => {
            if (i < 1) {
                return <Col span={1} key={seat.soGhe}>
                    <div className="firstChar"><span className=''>{row.hang}</span></div>
                </Col>
            } else {
                let isReserved = seat.daDat ? "reserved" : ""
                let isSelected = seat.daChon ? "selected" : ""
                return <Col span={1} key={seat.soGhe}>
                    <div className={`ghe text-center ${isReserved} ${isSelected}`} onClick={() => { this.props.handleSelect(seat) }}><span className='rowNumber'>{i}</span></div>
                </Col>
            }
        })
    }
    renderRows = () => {
        let theaterMap = [...this.props.theaterMap]
        theaterMap.shift() // remove header

        return theaterMap.map((row, index) => {
            return <Col span={24} key={index}>
                <Row className='mb-3' justify={'center'}>
                    <Space align='center'>
                        {this.renderSeat(row)}
                    </Space>
                </Row>
            </Col>
        })
    }
    render() {
        return (
            <div className='text-center'>
                <Title type='warning' strong >Đặt vé xem phim</Title>
                <Title level={4} className='text-white'>Màn hình</Title>
                <Row justify={'center'}>
                    {this.renderFirstRow()}
                </Row>
                <Row>
                    {this.renderRows()}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { theaterMap: state.movieReducer.theaterMap }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelect: (seat) => {
            let action = {
                type: "SELECT",
                payload: seat.soGhe
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheaterMap)
