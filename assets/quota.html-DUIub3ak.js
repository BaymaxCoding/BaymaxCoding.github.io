import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-D3p8wuGf.js";const t={},o=e(`<h1 id="quota" tabindex="-1"><a class="header-anchor" href="#quota"><span>quota</span></a></h1><p>显示磁盘已使用的空间与限制</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>quota命令</strong> 用于显示用户或者工作组的磁盘配额信息。输出信息包括磁盘使用和配额限制。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>quota<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-g：列出群组的磁盘空间限制；
-q：简明列表，只列出超过限制的部分；
-u：列出用户的磁盘空间限制；
-v：显示该用户或群组，在所有挂入系统的存储设备的空间限制；
-V：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>用户或者工作组：指定要显示的用户或者工作组。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>我们可以限制某一群组所能使用的最大磁盘配额，而且可以再限制某一使用者的最大磁盘配额 ，好比做一个收费的应用，vip可以得到空间更大一些。另外，以 Link 的方式，来使邮件可以作为限制的配额（更改<code>/var/spool/mail</code> 这个路径），不2，需要重新再规划一个硬盘！直接使用 Link 的方式指向 /home （或者其它已经做好的 quota 磁盘）就可以！这通常是用在原本规划不好，但是却又不想要更动原有主机架构的情况中！</p><p>要求：Linux 主机里面主要针对 quser1 及 quser2 两个使用者来进行磁盘配额， 且这两个使用者都是挂在 qgroup 组里面的。每个使用者总共有 50MB 的磁盘空间 (不考虑 inode) 限制！并且 soft limit 为 45 MB；而宽限时间设定为 1 天， 但是在一天之内必须要将多余的文件删除掉，否则将无法使用剩下的空间 ；gquota 这个组考虑最大限额，所以设定为 90 MB！（注意，这样设置的好处是富有弹性，好比现在的邮件服务，那么多用户，承诺给用户每人最大空间为数GB，然而人们不可能每人都会使用那么大的空间，所以邮件服务的总空间，实际上肯定不是注册客户数乘以数GB，否则这样得多大啊。）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd qgroup</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd -m -g qgroup quser1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd -m -g qgroup quser2</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd quser1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd quser2</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df     ===&gt;  自己找一个合适的分区来做实验，这里用/disk2</span>
Filesystem             1K-blocks        Used      Available   Use% Mounted on
/dev/hda1              <span class="token number">5952252</span>   <span class="token number">3193292</span>     <span class="token number">2451720</span>     <span class="token number">57</span>%     /
/dev/hdb1            <span class="token number">28267608</span>       <span class="token number">77904</span>   <span class="token number">26730604</span>       <span class="token number">1</span>%     /disk2
/dev/hda5              <span class="token number">9492644</span>     <span class="token number">227252</span>     <span class="token number">8775412</span>       <span class="token number">3</span>%     /disk1

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/fstab</span>
<span class="token assign-left variable">LABEL</span><span class="token operator">=</span>/             /                ext3      defaults                                     <span class="token number">1</span> <span class="token number">1</span>
<span class="token assign-left variable">LABEL</span><span class="token operator">=</span>/disk1    /disk1        ext3      defaults                                      <span class="token number">1</span> <span class="token number">2</span>
<span class="token assign-left variable">LABEL</span><span class="token operator">=</span>/disk2    /disk2        ext3      defaults,usrquota,grpquota       <span class="token number">1</span> <span class="token number">2</span>  
/dev/hda3         swap         swap     defaults                                     <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意多了<code>usrquota,grpquota</code>，在<code>defaults,usrquota,grpquota</code>之间都没有空格，务必正确书写。这样就算加入了 quota 的磁盘格式了！不过，由于真正的 quota 在读取的时候是读取<code>/etc/mtab</code>这个文件的，而该文件需要重新开机之后才能够以/etc/fstab 的新数据进行改写！所以这个时候可以选择：重新开机 (reboot)。</p><p>重新<code>remount filesystem</code>来驱动设定值。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umount /dev/hdb1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount -a</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;/disk2&#39; /etc/mtab</span>
/dev/hdb1 /disk2 ext3 rw,usrquota,grpquota <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，也可以利用 mount 的 remount 功能。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount -o remount /disk2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就已经成功的将 filesystem 的 quota 功能加入。</p><p>扫瞄磁盘的使用者使用状况，并产生重要的 aquota.group 与 aquota.user：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotacheck -avug</span>
quotacheck: Scanning /dev/hdb1 <span class="token punctuation">[</span>/disk2<span class="token punctuation">]</span> <span class="token keyword">done</span>
quotacheck: Checked <span class="token number">3</span> directories and <span class="token number">4</span> files

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /disk2</span>
-rw-------  <span class="token number">1</span> root root  <span class="token number">6144</span> Sep  <span class="token number">6</span> <span class="token number">11</span>:44 aquota.group
-rw-------  <span class="token number">1</span> root root  <span class="token number">6144</span> Sep  <span class="token number">6</span> <span class="token number">11</span>:44 aquota.user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 quotacheck 就可以轻易的将所需要的数据给他输出了！但奇怪的是，在某些 Linux 版本中，不能够以 aquota.user(group) 来启动quota ，可能是因为旧版 quota 的关系， 所以就另外做了一个 link 文件按来欺骗 quota，这个动作非必要。（主要是学习这个思维很重要）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /disk2</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln -s aquota.user quota.user</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln -s aquota.group quota.group</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 quota 的限额：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaon -avug</span>
/dev/hdb1 <span class="token punctuation">[</span>/disk2<span class="token punctuation">]</span>: group quotas turned on
/dev/hdb1 <span class="token punctuation">[</span>/disk2<span class="token punctuation">]</span>: user quotas turned on    <span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span>  看到turned on，才是真的成功！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑使用者的可使用空间：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -u quser1</span>
Disk quotas <span class="token keyword">for</span> user quser1 <span class="token punctuation">(</span>uid <span class="token number">502</span><span class="token punctuation">)</span>:
  Filesystem    blocks    soft    hard   inodes   soft   hard
  /dev/hdb1           <span class="token number">0</span>     <span class="token number">45000</span>    <span class="token number">50000</span>         <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -p quser1 quser2      ===&gt;  直接复制给quser2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来要来设定宽限时间，还是使用 edquota</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -t</span>
