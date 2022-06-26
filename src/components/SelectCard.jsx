
const SelectCard = ({img, text}) => {
    return (
        <div>
          
            <div className="relative ">
                            <img className=" w-full h-full object-cover" src={img} alt="" />
                            <div className='b-gray-900/30 absolute  top-0  left-0 w-full h-full'>
                                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>{text}</p>
                            </div>
            </div>
        </div>
    );
};

export default SelectCard;