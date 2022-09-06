import styled from 'styled-components'

import PayTitle from '../components/paymentPage/payTitle/PayTitle'
import OrderPay from '../containers/paymentPage/orderPay/OrderPay'
import OrderPList from '../containers/paymentPage/orderPList/OrderPList'
import { theme } from '../style/theme'

const PaymentPage = () => {
  return (
    <>
      <Area>
        <PayTitle />
        <PayArea>
          <OrderPList />
          <OrderPay></OrderPay>
        </PayArea>
      </Area>
    </>
  )
}
export default PaymentPage
const Area = styled.div`
  background-color: ${theme.bg03};
  display: grid;
  justify-content: center;
  width: 100%;
  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`

const PayArea = styled.div`
  margin: 0px auto;
  margin-bottom: 100px;
`
