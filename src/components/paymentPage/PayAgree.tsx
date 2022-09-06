import styled from 'styled-components'

const PayAgree = () => {
  return (
    <>
      <Item>
        <CheckBtn type="checkbox" />
        <Text>전체 동의</Text>
      </Item>
      <Item>
        <Text style={{ margin: '0 5px 0 3px' }}>└ </Text>
        <CheckBtn type="checkbox" />
        <Text>구매조건 확인 및 결제에 동의</Text>
      </Item>
    </>
  )
}

export default PayAgree
const CheckBtn = styled.input`
  width: 20px;
  height: 20px;
  accent-color: ${({ theme }) => theme.bg16};
  margin: 0px 8px 0 0px;
  border: 1px solid ${({ theme }) => theme.ls10};
`
const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`
const Text = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc13};
`
