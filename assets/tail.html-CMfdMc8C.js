import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as s}from"./app-D_HUMAmc.js";const t={},l=s(`<h1 id="tail" tabindex="-1"><a class="header-anchor" href="#tail"><span>tail</span></a></h1><p>在屏幕上显示指定文件的末尾若干行</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>tail命令</strong> 用于输入文件中的尾部内容。</p><ul><li>默认在屏幕上显示指定文件的末尾10行。</li><li>处理多个文件时会在各个文件之前附加含有文件名的行。</li><li>如果没有指定文件或者文件名为<code>-</code>，则读取标准输入。</li><li>如果表示字节或行数的<code>NUM</code>值之前有一个<code>+</code>号，则从文件开头的第<code>NUM</code>项开始显示，而不是显示文件的最后<code>NUM</code>项。</li><li><code>NUM</code>值后面可以有后缀： <ul><li><code>b</code> : 512</li><li><code>kB</code> : 1000</li><li><code>k </code> : 1024</li><li><code>MB</code> : 1000 * 1000</li><li><code>M </code> : 1024 * 1024</li><li><code>GB</code> : 1000 * 1000 * 1000</li><li><code>G </code> : 1024 * 1024 * 1024</li><li><code>T</code>、<code>P</code>、<code>E</code>、<code>Z</code>、<code>Y</code>等以此类推。</li></ul></li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token punctuation">(</span>选项<span class="token punctuation">)</span> <span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-c, <span class="token parameter variable">--bytes</span><span class="token operator">=</span>NUM                 输出文件尾部的NUM（NUM为整数）个字节内容。
-f, --follow<span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token operator">|</span>descript<span class="token punctuation">}</span><span class="token punctuation">]</span>  显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。
<span class="token parameter variable">-F</span>                              与 “--follow<span class="token operator">=</span>name --retry” 功能相同。
-n, <span class="token parameter variable">--line</span><span class="token operator">=</span>NUM                  输出文件的尾部NUM（NUM位数字）行内容。
<span class="token parameter variable">--pid</span><span class="token operator">=</span><span class="token operator">&lt;</span>进程号<span class="token operator">&gt;</span>                  与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令。
-q, --quiet, <span class="token parameter variable">--silent</span>           当有多个文件参数时，不输出各个文件名。
<span class="token parameter variable">--retry</span>                         即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“--follow<span class="token operator">=</span>name”连用。
-s, --sleep-interal<span class="token operator">=</span><span class="token operator">&lt;</span>秒数<span class="token operator">&gt;</span>      与“-f”选项连用，指定监视文件变化时间隔的秒数。
-v, <span class="token parameter variable">--verbose</span>                   当有多个文件参数时，总是输出各个文件名。
<span class="token parameter variable">--help</span>                          显示指令的帮助信息。
<span class="token parameter variable">--version</span>                       显示指令的版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件列表：指定要显示尾部内容的文件列表。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token function">file</span> <span class="token comment">#（显示文件file的最后10行）</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> +20 <span class="token function">file</span> <span class="token comment">#（显示文件file的内容，从第20行至文件末尾）</span>
<span class="token function">tail</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> <span class="token function">file</span> <span class="token comment">#（显示文件file的最后10个字节）</span>

<span class="token function">tail</span> <span class="token parameter variable">-25</span> mail.log <span class="token comment"># 显示 mail.log 最后的 25 行</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> mail.log <span class="token comment"># 等同于--follow=descriptor，根据文件描述符进行追踪，当文件改名或被删除，追踪停止</span>
<span class="token function">tail</span> <span class="token parameter variable">-F</span> mail.log <span class="token comment"># 等同于--follow=name --retry，根据文件名进行追踪，并保持重试，即该文件被删除或改名后，如果再次创建相同的文件名，会继续追踪</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[l];function o(c,p){return e(),n("div",null,i)}const m=a(t,[["render",o],["__file","tail.html.vue"]]),u=JSON.parse('{"path":"/command/linux/tail.html","title":"tail","lang":"zh-CN","frontmatter":{"description":"tail 在屏幕上显示指定文件的末尾若干行 补充说明 tail命令 用于输入文件中的尾部内容。 默认在屏幕上显示指定文件的末尾10行。 处理多个文件时会在各个文件之前附加含有文件名的行。 如果没有指定文件或者文件名为-，则读取标准输入。 如果表示字节或行数的NUM值之前有一个+号，则从文件开头的第NUM项开始显示，而不是显示文件的最后NUM项。 NUM...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/tail.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"tail"}],["meta",{"property":"og:description","content":"tail 在屏幕上显示指定文件的末尾若干行 补充说明 tail命令 用于输入文件中的尾部内容。 默认在屏幕上显示指定文件的末尾10行。 处理多个文件时会在各个文件之前附加含有文件名的行。 如果没有指定文件或者文件名为-，则读取标准输入。 如果表示字节或行数的NUM值之前有一个+号，则从文件开头的第NUM项开始显示，而不是显示文件的最后NUM项。 NUM..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tail\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.01,"words":604},"filePathRelative":"command/linux/tail.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};