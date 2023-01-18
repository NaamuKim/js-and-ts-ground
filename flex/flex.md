# flex 박스를 이용하면 반응형 디자인을 할 수 있다.

## flex1의 의미

flex: 1의 의미
flex-grow 속성과 flex-shrink 속성, flex-basis 속성을 축약해서 flex 속성으로 표현할 때 flex: 1 속성은 flex: 1 1 0 속성을 의미한다. 즉, flex-grow 속성의 값이 '1'이고 flex-shrink 속성의 값이 '1'이기 때문에 flex container의 크기에 따라 flex item의 크기도 커지거나 작아진다는 의미다.

flex 속성의 값으로 정수 하나만 선언하면 선언한 값은 flex-grow 속성의 값이 된다. 나머지는 기본값인 flex-shrink: 1 속성과 flex-basis: 0 속성이 적용된다. 다시 말해 flex 속성에 한 개의 정숫값만 있으면 이것은 flex-grow 속성의 값만 지정하는 단축 속성이다. 즉, flex: 2는 flex: 2 1 0을, flex: 3은 flex: 3 1 0을 나타내다.
