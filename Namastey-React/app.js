const headingOne = React.createElement('h1', { key:'headingOne', id:'headingOne' }, 'Heading 1');
const headingTwo = React.createElement('h1', { key:'headingTwo', id:'headingTwo' }, 'Heading 2');
const container = React.createElement("div", { key:'container', id:'container' }, [headingOne, headingTwo]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
