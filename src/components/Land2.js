import React from 'react';
import Land2Props from './Land2Props';
//icon
import { AiFillCheckCircle } from "react-icons/ai";
import {MdDeliveryDining} from "react-icons/md"
import {RiRefund2Fill} from "react-icons/ri"
import {MdOutlinePayment} from "react-icons/md"
const Land2 = () => {
    return (
        <div className='md:grid-cols-4 gap-5 md:gap-x-28 mt-5 grid grid-cols-2'>
            <Land2Props icon={<AiFillCheckCircle />} header="Quality" text="high quality of products"/>
            <Land2Props icon={<MdDeliveryDining />} header="Delivery" text="We live to save time"/>
            <Land2Props icon={<RiRefund2Fill />} header="Refund" text="we're return your money"/>
            <Land2Props icon={<MdOutlinePayment />} header="Pay" text="pay with master card"/>
        </div>
    );
};

export default Land2;