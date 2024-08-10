import AddServiceCard from "../../../Components/AddServiceCard/AddServiceCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
             items.map(item=> <AddServiceCard key={item._id} item={item}></AddServiceCard>)  
           }
        </div>
    );
    
};
OrderTab.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired, // Assuming _id is a string
        // Add other properties of item here if needed
    })).isRequired
};

export default OrderTab;