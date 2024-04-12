import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as s}from"./app-D3p8wuGf.js";const t={},i=s(`<h1 id="bg" tabindex="-1"><a class="header-anchor" href="#bg"><span>bg</span></a></h1><p>将前台终端作业移动到后台运行</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">bg</span> <span class="token punctuation">[</span>job_spec <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li><p>用于将作业放到后台运行，使前台可以执行其他任务。该命令的运行效果与在指令后面添加符号<code>&amp;</code>的效果是相同的，都是将其放到系统后台执行。</p></li><li><p>若后台任务中只有一个，则使用该命令时可以省略任务号。</p></li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>job_spec（可选）：指定要移动到后台执行的作业标识符，可以是一到多个。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回成功除非未开启作业控制或发生了错误。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 运行sleep命令，然后按下ctrl+z。</span>
<span class="token function">sleep</span> <span class="token number">60</span>
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 <span class="token function">sleep</span> <span class="token number">60</span>

<span class="token comment"># 使用bg命令使得作业在后台运行。</span>
<span class="token function">bg</span> %1

<span class="token comment"># 返回信息：</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token function">sleep</span> <span class="token number">60</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><code>bash</code>的作业控制命令包括<code>bg fg kill wait disown suspend</code>。</li><li>该命令需要<code>set</code>选项<code>monitor</code>处于开启状态时才能执行；查看作业控制状态：输入<code>set -o</code>查看<code>monitor</code>行；执行<code>set -o monitor</code>或<code>set -m</code>开启该选项。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,14),o=[i];function l(c,p){return n(),a("div",null,o)}const m=e(t,[["render",l],["__file","bg.html.vue"]]),h=JSON.parse('{"path":"/command/linux/bg.html","title":"bg","lang":"zh-CN","frontmatter":{"description":"bg 将前台终端作业移动到后台运行 概要 主要用途 用于将作业放到后台运行，使前台可以执行其他任务。该命令的运行效果与在指令后面添加符号&的效果是相同的，都是将其放到系统后台执行。 若后台任务中只有一个，则使用该命令时可以省略任务号。 参数 job_spec（可选）：指定要移动到后台执行的作业标识符，可以是一到多个。 返回值 返回成功除非未开启作业控制...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/bg.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"bg"}],["meta",{"property":"og:description","content":"bg 将前台终端作业移动到后台运行 概要 主要用途 用于将作业放到后台运行，使前台可以执行其他任务。该命令的运行效果与在指令后面添加符号&的效果是相同的，都是将其放到系统后台执行。 若后台任务中只有一个，则使用该命令时可以省略任务号。 参数 job_spec（可选）：指定要移动到后台执行的作业标识符，可以是一到多个。 返回值 返回成功除非未开启作业控制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bg\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"command/linux/bg.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,h as data};
