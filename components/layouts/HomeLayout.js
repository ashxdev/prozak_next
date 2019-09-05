import Header from "../headers/Header"

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
}

const withHomeLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <button className="ui icon button">
        <i className="cloud icon"></i>
      </button>
      <Header />
      <Page />
    </div>
  )
}

export default withHomeLayout
