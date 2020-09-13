import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: 20%;
  max-width: 280px;
  min-width: 80px;
  background-image: linear-gradient(
    315deg,
    rgba(252, 82, 150, 0.8) 0%,
    rgba(246, 112, 98, 0.8) 74%),
    url(${p => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff
`

export const SidebarHeader = styled.h3`
  padding: 20px 0;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 6px;
  font-family: ZCOOL KuaiLe 
`

export const MenuItemContainer = styled.div``;

export const MenuItem = styled.div`
  text-align: center;
  padding: 6px 20px;
  font-weight: 600;
  color: rgba(19, 15, 64)
`;