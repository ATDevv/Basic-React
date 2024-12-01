import { Button, Drawer, Form, Input } from 'antd'
import { useState } from 'react'

const ViewDetailUer = (props) => {
    const {
        detailData, setDetailData, openDetail, setOpenDetail
    } = props

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const closeDetails = () => {
        setDetailData(null)
        setOpenDetail(false)
    }

    const handleOnChange = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setPreview(null)
            setSelectedFile(null)
            return
        }

        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUpdateUserChange = () => {
        console.log('>>> Check :', selectedFile)
    }

    return (
        <Drawer
            onClose={closeDetails}
            open={openDetail}
            title="Details User"
            width={'25vw'}
        >
            {
                detailData ?
                    <>
                        <p>User: {detailData._id}</p>
                        <br />
                        <p>FullName : {detailData.fullName}</p>
                        <br />
                        <p>Email: {detailData.email}</p>
                        <br />
                        <p>Phone: {detailData.phone}</p>
                        <br />
                        <p>Avatar : </p>
                        <div style={{
                            marginTop: '10px',
                            height: '100px', width: '100px',
                            border: '1px solid black'
                        }}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src={`${import.meta.env.VITE_SOME_KEY}/images/avatar/${detailData.avatar}`}
                                alt=""
                            />
                        </div>
                        <div>
                            <label htmlFor='update-ava' style={{
                                display: 'block',
                                marginTop: '15px',
                                padding: '5px 10px',
                                background: 'yellow',
                                borderRadius: '7px',
                                border: '1px solid black',
                                cursor: 'pointer',
                                width: 'fit-content'
                            }}>
                                Upload Avatar
                            </label>
                            <input
                                type="file" id='update-ava' hidden
                                onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                        {
                            selectedFile &&
                            <div style={{
                                marginTop: '10px',
                                height: '100px', width: '100px',
                                border: '1px solid black'
                            }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    src={preview}
                                    alt=""
                                />
                                <div>
                                    <button style={{
                                        display: 'block',
                                        marginTop: '10px',
                                        padding: '5px 10px',
                                        background: '#2ed4ff',
                                        borderRadius: '7px',
                                        border: '1px solid black',
                                        cursor: 'pointer',
                                        width: 'fit-content'
                                    }}
                                        onClick={handleUpdateUserChange}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        }
                    </>
                    :
                    <p>Empty Data</p>
            }
        </Drawer >
    )
};

export default ViewDetailUer
