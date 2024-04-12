import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,b as a}from"./app-D3p8wuGf.js";const s={},d=a(`<h1 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h1><p>Linux下info格式的帮助指令</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>info命令</strong> 是Linux下info格式的帮助指令。</p><p>就内容来说，info页面比man page编写得要更好、更容易理解，也更友好，但man page使用起来确实要更容易得多。一个man page只有一页，而info页面几乎总是将它们的内容组织成多个区段（称为节点），每个区段也可能包含子区段（称为子节点）。理解这个命令的窍门就是不仅要学习如何在单独的Info页面中浏览导航，还要学习如何在节点和子节点之间切换。可能刚开始会一时很难在info页面的节点之间移动和找到你要的东西，真是具有讽刺意味：原本以为对于新手来说，某个东西比man命令会更好些，但实际上学习和使用起来更困难。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>info<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-d：添加包含info格式帮助文档的目录；
-f：指定要读取的info格式的帮助文档；
-n：指定首先访问的info帮助文件的节点；
-o：输出被选择的节点内容到指定文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>帮助主题：指定需要获得帮助的主题，可以是指令、函数以及配置文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>在info后面输入命令的名称就可以查看该命令的info帮助文档了：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>info info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>面介绍一下它的几个常用快捷键。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> **?键：** 它就会显示info的常用快捷键。
 **N键：** 显示（相对于本节点的）下一节点的文档内容。
 **P键：** 显示（相对于本节点的）前一节点的文档内容。
 **U键：** 进入当前命令所在的主题。
 **M键：** 敲M键后输入命令的名称就可以查看该命令的帮助文档了。
 **G键：** 敲G键后输入主题名称，进入该主题。
 **L键：** 回到上一个访问的页面。
 **SPACE键：** 向前滚动一页。
 **BACKUP或DEL键：** 向后滚动一页。
 **Q：** 退出info。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> **？**      显示帮助窗口

在帮助窗口中：
 **Ctrl-x <span class="token number">0</span>**           关闭帮助窗口
 **Ctrl-x Ctrl-c**     关闭整个 Info

 **q**       退出 info
 **n**       打开与本 Node 关联的下一个 Node
 **p**       打开与本 Node 关联的前一个 Node
 **u**       打开与本 Node 关联的上一个 Node
 **l**       回到上一次访问的 Node
 **m或g**    选择一个菜单项（Node 的名字）
       输入指定菜单的名字后按回车，打开指定菜单项关联的 Node
 **空格键**  下一页（PageDown 也可以，下一页从当前页的最后两行开始算起）
       下一个 Node （若当前页在 Node 文档的末尾）
 **Del 键**  上一页（PageUp 也可以，上一页从当前页的开始两行开始算起）
       上一个 Node （若当前页 Node 文档的开始）

 **b 或 t 或 Home**    文档的开始（b 是 beginning 的意思）
 **e 或 End**          文档的末尾（b 是 ending 的意思）
 **Ctrl-l**     刷新当前页，若当前文档显示情况有问题时
 **Ctrl-g**     取消所键入的指令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[d];function t(o,r){return e(),i("div",null,l)}const v=n(s,[["render",t],["__file","info.html.vue"]]),u=JSON.parse('{"path":"/command/linux/info.html","title":"info","lang":"zh-CN","frontmatter":{"description":"info Linux下info格式的帮助指令 补充说明 info命令 是Linux下info格式的帮助指令。 就内容来说，info页面比man page编写得要更好、更容易理解，也更友好，但man page使用起来确实要更容易得多。一个man page只有一页，而info页面几乎总是将它们的内容组织成多个区段（称为节点），每个区段也可能包含子区段（称为...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/info.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"info"}],["meta",{"property":"og:description","content":"info Linux下info格式的帮助指令 补充说明 info命令 是Linux下info格式的帮助指令。 就内容来说，info页面比man page编写得要更好、更容易理解，也更友好，但man page使用起来确实要更容易得多。一个man page只有一页，而info页面几乎总是将它们的内容组织成多个区段（称为节点），每个区段也可能包含子区段（称为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"info\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.66,"words":797},"filePathRelative":"command/linux/info.md","localizedDate":"2024年4月12日","autoDesc":true}');export{v as comp,u as data};
