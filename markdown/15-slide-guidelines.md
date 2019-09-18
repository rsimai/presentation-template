<!-- .slide: data-state="normal" id="design-goals" data-timing="30" -->
## Template Instructions

<h3>
This slide outlines the basic guidelines and instructions to help you
use the SUSE presentation template.
</h3>

*   Remove the `15-slide-guidelines.md` section from `index.html` before
    projecting, presenting, or sending to anyone.

*   The goal of this template is to maintain a clear, professional and
    consistent tone and appearance among all SUSE presentations. The
    default text boxes in the presentation represent the margins or
    “working area” to which all text, graphics and diagrams should
    conform. These margins are not arbitrary, and they are not meant to
    constrict creativity; when used correctly, they keep the slides
    focused and leave enough white space so audiences can easily digest
    the presented material. If you need more room than the margins
    allow, we suggest moving content to another slide.


<!-- .slide: class="col-container" data-state="normal" id="color-palette" -->
## Color Palette

<div class="palette-text">
    <p>
        <b>Colors:</b> Approved RGB colors for SUSE&reg;
        presentations have been outlined to ensure color accuracy.
    </p>

    <hr />

    <h3 style="margin: 30px 0px;">How to use these SUSE colors:</h3>

    <p>
        Simply use CSS classes, e.g.
        <ul>
            <li>
                <code class="fg-bright-orange">
                    &lt;p class="fg-bright-orange"&gt;
                </code>
            </li>
            <li>
                <code class="bg-bright-purple" style="color: white; padding: 6px;">
                    &lt;li class="bg-bright-purple" style="color: white"&gt;
                </code>
            </li>
        </ul>
        or
        <a href="http://sass-lang.org/guide">Sass</a>
        <a href="http://sass-lang.org/guide#topic-2">variables</a>, e.g.
        <ul>
            <li>
                <code class="fg-bright-royal">
                        .my-class { color: $bright‑royal; }
                </code>
            </li>
        </ul>
    </p>

    <hr />

    <p>
        For more information on SUSE color palette guidelines,
        visit <a href="www.suse.com/brandcentral">www.suse.com/brandcentral</a>
    </p>
</div>

<div class="big-swatch bg-SUSE-green">SUSE Green</div>
<div class="big-swatch bg-dark-blue">Dark Blue</div>

<br clear="left" />

<div class="swatch bg-bright-green fg-bright-blue">Bright Green</div>
<div class="swatch bg-medium-green">Medium Green</div>
<div class="swatch bg-bright-teal">Bright Teal</div>

<div class="swatch bg-light-blue">Light Blue</div>
<div class="swatch bg-bright-blue">Bright Blue</div>
<div class="swatch bg-bright-royal">Bright Royal</div>

<br clear="left" />

<div class="swatch bg-dark-purple">Dark Purple</div>
<div class="swatch bg-bright-purple">Bright Purple</div>
<div class="swatch bg-bright-magenta">Bright Magenta</div>
<div class="swatch bg-light-magenta">Light Magenta</div>

<br clear="left" />

<div class="swatch bg-dark-orange">Dark Orange</div>
<div class="swatch bg-medium-orange">Medium Orange</div>
<div class="swatch bg-light-yellow fg-medium-orange">Light Yellow</div>

<br clear="left" />

<div class="swatch bg-dark-neutral">Dark Neutral</div>
<div class="swatch bg-medium-dark-neutral">MD/Dark Neutral</div>
<div class="swatch bg-medium-neutral">Medium Neutral</div>
<div class="swatch bg-light-neutral fg-medium-dark-neutral">Light Neutral</div>
<div class="swatch bg-tint-neutral fg-medium-dark-neutral">Tint Neutral</div>

</div>


<!-- .slide: data-state="normal" id="graphics-and-typeface" data-timing="60s" -->
## Graphics and Typeface

<div class="slide-section">
    <h3> Primary Icon Color </h3>
    <img data-src="images/SUSE/bars.png" style="width: 150px;" />
    <img data-src="images/SUSE/disk.png" style="width:  80px;" />
    <div class="icons-typeface">
        <p>
            <b>Icons:</b> Icon libraries are available for download in
            bubble and 3-D designs. The primary color for SUSE is
            green.
        </p>
        <p>
            <b>Typeface:</b> Arial is the typeface for all SUSE
            presentations.
        </p>
    </div>
