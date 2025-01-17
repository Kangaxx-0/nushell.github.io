---
title: dfr value-counts
version: 0.63.0
usage: |
  Returns a dataframe with the counts for unique values in series
---

<script>
  import { usePageFrontmatter } from '@vuepress/client';
  export default { computed: { frontmatter() { return usePageFrontmatter().value; } } }
</script>

# <code>{{ frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ frontmatter.usage }}</div>

## Signature

```> dfr value-counts ```

## Examples

Calculates value counts
```shell
> [5 5 5 5 6 6] | dfr to-df | dfr value-counts
```
