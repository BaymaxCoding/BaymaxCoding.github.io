import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as s}from"./app-D3p8wuGf.js";const i={},t=s(`<h1 id="bmodinfo" tabindex="-1"><a class="header-anchor" href="#bmodinfo"><span>bmodinfo</span></a></h1><p>显示给定模块的详细信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>bmodinfo命令</strong> 用于显示给定模块的详细信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>bmodinfo<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a：显示模块作者；
-d：显示模块的描述信息；
-l：显示模块的许可信息；
-p：显示模块的参数信息；
-n：显示模块对应的文字信息；
-0：用ASCII码的0字符分割字段值，而不使用新行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>模块名：要显示详细信息的模块名称。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>显示sg模块的信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># modinfo sg</span>
filename:    /lib/modules/2.6.9-42.ELsmp/kernel/drivers/scsi/sg.ko
author:     Douglas Gilbert
description:  SCSI generic <span class="token punctuation">(</span>sg<span class="token punctuation">)</span> driver
license:    GPL
version:    <span class="token number">3.5</span>.31 B0B0CB1BB59F0669A1F0D6B
parm:      def_reserved_size:size of buffer reserved <span class="token keyword">for</span> each fd
parm:      allow_dio:allow direct I/O <span class="token punctuation">(</span>default: <span class="token number">0</span> <span class="token punctuation">(</span>disallow<span class="token punctuation">))</span>
alias:     char-major-21-*
vermagic:    <span class="token number">2.6</span>.9-42.ELsmp SMP <span class="token number">686</span> REGPARM 4KSTACKS gcc-3.4
depends:    scsi_mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function l(d,r){return n(),a("div",null,o)}const m=e(i,[["render",l],["__file","bmodinfo.html.vue"]]),u=JSON.parse('{"path":"/command/linux/bmodinfo.html","title":"bmodinfo","lang":"zh-CN","frontmatter":{"description":"bmodinfo 显示给定模块的详细信息 补充说明 bmodinfo命令 用于显示给定模块的详细信息。 语法 选项 参数 模块名：要显示详细信息的模块名称。 实例 显示sg模块的信息：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/bmodinfo.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"bmodinfo"}],["meta",{"property":"og:description","content":"bmodinfo 显示给定模块的详细信息 补充说明 bmodinfo命令 用于显示给定模块的详细信息。 语法 选项 参数 模块名：要显示详细信息的模块名称。 实例 显示sg模块的信息："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bmodinfo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"command/linux/bmodinfo.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
