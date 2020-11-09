import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function Content({ books, countBook, handlePageChange, title }) {
  //const bookstore = useSelector((state) => state.book);
  //console.log("object", bookstore.books);
  //const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="title">
        <StarOutlined />
        {title}
      </div>
      <div className="book">
        {books.length > 0 &&
          books.map((data) => (
            <Link to={`/book/${data.id}`}>
              <Card
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
              </Card>
            </Link>
          ))}
      </div>
      <div className="paginate-wrapper">
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          showSizeChanger={false}
          showTotal={(total) => `Total ${total} items`}
          onChange={(page) => {
            handlePageChange(page);
          }}
          total={countBook}
        />
      </div>
    </div>
  );
}

export default Content;
