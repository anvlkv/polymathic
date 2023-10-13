+++
title="Contact"
description="Let's talk!"
template="page.html"
[extra]
[extra.poly]
aside = "A plain text content in page aside"
+++

# Hi there, let's connect

<form>

{{ field(name="test", label="Name") }}

{{ field(name="email", label="Email", type="email", required=true) }}

{% field(name="text", label="Message", type="textarea") %}
  Some text
{% end %}

{{ field(name="foto", label="Photo", type="file") }}

<div class="field is-grouped is-grouped-centered">
  <p class="control">
    <a class="button is-primary">
      Submit
    </a>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>

</form>

