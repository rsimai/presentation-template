// More info about config
// - https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    // If you change these, make sure $slide-width and $slide-height in
    // css/_variables.scss are also updated accordingly:
    width: 1600,
    height: 900,

    margin: 0.05,

    controls: true, // press C to toggle
    controlsTutorial: true,
    slideNumber: "c",
    progress: true,
    history: true,
    center: false,

    defaultTiming: 120,

    // theme: "black", // this has no effect apparently, too many SUSE overrides
    transition: 'none', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMenu, RevealZoom, RevealMath ],

    menu: {
        themes: false,
        transitions: false,
        openButton: false,
        openSlideNumber: true,
        markers: true
    },

});

Reveal.configure({
    keyboard: {
        13: 'next', // go to the next slide when the ENTER key is pressed
        27: function() {}, // do something custom when ESC is pressed
        32: null, // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
        // Make 'C' toggle controls
        67: function() {
            Reveal.configure({ controls: ! Reveal.getConfig()['controls'] });
        },
    },
    pdfSeparateFragments: false,
    pdfMaxPagesPerSlide: 1
});

// Left/right mouse click to advance to next / previous slides.
if (false) {
  window.addEventListener("mousedown", handleClick, false);
  window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
  function handleClick(e) {
    e.preventDefault();
    if(e.button === 0) Reveal.next();
    if(e.button === 2) Reveal.prev();
  }
}
