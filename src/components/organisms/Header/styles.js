import styled from '@emotion/styled';

export const SearchInput = styled.input`
  background: ${({ bg = 'transparent' }) => bg} !important;
  border: ${({ border = 'transparent' }) => border} !important;
  box-shadow: ${({ boxShadow = 'none' }) => boxShadow} !important;
  color: ${({ color = '#fff' }) => color} !important;
  width: ${({ width = '100%' }) => width} !important;
`