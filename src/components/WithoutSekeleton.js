import Item from "./Item/Item";

const WithoutSekelton = (props) => {
  return (
    <div>
      <h1>Without Sekelton</h1>
      {!props.isLoading &&
        props.data.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
};

export default WithoutSekelton;
