import React, { useState ,useContext } from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component = ({ className }: Props): JSX.Element => {
  return (
    <div className={className}>
      <div className="title">SP！！</div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  padding: 74px 20px 40px;
  color: ${(props) => props.theme.white};
`

export const PcScreen = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />
}
