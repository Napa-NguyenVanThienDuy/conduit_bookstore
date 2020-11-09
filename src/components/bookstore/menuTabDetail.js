import React, { useEffect } from "react";
import { Layout, Row, Col, Rate, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  LeftOutlined,
  ContainerOutlined,
  UserOutlined,
  TagsOutlined,
  ReadOutlined,
  ApartmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { detailLoad } from "../../actions/book";

function MenuTabDetail(slug) {
  const bookDetail = useSelector((state) => state.bookDetail);
  const dispatch = useDispatch();

  console.log(bookDetail);
  console.log(
    bookDetail.data.category && bookDetail.data.category.length
      ? bookDetail.data.category.length
      : 0
  );

  useEffect(() => {
    window.scroll(0, 150);
    const id = slug.match.params;
    dispatch(detailLoad(id));
  }, [dispatch]);

  return (
    <>
      <Layout className="layout">
        <div className="detail">
          <div className="title">
            <Link to="/">
              <LeftOutlined />
            </Link>
            {bookDetail.data.name}
          </div>
          <div className="books">
            <Row justify="center">
              <Col span={8} className="image">
                <img
                  src={
                    bookDetail.data.image &&
                    bookDetail.data.image.publicUrlTransformed
                      ? bookDetail.data.image.publicUrlTransformed
                      : "https://creativepool.com/files/candidate/portfolio/full/862790.jpg"
                  }
                />
              </Col>
              <Col span={16}>
                <Row gutter={[8, 8]}>
                  <Col span={8}>
                    <UserOutlined />
                    Author
                  </Col>
                  <Col span={16}>
                    <span>
                      {bookDetail.data.author && bookDetail.data.author.name
                        ? bookDetail.data.author.name
                        : "Loading"}
                    </span>
                  </Col>
                </Row>
                <Row gutter={[8, 8]}>
                  <Col span={8}>
                    <TagsOutlined />
                    Category
                  </Col>
                  <Col span={16}>
                    <span>
                      {bookDetail.data.category &&
                      bookDetail.data.category.length > 0
                        ? bookDetail.data.category.map((data) => (
                            //   <span key={data.name}></span>
                            <Tag color="blue" key={data.name}>
                              {data.name}
                            </Tag>
                          ))
                        : "Loading"}
                    </span>
                  </Col>
                </Row>
                <Row gutter={[8, 8]}>
                  <Col span={8}>
                    <ReadOutlined />
                    Page Number
                  </Col>
                  <Col span={16}>
                    <span>
                      {bookDetail.data && bookDetail.data.pageNumber
                        ? bookDetail.data.pageNumber
                        : "Loading"}
                    </span>
                  </Col>
                </Row>
                <Row gutter={[8, 8]}>
                  <Col span={8}>
                    <ApartmentOutlined />
                    Number In Store
                  </Col>
                  <Col span={16}>
                    <span>
                      {bookDetail.data && bookDetail.data.numberInStore
                        ? bookDetail.data.numberInStore
                        : "Loading"}
                    </span>
                  </Col>
                </Row>
                <Row gutter={[8, 8]}>
                  <Col span={8}>
                    <CalendarOutlined />
                    Publish Date
                  </Col>
                  <Col span={16}>
                    <span>
                      {bookDetail.data && bookDetail.data.publishDate
                        ? bookDetail.data.publishDate
                        : "Loading"}
                    </span>
                  </Col>
                </Row>
                <Row gutter={[8, 8]}>
                  <Rate allowHalf defaultValue={2.5} />
                </Row>
              </Col>
            </Row>
            <div className="describe">
              <ContainerOutlined />
              Describe
            </div>
            <span>
              {bookDetail.data && bookDetail.data.describe
                ? bookDetail.data.describe
                : "Loading"}
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MenuTabDetail;
