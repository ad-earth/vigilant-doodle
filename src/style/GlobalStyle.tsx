import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, input,select,textarea {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
}

*::before, *::after {
    margin: 0; 
    padding: 0;
  }
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
img {
    border: 0;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyle;
