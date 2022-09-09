import {Button, Space, Tag} from "antd";
import {
    CopyOutlined,
    DeleteOutlined,
    FieldTimeOutlined,
    FullscreenOutlined,
    UserDeleteOutlined
} from "@ant-design/icons";
import React from "react";
import copy from 'copy-to-clipboard';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const copyEmail = (email) => {
    copy(email);
    return toast.info("Email Copied !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const followersData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        email: 'johnBrown234@gmail.com',
        gender: 'male',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        email: 'jimGreen234@gmail.com',
        gender: 'female',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        email: 'joeBlack856@gmail.com',
        gender: 'male',
    },
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        email: 'johnBrown234@gmail.com',
        gender: 'male',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        email: 'jimGreen234@gmail.com',
        gender: 'female',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        email: 'joeBlack856@gmail.com',
        gender: 'male',
    },
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        email: 'johnBrown234@gmail.com',
        gender: 'male',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        email: 'jimGreen234@gmail.com',
        gender: 'female',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        email: 'joeBlack856@gmail.com',
        gender: 'male',
},
];


export const followersCOL = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: ( email ) => (
    <>
        {

            <div key={email}>
                {email}
                <Button style={{float:"right"}}
                        icon={<CopyOutlined />}
                        onClick={() => {return copyEmail(email)}}
                />
            </div>

        }
    </>
),
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render:  ( gender ) => (
            <>
                {

                    <Tag color={(gender==="male")?("blue"):("pink")} key={gender}>
                        {gender.toUpperCase()}
                    </Tag>
                }
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="small">
                <Button icon={<FieldTimeOutlined />} type="dashed" >
                    Ban
                </Button >

                <Button type="dashed" icon={<UserDeleteOutlined />} danger>
                    Kick
                </Button>
            </Space>
        ),
    },
];


export const postsData = [
    {
        key: '1',
        title: 'title',
        description: 'description',
        postDate: Date.now(),
        tags: 'male',
    }
    ]

export const postCOL = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <h5>{text}</h5>,
    },
    {
        title: 'Post Date',
        dataIndex: 'postDate',
        key: 'postDate',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render:  ( tags ) => (
            <Space size="small">
                {

                    <Tag color={(tags==="male")?("blue"):("pink")} key={tags}>
                        {tags.toUpperCase()}
                    </Tag>
                }
            </Space>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="small">
                <Button icon={<FullscreenOutlined />} type="dashed" >
                    View & Edit
                </Button >

                <Button type="dashed" icon={<DeleteOutlined />} danger>
                    Delete
                </Button>
            </Space>
        ),
    },
]
// export default data