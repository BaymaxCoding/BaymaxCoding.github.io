import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-CHACLx4z.js";const i={},l=e(`<h1 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h1><p>显示指定命令的类型。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token builtin class-name">type</span> <span class="token punctuation">[</span>-afptP<span class="token punctuation">]</span> name <span class="token punctuation">[</span>name <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>显示要查找的命令的信息。</li><li>控制查找范围和行为。</li><li>显示要查找的命令优先级最高的类型。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a：在环境变量<span class="token environment constant">PATH</span>中查找并显示所有包含name的可执行文件路径；当<span class="token string">&#39;-p&#39;</span>选项没有同时给出时，如果在别名、关键字，函数，内建的信息中存在name，则一并显示。
-f：排除对shell函数的查找。
-p：如果name在执行<span class="token string">&#39;type -t name&#39;</span>返回的不是<span class="token string">&#39;file&#39;</span>，那么什么也不返回；否则会在环境变量<span class="token environment constant">PATH</span>中查找并返回可执行文件路径。
-P：即使要查找的name是别名、内建、函数中的一个，仍然会在环境变量<span class="token environment constant">PATH</span>中查找并返回可执行文件路径。
-t：根据name的类型返回一个单词（别名，关键字，函数，内建，文件），否则返回空值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>name：要查找的命令，可以为多个。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>当指定的命令可以找到时返回成功，如果有没找到的返回失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>接下来要用到的例子假设<span class="token string">&#39;~/.bashrc&#39;</span>文件定义了以下的内容：

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ls</span><span class="token operator">=</span><span class="token string">&#39;ls --color=auto&#39;</span>
<span class="token function-name function">mybash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token function">vim</span> ~/.bashrc<span class="token punctuation">;</span> <span class="token punctuation">}</span>

而且执行环境里没有使用enable禁用内建命令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> mybash
<span class="token comment"># 输出</span>
mybash is a <span class="token keyword">function</span>
<span class="token function-name function">mybash</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">vim</span> ~/.bashrc
<span class="token punctuation">}</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-f</span> mybash
<span class="token comment"># 输出（因为排除了函数，所以报错）</span>
bash: type: mybash: not found

<span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-p</span> mybash
<span class="token comment"># 输出为空（因为排除了函数，所以什么也不返回）</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> <span class="token function">ls</span>
<span class="token comment"># 输出</span>
<span class="token function">ls</span> is aliased to \`ls <span class="token parameter variable">--color</span><span class="token operator">=</span>suto&#39;
<span class="token function">ls</span> is /usr/bin/ls
<span class="token function">ls</span> is /bin/ls

<span class="token builtin class-name">type</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-p</span> <span class="token function">ls</span>
<span class="token comment"># 输出</span>
/usr/bin/ls
/bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># &#39;-f&#39;不会影响&#39;-P&#39;的范围，&#39;-f&#39;不建议和&#39;-p&#39;使用。</span>
<span class="token comment"># 注意：printf同时是内建命令以及可执行文件（GNU coreutils），优先作为内建处理。</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-p</span> <span class="token builtin class-name">printf</span>
<span class="token comment"># 输出为空</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-P</span> <span class="token builtin class-name">printf</span>
<span class="token comment"># 输出</span>
/usr/bin/printf
/bin/printf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果有多个类型，那么输出优先级最高的类型。</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token function">ls</span>
<span class="token comment"># 输出</span>
<span class="token builtin class-name">alias</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token keyword">for</span>
<span class="token comment"># 输出（bash关键字）</span>
keyword

<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> mybash
<span class="token comment"># 输出</span>
<span class="token keyword">function</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-f</span> mybash
<span class="token comment"># 输出空值</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">printf</span>
<span class="token comment"># 输出（bash内建优先级高）</span>
<span class="token builtin class-name">builtin</span>

<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token function">chmod</span>
<span class="token comment"># 输出</span>
<span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><p>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</p></li><li><p>命令优先级问题请查看<code>builtin</code>命令。</p></li></ol>`,19),t=[l];function c(p,d){return a(),s("div",null,t)}const m=n(i,[["render",c],["__file","type.html.vue"]]),u=JSON.parse('{"path":"/command/linux/type.html","title":"type","lang":"zh-CN","frontmatter":{"description":"type 显示指定命令的类型。 概要 主要用途 显示要查找的命令的信息。 控制查找范围和行为。 显示要查找的命令优先级最高的类型。 选项 参数 name：要查找的命令，可以为多个。 返回值 当指定的命令可以找到时返回成功，如果有没找到的返回失败。 例子 注意 该命令是bash内建命令，相关的帮助信息请查看help命令。 命令优先级问题请查看builti...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/type.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"type"}],["meta",{"property":"og:description","content":"type 显示指定命令的类型。 概要 主要用途 显示要查找的命令的信息。 控制查找范围和行为。 显示要查找的命令优先级最高的类型。 选项 参数 name：要查找的命令，可以为多个。 返回值 当指定的命令可以找到时返回成功，如果有没找到的返回失败。 例子 注意 该命令是bash内建命令，相关的帮助信息请查看help命令。 命令优先级问题请查看builti..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"type\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"command/linux/type.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
