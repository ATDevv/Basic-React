import { Button, Drawer } from 'antd'

const ViewDetailUer = (props) => {
    const {
        detailData, setDetailData, openDetail, setOpenDetail
    } = props

    const closeDetails = () => {
        setDetailData(null)
        setOpenDetail(false)
    }

    return (
        <Drawer onClose={closeDetails} open={openDetail} title="Chi tiết Users">
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
                </>
                :
                <p>Kh có dữ liệu</p>
            }
        </Drawer>
    )
};

export default ViewDetailUer
