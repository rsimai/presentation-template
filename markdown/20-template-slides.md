<!-- .slide: data-state="cover" id="cover-page" data-timing="20" -->
<div class="date-location">31 May 2021</div>

<div class="title">
    <h1>This is a title slide with an infinity image</h1>
    <h2>This is a subheading if you wish to add further details. Ignore if you don't.</h2>
</div>


<!-- .slide: data-state="cover-alternate" id="cover-page-alternate" data-timing="20" data-menu-title="Cover slide (alternate)" -->
<div class="title">
    <h1>This is a title slide with an infinity image</h1>
    <h2>This is a subheading if you wish to add further details. Ignore if you don't.</h2>
</div>

<div class="date-location">31 May 2021</div>


<!-- .slide: data-state="normal toc" id="agenda" data-timing="20s" data-menu-title="Agenda with one column" -->
#  Agenda

1. Section One
> Add session details

1. Section Two
> Add session details

1. Lunch
> Add session details

1. Section Three
> Add session details


<!-- .slide: data-state="normal contact" id="contact" data-timing="20s" data-menu-title="Contact" -->
# Introducing the team

<div class="contacts">
  <div class="contact midnight">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.png" alt="Picture" />
    </figure>
    <div class="name">Firstname<br/>Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>

  <div class="contact">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.png" alt="Picture" />
    </figure>
    <div class="name">Firstname<br/>Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>

  <div class="contact waterhole">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.png" alt="Picture" />
    </figure>
    <div class="name">Firstname<br/>Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>

  <div class="contact persimon">
    <figure class="picture">
      <img data-src="../images/SUSE/user-placeholder.png" alt="Picture" />
    </figure>
    <div class="name">Firstname<br/>Lastname</div>
    <div class="job">Job Title</div>
    <div class="email">firstname.lastname@suse.com</div>
    <div class="phone">+49 123 456 789</div>
  </div>
</div>


<!-- .slide: data-state="divider" id="divider" data-timing="20s" data-menu-title="Divider with image" -->
# This is a divider with an image

## This is a subheading if you wish to add further details to the slide. Ignore if you don't.

<a title="By Fraser Hart (http://www.hermitagebay.com) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3ABeach_pano.jpg">
    <img alt="Beach pano" src="images/beach-pano-16x9.jpg"/>
</a>


<!-- .slide: data-state="subdivider" id="subdivider" data-timing="20s" data-menu-title="Subdivider slide" -->
# This is a sub divider slide

## This is a subheading if you wish to add further details to the slide. Ignore if you don't.


<!-- .slide: data-state="divider blue" id="divider-blue" data-timing="20s" data-menu-title="Blue divider" -->
# This is a blue divider with an image

## This is a subheading if you wish to add further details to the slide. Ignore if you don't.

<a title="By Fraser Hart (http://www.hermitagebay.com) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3ABeach_pano.jpg">
    <img alt="Beach pano" src="images/beach-pano-16x9.jpg"/>
</a>


<!-- .slide: data-state="subdivider blue" id="subdivider-blue" data-timing="20s" data-menu-title="Blue subdivider slide" -->
# This is a sub divider slide

## This is a subheading if you wish to add further details to the slide. Ignore if you don't.


<!-- .slide: data-state="normal" id="nested-lists" data-timing="20s" data-menu-title="Standard text slide" -->
# Slide title

## This is a subheading if you wish to add further details to the slide. Ignore if you don't.

*   First-level bullet
    *   Second-level bullet
        *   Third-level bullets are a bad idea
            *   Fourth-level bullets are a terrible idea

Before loading up your presentation with bulleted lists, make sure to
[read up on whether that's a good idea](https://www.google.com/search?q=slides+bullets).


<!-- .slide: data-state="normal" id="columns" data-timing="20s" data-menu-title="Content on two columns" -->
# Content on two columns

This slide has content on 2 columns.
Sizes can vary: append `-small` or `-large` to the style name

<!-- .element class="column" -->

![Image in column two](../images/beach-pano-16x9.jpg)

<!-- .element class="column" -->


<!-- .slide: data-state="normal" id="syntax-highlighting" -->
# Code syntax highlighting

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
