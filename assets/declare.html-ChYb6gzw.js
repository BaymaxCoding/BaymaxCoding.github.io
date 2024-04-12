import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as p,a as n,b as a,d as e,e as l}from"./app-D_HUMAmc.js";const o={},r=l(`<h1 id="declare" tabindex="-1"><a class="header-anchor" href="#declare"><span>declare</span></a></h1><p>声明变量，设置或显示变量的值和属性。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token punctuation">[</span>-aAfFgilnrtux<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> <span class="token punctuation">[</span>name<span class="token punctuation">[</span><span class="token operator">=</span>value<span class="token punctuation">]</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>显示包含指定属性的全部变量和值</li><li>显示包含指定属性的一到多个变量和值</li><li>显示一到多个变量的属性和值</li><li>显示所有变量的属性和值并显示函数的定义</li><li>显示所有变量的属性和值</li><li>显示所有全局变量的属性和值</li><li>显示全部函数名和函数定义</li><li>只显示全部函数名</li><li>显示一到多个函数名和函数定义</li><li>只显示一到多个函数名</li><li>声明全局变量（可选：赋值）</li><li>声明变量（可选：赋值、属性）</li><li>增加、删除变量的属性（可选：赋值）</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-f</span> 将操作或显示限制为函数名及函数定义。
<span class="token parameter variable">-F</span> 只显示函数名（调试时附加行号和源文件）。
<span class="token parameter variable">-g</span> 在shell函数中使用时创建全局变量；其他情况下忽略。
<span class="token parameter variable">-p</span> 显示每个名称的属性和值。

*设置属性的选项:
<span class="token parameter variable">-a</span> 创建数组（如果支持）。
<span class="token parameter variable">-A</span> 创建关联数组（如果支持）。
<span class="token parameter variable">-i</span> 增加整型属性。
+i 删除整型属性。
<span class="token parameter variable">-l</span> 增加小写属性，变量的值将转换为小写。
+l 删除小写属性。
<span class="token parameter variable">-n</span> 增加引用属性（如果该选项存在）。
+n 删除引用属性（如果该选项存在）。
<span class="token parameter variable">-r</span> 增加只读属性。
<span class="token parameter variable">-t</span> 增加追踪属性。
+t 删除追踪属性。
<span class="token parameter variable">-u</span> 增加大写属性，变量的值将转换为大写。
+u 删除大写属性。
<span class="token parameter variable">-x</span> 增加导出属性。
+x 删除导出属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>name（可选）：变量名或函数名。
value（可选）：变量的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>declare 返回true除非你提供了非法选项或赋值错误。具体导致异常的情况请查看<strong>讨论</strong>章节的<strong>关于异常情况</strong>。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 声明变量，当然也欢迎您在这个网站（感谢本项目发起人 @jaywcjlove）查询linux命令。</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">reference_website</span><span class="token operator">=</span><span class="token string">&#39;https://wangchujiang.com/linux-command/&#39;</span>

<span class="token comment"># 显示所有包含整型属性的变量和值。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span>
<span class="token comment"># 定义变量b并赋值为3，具有整型属性。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token comment"># 显示属性，返回 declare -i b=&quot;5&quot;。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> b
<span class="token comment"># 删除整型属性。</span>
<span class="token builtin class-name">declare</span> +i b
<span class="token comment"># 显示属性，返回 declare -- b=&quot;5&quot;。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> b
<span class="token comment"># 根据变量属性强制转换值的英文大小写。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-u</span> <span class="token assign-left variable">uc_var</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-l</span> <span class="token assign-left variable">lc_var</span><span class="token operator">=</span><span class="token string">&#39;ABC&#39;</span>
<span class="token comment"># 显示&#39;ABC abc&#39;;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${uc_var}</span> <span class="token variable">\${lc_var}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 定义函数内的全局变量</span>
<span class="token keyword">function</span> <span class="token function-name function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">declare</span> <span class="token parameter variable">-g</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
  <span class="token comment"># 或者</span>
  <span class="token builtin class-name">local</span> <span class="token parameter variable">-g</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">3</span>
  <span class="token comment"># 或者</span>
  <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">3</span>
  <span class="token comment"># 让我们查看它们的属性。</span>
  <span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span> a b c
<span class="token punctuation">}</span>
<span class="token comment"># 执行函数。</span>
<span class="token builtin class-name">test</span>
<span class="token comment"># 返回结果。</span>
<span class="token comment"># declare -- a=&quot;3&quot;</span>
<span class="token comment"># declare -- b=&quot;3&quot;</span>
<span class="token comment"># declare -- c=&quot;3&quot;</span>

<span class="token comment"># 定义函数外的全局变量</span>
<span class="token builtin class-name">declare</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token builtin class-name">declare</span> –p a b
<span class="token comment"># 返回结果如下。</span>
<span class="token comment"># declare -- a=&quot;3&quot;</span>
<span class="token comment"># declare -- b=&quot;3&quot;</span>

<span class="token comment"># 定义局部变量</span>
<span class="token keyword">function</span> <span class="token function-name function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
  <span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token punctuation">}</span>
test2
<span class="token comment"># 没有该变量（已经被销毁了）</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${a}</span> <span class="token variable">\${b}</span>&quot;</span>
<span class="token comment"># 因此，我们日常脚本中最常见的类似于&#39;a=3&#39;实际上是声明并赋值了一个全局变量。</span>
<span class="token comment"># 在接下来的 **讨论** 环节会延伸讨论全局和局部变量问题。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 注意，不能使用 \`+a\` 或 \`+A\` 取消数组，也不能使用 \`+r\` 取消只读属性。</span>

<span class="token comment"># 定义只读数组，设置属性的同时定义赋值。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-ar</span> <span class="token assign-left variable">season</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Spring&#39;</span> <span class="token string">&#39;Summer&#39;</span> <span class="token string">&#39;Autumn&#39;</span> <span class="token string">&#39;Winter&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 或者这样。</span>
<span class="token assign-left variable">season</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;Spring&#39;</span> <span class="token string">&#39;Summer&#39;</span> <span class="token string">&#39;Autumn&#39;</span> <span class="token string">&#39;Winter&#39;</span><span class="token punctuation">)</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-ar</span> season
<span class="token comment"># 显示所有数组。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 定义关联数组。</span>

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">fruits</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;red&#39;</span> <span class="token punctuation">[</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 显示所有关联数组。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示所有变量的属性和值并显示函数的定义，输出很长。</span>
<span class="token builtin class-name">declare</span>
<span class="token comment"># 显示所有变量的属性和值。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 显示所有全局变量的属性和值。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示全部函数名和函数定义。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-f</span>
<span class="token comment"># 只显示全部函数名。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-F</span>

<span class="token comment"># 定义两个函数。</span>
<span class="token keyword">function</span> <span class="token function-name function">func_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%F %T&quot;</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">func_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token builtin class-name">cd</span> /<span class="token punctuation">;</span> <span class="token function">ls</span> <span class="token parameter variable">-lh</span> <span class="token parameter variable">--sort</span><span class="token operator">=</span>time<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment"># 显示一到多个函数名和函数定义。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-f</span> func_a func_b
<span class="token comment"># 只显示一到多个函数名，验证某个名称是否已经定义为函数时有用。</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-F</span> func_a func_b
<span class="token comment"># 最好不要让函数名和变量名相同。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="讨论" tabindex="-1"><a class="header-anchor" href="#讨论"><span>讨论</span></a></h2>`,19),d=l("<p>全局和局部变量</p><p>正如上面<strong>例子</strong>指出的情况，我们在日常编写程序的时候需要了解这些概念，在这里 做个简要地介绍，当然你也可以很方便的搜索到相关内容。</p><ul><li>全局变量：在整个脚本执行期间，只要没有被删除就<strong>一直存在</strong>。</li><li>局部变量：在函数内定义，函数执行后就被删除。</li></ul><p>建议函数内使用<code>local</code>命令，函数外使用<code>declare</code>命令。</p><blockquote><p><em>不要在脚本中定义过多的全局变量，那样可能会被其他函数调用造成意料之外的后果，并且也不方便检查出来。</em></p><p><em>更不用说缺乏必要的注释了 —— ZhuangZhu-74</em></p></blockquote><p>相关资料：</p>",6),u={href:"https://github.com/google/styleguide",target:"_blank",rel:"noopener noreferrer"},m={href:"https://unix.stackexchange.com/questions/381761/what-do-declare-name-and-declare-g-do",target:"_blank",rel:"noopener noreferrer"},v=l("<li><p>关于<code>declare</code> <code>typeset</code> <code>export</code> <code>local</code> <code>readonly</code>命令</p><p>为什么<code>declare</code>能做到的事，还需要定义其他这些命令呢？</p><p>因为这样语句含义会更加明确，例如：</p><ul><li>设置导出属性的变量时，<code>export var</code>和<code>declare -x var</code>。</li><li>在函数内声明变量时，使用<code>local</code>。</li><li>声明只读变量，使用<code>readonly</code>。</li></ul><p><code>typeset</code>和<code>declare</code>命令一样。</p></li>",1),b=n("p",null,"关于异常情况",-1),k=n("code",null,"declare",-1),h={href:"https://www.gnu.org/software/bash/manual/bash.html#index-declare",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"info bash",-1),f=n("code",null,"declare",-1),_=n("code",null,"an attempt is",-1),x=n("h3",{id:"注意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注意"},[n("span",null,"注意")])],-1),y=n("ol",null,[n("li",null,[a("该命令是bash内建命令，相关的帮助信息请查看"),n("code",null,"help"),a("命令。")]),n("li",null,"导出属性的相关介绍请查看'export'命令。"),n("li",null,"只读属性的相关介绍请查看'readonly'命令。"),n("li",null,"引用属性的相关介绍请查看'unset'命令的例子部分。")],-1);function q(w,A){const s=t("ExternalLinkIcon");return c(),p("div",null,[r,n("ol",null,[n("li",null,[d,n("ul",null,[n("li",null,[n("a",u,[a("google提供的编码规范"),e(s)])]),n("li",null,[n("a",m,[a("全局变量的讨论"),e(s)])])])]),v,n("li",null,[b,n("p",null,[a("有多种原因导致"),k,a("失败，关于这些情况可以参考"),n("a",h,[a("bash在线文档declare部分(最新版)"),e(s)]),a("，或执行 "),g,a(" 查看"),f,a("部分最后一大串"),_,a("开头的句子。")])])]),x,y])}const T=i(o,[["render",q],["__file","declare.html.vue"]]),N=JSON.parse('{"path":"/command/linux/declare.html","title":"declare","lang":"zh-CN","frontmatter":{"description":"declare 声明变量，设置或显示变量的值和属性。 语法 主要用途 显示包含指定属性的全部变量和值 显示包含指定属性的一到多个变量和值 显示一到多个变量的属性和值 显示所有变量的属性和值并显示函数的定义 显示所有变量的属性和值 显示所有全局变量的属性和值 显示全部函数名和函数定义 只显示全部函数名 显示一到多个函数名和函数定义 只显示一到多个函数名 ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/declare.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"declare"}],["meta",{"property":"og:description","content":"declare 声明变量，设置或显示变量的值和属性。 语法 主要用途 显示包含指定属性的全部变量和值 显示包含指定属性的一到多个变量和值 显示一到多个变量的属性和值 显示所有变量的属性和值并显示函数的定义 显示所有变量的属性和值 显示所有全局变量的属性和值 显示全部函数名和函数定义 只显示全部函数名 显示一到多个函数名和函数定义 只显示一到多个函数名 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"declare\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"讨论","slug":"讨论","link":"#讨论","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":5.04,"words":1512},"filePathRelative":"command/linux/declare.md","localizedDate":"2024年4月12日","autoDesc":true}');export{T as comp,N as data};
