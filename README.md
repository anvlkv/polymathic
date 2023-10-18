# polymathic

> The theme is in active development

polymathic is a [Zola](https://www.getzola.org/) portfolio theme. 

I made it for my own portfolio. The theme is called `polymathic`, inspired by individuals with a wide range of talents. The theme focuses on rich and consistent navigation experience, exposing the variety of topics to chose from, yet allowing the user to focus on a single thread of your story once they've made a choice. 

Docs and theme demo are available here [main--polymathic-demo.netlify.app](https://main--polymathic-demo.netlify.app/) 

This theme uses [Bulma](https://bulma.io/) scss framework, making the theme styles highly customizable.

This theme adds minimal [Open Graph](https://ogp.me/) tags to every page `head`.

Besides the styles, you can customize navigation, the theme relies on zola `[taxonomies]` and values you provide in `[extra][exta.poly]`. See [navigation](#navigation).

You can quickly deploy the theme to [netlify](https://docs.netlify.com/site-deploys/create-deploys/), theme comes with a config file.

## Install

Once you already have zola installed and ran `zola init`, then run from your project directory

    $ git submodule add https://github.com/anvlkv/polymathic themes/polymathic

You will also need [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed, then run

    $ npm --prefix themes/polymathic install

For those using netlify deployments config is available here

    $ cp themes/polymathic/netlify.toml netlify.toml

In your `config.toml` Set zola theme to polymathic

    theme = "polymathic"

## Content

Building this theme I kept it as flexible as Zola 💖 allows, which is very flexible.

You can define your sections and pages as usual. You can make your content appear richer by adding `[extra][extra.poly]` data to your sections and pages.

### Zola content

This theme applies minimal default styling to content from your site's `content/`. All headings and subheadings extend appropriate bulma typography classes.

    +++
    title="Page title"
    +++

    Next follows typography preview.

    # Typography title 1  <!-- .title.is-1 -->

    ## Typography title 2  <!-- .title.is-2.subtitle -->
    
    ### Typography title 3  <!-- .title.is-3.subtitle -->

    > Consequent titles extend bulma `.subtitle` 

    #### Typography title 4  <!-- .title.is-4 -->

    ...

Beyond that you can use Bulma components in your content. This theme does not import all of them by default. See [more components](#more-components). Components are aligned with the theme or [your configuration](#styles-config).

    +++
    title="Page title"
    +++

    <div class="buttons">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
    </div>


### Landing page

Theme builds landing page using contents from `content/_index.md`, extended version of site [global navigation](#global-navigation-level-1).

### Titles and description

The theme uses `title` and `description` properties from your content front matter. 

    +++
    title="Add a title"
    description="Optional description"
    +++

Additional titles may be created from taxonomies names, this only happens when using [shared taxonomies](#shared-taxonomies-level-3). The theme does it by turning `my_taxonomy` into `My Taxonomy`. If you use those, you may like to double check for any oddly looking titles. Feel free to create an (issue)[https://github.com/anvlkv/polymathic/issues] in case you can not solve the odd title or encounter problems with translated content. 

### Hero images

Every **page** and **section** may have a hero image. Hero image is used by the theme and for Open Graph meta `og:image`. Hero image is defined in content front matter. You can specify path to one of your static paths, page or section assets. 

    +++
    [extra]
    [extra.poly]
    hero="my-hero-image.png"
    +++

Fallback `og:image` (one for entire site) can be configured in your `config.toml` and must point to a static file
    
    [extra]
    [extra.poly]
    og_image= "/og.png"

Theme resizes and optimizes hero and social images using Zola's `resize_image()`.

### Navigation

Theme gives control over navigation, which is reflected in global navigation bar, on the [landing page](#landing-page), and then duplicated in footer.

#### Global navigation (level 1)


To enable global navigation add to your `config.toml` the paths to **pages** and **sections** which you want to include. The paths in `menu_order` should reflect actual paths to your content.

    [extra]
    [extra.poly]
    menu_order = [
        "resume/_index.md",
        "projects/_index.md",
        "contact.md"
    ]



#### Deep navigation (level 2)

To build richer navigation **sections** may have a list of taxonomies defined in their front matter:

    +++
    [extra]
    [extra.poly]
    use_taxonomies= ["taxonomy_name", "another_taxonomy_name"]
    +++

Same taxonomies should be defined in your `config.toml`:

    taxonomies= [
        {name="taxonomy_name"},
        {name="another_taxonomy_name"}
    ]

##### Shared taxonomies (level 3)

Once multiple **sections** appear in `menu_order` and are using same taxonomy in their `use_taxonomies`, then theme optimizes taxonomy terms view in all navigation. This is achieved by grouping reencountered terms under their common taxonomy name. Feel free to create an (issue)[https://github.com/anvlkv/polymathic/issues] in case this doesn't work for you. 


#### Footer out-links

You can add social out-links and more to your global footer. In your `config.toml` add:

    [extra]
    [extra.poly]
    social_outlink = [
        {href="https://www.linkedin.com/", title="LinkedIn", icon=false},
        {href="mailto:email@domain.com", title="Email", icon=false},
        {href="tel:+05890000111", title="0-589-0000111", icon=false},
    ]

To add an icons to links in footer add an [icon font](https://bulma.io/documentation/elements/icon/) to your project and set `icon="font-prefix icon-name"` in the link config. 

    [extra]
    [extra.poly]
    social_outlink = [
        {href="https://www.linkedin.com/", title="LinkedIn", icon="fas fa-linkedin"},
    ]

### Shortcodes

#### Form field and buttons

Renders some simple bulma fields

    +++
    title="page title"
    +++

    # Page title

    <form>

    {{ field(name="test", label="Name") }}

    {{ field(name="email", label="Email", type="email", required=true) }}

    {% field(name="text", label="Message", type="textarea") %}
        Some text
    {% end %}

    {{ formButtons(submit="Send", cancel="Reset", centered=false) }}

    </form>



## Customization

### Brand

You can add multiple favicons by specifying them in `config.toml`

    [extra]
    [extra.poly]
    favicon = [
        {rel = "icon", type = "image/x-icon", size = "", path = "/favicon.ico"},
        {rel = "apple-touch-icon", type = "image/png", size = "180x180", path = "/favicon/apple-touch-icon.png"},
        {rel = "icon", type = "image/png", size = "32x32", path = "/favicon/favicon-32x32.png"},
    ]

Name, app name, or brand name `app_name`

    [extra]
    [extra.poly]
    app_name = "your app name"

Logo

    [extra]
    [extra.poly]
    logo = "/your-logo.png"

Whether to include a webmanifest file and path to it.

    [extra]
    [extra.poly]
    manifest = "/webmanifest.json"

### Styles

To customize theme styles you can define a configuration map. This will allow you to change all theme variables, along with those of [bulma](https://bulma.io/documentation/customize/variables/). 

#### Adding font

To change a preloaded font set `font_url` and update your `$theme-config:("font-family": 'My font', monospace);`.

    [extra]
    [extra.poly]
    font_url="https://font.hosting.com"

#### Extending templates

Override theme default templates. For example `templates/base.html`

    {% extends "polymathic/templates/base.html" %}
    {% block page_style %}
        <link rel="stylesheet" href="{{ get_url(path='your-file-name.css') | safe }}" />
    {% endblock %}

Or if you still want the theme styles along with your file

    {% extends "polymathic/templates/index.html" %}
    {% block page_style %}
        {{ super() }}
        <link rel="stylesheet" href="{{ get_url(path='your-file-name.css') | safe }}" />
    {% endblock %}

#### Styles config

Next you would need to create a config map. For example `sass/_config.scss`

    @use "sass:map";

    $poly-config: (
        'font-url': 'https://your-font-url',
        'font-family': 'Your font', serif,
        'background-color': white,
        'text-color': black,
        'primary': red,
        'ui-transition-time': 700ms,
        'ui-transition-fn': ease-out,
        'muted-bg': grey,
    );

#### Use theme styles with config

Last step for this template is to use the theme with provided config. For example `sass/your-file-name`

    @use './config';
    @use '../themes/polymathic/sass/polymathic.scss' with (
        // theme config
        $poly-config: config.$poly-config,
        // bulma variables
        $warning: orange,
        $desktop: 1080px
    );


#### More components

##### Import all

This theme does not import all bulma components. Should you need more components, you may `@use` the `themes/polymathic/sass/all_bulma.scss`. If you're not using any style customization then simply link to `all_bulma.css` file. See [extending templates](#extending-templates)



## Contributing

Issues or contributions are welcome. Also, curious what you make with it.

