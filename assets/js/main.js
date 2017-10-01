@charset "UTF-8";
@import url(font-awesome.min.css);
@import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600";
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

#map {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

article {
    margin-top: 2em;
}

#logo {
    width: 6em;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

body {
    -webkit-text-size-adjust: none;
}

#some-slider {
    min-height: 15em;
    background: rgb(233, 0, 99);
    display: flex
}

#four {
    min-height: 35em;
}

#title-section {
    margin-bottom: 1em !important;
    width: 100%;
}

.text-section-five {
    color: whitesmoke;
}

#five {
    display: flex;
}

#name_employ {
    margin-bottom: 0;
}

#logo-name {
    margin-top: 1em;
}

.card_employ {
    display: inline;
    margin: 4em 4em 4em 4em;
}


/* Box Model */

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


/* Containers */

.container {
    margin-left: auto;
    margin-right: auto;
}

.container.\31 25\25 {
    width: 100%;
    max-width: 100em;
    min-width: 80em;
}

.container.\37 5\25 {
    width: 60em;
}

.container.\35 0\25 {
    width: 40em;
}

.container.\32 5\25 {
    width: 20em;
}

.container {
    width: 80em;
}

@media screen and (max-width: 1680px) {
    .container.\31 25\25 {
        width: 100%;
        max-width: 100em;
        min-width: 80em;
    }
    .container.\37 5\25 {
        width: 60em;
    }
    .container.\35 0\25 {
        width: 40em;
    }
    .container.\32 5\25 {
        width: 20em;
    }
    .container {
        width: 80em;
    }
}

@media screen and (max-width: 1280px) {
    .container.\31 25\25 {
        width: 100%;
        max-width: 81.25em;
        min-width: 65em;
    }
    .container.\37 5\25 {
        width: 48.75em;
    }
    .container.\35 0\25 {
        width: 32.5em;
    }
    .container.\32 5\25 {
        width: 16.25em;
    }
    .container {
        width: 65em;
    }
}

@media screen and (max-width: 980px) {
    .container.\31 25\25 {
        width: 100%;
        max-width: 112.5%;
        min-width: 90%;
    }
    .container.\37 5\25 {
        width: 67.5%;
    }
    .container.\35 0\25 {
        width: 45%;
    }
    .container.\32 5\25 {
        width: 22.5%;
    }
    .container {
        width: 90%;
    }
}

@media screen and (max-width: 736px) {
    .container.\31 25\25 {
        width: 100%;
        max-width: 112.5%;
        min-width: 90%;
    }
    .container.\37 5\25 {
        width: 67.5%;
    }
    .container.\35 0\25 {
        width: 45%;
    }
    .container.\32 5\25 {
        width: 22.5%;
    }
    .container {
        width: 90% !important;
    }
}

@media screen and (max-width: 480px) {
    .container.\31 25\25 {
        width: 100%;
        max-width: 112.5%;
        min-width: 90%;
    }
    .container.\37 5\25 {
        width: 67.5%;
    }
    .container.\35 0\25 {
        width: 45%;
    }
    .container.\32 5\25 {
        width: 22.5%;
    }
    .container {
        width: 90% !important;
    }
}


/* Grid */

