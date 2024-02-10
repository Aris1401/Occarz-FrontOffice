import { UserOutlined } from '@ant-design/icons'
import { Avatar, Flex, Tag } from 'antd'
import React from 'react'

const OtherMessage = (props) => {
    const { message } = props;
    return (
        <Flex>
            <Flex gap={5}>
                <Avatar size={24} icon={<UserOutlined />} />
                <Tag>
                    { message }
                </Tag>
            </Flex>
        </Flex>
    )
}

export default OtherMessage