import "./skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div>
        <div className="skeleton-img" />
      </div>
      <div className="skeleton-info">
        <div className="skeleton-name" />
        <div className="skeleton-email" />
      </div>
    </div>
  );
};

export default Skeleton;
