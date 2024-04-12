import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-D3p8wuGf.js";const t={},i=e(`<h1 id="date" tabindex="-1"><a class="header-anchor" href="#date"><span>date</span></a></h1><p>显示或设置系统时间与日期</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">date</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>+FORMAT<span class="token punctuation">]</span>
<span class="token function">date</span> <span class="token punctuation">[</span>-u<span class="token operator">|</span>--utc<span class="token operator">|</span>--universal<span class="token punctuation">]</span> <span class="token punctuation">[</span>MMDDhhmm<span class="token punctuation">[</span><span class="token punctuation">[</span>CC<span class="token punctuation">]</span>YY<span class="token punctuation">]</span><span class="token punctuation">[</span>.ss<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>转换时间到选定的格式，默认为当前。</li><li>设置系统时间。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>format：输出的时间格式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>format可用的转义序列如下：

%%      百分号
%a      当地缩写的工作日名称（例如，Sun）
%A      当地完整的工作日名称（例如，Sunday）
%b      当地缩写的月份名称（例如，Jan）
%B      当地完整的月份名称（例如，January）
%c      当地的日期和时间（例如，Thu Mar  <span class="token number">3</span> <span class="token number">23</span>:05:25 <span class="token number">2005</span>）
%C      世纪，和%Y类似，但是省略后两位（例如，20）
%d      一月中的一天（例如，01）
%D      日期，等价于%m/%d/%y
%e      一月中的一天，格式使用空格填充，等价于%_d
%F      完整的日期；等价于%+4Y-%m-%d
%g      ISO标准计数周的年份的最后两位数字
%G      ISO标准计数周的年份，通常只对%V有用
%h      等价于%b
%H      小时，范围（00<span class="token punctuation">..</span><span class="token number">23</span>）
%I      小时，范围（00<span class="token punctuation">..</span><span class="token number">23</span>）
%j      一年中的一天，范围（001<span class="token punctuation">..</span><span class="token number">366</span>）
%k      小时，使用空格填充，范围（0<span class="token punctuation">..</span><span class="token number">23</span>），等价于%_H
%l      小时，使用空格填充，范围（1<span class="token punctuation">..</span><span class="token number">12</span>），等价于%_I
%m      月，范围（01<span class="token punctuation">..</span><span class="token number">12</span>）
%M      分钟，范围（00<span class="token punctuation">..</span><span class="token number">59</span>）
%n      换行符
%N      纳秒，范围（000000000<span class="token punctuation">..</span>000000000）
%p      用于表示当地的AM或PM，如果未知则为空白
%P      类似于%p，但用小写表示
%q      季度，范围（1<span class="token punctuation">..</span><span class="token number">4</span>）
%r      当地以12小时表示的时钟时间（例如，11:11:04 PM）
%R      <span class="token number">24</span>小时每分钟；等价于%H:%M
%s      自协调世界时1970年01月01日00时00分以来的秒数
%S      秒数，范围（00<span class="token punctuation">..</span><span class="token number">60</span>）
%t      水平制表符
%T      时间；等价于%H:%M:%S
%u      一周中的一天（1<span class="token punctuation">..</span><span class="token number">7</span>），1代表星期一
%U      一年中的第几周，周日作为一周的起始（00<span class="token punctuation">..</span><span class="token number">53</span>）
%V      ISO标准计数周，该方法将周一作为一周的起始（01<span class="token punctuation">..</span><span class="token number">53</span>）
%w      一周中的一天（0<span class="token punctuation">..</span><span class="token number">6</span>），0代表星期天
%W      一年中的第几周，周一作为一周的起始（00<span class="token punctuation">..</span><span class="token number">53</span>）
%x      当地的日期表示（例如，12/31/99）
%X      当地的时间表示（例如，23:13:48）
%y      年份后两位数字，范围（00<span class="token punctuation">..</span><span class="token number">99</span>）
%Y      年份
%z      +hhmm格式的数值化时区格式（例如，-0400）
%:z     +hh:mm格式的数值化时区格式（例如，-04:00）
%::z    +hh:mm:ss格式的数值化时区格式（例如，-04:00:00）
%:::z   数值化时区格式，相比上一个格式增加<span class="token string">&#39;:&#39;</span>以显示必要的精度（例如，-04，+05:30）
%Z      时区缩写（如EDT）

默认情况下，日期用零填充数字字段；以下可选的符号可以跟在<span class="token string">&#39;%&#39;</span>后面:

-      <span class="token punctuation">(</span>连字符<span class="token punctuation">)</span> 不要填充相应的字段。
_      <span class="token punctuation">(</span>下划线<span class="token punctuation">)</span> 使用空格填充相应的字段。
<span class="token number">0</span>      <span class="token punctuation">(</span>数字0<span class="token punctuation">)</span> 使用数字0填充相应的字段。
+      用数字0填充，未来年份大于4位数字则在前面加上<span class="token string">&#39;+&#39;</span>号。
^      允许的情况下使用大写。
<span class="token comment">#      允许的情况下将默认的大写转换为小写，默认的小写转换为大写。</span>

在任何标志之后都有一个可选的字段宽度，如小数；然后是一个可选的修饰符，在可用的情况下，使用E来使用当地语言环境的替代表示，
使用O来使用当地语言环境的替代数字符号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>长选项与短选项等价

-d, <span class="token parameter variable">--date</span><span class="token operator">=</span>STRING          解析字符串并按照指定格式输出，字符串不能是<span class="token string">&#39;now&#39;</span>。
<span class="token parameter variable">--debug</span>                    注释已解析的日期，并将有疑问的用法发送到标准错误。
-f, <span class="token parameter variable">--file</span><span class="token operator">=</span>DATEFILE        类似于--date<span class="token punctuation">;</span> 一次从DATEFILE处理一行。
-I<span class="token punctuation">[</span>FMT<span class="token punctuation">]</span>, --iso-8601<span class="token punctuation">[</span><span class="token operator">=</span>FMT<span class="token punctuation">]</span>  按照ISO <span class="token number">8601</span>格式输出，FMT可以为<span class="token string">&#39;date&#39;</span><span class="token punctuation">(</span>默认<span class="token punctuation">)</span>，<span class="token string">&#39;hours&#39;</span>，<span class="token string">&#39;minutes&#39;</span>，<span class="token string">&#39;seconds&#39;</span>，<span class="token string">&#39;ns&#39;</span>。例如：2006-08-14T02:34:56-06:00
-R, --rfc-email            按照RFC <span class="token number">5322</span>格式输出，例如: Mon, <span class="token number">14</span> Aug <span class="token number">2006</span> 02:34:56 <span class="token parameter variable">-0600</span>
--rfc-3339<span class="token operator">=</span>FMT             按照RFC <span class="token number">3339</span>格式输出，FMT可以为<span class="token string">&#39;date&#39;</span>, <span class="token string">&#39;seconds&#39;</span>,<span class="token string">&#39;ns&#39;</span>中的一个，例如：2006-08-14 02:34:56-06:00
-r, <span class="token parameter variable">--reference</span><span class="token operator">=</span>FILE       显示文件的上次修改时间。
-s, <span class="token parameter variable">--set</span><span class="token operator">=</span>STRING           根据字符串设置系统时间。
-u, --utc, <span class="token parameter variable">--universal</span>     显示或设置世界协调时<span class="token punctuation">(</span>UTC<span class="token punctuation">)</span>。
<span class="token parameter variable">--help</span>                     显示帮助信息并退出。
<span class="token parameter variable">--version</span>                  显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回状态为成功除非给出了非法选项或非法参数。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 格式化输出：</span>
<span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span>
<span class="token number">2009</span>-12-07

<span class="token comment"># 输出昨天日期：</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;1 day ago&quot;</span> +<span class="token string">&quot;%Y-%m-%d&quot;</span>
<span class="token number">2012</span>-11-19

<span class="token comment"># 2秒后输出：</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;2 second&quot;</span> +<span class="token string">&quot;%Y-%m-%d %H:%M.%S&quot;</span>
<span class="token number">2012</span>-11-20 <span class="token number">14</span>:21.31

<span class="token comment"># 传说中的 1234567890 秒：</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;1970-01-01 1234567890 seconds&quot;</span> +<span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
<span class="token comment"># 或者</span>
<span class="token function">date</span> -d@1234567890 +<span class="token string">&quot;%F %T&quot;</span>
<span class="token comment"># 输出结果</span>
<span class="token number">2009</span>-02-13 <span class="token number">23</span>:02:30

<span class="token comment"># 时间格式转换：</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;2009-12-12&quot;</span> +<span class="token string">&quot;%Y/%m/%d %H:%M.%S&quot;</span>
<span class="token comment"># 输出结果</span>
<span class="token number">2009</span>/12/12 00:00.00

<span class="token comment"># apache格式转换：</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;Dec 5, 2009 12:00:37 AM&quot;</span> +<span class="token string">&quot;%Y-%m-%d %H:%M.%S&quot;</span>
<span class="token comment"># 输出结果</span>
<span class="token number">2009</span>-12-05 00:00.37

<span class="token comment"># 格式转换后时间游走：</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;Dec 5, 2009 12:00:37 AM 2 year ago&quot;</span> +<span class="token string">&quot;%Y-%m-%d %H:%M.%S&quot;</span>
<span class="token comment"># 输出结果</span>
<span class="token number">2007</span>-12-05 00:00.37

<span class="token comment"># 时间加减操作：</span>
<span class="token function">date</span> +%Y%m%d                   <span class="token comment"># 显示年月日</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;+1 day&quot;</span> +%Y%m%d       <span class="token comment"># 显示前一天的日期</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;-1 day&quot;</span> +%Y%m%d       <span class="token comment"># 显示后一天的日期</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;-1 month&quot;</span> +%Y%m%d     <span class="token comment"># 显示上一月的日期</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;+1 month&quot;</span> +%Y%m%d     <span class="token comment"># 显示下一月的日期</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;-1 year&quot;</span> +%Y%m%d      <span class="token comment"># 显示前一年的日期</span>
<span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;+1 year&quot;</span> +%Y%m%d      <span class="token comment"># 显示下一年的日期</span>

<span class="token comment"># 设定时间：</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span>                         <span class="token comment"># 设置当前时间，只有root权限才能设置，其他只能查看</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token number">20120523</span>                <span class="token comment"># 设置成20120523，这样会把具体时间设置成00:00:00</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> 01:01:01                <span class="token comment"># 设置具体时间，不会对日期做更改</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;01:01:01 2012-05-23&quot;</span>   <span class="token comment"># 这样可以设置全部时间</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;01:01:01 20120523&quot;</span>     <span class="token comment"># 这样可以设置全部时间</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;2012-05-23 01:01:01&quot;</span>   <span class="token comment"># 这样可以设置全部时间</span>
<span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;20120523 01:01:01&quot;</span>     <span class="token comment"># 这样可以设置全部时间</span>

<span class="token comment"># 有时需要检查一组命令花费的时间：</span>
<span class="token assign-left variable">start</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
nmap wangchujiang.com <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token assign-left variable">end</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
<span class="token assign-left variable">difference</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> end <span class="token operator">-</span> start <span class="token variable">))</span></span>
<span class="token comment"># 显示执行时间</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$difference</span> seconds.

