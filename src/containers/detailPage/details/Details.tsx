import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import QueryString from "qs";

import * as t from "./details.style";
import { useDetailQuery } from "./useDetailQuery";
import ProductImgs from "../../../components/detailPage/productImgs/ProductImgs";
import ProductCarousel from "../../../components/detailPage/productCarousel/ProductCarousel";
import ProductName from "../../../components/detailPage/productName/ProductName";
import ProductSummary from "../../../components/detailPage/productSummary/ProductSummary";
import ProductOptions from "../../../components/detailPage/productOptions/ProductOptions";
import Error from "../../../elements/Error";
import { useAppSelector } from "../../../redux/store";

const Details = () => {
  const { productNo } = useParams();
  const location = useLocation();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = String(query.keyword);

  useDetailQuery(productNo, keyword ? keyword : null);
  const detailData = useAppSelector((state) => state.detailSlice.details);

  const { productDetail } = useMemo(
    () => ({
      productDetail: detailData?.product,
    }),
    [detailData]
  );

  //뷰포트 사이즈에 따라 상품 썸네일 carousel로 변경
  const [viewport, setViewport] = useState(visualViewport.width);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <t.ProdInfoContainer>
      <Error />
      {viewport <= 990 ? <ProductCarousel /> : <ProductImgs />}
      <t.InfoWrapper>
        <ProductName />
        <ProductSummary />
        <ProductOptions />
      </t.InfoWrapper>
    </t.ProdInfoContainer>
  );
};

export default Details;