.row {
    border-bottom: solid 1px transparent;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.row>* {
    float: left;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.row:after,
.row:before {
    content: '';
    display: block;
    clear: both;
    height: 0;
}

.row.uniform>*> :first-child {
    margin-top: 0;
}

.row.uniform>*> :last-child {
    margin-bottom: 0;
}

.row.\30 \25>* {
    padding: 0 0 0 0em;
}

.row.\30 \25 {
    margin: 0 0 -1px 0em;
}

.row.uniform.\30 \25>* {
    padding: 0em 0 0 0em;
}

.row.uniform.\30 \25 {
    margin: 0em 0 -1px 0em;
}

.row>* {
    padding: 0 0 0 2em;
}

.row {
    margin: 0 0 -1px -2em;
}

.row.uniform>* {
    padding: 2em 0 0 2em;
}

.row.uniform {
    margin: -2em 0 -1px -2em;
}

.row.\32 00\25>* {
    padding: 0 0 0 4em;
}

.row.\32 00\25 {
    margin: 0 0 -1px -4em;
}

.row.uniform.\32 00\25>* {
    padding: 4em 0 0 4em;
}

.row.uniform.\32 00\25 {
    margin: -4em 0 -1px -4em;
}

.row.\31 50\25>* {
    padding: 0 0 0 3em;
}

.row.\31 50\25 {
    margin: 0 0 -1px -3em;
}

.row.uniform.\31 50\25>* {
    padding: 3em 0 0 3em;
}

.row.uniform.\31 50\25 {
    margin: -3em 0 -1px -3em;
}

.row.\35 0\25>* {
    padding: 0 0 0 1em;
}

.row.\35 0\25 {
    margin: 0 0 -1px -1em;
}

.row.uniform.\35 0\25>* {
    padding: 1em 0 0 1em;
}

.row.uniform.\35 0\25 {
    margin: -1em 0 -1px -1em;
}

.row.\32 5\25>* {
    padding: 0 0 0 0.5em;
}

.row.\32 5\25 {
    margin: 0 0 -1px -0.5em;
}

.row.uniform.\32 5\25>* {
    padding: 0.5em 0 0 0.5em;
}

.row.uniform.\32 5\25 {
    margin: -0.5em 0 -1px -0.5em;
}

.\31 2u,
.\31 2u\24 {
    width: 100%;
    clear: none;
    margin-left: 0;
}

.\31 1u,
.\31 1u\24 {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
}

.\31 0u,
.\31 0u\24 {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
}

.\39 u,
.\39 u\24 {
    width: 75%;
    clear: none;
    margin-left: 0;
}

.\38 u,
.\38 u\24 {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
}

.\37 u,
.\37 u\24 {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
}

.\36 u,
.\36 u\24 {
    width: 50%;
    clear: none;
    margin-left: 0;
}

.\35 u,
.\35 u\24 {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
}

.\34 u,
.\34 u\24 {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
}

.\33 u,
.\33 u\24 {
    width: 25%;
    clear: none;
    margin-left: 0;
}

.\32 u,
.\32 u\24 {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
}

.\31 u,
.\31 u\24 {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
}

.\31 2u\24+*,
.\31 1u\24+*,
.\31 0u\24+*,
.\39 u\24+*,
.\38 u\24+*,
.\37 u\24+*,
.\36 u\24+*,
.\35 u\24+*,
.\34 u\24+*,
.\33 u\24+*,
.\32 u\24+*,
.\31 u\24+* {
    clear: left;
}

.\-11u {
    margin-left: 91.66667%;
}

.\-10u {
    margin-left: 83.33333%;
}

.\-9u {
    margin-left: 75%;
}

.\-8u {
    margin-left: 66.66667%;
}

.\-7u {
    margin-left: 58.33333%;
}

.\-6u {
    margin-left: 50%;
}

.\-5u {
    margin-left: 41.66667%;
}

.\-4u {
    margin-left: 33.33333%;
}

.\-3u {
    margin-left: 25%;
}

.\-2u {
    margin-left: 16.66667%;
}

.\-1u {
    margin-left: 8.33333%;
}

@media screen and (max-width: 1680px) {
    .row>* {
        padding: 0 0 0 2em;
    }
    .row {
        margin: 0 0 -1px -2em;
    }
    .row.uniform>* {
        padding: 2em 0 0 2em;
    }
    .row.uniform {
        margin: -2em 0 -1px -2em;
    }
    .row.\32 00\25>* {
        padding: 0 0 0 4em;
    }
    .row.\32 00\25 {
        margin: 0 0 -1px -4em;
    }
    .row.uniform.\32 00\25>* {
        padding: 4em 0 0 4em;
    }
    .row.uniform.\32 00\25 {
        margin: -4em 0 -1px -4em;
    }
    .row.\31 50\25>* {
        padding: 0 0 0 3em;
    }
    .row.\31 50\25 {
        margin: 0 0 -1px -3em;
    }
    .row.uniform.\31 50\25>* {
        padding: 3em 0 0 3em;
    }
    .row.uniform.\31 50\25 {
        margin: -3em 0 -1px -3em;
    }
    .row.\35 0\25>* {
        padding: 0 0 0 1em;
    }
    .row.\35 0\25 {
        margin: 0 0 -1px -1em;
    }
    .row.uniform.\35 0\25>* {
        padding: 1em 0 0 1em;
    }
    .row.uniform.\35 0\25 {
        margin: -1em 0 -1px -1em;
    }
    .row.\32 5\25>* {
        padding: 0 0 0 0.5em;
    }
    .row.\32 5\25 {
        margin: 0 0 -1px -0.5em;
    }
    .row.uniform.\32 5\25>* {
        padding: 0.5em 0 0 0.5em;
    }
    .row.uniform.\32 5\25 {
        margin: -0.5em 0 -1px -0.5em;
    }
    .\31 2u\28xlarge\29,
    .\31 2u\24\28xlarge\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
    }
    .\31 1u\28xlarge\29,
    .\31 1u\24\28xlarge\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 0u\28xlarge\29,
    .\31 0u\24\28xlarge\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\39 u\28xlarge\29,
    .\39 u\24\28xlarge\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
    }
    .\38 u\28xlarge\29,
    .\38 u\24\28xlarge\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\37 u\28xlarge\29,
    .\37 u\24\28xlarge\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\36 u\28xlarge\29,
    .\36 u\24\28xlarge\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
    }
    .\35 u\28xlarge\29,
    .\35 u\24\28xlarge\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\34 u\28xlarge\29,
    .\34 u\24\28xlarge\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\33 u\28xlarge\29,
    .\33 u\24\28xlarge\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
    }
    .\32 u\28xlarge\29,
    .\32 u\24\28xlarge\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 u\28xlarge\29,
    .\31 u\24\28xlarge\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\31 2u\24\28xlarge\29+*,
    .\31 1u\24\28xlarge\29+*,
    .\31 0u\24\28xlarge\29+*,
    .\39 u\24\28xlarge\29+*,
    .\38 u\24\28xlarge\29+*,
    .\37 u\24\28xlarge\29+*,
    .\36 u\24\28xlarge\29+*,
    .\35 u\24\28xlarge\29+*,
    .\34 u\24\28xlarge\29+*,
    .\33 u\24\28xlarge\29+*,
    .\32 u\24\28xlarge\29+*,
    .\31 u\24\28xlarge\29+* {
        clear: left;
    }
    .\-11u\28xlarge\29 {
        margin-left: 91.66667%;
    }
    .\-10u\28xlarge\29 {
        margin-left: 83.33333%;
    }
    .\-9u\28xlarge\29 {
        margin-left: 75%;
    }
    .\-8u\28xlarge\29 {
        margin-left: 66.66667%;
    }
    .\-7u\28xlarge\29 {
        margin-left: 58.33333%;
    }
    .\-6u\28xlarge\29 {
        margin-left: 50%;
    }
    .\-5u\28xlarge\29 {
        margin-left: 41.66667%;
    }
    .\-4u\28xlarge\29 {
        margin-left: 33.33333%;
    }
    .\-3u\28xlarge\29 {
        margin-left: 25%;
    }
    .\-2u\28xlarge\29 {
        margin-left: 16.66667%;
    }
    .\-1u\28xlarge\29 {
        margin-left: 8.33333%;
    }
}

