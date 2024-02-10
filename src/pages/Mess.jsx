import React, { useEffect, useState } from 'react';
import Message from '../components/Message';
import { Button, Card, Flex, Form, Input, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Discussion from '../components/Messages/Discussion';
import { envoyerMessage, listeDesDiscussions, listeDesMessages } from '../services/messagerie/MessagerieService';
import { SendOutlined } from '@ant-design/icons';
import UserMessage from '../components/Messages/UserMessage';
import OtherMessage from '../components/Messages/OtherMessage';

const Mess = () => {
    const [ discussionSelected, setDiscussionSelected ] = useState(undefined)

    // Discussions
    const [ discussions, setDiscussions ] = useState([])
    useEffect(() => {
        listeDesDiscussions().then((data) => {
            setDiscussions(data.data)
        })
    }, [])    

    // Message
    const [ messages, setMessages ] = useState([])
    const loadMessages = (idDiscussion) => {
        listeDesMessages(idDiscussion).then((data) => [
            setMessages(data.data)
        ])
    }

    const handleDiscussionChange = (discussion) => {
        setDiscussionSelected(discussion)

        loadMessages(discussion.id)
    }

    const [ currentMessage, setCurrentMessage ] = useState("")
    const handleEnvoyerMessage = () => {
        if ( !discussionSelected ) return;

        envoyerMessage(currentMessage, discussionSelected.id).then((data) => {
            loadMessages(discussionSelected.id)
            setCurrentMessage("")
        })
    }

    return (
        <div>
            <Card>
                <Flex gap={10}>
                    <div style={{ width: '400px' }}>
                        <h5>Discussions</h5>

                        <Flex vertical gap={10} style={{ height: '600px', maxHeight: '600px', overflowY: 'scroll' }}>
                            { discussions.map((item, index) => {
                                return <Discussion changeDiscussion={handleDiscussionChange}  discussion={item} />
                            }) }
                        </Flex>
                    </div>

                    <Card title={ discussionSelected && (discussionSelected.annonce.utilisateur.nom + " " + discussionSelected.annonce.utilisateur.prenom) } style={{ width: '100%' }}>
                        <Flex justify='end' vertical style={{ height: '100%' }} gap={10}>
                            <Flex vertical gap={10} className='message-container' style={{ width: '100%', maxHeight: '500px', height: '500px !important', minHeight: '500px', overflowY: 'scroll' }}>
                                { messages.map((data, index) => {
                                    return data.monCote ? <UserMessage message={ data.message.message } /> : <OtherMessage message={ data.message.message } />;
                                }) }
                            </Flex>

                            <Flex gap={2} align='center' style={{  }}>
                                <Input placeholder='Message....' onChange={ (e) => {
                                    setCurrentMessage(e.target.value)
                                } } value={currentMessage} />
                                <Button type='primary' onClick={(e) => {
                                    handleEnvoyerMessage()
                                }} ><SendOutlined /></Button>
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>
            </Card>
        </div>
    );
};
export default Mess;

