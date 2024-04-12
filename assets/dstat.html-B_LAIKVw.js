import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-D3p8wuGf.js";const p={},t=e(`<h1 id="dstat" tabindex="-1"><a class="header-anchor" href="#dstat"><span>dstat</span></a></h1><p>通用的系统资源统计工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>dstat命令</strong> 是一个用来替换vmstat、iostat、netstat、nfsstat和ifstat这些命令的工具，是一个全能系统信息统计工具。与sysstat相比，dstat拥有一个彩色的界面，在手动观察性能状况时，数据比较显眼容易观察；而且dstat支持即时刷新，譬如输入<code>dstat 3</code>即每三秒收集一次，但最新的数据都会每秒刷新显示。和sysstat相同的是，dstat也可以收集指定的性能资源，譬如<code>dstat -c</code>即显示CPU的使用情况。</p><h3 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h3><p><strong>方法一</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> dstat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方法二</strong></p><p>官网下载地址：http://dag.wieers.com/rpm/packages/dstat</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://dag.wieers.com/rpm/packages/dstat/dstat-0.6.7-1.rh7.rf.noarch.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> dstat-0.6.7-1.rh7.rf.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h3><p>安装完后就可以使用了，dstat非常强大，可以实时的监控cpu、磁盘、网络、IO、内存等使用情况。</p><p>直接使用dstat，默认使用的是<code>-cdngy</code>参数，分别显示cpu、disk、net、page、system信息，默认是1s显示一条信息。可以在最后指定显示一条信息的时间间隔，如<code>dstat 5</code>是没5s显示一条，<code>dstat 5 10</code>表示没5s显示一条，一共显示10条。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZ23uulau1tZ ~<span class="token punctuation">]</span><span class="token comment"># dstat</span>
----total-cpu-usage---- -dsk/total- -net/total- ---paging-- ---system--
usr sys idl wai hiq siq<span class="token operator">|</span> <span class="token builtin class-name">read</span>  writ<span class="token operator">|</span> recv  send<span class="token operator">|</span>  <span class="token keyword">in</span>   out <span class="token operator">|</span> int   csw
  <span class="token number">0</span>   <span class="token number">0</span>  <span class="token number">99</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>7706B  164k<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">189</span>   <span class="token number">225</span>
  <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">100</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>4436B  826B<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">195</span>   <span class="token number">248</span>
  <span class="token number">1</span>   <span class="token number">0</span>  <span class="token number">99</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>4744B  346B<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">203</span>   <span class="token number">242</span>
  <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">100</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>5080B  346B<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">206</span>   <span class="token number">242</span>
  <span class="token number">0</span>   <span class="token number">1</span>  <span class="token number">99</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>5458B  444B<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">214</span>   <span class="token number">244</span>
  <span class="token number">1</span>   <span class="token number">0</span>  <span class="token number">99</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>5080B  346B<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">208</span>   <span class="token number">242</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面对显示出来的部分信息作一些说明：</p><ol><li>cpu：hiq、siq分别为硬中断和软中断次数。</li><li>system：int、csw分别为系统的中断次数（interrupt）和上下文切换（context switch）。</li></ol><p>其他的都很好理解。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dstat <span class="token punctuation">[</span>-afv<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">..</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>delay <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项"><span>常用选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-c：显示CPU系统占用，用户占用，空闲，等待，中断，软件中断等信息。
-C：当有多个CPU时候，此参数可按需分别显示cpu状态，例：-C <span class="token number">0,1</span> 是显示cpu0和cpu1的信息。
-d：显示磁盘读写数据大小。
<span class="token parameter variable">-D</span> hda,total：include hda and total。
-n：显示网络状态。
<span class="token parameter variable">-N</span> eth1,total：有多块网卡时，指定要显示的网卡。
-l：显示系统负载情况。
-m：显示内存使用情况。
-g：显示页面使用情况。
-p：显示进程状态。
-s：显示交换分区使用情况。
-S：类似D/N。
-r：I/O请求情况。
-y：系统状态。
--ipc：显示ipc消息队列，信号等信息。
--socket：用来显示tcp udp端口状态。
-a：此为默认选项，等同于-cdngy。
-v：等同于 <span class="token parameter variable">-pmgdsc</span> <span class="token parameter variable">-D</span> total。
<span class="token parameter variable">--output</span> 文件：此选项也比较有用，可以把状态信息以csv的格式重定向到指定的文件中，以便日后查看。例：dstat <span class="token parameter variable">--output</span> /root/dstat.csv <span class="token operator">&amp;</span> 此时让程序默默的在后台运行并把结果输出到/root/dstat.csv文件中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然dstat还有很多更高级的用法，常用的基本这些选项，更高级的用法可以结合man文档。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>如想监控swap，process，sockets，filesystem并显示监控的时间：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZ23uulau1tZ ~<span class="token punctuation">]</span><span class="token comment"># dstat -tsp --socket --fs</span>
----system---- ----swap--- ---procs--- ------sockets------ --filesystem-
  date/time   <span class="token operator">|</span> used  <span class="token function">free</span><span class="token operator">|</span>run blk new<span class="token operator">|</span>tot tcp udp raw frg<span class="token operator">|</span>files  inodes
