import Header from '../headers/Header'
import InfoHeader from '../headers/InfoHeader'
import Footer from '../footers/Footer'
import Sidebar from '../sidebar/sidebar'

const Layout = props => {
  return (
    <div className="site-wrapper">
      <Sidebar menu={props.menu} />
      <InfoHeader />
      <Header />
      <div className="body-container">{props.children}</div>
      <Footer />
      <style jsx global>{`
        .primary {
          color: #fc7100;
        }

        .white {
          color: #ffffff;
        }
        html {
          font-family: sans-serif;
          line-height: 1.15;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        body {
          margin: 0;
        }

        article,
        aside,
        footer,
        header,
        nav,
        section {
          display: block;
        }

        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        land-see-hero-main figcaption,
        figure,
        main {
          display: block;
        }

        figure {
          margin: 1em 40px;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        pre {
          font-family: monospace, monospace;
          font-size: 1em;
        }

        a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }

        a:active,
        a:hover {
          outline-width: 0;
        }

        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }

        b,
        strong {
          font-weight: inherit;
          font-weight: bolder;
        }

        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }

        dfn {
          font-style: italic;
        }

        mark {
          background-color: #ff0;
          color: #000;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        audio,
        video {
          display: inline-block;
        }

        audio:not([controls]) {
          display: none;
          height: 0;
        }

        img {
          border-style: none;
        }

        svg:not(:root) {
          overflow: hidden;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: sans-serif;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }

        button,
        input {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        [type='reset'],
        [type='submit'],
        button,
        html [type='button'] {
          -webkit-appearance: button;
        }

        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner,
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring,
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        fieldset {
          border: 1px solid silver;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }

        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }

        progress {
          display: inline-block;
          vertical-align: baseline;
        }

        textarea {
          overflow: auto;
        }

        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }

        [type='search']::-webkit-search-cancel-button,
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }

        details,
        menu {
          display: block;
        }

        summary {
          display: list-item;
        }

        canvas {
          display: inline-block;
        }

        [hidden],
        template {
          display: none;
        }

        .h00 {
          font-size: 4rem;
        }

        .h0 {
          font-size: 2.8125rem;
        }

        .h1 {
          font-size: 2.5rem;
        }

        .h2 {
          font-size: 1.625rem;
        }

        .h3 {
          font-size: 1.3125rem;
        }

        .h4 {
          font-size: 1.125rem;
        }

        .h5 {
          font-size: 1rem;
        }

        .h6 {
          font-size: 0.9375rem;
        }

        .header-text {
          color: white;
        }

        .font-family-inherit {
          font-family: inherit;
        }

        .font-size-inherit {
          font-size: inherit;
        }

        .text-decoration-none {
          text-decoration: none;
        }

        .bold {
          font-weight: 700;
        }

        .regular {
          font-weight: 400;
        }

        .italic {
          font-style: italic;
        }

        .caps {
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .left-align {
          text-align: left;
        }

        .center {
          text-align: center;
        }

        .right-align {
          text-align: right;
        }

        .justify {
          text-align: justify;
        }

        .nowrap {
          white-space: nowrap;
        }

        .break-word {
          word-wrap: break-word;
        }

        .line-height-1 {
          line-height: 1.11111;
        }

        .line-height-2 {
          line-height: 1.42857;
        }

        .line-height-3 {
          line-height: 1.6;
        }

        .line-height-4 {
          line-height: 2.0625;
        }

        .list-style-none {
          list-style: none;
        }

        .underline {
          text-decoration: underline;
        }

        .truncate {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .list-reset {
          list-style: none;
          padding-left: 0;
        }

        .inline {
          display: inline;
        }

        .block {
          display: block;
        }

        .inline-block {
          display: inline-block;
        }

        .table {
          display: table;
        }

        .table-cell {
          display: table-cell;
        }

        .overflow-hidden {
          overflow: hidden;
        }

        .overflow-scroll {
          overflow: scroll;
        }

        .overflow-auto {
          overflow: auto;
        }

        .clearfix:after,
        .clearfix:before {
          content: ' ';
          display: table;
        }

        .clearfix:after {
          clear: both;
        }

        .left {
          float: left;
        }

        .right {
          float: right;
        }

        .clear {
          clear: both;
        }

        .fit {
          max-width: 100%;
        }

        .max-width-1 {
          max-width: 24rem;
        }

        .max-width-2 {
          max-width: 32rem;
        }

        .max-width-3 {
          max-width: 48rem;
        }

        .max-width-4 {
          max-width: 64rem;
        }

        .border-box {
          box-sizing: border-box;
        }

        .align-baseline {
          vertical-align: baseline;
        }

        .align-top {
          vertical-align: top;
        }

        .align-middle {
          vertical-align: middle;
        }

        .align-bottom {
          vertical-align: bottom;
        }

        .m0 {
          margin: 0;
        }

        .mt0 {
          margin-top: 0;
        }

        .mr0 {
          margin-right: 0;
        }

        .mb0 {
          margin-bottom: 0;
        }

        .ml0,
        .mx0 {
          margin-left: 0;
        }

        .mx0 {
          margin-right: 0;
        }

        .my0 {
          margin-top: 0;
          margin-bottom: 0;
        }

        .m1 {
          margin: 0.5rem;
        }

        .mt1 {
          margin-top: 0.5rem;
        }

        .mr1 {
          margin-right: 0.5rem;
        }

        .mb1 {
          margin-bottom: 0.5rem;
        }

        .ml1,
        .mx1 {
          margin-left: 0.5rem;
        }

        .mx1 {
          margin-right: 0.5rem;
        }

        .my1 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .m2 {
          margin: 1rem;
        }

        .mt2 {
          margin-top: 1rem;
        }

        .mr2 {
          margin-right: 1rem;
        }

        .mb2 {
          margin-bottom: 1rem;
        }

        .ml2,
        .mx2 {
          margin-left: 1rem;
        }

        .mx2 {
          margin-right: 1rem;
        }

        .my2 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .m3 {
          margin: 1.5rem;
        }

        .mt3 {
          margin-top: 1.5rem;
        }

        .mr3 {
          margin-right: 1.5rem;
        }

        .mb3 {
          margin-bottom: 1.5rem;
        }

        .ml3,
        .mx3 {
          margin-left: 1.5rem;
        }

        .mx3 {
          margin-right: 1.5rem;
        }

        .my3 {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .m4 {
          margin: 2.5rem;
        }

        .mt4 {
          margin-top: 2.5rem;
        }

        .mr4 {
          margin-right: 2.5rem;
        }

        .mb4 {
          margin-bottom: 2.5rem;
        }

        .ml4,
        .mx4 {
          margin-left: 2.5rem;
        }

        .mx4 {
          margin-right: 2.5rem;
        }

        .my4 {
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .mxn1 {
          margin-left: calc(0.5rem * -1);
          margin-right: calc(0.5rem * -1);
        }

        .mxn2 {
          margin-left: calc(1rem * -1);
          margin-right: calc(1rem * -1);
        }

        .mxn3 {
          margin-left: calc(1.5rem * -1);
          margin-right: calc(1.5rem * -1);
        }

        .mxn4 {
          margin-left: calc(2.5rem * -1);
          margin-right: calc(2.5rem * -1);
        }

        .m-auto {
          margin: auto;
        }

        .mt-auto {
          margin-top: auto;
        }

        .mr-auto {
          margin-right: auto;
        }

        .mb-auto {
          margin-bottom: auto;
        }

        .ml-auto,
        .mx-auto {
          margin-left: auto;
        }

        .mx-auto {
          margin-right: auto;
        }

        .my-auto {
          margin-top: auto;
          margin-bottom: auto;
        }

        .p0 {
          padding: 0;
        }

        .pt0 {
          padding-top: 0;
        }

        .pr0 {
          padding-right: 0;
        }

        .pb0 {
          padding-bottom: 0;
        }

        .pl0,
        .px0 {
          padding-left: 0;
        }

        .px0 {
          padding-right: 0;
        }

        .py0 {
          padding-top: 0;
          padding-bottom: 0;
        }

        .p1 {
          padding: 0.5rem;
        }

        .pt1 {
          padding-top: 0.5rem;
        }

        .pr1 {
          padding-right: 0.5rem;
        }

        .pb1 {
          padding-bottom: 0.5rem;
        }

        .pl1 {
          padding-left: 0.5rem;
        }

        .py1 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .px1 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .p2 {
          padding: 1rem;
        }

        .pt2 {
          padding-top: 1rem;
        }

        .pr2 {
          padding-right: 1rem;
        }

        .pb2 {
          padding-bottom: 1rem;
        }

        .pl2 {
          padding-left: 1rem;
        }

        .py2 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .px2 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .p3 {
          padding: 1.5rem;
        }

        .pt3 {
          padding-top: 1.5rem;
        }

        .pr3 {
          padding-right: 1.5rem;
        }

        .pb3 {
          padding-bottom: 1.5rem;
        }

        .pl3 {
          padding-left: 1.5rem;
        }

        .py3 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .px3 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .p4 {
          padding: 2.5rem;
        }

        .pt4 {
          padding-top: 2.5rem;
        }

        .pr4 {
          padding-right: 2.5rem;
        }

        .pb4 {
          padding-bottom: 2.5rem;
        }

        .pl4 {
          padding-left: 2.5rem;
        }

        .py4 {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }

        .px4 {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }

        .col {
          float: left;
        }

        .col,
        .col-right {
          box-sizing: border-box;
        }

        .col-right {
          float: right;
        }

        .col-1 {
          width: 8.33333%;
        }

        .col-2 {
          width: 16.66667%;
        }

        .col-3 {
          width: 25%;
        }

        .col-4 {
          width: 33.33333%;
        }

        .col-5 {
          width: 41.66667%;
        }

        .col-6 {
          width: 50%;
        }

        .col-7 {
          width: 58.33333%;
        }

        .col-8 {
          width: 66.66667%;
        }

        .col-9 {
          width: 75%;
        }

        .col-10 {
          width: 83.33333%;
        }

        .col-11 {
          width: 91.66667%;
        }

        .col-12 {
          width: 100%;
        }

        @media (min-width: 40.06rem) {
          .sm-col {
            float: left;
            box-sizing: border-box;
          }

          .sm-col-right {
            float: right;
            box-sizing: border-box;
          }

          .sm-col-1 {
            width: 8.33333%;
          }

          .sm-col-2 {
            width: 16.66667%;
          }

          .sm-col-3 {
            width: 25%;
          }

          .sm-col-4 {
            width: 33.33333%;
          }

          .sm-col-5 {
            width: 41.66667%;
          }

          .sm-col-6 {
            width: 50%;
          }

          .sm-col-7 {
            width: 58.33333%;
          }

          .sm-col-8 {
            width: 66.66667%;
          }

          .sm-col-9 {
            width: 75%;
          }

          .sm-col-10 {
            width: 83.33333%;
          }

          .sm-col-11 {
            width: 91.66667%;
          }

          .sm-col-12 {
            width: 100%;
          }
        }

        @media (min-width: 52.06rem) {
          .md-col {
            float: left;
            box-sizing: border-box;
          }

          .md-col-right {
            float: right;
            box-sizing: border-box;
          }

          .md-col-1 {
            width: 8.33333%;
          }

          .md-col-2 {
            width: 16.66667%;
          }

          .md-col-3 {
            width: 25%;
          }

          .md-col-4 {
            width: 33.33333%;
          }

          .md-col-5 {
            width: 41.66667%;
          }

          .md-col-6 {
            width: 50%;
          }

          .md-col-7 {
            width: 58.33333%;
          }

          .md-col-8 {
            width: 66.66667%;
          }

          .md-col-9 {
            width: 75%;
          }

          .md-col-10 {
            width: 83.33333%;
          }

          .md-col-11 {
            width: 91.66667%;
          }

          .md-col-12 {
            width: 100%;
          }
        }

        @media (min-width: 64.06rem) {
          .lg-col {
            float: left;
            box-sizing: border-box;
          }

          .lg-col-right {
            float: right;
            box-sizing: border-box;
          }

          .lg-col-1 {
            width: 8.33333%;
          }

          .lg-col-2 {
            width: 16.66667%;
          }

          .lg-col-3 {
            width: 25%;
          }

          .lg-col-4 {
            width: 33.33333%;
          }

          .lg-col-5 {
            width: 41.66667%;
          }

          .lg-col-6 {
            width: 50%;
          }

          .lg-col-7 {
            width: 58.33333%;
          }

          .lg-col-8 {
            width: 66.66667%;
          }

          .lg-col-9 {
            width: 75%;
          }

          .lg-col-10 {
            width: 83.33333%;
          }

          .lg-col-11 {
            width: 91.66667%;
          }

          .lg-col-12 {
            width: 100%;
          }
        }

        .flex {
          display: -ms-flexbox;
          display: flex;
        }

        .inline-flex {
          display: -ms-inline-flexbox;
          display: inline-flex;
        }

        .items-center {
          -ms-flex-align: center;
          align-items: center;
        }

        .self-center {
          -ms-flex-item-align: center;
          -ms-grid-row-align: center;
          align-self: center;
        }

        .justify-center {
          -ms-flex-pack: center;
          justify-content: center;
        }

        .justify-between {
          -ms-flex-pack: justify;
          justify-content: space-between;
        }

        .content-around {
          -ms-flex-line-pack: distribute;
          align-content: space-around;
        }

        .flex-auto {
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
          min-width: 0;
          min-height: 0;
        }

        .flex-none {
          -ms-flex: none;
          flex: none;
        }

        .order-0 {
          -ms-flex-order: 0;
          order: 0;
        }

        .order-1 {
          -ms-flex-order: 1;
          order: 1;
        }

        .order-2 {
          -ms-flex-order: 2;
          order: 2;
        }

        .order-3 {
          -ms-flex-order: 3;
          order: 3;
        }

        .order-last {
          -ms-flex-order: 99999;
          order: 99999;
        }

        .relative {
          position: relative;
        }

        .absolute {
          position: absolute;
        }

        .fixed {
          position: fixed;
        }

        .top-0 {
          top: 0;
        }

        .right-0 {
          right: 0;
        }

        .bottom-0 {
          bottom: 0;
        }

        .left-0 {
          left: 0;
        }

        .z1 {
          z-index: 1;
        }

        .z2 {
          z-index: 2;
        }

        .z3 {
          z-index: 3;
        }

        .z4 {
          z-index: 4;
        }

        .primary-color {
          background-color: rgb(252, 113, 0);
        }

        .border {
          border-style: solid;
          border-width: 1px;
        }

        .border-top {
          border-top-style: solid;
          border-top-width: 1px;
        }

        .border-left {
          border-left-style: solid;
          border-left-width: 1px;
        }

        .border-none {
          border: 0;
        }

        .rounded {
          border-radius: 3px;
        }

        .circle {
          border-radius: 50%;
        }

        .hide {
          position: absolute;
          height: 1px;
          width: 1px;
          overflow: hidden;
          clip: rect(1px, 1px, 1px, 1px);
        }

        .ampstart-headerbar {
          z-index: 11;
          top: 0;
          left: 0;
          right: 0;
          padding-left: 1rem;
          padding-right: 2.5rem;
        }

        @media (max-width: 40rem) {
          .xs-hide {
            display: none;
          }
        }

        @media (min-width: 40.06rem) and (max-width: 52rem) {
          .sm-hide {
            display: none;
          }
        }

        @media (min-width: 52.06rem) and (max-width: 64rem) {
          .md-hide {
            display: none;
          }
        }

        @media (min-width: 64.06rem) {
          .lg-hide {
            display: none;
          }
        }

        .display-none {
          display: none;
        }

        * {
          box-sizing: border-box;
        }

        body {
          background: #fff;
          color: #6d6d6d;
          font-family: Crimson Text, times, serif;
          min-width: 315px;
          overflow-x: hidden;
          font-smooth: always;
          -webkit-font-smoothing: antialiased;
        }

        main {
          max-width: 700px;
          margin: 0 auto;
        }

        p {
          padding: 0;
          margin: 0;
        }

        #content:target {
          margin-top: calc(0px - 3.5rem);
          padding-top: 3.5rem;
        }

        .land-see amp-img.cover img {
          -o-object-fit: cover;
          object-fit: cover;
        }

        .land-see-subs-heading-text {
          font-size: 1.625rem;
          position: relative;
        }

        .land-see-post-item {
          max-width: 196px;
          text-align: left;
        }

        .land-see-post-item-wide {
          width: 100%;
          max-width: 100%;
          text-align: left;
        }

        .section-list {
          column-count: 1;
        }

        @media (min-width: 30.06rem) {
          .section-list {
            column-count: 2;
          }

          .land-see-post-video p {
            margin-bottom: 5rem;
          }
        }

        .land-see-post-title {
          font-weight: 700;
        }

        .land-see a.land-see-post-category {
          color: #808992;
          letter-spacing: 1.4px;
        }

        .land-see-post-item h4 {
          font-family: Montserrat, arial, sans-serif;
          color: #021425;
        }

        .land-see-post-item h4 a:hover {
          opacity: 0.77;
        }

        .land-see-cta-link {
          display: block;
          max-width: 813px;
        }

        @media (min-width: 52.06rem) {
          .land-see-cta-link {
            margin-top: 3.5rem;
            margin-bottom: 3.5rem;
          }
        }

        .land-see-background-image-left {
          top: 0;
          left: -36%;
          opacity: 0.2;
          width: 327px;
          height: 261px;
        }

        @media (min-width: 40.06rem) {
          .land-see-background-image-left {
            width: 690px;
            height: 551px;
          }
        }

        .land-see-paging,
        .land-see-popular-content,
        .land-see-story-nav {
          max-width: 850px;
        }

        .land-see-recent-accent-image {
          left: -5px;
          bottom: 25%;
          width: 44px;
          height: 35px;
        }

        .land-see-hero-container {
          max-width: 1600px;
        }

        .land-see-hero-carousel {
          max-width: 1290px;
        }

        .land-see-hero-button,
        .land-see-hero-caption,
        .land-see-hero-title {
          color: #fff;
        }

        .land-see-hero-content amp-img:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            180deg,
            hsla(120, 0%, 49%, 0) 0,
            hsla(120, 0%, 49%, 0.15) 30%,
            hsla(0, 0%, 5%, 0.6)
          );
          z-index: 1;
        }

        .land-see-hero-image {
          background-color: #7d7e7d;
        }

        .land-see-cover-position-top img {
          -o-object-position: top center;
          object-position: top center;
        }

        .land-see-cover-position-bottom img {
          -o-object-position: bottom center;
          object-position: bottom center;
        }

        .land-see-hero-typography {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .land-see-hero-title {
          line-height: 1.11111;
          font-family: Crimson Text, times, serif;
        }

        .land-see-hero-caption {
          font-size: 1rem;
          line-height: 1.11111;
          opacity: 0.7;
          background-color: #fff;
        }

        .land-see-hero-button {
          font: 400 1rem/1.11111 Inconsolata, verdana, sans-serif;
          text-transform: uppercase;
          padding: 13px 20px;
          border: 1px solid #fff;
          opacity: 0.85;
          cursor: pointer;
        }

        .land-see-hero-button:hover {
          opacity: 0.75;
        }

        .land-see-hero-button:active {
          top: 1px;
        }

        .land-see-hero-button:visited {
          color: #fff;
        }

        @media (max-width: 100rem) and (min-width: 40rem) {
          .land-see-hero-left,
          .land-see-hero-right {
            display: none;
          }
        }

        @media (max-width: 40rem) {
          .eagle-item {
            border-top: 0;
            position: relative;
            margin-top: 14px;
            padding-top: 12px;
          }

          .eagle-item::before {
            background-color: #dbdbdb;
            border-right: 8px solid #fff;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            content: '';
            height: 1px;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }

          .land-see-hero-button,
          .land-see-hero-caption,
          .land-see-hero-title {
            color: #021425;
          }

          .land-see-hero-title {
            font-weight: 300;
            font-size: 1.3125rem;
            line-height: 1;
          }

          .land-see-hero-caption {
            width: auto;
          }

          .land-see-hero-button {
            border-color: #021425;
          }

          .land-see-hero-button:visited {
            color: #021425;
          }

          .land-see-hero-typography {
            font-size: 13px;
            max-width: 350px;
            margin-top: 10px;
            top: 0;
            left: 20%;
            transform: none;
          }
        }

        .land-see-story-detail .land-see-post-item-wide {
          text-align: center;
        }

        .ampstart-sidebar .ampstart-nav-dropdown .ampstart-dropdown-item,
        .land-see-blockquote p,
        .land-see-story-detail .land-see-hero-caption,
        .land-see-story-detail .land-see-hero-title {
          color: #021425;
        }

        .ampstart-dropdown-item {
          font: 410 0.9375rem/2.5rem Inconsolata, verdana, sans-serif;
          text-transform: uppercase;
          letter-spacing: normal;
        }

        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }

        .sidebar {
          background-color: #fff;
          color: #333;
          min-width: 250px;
          width: 250px;
        }

        .land-see-story-detail .land-see-hero-caption {
          width: auto;
        }
      `}</style>
    </div>
  )
}

export default Layout
