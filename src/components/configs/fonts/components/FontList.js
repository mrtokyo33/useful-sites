function FontList({ fonts, onRemove, onSelect }) {
  return (
    <div>
      {fonts.map((font) => (
        <div key={font.id} style={{ fontFamily: font.family }}>
          <span>{font.name}</span>
          {!font.isDefault && (
            <button onClick={() => onRemove(font.id)}>Remove</button>
          )}
          <button onClick={() => onSelect(font)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default FontList;
