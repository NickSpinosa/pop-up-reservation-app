import '../index.css';

const event= () => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <h3>{props.location + " " + props.date}</h3>
      </div>
      <p>{props.description}</p>
      <h4>{"--" + props.restaurant}</h4>
    </div>
  );
}

export default event;