import Header from "../headers/Header"

const layoutStyle = {
  margin: 30,
  padding: 30,
  border: "2px solid #DDD",
}

const withPostLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default withPostLayout
