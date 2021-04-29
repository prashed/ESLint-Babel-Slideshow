import * as React from "react";

type Props = {
  style?: React.CSSProperties;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  progress: number;
};

/**
 *
 * @param props
 * @return {XML}
 */
const ProgressBarComponent = ({
  style,
  onClick,
  onMouseMove,
  onMouseLeave,
  progress
}: Props) => {
  return (
    <div
      style={style}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          backgroundColor: "#007bb6",
          height: "100%",
          width: `${progress}%`
        }}
      />
    </div>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) =>
  prevProps.progress === nextProps.progress;

export default React.memo(ProgressBarComponent, areEqual);
