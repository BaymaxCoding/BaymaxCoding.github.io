import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as l,a as n,d as s,e as c,b as d}from"./app-DOGW-9XX.js";const r={},o=d(`<h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h1><p>对文本文件中所有行进行排序。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token function">sort</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. --files0-from<span class="token operator">=</span>F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>将所有输入文件的内容排序后并输出。</li><li>当没有文件或文件为<code>-</code>时，读取标准输入。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><p>排序选项：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b, --ignore-leading-blanks    忽略开头的空白。
-d, --dictionary-order         仅考虑空白、字母、数字。
-f, --ignore-case              将小写字母作为大写字母考虑。
-g, --general-numeric-sort     根据数字排序。
-i, --ignore-nonprinting       排除不可打印字符。
-M, --month-sort               按照非月份、一月、十二月的顺序排序。
-h, --human-numeric-sort       根据存储容量排序<span class="token punctuation">(</span>注意使用大写字母，例如：2K 1G<span class="token punctuation">)</span>。
-n, --numeric-sort             根据数字排序。
-R, --random-sort              随机排序，但分组相同的行。
--random-source<span class="token operator">=</span>FILE           从FILE中获取随机长度的字节。
-r, <span class="token parameter variable">--reverse</span>                  将结果倒序排列。
<span class="token parameter variable">--sort</span><span class="token operator">=</span>WORD                    根据WORD排序，其中: general-numeric 等价于 -g，human-numeric 等价于 -h，month 等价于 -M，numeric 等价于 -n，random 等价于 -R，version 等价于 -V。
-V, --version-sort             文本中<span class="token punctuation">(</span>版本<span class="token punctuation">)</span>数字的自然排序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他选项：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>--batch-size<span class="token operator">=</span>NMERGE                    一次合并最多NMERGE个输入；超过部分使用临时文件。
-c, --check, <span class="token parameter variable">--check</span><span class="token operator">=</span>diagnose-first    检查输入是否已排序，该操作不会执行排序。
-C, <span class="token parameter variable">--check</span><span class="token operator">=</span>quiet, <span class="token parameter variable">--check</span><span class="token operator">=</span>silent      类似于 <span class="token parameter variable">-c</span> 选项，但不输出第一个未排序的行。
--compress-program<span class="token operator">=</span>PROG                使用PROG压缩临时文件；使用PROG -d解压缩。
<span class="token parameter variable">--debug</span>                                注释用于排序的行，发送可疑用法的警报到stderr。
--files0-from<span class="token operator">=</span>F                        从文件F中读取以NUL结尾的所有文件名称；如果F是 - ，那么从标准输入中读取名字。
-k, <span class="token parameter variable">--key</span><span class="token operator">=</span>KEYDEF                       通过一个key排序；KEYDEF给出位置和类型。
-m, <span class="token parameter variable">--merge</span>                            合并已排序文件，之后不再排序。
-o, <span class="token parameter variable">--output</span><span class="token operator">=</span>FILE                      将结果写入FILE而不是标准输出。
-s, <span class="token parameter variable">--stable</span>                           通过禁用最后的比较来稳定排序。
-S, --buffer-size<span class="token operator">=</span>SIZE                 使用SIZE作为内存缓存大小。
-t, --field-separator<span class="token operator">=</span>SEP              使用SEP作为列的分隔符。
-T, --temporary-directory<span class="token operator">=</span>DIR          使用DIR作为临时目录，而不是 <span class="token variable">$TMPDIR</span> 或 /tmp；多次使用该选项指定多个临时目录。
<span class="token parameter variable">--parallel</span><span class="token operator">=</span>N                           将并发运行的排序数更改为N。
-u, <span class="token parameter variable">--unique</span>                           同时使用-c，严格检查排序；不同时使用-c，输出排序后去重的结果。
-z, --zero-terminated                  设置行终止符为NUL（空），而不是换行符。
<span class="token parameter variable">--help</span>                                 显示帮助信息并退出。
<span class="token parameter variable">--version</span>                              显示版本信息并退出。


KEYDEF的格式为：F<span class="token punctuation">[</span>.C<span class="token punctuation">]</span><span class="token punctuation">[</span>OPTS<span class="token punctuation">]</span><span class="token punctuation">[</span>,F<span class="token punctuation">[</span>.C<span class="token punctuation">]</span><span class="token punctuation">[</span>OPTS<span class="token punctuation">]</span><span class="token punctuation">]</span> ，表示开始到结束的位置。
F表示列的编号
C表示
OPTS为<span class="token punctuation">[</span>bdfgiMhnRrV<span class="token punctuation">]</span>中的一到多个字符，用于覆盖当前排序选项。
使用--debug选项可诊断出错误的用法。


SIZE 可以有以下的乘法后缀:
% 内存的1%；
b <span class="token number">1</span>；
K <span class="token number">1024</span>（默认）；
剩余的 M, G, T, P, E, Z, Y 可以类推出来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>FILE（可选）：要处理的文件，可以为任意数量。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><p>sort将文件/文本的每一行作为一个单位相互比较，比较原则是从首字符向后依次按ASCII码值进行比较，最后将他们按升序输出。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@<span class="token punctuation">[</span>mail text<span class="token punctuation">]</span><span class="token comment"># cat sort.txt</span>
aaa:10:1.1
ccc:30:3.3
ddd:40:4.4
bbb:20:2.2
eee:50:5.5
eee:50:5.5

<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># sort sort.txt</span>
aaa:10:1.1
bbb:20:2.2
ccc:30:3.3
ddd:40:4.4
eee:50:5.5
eee:50:5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略相同行使用<code>-u</code>选项或者<code>uniq</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># cat sort.txt</span>
aaa:10:1.1
ccc:30:3.3
ddd:40:4.4
bbb:20:2.2
eee:50:5.5
eee:50:5.5

<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># sort -u sort.txt</span>
aaa:10:1.1
bbb:20:2.2
ccc:30:3.3
ddd:40:4.4
eee:50:5.5

<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># uniq sort.txt</span>
aaa:10:1.1
ccc:30:3.3
ddd:40:4.4
bbb:20:2.2
eee:50:5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sort</code>的<code>-n、-r、-k、-t</code>选项的使用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># cat sort.txt</span>
AAA:BB:CC
aaa:30:1.6
ccc:50:3.3
ddd:20:4.2
bbb:10:2.5
eee:40:5.4
eee:60:5.1

<span class="token comment"># 将BB列按照数字从小到大顺序排列：</span>
<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># sort -nk 2 -t: sort.txt</span>
AAA:BB:CC
bbb:10:2.5
ddd:20:4.2
aaa:30:1.6
eee:40:5.4
ccc:50:3.3
eee:60:5.1

<span class="token comment"># 将CC列数字从大到小顺序排列：</span>
<span class="token comment"># -n是按照数字大小排序，-r是以相反顺序，-k是指定需要排序的栏位，-t指定栏位分隔符为冒号</span>
<span class="token punctuation">[</span>root@mail text<span class="token punctuation">]</span><span class="token comment"># sort -nrk 3 -t: sort.txt</span>
eee:40:5.4
eee:60:5.1
ddd:20:4.2
ccc:50:3.3
bbb:10:2.5
aaa:30:1.6
AAA:BB:CC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>-k</code>选项的解读和例子：</p><p>-k选项深度解读：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FStart.CStart Modifier,FEnd.CEnd Modifier
-------Start--------,-------End--------
 FStart.CStart 选项  ,  FEnd.CEnd 选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个语法格式可以被其中的逗号<code>,</code>分为两大部分，<strong>Start</strong> 部分和 <strong>End</strong> 部分。 Start部分由三部分组成，其中的Modifier部分就是我们之前说过的选项部分； 我们重点说说<code>Start</code>部分的<code>FStart</code>和<code>C.Start</code>；<code>C.Start</code>是可以省略的，省略的话就表示从本域的开头部分开始。<code>FStart.CStart</code>，其中<code>FStart</code>就是表示使用的域，而<code>CStart</code>则表示在<code>FStart</code>域中从第几个字符开始算排序首字符。 同理，在End部分中，你可以设定<code>FEnd.CEnd</code>，如果你省略<code>.CEnd</code>或将它设定为0，则表示结尾到本域的最后一个字符。</p><p>例子：从公司英文名称的第二个字母开始排序：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-k</span> <span class="token number">1.2</span> facebook.txt
baidu <span class="token number">100</span> <span class="token number">5000</span>
sohu <span class="token number">100</span> <span class="token number">4500</span>
google <span class="token number">110</span> <span class="token number">5000</span>
guge <span class="token number">50</span> <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解读：使用了<code>-k 1.2</code>，表示对第一个域的第二个字符开始到本域的最后一个字符为止的字符串进行排序。你会发现baidu因为第二个字母是a而名列榜首。sohu和google第二个字符都是o，但sohu的h在google的o前面，所以两者分别排在第二和第三。guge只能屈居第四了。</p><p>例子：只针对公司英文名称的第二个字母进行排序，如果相同的按照员工工资进行降序排序：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token string">&#39; &#39;</span> <span class="token parameter variable">-k</span> <span class="token number">1.2</span>,1.2 <span class="token parameter variable">-nrk</span> <span class="token number">3,3</span> facebook.txt
baidu <span class="token number">100</span> <span class="token number">5000</span>
google <span class="token number">110</span> <span class="token number">5000</span>
sohu <span class="token number">100</span> <span class="token number">4500</span>
guge <span class="token number">50</span> <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解读：由于只对第二个字母进行排序，所以我们使用了<code>-k 1.2,1.2</code>的表示方式，表示我们只对第二个字母进行排序（如果你问我使用<code>-k 1.2</code>怎么不行？当然不行，因为你省略了End部分，这就意味着你将对从第二个字母起到本域最后一个字符为止的字符串进行排序）。 对员工工资进行排序，我们也使用了<code>-k 3,3</code>，这是最准确的表述，表示我们只对本域进行排序，因为如果你省略了后面的3，就变成了我们对第3个域开始到最后一个域位置的内容进行排序了。</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3>`,33),p={href:"https://stackoverflow.com/questions/1255782/whats-the-difference-between-general-numeric-sort-and-numeric-sort-options",target:"_blank",rel:"noopener noreferrer"},u=n("li",null,[n("p",null,"关于这个复杂命令的学习，建议您阅读info文档及参考博客、问答网站等。")],-1),v=n("li",null,[n("p",null,[s("该命令是"),n("code",null,"GNU coreutils"),s("包中的命令，相关的帮助信息请查看"),n("code",null,"man -s 1 shuf"),s("，"),n("code",null,"info coreutils 'shuf invocation'"),s("。")])],-1);function m(b,k){const a=i("ExternalLinkIcon");return t(),l("div",null,[o,n("ol",null,[n("li",null,[n("p",null,[n("a",p,[s("关于-g和-n选项的区别：stackoverflow"),c(a)])])]),u,v])])}const x=e(r,[["render",m],["__file","sort.html.vue"]]),f=JSON.parse('{"path":"/command/linux/sort.html","title":"sort","lang":"zh-CN","frontmatter":{"description":"sort 对文本文件中所有行进行排序。 概要 主要用途 将所有输入文件的内容排序后并输出。 当没有文件或文件为-时，读取标准输入。 选项 排序选项： 其他选项： 参数 FILE（可选）：要处理的文件，可以为任意数量。 返回值 返回0表示成功，返回非0值表示失败。 例子 sort将文件/文本的每一行作为一个单位相互比较，比较原则是从首字符向后依次按ASC...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/sort.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"sort"}],["meta",{"property":"og:description","content":"sort 对文本文件中所有行进行排序。 概要 主要用途 将所有输入文件的内容排序后并输出。 当没有文件或文件为-时，读取标准输入。 选项 排序选项： 其他选项： 参数 FILE（可选）：要处理的文件，可以为任意数量。 返回值 返回0表示成功，返回非0值表示失败。 例子 sort将文件/文本的每一行作为一个单位相互比较，比较原则是从首字符向后依次按ASC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sort\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":5.93,"words":1780},"filePathRelative":"command/linux/sort.md","localizedDate":"2024年4月12日","autoDesc":true}');export{x as comp,f as data};