Grace period before enforcing soft limits <span class="token keyword">for</span> users:
<span class="token function">time</span> <span class="token function">units</span> may be: days, hours, minutes, or seconds
  Filesystem             Block grace period     Inode grace period
  /dev/hdb1                     1days                  7days
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>quota -v</code>来查询：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quota -vu quser1 quser2</span>
Disk quotas <span class="token keyword">for</span> user quser1 <span class="token punctuation">(</span>uid <span class="token number">502</span><span class="token punctuation">)</span>:
     Filesystem  blocks   <span class="token function">quota</span>      limit   grace   files   <span class="token function">quota</span>   limit   grace
      /dev/hdb1         <span class="token number">0</span>    <span class="token number">45000</span>    <span class="token number">50000</span>                   <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>
Disk quotas <span class="token keyword">for</span> user quser2 <span class="token punctuation">(</span>uid <span class="token number">503</span><span class="token punctuation">)</span>:
     Filesystem  blocks   <span class="token function">quota</span>      limit   grace   files   <span class="token function">quota</span>   limit   grace
      /dev/hdb1         <span class="token number">0</span>    <span class="token number">45000</span>    <span class="token number">50000</span>                   <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，由于使用者尚未超过45 MB，所以 grace ( 宽限时间 ) 就不会出现。</p><p>编辑群组可使用的空间：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -g qgroup</span>
Disk quotas <span class="token keyword">for</span> group qgroup <span class="token punctuation">(</span>gid <span class="token number">502</span><span class="token punctuation">)</span>:
  Filesystem     blocks       soft       hard    inodes   soft   hard
  /dev/hdb1            <span class="token number">0</span>      <span class="token number">80000</span>   <span class="token number">90000</span>           <span class="token number">0</span>      <span class="token number">0</span>      <span class="token number">0</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quota -vg qgroup</span>
Disk quotas <span class="token keyword">for</span> group qgroup <span class="token punctuation">(</span>gid <span class="token number">502</span><span class="token punctuation">)</span>:
     Filesystem   blocks    <span class="token function">quota</span>      limit      grace    files   <span class="token function">quota</span>   limit   grace
      /dev/hdb1         <span class="token number">0</span>     <span class="token number">80000</span>   <span class="token number">90000</span>                       <span class="token number">0</span>        <span class="token number">0</span>        <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),p=[o];function l(i,c){return n(),a("div",null,p)}const r=s(t,[["render",l],["__file","quota.html.vue"]]),m=JSON.parse('{"path":"/command/linux/quota.html","title":"quota","lang":"zh-CN","frontmatter":{"description":"quota 显示磁盘已使用的空间与限制 补充说明 quota命令 用于显示用户或者工作组的磁盘配额信息。输出信息包括磁盘使用和配额限制。 语法 选项 参数 用户或者工作组：指定要显示的用户或者工作组。 实例 我们可以限制某一群组所能使用的最大磁盘配额，而且可以再限制某一使用者的最大磁盘配额 ，好比做一个收费的应用，vip可以得到空间更大一些。另外，以 ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/quota.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"quota"}],["meta",{"property":"og:description","content":"quota 显示磁盘已使用的空间与限制 补充说明 quota命令 用于显示用户或者工作组的磁盘配额信息。输出信息包括磁盘使用和配额限制。 语法 选项 参数 用户或者工作组：指定要显示的用户或者工作组。 实例 我们可以限制某一群组所能使用的最大磁盘配额，而且可以再限制某一使用者的最大磁盘配额 ，好比做一个收费的应用，vip可以得到空间更大一些。另外，以 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"quota\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":4.14,"words":1243},"filePathRelative":"command/linux/quota.md","localizedDate":"2024年4月12日","autoDesc":true}');export{r as comp,m as data};