@media screen and (max-width: 1280px) {
    .row>* {
        padding: 0 0 0 1.5em;
    }
    .row {
        margin: 0 0 -1px -1.5em;
    }
    .row.uniform>* {
        padding: 1.5em 0 0 1.5em;
    }
    .row.uniform {
        margin: -1.5em 0 -1px -1.5em;
    }
    .row.\32 00\25>* {
        padding: 0 0 0 3em;
    }
    .row.\32 00\25 {
        margin: 0 0 -1px -3em;
    }
    .row.uniform.\32 00\25>* {
        padding: 3em 0 0 3em;
    }
    .row.uniform.\32 00\25 {
        margin: -3em 0 -1px -3em;
    }
    .row.\31 50\25>* {
        padding: 0 0 0 2.25em;
    }
    .row.\31 50\25 {
        margin: 0 0 -1px -2.25em;
    }
    .row.uniform.\31 50\25>* {
        padding: 2.25em 0 0 2.25em;
    }
    .row.uniform.\31 50\25 {
        margin: -2.25em 0 -1px -2.25em;
    }
    .row.\35 0\25>* {
        padding: 0 0 0 0.75em;
    }
    .row.\35 0\25 {
        margin: 0 0 -1px -0.75em;
    }
    .row.uniform.\35 0\25>* {
        padding: 0.75em 0 0 0.75em;
    }
    .row.uniform.\35 0\25 {
        margin: -0.75em 0 -1px -0.75em;
    }
    .row.\32 5\25>* {
        padding: 0 0 0 0.375em;
    }
    .row.\32 5\25 {
        margin: 0 0 -1px -0.375em;
    }
    .row.uniform.\32 5\25>* {
        padding: 0.375em 0 0 0.375em;
    }
    .row.uniform.\32 5\25 {
        margin: -0.375em 0 -1px -0.375em;
    }
    .\31 2u\28large\29,
    .\31 2u\24\28large\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
    }
    .\31 1u\28large\29,
    .\31 1u\24\28large\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 0u\28large\29,
    .\31 0u\24\28large\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\39 u\28large\29,
    .\39 u\24\28large\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
    }
    .\38 u\28large\29,
    .\38 u\24\28large\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\37 u\28large\29,
    .\37 u\24\28large\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\36 u\28large\29,
    .\36 u\24\28large\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
    }
    .\35 u\28large\29,
    .\35 u\24\28large\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\34 u\28large\29,
    .\34 u\24\28large\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\33 u\28large\29,
    .\33 u\24\28large\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
    }
    .\32 u\28large\29,
    .\32 u\24\28large\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 u\28large\29,
    .\31 u\24\28large\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\31 2u\24\28large\29+*,
    .\31 1u\24\28large\29+*,
    .\31 0u\24\28large\29+*,
    .\39 u\24\28large\29+*,
    .\38 u\24\28large\29+*,
    .\37 u\24\28large\29+*,
    .\36 u\24\28large\29+*,
    .\35 u\24\28large\29+*,
    .\34 u\24\28large\29+*,
    .\33 u\24\28large\29+*,
    .\32 u\24\28large\29+*,
    .\31 u\24\28large\29+* {
        clear: left;
    }
    .\-11u\28large\29 {
        margin-left: 91.66667%;
    }
    .\-10u\28large\29 {
        margin-left: 83.33333%;
    }
    .\-9u\28large\29 {
        margin-left: 75%;
    }
    .\-8u\28large\29 {
        margin-left: 66.66667%;
    }
    .\-7u\28large\29 {
        margin-left: 58.33333%;
    }
    .\-6u\28large\29 {
        margin-left: 50%;
    }
    .\-5u\28large\29 {
        margin-left: 41.66667%;
    }
    .\-4u\28large\29 {
        margin-left: 33.33333%;
    }
    .\-3u\28large\29 {
        margin-left: 25%;
    }
    .\-2u\28large\29 {
        margin-left: 16.66667%;
    }
    .\-1u\28large\29 {
        margin-left: 8.33333%;
    }
}

@media screen and (max-width: 980px) {
    .row>* {
        padding: 0 0 0 1.5em;
    }
    .row {
        margin: 0 0 -1px -1.5em;
    }
    .row.uniform>* {
        padding: 1.5em 0 0 1.5em;
    }
    .row.uniform {
        margin: -1.5em 0 -1px -1.5em;
    }
    .row.\32 00\25>* {
        padding: 0 0 0 3em;
    }
    .row.\32 00\25 {
        margin: 0 0 -1px -3em;
    }
    .row.uniform.\32 00\25>* {
        padding: 3em 0 0 3em;
    }
    .row.uniform.\32 00\25 {
        margin: -3em 0 -1px -3em;
    }
    .row.\31 50\25>* {
        padding: 0 0 0 2.25em;
    }
    .row.\31 50\25 {
        margin: 0 0 -1px -2.25em;
    }
    .row.uniform.\31 50\25>* {
        padding: 2.25em 0 0 2.25em;
    }
    .row.uniform.\31 50\25 {
        margin: -2.25em 0 -1px -2.25em;
    }
    .row.\35 0\25>* {
        padding: 0 0 0 0.75em;
    }
    .row.\35 0\25 {
        margin: 0 0 -1px -0.75em;
    }
    .row.uniform.\35 0\25>* {
        padding: 0.75em 0 0 0.75em;
    }
    .row.uniform.\35 0\25 {
        margin: -0.75em 0 -1px -0.75em;
    }
    .row.\32 5\25>* {
        padding: 0 0 0 0.375em;
    }
    .row.\32 5\25 {
        margin: 0 0 -1px -0.375em;
    }
    .row.uniform.\32 5\25>* {
        padding: 0.375em 0 0 0.375em;
    }
    .row.uniform.\32 5\25 {
        margin: -0.375em 0 -1px -0.375em;
    }
    .\31 2u\28medium\29,
    .\31 2u\24\28medium\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
    }
    .\31 1u\28medium\29,
    .\31 1u\24\28medium\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 0u\28medium\29,
    .\31 0u\24\28medium\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\39 u\28medium\29,
    .\39 u\24\28medium\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
    }
    .\38 u\28medium\29,
    .\38 u\24\28medium\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\37 u\28medium\29,
    .\37 u\24\28medium\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\36 u\28medium\29,
    .\36 u\24\28medium\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
    }
    .\35 u\28medium\29,
    .\35 u\24\28medium\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\34 u\28medium\29,
    .\34 u\24\28medium\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\33 u\28medium\29,
    .\33 u\24\28medium\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
    }
    .\32 u\28medium\29,
    .\32 u\24\28medium\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 u\28medium\29,
    .\31 u\24\28medium\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\31 2u\24\28medium\29+*,
    .\31 1u\24\28medium\29+*,
    .\31 0u\24\28medium\29+*,
    .\39 u\24\28medium\29+*,
    .\38 u\24\28medium\29+*,
    .\37 u\24\28medium\29+*,
    .\36 u\24\28medium\29+*,
    .\35 u\24\28medium\29+*,
    .\34 u\24\28medium\29+*,
    .\33 u\24\28medium\29+*,
    .\32 u\24\28medium\29+*,
    .\31 u\24\28medium\29+* {
        clear: left;
    }
    .\-11u\28medium\29 {
        margin-left: 91.66667%;
    }
    .\-10u\28medium\29 {
        margin-left: 83.33333%;
    }
    .\-9u\28medium\29 {
        margin-left: 75%;
    }
    .\-8u\28medium\29 {
        margin-left: 66.66667%;
    }
    .\-7u\28medium\29 {
        margin-left: 58.33333%;
    }
    .\-6u\28medium\29 {
        margin-left: 50%;
    }
    .\-5u\28medium\29 {
        margin-left: 41.66667%;
    }
    .\-4u\28medium\29 {
        margin-left: 33.33333%;
    }
    .\-3u\28medium\29 {
        margin-left: 25%;
    }
    .\-2u\28medium\29 {
        margin-left: 16.66667%;
    }
    .\-1u\28medium\29 {
        margin-left: 8.33333%;
    }
}

