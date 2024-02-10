import { Avatar, Card, Flex } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

const Discussion = (props) => {
  const { discussion, changeDiscussion } = props;

  return (
    <Card onClick={ (e) => {
      changeDiscussion(discussion)
    } }>
        <Flex gap={10} align='center'>
            <Avatar size={64-16} icon={ <UserOutlined /> } />

            <Flex vertical>
              <p className='m-0'><strong>Annonce: { discussion.annonce.titre }</strong></p>
              <p className='p-0 m-0'>{ discussion.annonce.utilisateur.nom + " " + discussion.annonce.utilisateur.prenom }</p>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Discussion