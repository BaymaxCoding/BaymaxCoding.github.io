import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-DOGW-9XX.js";const i={},l=e(`<h1 id="nl" tabindex="-1"><a class="header-anchor" href="#nl"><span>nl</span></a></h1><p>为每一个文件添加行号。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nl</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>将每一个输入的文件添加行号后发送到标准输出。</li><li>当没有文件或文件为<code>-</code>时，读取标准输入</li><li>处理逻辑页（logical page）。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b, --body-numbering<span class="token operator">=</span>STYLE           使用STYLE 为body部分的行附加行号。
-d, --section-delimiter<span class="token operator">=</span>CC           使用CC作为logical page的分隔符。
-f, --footer-numbering<span class="token operator">=</span>STYLE         使用STYLE 为footer部分的行附加行号。
-h, --header-numbering<span class="token operator">=</span>STYLE         使用STYLE 为header部分的行附加行号。
-i, --line-increment<span class="token operator">=</span>NUMBER          行号递增间隔为NUMBER。
-l, --join-blank-lines<span class="token operator">=</span>NUMBER        连续NUMBER行的空行作为一行处理。
-n, --number-format<span class="token operator">=</span>FORMAT           根据FORMAT插入行号。
-p, --no-renumber                    不要在每个部分重置行号。
-s, --number-separator<span class="token operator">=</span>STRING        在行号后添加字符串STRING。
-v, --starting-line-number<span class="token operator">=</span>NUMBER    每部分的起始行号。
-w, --number-width<span class="token operator">=</span>NUMBER            行号宽度为NUMBER。
<span class="token parameter variable">--help</span>                               显示帮助信息并退出。
<span class="token parameter variable">--version</span>                            显示版本信息并退出。


默认选项为：-bt -d<span class="token string">&#39;\\:&#39;</span> <span class="token parameter variable">-fn</span> <span class="token parameter variable">-hn</span> <span class="token parameter variable">-i1</span> <span class="token parameter variable">-l1</span> <span class="token parameter variable">-nrn</span> <span class="token parameter variable">-sTAB</span> <span class="token parameter variable">-v1</span> <span class="token parameter variable">-w6</span>

CC是由两个字符组成的，默认为<span class="token punctuation">\\</span>: ,第二个字符如果缺失则默认为:

STYLE可以为下列可用值之一：

a       所有行标记行号。
t       仅为非空行标记行号。
n       不标记行号。
pBRE    符合基础正则表达式（BRE）的行会标记行号。

FORMAT可以为下列可用值之一：

<span class="token function">ln</span>    左对齐，不会在开始部分补充0以满足宽度。
rn    右对齐，不会在开始部分补充0以满足宽度。
rz    右对齐，会在开始部分补充0以满足宽度。

logical page
三部分组成（header， body， footer）
起始标记（header <span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:， body <span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:， footer <span class="token punctuation">\\</span>:）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>FILE（可选）：要处理的文件，可以为一或多个。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nl_logicalpage.txt：该文件用于说明nl命令处理逻辑页，内容如下：
<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:
header_1
<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:
body_1
<span class="token punctuation">\\</span>:
footer_1
<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:
header_2
<span class="token punctuation">\\</span>:<span class="token punctuation">\\</span>:
body_2
<span class="token punctuation">\\</span>:
footer_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">nl</span> nl_logicalpage.txt

       header_1

     <span class="token number">1</span>	body_1

       footer_1

       header_2

     <span class="token number">1</span>	body_2

       footer_2

<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">nl</span> <span class="token parameter variable">-v0</span> <span class="token parameter variable">-fa</span> <span class="token parameter variable">-ha</span> nl_logicalpage.txt

     <span class="token number">0</span>	header_1

     <span class="token number">1</span>	body_1

     <span class="token number">2</span>	footer_1

     <span class="token number">0</span>	header_2

     <span class="token number">1</span>	body_2

     <span class="token number">2</span>	footer_2

<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">nl</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-fa</span> <span class="token parameter variable">-ha</span> nl_logicalpage.txt

     <span class="token number">1</span>	header_1

     <span class="token number">2</span>	body_1

     <span class="token number">3</span>	footer_1

     <span class="token number">4</span>	header_2

     <span class="token number">5</span>	body_2

     <span class="token number">6</span>	footer_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nl_normal.txt：该文件用于说明nl命令处理普通文件，内容如下：
ZhuangZhu-74
<span class="token number">2019</span>-11-21
<span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">nl</span> nl_normal.txt
     <span class="token number">1</span>	ZhuangZhu-74
     <span class="token number">2</span>	<span class="token number">2019</span>-11-21
     <span class="token number">3</span>	<span class="token number">127.0</span>.0.1

<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">nl</span> <span class="token parameter variable">-b</span> p<span class="token string">&#39;1$&#39;</span> nl_normal.txt
       ZhuangZhu-74
     <span class="token number">1</span>	<span class="token number">2019</span>-11-21
     <span class="token number">2</span>	<span class="token number">127.0</span>.0.1

<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">nl</span> <span class="token parameter variable">-b</span> p<span class="token string">&#39;^[A-Z]&#39;</span> nl_normal.txt
     <span class="token number">1</span>	ZhuangZhu-74
       <span class="token number">2019</span>-11-21
       <span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 nl</code>，<code>info coreutils &#39;nl invocation&#39;</code>。</li></ol>`,19),t=[l];function r(c,d){return a(),s("div",null,t)}const u=n(i,[["render",r],["__file","nl.html.vue"]]),v=JSON.parse('{"path":"/command/linux/nl.html","title":"nl","lang":"zh-CN","frontmatter":{"description":"nl 为每一个文件添加行号。 概要 主要用途 将每一个输入的文件添加行号后发送到标准输出。 当没有文件或文件为-时，读取标准输入 处理逻辑页（logical page）。 选项 参数 FILE（可选）：要处理的文件，可以为一或多个。 返回值 返回0表示成功，返回非0值表示失败。 例子 注意 该命令是GNU coreutils包中的命令，相关的帮助信息请...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/nl.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"nl"}],["meta",{"property":"og:description","content":"nl 为每一个文件添加行号。 概要 主要用途 将每一个输入的文件添加行号后发送到标准输出。 当没有文件或文件为-时，读取标准输入 处理逻辑页（logical page）。 选项 参数 FILE（可选）：要处理的文件，可以为一或多个。 返回值 返回0表示成功，返回非0值表示失败。 例子 注意 该命令是GNU coreutils包中的命令，相关的帮助信息请..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nl\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.14,"words":641},"filePathRelative":"command/linux/nl.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,v as data};
