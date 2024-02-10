import { UserOutlined } from '@ant-design/icons'
import { Avatar, Flex, Tag } from 'antd'
import React from 'react'

const OtherMessage = () => {
    return (
        <Flex>
            <Flex gap={5}>
                <Avatar size={24} icon={<UserOutlined />} />
                <Tag>
                    This is a message
                </Tag>
            </Flex>
        </Flex>
    )
}

export default OtherMessage