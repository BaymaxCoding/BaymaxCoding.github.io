import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as l,a,d as n,e as r,b as p}from"./app-DOGW-9XX.js";const c={},o=a("h1",{id:"ag",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ag"},[a("span",null,"ag")])],-1),d=a("p",null,"ack 的升级版，C语言编写，更快更人性化",-1),m=a("h2",{id:"补充说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#补充说明"},[a("span",null,"补充说明")])],-1),v={href:"https://github.com/ggreer/the_silver_searcher",target:"_blank",rel:"noopener noreferrer"},u=p(`<ul><li>它比ack快一个数量级。</li><li>它忽略了你的 <code>.gitignore</code> 和 <code>.hgignore</code> 中的文件模式。</li><li>如果你的源码库里有你不想搜索的文件，只要把它们的模式添加到一个.ignore文件里。(<em>cough</em> <em>.min.js</em>cough*)</li><li>这个命令的名字比ack短33%，而且所有的键都在主行上!</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ag <span class="token punctuation">[</span>options<span class="token punctuation">]</span> pattern <span class="token punctuation">[</span>path <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
ag <span class="token punctuation">[</span>可选项<span class="token punctuation">]</span> 匹配模式 <span class="token punctuation">[</span>路径<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>输出选项:
     <span class="token parameter variable">--ackmate</span>            以 AckMate-parseable 的格式显示结果
  <span class="token parameter variable">-A</span> <span class="token parameter variable">--after</span> <span class="token punctuation">[</span><span class="token environment constant">LINES</span><span class="token punctuation">]</span>      显示匹配行之后的行（默认2行）
  <span class="token parameter variable">-B</span> <span class="token parameter variable">--before</span> <span class="token punctuation">[</span><span class="token environment constant">LINES</span><span class="token punctuation">]</span>     显示匹配行之前的行（默认2行）
     --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>break          不同文件中匹配到的内容新建一行显示（默认开启）
  <span class="token parameter variable">-c</span> <span class="token parameter variable">--count</span>              只显示每个文件中匹配到的数量 （通常与匹配行数不同）
     --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>color          在结果中打印颜色代码（默认启用）
     --color-line-number  行号的颜色代码（默认值为：1<span class="token punctuation">;</span><span class="token number">33</span>）。
     --color-match        匹配结果的颜色代码（默认值为：30<span class="token punctuation">;</span><span class="token number">43</span>）。
     --color-path         路径名称的颜色代码（默认值为：1<span class="token punctuation">;</span><span class="token number">32</span>）
     <span class="token parameter variable">--column</span>             打印结果中的列号
     --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>filename       打印文件名（除非搜索单个文件，否则启用）。
  <span class="token parameter variable">-H</span> --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>heading        在每个文件匹配前输出文件名（默认开启）
  <span class="token parameter variable">-C</span> <span class="token parameter variable">--context</span> <span class="token punctuation">[</span><span class="token environment constant">LINES</span><span class="token punctuation">]</span>    显示匹配行上下两行（默认2行）
     --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>group          和这些一样： --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>break --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>heading
  <span class="token parameter variable">-g</span> --filename-pattern PATTERN 打印匹配PATTERN的文件名
  <span class="token parameter variable">-l</span> --files-with-matches 显示包含匹配的文件名（不显示匹配的行）
  <span class="token parameter variable">-L</span> --files-without-matches  只显示不包含匹配项的文件名
     --print-all-files    打印所有搜索到的文件的标题，甚至那些不包含匹配的文件。
     --<span class="token punctuation">[</span>no<span class="token punctuation">]</span>numbers        打印行号。默认情况是在搜索流时省略行号。
  <span class="token parameter variable">-o</span> --only-matching      只输出每行匹配的部分
     --print-long-lines   在很长的行上打印匹配信息（默认：<span class="token operator">&gt;</span>2k字符）。
     <span class="token parameter variable">--passthrough</span>        当搜索一个流时，打印所有的行，即使它们不匹配。
     <span class="token parameter variable">--silent</span>             抑制所有的日志信息，包括错误
     <span class="token parameter variable">--stats</span>              打印统计（扫描的文件、花费的时间等）。
     --stats-only         打印统计信息，不打印其他信息（与搜索单个文件时的--计数相同）。
     <span class="token parameter variable">--vimgrep</span>            像vim的:vimgrep /pattern/g那样打印结果（它报告每一行的匹配结果）
  <span class="token parameter variable">-0</span> <span class="token parameter variable">--null</span> <span class="token parameter variable">--print0</span>      用null分隔文件名（用于<span class="token string">&#39;xargs -0&#39;</span>）。

搜索选项:
  <span class="token parameter variable">-a</span> --all-types          搜索所有文件（包括隐藏文件）
  <span class="token parameter variable">-D</span> <span class="token parameter variable">--debug</span>              可笑的调试（可能没有用）
     <span class="token parameter variable">--depth</span> NUM          目录搜索最大深度（默认25）
  <span class="token parameter variable">-f</span> <span class="token parameter variable">--follow</span>             跟随链接进行搜索
  <span class="token parameter variable">-F</span> --fixed-strings      为了与grep兼容，--literal的别名。
  <span class="token parameter variable">-G</span> --file-search-regex  根据正则匹配搜索指定类型的文件
     <span class="token parameter variable">--hidden</span>             搜索隐藏文件 （但遵从 .*ignore 文件）
  <span class="token parameter variable">-i</span> --ignore-case        不区分大小写匹配
     <span class="token parameter variable">--ignore</span> PATTERN     忽略匹配 PATTERN 的文件/目录（也允许使用文字文件/目录名称）
     --ignore-dir NAME    为了与ack兼容，--ignore的别名
  <span class="token parameter variable">-m</span> --max-count NUM      在一个文件中最大匹配的数量（默认: <span class="token number">10,000</span>）
     --one-device         不跟随其他设备的链接搜索
  <span class="token parameter variable">-p</span> --path-to-ignore STRING 在STRING使用.ignore文件
  <span class="token parameter variable">-Q</span> <span class="token parameter variable">--literal</span>            不要将PATTERN解析为正则表达式
  <span class="token parameter variable">-s</span> --case-sensitive     敏感地匹配案例
  <span class="token parameter variable">-S</span> --smart-case         不区分大小写匹配，除非 PATTERN 包含大写字符
     --search-binary      搜索二进制文件
  <span class="token parameter variable">-t</span> --all-text           搜索所有文本文件（不包括隐藏文件）
  <span class="token parameter variable">-u</span> <span class="token parameter variable">--unrestricted</span>       搜索所有文件 （忽略 .ignore, .gitignore, 比如：搜索二进制和隐藏文件）
  <span class="token parameter variable">-U</span> --skip-vcs-ignores   忽略VCS的忽略文件（指的是 .gitignore，.hgignore；仍然遵从.ignore）。
  <span class="token parameter variable">-v</span> --invert-match       反向匹配
  <span class="token parameter variable">-w</span> --word-regexp        只匹配整个单词
  <span class="token parameter variable">-W</span> <span class="token parameter variable">--width</span> NUM          在NUM字符后截断匹配行
  <span class="token parameter variable">-z</span> --search-zip         搜索压缩文件中的内容

文件类型:
搜索可以限制在某些类型的文件中，例如:
   ag <span class="token parameter variable">--html</span> needle   结果输出到指定类型文件
   - 在后缀为 .htm、.html、.shtml 或 .xhtml 的文件中搜索“needle”

有关支持的文件类型的列表，可以运行:
  ag --list-file-types  列出支持的文件类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>列出当前目录下包含 <code>npm</code> 的文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>➜  vue-project ag <span class="token function">npm</span> ./
README.md
<span class="token number">16</span>:npm <span class="token function">install</span>
<span class="token number">22</span>:npm run dev
<span class="token number">28</span>:npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function b(k,g){const e=i("ExternalLinkIcon");return t(),l("div",null,[o,d,m,a("blockquote",null,[a("p",null,[n("摘自 "),a("a",v,[n("https://github.com/ggreer/the_silver_searcher"),r(e)]),n(" 项目的 Readme.md")])]),u])}const f=s(c,[["render",b],["__file","ag.html.vue"]]),x=JSON.parse('{"path":"/command/linux/ag.html","title":"ag","lang":"zh-CN","frontmatter":{"description":"ag ack 的升级版，C语言编写，更快更人性化 补充说明 摘自 https://github.com/ggreer/the_silver_searcher 项目的 Readme.md 它比ack快一个数量级。 它忽略了你的 .gitignore 和 .hgignore 中的文件模式。 如果你的源码库里有你不想搜索的文件，只要把它们的模式添加到一个.i...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/ag.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"ag"}],["meta",{"property":"og:description","content":"ag ack 的升级版，C语言编写，更快更人性化 补充说明 摘自 https://github.com/ggreer/the_silver_searcher 项目的 Readme.md 它比ack快一个数量级。 它忽略了你的 .gitignore 和 .hgignore 中的文件模式。 如果你的源码库里有你不想搜索的文件，只要把它们的模式添加到一个.i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ag\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.63,"words":1089},"filePathRelative":"command/linux/ag.md","localizedDate":"2024年4月12日","autoDesc":true}');export{f as comp,x as data};
