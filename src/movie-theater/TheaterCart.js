import React, { Component } from 'react'
import { Row, Typography } from 'antd'
import TheaterTable from './TheaterTable'
let { Title } = Typography

export default class TheaterCart extends Component {

    render() {
        return (
            <div>
                <Title type='warning'>
                    Danh sách ghế bạn chọn
                </Title>
                <Row align={'bottom'} className='mb-2'>
                    <div className="ghe reserved mr-3"></div>
                    <Title level={5} className='text-white'>Ghế đã đặt</Title>
                </Row>
                <Row align={'bottom'} className='mb-2'>
                    <div className="ghe selected mr-3"></div>
                    <Title level={5} className='text-white'>Ghế đang chọn</Title>
                </Row>
                <Row align={'bottom'} className='mb-2'>
                    <div className="ghe mr-3"></div>
                    <Title level={5} className='text-white'>Ghế chưa đặt</Title>
                </Row>
                <TheaterTable />
            </div>
        )
    }
}