import React, { useCallback, useEffect, useRef, useState } from 'react';

const Canvas = () => {
  const [pressedKey, setPressedKey] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestAnimationRef = useRef<number | null>(null);

  const [myPosition, setMyPosition] = useState({ x: 0, y: 0 });
  const myPositionRef = useRef({ x: 0, y: 0 });
  const render = useCallback(() => {
    // 캐릭터를 그림 그려주는애
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    // 이미지가 상태를 기반으로 움직이게 하는 게 가능한가?
    const 사람 = new Image();
    사람.src = '';
    context?.drawImage(사람, myPosition.x, myPosition.y);
    // 바뀌게 만들어 주는 부분이 없을 수 있나?
  }, [canvasRef, myPosition]);
  // 렌더함수에서
  // 이벤트 바탕으로 캐릭터 좌표 계산
  // 그린다.
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      setPressedKey(e.keyCode);
    });
    window.addEventListener('keyup', () => setPressedKey(null));
    requestAnimationRef.current = requestAnimationFrame(render);
    return () => {
      if (requestAnimationRef.current) {
        cancelAnimationFrame(requestAnimationRef.current);
      }
    };
  });

  return <canvas width={'100%'} height={'100%'} ref={canvasRef}></canvas>;
};

export default Canvas;
