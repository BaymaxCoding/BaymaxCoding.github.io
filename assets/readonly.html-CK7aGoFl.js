import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e}from"./app-D_HUMAmc.js";const l={},t=e(`<h1 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly"><span>readonly</span></a></h1><p>标记shell变量或函数为只读</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">readonly</span> <span class="token punctuation">[</span>-aAf<span class="token punctuation">]</span> <span class="token punctuation">[</span>name<span class="token punctuation">[</span><span class="token operator">=</span>value<span class="token punctuation">]</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>定义一到多个变量并设置只读属性。</li><li>为已定义的一到多个变量设置只读属性。</li><li>显示全部包含只读属性的变量。</li><li>为已定义的一到多个函数设置只读属性。</li><li>显示全部包含只读属性的函数。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a：指向数组。
-A：指向关联数组。
-f：指向函数。
-p：显示全部只读变量。
--：在它之后的选项无效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>name（可选）：变量名或函数名
value（可选）：变量的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><p>readonly返回true除非你提供了非法选项或非法名称。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 定义变量并增加只读属性</span>
<span class="token builtin class-name">readonly</span> <span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">13</span> var2
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">arr1</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token assign-left variable">arr2</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;z&#39;</span> <span class="token string">&#39;x&#39;</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 必须有 &#39;-A&#39; 选项</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">dict1</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 先定义变量、函数，然后再为它们添加只读属性</span>
<span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token builtin class-name">readonly</span> max

<span class="token comment"># 数组定义时可以不加 \`declare -a\`</span>
<span class="token assign-left variable">seasons</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;spring&#39;</span> <span class="token string">&#39;summer&#39;</span> <span class="token string">&#39;autumn&#39;</span> <span class="token string">&#39;winter&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 为数组添加只读属性时可以不加 \`-a\` 选项</span>
<span class="token builtin class-name">readonly</span> seasons

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">man</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">23</span> <span class="token punctuation">[</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;190cm&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 为关联数组添加只读属性时可以不加 \`-A\` 选项</span>
<span class="token builtin class-name">readonly</span> <span class="token function">man</span>

<span class="token keyword">function</span> <span class="token function-name function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment"># 为函数添加只读属性时必须加 \`-f\` 选项</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-f</span> foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示全部只读变量，以下两个命令的显示结果一样</span>
<span class="token builtin class-name">readonly</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 显示全部拥有只读属性的数组</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 显示全部拥有只读属性的关联数组</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-A</span>
<span class="token comment"># 显示全部拥有只读属性的函数</span>
<span class="token builtin class-name">readonly</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2><p>对于只读变量而言，若用户对其值进行修改，则会立即报错。例如，使用该指令定义一个只读变量&quot;test&quot;，并且将其值初始化为&quot;ok&quot;，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># readonly test=&#39;ok&#39;        #定义只读变量并初始化 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么当用户直接修改该只读变量时就会报错，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># test=&#39;my&#39;                 #试图修改只读变量的值</span>
-bash: test: <span class="token builtin class-name">readonly</span> variable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户试图修改只读变量的值时，会被提示该变量为只读变量。</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><ol><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li><li><code>declare +r</code>不能去除只读属性， <code>unset</code>不能删除只读变量。</li></ol>`,24),i=[t];function p(o,c){return n(),s("div",null,i)}const u=a(l,[["render",p],["__file","readonly.html.vue"]]),m=JSON.parse('{"path":"/command/linux/readonly.html","title":"readonly","lang":"zh-CN","frontmatter":{"description":"readonly 标记shell变量或函数为只读 语法 主要用途 定义一到多个变量并设置只读属性。 为已定义的一到多个变量设置只读属性。 显示全部包含只读属性的变量。 为已定义的一到多个函数设置只读属性。 显示全部包含只读属性的函数。 选项 参数 返回值 readonly返回true除非你提供了非法选项或非法名称。 例子 常见错误 对于只读变量而言，若...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/readonly.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"readonly"}],["meta",{"property":"og:description","content":"readonly 标记shell变量或函数为只读 语法 主要用途 定义一到多个变量并设置只读属性。 为已定义的一到多个变量设置只读属性。 显示全部包含只读属性的变量。 为已定义的一到多个函数设置只读属性。 显示全部包含只读属性的函数。 选项 参数 返回值 readonly返回true除非你提供了非法选项或非法名称。 例子 常见错误 对于只读变量而言，若..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"readonly\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"常见错误","slug":"常见错误","link":"#常见错误","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.97,"words":591},"filePathRelative":"command/linux/readonly.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};