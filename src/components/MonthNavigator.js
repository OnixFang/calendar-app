import './MonthNavigator.css';

const MonthNavigator = ({ currentDate }) => {
  return (
    <div className="month-navigator">
      <button className="btn">Prev</button>
      <h1>
        {currentDate.toLocaleDateString('en-us', { month: 'long' })}{' '}
        {currentDate.getFullYear()}
      </h1>
      <button className="btn">Next</button>
    </div>
  );
};

export default MonthNavigator;
