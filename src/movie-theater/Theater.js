import React, { Component } from 'react'
import TheaterMap from './TheaterMap'
import TheaterCart from './TheaterCart'
import { Col, Row } from 'antd'
import './BaiTapBookingTicket.css';

export default class Theater extends Component {
    render() {
        return (
            <div className="theater mt-5">
                <Row justify={'center'}>
                    <Col xl={15} sm={24}>
                        <TheaterMap />
                    </Col>
                    <Col xl={5} sm={20}>
                        <TheaterCart />
                    </Col>
                    <Col xl={4} sm={0}>

                    </Col>
                </Row>
            </div>
        )
    }
}
