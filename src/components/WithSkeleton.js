import Item from "./Item/Item";
import Skeleton from "./skeleton/skeleton";

const SKELETON_CNT = 6;
const SKELETON_DATA = Array.from(Array(SKELETON_CNT).keys());

const WithSkeleton = (props) => {
  return (
    <div>
      <h1>With Skeleton</h1>
      {props.isLoading
        ? SKELETON_DATA.map((idx) => <Skeleton key={idx} />)
        : props.data.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
};

export default WithSkeleton;
