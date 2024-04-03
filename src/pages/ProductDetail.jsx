import React,{useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { productAction } from "../redux/actions/productAction";
import { fetchProductDetail } from "../redux/reducers/productSlice";


const ProductDetail =()=>{
    const product = useSelector((state) => state.product.ProductList);
    //const [detail, setDetail] = useState();
    let {id} = useParams();
    const dispatch = useDispatch();
    const getProductDetail = () => {
        //dispatch(productAction.getProductDetail(id));
        dispatch(fetchProductDetail(id));
    }

    useEffect(()=>{
        getProductDetail();
    },[]);

    return (<div className="product-detail">
        <div className="product-detail-images">
            <img src={product?.img} alt={product?.title} />
        </div>
        <div className="product-detail-choice">
            <div className="product-detail-choice-title">
                {product?.title}
                <span className="product-detail-choice-title-new">
                    {product?.new?"신제품":null}
                </span>
            </div>
            <div className="product-detail-choice-price">\ {product?.price}</div>
            <ul className="product-detail-choice-size">
                {product?.size.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="product-detail-choice-add">
                <i className="xi-cart-o"></i> 추가
            </div>

            <ul className="product-detail-choice-info">
                <li>
                    <i className="xi-shop"></i>
                    매장별 제품 찾기</li>
                <li>
                    <i className="xi-error-o"></i>
                    배송기간 : 영업일 기준 2~3일</li>
            </ul>


            <ul className="product-detail-choice-desc">
                <li>설명&핏</li>
                <li>소재</li>
                <li>케어가이드</li>
            </ul>
        </div>
    </div>)
} 

export default ProductDetail;