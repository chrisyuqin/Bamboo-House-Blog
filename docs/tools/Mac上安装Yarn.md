# Mac 上安装yarn
### 第一种安装方式：homebrew
<code>brew install yarn</code> 尝试了几次都是失败

#### 输出结果：
> qin@Qin-MacPro ~ % brew install yarn
> ==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/bottles/libuv-1.41.
> ==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/bottles/jemalloc-5.
> Already downloaded: /Users/qin/Library/Caches/Homebrew/downloads/9eb4817047add0744ba2ffb253456d48bb72189a58bf9fcd2b982a660abb9063--jemalloc-5.2.1_1.catalina.bottle.tar.gz
> ==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/bottles/libev-4.33.
> tar: Error opening archive: Failed to open '/Users/qin/Library/Caches/Homebrew/downloads/2aa24fdcafabce5ff229793c9c9d97617e18edc01daf1843165548b4a054c0dd--node-16.1.0.catalina.bottle.tar.gz'
> Error: Failure while executing; 
> tar: Error opening archive: Failed to open '/Users/Library/Caches/Homebrew/downloads/2aa24fdcafabce5ff229793c9c9d97617e18edc01daf1843165548b4a054c0dd--node-16.1.0.catalina.bottle.tar.gz'

### 第二种方式 脚本安装

<code>curl -o- -L https://yarnpkg.com/install.sh | bash</code>  一次就成功了

#### 输出结果
>+ qin@Qin-MacPro ~ % yarn -v
>+ 1.22.5

