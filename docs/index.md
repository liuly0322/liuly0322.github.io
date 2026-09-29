---
layout: page
title: 刘良宇的个人主页
titleTemplate: false
description: 刘良宇的个人主页
---

<main class="profile">
  <header class="profile-intro">
    <h1>刘良宇</h1>
    <p class="profile-bio">
      中国科学技术大学 · 计算机硕士（2027 届）
    </p>
  </header>
  <nav class="profile-links" aria-label="个人链接">
    <a
      href="/cv/cv-202601.pdf"
      target="_blank"
      rel="noopener"
    >
      简历
    </a>
    <a
      href="https://blog.liuly.moe/about"
      target="_blank"
      rel="noopener noreferrer"
    >
      关于我
    </a>
  </nav>
  <footer class="profile-footer">
    <div class="profile-contact" aria-label="联系方式">
      <a href="mailto:lly@mail.ustc.edu.cn">
        lly@mail.ustc.edu.cn
      </a>
      <a
        href="https://github.com/liuly0322"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
    <p class="profile-updated">
      Updated ·
      <time :datetime="frontmatter.buildTime.iso">
        {{ frontmatter.buildTime.text }}
      </time>
      (UTC+8)
    </p>
  </footer>
</main>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<style scoped>
.profile {
  width: min(860px, calc(100% - 48px));
  margin: 0 auto;
  padding: 138px 0 72px;
}

/* Intro */

.profile-intro h1 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.profile-bio {
  margin: 32px 0 0;
  color: var(--vp-c-text-2);
  font-size: 1.15rem;
  line-height: 1.6;
}

/* Main links */

.profile-links {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 46px;
}

.profile-links a {
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
  font-weight: 500;
  text-decoration: none;
  text-underline-offset: 5px;
  transition: color 0.15s ease;
}

.profile-links a:first-child {
  font-weight: 600;
}

.profile-links a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

/* Footer */

.profile-footer {
  margin-top: 104px;
  padding-top: 28px;
  border-top: 1px solid var(--vp-c-divider);
}

.profile-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 30px;
}

.profile-contact a {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  text-decoration: none;
  text-underline-offset: 4px;
  transition: color 0.15s ease;
}

.profile-contact a:hover {
  color: var(--vp-c-text-1);
  text-decoration: underline;
}

.profile-updated {
  margin: 32px 0 0;
  color: var(--vp-c-text-3);
  font-size: 0.82rem;
  line-height: 1.5;
}

/* Mobile */

@media (max-width: 640px) {
  .profile {
    width: min(100% - 40px, 860px);
    padding-top: 88px;
    padding-bottom: 56px;
  }

  .profile-intro h1 {
    font-size: 2.8rem;
  }

  .profile-bio {
    margin-top: 24px;
    font-size: 1rem;
  }

  .profile-links {
    margin-top: 36px;
    gap: 24px;
  }

  .profile-footer {
    margin-top: 80px;
  }
}
</style>
