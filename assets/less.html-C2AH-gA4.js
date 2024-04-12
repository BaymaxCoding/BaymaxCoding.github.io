import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as a}from"./app-DOGW-9XX.js";const i={},l=a(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less"><span>less</span></a></h1><p>分屏上下翻页浏览文件内容</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>less命令</strong> 的作用与more十分相似，都可以用来浏览文字档案的内容，不同的是less命令允许用户向前或向后浏览文件，而more命令只能向前浏览。用less命令显示文件时，用PageUp键向上翻页，用PageDown键向下翻页。要退出less程序，应按Q键。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>less<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-e：文件内容显示完毕后，自动退出；
-f：强制显示文件；
-g：不加亮显示搜索到的所有关键词，仅显示当前显示的关键字，以提高显示速度；
-l：搜索时忽略大小写的差异；
-N：每一行行首显示行号；
-s：将连续多个空行压缩成一行显示；
-S：在单行显示较长的内容，而不换行显示；
-x<span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>：将TAB字符显示为指定个数的空格字符。
-r：能够显示设置的颜色。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件：指定要分屏显示内容的文件。</p><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">less</span> /var/log/shadowsocks.log

/字符串：向下搜索<span class="token string">&quot;字符串&quot;</span>的功能
?字符串：向上搜索<span class="token string">&quot;字符串&quot;</span>的功能
n：继续向后搜索
N：向前搜索
b: 向后翻一页
d: 向后翻半页
u: 向前滚动半页
y: 向前滚动一行
Q: 退出less 命令
空格键: 滚动一页
回车键: 滚动一行
<span class="token punctuation">[</span>pagedown<span class="token punctuation">]</span>： 向下翻动一页
<span class="token punctuation">[</span>pageup<span class="token punctuation">]</span>： 向上翻动一页
G: 移动到最后一行
g: 移动到第一行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[l];function d(o,r){return s(),n("div",null,t)}const m=e(i,[["render",d],["__file","less.html.vue"]]),u=JSON.parse('{"path":"/command/linux/less.html","title":"less","lang":"zh-CN","frontmatter":{"description":"less 分屏上下翻页浏览文件内容 补充说明 less命令 的作用与more十分相似，都可以用来浏览文字档案的内容，不同的是less命令允许用户向前或向后浏览文件，而more命令只能向前浏览。用less命令显示文件时，用PageUp键向上翻页，用PageDown键向下翻页。要退出less程序，应按Q键。 语法 选项 参数 文件：指定要分屏显示内容的文件...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/less.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"less"}],["meta",{"property":"og:description","content":"less 分屏上下翻页浏览文件内容 补充说明 less命令 的作用与more十分相似，都可以用来浏览文字档案的内容，不同的是less命令允许用户向前或向后浏览文件，而more命令只能向前浏览。用less命令显示文件时，用PageUp键向上翻页，用PageDown键向下翻页。要退出less程序，应按Q键。 语法 选项 参数 文件：指定要分屏显示内容的文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"less\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.3,"words":390},"filePathRelative":"command/linux/less.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
