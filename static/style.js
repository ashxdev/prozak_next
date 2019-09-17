import css from 'styled-jsx/css'

export default css.global`
html {
  font-family: sans-serif;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

article,aside,footer,header,nav,section {
  display: block
}

h1 {
  font-size: 2em;
  margin: .67em 0
}
land-see-hero-main
figcaption,figure,main {
  display: block
}

figure {
  margin: 1em 40px
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible
}

pre {
  font-family: monospace,monospace;
  font-size: 1em
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects
}

a:active,a:hover {
  outline-width: 0
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted
}

b,strong {
  font-weight: inherit;
  font-weight: bolder
}

code,kbd,samp {
  font-family: monospace,monospace;
  font-size: 1em
}

dfn {
  font-style: italic
}

mark {
  background-color: #ff0;
  color: #000
}

small {
  font-size: 80%
}

sub,sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

audio,video {
  display: inline-block
}

audio:not([controls]) {
  display: none;
  height: 0
}

img {
  border-style: none
}

svg:not(:root) {
  overflow: hidden
}

button,input,optgroup,select,textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}

button,input {
  overflow: visible
}

button,select {
  text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
  -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
  border-style: none;
  padding: 0
}

[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
  outline: 1px dotted ButtonText
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: .35em .625em .75em
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal
}

progress {
  display: inline-block;
  vertical-align: baseline
}

textarea {
  overflow: auto
}

[type=checkbox],[type=radio] {
  box-sizing: border-box;
  padding: 0
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

details,menu {
  display: block
}

summary {
  display: list-item
}

canvas {
  display: inline-block
}

[hidden],template {
  display: none
}

.h00 {
  font-size: 4rem
}

.h0 {
  font-size: 2.8125rem
}

.h1 {
  font-size: 2.5rem
}

.h2 {
  font-size: 1.625rem
}

.h3 {
  font-size: 1.3125rem
}

.h4 {
  font-size: 1.125rem
}

.h5 {
  font-size: 1rem
}

.h6 {
  font-size: .9375rem
}

.font-family-inherit {
  font-family: inherit
}

.font-size-inherit {
  font-size: inherit
}

.text-decoration-none {
  text-decoration: none
}

.bold {
  font-weight: 700
}

.regular {
  font-weight: 400
}

.italic {
  font-style: italic
}

.caps {
  text-transform: uppercase;
  letter-spacing: .2em
}

.left-align {
  text-align: left
}

.center {
  text-align: center
}

.right-align {
  text-align: right
}

.justify {
  text-align: justify
}

.nowrap {
  white-space: nowrap
}

.break-word {
  word-wrap: break-word
}

.line-height-1 {
  line-height: 1.11111
}

.line-height-2 {
  line-height: 1.42857
}

.line-height-3 {
  line-height: 1.6
}

.line-height-4 {
  line-height: 2.0625
}

.list-style-none {
  list-style: none
}

.underline {
  text-decoration: underline
}

.truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.list-reset {
  list-style: none;
  padding-left: 0
}

.inline {
  display: inline
}

.block {
  display: block
}

.inline-block {
  display: inline-block
}

.table {
  display: table
}

.table-cell {
  display: table-cell
}

.overflow-hidden {
  overflow: hidden
}

.overflow-scroll {
  overflow: scroll
}

.overflow-auto {
  overflow: auto
}

.clearfix:after,.clearfix:before {
  content: " ";
  display: table
}

.clearfix:after {
  clear: both
}

.left {
  float: left
}

.right {
  float: right
}

.clear {
  clear: both
}

.fit {
  max-width: 100%
}

.max-width-1 {
  max-width: 24rem
}

.max-width-2 {
  max-width: 32rem
}

.max-width-3 {
  max-width: 48rem
}

.max-width-4 {
  max-width: 64rem
}

.border-box {
  box-sizing: border-box
}

.align-baseline {
  vertical-align: baseline
}

.align-top {
  vertical-align: top
}

.align-middle {
  vertical-align: middle
}

.align-bottom {
  vertical-align: bottom
}

.m0 {
  margin: 0
}

.mt0 {
  margin-top: 0
}

.mr0 {
  margin-right: 0
}

.mb0 {
  margin-bottom: 0
}

.ml0,.mx0 {
  margin-left: 0
}

.mx0 {
  margin-right: 0
}

.my0 {
  margin-top: 0;
  margin-bottom: 0
}

.m1 {
  margin: .5rem
}

.mt1 {
  margin-top: .5rem
}

.mr1 {
  margin-right: .5rem
}

.mb1 {
  margin-bottom: .5rem
}

.ml1,.mx1 {
  margin-left: .5rem
}

.mx1 {
  margin-right: .5rem
}

.my1 {
  margin-top: .5rem;
  margin-bottom: .5rem
}

.m2 {
  margin: 1rem
}

.mt2 {
  margin-top: 1rem
}

.mr2 {
  margin-right: 1rem
}

.mb2 {
  margin-bottom: 1rem
}

.ml2,.mx2 {
  margin-left: 1rem
}

.mx2 {
  margin-right: 1rem
}

.my2 {
  margin-top: 1rem;
  margin-bottom: 1rem
}

.m3 {
  margin: 1.5rem
}

.mt3 {
  margin-top: 1.5rem
}

.mr3 {
  margin-right: 1.5rem
}

.mb3 {
  margin-bottom: 1.5rem
}

.ml3,.mx3 {
  margin-left: 1.5rem
}

.mx3 {
  margin-right: 1.5rem
}

.my3 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem
}

.m4 {
  margin: 2.5rem
}

.mt4 {
  margin-top: 2.5rem
}

.mr4 {
  margin-right: 2.5rem
}

.mb4 {
  margin-bottom: 2.5rem
}

.ml4,.mx4 {
  margin-left: 2.5rem
}

.mx4 {
  margin-right: 2.5rem
}

.my4 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem
}

.mxn1 {
  margin-left: calc(.5rem * -1);
  margin-right: calc(.5rem * -1)
}

.mxn2 {
  margin-left: calc(1rem * -1);
  margin-right: calc(1rem * -1)
}

.mxn3 {
  margin-left: calc(1.5rem * -1);
  margin-right: calc(1.5rem * -1)
}

.mxn4 {
  margin-left: calc(2.5rem * -1);
  margin-right: calc(2.5rem * -1)
}

.m-auto {
  margin: auto
}

.mt-auto {
  margin-top: auto
}

.mr-auto {
  margin-right: auto
}

.mb-auto {
  margin-bottom: auto
}

.ml-auto,.mx-auto {
  margin-left: auto
}

.mx-auto {
  margin-right: auto
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto
}

.p0 {
  padding: 0
}

.pt0 {
  padding-top: 0
}

.pr0 {
  padding-right: 0
}

.pb0 {
  padding-bottom: 0
}

.pl0,.px0 {
  padding-left: 0
}

.px0 {
  padding-right: 0
}

.py0 {
  padding-top: 0;
  padding-bottom: 0
}

.p1 {
  padding: .5rem
}

.pt1 {
  padding-top: .5rem
}

.pr1 {
  padding-right: .5rem
}

.pb1 {
  padding-bottom: .5rem
}

.pl1 {
  padding-left: .5rem
}

.py1 {
  padding-top: .5rem;
  padding-bottom: .5rem
}

.px1 {
  padding-left: .5rem;
  padding-right: .5rem
}

.p2 {
  padding: 1rem
}

.pt2 {
  padding-top: 1rem
}

.pr2 {
  padding-right: 1rem
}

.pb2 {
  padding-bottom: 1rem
}

.pl2 {
  padding-left: 1rem
}

.py2 {
  padding-top: 1rem;
  padding-bottom: 1rem
}

.px2 {
  padding-left: 1rem;
  padding-right: 1rem
}

.p3 {
  padding: 1.5rem
}

.pt3 {
  padding-top: 1.5rem
}

.pr3 {
  padding-right: 1.5rem
}

.pb3 {
  padding-bottom: 1.5rem
}

.pl3 {
  padding-left: 1.5rem
}

.py3 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem
}

.px3 {
  padding-left: 1.5rem;
  padding-right: 1.5rem
}

.p4 {
  padding: 2.5rem
}

.pt4 {
  padding-top: 2.5rem
}

.pr4 {
  padding-right: 2.5rem
}

.pb4 {
  padding-bottom: 2.5rem
}

.pl4 {
  padding-left: 2.5rem
}

.py4 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem
}

.px4 {
  padding-left: 2.5rem;
  padding-right: 2.5rem
}

.col {
  float: left
}

.col,.col-right {
  box-sizing: border-box
}

.col-right {
  float: right
}

.col-1 {
  width: 8.33333%
}

.col-2 {
  width: 16.66667%
}

.col-3 {
  width: 25%
}

.col-4 {
  width: 33.33333%
}

.col-5 {
  width: 41.66667%
}

.col-6 {
  width: 50%
}

.col-7 {
  width: 58.33333%
}

.col-8 {
  width: 66.66667%
}

.col-9 {
  width: 75%
}

.col-10 {
  width: 83.33333%
}

.col-11 {
  width: 91.66667%
}

.col-12 {
  width: 100%
}

@media (min-width:40.06rem) {
  .sm-col {
    float: left;
    box-sizing: border-box
  }

  .sm-col-right {
    float: right;
    box-sizing: border-box
  }

  .sm-col-1 {
    width: 8.33333%
  }

  .sm-col-2 {
    width: 16.66667%
  }

  .sm-col-3 {
    width: 25%
  }

  .sm-col-4 {
    width: 33.33333%
  }

  .sm-col-5 {
    width: 41.66667%
  }

  .sm-col-6 {
    width: 50%
  }

  .sm-col-7 {
    width: 58.33333%
  }

  .sm-col-8 {
    width: 66.66667%
  }

  .sm-col-9 {
    width: 75%
  }

  .sm-col-10 {
    width: 83.33333%
  }

  .sm-col-11 {
    width: 91.66667%
  }

  .sm-col-12 {
    width: 100%
  }
}

@media (min-width:52.06rem) {
  .md-col {
    float: left;
    box-sizing: border-box
  }

  .md-col-right {
    float: right;
    box-sizing: border-box
  }

  .md-col-1 {
    width: 8.33333%
  }

  .md-col-2 {
    width: 16.66667%
  }

  .md-col-3 {
    width: 25%
  }

  .md-col-4 {
    width: 33.33333%
  }

  .md-col-5 {
    width: 41.66667%
  }

  .md-col-6 {
    width: 50%
  }

  .md-col-7 {
    width: 58.33333%
  }

  .md-col-8 {
    width: 66.66667%
  }

  .md-col-9 {
    width: 75%
  }

  .md-col-10 {
    width: 83.33333%
  }

  .md-col-11 {
    width: 91.66667%
  }

  .md-col-12 {
    width: 100%
  }
}

@media (min-width:64.06rem) {
  .lg-col {
    float: left;
    box-sizing: border-box
  }

  .lg-col-right {
    float: right;
    box-sizing: border-box
  }

  .lg-col-1 {
    width: 8.33333%
  }

  .lg-col-2 {
    width: 16.66667%
  }

  .lg-col-3 {
    width: 25%
  }

  .lg-col-4 {
    width: 33.33333%
  }

  .lg-col-5 {
    width: 41.66667%
  }

  .lg-col-6 {
    width: 50%
  }

  .lg-col-7 {
    width: 58.33333%
  }

  .lg-col-8 {
    width: 66.66667%
  }

  .lg-col-9 {
    width: 75%
  }

  .lg-col-10 {
    width: 83.33333%
  }

  .lg-col-11 {
    width: 91.66667%
  }

  .lg-col-12 {
    width: 100%
  }
}

.flex {
  display: -ms-flexbox;
  display: flex
}

@media (min-width:40.06rem) {
  .sm-flex {
    display: -ms-flexbox;
    display: flex
  }
}

@media (min-width:52.06rem) {
  .md-flex {
    display: -ms-flexbox;
    display: flex
  }
}

@media (min-width:64.06rem) {
  .lg-flex {
    display: -ms-flexbox;
    display: flex
  }
}

.flex-column {
  -ms-flex-direction: column;
  flex-direction: column
}

.flex-wrap {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.items-start {
  -ms-flex-align: start;
  align-items: flex-start
}

.items-end {
  -ms-flex-align: end;
  align-items: flex-end
}

.items-center {
  -ms-flex-align: center;
  align-items: center
}

.items-baseline {
  -ms-flex-align: baseline;
  align-items: baseline
}

.items-stretch {
  -ms-flex-align: stretch;
  align-items: stretch
}

.self-start {
  -ms-flex-item-align: start;
  align-self: flex-start
}

.self-end {
  -ms-flex-item-align: end;
  align-self: flex-end
}

.self-center {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.self-baseline {
  -ms-flex-item-align: baseline;
  align-self: baseline
}

.self-stretch {
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch
}

.justify-start {
  -ms-flex-pack: start;
  justify-content: flex-start
}

.justify-end {
  -ms-flex-pack: end;
  justify-content: flex-end
}

.justify-center {
  -ms-flex-pack: center;
  justify-content: center
}

.justify-between {
  -ms-flex-pack: justify;
  justify-content: space-between
}

.justify-around {
  -ms-flex-pack: distribute;
  justify-content: space-around
}

.justify-evenly {
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly
}

.content-start {
  -ms-flex-line-pack: start;
  align-content: flex-start
}

.content-end {
  -ms-flex-line-pack: end;
  align-content: flex-end
}

.content-center {
  -ms-flex-line-pack: center;
  align-content: center
}

.content-between {
  -ms-flex-line-pack: justify;
  align-content: space-between
}

.content-around {
  -ms-flex-line-pack: distribute;
  align-content: space-around
}

.content-stretch {
  -ms-flex-line-pack: stretch;
  align-content: stretch
}

.flex-auto {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0
}

.flex-none {
  -ms-flex: none;
  flex: none
}

.order-0 {
  -ms-flex-order: 0;
  order: 0
}

.order-1 {
  -ms-flex-order: 1;
  order: 1
}

.order-2 {
  -ms-flex-order: 2;
  order: 2
}

.order-3 {
  -ms-flex-order: 3;
  order: 3
}

.order-last {
  -ms-flex-order: 99999;
  order: 99999
}

.relative {
  position: relative
}

.absolute {
  position: absolute
}

.fixed {
  position: fixed
}

.top-0 {
  top: 0
}

.right-0 {
  right: 0
}

.bottom-0 {
  bottom: 0
}

.left-0 {
  left: 0
}

.z1 {
  z-index: 1
}

.z2 {
  z-index: 2
}

.z3 {
  z-index: 3
}

.z4 {
  z-index: 4
}

.primary-color {
  background-color: rgb(252, 113, 0);
}

.border {
  border-style: solid;
  border-width: 1px
}

.border-top {
  border-top-style: solid;
  border-top-width: 1px
}

.border-right {
  border-right-style: solid;
  border-right-width: 1px
}

.border-bottom {
  border-bottom-style: solid;
  border-bottom-width: 1px
}

.border-left {
  border-left-style: solid;
  border-left-width: 1px
}

.border-none {
  border: 0
}

.rounded {
  border-radius: 3px
}

.circle {
  border-radius: 50%
}

.rounded-top {
  border-radius: 3px 3px 0 0
}

.rounded-right {
  border-radius: 0 3px 3px 0
}

.rounded-bottom {
  border-radius: 0 0 3px 3px
}

.rounded-left {
  border-radius: 3px 0 0 3px
}

.not-rounded {
  border-radius: 0
}

.hide {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px,1px,1px,1px)
}

@media (max-width:40rem) {
  .xs-hide {
    display: none
  }
}

@media (min-width:40.06rem) and (max-width:52rem) {
  .sm-hide {
    display: none
  }
}

@media (min-width:52.06rem) and (max-width:64rem) {
  .md-hide {
    display: none
  }
}

@media (min-width:64.06rem) {
  .lg-hide {
    display: none
  }
}

.display-none {
  display: none
}

* {
  box-sizing: border-box
}

body {
  background: #fff;
  color: #6d6d6d;
  font-family: Crimson Text,times,serif;
  min-width: 315px;
  overflow-x: hidden;
  font-smooth: always;
  -webkit-font-smoothing: antialiased
}

main {
  max-width: 700px;
  margin: 0 auto
}

p {
  padding: 0;
  margin: 0
}

.ampstart-accent {
  color: #808992
}

#content:target {
  margin-top: calc(0px - 3.5rem);
  padding-top: 3.5rem
}


.land-see-subscribe {
  position: relative;
  height: 310px;
  overflow: hidden;
  color: #3e6458
}

.land-see-subscribe amp-img {
  position: absolute;
  width: 100%;
  -o-object-position: top center;
  object-position: top center
}

.land-see amp-img.cover img {
  -o-object-fit: cover;
  object-fit: cover
}

.land-see-subscribe-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}

.land-see-subscribe-form form {
  padding: 0
}

.land-see-subscribe-form h2 {
  margin-bottom: 1.3125rem;
  padding-top: 2.5rem
}

.land-see-subs-heading-text {
  font-size: 1.625rem;
  position: relative
}

.land-see-subscribe-form .ampstart-input {
  margin-bottom: 0
}

.land-see-subscribe-form .ampstart-input>label {
  display: none
}

.land-see-subscribe-form input:not([type=checkbox]):not([type=radio]) {
  -webkit-appearance: none
}

.land-see-subscribe-form input[type=email] {
  font: 600 .8125rem/2.0625 Inconsolata,verdana,sans-serif;
  letter-spacing: .6px;
  border: 2px solid #fff;
  padding: 2px 0 0 .688rem
}

.land-see-subscribe-form input[type=submit] {
  width: 10px;
  height: 13px;
  line-height: 0;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='13' viewBox='0 0 10 13'%3E%3Cpath fill='%23FFF' d='M0 13.12V0l10.47 6.561z'/%3E%3C/svg%3E");
  border: none;
  position: absolute;
  top: -41px;
  right: 10px;
  cursor: pointer;
  z-index: 10
}

.land-see-subscribe-form input[type=email].user-invalid {
  border: 2px solid red
}

.land-see-stories {
  margin-bottom: 10px;
  position: relative;
  overflow: hidden
}

.land-see-stories>h3 {
  text-transform: uppercase;
  font-weight: 700;
  min-height: 68px;
  line-height: 68px;
  outline: none
}

.land-see-stories>h3:after {
  content: "";
  position: absolute;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='none' stroke='%23021425' stroke-width='2' stroke-miterlimit='10' d='M6.967 13.932V0M0 6.966h13.932'/%3E%3C/svg%3E");
  height: 14px;
  width: 14px;
  right: 30px;
  top: 28px;
  cursor: pointer
}

.land-see-stories[expanded]>h3:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='none' stroke='%23021425' stroke-width='2' stroke-miterlimit='10' d='M0 6.966h13.932'/%3E%3C/svg%3E")
}

.land-see-stories:before {
  content: "";
  position: absolute;
  height: 168px;
  left: 0;
  right: 0;
  background-color: #fddcd7
}

.land-see-stories>h3 {
  cursor: default;
  background-color: inherit;
  padding-right: 0;
  border: none
}

.land-see-arts-culture:before {
  opacity: .3
}

.land-see-design:before {
  opacity: .54
}

.land-see-fashion:before {
  opacity: .77
}

.land-see-interiors:before {
  opacity: 1
}

.land-see-post-item {
  max-width: 196px;
  text-align: left
}

.land-see-pre-animate {
  opacity: 0;
  transform: translateY(-10px)
}

.land-see-post-item-wide {
  max-width: 100%;
  text-align: left
}

.land-see-post-featured {
  width: 100%
}

@media (min-width:30.06rem) {
  .land-see-post-featured {
    width: 50%
  }

  .land-see-post-video p {
    margin-bottom: 5rem
  }
}

.land-see-post-title {
  font-weight: 700
}

.land-see a.land-see-post-category {
  color: #808992;
  letter-spacing: 1.4px
}

.land-see-post-item h4 {
  font-family: Montserrat,arial,sans-serif;
  color: #021425
}

.land-see-post-item h4 a:hover {
  opacity: .77
}

.land-see-cta-link {
  display: block;
  max-width: 813px
}

@media (min-width:52.06rem) {
  .land-see-cta-link {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem
  }
}

.land-see-background-animation {
  top: calc(-80px + 3.5rem);
  left: 0;
  right: 0;
  height: 500px;
  min-height: 500px;
  z-index: -1
}

.land-see-stories-anim-container .land-see-background-animation {
  top: 435px
}

.land-see-background-animation svg {
  width: 100%;
  height: 100%
}

.land-see-background-image-left {
  top: 0;
  left: -36%;
  opacity: .2;
  width: 327px;
  height: 261px
}

.land-see-background-image-right {
  top: 0;
  right: -44%;
  opacity: .3;
  width: 313px;
  height: 250px
}

@media (min-width:40.06rem) {
  .land-see-background-animation {
    top: calc(-260px + 3.5rem)
  }

  .land-see-background-image-left {
    width: 690px;
    height: 551px
  }

  .land-see-background-image-right {
    top: 196px;
    width: 491px;
    height: 392px
  }
}

.land-see-paging,.land-see-popular-content,.land-see-recent-content,.land-see-story-nav {
  max-width: 850px
}

.land-see-recent-content ul li:first-child {
  margin-top: 0
}

.land-see .amp-carousel-button {
  height: 40px;
  width: 40px;
  outline: none;
  cursor: pointer;
  background: transparent url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32' overflow='visible'%3E%3Cpath fill='none' stroke='%23DFDFDF' stroke-miterlimit='10' d='M.354 31.201l15.423-15.424L.354.354'/%3E%3C/svg%3E") no-repeat 50%
}

.land-see-popular-content .amp-carousel-button {
  top: 97px;
  background-size: 35%
}

.land-see .amp-carousel-button-prev {
  transform-origin: center center;
  transform: rotate(180deg) translateY(50%)
}

.land-see-recent-accent-image {
  left: -5px;
  bottom: 25%;
  width: 44px;
  height: 35px
}

@media (min-width:40.06rem) and (max-width:52rem) {
  .land-see-popular-content {
    max-width: 636px
  }
}

@media (max-width:40rem) {
  .land-see-popular-content {
    max-width: 424px
  }
}

.land-see-hero-container {
  max-width: 1600px
}

.land-see-hero-carousel {
  max-width: 1290px
}

.land-see-hero-button,.land-see-hero-caption,.land-see-hero-title {
  color: #fff
}

.land-see-hero-content amp-img:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg,hsla(120,0%,49%,0) 0,hsla(120,0%,49%,.15) 30%,hsla(0,0%,5%,.6));
  z-index: 1
}

.land-see-hero-image {
  background-color: #7d7e7d
}

.land-see-cover-position-top img {
  -o-object-position: top center;
  object-position: top center
}

.land-see-cover-position-bottom img {
  -o-object-position: bottom center;
  object-position: bottom center
}

.land-see-hero-typography {
  bottom: -4%;
  left: 50%;
  transform: translate(-50%,-50%)
}

.land-see-hero-title {
  line-height: 1.11111;
  font-family: Crimson Text,times,serif
}

.land-see-hero-caption {
  font-size: 1rem;
  line-height: 1.11111;
  opacity: .85
}

.land-see-hero-button {
  font: 400 1rem/1.11111 Inconsolata,verdana,sans-serif;
  text-transform: uppercase;
  padding: 13px 20px;
  border: 1px solid #fff;
  opacity: .85;
  cursor: pointer
}

.land-see-hero-button:hover {
  opacity: .75
}

.land-see-hero-button:active {
  top: 1px
}

.land-see-hero-button:visited {
  color: #fff
}

.land-see-hero-left:before,.land-see-hero-right:before {
  content: "";
  position: absolute;
  top: 0;
  height: 680px;
  width: 131px;
  z-index: 4
}

.land-see-hero-left:before {
  right: 0;
  background: linear-gradient(270deg,hsla(0,0%,100%,0) 0,#fff)
}

.land-see-hero-right:before {
  background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff)
}

#land-see-hero-left .amp-carousel-button,#land-see-hero-right .amp-carousel-button {
  display: none
}

.land-see-hero-left {
  top: 0;
  right: 1470px;
  width: 1290px;
  height: 680px
}

.land-see-hero-right {
  top: 0;
  left: 1470px;
  width: 1290px;
  height: 680px
}

.land-see-gallery-progress button,.land-see-hero-progress button {
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none
}

.land-see-progress-indicator {
  opacity: .4
}

.land-see-selected-slide {
  opacity: 1
}

@media (max-width:100rem) and (min-width:40rem) {
  .land-see-hero-left,.land-see-hero-right {
    display: none
  }
}

@media (max-width:40rem) {
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

  .land-see-hero-button,.land-see-hero-caption,.land-see-hero-title {
    color: #021425
  }

  .land-see-hero-title {
    font-weight: 600;
    font-size: 2.8125rem
  }

  .land-see-hero-caption {
    width: auto
  }

  .land-see-hero-button {
    border-color: #021425
  }

  .land-see-hero-button:visited {
    color: #021425
  }

  .land-see .land-see-hero-container .amp-carousel-button {
    top: 24%
  }

  .land-see-hero-typography {
    max-width: 300px;
    margin-top: 32px;
    bottom: auto;
    left: auto;
    transform: none
  }

  .land-see-hero-progress {
    position: absolute;
    top: 266px;
    left: 50%;
    transform: translate(-50%)
  }
}

.land-see-category h1 {
  font-family: Crimson Text,times,serif;
  color: #021425
}

.land-see-categories-nav,.land-see-categories-nav-page-load {
  overflow: hidden;
  height: 35px;
  border-bottom: 1px solid #f0f0f0
}

.land-see-categories-carousel>div:first-child {
  padding-bottom: 50px
}

.land-see-categories-carousel .amp-carousel-button {
  content: "";
  background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff);
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 70px
}

.land-see-categories-carousel .amp-carousel-button-prev {
  left: 0
}

.land-see-categories-button {
  font: 500 .9375rem/1.11111 Inconsolata,verdana,sans-serif;
  text-transform: uppercase;
  letter-spacing: .1rem;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0 0 3px;
  cursor: pointer
}

.land-see-categories-button:focus,.land-see-next-page:focus,.land-see-prev-page:focus {
  outline: 0
}

.land-see-categories-nav-page-load button:target,.land-see-selected-category {
  border-bottom: 1px solid #98caaf;
  border-radius: 0
}

.land-see-paging {
  border-top: 1px solid #f0f0f0
}

.land-see-next-page,.land-see-prev-page {
  color: #808992;
  letter-spacing: 1.4px;
  border: none;
  text-transform: uppercase;
  text-decoration: underline;
  background-color: transparent;
  padding: 0 0 3px;
  cursor: pointer
}

.land-see-next-page:after,.land-see-prev-page:before {
  content: "";
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='12' width='8.118' viewBox='0 0 8.1184139 12.000001'%3E%3Cpath fill='%23808992' d='M8.118 6L.77 0 0 .624 6.585 6 0 11.376.769 12z'/%3E%3C/svg%3E");
  position: absolute;
  top: 8px;
  right: -16px;
  width: 8px;
  height: 12px;
  z-index: 1
}

.land-see-prev-page:before {
  transform-origin: center center;
  transform: rotate(180deg) translateY(50%);
  left: -16px;
  top: 14px
}

.land-see-list-overflow[overflow] {
  background: linear-gradient(0deg,#fff 0,hsla(0,0%,100%,.7) 50%,hsla(0,0%,100%,0));
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 7px 0 5px;
  z-index: 2
}

.land-see-overflow-button {
  font-size: .8125rem;
  color: #021425;
  border-color: transparent;
  opacity: 1
}

@media (max-width:40rem) {
  .land-see-categories-carousel .amp-carousel-button {
    width: 60px
  }
}

@media (max-width:30rem) {
  .land-see-hide-mobile {
    display: none
  }
}

@media (min-width:30.06rem) {
  .land-see-hide-widescreen {
    display: none
  }

  .land-see-recent-content ul li:nth-child(2) {
    margin-top: 0
  }
}

.land-see-story-detail .land-see-post-item-wide {
  text-align: center
}

.ampstart-sidebar .ampstart-nav-dropdown .ampstart-dropdown-item,.land-see-blockquote p,.land-see-story-detail .land-see-hero-caption,.land-see-story-detail .land-see-hero-title {
  color: #021425
}

.ampstart-dropdown-item {
  font: 410 .9375rem/2.5rem Inconsolata,verdana,sans-serif;
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
  width: auto
}

.land-see-story-subtitle {
  font-family: Montserrat,arial,sans-serif;
  font-weight: 600;
  margin-bottom: -.5rem
}

.land-see-story-copy b {
  line-height: normal
}

.land-see-blockquote:before {
  content: "";
  background: url(../../img/land-see/structure/green-up-full-20.svg) 0 0/198px 156px no-repeat;
  position: absolute;
  top: 50%;
  left: 1rem;
  width: 198px;
  height: 157px;
  transform: rotate(90deg) translate(-40%);
  opacity: .2;
  z-index: -1
}

.land-see-blockquote p {
  font-size: 1.625rem;
  line-height: 1.42857
}

.land-see-blockquote cite {
  font-family: Inconsolata,verdana,sans-serif;
  font-size: .688rem;
  font-style: normal;
  text-transform: uppercase;
  color: #808992
}

.land-see-image-gallery {
  max-width: 813px;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem
}

.land-see-gallery-progress {
  height: 58px
}

.land-see-gallery-progress-scroll {
  overflow-x: scroll;
  padding-bottom: 58px
}

.land-see-gallery-progress button {
  padding-right: 3px;
  outline: none;
  background: transparent
}

.land-see-gallery-progress button:last-child {
  padding-right: 0
}

.land-see-selected-preview-image {
  opacity: .77
}

.land-see-instagram-post {
  margin-top: -67px;
  max-width: 196px
}

.land-see-instagram>h3 span {
  margin-left: 40px
}

.land-see-instagram>h3 span:before {
  content: "";
  position: absolute;
  background: url(../../img/icons/instagram.svg) -5px -3px/35px 35px no-repeat;
  height: 29px;
  width: 29px;
  top: 0;
  left: -40px;
  z-index: 3
}

.land-see-story-instagram-container.land-see-stories>h3:after {
  content: "";
  background: none;
  height: 0;
  width: 0
}

.land-see-story-social-share-heading {
  float: left;
  color: #808992;
  text-transform: uppercase;
  padding-top: .5rem
}

.land-see-story-nav .ampstart-social-follow {
  float: right;
  -ms-flex-pack: start;
  justify-content: flex-start
}

@media (max-width:30rem) {
  .land-see-story-detail .land-see-post-item .land-see-image-attribution {
    display: none
  }

  .land-see-blockquote p,.land-see-image-attribution,.land-see-story-copy,.land-see-story-subtitle {
    padding-left: 1rem
  }

  .land-see-flying-carpet {
    display: block
  }

  .land-see-story-subtitle {
    padding-top: 1rem
  }

  .land-see-story-copy {
    padding-right: 1rem
  }

  .land-see-blockquote:before {
    left: -22px
  }

  .land-see-blockquote {
    padding: 1rem
  }
}

@media (max-width:25rem) {
  .land-see-story-instagram-container {
    margin-bottom: 0
  }
}

@media (max-width:40rem) {
  .land-see-story-social {
    -ms-flex-order: 3;
    order: 3
  }
}
`
