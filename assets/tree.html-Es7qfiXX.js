import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as s}from"./app-DOGW-9XX.js";const t={},i=s(`<h1 id="tree" tabindex="-1"><a class="header-anchor" href="#tree"><span>tree</span></a></h1><p>树状图列出目录的内容</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>tree命令</strong> 以树状图列出目录的内容。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tree<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>------- 列表选项 -------
<span class="token parameter variable">-a</span>            <span class="token comment"># 显示所有文件和目录。</span>
<span class="token parameter variable">-d</span>            <span class="token comment"># 显示目录名称而非文件。</span>
<span class="token parameter variable">-l</span>            <span class="token comment"># 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。</span>
<span class="token parameter variable">-f</span>            <span class="token comment"># 在每个文件或目录之前，显示完整的相对路径名称。</span>
<span class="token parameter variable">-x</span>            <span class="token comment"># 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该目录予以排除在寻找范围外。</span>
<span class="token parameter variable">-L</span> level      <span class="token comment"># 限制目录显示层级。</span>
<span class="token parameter variable">-R</span>            <span class="token comment"># Rerun tree when max dir level reached.</span>
<span class="token parameter variable">-P</span> pattern    <span class="token comment"># &lt;范本样式&gt; 只显示符合范本样式的文件和目录名称。</span>
<span class="token parameter variable">-I</span> pattern    <span class="token comment"># Do not list files that match the given pattern.</span>
--ignore-case <span class="token comment"># Ignore case when pattern matching.</span>
<span class="token parameter variable">--matchdirs</span>   <span class="token comment"># Include directory names in -P pattern matching.</span>
<span class="token parameter variable">--noreport</span>    <span class="token comment"># Turn off file/directory count at end of tree listing.</span>
<span class="token parameter variable">--charset</span> X   <span class="token comment"># Use charset X for terminal/HTML and indentation line output.</span>
<span class="token parameter variable">--filelimit</span> <span class="token comment"># # Do not descend dirs with more than # files in them.</span>
<span class="token parameter variable">--timefmt</span> <span class="token operator">&lt;</span>f<span class="token operator">&gt;</span> <span class="token comment"># Print and format time according to the format &lt;f&gt;.</span>
<span class="token parameter variable">-o</span> filename   <span class="token comment"># Output to file instead of stdout.</span>
-------- 文件选项 ---------
<span class="token parameter variable">-q</span>            <span class="token comment"># 用“？”号取代控制字符，列出文件和目录名称。</span>
<span class="token parameter variable">-N</span>            <span class="token comment"># 直接列出文件和目录名称，包括控制字符。</span>
<span class="token parameter variable">-Q</span>            <span class="token comment"># Quote filenames with double quotes.</span>
<span class="token parameter variable">-p</span>            <span class="token comment"># 列出权限标示。</span>
<span class="token parameter variable">-u</span>            <span class="token comment"># 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。</span>
<span class="token parameter variable">-g</span>            <span class="token comment"># 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。</span>
<span class="token parameter variable">-s</span>            <span class="token comment"># 列出文件和目录大小。</span>
<span class="token parameter variable">-h</span>            <span class="token comment"># Print the size in a more human readable way.</span>
<span class="token parameter variable">--si</span>          <span class="token comment"># Like -h, but use in SI units (powers of 1000).</span>
<span class="token parameter variable">-D</span>            <span class="token comment"># 列出文件或目录的更改时间。</span>
<span class="token parameter variable">-F</span>            <span class="token comment"># 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上&quot;*&quot;，&quot;/&quot;，&quot;@&quot;，&quot;|&quot;号。</span>
<span class="token parameter variable">--inodes</span>      <span class="token comment"># Print inode number of each file.</span>
<span class="token parameter variable">--device</span>      <span class="token comment"># Print device ID number to which each file belongs.</span>
------- 排序选项 -------
<span class="token parameter variable">-v</span>            <span class="token comment"># Sort files alphanumerically by version.</span>
<span class="token parameter variable">-t</span>            <span class="token comment"># 用文件和目录的更改时间排序。</span>
<span class="token parameter variable">-c</span>            <span class="token comment"># Sort files by last status change time.</span>
<span class="token parameter variable">-U</span>            <span class="token comment"># Leave files unsorted.</span>
<span class="token parameter variable">-r</span>            <span class="token comment"># Reverse the order of the sort.</span>
<span class="token parameter variable">--dirsfirst</span>   <span class="token comment"># List directories before files (-U disables).</span>
<span class="token parameter variable">--sort</span> X      <span class="token comment"># Select sort: name,version,size,mtime,ctime.</span>
------- 图形选项 ------
<span class="token parameter variable">-i</span>            <span class="token comment"># 不以阶梯状列出文件和目录名称。</span>
<span class="token parameter variable">-A</span>            <span class="token comment"># 使用ASNI绘图字符显示树状图而非以ASCII字符组合。</span>
<span class="token parameter variable">-S</span>            <span class="token comment"># Print with CP437 (console) graphics indentation lines.</span>
<span class="token parameter variable">-n</span>            <span class="token comment"># Turn colorization off always (-C overrides).</span>
<span class="token parameter variable">-C</span>            <span class="token comment"># 在文件和目录清单加上色彩，便于区分各种类型。</span>
------- XML / HTML / JSON选项 -------
<span class="token parameter variable">-X</span>            <span class="token comment"># Prints out an XML representation of the tree.</span>
<span class="token parameter variable">-J</span>            <span class="token comment"># Prints out an JSON representation of the tree.</span>
<span class="token parameter variable">-H</span> baseHREF   <span class="token comment"># Prints out HTML format with baseHREF as top directory.</span>
<span class="token parameter variable">-T</span> string     <span class="token comment"># Replace the default HTML title and H1 header with string.</span>
<span class="token parameter variable">--nolinks</span>     <span class="token comment"># Turn off hyperlinks in HTML output.</span>
---- 杂项选项 ----
<span class="token parameter variable">--version</span>     <span class="token comment"># 输入版本信息。</span>
<span class="token parameter variable">--help</span>        <span class="token comment"># 打印使用帮助信息。</span>
--            <span class="token comment"># Options processing terminator.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>目录：执行tree指令，它会列出指定目录下的所有文件，包括子目录里的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>列出目录<code>/private/</code> 第一级文件名</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tree  /private/ <span class="token parameter variable">-L</span> <span class="token number">1</span>
/private/
├── etc
├── tftpboot
├── tmp
└── var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tree <span class="token parameter variable">-I</span> node_modules <span class="token comment"># 忽略当前目录文件夹node_modules</span>
tree <span class="token parameter variable">-P</span> node_modules <span class="token comment"># 列出当前目录文件夹node_modules的目录结构</span>
tree <span class="token parameter variable">-P</span> node_modules <span class="token parameter variable">-L</span> <span class="token number">2</span> <span class="token comment"># 显示目录node_modules两层的目录树结构</span>
tree <span class="token parameter variable">-L</span> <span class="token number">2</span> <span class="token operator">&gt;</span> /home/www/tree.txt <span class="token comment"># 当前目录结果存到 tree.txt 文件中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略多个文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>tree <span class="token parameter variable">-I</span> <span class="token string">&#39;node_modules|icon|font&#39;</span> <span class="token parameter variable">-L</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>非树状结构列出目录<code>/private/</code>下的所有文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>tree -if /private/
/private
/private/a1
/private/a2
/private/etc
/private/etc/b1
/private/etc/b2
/private/tftpboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示所有文件目录(包括隐藏文件)并忽略(node_modules|.git)目录，展示(<code>-L 2</code>)两层。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ tree <span class="token parameter variable">-I</span> <span class="token string">&#39;node_modules|.git&#39;</span> <span class="token parameter variable">-L</span> <span class="token number">2</span> <span class="token parameter variable">-a</span>

<span class="token builtin class-name">.</span>
├── .github
│   └── workflows
├── LICENSE
├── README.md
└── renovate.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[i];function r(p,c){return a(),n("div",null,l)}const d=e(t,[["render",r],["__file","tree.html.vue"]]),v=JSON.parse('{"path":"/command/linux/tree.html","title":"tree","lang":"zh-CN","frontmatter":{"description":"tree 树状图列出目录的内容 补充说明 tree命令 以树状图列出目录的内容。 语法 选项 参数 目录：执行tree指令，它会列出指定目录下的所有文件，包括子目录里的文件。 实例 列出目录/private/ 第一级文件名 忽略文件夹 忽略多个文件夹 非树状结构列出目录/private/下的所有文件 显示所有文件目录(包括隐藏文件)并忽略(node_m...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/tree.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"tree"}],["meta",{"property":"og:description","content":"tree 树状图列出目录的内容 补充说明 tree命令 以树状图列出目录的内容。 语法 选项 参数 目录：执行tree指令，它会列出指定目录下的所有文件，包括子目录里的文件。 实例 列出目录/private/ 第一级文件名 忽略文件夹 忽略多个文件夹 非树状结构列出目录/private/下的所有文件 显示所有文件目录(包括隐藏文件)并忽略(node_m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tree\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.05,"words":914},"filePathRelative":"command/linux/tree.md","localizedDate":"2024年4月12日","autoDesc":true}');export{d as comp,v as data};