@media screen and (max-width: 736px) {
    .row>* {
        padding: 0 0 0 1.25em;
    }
    .row {
        margin: 0 0 -1px -1.25em;
    }
    .row.uniform>* {
        padding: 1.25em 0 0 1.25em;
    }
    .row.uniform {
        margin: -1.25em 0 -1px -1.25em;
    }
    .row.\32 00\25>* {
        padding: 0 0 0 2.5em;
    }
    .row.\32 00\25 {
        margin: 0 0 -1px -2.5em;
    }
    .row.uniform.\32 00\25>* {
        padding: 2.5em 0 0 2.5em;
    }
    .row.uniform.\32 00\25 {
        margin: -2.5em 0 -1px -2.5em;
    }
    .row.\31 50\25>* {
        padding: 0 0 0 1.875em;
    }
    .row.\31 50\25 {
        margin: 0 0 -1px -1.875em;
    }
    .row.uniform.\31 50\25>* {
        padding: 1.875em 0 0 1.875em;
    }
    .row.uniform.\31 50\25 {
        margin: -1.875em 0 -1px -1.875em;
    }
    .row.\35 0\25>* {
        padding: 0 0 0 0.625em;
    }
    .row.\35 0\25 {
        margin: 0 0 -1px -0.625em;
    }
    .row.uniform.\35 0\25>* {
        padding: 0.625em 0 0 0.625em;
    }
    .row.uniform.\35 0\25 {
        margin: -0.625em 0 -1px -0.625em;
    }
    .row.\32 5\25>* {
        padding: 0 0 0 0.3125em;
    }
    .row.\32 5\25 {
        margin: 0 0 -1px -0.3125em;
    }
    .row.uniform.\32 5\25>* {
        padding: 0.3125em 0 0 0.3125em;
    }
    .row.uniform.\32 5\25 {
        margin: -0.3125em 0 -1px -0.3125em;
    }
    .\31 2u\28small\29,
    .\31 2u\24\28small\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
    }
    .\31 1u\28small\29,
    .\31 1u\24\28small\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 0u\28small\29,
    .\31 0u\24\28small\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\39 u\28small\29,
    .\39 u\24\28small\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
    }
    .\38 u\28small\29,
    .\38 u\24\28small\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\37 u\28small\29,
    .\37 u\24\28small\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\36 u\28small\29,
    .\36 u\24\28small\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
    }
    .\35 u\28small\29,
    .\35 u\24\28small\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\34 u\28small\29,
    .\34 u\24\28small\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\33 u\28small\29,
    .\33 u\24\28small\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
    }
    .\32 u\28small\29,
    .\32 u\24\28small\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 u\28small\29,
    .\31 u\24\28small\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\31 2u\24\28small\29+*,
    .\31 1u\24\28small\29+*,
    .\31 0u\24\28small\29+*,
    .\39 u\24\28small\29+*,
    .\38 u\24\28small\29+*,
    .\37 u\24\28small\29+*,
    .\36 u\24\28small\29+*,
    .\35 u\24\28small\29+*,
    .\34 u\24\28small\29+*,
    .\33 u\24\28small\29+*,
    .\32 u\24\28small\29+*,
    .\31 u\24\28small\29+* {
        clear: left;
    }
    .\-11u\28small\29 {
        margin-left: 91.66667%;
    }
    .\-10u\28small\29 {
        margin-left: 83.33333%;
    }
    .\-9u\28small\29 {
        margin-left: 75%;
    }
    .\-8u\28small\29 {
        margin-left: 66.66667%;
    }
    .\-7u\28small\29 {
        margin-left: 58.33333%;
    }
    .\-6u\28small\29 {
        margin-left: 50%;
    }
    .\-5u\28small\29 {
        margin-left: 41.66667%;
    }
    .\-4u\28small\29 {
        margin-left: 33.33333%;
    }
    .\-3u\28small\29 {
        margin-left: 25%;
    }
    .\-2u\28small\29 {
        margin-left: 16.66667%;
    }
    .\-1u\28small\29 {
        margin-left: 8.33333%;
    }
}

