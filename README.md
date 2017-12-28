<blockquote class="imgur-embed-pub" lang="en" data-id="a/Wfntn"><a href="//imgur.com/Wfntn"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

# About

VoyageFound is a tool for browsing random WikiVoyage.org pages, but filterable.  For more about it, see [this page](http://kevinkuchta.com/voyagefound/).

# Generate the json

1. DL the xml file from https://dumps.wikimedia.org/enwikivoyage/latest/enwikivoyage-latest-pages-articles.xml.bz2 and unzip it
2. Run `( cd data_converter; ruby generate_json.rb ) > public/ancestors.json`
3. `npm run start` to start the local webapp

`# TODO: actual setup instructions here`
