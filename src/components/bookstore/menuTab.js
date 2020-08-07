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
import { bookLoad, filterLoad } from "../../actions/book";

const { SubMenu } = Menu;

function MenuTab() {
  const bookstore = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookLoad("id_ASC", 1, 0, 10));
  }, [dispatch]);

  const handleClickMenu = useCallback(
    (value) => {
      const data = {
        author: {},
        category: {},
      };
      if (value.keyPath.length > 0 && value.keyPath[1] === "item_1") {
        data.category = {
          name_in: value.key,
        };
      }
      if (value.keyPath.length > 0 && value.keyPath[1] === "item_2") {
        data.author = {
          name_in: value.key,
        };
      }
      dispatch(filterLoad(1, 0, 10, data));
    },
    [dispatch]
  );

  const filters = bookstore.filter;
  console.log(filters);
  const handlePageChange = (page) => {
    const offset = (page - 1) * 10;
    filters
      ? dispatch(filterLoad(1, offset, 10, filters))
      : dispatch(bookLoad(1, offset, 10));
  };
  // [dispatch]
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
          title={bookstore.title}
        />
      </Layout>
    </>
  );
}

export default MenuTab;
