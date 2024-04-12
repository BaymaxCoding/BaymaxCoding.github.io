import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,b as s}from"./app-D3p8wuGf.js";const t={},i=s(`<h1 id="resize" tabindex="-1"><a class="header-anchor" href="#resize"><span>resize</span></a></h1><p>命令设置终端机视窗的大小</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>resize命令</strong> 命令设置终端机视窗的大小。执行resize指令可设置虚拟终端机的视窗大小。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>resize <span class="token punctuation">[</span>-cu<span class="token punctuation">]</span><span class="token punctuation">[</span>-s <span class="token operator">&lt;</span>列数<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> 　就算用户环境并非C Shell，也用C Shell指令改变视窗大小。
<span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>列数<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span> 　设置终端机视窗的垂直高度和水平宽度。
<span class="token parameter variable">-u</span> 　就算用户环境并非Bourne Shell，也用Bourne Shell指令改变视窗大小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用 C shell</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># resize -c</span>
<span class="token builtin class-name">set</span> noglob<span class="token punctuation">;</span>
setenv <span class="token environment constant">COLUMNS</span> <span class="token string">&#39;99&#39;</span><span class="token punctuation">;</span>
setenv <span class="token environment constant">LINES</span> <span class="token string">&#39;34&#39;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">unset</span> noglob<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Bourne shell</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># resize -u</span>
<span class="token assign-left variable"><span class="token environment constant">COLUMNS</span></span><span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">;</span>
<span class="token assign-left variable"><span class="token environment constant">LINES</span></span><span class="token operator">=</span><span class="token number">34</span><span class="token punctuation">;</span>
<span class="token builtin class-name">export</span> <span class="token environment constant">COLUMNS</span> <span class="token environment constant">LINES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置指定大小</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># resize -s 80 160</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),l=[i];function o(p,r){return n(),e("div",null,l)}const u=a(t,[["render",o],["__file","resize.html.vue"]]),m=JSON.parse('{"path":"/command/linux/resize.html","title":"resize","lang":"zh-CN","frontmatter":{"description":"resize 命令设置终端机视窗的大小 补充说明 resize命令 命令设置终端机视窗的大小。执行resize指令可设置虚拟终端机的视窗大小。 语法 选项 实例 使用 C shell 使用 Bourne shell 设置指定大小","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/resize.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"resize"}],["meta",{"property":"og:description","content":"resize 命令设置终端机视窗的大小 补充说明 resize命令 命令设置终端机视窗的大小。执行resize指令可设置虚拟终端机的视窗大小。 语法 选项 实例 使用 C shell 使用 Bourne shell 设置指定大小"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"resize\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"command/linux/resize.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
