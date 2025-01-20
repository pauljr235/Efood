import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.darkPink};
  color: ${cores.whitePink};
  font-weight: bold;
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
`
