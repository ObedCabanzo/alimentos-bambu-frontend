export const HighlightText = ({
  text,
  indices,
  color,
}: {
  text: string;
  indices: number[];
  color: string;
}) => {
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, index) => {
        const isHighlighted = indices.includes(index);
        return (
          <span
            key={index}
            style={{
              color: isHighlighted ? color : "inherit",
              fontWeight: isHighlighted ? "bold" : "normal",
            }}
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
};
