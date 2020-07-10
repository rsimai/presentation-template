#!/bin/bash

safely () {
    if ! "$@"; then
        echo >&2 "Aborting due to failure of: $*"
        exit 1
    fi
}

safely git branch --force gh-pages HEAD
safely git checkout gh-pages
safely sass --update css/reveal-override.scss css/reveal-override.css
safely git add --force css/*.css css/*.map
safely git commit --message 'Latest .css and .css.map files for publishing via gh-pages'
safely git push --force github gh-pages
safely git checkout -
