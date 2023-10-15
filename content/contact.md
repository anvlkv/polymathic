+++
title="Contact"
description="Let's talk!"
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

  {{ formButtons(cancel="Reset") }}

</form>

