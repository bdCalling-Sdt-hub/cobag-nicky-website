'use client'
import React, { useEffect, useState } from 'react'
import { Table, Tag, Button, Modal, Input, message } from 'antd'
import { FaArrowLeft } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import i18n from '@/app/utils/i18'
import { useCompleteOrderMutation, useGetAllSenderOrderQuery, useGetAllTravellerOrderQuery } from '@/app/redux/Features/order/order'
import baseUrl from '@/app/redux/api/baseUrl'
import toast from 'react-hot-toast'
import useUser from '@/hooks/useUser'

const Page = () => {
    const { t } = i18n
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


    const user = useUser();

    console.log(user?.isTraveler);
    const { data: getAllSenderOrder } = useGetAllSenderOrderQuery();
    const senderOrder = getAllSenderOrder?.data;

    const { data: getAllTravellerOrder } = useGetAllTravellerOrderQuery();
    const travellerOrder = getAllTravellerOrder?.data;



    const [data, setData] = useState([])
    const [selectedStatus, setSelectedStatus] = useState('') // For tracking selected filter
    const [isModalVisible, setIsModalVisible] = useState(false) // Modal visibility state
    const [secretCode, setSecretCode] = useState('') // To store the entered secret code

    useEffect(() => {
        setData(user?.isTraveler === 'true' ? senderOrder : travellerOrder)
    }, [user?.isTraveler === 'true' ? senderOrder : travellerOrder])


    console.log(senderOrder);

    const handleFilterChange = (e) => {
        const status = e.target.value
        setSelectedStatus(status)

        if (status === '') {
            setData(user?.isTraveler === 'true' ? senderOrder : travellerOrder) // Reset to all data if "All" is selected
        } else {
            const filteredData = user?.isTraveler === 'true' ? senderOrder.filter((item) => item.orderStatus === status) : travellerOrder.filter((item) => item.orderStatus === status)
            setData(filteredData)
        }
    }

    // Columns for the table
    const columns = [
        {
            title: 'SL',
            dataIndex: 'id',
            key: 'id',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
            render: (text, record) => (
                <div className="flex items-center space-x-2">
                    <img
                        src={baseUrl + user?.isTraveler === 'true' ? record?.travellerId?.profileImage : record?.isSender?.profileImage || 'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='}
                        alt="User"
                        style={{ width: '50px', borderRadius: '50%' }}
                    />
                    <span>{user?.isTraveler === 'true' ? record?.travellerId?.firstName : record?.isSender?.firstName}</span>
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
            render: (text, record) => (
                <p>
                    {record?.sellKgId?.totalSpace}
                </p>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => {
                let color;
                const orderStatus = record?.orderStatus; // Get the status from the record

                // Determine the color based on the orderStatus
                switch (orderStatus) {
                    case 'in_progress':
                        color = 'yellow';
                        break;
                    case 'completed':
                        color = 'blue';
                        break;
                    default:
                        color = 'default'; // You can set a default color in case it's something unexpected
                        break;
                }

                // Return the Tag with the correct color
                return <Tag color={color}>{orderStatus}</Tag>;
            }

        },
        {
            title: 'Time',
            dataIndex: 'deliveryTime',
            key: 'deliveryTime',
            render: (text, record) => (
                <p>
                    {record?.sellKgId?.departureTime}
                </p>
            ),
        },
        {
            title: 'Pickup Location',
            dataIndex: 'drop',
            key: 'drop',
            render: (text, record) => (
                <p>
                    {record?.sellKgId?.departureCity}
                </p>
            )
        },
        {
            title: 'Delivery Date',
            dataIndex: 'date',
            key: 'date',
            render: (text, record) => (
                <p>
                    {record?.sellKgId?.departureDate}
                </p>
            )
        },
        {
            title: 'Delivery Code',
            dataIndex: 'deliveryCode',
            key: 'deliveryCode',
            render: (text, record) => (
                <p>
                    {user?.isTraveler !== 'true' ? record?.orderSecret : '-'}
                </p>
            )
        }
        ,
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
                        {t('delivery')}
                    </button>
                </div>
            ),
        },
    ]

    const handleApprove = () => {
        // Show modal when "Approve" button is clicked 
        setIsModalVisible(true)
    }

    const [orderComplete] = useCompleteOrderMutation()

    const handleModalOk = async () => {
        // Validate secret code

        if (!secretCode) {
            // console.log('Please enter a secret code');
            return toast.error('Please enter a secret code')
        }

        const formData = {
            orderSecret: secretCode
        }

        try {

            const res = await orderComplete(formData).unwrap()

            console.log(res);
            if (res?.statusCode === 200) {

                toast.success('Order Delivered successfully !!')
                setIsModalVisible(false)
                setSecretCode('')

            }



        } catch (error) {

        }



    }

    const handleModalCancel = () => {
        setIsModalVisible(false) // Close the modal
    }

    return (
        <div className="lg:p-10 p-5 bg-white rounded-lg">
            <div className="flex items-center justify-between gap-5">
                <h1 className="text-2xl font-bold mb-4 text-primary">{t('runningOrder')}</h1>
                <select
                    value={selectedStatus}
                    onChange={handleFilterChange}
                    className="w-48 py-3 px-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All</option>
                    <option value="in_progress">In progressing</option>
                    <option value="completed">Completed</option>
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