<span class="token number">26</span>-07 09:23:48<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">0.0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">704</span>   <span class="token number">6488</span>
<span class="token number">26</span>-07 09:23:49<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">704</span>   <span class="token number">6488</span>
<span class="token number">26</span>-07 09:23:50<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">704</span>   <span class="token number">6489</span>
<span class="token number">26</span>-07 09:23:51<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">704</span>   <span class="token number">6489</span>
<span class="token number">26</span>-07 09:23:52<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">704</span>   <span class="token number">6489</span>
<span class="token number">26</span>-07 09:23:53<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">704</span>   <span class="token number">6489</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要将结果输出到文件可以加<code>--output filename</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZ23uulau1tZ ~<span class="token punctuation">]</span><span class="token comment"># dstat -tsp --socket --fs --output /tmp/ds.csv</span>
----system---- ----swap--- ---procs--- ------sockets------ --filesystem-
  date/time   <span class="token operator">|</span> used  <span class="token function">free</span><span class="token operator">|</span>run blk new<span class="token operator">|</span>tot tcp udp raw frg<span class="token operator">|</span>files  inodes
<span class="token number">26</span>-07 09:25:31<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">0.0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">736</span>   <span class="token number">6493</span>
<span class="token number">26</span>-07 09:25:32<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">736</span>   <span class="token number">6493</span>
<span class="token number">26</span>-07 09:25:33<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">736</span>   <span class="token number">6493</span>
<span class="token number">26</span>-07 09:25:34<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">736</span>   <span class="token number">6493</span>
<span class="token number">26</span>-07 09:25:35<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">736</span>   <span class="token number">6494</span>
<span class="token number">26</span>-07 09:25:36<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>  <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span><span class="token number">104</span>   <span class="token number">8</span>   <span class="token number">5</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>  <span class="token number">736</span>   <span class="token number">6494</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样生成的csv文件可以用excel打开，然后生成图表。</p><p>通过<code>dstat --list</code>可以查看dstat能使用的所有参数，其中上面internal是dstat本身自带的一些监控参数，下面<code>/usr/share/dstat</code>中是dstat的插件，这些插件可以扩展dstat的功能，如可以监控电源（battery）、mysql等。</p><p>下面这些插件并不是都可以直接使用的，有的还依赖其他包，如想监控mysql，必须要装python连接mysql的一些包。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iZ23uulau1tZ ~<span class="token punctuation">]</span><span class="token comment"># dstat --list</span>
internal:
        aio, cpu, cpu24, disk, disk24, disk24old, epoch, fs, int, int24, io, ipc, load, lock, mem, net, page, page24, proc, raw, socket, swap, swapold, sys, tcp, time, udp, unix, vm
/usr/share/dstat:
        battery, battery-remain, cpufreq, dbus, disk-util, fan, freespace, gpfs, gpfs-ops, helloworld, innodb-buffer, innodb-io, innodb-ops, lustre, memcache-hits, mysql-io, mysql-keys, mysql5-cmds, mysql5-conn, mysql5-io, mysql5-keys,
        net-packets, nfs3, nfs3-ops, nfsd3, nfsd3-ops, ntp, postfix, power, proc-count, rpc, rpcd, sendmail, snooze, thermal, top-bio, top-cpu, top-cputime, top-cputime-avg, top-io, top-latency, top-latency-avg, top-mem, top-oom, utmp,
        vm-memctl, vmk-hba, vmk-int, vmk-nic, vz-cpu, vz-io, vz-ubc, wifi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dstat命令的基本用法就说到这里，更多用法有待摸索，如果您需要补充内容请给我们发邮件，谢谢！</p>`,32),o=[t];function r(l,c){return n(),a("div",null,o)}const m=s(p,[["render",r],["__file","dstat.html.vue"]]),k=JSON.parse('{"path":"/command/linux/dstat.html","title":"dstat","lang":"zh-CN","frontmatter":{"description":"dstat 通用的系统资源统计工具 补充说明 dstat命令 是一个用来替换vmstat、iostat、netstat、nfsstat和ifstat这些命令的工具，是一个全能系统信息统计工具。与sysstat相比，dstat拥有一个彩色的界面，在手动观察性能状况时，数据比较显眼容易观察；而且dstat支持即时刷新，譬如输入dstat 3即每三秒收集一次...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dstat.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dstat"}],["meta",{"property":"og:description","content":"dstat 通用的系统资源统计工具 补充说明 dstat命令 是一个用来替换vmstat、iostat、netstat、nfsstat和ifstat这些命令的工具，是一个全能系统信息统计工具。与sysstat相比，dstat拥有一个彩色的界面，在手动观察性能状况时，数据比较显眼容易观察；而且dstat支持即时刷新，譬如输入dstat 3即每三秒收集一次..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dstat\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"下载安装","slug":"下载安装","link":"#下载安装","children":[]},{"level":3,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[]},{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"常用选项","slug":"常用选项","link":"#常用选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":4.58,"words":1375},"filePathRelative":"command/linux/dstat.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,k as data};
