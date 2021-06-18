const Results = ({ zone, isCorrectFormat }) => {
    if (zone && isCorrectFormat) {
        return (
            <div className='zone-container'>
                <h2 className='zone-title'>Zone</h2>
                <p className='zone-data'>{zone}</p>
            </div>
        );
    } else {
        return null;
    }
   
}

export default Results;