import {useLocation} from "react-router-dom";
import {Error404_NoUserLoggedIn} from "../error-pages/Error404_NoUserLoggedIn";
import React, {useEffect, useState} from 'react';
import {ClearOutlined, PlusOutlined, SendOutlined} from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Select,
    Descriptions,
    Upload,
    Breadcrumb,
    Layout,
    Menu,
} from 'antd';
import {followersData, followersCOL, postCOL, postsData} from "../../data/tabelsData";
import {ToastContainer} from "react-toastify";
import {mainMenuItems} from "../../components/menuItem";
import {followersView, newPostView, postsView, profileView} from "../../data/titlesData";

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;



export const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const [viewKey, setViewKey] = useState("1.1")
    const location = useLocation();
    const state = location.state;
    const viewSwitch = (e) => {
        setViewKey(e.key)
    };

    const available = (
        state !== null
    );

    let Id, Email, Password = 0

    if(available){
        Id = state.ID;
        Email = state.Email;
        Password = state.Password;

    }

    const profileContant =
        [
            <Descriptions.Item span={2} contentStyle={{fontSize:'20px'}} labelStyle={{fontSize:'20px', fontWeight:"bolder"}} label="UserName">{}</Descriptions.Item>,
            <Descriptions.Item span={2} contentStyle={{fontSize:'20px'}} labelStyle={{fontSize:'20px', fontWeight:"bolder"}} label="Telephone">1810000000</Descriptions.Item>,
            <Descriptions.Item span={2} contentStyle={{fontSize:'20px'}} labelStyle={{fontSize:'20px', fontWeight:"bolder"}} label="Email">abood@gmail.com</Descriptions.Item>,
            <Descriptions.Item span={2} contentStyle={{fontSize:'20px'}} labelStyle={{fontSize:'20px', fontWeight:"bolder"}} label="Remark">empty</Descriptions.Item>
        ]



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return(
        (available)?(
            <Layout
                style={{
                    minHeight: '100vh',
                }}

            >
                <div>
                    <ToastContainer
                    />
                </div>
                <Sider theme={"light"}
                       style={{
                           backgroundColor: '#e9eee8',
                       }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu
                        defaultSelectedKeys={['1.1']}
                        mode="inline" items={mainMenuItems}
                        onClick={viewSwitch}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-sub-header-background"
                    />
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>{Email}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            {(viewKey==="1.1")?(
                                <>
                                    {followersView}
                                    <Table pagination={{
                                        hideOnSinglePage:true
                                    }} loading={loading} columns={followersCOL} dataSource={followersData} scroll={
                                        {
                                            y:450
                                        }} />
                                </>
                            ):(
                                (viewKey==="2.1")?(<>
                                    {postsView}
                                    <Table
                                        style={{
                                            overflow: 'hidden'
                                        }}
                                        pagination={{
                                            hideOnSinglePage:true
                                        }} loading={loading} columns={postCOL} dataSource={postsData} scroll={
                                        {
                                            y:450
                                        }} />
                                </>):(viewKey==="2.2")?(
                                    <>
                                        {newPostView}
                                        <Form
                                            labelCol={{
                                                span: 4,
                                            }}
                                            wrapperCol={{
                                                span: 14,
                                            }}
                                            layout="horizontal"
                                            // onValuesChange={onFormLayoutChange}
                                            disabled={loading}
                                        >
                                            <Form.Item label="Post Title" >
                                                <Input size={"large"} />
                                            </Form.Item>
                                            <Form.Item label="Post's Tags">
                                                <Select mode={"multiple"}placement={"bottomLeft"}>
                                                    <Select.Option value="demo1">Demo 1</Select.Option>
                                                    <Select.Option value="demo2">Demo 2</Select.Option>
                                                    <Select.Option value="demo3">Demo 3</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item label="Post's Body">
                                                <TextArea rows={4} allowClear={true} size={"large"} showCount={true}/>
                                            </Form.Item>
                                            <Form.Item label="Upload" valuePropName="fileList">
                                                <Upload action="/upload.do" listType="picture-card">
                                                    <div>
                                                        <PlusOutlined />
                                                        <div
                                                            style={{
                                                                marginTop: 8,
                                                            }}
                                                        >
                                                            Upload Photo
                                                        </div>
                                                    </div>
                                                </Upload>
                                            </Form.Item>
                                            <Form.Item>
                                                <Space size={"large"} style={{float:"right"}}>
                                                    <Button type={"primary"} icon={<SendOutlined />}>Post</Button>
                                                    <Button type={"ghost"} icon={<ClearOutlined />}>Clear all</Button>
                                                </Space>
                                            </Form.Item>
                                        </Form>
                                    </>
                                ):(

                                    <>
                                        {profileView}
                                        <Descriptions bordered>
                                            {profileContant.map(item=> item)}
                                        </Descriptions>
                                    </>
                                )

                            )}

                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        designed by Abod_H
                    </Footer>
                </Layout>
            </Layout>

        ):(<Error404_NoUserLoggedIn />)
    )
}