---
title: date humanize
version: 0.63.0
usage: |
  Print a 'humanized' format for the date, relative to now.
---

<script>
  import { usePageFrontmatter } from '@vuepress/client';
  export default { computed: { frontmatter() { return usePageFrontmatter().value; } } }
</script>

# <code>{{ frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ frontmatter.usage }}</div>

## Signature

```> date humanize ```

## Examples

Print a 'humanized' format for the date, relative to now.
```shell
> date humanize
```

Print a 'humanized' format for the date, relative to now.
```shell
> "2021-10-22 20:00:12 +01:00" | date humanize
```
