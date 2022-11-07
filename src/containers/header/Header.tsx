import * as t from "./Header.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../elements/searchBar/SearchBar";
import headLogo from "./../../assets/logo/headLogo.png";
import SchProdModal from "../../components/modal/schProdModal/SchProdModal";
import ScrollHeader from "../../components/header/scroll/ScrollHeader";
import MenuDrop from "../../elements/menuDrop/MenuDrop";
import useDropDown from "../../hooks/useDropDown";
import AsideHeader from "../../components/header/aside/AsideHeader";
import { useLogOut } from "./useLogout";
import { useViewport } from "../../hooks/useViewport";
import { getAllCartDB } from "../../hooks/useAllCartDB";
import { CartType } from "../../shared/types/types";

let cateData: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: "전체", path: "/list/전체" },
  { id: 2, cate: "욕실", path: "/list/욕실" },
  { id: 3, cate: "주방", path: "/list/주방" },
  { id: 4, cate: "음료용품", path: "/list/음료용품" },
  { id: 5, cate: "생활", path: "/list/생활" },
  { id: 6, cate: "식품", path: "/list/식품" },
  { id: 7, cate: "화장품", path: "/list/화장품" },
  { id: 8, cate: "문구", path: "/list/문구" },
];

const token = localStorage.getItem("token");

const Header = () => {
  const viewport = useViewport();
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [cartData, setCartData] = useState<CartType[]>();
  console.log("cartData: ", cartData);

  const goHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const result = getAllCartDB();
    result.then((res) => setCartData(res));
  }, []);

  // const CData = {
  //   cartList: cartData,
  // };

  // const { mutate, isSuccess, data } = useLogOut(CData);

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log("Success");
  //     localStorage.clear();
  //     window.location.href = "/";
  //   }
  // }, [isSuccess]);

  const handelLogOut = () => {
    localStorage.clear();
    //   mutate();
  };

  return (
    <>
      <SchProdModal
        isOpen={searchIsOpen}
        handleClose={() => setSearchIsOpen(false)}
      />
      <AsideHeader
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
      />
      <t.HeaderContainer>
        <t.HeaderWrapper>
          <t.LeftDiv>
            <img src={headLogo} onClick={goHome} />
            <p onClick={handleRemove} ref={dropRef}>
              장보기
            </p>
            <MenuDrop isDropped={isDropped} cateData={cateData} />
          </t.LeftDiv>
          <t.RightDiv>
            <SearchBar />
            {!token ? (
              <>
                {viewport >= 990 ? (
                  <>
                    <Link to={"/login"}>
                      <span>로그인</span>
                    </Link>
                    <Link to={"/signup"}>
                      <span>회원가입</span>
                    </Link>
                    <t.ShopIcon
                      onClick={() => alert("로그인 먼저 해주세요!")}
                    />
                  </>
                ) : (
                  <>
                    <t.ShopIcon
                      onClick={() => alert("로그인 먼저 해주세요!")}
                    />
                    <t.SchIcon onClick={() => setSearchIsOpen(true)} />
                    <t.EtcIcon onClick={() => setInfoIsOpen(true)} />
                  </>
                )}
              </>
            ) : (
              <>
                {viewport >= 990 ? (
                  <>
                    <span
                      onClick={() => {
                        handelLogOut();
                      }}
                    >
                      로그아웃
                    </span>
                    <Link to={"/mypage"}>
                      <t.UserIcon />
                    </Link>
                    <div>
                      <Link to={"/cart"}>
                        <t.CountBadge
                          badgeContent={cartData ? cartData.length : ""}
                        >
                          <t.ShopIcon />
                        </t.CountBadge>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Link to={"/cart"}>
                        <t.CountBadge
                          badgeContent={cartData ? cartData.length : ""}
                        >
                          <t.ShopIcon />
                        </t.CountBadge>
                      </Link>
                    </div>
                    <Link to={"/mypage"}>
                      <t.UserIcon />
                    </Link>
                    <t.SchIcon onClick={() => setSearchIsOpen(true)} />
                    <t.EtcIcon onClick={() => setInfoIsOpen(true)} />
                  </>
                )}
              </>
            )}
          </t.RightDiv>
        </t.HeaderWrapper>
      </t.HeaderContainer>
      <ScrollHeader />
    </>
  );
};

export default Header;
