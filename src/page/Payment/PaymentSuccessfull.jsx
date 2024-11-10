import { useParams } from "react-router-dom";



const PaymentSuccessfull = () => {

const {tranId}=useParams();
    return (
        <div className="tet-3xl rounded border-cyan-100 ">
            <h1>payment success: {tranId} </h1>
        </div>
    );
};

export default PaymentSuccessfull;