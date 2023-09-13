import React, { Component } from 'react'
import TheaterMap from './TheaterMap'
import TheaterCart from './TheaterCart'
import { Col, Row } from 'antd'
import './BaiTapBookingTicket.css';

export default class Theater extends Component {
    render() {
        return (
            <div className="theater">
                <Row justify={'center'}>
                    <Col span={15}>
                        <TheaterMap />
                    </Col>
                    <Col span={5}>
                        <TheaterCart />
                    </Col>
                </Row>
            </div>
        )
    }
}
