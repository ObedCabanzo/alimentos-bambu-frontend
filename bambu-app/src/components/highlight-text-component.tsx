export const HighlightText = ({
  text,
  indices,
  color,
  bold
}: {
  text: string;
  indices: number[];
  color: string;
  bold?: boolean;
}) => {
  const words = text.split(" ");

  return (
    <p className={bold ? "font-bold" : ""}>
      {words.map((word, index) => {
        const isHighlighted = indices.includes(index);
        return (
          <span
            key={index}
            style={{
              color: isHighlighted ? color : "inherit",
              fontWeight: isHighlighted || bold ? "bold" : "normal",
            }}
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
};
