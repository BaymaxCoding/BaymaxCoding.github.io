import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as e}from"./app-D3p8wuGf.js";const t={},p=e(`<h1 id="ab" tabindex="-1"><a class="header-anchor" href="#ab"><span>ab</span></a></h1><p>Apache服务器的性能测试工具</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>若系统未安装，使用以下命令安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apache2-utils

<span class="token comment"># Centos</span>
yum <span class="token function">install</span> httpd-tools

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>ab命令</strong> 是一个测试你 Apache http 服务器的工具，你可以通过这个工具，指定一个单位时间内向 apache 发出的请求数量来看看你的 Apache 和机器配合的性能如何。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ab <span class="token punctuation">[</span> <span class="token parameter variable">-A</span> auth-username:password <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-c</span> concurrency <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-C</span> cookie-name<span class="token operator">=</span>value
<span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> csv-file <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-g</span> gnuplot-file <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-h</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-H</span> custom-header <span class="token punctuation">]</span> <span class="token punctuation">[</span>
<span class="token parameter variable">-i</span>  <span class="token punctuation">]</span>  <span class="token punctuation">[</span>  <span class="token parameter variable">-k</span>  <span class="token punctuation">]</span>  <span class="token punctuation">[</span>  <span class="token parameter variable">-n</span>  requests  <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-p</span> POST-file <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-P</span> proxy-auth-user‐
name:password <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-q</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-S</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-t</span> timelimit <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-T</span> content-type  <span class="token punctuation">]</span>
<span class="token punctuation">[</span>  <span class="token parameter variable">-v</span> verbosity<span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-V</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token operator">&lt;</span>table<span class="token operator">&gt;</span>-attributes <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-X</span> proxy<span class="token punctuation">[</span>:port<span class="token punctuation">]</span>
<span class="token punctuation">]</span>  <span class="token punctuation">[</span>  <span class="token parameter variable">-y</span>  <span class="token operator">&lt;</span>tr<span class="token operator">&gt;</span>-attributes  <span class="token punctuation">]</span>  <span class="token punctuation">[</span>  <span class="token parameter variable">-z</span>   <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>-attributes   <span class="token punctuation">]</span>   <span class="token punctuation">[</span>http://<span class="token punctuation">]</span>host‐
name<span class="token punctuation">[</span>:port<span class="token punctuation">]</span>/path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> auth-username:password
      <span class="token comment">#  支持基本的验证证书,用户名和密码之间使用&quot;冒号&quot;                    :</span>
      <span class="token comment"># 分隔开,ab将以明文方式传送过去.不管服务器是不是需要</span>
      <span class="token comment"># ,也就是说你的服务器需要支持401认证.</span>

<span class="token parameter variable">-c</span> concurrency
      <span class="token comment"># 同时向服务器端发送的请求数目，默认状态下是一次 只执行一个http请求.</span>

<span class="token parameter variable">-C</span> cookie-name<span class="token operator">=</span>value
      <span class="token comment"># Add a Cookie: line to the request. The argument is typically in the</span>
      <span class="token comment"># form of a name=value pair. This field is repeatable.</span>

<span class="token parameter variable">-d</span>    <span class="token comment">#  Do not display  the  &quot;percentage  served  within  XX  [ms]  table&quot;.</span>
      <span class="token comment"># (legacy support).</span>

<span class="token parameter variable">-e</span> csv-file
      <span class="token comment"># Write  a  Comma  separated value (CSV) file which contains for each</span>
      <span class="token comment"># percentage (from 1% to 100%) the time (in milli seconds) it took to</span>
      <span class="token comment"># serve  that percentage of the requests. This is usually more useful</span>
      <span class="token comment"># than the &#39;gnuplot&#39; file; as the results are already &#39;binned&#39;.</span>

<span class="token parameter variable">-g</span> gnuplot-file
      <span class="token comment"># Write all measured values out as a &#39;gnuplot&#39; or TSV  (Tab  separate</span>
      <span class="token comment"># values)  file.  This file can easily be imported into packages like</span>
      <span class="token comment"># Gnuplot, IDL, Mathematica, Igor or even Excel. The labels  are  on</span>
      <span class="token comment"># the first line of the file.</span>
<span class="token parameter variable">-h</span>    <span class="token comment"># 显示使用说明</span>
<span class="token parameter variable">-H</span> custom-header
      <span class="token comment"># 向请求包追加附加的标题字串.此参数应该是有效的标题         行(header</span>
      <span class="token comment"># line)形式,通常使用冒号&quot;:&quot;来分隔有效配对 (valid  pair)例如  &#39;Accept-</span>
      <span class="token comment"># Encoding: zip/zop;8 bit&#39;;</span>

<span class="token parameter variable">-i</span>    <span class="token comment"># 使用一个 http 头(HEAD) 来替换 GET方法.不可以掺入POST 方法</span>

<span class="token parameter variable">-k</span>    <span class="token comment">#  允许http      KeepAlive      ；也就是说执行多个请求在一个      http</span>
      <span class="token comment"># 会话当中，默认是不允许的也就是no KeepAlive啦;)</span>

<span class="token parameter variable">-n</span> requests
      <span class="token comment"># 执行一次测试会话的时候所发出的请求数目,默认是执行一个单一的请求</span>
      <span class="token comment"># 当然了这样的测试结果也就没什么意义了</span>

<span class="token parameter variable">-p</span> POST-file
      <span class="token comment"># 测试程序也就是ab,将向Apache server发送带有HTTP POST 的请求.</span>

<span class="token parameter variable">-P</span> proxy-auth-username:password
      <span class="token comment"># 当需要通过代理测试一台 HTTP 服务器的时候而你的代理</span>
      <span class="token comment"># 又需要用户名密码验证,这时你可以使用这个选项,同样</span>
      <span class="token comment"># 用户名与密码之间使用冒号&quot;:&quot;分隔开,ab将之以明文的方式</span>
      <span class="token comment"># 发送出去,当然,前提是你的代理是处于407认证状态的</span>

<span class="token parameter variable">-q</span>    <span class="token comment">#  When processing more than 150 requests, ab outputs a progress count</span>
      <span class="token comment"># on  stderr  every  10% or 100 requests or so. The -q flag will sup‐</span>
      <span class="token comment"># press these messages.</span>

<span class="token parameter variable">-s</span>    <span class="token comment">#  When compiled in (ab -h will show you) use the SSL protected  https</span>
      <span class="token comment"># rather  than  the  http  protocol. This feature is experimental and</span>
      <span class="token comment"># very rudimentary. You probably do not want to use it.</span>

<span class="token parameter variable">-S</span>    <span class="token comment">#  Do not display the median and standard deviation values,  nor  dis‐</span>
      <span class="token comment"># play  the  warning/error  messages  when the average and median are</span>
      <span class="token comment"># more than one or two times the standard deviation  apart.  And  de‐</span>
      <span class="token comment"># fault to the min/avg/max values. (legacy support).</span>

<span class="token parameter variable">-t</span> timelimit
      <span class="token comment">#  设置测试的时间的长短，使用这个选项ab将自动设置</span>
      <span class="token comment"># 测试请求会话数目为50000，然后以你设置的时间为</span>
      <span class="token comment"># 固定周期.默认状态下是没有时限的，也就是直到完成</span>
      <span class="token comment"># 你所设置的请求数目为止.</span>

<span class="token parameter variable">-T</span> content-type
      <span class="token comment"># 内容类型标头,使用在POST数据的时候.</span>

<span class="token parameter variable">-v</span> verbosity
      <span class="token comment"># 设置冗余级别,4级打印出每个请求标头的详细信息,</span>
      <span class="token comment"># 3级打印出回应代码(例如,404,200),2级打印出警告 信息和指示消息</span>

<span class="token parameter variable">-V</span>    <span class="token comment"># 显示版本号并且退出</span>
<span class="token parameter variable">-w</span>    <span class="token comment"># 打印输出结果到HTML表中. 默认的表是两列n行白底黑框</span>

<span class="token parameter variable">-x</span> <span class="token operator">&lt;</span>table<span class="token operator">&gt;</span>-attributes
      <span class="token comment"># 使用字串来描述表的属性,该属性字串应该插入到&lt;table 这里 &gt;</span>

<span class="token parameter variable">-X</span> proxy<span class="token punctuation">[</span>:port<span class="token punctuation">]</span>
      <span class="token comment"># Use a proxy server for the requests.</span>

<span class="token parameter variable">-y</span> <span class="token operator">&lt;</span>tr<span class="token operator">&gt;</span>-attributes
      <span class="token comment"># 用于生成html表格每行的属性名 (&lt;tr&gt;)</span>

<span class="token parameter variable">-z</span> <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>-attributes
      <span class="token comment"># 用于生成html表格每列的属性名 (&lt;td&gt;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>主机：被测试主机。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 10个并发， 请求500次</span>
ab <span class="token parameter variable">-c</span> <span class="token number">10</span> <span class="token parameter variable">-n</span> <span class="token number">500</span> https://www.qq.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[p];function l(c,o){return n(),s("div",null,i)}const d=a(t,[["render",l],["__file","ab.html.vue"]]),u=JSON.parse('{"path":"/command/linux/ab.html","title":"ab","lang":"zh-CN","frontmatter":{"description":"ab Apache服务器的性能测试工具 安装 若系统未安装，使用以下命令安装 补充说明 ab命令 是一个测试你 Apache http 服务器的工具，你可以通过这个工具，指定一个单位时间内向 apache 发出的请求数量来看看你的 Apache 和机器配合的性能如何。 语法 选项 参数 主机：被测试主机。 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/ab.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"ab"}],["meta",{"property":"og:description","content":"ab Apache服务器的性能测试工具 安装 若系统未安装，使用以下命令安装 补充说明 ab命令 是一个测试你 Apache http 服务器的工具，你可以通过这个工具，指定一个单位时间内向 apache 发出的请求数量来看看你的 Apache 和机器配合的性能如何。 语法 选项 参数 主机：被测试主机。 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ab\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.64,"words":1091},"filePathRelative":"command/linux/ab.md","localizedDate":"2024年4月12日","autoDesc":true}');export{d as comp,u as data};
