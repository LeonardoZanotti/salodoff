# Contributing

## Local development

Clone the repo into your desired folder, `cd` into it, and install the dependencies.

```bash
git clone https://github.com/discordjs/guide.git
cd guide
yarn # or npm install
```

You should install the necessary dev dependencies afterwards, so that view the site locally. You can use `yarn serve` to open up a local version of the site at http://localhost:8080. If you need to use a different port, run it as `yarn serve --port=1234`.

### Linting

Remember to always lint your edits/additions before making a commit to ensure everything's lined up and consistent with the rest of the guide. We use ESLint and have a package.json script for linting both JS files and JS codeblocks inside Markdown files. Just install the dependencies and run the lint script.

```bash
yarn
yarn lint
```

#### Caveats

There might come a time where a snippet will contain a parse error, and ESLint won't be able to lint it properly. For example:

<!-- eslint-skip -->

```js
const sent = await message.channel.send('Hi!');
console.log(sent.content)
```

ESLint would error with `Parsing error: Unexpected token message` instead of letting you know that you're missing a semicolon. In this case, it's because of the use of `await` outside of an async function. In situations like this, after you've fixed any obvious errors, you can add an `<!-- eslint-skip -->` comment above the codeblock to have it ignored entirely by ESLint when running the lint script. 

## Adding pages

