import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

	font-size: 16px;
	--bg-color: #fefefe;
	--header-color: #707070;
	--theme-color: #079fc5;
	--hover-color: #038bad;
}

body {
	margin: 0;
	padding: 1rem;	
	font-family: 'Muli', sans-serif;
	background: var(--bg-color);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: center;
}

p,
	a,
	span {
		color: var(--header-color);
	}
`;

export default GlobalStyle;
