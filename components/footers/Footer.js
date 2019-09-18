import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
}

const Footer = () => (
  <footer className="bg-squares">
    {/* <h3 className="widget-title">Про нас</h3> */}
    <div>
      <p>Prozak - Інформаційний антидепресант</p>
      <p>+38 095 308 8778</p>
      <a href="mailto:mail.prozak@gmail.com">mail.prozak@gmail.com</a>
      <div class="clear"></div>
    </div>
    <Link href="/">
      <a style={linkStyle}>Copyrights</a>
    </Link>
    <style jsx>
      {`
        .widget-title {
          font-family: 'Oswald';
          font-size: 15px;
          color: #fff;
          font-weight: normal;
          text-transform: uppercase;
          margin: 0 0 20px 0;
        }
        .bg-squares {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIW…PlXVlTQPww10AOpX3JKVLqDm6YHEo/yHHGBTkGnn3nPwCBRyqAci2O5wAAAABJRU5ErkJggg==);
        }
      `}
    </style>
  </footer>
)

export default Footer
