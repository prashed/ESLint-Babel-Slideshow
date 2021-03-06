import * as React from "react";

type Props = {
  styles: {
    IMAGE: React.CSSProperties;
    PREV_ON_CONTENT: React.CSSProperties;
    NEXT_ON_CONTENT: React.CSSProperties;
  };
  src: string;
  onClickPrevButton: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickNextButton: (e: React.MouseEvent<HTMLDivElement>) => void;
  timestamp: number;
  imgClassName: string;
};

/**
 *
 * @param props
 * @return {XML}
 */
const ViewerComponent = ({
  styles,
  src,
  onClickPrevButton,
  onClickNextButton,
  timestamp,
  imgClassName
}: Props) => {
  let _src = src;
  if (timestamp) {
    _src += `?${timestamp}`;
  }

  return (
    <div style={styles.IMAGE}>
      <img className={imgClassName} src={_src} style={{ width: "100%" }} />
      <div onClick={onClickPrevButton} style={styles.PREV_ON_CONTENT} />
      <div onClick={onClickNextButton} style={styles.NEXT_ON_CONTENT} />
    </div>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.imgClassName === nextProps.imgClassName &&
    prevProps.src === nextProps.src &&
    prevProps.timestamp === nextProps.timestamp
  );
};

export default React.memo(ViewerComponent, areEqual);
