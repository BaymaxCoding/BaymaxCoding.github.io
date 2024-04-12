import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-D3p8wuGf.js";const i={},t=e(`<h1 id="dirs" tabindex="-1"><a class="header-anchor" href="#dirs"><span>dirs</span></a></h1><p>显示目录堆栈。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">dirs</span> <span class="token punctuation">[</span>-clpv<span class="token punctuation">]</span> <span class="token punctuation">[</span>+N<span class="token punctuation">]</span> <span class="token punctuation">[</span>-N<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>显示目录堆栈。</li><li>清空目录堆栈。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span>    清空目录堆栈。
<span class="token parameter variable">-l</span>    堆栈内以~开头的目录在显示时展开。
<span class="token parameter variable">-p</span>    将目录堆栈内的每一个目录按行显示。
<span class="token parameter variable">-v</span>    将目录堆栈内的每一个目录按行显示并在每行前加上堆栈内的位置编号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>+N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，左起的第N个目录将被显示。（从0开始计数）</p><p>-N（可选）：不带参数执行<code>dirs</code>命令显示的列表中，右起的第N个目录将被显示。（从0开始计数）</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回成功除非提供了非法选项或执行出现错误。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加目录到堆栈。</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span>
~
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Desktop
~ ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/Pictures
~ ~/Pictures ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">pushd</span> <span class="token parameter variable">-n</span> ~/bin
~ ~/bin ~/Pictures ~/Desktop

<span class="token comment"># 选项和参数的示例：</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-l</span>
/home/user2 /home/user2/bin /home/user2/Pictures /home/user2/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-p</span>
~
~/bin
~/Pictures
~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-v</span>
 <span class="token number">0</span>  ~
 <span class="token number">1</span>  ~/bin
 <span class="token number">2</span>  ~/Pictures
 <span class="token number">3</span>  ~/Desktop
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> +2
~/Pictures
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-2</span>
~/bin
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span> <span class="token parameter variable">-c</span>
<span class="token punctuation">[</span>user2@pc ~<span class="token punctuation">]</span>$ <span class="token function">dirs</span>
~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><code>bash</code>的目录堆栈命令包括<code>dirs popd pushd</code>。</li><li>当前目录始终是目录堆栈的顶部。</li><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li></ol>`,17),l=[t];function c(p,r){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","dirs.html.vue"]]),m=JSON.parse('{"path":"/command/linux/dirs.html","title":"dirs","lang":"zh-CN","frontmatter":{"description":"dirs 显示目录堆栈。 语法 主要用途 显示目录堆栈。 清空目录堆栈。 选项 参数 +N（可选）：不带参数执行dirs命令显示的列表中，左起的第N个目录将被显示。（从0开始计数） -N（可选）：不带参数执行dirs命令显示的列表中，右起的第N个目录将被显示。（从0开始计数） 返回值 返回成功除非提供了非法选项或执行出现错误。 例子 注意 bash的目...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dirs.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dirs"}],["meta",{"property":"og:description","content":"dirs 显示目录堆栈。 语法 主要用途 显示目录堆栈。 清空目录堆栈。 选项 参数 +N（可选）：不带参数执行dirs命令显示的列表中，左起的第N个目录将被显示。（从0开始计数） -N（可选）：不带参数执行dirs命令显示的列表中，右起的第N个目录将被显示。（从0开始计数） 返回值 返回成功除非提供了非法选项或执行出现错误。 例子 注意 bash的目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dirs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"command/linux/dirs.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