</div>
<div class="slide-section">
    <h3> Bubble </h3>
    <img data-src="images/SUSE/folder.png" style="width:  100px;" />
    <img data-src="images/SUSE/computer.png" style="width:  100px;" />
    <img data-src="images/SUSE/right-arrow.png" style="width:  100px;" />
    <img data-src="images/SUSE/squeeze-arrows.png" style="width:  100px;" />
    <img data-src="images/SUSE/USB.png" style="width:  100px;" />
    <img data-src="images/SUSE/bug.png" style="width:  100px;" />
    <img data-src="images/SUSE/cylinder.png" style="width:  100px;" />
    <img data-src="images/SUSE/brain.png" style="width:  100px;" />
</div>
<div class="slide-section">
    <h3> 3D </h3>
    <img data-src="images/SUSE/desktop-computer.png" style="width:  80px;" />
    <img data-src="images/SUSE/pie.png" style="width:  80px;" />
    <img data-src="images/SUSE/meters.png" style="width:  80px;" />
    <img data-src="images/SUSE/office.png" style="width:  80px;" />
    <img data-src="images/SUSE/printer.png" style="width:  80px;" />
    <img data-src="images/SUSE/box.png" style="width:  80px;" />
    <img data-src="images/SUSE/app-window.png" style="width:  80px;" />
    <img data-src="images/SUSE/darts.png" style="width:  80px;" />
</div>


<!-- .slide: data-state="normal" id="editorial-guidelines" class="guidelines" -->
## Editorial Guidelines

<h3>
To help you achieve a consistent, professional message, general
guidelines about SUSE style and grammar usage are outlined below.
</h3>

*   **Acronyms**: Acronyms may be used for industry terms provided you
    spell out the terms at first reference in body copy.  Tables and
    charts are an exception when real estate is limited. Example: The
    Independent Software Vendor (ISV) solution …

*   **NEVER** abbreviate product names in external presentations.

*   **Capitalization**: The title of the presentation and the title and
    subtitle of each slide are the only elements that should be
    capitalized in title case. All other elements should be
    capitalized in sentence case (only the first word of each sentence
    capitalized). This includes bullet points, call outs, emphasized
    words, table headings and captions.

*   **Hyphenated compounds within titles**: If a hyphenated compound
    appears in a title, lowercase the word following the hyphen; for
    example, “Low-cost Alternatives”.

*   **Bulleted lists**: To set off the lead text in bulleted lists (the
    words “Bulleted lists” in this case), use colons. Try to keep
    information presented in bulleted lists short, so it is easy for
    audiences to consume.

*   **Punctuation within bulleted lists**: Be consistent when punctuating
    bulleted lists. For example, if you choose to use a complete
    sentence in the first bullet, use complete sentences, and
    punctuate accordingly for all bullets on that slide.

*   **General punctuation**: Use “and” instead of “&” except in proper
    names (e.g., AT&T). Write out percent signs.  Tables and charts
    are the exception when real estate is limited.


<!-- .slide: data-state="normal" id="trademarking-guidelines" class="guidelines" data-menu-title="Trademarking Guidelines" -->
## Slide Trademarking Guidelines

<h3>The following guidelines are basic rules for
product naming and trademarking:</h3>

*   **Product naming:** Use the full legal product name at all
    references within the presentation; no product acronyms or
    abbreviations are allowed.

*   **Product trademarking:** SUSE&reg; products and
    selected technologies should be trademarked at first reference on
    each slide. This will help us legally protect these marks.

*   **Third-party trademarking:** Except for Micro
    Focus&reg;, SUSE does not reference third-party
    trademarks.

*   **Trademark design:** Trademarks should be large enough to be
    recognized, but small enough so they do not distract from the
    content.

*   **Trademark placement:** The registered trademark symbol
    (&reg;) should go on the baseline of the text. The
    trademark and service mark symbols (™, SM) should be arranged so
    that the top of the symbol is level with the top of the last
    letter of the word being marked.
