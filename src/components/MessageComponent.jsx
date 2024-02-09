import React from 'react';
import { Avatar, Comment } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MessageComponent = ({ author, content, timestamp }) => {
  return (
    <Comment
      author={author}
      avatar={<Avatar icon={<UserOutlined />} />}
      content={<p>{content}</p>}
      datetime={<span>{timestamp}</span>}
    />
  );
};

export default MessageComponent;
