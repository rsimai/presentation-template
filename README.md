# SUSE-themed reveal.js presentation template

This repo provides a template for presentation slide decks which aims
to be virtually identical to the SUSE corporate style template
provided in LibreOffice Impress format.

**You can [view the template slides
online](https://opensource.suse.com/presentation-template/) here**; press
`Space` or `n` (not the right arrow) to advance 1 slide at a time.

It is based on [a template by Florian
Haas](https://github.com/fghaas/presentation-template/) which uses
[`reveal.js`](https://github.com/hakimel/reveal.js/) (by Hakim
El-Hattab and contributors) as the underlying presentation technology.

Building slides with `reveal.js` has a number of significant
advantages over LibreOffice Impress:

-   Write slides in Markdown!

-   Develop your slide content with `git`!

    -   Collaborate on content via pull requests!

    -   Compare versions with `git diff`!

    -   Use branches when creating a new presentation on an existing
        one, and use tags to mark every "release" version which you
        use for a public presentation.  No more having to hoard many
        slightly different versions of the same file!

    -   For slides which get copied from deck to deck many times over
        several years, track the source and development history via
        `git blame`.

-   Since the browser is the renderer, you can view the slide-deck on
    any device, anywhere.  Want to show it to someone when you're out
    at lunch?  No problem - just use your phone.

-   The content is just HTML, CSS, and Javascript, so the sky is the
    limit for how it can be extended.  Want to switch slides by waving
    your hands around in the air, or poll the audience and display a
    slide with a dynamically updating graph of the poll results, or get
    a tele-prompter via Google Glass?
    [No problem!](https://youtu.be/Pu1QE5hh9EY)

-   Dynamically generate QR codes for any URL.

-   (Optionally) publish your presentations via
    [GitHub Pages](https://pages.github.com/) hosting, or any other
    web server.  In large lecture halls, people far away or with poor
    eyesight can follow along on their laptops (and even have their
    slides automatically advance when yours do!)

-   Many keyboard shortcuts for navigation (press `?` to see them).

-   Aspect ratio can be easily switched between 16x9 and 4x3, since it's
    just HTML and CSS.

-   [Many cool plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware)
    and other tricks to play around with, e.g.

    -   [`chalkboard`](https://github.com/rajgoel/reveal.js-plugins/tree/master/chalkboard) -
        turn your slides into a chalkboard for real-time drawing

    -   play recorded screencast demos from within a slide, as pure HTML
        via [`TermRecord`](https://github.com/theonewolf/TermRecord),
        or as a video via
        [`asciinema`](https://github.com/asciinema/asciinema.org/)

    -   [`shellinabox`](https://github.com/shellinabox/shellinabox) - do
        live demos from within a shell embedded in a slide

    -   [`stermie`](https://github.com/ddiss/stermie/) - connect to a QEMU
        virtual machine from a terminal window embedded in a slide, e.g.
        start QEMU with `-serial websocket:127.0.0.1:45252,server,nowait`
        then add to a slide:
        `<iframe src="https://ddiss.github.io/stermie/#url=ws://127.0.0.1:45252 />`

    -   Use any Javascript library to dynamically generate content,
        e.g. [`git` commit graphs](https://sap-oc.github.io/openstack-boston-presentation/#/github-branches-tags)

-   Automatic code syntax-highlighting via
    [`highlight.js`](https://highlightjs.org/), themed in SUSE
    colours.

-   [Navigation menu](https://denehyg.github.io/reveal.js-menu/#/titles)
    to easily jump around between slides (just press the `m` key)

-   [Zoom to 1,000 feet above your presentation](https://github.com/hakimel/reveal.js/#overview-mode)
    to see the whole thing laid out in two dimensions (one column per
    section), then swoop back in to the slide you want.

It also has feature parity with LibreOffice Impress in many respects,
e.g.:

-   Presentation mode where you can view speaker notes, timings, and
    the next slide, in a separate window.

-   Export to PDF

-   [Incorporate LibreOffice diagrams](LibreOffice-Draw.md)

For more information on `reveal.js`, watch Florian's OSCON 2014
presentation:

[![Thumbnail of OSCON 2014 presentation video on YouTube](images/OSCON2014-thumbnail.png)](https://youtu.be/4gfsEcD9b94)

Of course, the slides for that talk use this same approach, so [they
are hosted here on GitHub Pages](http://fghaas.github.io/oscon2014-presentationtoolbox/),
and you can also examine [the source code for them](https://github.com/fghaas/oscon2014-presentationtoolbox).

## How to use

See [the USAGE.md file](USAGE.md).

## Feedback

If you find the content in this repo useful, it would be great if you
could let Florian and Adam know. You could either star this repo, or
even better, send us
[happiness packets](https://www.happinesspackets.io) :-)

Also, if you notice any areas for improvement, please submit issues
and pull requests via
[this repository](https://github.com/SUSE/presentation-template/).

Thanks!
