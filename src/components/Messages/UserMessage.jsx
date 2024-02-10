import { UserOutlined } from '@ant-design/icons'
import { Flex, Card, Tag, Avatar } from 'antd'
import React from 'react'

const UserMessage = (props) => {
  const { message } = props;
  return (
    <Flex justify='end'>
      <Flex>
          <Tag>
            { message }
          </Tag>
          <Avatar size={24} icon={<UserOutlined />} />
      </Flex>
    </Flex>
  )
}

export default UserMessage