<div style="display: flex; line-height: initial">
    <div style="max-width: 100px">
        <img style="border-radius:50%" src="https://q2.qlogo.cn/headimg_dl?dst_uin=453026205&spec=100">
    </div>
    <div style="padding-left: 2rem; display: flex; flex-direction: column">
        <div style="font-size: 1.85rem; font-weight: 600">刘良宇</div>
        <div style="margin-bottom: 0.5rem">Student at USTC</div>
        <div style="font-family: Courier New,Courier,monospace;">
            <div>me@liuly.moe</div>
            <div>qq: 453026205</div>
        </div>
    </div>
</div>

## 简介

USTC 20 级本科少年班学院，计算机科学与技术专业在读。

爱好 System/PL/Security 及其他任何 CS 相关~

- GitHub: [liuly0322](https://github.com/liuly0322)
- 博客：[blog.liuly.moe](https://blog.liuly.moe)

<script setup>
import { generateCounterImage, fetchBusuanziCounter } from 'moe-counter-busuanzi'
import { onMounted } from 'vue'

onMounted(async () => {
  const busuanziResult = await fetchBusuanziCounter();
  const counterSVGString = generateCounterImage(busuanziResult.page_pv);
  document.getElementById("counter").innerHTML = counterSVGString;
})
</script>

<div id="counter">
</div>