To add a new page to the guide, create a `file-name.md` file inside the folder of your choice. If you want to link to `/dir/some-tutorial.html`, you would create a `some-tutorial.md` file inside a `dir` folder. [VuePress](https://github.com/vuejs/vuepress) will pick up on it and set up the routing appropriately.

With that being said, you will still need to add the link to the sidebar manually. Go to the `/guide/.vuepress/sidebar.js` file and insert a new item with the path to your newly created page.

## General guidelines

Because we want to keep everything as consistent and clean as possible, here are some guidelines we strongly recommend you try to follow when making a contribution.

### Spelling, grammar, and wording

Improper grammar, strange wording, and incorrect spelling are all things that may lead to confusion when a user reads a guide page. It's very important to attempt to keep the content clear and concise. Re-read what you've written and place yourself in the shoes of someone else for a moment to see if you can fully understand everything without any confusion.

Don't worry if you aren't super confident with your grammar/spelling/wording skills; all pull requests get thoroughly reviewed, and comments are left in areas that need to be fixed or could be done better/differently.

#### "You"/"your" instead of "we"/"our"

When explaining parts of a guide, it'd recommended to use "you" instead of "we" in most situations. For example:

```diff
- To check our Node version, we can run `node -v`.
+ To check your Node version, you can run `node -v`.

- To delete a message, we can do: `message.delete();`
+ To delete a message, you can do: `message.delete();`

- Our final code should look like this: ...
+ Your final code should look like this: ...

- Before we can actually do this, we need to update our configuration file.
+ Before you can actually do this, you need to update your configuration file.
```

#### "We" instead of "I"

When refering to yourself, use "we" (as in "the writers of this guide") instead of "I". For example:

```diff
- If you don't already have this package installed, I would highly recommend doing so.
+ If you don't already have this package installed, we would highly recommend doing so.
# Valid alternative:
+ If you don't already have this package installed, it's highly recommended that you do so.

- In this section, I'll be covering how to do that really cool thing everyone's asking about.
+ In this section, we'll be covering how to do that really cool thing everyone's asking about.
```

### Paragraph structure

Tied in with the section above, try to keep things as neatly formatted as possible! If a paragraph gets long, split it up into multiple paragraphs so that it adds some spacing and is easier on the eyes.

#### Tips, warnings, and danger messages

If you have a tip to share with to user, you can format them in a specific way so that it looks appealing and noticable. The same goes for warning and "danger" messages.

```md
In this section, we'll be doing some stuff!

::: tip
You can do this stuff even faster if you do this cool thing listed in this tip!
:::

::: warning
Make sure you're on version 2.0.0 or above before trying this.
:::

::: danger
Be careful; this action is irreversible!
:::
```

![Utility tags preview](https://i.imgur.com/CnzVBmr.png)

### General styling

#### Spacing between entities

Even though this generally does not affect the actual output, you should space out your entities with a single blank line between them; it keeps the source code clean and easier to read. For example:

```md
## Section title

Here's an example of how you'd do that really cool thing:

```js
const { data } = request;
console.log(data);
`​``

And here's a sentence that would explain how that works, maybe.

::: tip
Here's where you'd tell them something even cooler than the really cool thing they just learned.
:::

::: warning
This is where you'd warn them about the possible issues that arise when using this method.
:::
```

#### Headers and sidebar links

Section headers and sidebar links should generally be short and right to the point. In terms of casing, it should be cased as if it were a regular sentence.

```diff
# Assuming the page is titled "Embeds"
- ## How To Make Inline Fields In An Embed
+ ## Inline fields

# Assuming the page is titled "Webhooks"
- ## Setting An Avatar On Your Webhook Client
+ ## Setting an avatar
```

#### References to code

When making references to pieces of code (e.g. variables, properties, etc.), place those references inside backticks. For example:

```md
After accessing the `icon` property off of the `data` object, you can send that as a file to Discord.

---

If you want to change your bot's username username, you can use the `ClientUser#setUsername` method.
```

References to class names should be capitalized, but remain outside of backticks. For example:

```md
Since `guild.members` returns a Collection, we can interate over it with `.forEach()` or a `for ... of` loop.

---

Since the `.delete()` method returns a Promise, we need to `await` it when inside a `try`/`catch` block.
```

### Images and links

If you want to include an image in a page, the image you add should be saved to the repo itself instead of using external services. If you want to link to other sections of the guide, be sure to use relative paths instead of full URLs to the live site. For example:

```diff
- Here's what the final result would look like:
-
- ![Final result](https://i.imgur.com/78fcCsF.png)
-
- If you want to read more about this, you can check out the page on [that other cool stuff](https://discordjs.guide/#/some-really-cool-stuff).

+ Here's what the final result would look like:
+
+ ![Final result](~@/images/78fcCsF.png)
+
+ If you want to read more about this, you can check out the page on [that other cool stuff](/some-really-cool-stuff).
```

Do note the `~@/images/*` syntax used. The `~@/` part is a shortcut to the base `/guide` directory, which holds all the .md files and the `/images` folder. When it comes to images, this syntax should always be used.

### Code samples

If you're writing a page that teaches the reader how to build something step-by-step, make sure to include the final piece of code in a file inside the `/code-samples` directory. The folder destination inside the `/code-samples` folder should match the destination inside the `/guide` folder. For example: `guide/foo/bar.md` -> `code-samples/foo/bar/index.js`.

```md
<!-- Inside /guide/foo/bar.md -->
## Resulting code

<!-- Will result in `/code-samples/foo/bar/` -->
<resulting-code />
```

This will automatically generate the link to the proper directory on GitHub for that specific page. Should you need to overwrite the path, you can do so:

```md
<!-- Inside /guide/baz/README.md -->
## Resulting code

<!-- Will result in `/code-samples/baz/` -->
<resulting-code />

<!-- Will result in `/code-samples/baz/getting-started/` -->
<resulting-code path="baz/getting-started" />
```

### Faking Discord messages

We have some useful custom helper components that you can use to "fake" Discord message. The reason for this is to make it easy for you to create, easy for anyone in the future to edit, and avoid having to take screenshots and using too many images on a page at once. Here's a preview of the components:

![Discord message faker preview](https://i.imgur.com/1qZodqm.png)

The syntax to make this display is quite simple as well:

```html
<div is="discord-messages">
	<discord-message author="User" avatar="djs">
		!ping
	</discord-message>
	<discord-message author="Tutorial Bot" avatar="blue" :bot="true">
		Pong! Took 250ms
	</discord-message>
</div>
```

The `author` and `avatar` attributes must be strings, and the `bot` attribute must be a boolean. Do note the colon in `:bot="true"`. These components are made with Vue, but if you aren't familiar with Vue, don't worry about it. Just understand that this allows us to pass in the actual boolean `true` and not the string `'true'`. All `<discord-message>` tags must be children of a single `<div is="discord-messages">` tag for it to display properly.

Do note the `<div is="discord-messages">` syntax instead of `<discord-messages>`. This is due to how VuePress renders markdown and HTML inside markdown files and doesn't recognize `<discord-messages>` as an HTML element, therefore rendering anything indented inside as a regular codeblock.

You can read more about how to use these components by checking out [the package's GitHub repo](https://github.com/Danktuary/vue-discord-message).

### Branch-specific content

On some pages, you'll want to display content that applies only to the stable branch and other content that applies to a different branch. You can use the `<branch>` component inside any .md file like so:

```md
You can use
<branch version="11.x" inline>`message.channel.fetchMessages()`</branch>
<branch version="12.x" inline>`message.channel.messages.fetch()`</branch>
to fetch all messages in a channel
```

If you're on the `11.x` branch, you'd see "You can use `message.channel.fetchMessages()` to fetch all messages in a channel. Use the `inline` attribute to make content display inline with the content around it. Otherwise, it'll be displayed on its own line.

You can refer to the `guide/.vuepress/branches.js` file to see which values are valid to use for the `version` attribute.

#### Codeblocks and other markdown

A common use-case for this component would be with codeblocks. Using Vue components inside markdown can get tricky and cause weird errors, so in order for everything to render properly, an extra blank line should be added before and after the component tag. For example (ignoring the `\` before the backticks):

```md
You can use the following to fetch all messages in a channel:

<branch version="11.x">

\```js
message.channel.fetchMessages();
\```

</branch>
<branch version="12.x">

\```js
message.channel.messages.fetch();
\```

</branch>
```
