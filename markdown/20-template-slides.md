<!-- .slide: data-state="cover" id="cover-page" data-timing="20" -->
<div class="date-location">March 20, 2020, CITY NAME</div>

<div class="title">
    <h1>Presentation Title</h1>
    <h2>Subhead or Second Line</h2>
</div>


<!-- .slide: data-state="cover-image" id="cover-page-image" data-timing="20" data-menu-title="Cover slide with QR code" -->
<div class="title">
    <h1>SUSE<sub>&reg;</sub> Presentation</h1>
    <h2>Guidelines and Template</h2>
</div>

<div class="date-location">March 20, 2020, CITY NAME</div>

<div class="image">
    <div class="qr-embedded-wrapper">
        <div class="qrcode" id="qrcode-talk-embedded" />
    </div>
    <h2><a href="https://goo.gl/FIXME" target="_blank"
           id="talk-embedded">https://goo.gl/FIXME</a></h2>
</div>


<!-- .slide: data-state="normal toc" id="agenda-1col" data-timing="20s" data-menu-title="Agenda with one column" -->
## Agenda with one column

<div class="breadcrumbs">Breadcrumbs</div>

1. Section Title
> Description of the section reperum volest licius

1. Section Title
> Description of the section reperum volest licius

1. Section Title
> Description of the section reperum volest licius

1. Section Title
> Description of the section reperum volest licius

1. Section Title
> Description of the section reperum volest licius


<!-- .slide: data-state="normal toc" id="agenda-2col" data-timing="20s" data-menu-title="Agenda with two columns" -->
## Agenda with two columns

<div class="breadcrumbs">Breadcrumbs</div>

1. Section Title
> Description of the section

1. Section Title
> Description of the section

1. Section Title
> Description of the section

1. Section Title
> Description of the section

1. Section Title
> Description of the section

<!-- .element class="column" -->

1. Section Title
> Description of the section

1. Section Title
> Description of the section

1. Section Title
> Description of the section

1. Section Title
> Description of the section

1. Section Title
> Description of the section

<!-- .element class="column" -->


<!-- .slide: data-state="normal contact" id="contact" data-timing="20s" data-menu-title="Contact" -->
## Contact

<div class="breadcrumbs">Breadcrumbs</div>

<div class="contacts">
  <div class="contact">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.svg" alt="Picture" />
    </figure>
    <div class="name">Firstname Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>

  <div class="contact">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.svg" alt="Picture" />
    </figure>
    <div class="name">Firstname Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>

  <div class="contact">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.svg" alt="Picture" />
    </figure>
    <div class="name">Firstname Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>

  <div class="contact">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.svg" alt="Picture" />
    </figure>
    <div class="name">Firstname Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>
</div>


<!-- .slide: data-state="divider-image" id="divider-image" data-timing="20s" data-menu-title="Divider with image" -->
# This is a divider with an image

<a title="By Fraser Hart (http://www.hermitagebay.com) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3ABeach_pano.jpg">
    <img alt="Beach pano" src="images/beach-pano-16x9.jpg"/>
</a>


<!-- .slide: data-state="divider" id="divider-no-image" data-timing="20s" data-menu-title="Divider without image" -->
# This is a divider without an image


<!-- .slide: data-state="subchapter" id="subchapter" data-timing="20s" data-menu-title="Subchapter page" -->
# This is a sub chapter page without an image


<!-- .slide: data-state="normal" id="nested-lists" data-timing="20s" data-menu-title="Standard text slide" -->
## Slide title

<div class="breadcrumbs">Breadcrumbs</div>

*   First-level bullet
    *   Second-level bullet
        *   Third-level bullets are a bad idea
            *   Fourth-level bullets are a terrible idea

Before loading up your presentation with bulleted lists, make sure to
[read up on whether that's a good idea](https://www.google.com/search?q=slides+bullets).


<!-- .slide: data-state="normal" id="columns" data-timing="20s" data-menu-title="Content on two columns" -->
## Content on two columns

<div class="breadcrumbs">Breadcrumbs</div>

This slide has content on 2 columns.
Sizes can vary: append `-small` or `-large` to the style name

<!-- .element class="column" -->

![Image in column two](../images/beach-pano-16x9.jpg)

<!-- .element class="column" -->


<!-- .slide: data-state="normal" id="syntax-highlighting" -->
## Code syntax highlighting

<div class="breadcrumbs">Breadcrumbs</div>

Works out of the box using [`highlight.js`](https://highlightjs.org/)
and the Monokai theme:

```js
Reveal.addEventListener('somestate', function() {
    // TODO: Sprinkle magic
}, false );
```

in different languages:

```ruby
# Ping with 5 seconds timeout and a single attempt
def ping! node
  command = ["ping", "-q -c 5 -w 5 #{node.ip}"]
  result = exec!(*command)
  if result.exit_code.nonzero?
    raise PingError.new(command, result.output)
  end
  result, :foo
end
```


<!-- .slide: data-state="blank" class="full-screen" id="live-demo" data-menu-title="Live demo" -->
<!-- This will embed a terminal in the slide, so that you can do live demos from the CLI.  You need to have shellinabox installed and then run the bin/shellinabox wrapper script -->
<iframe src="http://localhost:4242" />


<!-- .slide: data-state="divider" id="full-screen-images" data-timing="10s" -->
# Full screen images


<!-- .slide: data-state="blank-slide" class="full-screen" id="full-screen-image-1" data-menu-title="Full screen image" data-timing="10s" -->
<a title="By Fraser Hart (http://www.hermitagebay.com) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3ABeach_pano.jpg">
    <img alt="Beach pano" src="images/beach-pano-16x9.jpg"/>
</a>
