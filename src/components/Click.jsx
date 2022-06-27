
const Click = ( {clickN, randomColorN} ) => {
    
    return (
        <button onClick={clickN} className="click" >
            <i style={{ color: randomColorN }} className="fa-solid fa-arrow-rotate-left">
            </i>
        </button>

    );
};

export default Click;