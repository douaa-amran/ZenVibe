import React, { useState } from 'react';
import {
    UserOutlined,
    ReadOutlined,
    SmileOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import ArticlePost from './ArticlePost';
import ChatBot from './ChatBot';
import UserProfile from './UserProfile';
import Profil2 from '../../Images/Profil2.png';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/FormsLogo.png';
import { auth } from '../Authentication/firebase.jsx';


const { Header, Content, Footer, Sider } = Layout;



const App = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('1');

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: '#1D1E40'
                }}
                width={250}
                collapsedWidth={100}
            >
                <div className="demo-logo-vertical flex flex-col gap-8 justify-center items-center p-6 mt-4 mb-6">
                    <img src={logo} alt="logo" className='w-20 h-auto' />
                    <hr className='w-4/5 border-2 border-light-purple' />
                </div>
                <Menu
                    style={{ backgroundColor: '#1D1E40'}}
                    onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} theme="dark" mode="inline" items={[
                        {
                            key: '1',
                            icon: <UserOutlined  style={{ color: '#F3E8FF' }}/>,
                            label: 'Profil',
                        },
                        {
                            key: '2',
                            icon: <ReadOutlined  style={{ color: '#F3E8FF' }}/>,
                            label: 'Articles',
                        },
                        {
                            key: '3',
                            icon: <SmileOutlined  style={{ color: '#F3E8FF' }}/>,
                            label: 'AI Assistant',
                        },
                        {
                            key: '4',
                            onClick: handleLogout,
                            icon: <LogoutOutlined  style={{ color: '#F3E8FF' }} />,
                            label: 'Log Out',
                        },
                    ]} />
            </Sider>
            <Layout
                style={{
                    marginLeft: current === '2' ? 270 : 250,
                    ...(current === '2' && { marginRight: 20 })
                }}
                
            >
                {current !== '1' && current !== '3' &&
                    <Header
                        style={{
                            padding: 0,
                            height: 80,
                            display: 'flex',
                            alignItems: 'center',
                            background: colorBgContainer,
                            boxShadow: '3px 3.5px 8.5px -1px #ddddddb1'
                        }}
                    >
                        <div className="flex gap-6 items-center pl-8 bg-white h-16">
                            <img src={Profil2} alt="profil" className='w-12 h-auto rounded-full cursor-pointer' onClick={() => navigate('/dashboard')} />
                            <div className="flex gap-4 items-center">
                                <p className="font-bold text-lg text-dark-purple">Layla Al-Zarhouni</p>
                                <p className="font-light text-md text-light-purple">Software Engineer</p>
                            </div>
                        </div>
                    </Header>
                }

                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {current === '1' && <div><UserProfile /></div>}
                        {current === '2' && <ArticlePost />}
                        {current === '3' && <div><ChatBot /></div>}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        height: '25px',
                        display : 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1D1E40'
                    }}
                >
                    ZenVibe ©{new Date().getFullYear()} Created by Amran_L'Bakali
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;