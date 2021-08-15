import { useSelector } from 'react-redux';

const DayDetails = () => {
  const selectedDay = useSelector((store) => store.selectedDay);

  if (selectedDay) {
    return <div>Day details</div>;
  }
  return <div>No day selected</div>;
};

export default DayDetails;
