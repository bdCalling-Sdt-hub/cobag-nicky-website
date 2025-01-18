'use client'
import React, { useState } from 'react'
import { Table, Tag, Button, Modal, Input, message } from 'antd'
import { FaArrowLeft } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'

const Page = () => {
    // Sample data for the table
    const initialData = [
        {
            id: 1,
            userName: 'John Doe',
            userImage:
                'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png',
            packagePhoto:
                'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png',
            weight: 5.5,
            status: 'In_progressing',
            deliveryCode: 'DEL12345',
            deliveryTime: '10:30 AM',
            drop: 'New York, USA',
            date: '2025-01-14',
            brief: 'Fragile package, handle with care.',
        },
        {
            id: 2,
            userName: 'Nerob',
            userImage:
                'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png',
            packagePhoto:
                'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png',
            weight: 10.2,
            status: 'Delivered',
            deliveryCode: 'DEL67890',
            deliveryTime: '2:15 PM',
            drop: 'Los Angeles, USA',
            date: '2025-01-13',
            brief: 'Contains electronic items.',
        },
        {
            id: 3,
            userName: 'Partner',
            userImage:
                'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png',
            packagePhoto:
                'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png',
            weight: 2.8,
            status: 'Failed',
            deliveryCode: 'DEL54321',
            deliveryTime: '11:00 AM',
            drop: 'Chicago, USA',
            date: '2025-01-12',
            brief: 'Urgent delivery, return if not delivered.',
        },
    ]

    const [data, setData] = useState(initialData)
    const [selectedStatus, setSelectedStatus] = useState('') // For tracking selected filter
    const [isModalVisible, setIsModalVisible] = useState(false) // Modal visibility state
    const [secretCode, setSecretCode] = useState('') // To store the entered secret code

    const handleFilterChange = (e) => {
        const status = e.target.value
        setSelectedStatus(status)

        if (status === '') {
            setData(initialData) // Reset to all data if "All" is selected
        } else {
            const filteredData = initialData.filter((item) => item.status === status)
            setData(filteredData)
        }
    }

    // Columns for the table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
            render: (text, record) => (
                <div className="flex items-center space-x-2">
                    <img
                        src={record.userImage}
                        alt="User"
                        style={{ width: '50px', borderRadius: '50%' }}
                    />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: 'Package Photo',
            dataIndex: 'packagePhoto',
            key: 'packagePhoto',
            render: (url) => (
                <img
                    src={url}
                    alt="Package"
                    style={{ width: '50px', borderRadius: '5px' }}
                />
            ),
        },
        {
            title: 'Weight (kg)',
            dataIndex: 'weight',
            key: 'weight',
            render: (weight) => `${weight} kg`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color
                switch (status) {
                    case 'In_progressing':
                        color = 'blue'
                        break
                    case 'Delivered':
                        color = 'green'
                        break
                    case 'Failed':
                        color = 'red'
                        break
                    default:
                        color = 'gray'
                }
                return <Tag color={color}>{status}</Tag>
            },
        },
        {
            title: 'Delivery Code',
            dataIndex: 'deliveryCode',
            key: 'deliveryCode',
        },
        {
            title: 'Time',
            dataIndex: 'deliveryTime',
            key: 'deliveryTime',
        },
        {
            title: 'The Drop',
            dataIndex: 'drop',
            key: 'drop',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Brief',
            dataIndex: 'brief',
            key: 'brief',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div>
                    {/* Approve Button */}
                    <button
                        type="primary"
                        className="mr-2 bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => handleApprove(record)}
                    >
                        Delivary
                    </button>
                </div>
            ),
        },
    ]

    const handleApprove = (record) => {
        // Show modal when "Approve" button is clicked
        setIsModalVisible(true)
    }

    const handleModalOk = () => {
        // Validate secret code
        if (secretCode === '12345') {
            message.success('Package approved successfully!')
            setIsModalVisible(false) // Close the modal
        } else {
            message.error('Invalid secret code!')
        }
    }

    const handleModalCancel = () => {
        setIsModalVisible(false) // Close the modal
    }

    return (
        <div className="lg:p-10 p-5 bg-white rounded-lg">
            <div className="flex items-center justify-between gap-5">
                <h1 className="text-2xl font-bold mb-4 text-primary">Running Order</h1>
                <select
                    value={selectedStatus}
                    onChange={handleFilterChange}
                    className="w-48 py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All</option>
                    <option value="In_progressing">In_progressing</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Failed">Failed</option>
                </select>
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 5,
                    showSizeChanger: true,
                    position: ['bottomRight'],
                    marginTop: '50px',
                }}
                rowKey="id"
                bordered
                style={{
                    overflow: 'hidden',
                    marginTop: '20px',
                }}
                scroll={{ x: 'max-content' }}
            />

            {/* Modal for Approving Package */}
            <Modal 
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <div>
                    <label>Enter Secret Code:</label>
                    <input
                        className='w-full py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary mt-2'
                        type="text"
                        value={secretCode}
                        onChange={(e) => setSecretCode(e.target.value)}
                        placeholder="Enter secret code"
                    />
                </div>
            </Modal>
        </div>
    )
}

export default Page
