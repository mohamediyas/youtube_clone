import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div``;

const NewCComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: inherit;
`;

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
      } catch (err) {}
    };
  }, []);

  return (
    <Container>
      <NewCComment>
        <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
        <Input placeholder="Add a Comment......" />
      </NewCComment>
      {comments.map((comment) => (
        <Comment />
      ))}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
