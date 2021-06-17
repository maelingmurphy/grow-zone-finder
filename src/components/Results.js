const Results = ({ zone, isCorrectFormat }) => {
    if (zone && isCorrectFormat) {
        return (
            <div className='zone-container'>
                <h2 className='zone-title'>Your Zone: <span>{zone}</span></h2>
            </div>
        );
    } else {
        return null;
    }
   
}

export default Results;