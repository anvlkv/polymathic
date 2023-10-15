+++
title="Example 1 project"
description="Example 1 project description"
[taxonomies]
project_taxonomy=["project category 1"]
shared_taxonomy=["shared category 1"]
+++


## renders some content too

hello

now

{% assetCard(image="subsection-hero.png") %}

<h4>inside the card</h4>

plain text

{% end %}


and some text after

more text before

{% assetCard(image="subsection-hero_copy.png") %}

<h4>inside the card</h4>

plain text

{% end %}


and some text after

{% message(title="with title") %}

<h4>inside the message</h4>

plain text

{% end %}


{% message() %}

### Inside the message

    some code?


{% end %}