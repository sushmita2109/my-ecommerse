import "./Jumbotron.css";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">SneakerStore</h1>
        <p className="lead">This is a brand new sneaker store.</p>

        <a className="btn" href="#" role="button">
          Shop more
        </a>
      </div>
    </div>
  );
};
