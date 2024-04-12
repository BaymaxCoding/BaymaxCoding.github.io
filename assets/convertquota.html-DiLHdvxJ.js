import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-D3p8wuGf.js";const o={},s=n(`<h1 id="convertquota" tabindex="-1"><a class="header-anchor" href="#convertquota"><span>convertquota</span></a></h1><p>把老的配额文件转换为新的格式</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>convertquota命令</strong> 用于将老的磁盘额数据文件（“quota.user”和“quota.group”）转换为新格式的文件（“quota.user”和“quota.group”）。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>convertquota<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-u：仅转换用户磁盘配额数据文件；
-g：仅转换组磁盘配额数据文件；
-f：将老的磁盘配额文件转换为新的格式；
-e：将新的文件格式从大字节序换为小字节序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件系统：指定要转换磁盘配额数据文件格式的文件系统（硬盘分区）。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用convertquota指令转换指定文件系统<code>/data</code>的磁盘配额数据文件。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>convertquota <span class="token parameter variable">-u</span> /data     //转换文件系统<span class="token string">&quot;/data&quot;</span>上的用户磁盘配额文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),r=[s];function i(c,l){return a(),t("div",null,r)}const p=e(o,[["render",i],["__file","convertquota.html.vue"]]),h=JSON.parse('{"path":"/command/linux/convertquota.html","title":"convertquota","lang":"zh-CN","frontmatter":{"description":"convertquota 把老的配额文件转换为新的格式 补充说明 convertquota命令 用于将老的磁盘额数据文件（“quota.user”和“quota.group”）转换为新格式的文件（“quota.user”和“quota.group”）。 语法 选项 参数 文件系统：指定要转换磁盘配额数据文件格式的文件系统（硬盘分区）。 实例 使用con...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/convertquota.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"convertquota"}],["meta",{"property":"og:description","content":"convertquota 把老的配额文件转换为新的格式 补充说明 convertquota命令 用于将老的磁盘额数据文件（“quota.user”和“quota.group”）转换为新格式的文件（“quota.user”和“quota.group”）。 语法 选项 参数 文件系统：指定要转换磁盘配额数据文件格式的文件系统（硬盘分区）。 实例 使用con..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"convertquota\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"command/linux/convertquota.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,h as data};
