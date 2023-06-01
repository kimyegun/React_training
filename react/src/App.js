
import './App.css';
function Header(props) {
  console.log('props', props.title)
  return(
  
      <header>
        <h1><a href="/" onClick={event=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
      </header>
  )
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.title}>
      <a title={t.title} href={'/read/'+t.title} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.title);
      }}>{t.title}</a></li>);
  }
  return (
<nav>
  <ol>
      {lis}
    </ol>
</nav>
  )
}

function Article(props) {
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const mode = 'READ';
  const topics = [
    {id:1, title:'hmtl', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]
  let content =null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode ==='READ') {
    content = <Article title="Welcome" body="Hello, Read"></Article>
  }
  return (
   <div>
    <Header title="WEB" onChangeMode={()=>{
      alert('Header');
    }}></Header>
    <Nav topics={topics} onChangeMode={(title)=>{
      alert(title);
    }}></Nav>
    {content}
   </div>
  );
}

export default App;
