const Shape = ({ borders, size }) => {
  const { width, height } = size;
  const { TL, TR, BR, BL } = borders;

  return (
    <main className="shape--container">
      <div
        className="shape"
        style={{
          width: parseInt(width),
          height: parseInt(height),
          borderTopLeftRadius: parseInt(TL),
          borderTopRightRadius: parseInt(TR),
          borderBottomRightRadius: parseInt(BR),
          borderBottomLeftRadius: parseInt(BL),
        }}
      ></div>
    </main>
  );
};

export default Shape;
