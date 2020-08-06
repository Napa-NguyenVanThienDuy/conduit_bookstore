import React, { useEffect, useCallback } from "react";
import { Menu, Layout } from "antd";
import { NavLink } from "react-router-dom";
import {
  FireOutlined,
  TeamOutlined,
  BarsOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import Content from "./content";
import { bookLoad } from "../../actions/book";

const { SubMenu } = Menu;

function MenuTab() {
  const bookstore = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookLoad("id_ASC", 1, 0, 10));
  }, [dispatch]);

  const handlePageChange = useCallback(
    (page) => {
      const offset = page === 1 ? 0 : bookstore.page * bookstore.size;
      dispatch(bookLoad("id_ASC", page, offset, 10));
    },
    [dispatch]
  );

  const handleClickMenu = (key) => {
    console.log("menu", key);
  };

  return (
    <>
      <Menu mode="horizontal" onClick={handleClickMenu}>
        <Menu.Item key="hot" icon={<FireOutlined />}>
          <NavLink to="/">Hot</NavLink>
        </Menu.Item>
        <SubMenu icon={<BarsOutlined />} title="Category">
          {bookstore.categories.length > 0 &&
            bookstore.categories.map((data) => (
              <Menu.Item key={data.name}>{data.name}</Menu.Item>
            ))}
        </SubMenu>
        <SubMenu icon={<TeamOutlined />} title="Author">
          {bookstore.authors.length > 0 &&
            bookstore.authors.map((data) => (
              <Menu.Item key={data.name}>{data.name}</Menu.Item>
            ))}
        </SubMenu>
        <Menu.Item key="favorite" icon={<ShoppingCartOutlined />}>
          <NavLink to="/">Favorite</NavLink>
        </Menu.Item>
      </Menu>
      <Layout className="layout">
        <Content
          books={bookstore.books}
          // page={bookstore.page}
          countBook={bookstore.countBook}
          handlePageChange={handlePageChange}
        />
      </Layout>
    </>
  );
}

export default MenuTab;