<span class="token comment"># 当你考虑输出带有时间的字符串时，例如（Current time: 2019/05/19）：</span>
<span class="token comment"># 通常使用的方法：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Current time: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%Y/%m/%d&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># 另一种方法：</span>
<span class="token assign-left variable">suffix</span><span class="token operator">=</span><span class="token string">&#39;Current time:&#39;</span>
<span class="token comment"># 注意如果换成单引号就不能替换变量了。</span>
<span class="token function">date</span> +<span class="token string">&quot;<span class="token variable">\${suffix}</span> %Y/%m/%d&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 date</code>或<code>info coreutils &#39;date invocation&#39;</code>。</li></ol>`,17),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","date.html.vue"]]),m=JSON.parse(`{"path":"/command/linux/date.html","title":"date","lang":"zh-CN","frontmatter":{"description":"date 显示或设置系统时间与日期 概要 主要用途 转换时间到选定的格式，默认为当前。 设置系统时间。 参数 format：输出的时间格式。 选项 返回值 返回状态为成功除非给出了非法选项或非法参数。 例子 注意 该命令是GNU coreutils包中的命令，相关的帮助信息请查看man -s 1 date或info coreutils 'date in...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/date.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"date"}],["meta",{"property":"og:description","content":"date 显示或设置系统时间与日期 概要 主要用途 转换时间到选定的格式，默认为当前。 设置系统时间。 参数 format：输出的时间格式。 选项 返回值 返回状态为成功除非给出了非法选项或非法参数。 例子 注意 该命令是GNU coreutils包中的命令，相关的帮助信息请查看man -s 1 date或info coreutils 'date in..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"date\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":5.51,"words":1654},"filePathRelative":"command/linux/date.md","localizedDate":"2024年4月12日","autoDesc":true}`);export{u as comp,m as data};