@media screen and (max-width: 480px) {
    .row>* {
        padding: 0 0 0 1.25em;
    }
    .row {
        margin: 0 0 -1px -1.25em;
    }
    .row.uniform>* {
        padding: 1.25em 0 0 1.25em;
    }
    .row.uniform {
        margin: -1.25em 0 -1px -1.25em;
    }
    .row.\32 00\25>* {
        padding: 0 0 0 2.5em;
    }
    .row.\32 00\25 {
        margin: 0 0 -1px -2.5em;
    }
    .row.uniform.\32 00\25>* {
        padding: 2.5em 0 0 2.5em;
    }
    .row.uniform.\32 00\25 {
        margin: -2.5em 0 -1px -2.5em;
    }
    .row.\31 50\25>* {
        padding: 0 0 0 1.875em;
    }
    .row.\31 50\25 {
        margin: 0 0 -1px -1.875em;
    }
    .row.uniform.\31 50\25>* {
        padding: 1.875em 0 0 1.875em;
    }
    .row.uniform.\31 50\25 {
        margin: -1.875em 0 -1px -1.875em;
    }
    .row.\35 0\25>* {
        padding: 0 0 0 0.625em;
    }
    .row.\35 0\25 {
        margin: 0 0 -1px -0.625em;
    }
    .row.uniform.\35 0\25>* {
        padding: 0.625em 0 0 0.625em;
    }
    .row.uniform.\35 0\25 {
        margin: -0.625em 0 -1px -0.625em;
    }
    .row.\32 5\25>* {
        padding: 0 0 0 0.3125em;
    }
    .row.\32 5\25 {
        margin: 0 0 -1px -0.3125em;
    }
    .row.uniform.\32 5\25>* {
        padding: 0.3125em 0 0 0.3125em;
    }
    .row.uniform.\32 5\25 {
        margin: -0.3125em 0 -1px -0.3125em;
    }
    .\31 2u\28xsmall\29,
    .\31 2u\24\28xsmall\29 {
        width: 100%;
        clear: none;
        margin-left: 0;
    }
    .\31 1u\28xsmall\29,
    .\31 1u\24\28xsmall\29 {
        width: 91.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 0u\28xsmall\29,
    .\31 0u\24\28xsmall\29 {
        width: 83.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\39 u\28xsmall\29,
    .\39 u\24\28xsmall\29 {
        width: 75%;
        clear: none;
        margin-left: 0;
    }
    .\38 u\28xsmall\29,
    .\38 u\24\28xsmall\29 {
        width: 66.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\37 u\28xsmall\29,
    .\37 u\24\28xsmall\29 {
        width: 58.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\36 u\28xsmall\29,
    .\36 u\24\28xsmall\29 {
        width: 50%;
        clear: none;
        margin-left: 0;
    }
    .\35 u\28xsmall\29,
    .\35 u\24\28xsmall\29 {
        width: 41.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\34 u\28xsmall\29,
    .\34 u\24\28xsmall\29 {
        width: 33.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\33 u\28xsmall\29,
    .\33 u\24\28xsmall\29 {
        width: 25%;
        clear: none;
        margin-left: 0;
    }
    .\32 u\28xsmall\29,
    .\32 u\24\28xsmall\29 {
        width: 16.6666666667%;
        clear: none;
        margin-left: 0;
    }
    .\31 u\28xsmall\29,
    .\31 u\24\28xsmall\29 {
        width: 8.3333333333%;
        clear: none;
        margin-left: 0;
    }
    .\31 2u\24\28xsmall\29+*,
    .\31 1u\24\28xsmall\29+*,
    .\31 0u\24\28xsmall\29+*,
    .\39 u\24\28xsmall\29+*,
    .\38 u\24\28xsmall\29+*,
    .\37 u\24\28xsmall\29+*,
    .\36 u\24\28xsmall\29+*,
    .\35 u\24\28xsmall\29+*,
    .\34 u\24\28xsmall\29+*,
    .\33 u\24\28xsmall\29+*,
    .\32 u\24\28xsmall\29+*,
    .\31 u\24\28xsmall\29+* {
        clear: left;
    }
    .\-11u\28xsmall\29 {
        margin-left: 91.66667%;
    }
    .\-10u\28xsmall\29 {
        margin-left: 83.33333%;
    }
    .\-9u\28xsmall\29 {
        margin-left: 75%;
    }
    .\-8u\28xsmall\29 {
        margin-left: 66.66667%;
    }
    .\-7u\28xsmall\29 {
        margin-left: 58.33333%;
    }
    .\-6u\28xsmall\29 {
        margin-left: 50%;
    }
    .\-5u\28xsmall\29 {
        margin-left: 41.66667%;
    }
    .\-4u\28xsmall\29 {
        margin-left: 33.33333%;
    }
    .\-3u\28xsmall\29 {
        margin-left: 25%;
    }
    .\-2u\28xsmall\29 {
        margin-left: 16.66667%;
    }
    .\-1u\28xsmall\29 {
        margin-left: 8.33333%;
    }
}


/* Basic */

@-ms-viewport {
    width: device-width;
}

body {
    -ms-overflow-style: scrollbar;
}

@media screen and (max-width: 480px) {
    html,
    body {
        min-width: 320px;
    }
}

body {
    background: #fff;
}

body.is-loading *,
body.is-loading *:before,
body.is-loading *:after {
    -moz-animation: none !important;
    -webkit-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    -moz-transition: none !important;
    -webkit-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
}


/* Type */

body,
input,
select,
textarea {
    color: #9a9a9a;
    font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
    font-size: 14pt;
    font-weight: 400;
    line-height: 1.65;
}

@media screen and (max-width: 1680px) {
    body,
    input,
    select,
    textarea {
        font-size: 12pt;
    }
}

@media screen and (max-width: 1280px) {
    body,
    input,
    select,
    textarea {
        font-size: 12pt;
    }
}

@media screen and (max-width: 980px) {
    body,
    input,
    select,
    textarea {
        font-size: 12pt;
    }
}

@media screen and (max-width: 736px) {
    body,
    input,
    select,
    textarea {
        font-size: 12pt;
    }
}

@media screen and (max-width: 480px) {
    body,
    input,
    select,
    textarea {
        font-size: 12pt;
    }
}

a {
    color: rgb(233, 0, 99);
    text-decoration: underline;
}

a:hover {
    text-decoration: none;
}

strong,
b {
    color: #555;
    font-weight: 600;
}

em,
i {
    font-style: italic;
}

p {
    margin: 0 0 2em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #555;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 1em 0;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
    color: inherit;
    text-decoration: none;
}

h2 {
    font-size: 1.85em;
    font-weight: 300;
}

h3 {
    font-size: 1.75em;
}

@media screen and (max-width: 480px) {
    h3 {
        font-size: 1.25em;
    }
}

h4 {
    font-size: 1.5em;
}

h5 {
    font-size: 0.9em;
}

h6 {
    font-size: 0.7em;
}

sub {
    font-size: 0.8em;
    position: relative;
    top: 0.5em;
}

sup {
    font-size: 0.8em;
    position: relative;
    top: -0.5em;
}

blockquote {
    border-left: solid 4px #dbdbdb;
    font-style: italic;
    margin: 0 0 2em 0;
    padding: 0.5em 0 0.5em 2em;
}

code {
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0;
    border: solid 1px #dbdbdb;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
    margin: 0 0.25em;
    padding: 0.25em 0.65em;
}

pre {
    -webkit-overflow-scrolling: touch;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
    margin: 0 0 2em 0;
}

pre code {
    display: block;
    line-height: 1.75;
    padding: 1em 1.5em;
    overflow-x: auto;
}

hr {
    border: 0;
    border-bottom: solid 1px #dbdbdb;
    margin: 2em 0;
}

hr.major {
    margin: 3em 0;
}

.align-left {
    text-align: left;
}

.align-center {
    text-align: center;
}

.align-right {
    text-align: right;
}

.inner {
    max-width: 75em;
    margin: 0 auto;
}

@media screen and (max-width: 1280px) {
    .inner {
        max-width: 90%;
    }
}

@media screen and (max-width: 480px) {
    .inner {
        max-width: 90%;
    }
}


/* Section/Article */

section.special,
article.special {
    text-align: center;
}

section.special article,
article.special article {
    text-align: left;
}

section.wrapper,
article.wrapper {
    padding: 6em 0;
}

section.wrapper header,
article.wrapper header {
    margin-bottom: 4em;
}

section.wrapper header h2,
article.wrapper header h2 {
    font-size: 2.75em;
    margin: 0 0 .5em 0;
}

section.wrapper header p,
article.wrapper header p {
    font-size: 1em;
}

section.wrapper article header,
article.wrapper article header {
    margin: 0;
}

@media screen and (max-width: 980px) {
    section.wrapper,
    article.wrapper {
        padding: 4em 0;
    }
}

@media screen and (max-width: 736px) {
    section.wrapper,
    article.wrapper {
        padding: 3em 0;
    }
    section.wrapper header,
    article.wrapper header {
        margin-bottom: 2em;
    }
    section.wrapper header h2,
    article.wrapper header h2 {
        font-size: 2em;
    }
    section.wrapper header p,
    article.wrapper header p {
        font-size: .9em;
    }
}

@media screen and (max-width: 480px) {
    section.wrapper article,
    article.wrapper article {
        text-align: center;
    }
}

header p {
    color: #bbb;
    position: relative;
    margin: 0 0 1.5em 0;
}

header h2+p {
    font-size: 1.25em;
    margin-top: -1em;
}

header h3+p {
    font-size: 1.1em;
    margin-top: -0.8em;
}

header h4+p,
header h5+p,
header h6+p {
    font-size: 0.9em;
    margin-top: -0.6em;
}


/* Flex */

.flex {
    display: -ms-flexbox;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
}

.flex.flex-2 {
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
}

.flex.flex-2 article {
    width: 50%;
}

@media screen and (max-width: 980px) {
    .flex.flex-2 article {
        width: 100%;
        margin-bottom: 3em;
    }
    .flex.flex-2 article:last-child {
        margin-bottom: 0;
    }
}

@media screen and (max-width: 480px) {
    .flex.flex-2 br {
        display: none;
    }
}


/* Form */

form {
    margin: 0 0 2em 0;
}

form .field {
    margin-bottom: 1.5em;
}

form .field.half {
    display: inline-block;
    width: 48%;
}

form .field.half.first {
    margin-right: 3%;
}

@media screen and (max-width: 980px) {
    form .field.half {
        display: block;
        width: 100%;
    }
    form .field.half.first {
        margin-right: 0;
    }
}

label {
    color: #555;
    display: block;
    font-size: 0.9em;
    font-weight: 600;
    margin: 0 0 1em 0;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="tel"],
select,
textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: rgb(233, 0, 99);
    border-radius: 10px;
    border: none;
    border: solid 2px #FFF;
    color: #fff;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
}

input[type="text"]:invalid,
input[type="password"]:invalid,
input[type="email"]:invalid,
input[type="tel"]:invalid,
select:invalid,
textarea:invalid {
    box-shadow: none;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
select:focus,
textarea:focus {
    border-color: #4bae77;
    box-shadow: 0 0 0 1px #4bae77;
}

.select-wrapper {
    text-decoration: none;
    display: block;
    position: relative;
}

.select-wrapper:before {
    content: "";
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
}

.select-wrapper:before {
    color: #fff;
    display: block;
    height: 2.75em;
    line-height: 2.75em;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 2.75em;
}

.select-wrapper select::-ms-expand {
    display: none;
}

input[type="text"],
input[type="password"],
input[type="email"],
select {
    height: 2.75em;
}

textarea {
    padding: 0.75em 1em;
}

input[type="checkbox"],
input[type="radio"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    display: block;
    float: left;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;
}

input[type="checkbox"]+label,
input[type="radio"]+label {
    text-decoration: none;
    color: #9a9a9a;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-weight: 400;
    padding-left: 2.4em;
    padding-right: 0.75em;
    position: relative;
}

input[type="checkbox"]+label:before,
input[type="radio"]+label:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
}

input[type="checkbox"]+label:before,
input[type="radio"]+label:before {
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0;
    border: solid 1px #FFF;
    content: '';
    display: inline-block;
    height: 1.65em;
    left: 0;
    line-height: 1.58125em;
    position: absolute;
    text-align: center;
    top: 0;
    width: 1.65em;
}

input[type="checkbox"]:checked+label:before,
input[type="radio"]:checked+label:before {
    background: rgb(233, 0, 99);
    border-color: rgb(233, 0, 99);
    border-color: rgb(233, 0, 99);
    color: #ffffff;
    content: '\f00c';
}

input[type="checkbox"]:focus+label:before,
input[type="radio"]:focus+label:before {
    border-color: rgb(233, 0, 99);
    box-shadow: 0 0 0 1px rgb(233, 0, 99);
}

input[type="checkbox"]+label:before {
    border-radius: 0;
}

input[type="radio"]+label:before {
    border-radius: 100%;
}

::-webkit-input-placeholder {
    color: #c4e5d3 !important;
    opacity: 1.0;
}

:-moz-placeholder {
    color: #c4e5d3 !important;
    opacity: 1.0;
}

::-moz-placeholder {
    color: #c4e5d3 !important;
    opacity: 1.0;
}

:-ms-input-placeholder {
    color: #c4e5d3 !important;
    opacity: 1.0;
}

.formerize-placeholder {
    color: #c4e5d3 !important;
    opacity: 1.0;
}


/* Box */

.box {
    border: solid 1px #dbdbdb;
    margin-bottom: 2em;
    padding: 1.5em;
}

.box> :last-child,
.box> :last-child> :last-child,
.box> :last-child> :last-child> :last-child {
    margin-bottom: 0;
}

.box.alt {
    border: 0;
    border-radius: 0;
    padding: 0;
}

.box.person {
    border: solid 1px #FFF;
    padding: 3em 1.5em;
}

.box.person h3 {
    margin: 0;
}

.box.person .image {
    margin-bottom: 1em;
}

.box.person .image img {
    max-width: 100%;
}


/* Icon */

.icon {
    text-decoration: none;
    border-bottom: none;
    position: relative;
}

.icon:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
}

.icon>.label {
    display: none;
}


/* Image */

.image {
    border-radius: 0;
    border: 0;
    display: inline-block;
    position: relative;
}

.image img {
    border-radius: 0;
    display: block;
}

.image.left,
.image.right {
    max-width: 40%;
}

.image.left img,
.image.right img {
    width: 100%;
}

.image.round img {
    border-radius: 100%;
}

.image.left {
    float: left;
    padding: 0 1.5em 1em 0;
    top: 0.25em;
}

.image.right {
    float: right;
    padding: 0 0 1em 1.5em;
    top: 0.25em;
}

.image.fit {
    display: block;
    margin: 0 0 2em 0;
    width: 100%;
}

.image.fit img {
    width: 100%;
}

.image.main {
    display: block;
    margin: 0 0 3em 0;
    width: 100%;
}

.image.main img {
    width: 100%;
}


/* List */

ol {
    list-style: decimal;
    margin: 0 0 2em 0;
    padding-left: 1.25em;
}

ol li {
    padding-left: 0.25em;
}

ul {
    list-style: disc;
    margin: 0 0 2em 0;
    padding-left: 1em;
}

ul li {
    padding-left: 0.5em;
}

ul.alt {
    list-style: none;
    padding-left: 0;
}

ul.alt li {
    border-top: solid 1px #dbdbdb;
    padding: 0.5em 0;
}

ul.alt li:first-child {
    border-top: 0;
    padding-top: 0;
}

ul.alt.dark li {
    border-top: solid 1px rgba(0, 0, 0, 0.25);
}

ul.icons {
    cursor: default;
    list-style: none;
    padding-left: 0;
}

ul.icons li {
    display: inline-block;
    padding: 0 1em 0 0;
}

ul.icons li:last-child {
    padding-right: 0;
}

ul.icons li .icon:before {
    font-size: 2em;
}

ul.actions {
    cursor: default;
    list-style: none;
    padding-left: 0;
}

ul.actions li {
    display: inline-block;
    padding: 0 1em 0 0;
    vertical-align: middle;
}

ul.actions li:last-child {
    padding-right: 0;
}

ul.actions.small li {
    padding: 0 0.5em 0 0;
}

ul.actions.vertical li {
    display: block;
    padding: 1em 0 0 0;
}

ul.actions.vertical li:first-child {
    padding-top: 0;
}

ul.actions.vertical li>* {
    margin-bottom: 0;
}

ul.actions.vertical.small li {
    padding: 0.5em 0 0 0;
}

ul.actions.vertical.small li:first-child {
    padding-top: 0;
}

ul.actions.fit {
    display: table;
    margin-left: -1em;
    padding: 0;
    table-layout: fixed;
    width: calc(100% + 1em);
}

ul.actions.fit li {
    display: table-cell;
    padding: 0 0 0 1em;
}

ul.actions.fit li>* {
    margin-bottom: 0;
}

ul.actions.fit.small {
    margin-left: -0.5em;
    width: calc(100% + 0.5em);
}

ul.actions.fit.small li {
    padding: 0 0 0 0.5em;
}

@media screen and (max-width: 480px) {
    ul.actions {
        margin: 0 0 2em 0;
    }
    ul.actions li {
        padding: 1em 0 0 0;
        display: block;
        text-align: center;
        width: 100%;
    }
    ul.actions li:first-child {
        padding-top: 0;
    }
    ul.actions li>* {
        width: 100%;
        margin: 0 !important;
    }
    ul.actions li>*.icon:before {
        margin-left: -2em;
    }
    ul.actions.small li {
        padding: 0.5em 0 0 0;
    }
    ul.actions.small li:first-child {
        padding-top: 0;
    }
}

dl {
    margin: 0 0 2em 0;
}

dl dt {
    display: block;
    font-weight: 600;
    margin: 0 0 1em 0;
}

dl dd {
    margin-left: 2em;
}


/* Table */

.table-wrapper {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
}

table {
    margin: 0 0 2em 0;
    width: 100%;
}

table tbody tr {
    border: solid 1px #dbdbdb;
    border-left: 0;
    border-right: 0;
}

table tbody tr:nth-child(2n + 1) {
    background-color: rgba(144, 144, 144, 0.075);
}

table td {
    padding: 0.75em 0.75em;
}

table th {
    color: #555;
    font-size: 0.9em;
    font-weight: 600;
    padding: 0 0.75em 0.75em 0.75em;
    text-align: left;
}

table thead {
    border-bottom: solid 2px #dbdbdb;
}

table tfoot {
    border-top: solid 2px #dbdbdb;
}

table.alt {
    border-collapse: separate;
}

table.alt tbody tr td {
    border: solid 1px #dbdbdb;
    border-left-width: 0;
    border-top-width: 0;
}

table.alt tbody tr td:first-child {
    border-left-width: 1px;
}

table.alt tbody tr:first-child td {
    border-top-width: 1px;
}

table.alt thead {
    border-bottom: 0;
}

table.alt tfoot {
    border-top: 0;
}


/* Button */

#social-media {
    font-size: 24px;
    padding: 0.5em;
}

input[type="submit"],
input[type="reset"],
input[type="button"],
button,
.button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: transparent;
    box-shadow: inset 0 0 0 3px rgb(233, 0, 99);
    color: rgb(233, 0, 99) !important;
    border-radius: 30px;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-size: .75em;
    font-weight: 400;
    height: 3.75em;
    line-height: 3.85em;
    letter-spacing: 2px;
    padding: 0 4em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
}

input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
button:hover,
.button:hover {
    background-color: rgba(108, 192, 145, 0.15);
}

input[type="submit"]:active,
input[type="reset"]:active,
input[type="button"]:active,
button:active,
.button:active {
    background-color: rgba(108, 192, 145, 0.15);
}

input[type="submit"].icon,
input[type="reset"].icon,
input[type="button"].icon,
button.icon,
.button.icon {
    padding-left: 1.35em;
}

input[type="submit"].icon:before,
input[type="reset"].icon:before,
input[type="button"].icon:before,
button.icon:before,
.button.icon:before {
    margin-right: 0.5em;
}

input[type="submit"].fit,
input[type="reset"].fit,
input[type="button"].fit,
button.fit,
.button.fit {
    display: block;
    margin: 0 0 1em 0;
    width: 100%;
}

input[type="submit"].small,
input[type="reset"].small,
input[type="button"].small,
button.small,
.button.small {
    font-size: 0.8em;
}

input[type="submit"].big,
input[type="reset"].big,
input[type="button"].big,
button.big,
.button.big {
    font-size: 1.35em;
}

input[type="submit"].alt,
input[type="reset"].alt,
input[type="button"].alt,
button.alt,
.button.alt {
    background-color: transparent;
    box-shadow: inset 0 0 0 3px #FFF;
    color: #fff !important;
}

input[type="submit"].alt:hover,
input[type="reset"].alt:hover,
input[type="button"].alt:hover,
button.alt:hover,
.button.alt:hover {}

input[type="submit"].alt:active,
input[type="reset"].alt:active,
input[type="button"].alt:active,
button.alt:active,
.button.alt:active {}

input[type="submit"].alt.icon:before,
input[type="reset"].alt.icon:before,
input[type="button"].alt.icon:before,
button.alt.icon:before,
.button.alt.icon:before {
    color: #bbb;
}

input[type="submit"].special,
input[type="reset"].special,
input[type="button"].special,
button.special,
.button.special {
    background-color: rgb(233, 0, 99);
    color: #ffffff !important;
}

input[type="submit"].special:hover,
input[type="reset"].special:hover,
input[type="button"].special:hover,
button.special:hover,
.button.special:hover {}

input[type="submit"].special:active,
input[type="reset"].special:active,
input[type="button"].special:active,
button.special:active,
.button.special:active {
    background-color: #5ab884;
}

input[type="submit"].disabled,
input[type="submit"]:disabled,
input[type="reset"].disabled,
input[type="reset"]:disabled,
input[type="button"].disabled,
input[type="button"]:disabled,
button.disabled,
button:disabled,
.button.disabled,
.button:disabled {
    background-color: #9a9a9a !important;
    box-shadow: inset 0 -0.15em 0 0 rgba(0, 0, 0, 0.15);
    color: #fff !important;
    cursor: default;
    opacity: 0.25;
}

@media screen and (max-width: 480px) {
    input[type="submit"],
    input[type="reset"],
    input[type="button"],
    button,
    .button {
        padding: 0;
        width: 100%;
    }
}


/* Header */

.subpage {
    padding-top: 44px;
}

.subpage #header {
    background: rgb(233, 0, 99);
    top: 0;
    height: 44px;
    line-height: 44px;
    position: fixed;
}

#header {
    color: #fff;
    cursor: default;
    height: 3.25em;
    left: 0;
    line-height: 3.25em;
    position: absolute;
    text-align: right;
    top: 2em;
    width: 100%;
    z-index: 10001;
}

