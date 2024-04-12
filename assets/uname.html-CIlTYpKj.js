import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as s}from"./app-D3p8wuGf.js";const i={},l=s(`<h1 id="uname" tabindex="-1"><a class="header-anchor" href="#uname"><span>uname</span></a></h1><p>打印系统信息。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>打印机器和操作系统的信息。</li><li>当没有选项时，默认启用 <code>-s</code> 选项。</li><li>如果给出多个选项或 <code>-a</code> 选项时，输出信息按以下字段排序：内核名称 主机名称 内核release 内核版本 机器名称 处理器 硬件平台 操作系统。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a, <span class="token parameter variable">--all</span>                  按顺序打印全部信息，如果 <span class="token parameter variable">-p</span> 和 <span class="token parameter variable">-i</span> 的信息是未知，那么省略。
-s, --kernel-name          打印内核名称。
-n, <span class="token parameter variable">--nodename</span>             打印网络节点主机名称。
-r, --kernel-release       打印内核release。
-v, --kernel-version       打印内核版本。
-m, <span class="token parameter variable">--machine</span>              打印机器名称。
-p, <span class="token parameter variable">--processor</span>            打印处理器名称。
-i, --hardware-platform    打印硬件平台名称。
-o, --operating-system     打印操作系统名称。
<span class="token parameter variable">--help</span>                     显示帮助信息并退出。
<span class="token parameter variable">--version</span>                  显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 单独使用uname命令时相当于uname -s</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname</span>
Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看全部信息</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -a</span>
Linux localhost <span class="token number">2.6</span>.18-348.6.1.el5 <span class="token comment">#1 SMP Tue May 21 15:34:22 EDT 2013 i686 i686 i386 GNU/Linux</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 分别列出信息</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -m</span>
i686

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -n</span>
localhost

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">2.6</span>.18-4-686

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -s</span>
Linux

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -v</span>
<span class="token comment">#1 SMP Tue May 21 15:34:22 EDT 2013</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -p</span>
i686

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -i</span>
i386

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -o</span>
GNU/Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 uname</code>，<code>info coreutils &#39;uname invocation&#39;</code>。</li></ol>`,16),t=[l];function o(c,d){return a(),e("div",null,t)}const m=n(i,[["render",o],["__file","uname.html.vue"]]),u=JSON.parse('{"path":"/command/linux/uname.html","title":"uname","lang":"zh-CN","frontmatter":{"description":"uname 打印系统信息。 概要 主要用途 打印机器和操作系统的信息。 当没有选项时，默认启用 -s 选项。 如果给出多个选项或 -a 选项时，输出信息按以下字段排序：内核名称 主机名称 内核release 内核版本 机器名称 处理器 硬件平台 操作系统。 选项 返回值 返回0表示成功，返回非0值表示失败。 例子 注意 该命令是GNU coreutil...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/uname.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"uname"}],["meta",{"property":"og:description","content":"uname 打印系统信息。 概要 主要用途 打印机器和操作系统的信息。 当没有选项时，默认启用 -s 选项。 如果给出多个选项或 -a 选项时，输出信息按以下字段排序：内核名称 主机名称 内核release 内核版本 机器名称 处理器 硬件平台 操作系统。 选项 返回值 返回0表示成功，返回非0值表示失败。 例子 注意 该命令是GNU coreutil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uname\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"command/linux/uname.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
