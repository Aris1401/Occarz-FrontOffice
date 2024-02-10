import { UserOutlined } from '@ant-design/icons'
import { Flex, Card, Tag, Avatar } from 'antd'
import React from 'react'

const UserMessage = () => {
  return (
    <Flex justify='end'>
      <Flex>
          <Tag>
            This is a message
          </Tag>
          <Avatar size={24} icon={<UserOutlined />} />
      </Flex>
    </Flex>
  )
}

export default UserMessage