#header .inner {
    margin: 0 auto;
    position: relative;
}

#header .logo {
    color: #ffffff;
    display: -webkit-box;
    font-weight: 400;
    height: inherit;
    left: 0;
    line-height: inherit;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    font-size: 1em;
}

#header .logo strong {
    color: #ffffff;
    font-weight: 600;
}

#header a {
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    display: inline-block;
    padding: 0 0.75em;
    color: inherit;
    text-decoration: none;
    font-size: 1em;
}

#header a:hover {
    color: #ffffff;
}

#header a:last-child {
    padding-right: 0;
}

#header a.navPanelToggle {
    display: none;
    text-decoration: none;
    height: 4em;
    width: 4em;
    z-index: 10003;
}

#header a.navPanelToggle .fa {
    font-size: 1.25em;
}

@media screen and (max-width: 980px) {
    #header a.navPanelToggle {
        display: inline-block;
    }
}

@media screen and (max-width: 736px) {
    #header a {
        padding: 0 0.5em;
    }
}

@media screen and (max-width: 980px) {
    #header {
        top: 1em;
    }
}

@media screen and (max-width: 736px) {
    #header {
        top: .5em;
    }
}

@media screen and (max-width: 480px) {
    #header {
        font-size: .9em;
    }
}


/* Nav */

