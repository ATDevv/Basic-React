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
        <Drawer onClose={closeDetails} open={openDetail} title="Details User">
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
                <p>Empty Data</p>
            }
        </Drawer>
    )
};

export default ViewDetailUer
