import React, { Component } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banana from "../Assets/images/banana.svg";

const ProductItem = styled.div``;

const Container = styled.div`
  position: relative;
  .slick-slider {
    height: 100vh;
    .slick-slide {
      position: relative;
      img {
        width: 100%;
        height: 60vh;
      }
      button {
        position: absolute;
        top: 50%;
        left: 50%;
      }
    }
  }
`;

const Banner = styled.img`
  position: absolute;
  background: red;
  width: 100%;
  height: 36vh;

  margin: 0;
`;

class Product {
  constructor(
    public url: string,
    public name: string,
    public price: number,
    public id?: number
  ) {
    this.id = Products.length + 1;
    this.url = url;
    this.name = name;
    this.price = price;
  }
}

let Products: Product[] = [];

Products = [
  ...Products,
  new Product(
    "https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg",
    "Batata",
    10
  ),
];
Products = [
  ...Products,
  new Product(
    "Https://www.sabornamesa.com.br/media/k2/items/cache/0f18514092300971a1d9467fe5706101_XL.jpg",
    "Feijoada",
    100
  ),
];
Products = [
  ...Products,
  new Product(
    "https://www.sabornamesa.com.br/media/k2/items/cache/73d7edd1405081e5433c41d9ad2ee18c_XL.jpg",
    "Parmegiana",
    100
  ),
];

export default class Home extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      centerMode: true,
      centerPadding: "40px",
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <Container>
        {/* <Banner src={banana} alt="Banana Gang Logo"></Banner> */}
        <Slider {...settings}>
          {Products.map((item) => (
            <ProductItem>
              <img src={item.url} alt={item.name} />
              <button> Comprar </button>
            </ProductItem>
          ))}
        </Slider>
      </Container>
    );
  }
}