@media screen and (max-width: 980px) {
    #nav {
        display: none;
    }
}

#navPanel {
    -moz-transform: translatex(20em);
    -webkit-transform: translatex(20em);
    -ms-transform: translatex(20em);
    transform: translatex(20em);
    -moz-transition: -moz-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    -webkit-transition: -webkit-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    -ms-transition: -ms-transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, visibility 0.2s ease-in-out;
    -webkit-overflow-scrolling: touch;
    visibility: hidden;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    background: rgb(233, 0, 99);
    color: #daefe3;
    height: 100%;
    max-width: 80%;
    width: 20em;
    padding: 0.5em 1.25em;
    z-index: 10010;
}

#navPanel.visible {
    -moz-transform: translatex(0);
    -webkit-transform: translatex(0);
    -ms-transform: translatex(0);
    transform: translatex(0);
    box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
    visibility: visible;
}

#navPanel a:not(.close) {
    border-top: solid 1px #FFF;
    color: #daefe3;
    font-weight: 600;
    display: block;
    padding: 0.75em 0;
    text-decoration: none;
    font-weight: 400;
}

#navPanel a:not(.close):first-child {
    border: none;
}

#navPanel .close {
    text-decoration: none;
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    color: #daefe3;
    cursor: pointer;
    display: block;
    height: 4em;
    padding-right: 1.25em;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
    vertical-align: middle;
    width: 5em;
}

