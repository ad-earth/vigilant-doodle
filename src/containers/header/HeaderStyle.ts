import styled from "styled-components";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  border-bottom: 1px solid #e5e7eb;
`;
export const HeaderWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;
export const LeftDiv = styled.div`
  display: flex;
  float: left;
`;
export const LogoDiv = styled.div`
  width: 160px;
  margin: auto 10px;
`;
export const LogoImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const CategorySpan = styled.span`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.fc15};
  margin: 30px 10px;
`;
export const RightDiv = styled.div`
  display: flex;
  float: right;
`;
export const LogInSpan = styled.span`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.fc15};
  margin: auto 10px;
`;
export const LogOutSpan = styled.span`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.fc15};
  margin: auto 10px;
`;
export const IconDiv = styled.div`
  margin: 22px 10px 0 0;
`;
export const CountBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    top: 30,
    color: "white",
    backgroundColor: "#646464",
    marginRight: "5px",
  },
});
export const UserIcon = styled(PersonOutlineOutlinedIcon)({
  color: "#00913a",
});
export const ShopIcon = styled(ShoppingBagOutlinedIcon)({
  color: "#00913a",
});
