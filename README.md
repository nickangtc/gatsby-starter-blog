# nickang.com

This is the Gatsby source code for my blog at <https://nickang.com>. I started with the [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

I made the decision to to open source my Gatsby blog so that more people can copy-paste and reference the source code of a functioning Gatsby site used as a personal blog.

## License

The following directories and their contents are Copyrighted by me, Nick Ang. You may not reuse anything therein without my permission:

- content/

For everything else in this public repository you may use freely according to the MIT License. If you do use them, I would appreciate a link back to <https://nickang.com> and this repository, but it is not required.

## Notes

### Tags

**Remember!** Wrap all tags in "" in frontmatter for easy search. e.g. searching for articles tagged "Tech" is much easier when searching `"Tech"` instead of `Tech`.

List of unique topic tags:

- **"Tech"** - Software Development - Design - Product
- **"Interviewing"** - self-explanatory
- **"Career"**
- **"Living"** - Mindfulness - Parenting - Habits - Society & Culture
- **"Creativity"** - Writing - Blogging - Problem Solving
- **"PKM"** - Note Taking
- **"Leadership"**
- **"Communication"**
- **"Productivity"** (maybe?) - Workflow - Taming complexity
- **"Fiction"** - Flash fiction, Short story, Poem
- **"Good intentions"**
- **"Announcement"**
- **"Money"**

List of unique type tags:

- **"Book"**
- **"Tutorial"**
- **"Raw essays"** - 30 days raw essays project
- **Collection** - holds any growing collection of things
- **Notes** - open, loose reflections from an event (e.g. learning a new thing, watching a video, etc.)

List of unique statuses:

- draft - hidden from blog list page
- revisit - things that I want to be resurfaced for follow-up some time in the future

## Scripts

### Create a new post

Use the node script -- new.js -- to create a new post whenever you are ready to write.

```shell
node ./new.js post
```

### Review posts and tag some as personal

I wrote another node script -- housekeeping.js -- when I decided to review my post archives to tag some of them as personal so that they do not appear on the main blog listing page.

```shell
node ./housekeeping.js review
```
