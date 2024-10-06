import { useParams } from "react-router-dom";


const PaymentSuccessfull = () => {
const {tranId}=useParams();
    return (
        <div>
            <h1>payment success {tranId} </h1>
        </div>
    );
};

export default PaymentSuccessfull;