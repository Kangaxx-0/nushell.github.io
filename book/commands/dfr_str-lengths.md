---
title: dfr str-lengths
version: 0.63.0
usage: |
  Get lengths of all strings
---

<script>
  import { usePageFrontmatter } from '@vuepress/client';
  export default { computed: { frontmatter() { return usePageFrontmatter().value; } } }
</script>

# <code>{{ frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ frontmatter.usage }}</div>

## Signature

```> dfr str-lengths ```

## Examples

Returns string lengths
```shell
> [a ab abc] | dfr to-df | dfr str-lengths
```
