# How to use this presentation

## Getting started

Firstly, `git-clone` this repository to a directory name which
reflects your new presentation, e.g.

    # clone via ssh
    git clone git@github.com:SUSE/presentation-template.git my-new-presentation

or

    # clone via https
    git clone https://github.com/SUSE/presentation-template.git my-new-presentation

It is recommended to treat each presentation as a separate repository
rather than separate branches within a single repository, even though
they all come from the same starting point.  This is because when
publishing via GitHub Pages (see below), you will need one GitHub
repository per presentation.

### `presentation-template` and GitHub forking

It is *not* recommended to first click GitHub's `fork` button to fork
this repository to form the basis for your new presentation, because
[that can only be done
once](https://github.com/isaacs/github/issues/1094), so it would not
work for any subsequent presentations you wanted to create.
Consequently it is recommended to reserve your GitHub fork of this
repository purely for sending pull requests in case you find anything
in this repository which can be improved.

Also, there are no downsides to not having each presentation as a
GitHub fork of this template.  If you eventually have multiple
presentations each in its own repository, and you want to share
certain changes between them (e.g. tweaks to a CSS file, or
introduction of a new reveal.js plugin which you particularly like),
you can still set up git remotes which point to the other
presentations, allowing you to push and pull between them.

## Layout of files and directories

The main content of this presentation is defined by Markdown files
under the [`markdown/`](markdown) directory.  Each of these files
effectively corresponds to a section as shown by
the [`reveal.js-menu`](https://github.com/denehyg/reveal.js-menu)
which appears when you are viewing the presentation and press `m`.
The order in which the Markdown files are assembled into the final
presentation is defined in [`index.html`](index.html).

Images live in the [`images/`](images) directory.

## Hosting via GitHub Pages

The easiest way to publish this presentation is via GitHub Pages.
[Fork this repo](https://help.github.com/articles/fork-a-repo/) and
make any required changes.

When using GitHub Pages, in addition to the branch on which you do
your regular work (typically `master`), there also needs to be a
`gh-pages` which tells GitHub what to render via its web servers.
Once the content in your regular branch is ready to be published,
run [`./bin/update-gh-pages.sh`](bin/update-gh-pages.sh) to update the
`gh-pages` branch and push it to GitHub.  Alternatively merge any
updates from your regular branch into `gh-pages`, and push both
branches.  Your presentation will then be rendered
to [GitHub Pages](https://pages.github.com/) at a URL of the form:

-   http://*username*.github.io/*presentation-repo-name*

You can share the URL immediately, and GitHub will host it for you,
indefinitely, for free.

## Theming

The theme is defined
in [`css/reveal-override.scss`](css/reveal-override.scss)
using [Sass](http://sass-lang.com/); if you update this, you will need
to re-compile into `css/reveal-override.css` via:

    $ sass --update css

If you are doing continual development on the file, then run this in
the background to automatically re-compile every time the `.scss` file
is changed:

    $ sass --watch css

If you are using GitHub Pages, make sure that the latest versions of
the generated `.css` files are committed and pushed to the remote
`gh-pages` branch.
The [`./bin/update-gh-pages.sh`](bin/update-gh-pages.sh) script serves
as an example of how to automate this.

## Running things locally

Whilst editing slides it is strongly recommended to render your slides
locally, rather than on GitHub Pages, so that you can see your edits
take immediate effect without having to `git push` each change.  To
do this, a few simple steps are required.

### Retrieve the dependencies

Use the provided `.gitmodules` file to automatically clone local
copies of `reveal.js`,
[`qrcodejs`](https://davidshimjs.github.io/qrcodejs/), and
[`reveal.js-menu`](https://github.com/denehyg/reveal.js-menu):

    git submodule init
    git submodule update

### Generate the stylesheet

Generate the CSS with Sass as described above.  The `--watch` option
is strongly recommended for continuous development.

### Serve the files via a web server

The files must be served by a local web server.

#### Python webserver

If you have Python installed, the easiest way is probably to run this
one-line command from the repository:

Python 2:

    python -m SimpleHTTPServer 8000

Python 3:

    python -m http.server 8000

#### Apache

Alternatively if you already have Apache installed, you can just move
or symlink the repository into Apache's `DocumentRoot` or some other
directory which Apache is configured to serve.  For example, Apache
is often configured to serve all files under `~/public_html`, so you
could do:

    ln -s ~/git/my-presentation ~/public_html/

and then access your presentation from

-   http://localhost/~yourusername/my-presentation/

#### lighttpd

If you are using [`lighttpd`](https://www.lighttpd.net/), you may also
want to set the following options:

    dir-listing.encoding = "utf-8"
    server.dir-listing   = "enable"
    server.modules      += ( "mod_userdir" )
    userdir.path         = "public_html"

to achieve a similar result using `~/public_html`.
