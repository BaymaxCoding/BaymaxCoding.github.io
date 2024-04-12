import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e as s}from"./app-D_HUMAmc.js";const i={},t=s(`<h1 id="timedatectl" tabindex="-1"><a class="header-anchor" href="#timedatectl"><span>timedatectl</span></a></h1><p>用于在 Linux 中设置或查询系统时间、日期和时区等配置。</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>在 Linux 运维中，通常使用此命令来设置或更改当前的日期、时间和时区，或启用自动系统时钟与远程 NTP 服务器同步，以确保 Linux 系统始终保持正确的时间。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>timedatectl <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">..</span>.<span class="token punctuation">]</span> COMMAND <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>转换时间到选定的格式，默认为当前。</li><li>设置系统时间。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Query or change system <span class="token function">time</span> and <span class="token function">date</span> settings.

  <span class="token parameter variable">-h</span> <span class="token parameter variable">--help</span>                显示帮助信息。
     <span class="token parameter variable">--version</span>             显示软件包版本。
     --no-pager            不用将输出通过管道传输到寻呼机（pager）。
     --no-ask-password     不提示输入密码。
  <span class="token parameter variable">-H</span> <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST    在远程主机上操作
  <span class="token parameter variable">-M</span> <span class="token parameter variable">--machine</span><span class="token operator">=</span>CONTAINER   在本地容器上操作。
     --adjust-system-clock 更改本地 RTC 模式时调整系统时钟。
     <span class="token parameter variable">--monitor</span>		   监控systemd-timesyncd的状态
  <span class="token parameter variable">-p</span> <span class="token parameter variable">--property</span><span class="token operator">=</span>NAME       仅显示此名称的属性
  <span class="token parameter variable">-a</span> <span class="token parameter variable">--all</span>		   显示所有属性，包括空属性
     <span class="token parameter variable">--value</span>		   显示属性时，只打印值

Commands:
  status                   显示当前的时间设置。
  set-time TIME            设置系统时间。
  set-timezone ZONE        设置系统时区。
  list-timezones           显示已知时区。
  set-local-rtc BOOL       控制 RTC 是否在当地时间。（BOOL 的值可以是 <span class="token number">1</span> / <span class="token boolean">true</span> 或 <span class="token number">0</span> / false）
  set-ntp BOOL             启用或禁用网络时间同步。（BOOL 的值可以是 <span class="token number">1</span> / <span class="token boolean">true</span> 或 <span class="token number">0</span> / false）
  timesync-status          显示 systemd-timesyncd 的状态。
  show-timesync            显示 systemd-timesyncd 的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><p>显示系统当前时间和日期</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl status
      Local time: 五 <span class="token number">2022</span>-04-08 <span class="token number">17</span>:06:40 CST
  Universal time: 五 <span class="token number">2022</span>-04-08 09:06:40 UTC
        RTC time: 五 <span class="token number">2022</span>-04-08 <span class="token number">17</span>:04:02
       Time zone: Asia/Shanghai <span class="token punctuation">(</span>CST, +0800<span class="token punctuation">)</span>
     NTP enabled: n/a
NTP synchronized: no
 RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: <span class="token function">yes</span>
      DST active: n/a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示系统所有可用的时区</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl show
Unknown operation show
$ timedatectl list-timezones
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将本地时区从上海（Asia/Shanghai）设置为阿姆斯特丹（Europe/Amsterdam）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-timezone <span class="token string">&quot;Europe/Amsterdam&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将本地时区设置为协调世界时（UTC）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-timezone UTC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置系统时间（格式：HH:MM:SS）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-time <span class="token string">&quot;07:25:46&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置系统日期（格式：YYYY-MM-DD）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-time <span class="token string">&quot;2021-12-12&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只设置日期，那么时间将默认设置为 “00:00:00″（建议同时设置日期和时间）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-time <span class="token string">&quot;2021-12-12 07:25:46&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将硬件时钟（RTC）设置为本地时区（不建议，RTC 时钟统一使用 UTC 更恰当，避免在时区更改和夏令时调整方面产生各种问题）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-local-rtc <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将硬件时钟（RTC）设置为协调世界时间（UTC）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-local-rtc <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用 NTP 自动时间同步</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-ntp <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>禁用 NTP 自动时间同步</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl set-ntp <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 systemd-timesyncd 服务的状态</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ timedatectl timesync-status
       Server: <span class="token number">91.189</span>.94.4 <span class="token punctuation">(</span>ntp.ubuntu.com<span class="token punctuation">)</span>
Poll interval: 17min 4s <span class="token punctuation">(</span>min: 32s<span class="token punctuation">;</span> max 34min 8s<span class="token punctuation">)</span>
         Leap: normal
      Version: <span class="token number">4</span>
      Stratum: <span class="token number">2</span>
    Reference: 91EECB0E
    Precision: 1us <span class="token punctuation">(</span>-23<span class="token punctuation">)</span>
Root distance: <span class="token number">29</span>.922ms <span class="token punctuation">(</span>max: 5s<span class="token punctuation">)</span>
       Offset: +2.497ms
        Delay: <span class="token number">199</span>.540ms
       Jitter: <span class="token number">5</span>.834ms
 Packet count: <span class="token number">6</span>
    Frequency: +13.039ppm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>systemd-timedated</code> 可能默认配置了谷歌的 NTP 服务器（如 time1.google.com），为了顺利完成网络时间同步，您可以编辑 <code>/etc/systemd/timesyncd.conf</code> 文件添加自己的 NTP 服务器地址。</p>`,36),l=[t];function d(c,r){return a(),n("div",null,l)}const m=e(i,[["render",d],["__file","timedatectl.html.vue"]]),u=JSON.parse('{"path":"/command/linux/timedatectl.html","title":"timedatectl","lang":"zh-CN","frontmatter":{"description":"timedatectl 用于在 Linux 中设置或查询系统时间、日期和时区等配置。 补充说明 在 Linux 运维中，通常使用此命令来设置或更改当前的日期、时间和时区，或启用自动系统时钟与远程 NTP 服务器同步，以确保 Linux 系统始终保持正确的时间。 概要 主要用途 转换时间到选定的格式，默认为当前。 设置系统时间。 参数 例子 显示系统当前...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/timedatectl.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"timedatectl"}],["meta",{"property":"og:description","content":"timedatectl 用于在 Linux 中设置或查询系统时间、日期和时区等配置。 补充说明 在 Linux 运维中，通常使用此命令来设置或更改当前的日期、时间和时区，或启用自动系统时钟与远程 NTP 服务器同步，以确保 Linux 系统始终保持正确的时间。 概要 主要用途 转换时间到选定的格式，默认为当前。 设置系统时间。 参数 例子 显示系统当前..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"timedatectl\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]},{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"command/linux/timedatectl.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
