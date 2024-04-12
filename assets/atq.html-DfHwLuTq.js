import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as t}from"./app-D3p8wuGf.js";const s={},i=t(`<h1 id="atq" tabindex="-1"><a class="header-anchor" href="#atq"><span>atq</span></a></h1><p>列出当前用户的at任务列表</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>atq命令</strong> 显示系统中待执行的任务列表，也就是列出当前用户的at任务列表。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>atq <span class="token punctuation">[</span>-V<span class="token punctuation">]</span> <span class="token punctuation">[</span>-q 队列<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-V：显示版本号；
-q：查询指定队列的任务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>at now + <span class="token number">10</span> minutes
at<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1111</span>
at<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>eot<span class="token operator">&gt;</span>
job <span class="token number">3</span> at Fri Apr <span class="token number">26</span> <span class="token number">12</span>:56:00 <span class="token number">2013</span>

atq
<span class="token number">3</span>       Fri Apr <span class="token number">26</span> <span class="token number">12</span>:56:00 <span class="token number">2013</span> a root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[i];function l(r,c){return e(),n("div",null,o)}const m=a(s,[["render",l],["__file","atq.html.vue"]]),u=JSON.parse('{"path":"/command/linux/atq.html","title":"atq","lang":"zh-CN","frontmatter":{"description":"atq 列出当前用户的at任务列表 补充说明 atq命令 显示系统中待执行的任务列表，也就是列出当前用户的at任务列表。 语法 选项 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/atq.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"atq"}],["meta",{"property":"og:description","content":"atq 列出当前用户的at任务列表 补充说明 atq命令 显示系统中待执行的任务列表，也就是列出当前用户的at任务列表。 语法 选项 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"atq\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"command/linux/atq.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
