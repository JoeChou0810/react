function MyContent(props) {
  return (
    <main role="main">
      <div className="container  bg-info">{props.children}</div>
    </main>
  )
}

export default MyContent
