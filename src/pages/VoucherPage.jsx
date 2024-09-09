
import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import VoucherList from './VoucherList'

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Voucher Module"} />
        <VoucherList/>
      </Container>
    </section>
  )
}

export default VoucherPage