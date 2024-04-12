import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as e}from"./app-D3p8wuGf.js";const p={},t=e(`<h1 id="ngrep" tabindex="-1"><a class="header-anchor" href="#ngrep"><span>ngrep</span></a></h1><p>方便的数据包匹配和显示工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>ngrep命令</strong> 是grep命令的网络版，他力求更多的grep特征，用于搜寻指定的数据包。正由于安装ngrep需用到libpcap库， 所以支持大量的操作系统和网络协议。能识别TCP、UDP和ICMP包，理解bpf的过滤机制。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>ngrep命令的下载地址：http://ngrep.sourceforge.net/，libpcap下载地址：http://www.tcpdump.org/。先用<code>yum install libpcap</code>完全安装libpcap，注意有时候用libpcap安装包安装的不完整会影响ngrep的使用。</p><p>如果yum无法安装就用以下步骤安装libpcap：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://www.tcpdump.org/release/libpcap-1.3.0.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxf</span> libpcap-1.3.0.tar.gz
<span class="token builtin class-name">cd</span> libpcap-1.3.0
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ngrep的安装就是 configure/make/make install 三部曲。</p><p>注：configure时是遇到 please wipe out all unused pcap installations，添加以下选项：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./configure --with-pcap-includes<span class="token operator">=</span>/usr/local/include/pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在安装后输入ngrep来验证下安装是否成功。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ngrep <span class="token operator">&lt;</span>-LhNXViwqpevxlDtTRM<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-IO pcap_dump<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-n num<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-d dev<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-A num<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>-s snaplen<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-S limitlen<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-w normal<span class="token operator">|</span>byline<span class="token operator">|</span>single<span class="token operator">|</span>none<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-c cols<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>-P char<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>-F file<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>match expression<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>bpf filter<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-e</span> <span class="token comment"># 显示空数据包</span>
<span class="token parameter variable">-i</span> <span class="token comment"># 忽略大小写</span>
<span class="token parameter variable">-v</span> <span class="token comment"># 反转匹配</span>
<span class="token parameter variable">-R</span> <span class="token comment"># don&#39;t do privilege revocation logic</span>
<span class="token parameter variable">-x</span> <span class="token comment"># 以16进制格式显示</span>
<span class="token parameter variable">-X</span> <span class="token comment"># 以16进制格式匹配</span>
<span class="token parameter variable">-w</span> <span class="token comment"># 整字匹配</span>
<span class="token parameter variable">-p</span> <span class="token comment"># 不使用混杂模式</span>
<span class="token parameter variable">-l</span> <span class="token comment"># make stdout line buffered</span>
<span class="token parameter variable">-D</span> <span class="token comment"># replay pcap_dumps with their recorded time intervals</span>
<span class="token parameter variable">-t</span> <span class="token comment"># 在每个匹配的包之前显示时间戳</span>
<span class="token parameter variable">-T</span> <span class="token comment"># 显示上一个匹配的数据包之间的时间间隔</span>
<span class="token parameter variable">-M</span> <span class="token comment"># 仅进行单行匹配</span>
<span class="token parameter variable">-I</span> <span class="token comment"># 从文件中读取数据进行匹配</span>
<span class="token parameter variable">-O</span> <span class="token comment"># 将匹配的数据保存到文件</span>
<span class="token parameter variable">-n</span> <span class="token comment"># 仅捕获指定数目的数据包进行查看</span>
<span class="token parameter variable">-A</span> <span class="token comment"># 匹配到数据包后dump随后的指定数目的数据包</span>
<span class="token parameter variable">-s</span> <span class="token comment"># set the bpf caplen</span>
<span class="token parameter variable">-S</span> <span class="token comment"># set the limitlen on matched packets</span>
<span class="token parameter variable">-W</span> <span class="token comment"># 设置显示格式byline将解析包中的换行符</span>
<span class="token parameter variable">-c</span> <span class="token comment"># 强制显示列的宽度</span>
<span class="token parameter variable">-P</span> <span class="token comment"># set the non-printable display char to what is specified</span>
<span class="token parameter variable">-F</span> <span class="token comment"># 使用文件中定义的bpf(Berkeley Packet Filter)</span>
<span class="token parameter variable">-N</span> <span class="token comment"># 显示由IANA定义的子协议号</span>
<span class="token parameter variable">-d</span> <span class="token comment"># 使用哪个网卡，可以用-L选项查询</span>
<span class="token parameter variable">-L</span> <span class="token comment"># 查询网卡接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>捕捉cloudian：18080端口的request和response，<code>-W byline</code>用来解析包中的换行符，否则包里的所有数据都是连续的，可读性差。<code>-d lo</code>是监听本地网卡：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ngrep <span class="token parameter variable">-W</span> byline <span class="token parameter variable">-d</span> lo port <span class="token number">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>捕捉amazon：80端口的request和response。<code>-d eth0是</code>用来监听对外的网卡：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ngrep <span class="token parameter variable">-W</span> byline <span class="token parameter variable">-d</span> eth0 port <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以用<code>-d any</code>来捕捉所有的包：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ngrep <span class="token string">&#39;[a-zA-Z]&#39;</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-W</span> byline <span class="token parameter variable">-d</span> any tcp port <span class="token number">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>捕获字符串<code>.flv</code>，比如要查看在Web Flash 视频中的.flv文件的下载地址：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ngrep <span class="token parameter variable">-d3</span> <span class="token parameter variable">-N</span> <span class="token parameter variable">-q</span> <span class="token punctuation">\\</span>.flv
interface: <span class="token punctuation">\\</span>Device<span class="token punctuation">\\</span>TNT_40_1_<span class="token punctuation">{</span>670F6B50-0A13-4BAB-9D9E-994A833F5BA9<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">10.132</span>.0.0/2
<span class="token number">55.255</span>.192.0<span class="token punctuation">)</span>
match: <span class="token punctuation">\\</span>.flv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开一个视频页面：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>T<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token number">10.132</span>.34.23:24860 -<span class="token operator">&gt;</span> <span class="token number">61.142</span>.208.154:80 <span class="token punctuation">[</span>AP<span class="token punctuation">]</span>
GET /f59.c31.56.com/flvdownload/12/19/ggyg7741@56.com_56flv_zhajm_119556973
<span class="token number">97</span>.flv HTTP/1.1<span class="token punctuation">..</span>accept: */*<span class="token punctuation">..</span>Referer: http://www.56.com/flashApp/v_player_
site.swf<span class="token punctuation">..</span>x-flash-version: <span class="token number">9,0</span>,45,0<span class="token punctuation">..</span>UA-CPU: x86<span class="token punctuation">..</span>Accept-Encoding: gzip, de
flate<span class="token punctuation">..</span>User-Agent: Mozilla/4.0 <span class="token punctuation">(</span>compatible<span class="token punctuation">;</span> MSIE <span class="token number">7.0</span><span class="token punctuation">;</span> Windows NT <span class="token number">5.1</span><span class="token punctuation">;</span> .NET
CLR <span class="token number">2.0</span>.50727<span class="token punctuation">;</span> .NET CLR <span class="token number">3.0</span>.04506.30<span class="token punctuation">)</span><span class="token punctuation">..</span>host: f59.r.56.com<span class="token punctuation">..</span>Connection: Keep
-Alive<span class="token punctuation">..</span>Cookie: <span class="token assign-left variable">whistoryview</span><span class="token operator">=</span><span class="token number">23423759</span>-23635627-23423344-23171935-23058374-2
<span class="token number">3081156</span>-23207350-22395727-<span class="token punctuation">;</span> <span class="token assign-left variable">geoip</span><span class="token operator">=</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">;</span> <span class="token assign-left variable">wl_all_s</span><span class="token operator">=</span>y<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK。地址已经找到了,就是http://f59.c31.56.com/flvdownload/12/19/ggyg7741@56.com_56flv_zhajm_11955697397.flv</p><p>加个<code>-W byline</code>参数后,将解析包中的换行符：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>T<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token number">2007</span>/11/25 <span class="token number">15</span>:56:12.192619 <span class="token number">10.132</span>.34.23:26365 -<span class="token operator">&gt;</span> <span class="token number">59.151</span>.21.101:80 <span class="token punctuation">[</span>AP<span class="token punctuation">]</span>
GET /aa.flv HTTP/1.1.
Accept: */*.
Accept-Language: zh-cn.
UA-CPU: x86.
Accept-Encoding: gzip, deflate.
User-Agent: Mozilla/4.0 <span class="token punctuation">(</span>compatible<span class="token punctuation">;</span> MSIE <span class="token number">7.0</span><span class="token punctuation">;</span> Windows NT <span class="token number">5.1</span><span class="token punctuation">;</span> .NET CLR <span class="token number">2.0</span>.5072
<span class="token number">7</span><span class="token punctuation">;</span> .NET CLR <span class="token number">3.0</span>.04506.30<span class="token punctuation">)</span>.
Host: www.google.cn.
Connection: Keep-Alive.
Cookie: <span class="token assign-left variable">PREF</span><span class="token operator">=</span>id<span class="token operator">=</span>a0b2932c336477e9:TB<span class="token operator">=</span><span class="token number">4</span>:NW<span class="token operator">=</span><span class="token number">1</span>:TM<span class="token operator">=</span><span class="token number">1187877372</span>:LM<span class="token operator">=</span><span class="token number">1187956074</span>:S<span class="token operator">=</span>Y1Fzndp
rT3vFo7ac<span class="token punctuation">;</span> <span class="token assign-left variable">SID</span><span class="token operator">=</span>DQAAAHcAAABJCEXeOVLHu2rIfb5BfKP3GG9PbhJDEkXsLTV8y0f_lvSd2Y46Q0FPt
83CnEs9rxA1xBDM9mLR8-ckWeScyOQA8PyYnX5u5OjFvjfRbDg_FDZfwxhRzqS9KPZv26pjnsUxs0FDM
1xpJ5AgDn38pXtlCdkksJ0-cbiIWoA61oHWMg<span class="token punctuation">;</span> <span class="token assign-left variable">NID</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator">=</span>AvJxn5B6YOLLxoYz4LLzhIbNsQUQiulRS6U
JGxdBniQBmXm99y7L-NBNORN82N3unmZSGHFPfePVHnLK2MjYjglyXZhU9x7ETXNBnY3NurNijHDhJ7K
yi7E53UBOcv4V.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),l=[t];function o(i,c){return n(),s("div",null,l)}const u=a(p,[["render",o],["__file","ngrep.html.vue"]]),m=JSON.parse('{"path":"/command/linux/ngrep.html","title":"ngrep","lang":"zh-CN","frontmatter":{"description":"ngrep 方便的数据包匹配和显示工具 补充说明 ngrep命令 是grep命令的网络版，他力求更多的grep特征，用于搜寻指定的数据包。正由于安装ngrep需用到libpcap库， 所以支持大量的操作系统和网络协议。能识别TCP、UDP和ICMP包，理解bpf的过滤机制。 安装 ngrep命令的下载地址：http://ngrep.sourceforg...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/ngrep.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"ngrep"}],["meta",{"property":"og:description","content":"ngrep 方便的数据包匹配和显示工具 补充说明 ngrep命令 是grep命令的网络版，他力求更多的grep特征，用于搜寻指定的数据包。正由于安装ngrep需用到libpcap库， 所以支持大量的操作系统和网络协议。能识别TCP、UDP和ICMP包，理解bpf的过滤机制。 安装 ngrep命令的下载地址：http://ngrep.sourceforg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ngrep\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"command/linux/ngrep.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