#navPanel .close:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
    content: '\f00d';
    width: 3em;
    height: 3em;
    line-height: 3em;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
}

#navPanel .close:hover {
    color: inherit;
}


/* Banner */

#banner {
    padding: 8em 0 9em 0;
    background-image: url(../../images/banner.jpg);
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;
}

#banner:before {
    content: '';
    background: rgba(75, 75, 93, 0.85);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

#banner .inner {
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 10005;
    padding-top: 8em;
}

#banner h1 {
    font-size: 3.5em;
    font-weight: 400;
    color: #fff;
    line-height: 1em;
    margin: 0 0 1em 0;
    padding: 0;
}

#banner h3 {
    font-weight: 400;
    color: #fff;
    margin: 0;
    font-size: 1.5em;
}

#banner .icon {
    color: rgb(233, 0, 99);
    font-size: 2em;
}

#banner p {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 1.75em;
}

#banner .flex {
    -ms-flex-pack: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto 4em auto;
}

#banner .flex div {
    border-right: 2px solid rgba(255, 255, 255, 0.2);
    padding: 0 8em;
}

#banner .flex div:last-child {
    border: none;
    padding-right: 0;
}

#banner .flex div:first-child {
    padding-left: 0;
}

#banner .flex div p {
    margin: 0;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    #banner {
        background-attachment: scroll;
    }
}

@media screen and (max-width: 1680px) {
    #banner .flex div {
        padding: 0 6em;
    }
}

@media screen and (max-width: 1280px) {
    #banner {
        padding: 7em 0 6em 0;
    }
    #banner .inner {
        padding-top: 6em;
    }
    #banner h1 {
        font-size: 3em;
    }
    #banner h3 {
        font-size: 1.25em;
    }
    #banner .flex div {
        padding: 0 3em;
    }
}

@media screen and (max-width: 980px) {
    #banner {
        background-attachment: scroll;
        padding: 5em 0 4em 0;
    }
    #banner .inner {
        padding-top: 4em;
    }
    #banner h1 {
        font-size: 2.5em;
    }
    #banner h3 {
        font-size: 1.25em;
    }
    #banner .flex div {
        font-size: .85em;
        padding: 0 1.5em;
    }
}

@media screen and (max-width: 736px) {
    #banner {
        padding: 4em 0 3em 0;
    }
    #banner .inner {
        padding-top: 3em;
    }
    #banner h1 {
        font-size: 2em;
    }
    #banner h3 {
        font-size: 1.25em;
    }
    #banner .flex {
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 0 auto 2em auto;
    }
    #banner .flex div {
        font-size: .85em;
        padding: 0;
        border: none;
        margin-bottom: 1em;
    }
}

@media screen and (max-width: 480px) {
    #banner h1 {
        font-size: 1.5em;
    }
    #logo {
        width: 4em;
    }
    #logo-name {
        margin-top: 0.3em;
    }
    #content-team {
        display: grid;
    }
    .card_employ {
        margin: 1em 2em 1em 2em;
    }
}


/* Footer */

#footer {
    padding: 6em 0;
    background: rgb(233, 0, 99);
    color: #fff;
    text-align: center;
}

#footer h3 {
    color: #FFF;
    margin-bottom: 2em !important;
}

#footer label {
    text-align: left;
    color: #FFF;
}

#footer .copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8em;
    margin: 0 0 2em 0;
    padding: 0;
}

#footer .copyright a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
}

#footer .copyright a:hover {
    color: #FFF;
}

#content-team {
    display: flex;
}

@media screen and (max-width: 980px) {
    #footer {
        padding: 4em 0;
    }
    #logo {
        width: 4em;
    }
    #logo-name {
        margin-top: 0.3em;
    }
    #content-team {
        display: grid;
    }
    .card-employ {
        margin: 1em 2em 1em 2em;
    }
}

@media screen and (max-width: 736px) {
    #footer {
        padding: 3em 0;
    }
    #logo {
        width: 4em;
    }
    #logo-name {
        margin-top: 0.3em;
    }
    #content-team {
        display: grid;
    }
    .card-employ {
        margin: 1em 2em 1em 2em;
    }
}
