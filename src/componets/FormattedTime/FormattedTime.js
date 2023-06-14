const FormattedTime = (props) => (
  <div>
    <span>{('0' + (Math.floor(props.time / 3600000) % 24)).slice(-2)}:</span>
    <span>{('0' + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
    <span>{('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
    <span>{('00' + (props.time % 1000)).slice(-3)}</span>
  </div>
);

export default FormattedTime;
