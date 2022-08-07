import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

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
  const { user } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);

        setComments(res.data);
      } catch (err) {}
    };

    fetchComment();
  }, [videoId]);

  return (
    <Container>
      <NewCComment>
        <Avatar src={user.img} />
        <Input placeholder="Add a Comment......" />
      </NewCComment>
      {comments.map((comment) => (
        <Comment key={comment._id} com={comment} />
      ))}
    </Container>
  );
};

export default Comments;
