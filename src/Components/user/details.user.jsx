import { Button, Drawer, Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem';

const ViewDetailUer = (props) => {
    const {
        detailData, setDetailData, openDetail, setOpenDetail
    } = props

    const closeDetails = () => {
        setDetailData(null)
        setOpenDetail(false)
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
                        height: '100', width: '150',
                        border: '1px solid black'
                    }}>
                        <img style={{width: '100%', height: '100%', objectFit: 'contain'}}
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
                        <input type="file" name="update-ava" id="update-ava" hidden/>
                    </div>
                </>
                :
                <p>Empty Data</p>
            }
        </Drawer>
    )
};

export default ViewDetailUer
