import{_ as n,o as a,c as s,a as e}from"./app-BLs4FKGw.js";const t={},p=e(`<h2 id="_1-快读模板" tabindex="-1"><a class="header-anchor" href="#_1-快读模板"><span>1. 快读模板</span></a></h2><p>面对大输入量的题目，使用常规的Scanner类来完成输入操作，就会出现超时或者超内存的情况，此时可以使用如下快读模板避免这一情况的发生。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedReader</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStreamReader</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">StreamTokenizer</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Read</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token class-name">StreamTokenizer</span> st <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StreamTokenizer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">			st<span class="token punctuation">.</span><span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> st<span class="token punctuation">.</span>nval<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">nextLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">			st<span class="token punctuation">.</span><span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> st<span class="token punctuation">.</span>nval<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">			st<span class="token punctuation">.</span><span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> st<span class="token punctuation">.</span>nval<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	</span>
<span class="line">		<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">			st<span class="token punctuation">.</span><span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token keyword">return</span> st<span class="token punctuation">.</span>sval<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-获取当前日期和时间" tabindex="-1"><a class="header-anchor" href="#_2-获取当前日期和时间"><span>2. 获取当前日期和时间</span></a></h2><h3 id="_2-1-system-currenttimemillis" tabindex="-1"><a class="header-anchor" href="#_2-1-system-currenttimemillis"><span>2.1. System.currentTimeMillis()</span></a></h3><p>获取标准时间可以通过System.currentTimeMillis()方法获取，此方法不受时区影响，得到的结果是时间戳格式的。例如：</p><p><code>1543105352845 </code></p><p>我们可以将时间戳转化成我们易于理解的格式</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">SimpleDateFormat</span> formatter<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd &#39;at&#39; HH:mm:ss z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则该时间戳对应的时间为：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token number">2021</span><span class="token operator">-</span><span class="token number">8</span><span class="token operator">-</span><span class="token number">4</span> at <span class="token number">00</span><span class="token operator">:</span><span class="token number">22</span><span class="token operator">:</span><span class="token number">12</span> <span class="token constant">CET</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>值得注意的是，此方法会根据我们的系统时间返回当前值，因为世界各地的时区是不一样的。</p><h3 id="_2-2-java-util-date" tabindex="-1"><a class="header-anchor" href="#_2-2-java-util-date"><span>2.2. java.util.Date</span></a></h3><p>在 Java 中，获取当前日期最简单的方法之一就是直接实例化位于 Java 包 java.util 的 Date 类。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// this object contains the current date value </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面获取到的日期也可以被format成我们需要的格式，例如：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">SimpleDateFormat</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;dd-MM-yyyy HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-calendar-api" tabindex="-1"><a class="header-anchor" href="#_2-3-calendar-api"><span>2.3. Calendar API</span></a></h3><p>Calendar 类，专门用于转换特定时刻和日历字段之间的日期和时间。</p><p>使用 Calendar 获取当前日期和时间非常简单：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">// get current instance of the calendar  </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>与 date 一样，我们也可以非常轻松地 format 这个日期成我们需要的格式</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">SimpleDateFormat</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;dd-MM-yyyy HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>calendar<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码打印的结果如下：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token number">4</span><span class="token operator">-</span><span class="token number">8</span><span class="token operator">-</span><span class="token number">2021</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">20</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-4-date-time-api" tabindex="-1"><a class="header-anchor" href="#_2-4-date-time-api"><span>2.4. Date/Time API</span></a></h3><p>Java 8 提供了一个全新的 API，用以替换 java.util.Date 和 java.util.Calendar。Date / Time API 提供了多个类，帮助我们来完成工作，包括：</p><ul><li>LocalDate</li><li>LocalTime</li><li>LocalDateTime</li><li>ZonedDateTime</li></ul><h4 id="_2-4-1-localdate" tabindex="-1"><a class="header-anchor" href="#_2-4-1-localdate"><span>2.4.1. LocalDate</span></a></h4><p>LocalDate 只是一个日期，没有时间。 这意味着我们只能获得当前日期，但没有一天的具体时间。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">LocalDate</span> date <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get the current date </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以 format 它。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">DateTimeFormatter</span> formatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;dd-MM-yyyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>formatter<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的结果只有年月日，例如:</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token number">4</span><span class="token operator">-</span><span class="token number">8</span><span class="token operator">-</span><span class="token number">2021</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-4-2-localtime" tabindex="-1"><a class="header-anchor" href="#_2-4-2-localtime"><span>2.4.2. LocalTime</span></a></h4><p>LocalTime 与 LocalDate 相反，它只代表一个时间，没有日期。 这意味着我们只能获得当天的当前时间，而不是实际日期：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">LocalTime</span> time <span class="token operator">=</span> <span class="token class-name">LocalTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get the current time  </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以按如下方式 format。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">DateTimeFormatter</span> formatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>formatter<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的结果类似如下：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token number">00</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">58</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-4-3-localdatetime" tabindex="-1"><a class="header-anchor" href="#_2-4-3-localdatetime"><span>2.4.3. LocalDateTime</span></a></h4><p>最后一个是 LocalDateTime，也是 Java 中最常用的 Date / Time 类，代表前两个类的组合 – 即日期和时间的值：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">LocalDateTime</span> dateTime <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get the current date and time  </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>format 的方式也一样。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">DateTimeFormatter</span> formatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;dd-MM-yyyy HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dateTime<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>formatter<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的日期结果类似于：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token number">4</span><span class="token operator">-</span><span class="token number">8</span><span class="token operator">-</span><span class="token number">2021</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">20</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-闰年判定" tabindex="-1"><a class="header-anchor" href="#_3-闰年判定"><span>3. 闰年判定</span></a></h2><p>闰年：年份能够<strong>被4整除但不能被100整除</strong>或者<strong>能被400整除</strong>的为闰年。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line">bool <span class="token function">isLeapYear</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token keyword">return</span> n<span class="token operator">%</span><span class="token number">400</span><span class="token operator">==</span><span class="token number">0</span><span class="token operator">||</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">4</span><span class="token operator">==</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>n<span class="token operator">%</span><span class="token number">100</span><span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-快速幂" tabindex="-1"><a class="header-anchor" href="#_4-快速幂"><span>4. 快速幂</span></a></h2><p>我们虽然可以使用Java数学包下的<code>Math.pow</code>方法来求出x的n次幂的值，但这个函数本身运行起来是非常耗时的，对于我们需要参加竞赛的读者来说，无疑会让我们在超时的边缘徘徊，而快速幂可以通过将指数拆分成多个因数相乘的形式来简化幂运算，大大调高运算效率，可谓是我们的一大得力帮手！</p><p>快速幂算法是一种高效计算幂运算的方法，特别是在需要计算 (a^b) 的模 (n) 的结果时非常有用，即 (a^b \\mod n)。这种方法通过将指数 (b) 表示为二进制形式，然后利用幂的性质来减少乘法运算的次数，从而加快计算速度。 快速幂算法的基本思想是将指数 (b) 分解为二进制形式，然后对于二进制表示中的每一个1，累乘底数 (a) 的相应幂次。每一步中，底数 (a) 都会被平方，这样可以减少乘法的次数。如果指数的二进制表示中某位是1，那么就将当前的 (a) 的幂乘到结果中。 下面是快速幂算法的一个简单实现，用于计算 (a^b \\mod n)：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuickPower</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">quickPow</span><span class="token punctuation">(</span><span class="token keyword">long</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> b<span class="token punctuation">,</span> <span class="token keyword">long</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">long</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">// 对n取模，防止过程中出现大数</span></span>
<span class="line">		a <span class="token operator">%=</span> n<span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">				res <span class="token operator">=</span> <span class="token punctuation">(</span>res <span class="token operator">*</span> a<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">			a <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">*</span> a<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span></span>
<span class="line">			b <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 底数</span></span>
<span class="line">		<span class="token keyword">long</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">// 指数</span></span>
<span class="line">		<span class="token keyword">long</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">// 模数</span></span>
<span class="line">		<span class="token keyword">long</span> n <span class="token operator">=</span> <span class="token number">1000000007</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Result：&quot;</span> <span class="token operator">+</span> <span class="token function">quickPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-最大公约数" tabindex="-1"><a class="header-anchor" href="#_5-最大公约数"><span>5. 最大公约数</span></a></h2><p>欧几里得算法：<code>a</code>与<code>b</code>的最大公约数等于<code>b</code>与<code>a%b</code>的最大公约数。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>b<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> temp<span class="token operator">=</span>a<span class="token punctuation">;</span></span>
<span class="line">        a<span class="token operator">=</span>b<span class="token punctuation">;</span></span>
<span class="line">        b<span class="token operator">=</span>temp<span class="token operator">%</span>b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-最小公倍数" tabindex="-1"><a class="header-anchor" href="#_6-最小公倍数"><span>6. 最小公倍数</span></a></h2><p><code>a</code>与<code>b</code>的最大公约数与最小公倍数的乘积=<code>a * b</code>，所以最小公倍数=<code>a*b/gcd(a,b)</code></p>`,61),l=[p];function c(o,i){return a(),s("div",null,l)}const r=n(t,[["render",c],["__file","skill.html.vue"]]),d=JSON.parse('{"path":"/blogs/algorithm/skill.html","title":"算法小技巧","lang":"en-US","frontmatter":{"title":"算法小技巧","date":"2024/03/28","tags":["蓝桥杯","技巧"],"categories":["algorithm"]},"headers":[{"level":2,"title":"1. 快读模板","slug":"_1-快读模板","link":"#_1-快读模板","children":[]},{"level":2,"title":"2. 获取当前日期和时间","slug":"_2-获取当前日期和时间","link":"#_2-获取当前日期和时间","children":[{"level":3,"title":"2.1. System.currentTimeMillis()","slug":"_2-1-system-currenttimemillis","link":"#_2-1-system-currenttimemillis","children":[]},{"level":3,"title":"2.2. java.util.Date","slug":"_2-2-java-util-date","link":"#_2-2-java-util-date","children":[]},{"level":3,"title":"2.3. Calendar API","slug":"_2-3-calendar-api","link":"#_2-3-calendar-api","children":[]},{"level":3,"title":"2.4. Date/Time API","slug":"_2-4-date-time-api","link":"#_2-4-date-time-api","children":[]}]},{"level":2,"title":"3. 闰年判定","slug":"_3-闰年判定","link":"#_3-闰年判定","children":[]},{"level":2,"title":"4. 快速幂","slug":"_4-快速幂","link":"#_4-快速幂","children":[]},{"level":2,"title":"5. 最大公约数","slug":"_5-最大公约数","link":"#_5-最大公约数","children":[]},{"level":2,"title":"6. 最小公倍数","slug":"_6-最小公倍数","link":"#_6-最小公倍数","children":[]}],"git":{"createdTime":1712038492000,"updatedTime":1712038492000,"contributors":[{"name":"kaiyuan","email":"guokaiyuan04@gmail.com","commits":1}]},"filePathRelative":"blogs/algorithm/skill.md"}');export{r as comp,d as data};
