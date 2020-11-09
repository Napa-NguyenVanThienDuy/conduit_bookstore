import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function BookDetail() {
  return (
    <div className="book-detail">
      <div className="title">
        <LeftOutlined />
        {/* {title} */}
      </div>
      <div className="book">
        {/* <Card
              key={data.id}
              hoverable
              style={{ width: 180, height: 350 }}
              cover={
                <img
                  alt="Book cover"
                  src={
                    data.image && data.image.publicUrlTransformed
                      ? data.image.publicUrlTransformed
                      : "https://creativepool.com/files/candidate/portfolio/full/862790.jpg"
                  }
                />
              }
            >
              <Meta title={data.name} description={data.author.name} />
            </Card> */}
      </div>
    </div>
  );
}

export default BookDetail;
