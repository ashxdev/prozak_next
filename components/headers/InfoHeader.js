const Header = () => (
  <div className="ampstart-headerbar flex justify-between items-center">
    <h4>Prozak - AMP version</h4>
    {/*<h3>Search here</h3>
     <i className="main-color material-icons land-see-hero-caption">search</i> */}
    <style jsx>{`
      .ampstart-headerbar {
        color: rgb(250, 250, 250);
        background-color: rgb(252, 93, 10);
        top: 0;
        left: 0;
        right: 0;
        padding-left: 1rem;
        padding-right: 2.5rem;
        height: 28px;
      }
    `}</style>
  </div>
)

export default Header
