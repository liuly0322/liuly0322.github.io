---
layout: page
title: 刘良宇
description: 刘良宇的个人主页。2024 年起在中国科学技术大学攻读硕士研究生，附个人简历与博客入口。
---

<main class="profile">
  <header class="profile-intro">
    <p class="profile-handle">liuly0322 / undef_baka</p>
    <h1>刘良宇</h1>
    <p class="profile-bio">2024 年起在中国科学技术大学攻读硕士研究生。</p>
  </header>

  <div class="profile-actions">
    <a class="cv-link" href="/cv/cv-202601.pdf" target="_blank" rel="noopener">查看 CV <span aria-hidden="true">↗</span></a>
    <span class="cv-date">PDF · <time datetime="2026-01">2026 年 1 月版</time></span>
  </div>

  <a class="profile-about" href="https://blog.liuly.moe/about" target="_blank" rel="noopener noreferrer">详细了解我 <span aria-hidden="true">→</span></a>

  <footer class="profile-footer">
    <div class="profile-contact" aria-label="联系方式">
      <a href="mailto:lly@mail.ustc.edu.cn">lly@mail.ustc.edu.cn</a>
      <a href="https://github.com/liuly0322" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </div>
    <a class="profile-archive" href="/archive.html">历史归档 <span aria-hidden="true">→</span></a>
  </footer>
  <p class="profile-updated">Updated · <time :datetime="frontmatter.buildTime.iso">{{ frontmatter.buildTime.text }}</time> (UTC+8)</p>
</main>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>
