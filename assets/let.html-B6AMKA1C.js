import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as s}from"./app-D3p8wuGf.js";const t={},l=s(`<h1 id="let" tabindex="-1"><a class="header-anchor" href="#let"><span>let</span></a></h1><p>简单的计算器，执行算术表达式。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> arg <span class="token punctuation">[</span>arg <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>执行一个或多个算术表达式。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>arg：算术表达式</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>当<code>let</code>最后一个执行的表达式的计算结果为0时返回<code>1</code>，否则返回<code>0</code>。 当<code>let</code>执行的表达式的除数为0时，返回<code>1</code>并报错。</p><h2 id="运算符优先级递减表" tabindex="-1"><a class="header-anchor" href="#运算符优先级递减表"><span>运算符优先级递减表</span></a></h2><table><thead><tr><th style="text-align:center;"><strong>运算符</strong></th><th style="text-align:center;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><code>id++, id--</code></td><td style="text-align:center;"><code>变量后增量、变量后减量</code></td></tr><tr><td style="text-align:center;"><code>++id, --id</code></td><td style="text-align:center;"><code>变量预增量、变量预减量</code></td></tr><tr><td style="text-align:center;"><code>-, +</code></td><td style="text-align:center;"><code>正号、负号</code></td></tr><tr><td style="text-align:center;"><code>!, ~</code></td><td style="text-align:center;"><code>逻辑否、按位取反</code></td></tr><tr><td style="text-align:center;"><code>**</code></td><td style="text-align:center;"><code>幂运算</code></td></tr><tr><td style="text-align:center;"><code>*, /, %</code></td><td style="text-align:center;"><code>乘法、除法、取余</code></td></tr><tr><td style="text-align:center;"><code>+, -</code></td><td style="text-align:center;"><code>加法、减法</code></td></tr><tr><td style="text-align:center;"><code>&lt;&lt;, &gt;&gt;</code></td><td style="text-align:center;"><code>按位左移、右移</code></td></tr><tr><td style="text-align:center;"><code>&lt;=, &gt;=, &lt;, &gt;</code></td><td style="text-align:center;"><code>比较</code></td></tr><tr><td style="text-align:center;"><code>==, !=</code></td><td style="text-align:center;"><code>等于、不等于</code></td></tr><tr><td style="text-align:center;"><code>&amp;</code></td><td style="text-align:center;"><code>按位与</code></td></tr><tr><td style="text-align:center;"><code>^</code></td><td style="text-align:center;"><code>按位异或</code></td></tr><tr><td style="text-align:center;"><code>|</code></td><td style="text-align:center;"><code>按位或</code></td></tr><tr><td style="text-align:center;"><code>&amp;&amp;</code></td><td style="text-align:center;"><code>逻辑与</code></td></tr><tr><td style="text-align:center;"><code>||</code></td><td style="text-align:center;"><code>逻辑或</code></td></tr><tr><td style="text-align:center;"><code>expr ? expr : expr</code></td><td style="text-align:center;"><code>条件运算符（三元运算符）</code></td></tr><tr><td style="text-align:center;"><code>=, *=, /=, %=, +=, -=,</code><br><code>&lt;&lt;=, &gt;&gt;=, &amp;=, ^=, |=</code></td><td style="text-align:center;"><code>赋值</code></td></tr></tbody></table><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 尝试直接在终端中执行算术表达式（就像在python的IDLE）。</span>
<span class="token number">3</span>+4
bash：3+4：command not found<span class="token punctuation">..</span>.
<span class="token comment"># 换一种方式。</span>
<span class="token number">3</span> + <span class="token number">4</span>
bash：3：command not found<span class="token punctuation">..</span>.
<span class="token comment"># 看来不行。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># let命令赋值。</span>
<span class="token builtin class-name">let</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>**4
<span class="token builtin class-name">echo</span> <span class="token variable">\${a}</span>
<span class="token comment"># 显示81。</span>
<span class="token comment"># ((...))和let命令等效。</span>
<span class="token variable"><span class="token punctuation">((</span>a<span class="token operator">=</span><span class="token number">3</span><span class="token operator">**</span><span class="token number">4</span><span class="token punctuation">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># let常用于变量赋值，而外部命令expr可直接返回表达式的值。</span>
<span class="token builtin class-name">let</span> <span class="token number">3</span>+4
<span class="token comment"># 没有显示7。</span>
<span class="token comment"># 执行后显示7，注意空格。</span>
<span class="token function">expr</span> <span class="token number">3</span> + <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 条件表达式。</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span><span class="token number">8</span><span class="token operator">&gt;</span><span class="token number">4</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;8 is greater than 4.&#39;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;error&#39;</span>
<span class="token keyword">fi</span>
<span class="token comment"># 注意空格。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token number">12</span> <span class="token parameter variable">-le</span> <span class="token number">10</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;error&#39;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;12 is greater than 10.&#39;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 可以通过declare命令设置整型属性的方法来进行算术运算。</span>
<span class="token comment"># local命令与此类似。</span>

<span class="token comment"># 没有指定整型属性，输出为字符串&#39;a+b&#39;。</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">4</span> c
<span class="token assign-left variable">c</span><span class="token operator">=</span>a+b
<span class="token builtin class-name">echo</span> <span class="token variable">\${c}</span>
<span class="token comment"># 不过可以使用以下方式赋值。</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>a<span class="token operator">+</span>b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${c}</span>
<span class="token comment"># 显示7</span>

<span class="token comment"># 设置了整型属性就可以直接加了。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">4</span> c
<span class="token assign-left variable">c</span><span class="token operator">=</span>a+b
<span class="token builtin class-name">echo</span> <span class="token variable">\${c}</span>
<span class="token comment"># 同上。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> a
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">2</span>*3
<span class="token builtin class-name">echo</span> <span class="token variable">\${a}</span>
<span class="token comment"># 显示6。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><p>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</p></li><li><p>执行算术计算的命令除了<code>let</code>，还有外部命令<code>expr</code>、<code>bc</code>等。</p></li></ol>`,20),c=[l];function i(d,o){return n(),a("div",null,c)}const m=e(t,[["render",i],["__file","let.html.vue"]]),u=JSON.parse('{"path":"/command/linux/let.html","title":"let","lang":"zh-CN","frontmatter":{"description":"let 简单的计算器，执行算术表达式。 概要 主要用途 执行一个或多个算术表达式。 参数 arg：算术表达式 返回值 当let最后一个执行的表达式的计算结果为0时返回1，否则返回0。 当let执行的表达式的除数为0时，返回1并报错。 运算符优先级递减表 例子 注意 该命令是bash内建命令，相关的帮助信息请查看help命令。 执行算术计算的命令除了le...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/let.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"let"}],["meta",{"property":"og:description","content":"let 简单的计算器，执行算术表达式。 概要 主要用途 执行一个或多个算术表达式。 参数 arg：算术表达式 返回值 当let最后一个执行的表达式的计算结果为0时返回1，否则返回0。 当let执行的表达式的除数为0时，返回1并报错。 运算符优先级递减表 例子 注意 该命令是bash内建命令，相关的帮助信息请查看help命令。 执行算术计算的命令除了le..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"let\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"运算符优先级递减表","slug":"运算符优先级递减表","link":"#运算符优先级递减表","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"command/linux/let.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
