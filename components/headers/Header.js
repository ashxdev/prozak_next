const Header = () => (
  <div className="ampstart-headerbar sticky flex primary-color justify-between items-center">
    <h3>Prozak</h3>
    <button
      on="tap:sidebar.toggle"
      aria-label="open sidebar"
      className="ampstart-navbar-trigger md-hide lg-hide pr2 "
    >
      ☰
    </button>
    <style jsx>{`
      .ampstart-headerbar {
        color: rgb(250, 250, 250);
        z-index: 11;
        top: 0;
        left: 0;
        right: 0;
        padding-left: 1rem;
        padding-right: 2.5rem;
      }
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
      }
    `}</style>
  </div>
)

export default Header
