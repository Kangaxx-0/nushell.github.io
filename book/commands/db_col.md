---
title: db col
version: 0.63.0
usage: |
  Creates column expression for database
---

<script>
  import { usePageFrontmatter } from '@vuepress/client';
  export default { computed: { frontmatter() { return usePageFrontmatter().value; } } }
</script>

# <code>{{ frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ frontmatter.usage }}</div>

## Signature

```> db col (name)```

## Parameters

 -  `name`: column name

## Examples

Creates a named column expression
```shell
> db col name_1
```
