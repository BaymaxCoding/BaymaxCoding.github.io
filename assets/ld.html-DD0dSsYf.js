import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-D3p8wuGf.js";const l={},s=n(`<h1 id="ld" tabindex="-1"><a class="header-anchor" href="#ld"><span>ld</span></a></h1><p>将目标文件连接为可执行程序</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>ld命令</strong> 是GNU的连接器，将目标文件连接为可执行程序。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ld<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
ld <span class="token punctuation">[</span>options<span class="token punctuation">]</span> objfile <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-o：指定输出文件名；
-e：指定程序的入口符号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>目标文件：指定需要连接的目标文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>这告诉ld通过将文件 <code>/lib/crt0.o</code> 与 <code>hello.o</code> 和库 <code>libc.a</code> 链接起来，生成一个名为 <code>output</code> 的文件，该文件将来自标准搜索目录。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ld <span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>output<span class="token operator">&gt;</span> /lib/crt0.o hello.o <span class="token parameter variable">-lc</span>
ld <span class="token parameter variable">-o</span> output /lib/crt0.o hello.o <span class="token parameter variable">-lc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[s];function i(d,c){return a(),t("div",null,o)}const h=e(l,[["render",i],["__file","ld.html.vue"]]),m=JSON.parse('{"path":"/command/linux/ld.html","title":"ld","lang":"zh-CN","frontmatter":{"description":"ld 将目标文件连接为可执行程序 补充说明 ld命令 是GNU的连接器，将目标文件连接为可执行程序。 语法 选项 参数 目标文件：指定需要连接的目标文件。 实例 这告诉ld通过将文件 /lib/crt0.o 与 hello.o 和库 libc.a 链接起来，生成一个名为 output 的文件，该文件将来自标准搜索目录。","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/ld.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"ld"}],["meta",{"property":"og:description","content":"ld 将目标文件连接为可执行程序 补充说明 ld命令 是GNU的连接器，将目标文件连接为可执行程序。 语法 选项 参数 目标文件：指定需要连接的目标文件。 实例 这告诉ld通过将文件 /lib/crt0.o 与 hello.o 和库 libc.a 链接起来，生成一个名为 output 的文件，该文件将来自标准搜索目录。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ld\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"command/linux/ld.md","localizedDate":"2024年4月12日","autoDesc":true}');export{h as comp,m as data};