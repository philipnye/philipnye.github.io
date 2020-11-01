---
layout: post
title: "Mapping school absence during the second wave"
---

Schools are currently doing their best to educate their pupils while dealing with [higher than average levels of absence](https://www.bbc.co.uk/news/education-54695618) due to the pandemic.

Most of the data that has been made available on school absence has been at national level, but last week a parliamentary question [elicited some figures at local authority-level](https://questions-statements.parliament.uk/written-questions/detail/2020-10-16/104751). Specifically upper-tier LA-level - the level at which education is organised in England.

As part of a [blogpost that FFT Education Datalab colleagues and I published with Professor Simon Burgess from the University of Bristol](https://ffteducationdatalab.org.uk/2020/10/pupils-in-the-poorest-areas-of-the-country-are-missing-the-most-schooling/), we decided to make a hexmap to show how absence rates differ around the country during the second wave of coronavirus.

I struggled to find other examples of hexmaps at upper-tier LA-level, so this is a brief record of my work. If you're interested in what the finished product looked like, this is it:

<div id="map1" class="d3-map"></div>
<link rel='stylesheet' href='/charts/absence-hexmap/styles.css' type='text/css' media='screen,projection'/>
<link rel="stylesheet" type="text/css" href="//fast.fonts.net/cssapi/28741cf9-5a4e-4d58-86d0-44c7003fd4e3.css"/>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.25.6/d3-legend.min.js'></script>
<script src='/assets/js/d3-hexjson-1.1.0/d3-hexjson.min.js'></script>
<script src='/charts/absence-hexmap/absence_hexmap.js'></script>
<noscript>This visualisation requires JavaScript, which is turned off in your browser.</noscript>

### Hex appeal
The visualisation is built in D3, and utilises a [D3 plugin](https://github.com/olihawkins/d3-hexjson) from the fantastic Oli Hawkins that makes it a cinch to produce hexmaps given a hexJSON file. HexJSON is a format [devised by ODI Leeds](https://odileeds.org/projects/hexmaps/hexjson.html) specifically for this kind of mapping.

As mentioned, I couldn't find a good source for an upper-tier LA hexJSON file. Among a wealth of resources published by [ODI Leeds](https://github.com/odileeds/hexmaps/tree/gh-pages/maps), there was one for upper-tier LAs (`uk-covid-19.hexjson`), but I wasn't keen on the resulting hexmap<sup>[1](#footnote1)</sup>. So I've taken that file as a starting point, but reworked it quite substantially to end up with the map above. You can find my code, and my hexJSON file I came up with, [here](https://github.com/FFTEduDatalab/absence-hexmap).

The result is something I'm happy with - while being an approximation of England's geography, I think it maintains a lot of important features when it comes to positioning.

That's not to say it's perfect. A number of London LAs end up being coastal, which I think is unnavoidable in a map of this form. (Feedback from [the University of Bristol's Professor Rich Harris](https://twitter.com/profrichharris) suggested doing London as an insert within the map, which I might attempt at some later point.)

The biggest crime that I'm aware of occurs in the east of the country, where Central Bedfordshire butts up against Doncaster, and Bedford against Rotherham.

But the great thing is that if anyone else is keen to tweak the hexJSON file then it's very easy to do so using [ODI Leeds's hexmap builder](https://odileeds.org/projects/hexmaps/builder.html).<sup>[2](#footnote1)</sup> And I'd welcome any improvements you can make.

<a name="footnote1">1</a>: _It contained a number of holes, and some things that didn't seem to mirror real-world geography that well. Being from Bury, the position of Bury, Bolton and Oldham stood out as one, but other areas also looked as if they could be improved._

<a name="footnote1">2</a>: _I'm sure you could also use it as the basis of a game of 80s/90s classic Blockbuster if you were so inclined._
