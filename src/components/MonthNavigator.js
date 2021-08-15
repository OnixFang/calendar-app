import { useSelector, useDispatch } from 'react-redux';
import { incrementMonth, decrementMonth } from '../store/currentDate/actions';
import './MonthNavigator.css';

const MonthNavigator = () => {
  const currentDate = useSelector((store) => store.currentDate);
  const dispatch = useDispatch();

  return (
    <div className="month-navigator">
      <button onClick={() => dispatch(decrementMonth())} className="btn waves-effect">
        Prev
      </button>
      <h1>
        {currentDate.toLocaleDateString('en-us', { month: 'long' })}{' '}
        {currentDate.getFullYear()}
      </h1>
      <button onClick={() => dispatch(incrementMonth())} className="btn waves-effect">
        Next
      </button>
    </div>
  );
};

export default MonthNavigator;
