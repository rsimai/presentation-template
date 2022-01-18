#! /bin/bash
trap 'echo "$0: error in command \"$BASH_COMMAND\"" >&2; exit 1' ERR

mkdir -p public
rsync -ric --exclude=/public \
      --include=reveal.js/dist --include=reveal.js/plugin --exclude=reveal.js/* \
      --exclude=/.* --include=* ./ public/
sass --update reveal.js/css/print:public/reveal.js/dist/print
sass -E utf-8 --update css public/css
