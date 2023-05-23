## 基础设置
```sh
# 查看全局设置
git config --list

git config --global user.name 'wanghaitao'
git config --global user.email '15124505701@163.com'

# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input
#拒绝提交包含混合换行符的文件
git config --global core.safecrlf true

# 更新本地分支与远程分支同步
git remote update origin -p

# 代理
git config --global http.proxy 'socks5://127.0.0.1:10808' 
git config --global https.proxy 'socks5://127.0.0.1:10808'

# 取消代理
git config --global --unset http.proxy 'socks5://127.0.0.1:10808' 
git config --global --unset https.proxy 'socks5://127.0.0.1:10808'

# 命令行代理
export HTTP_PROXY=socks5://127.0.0.1:10808
export HTTPS_PROXY=socks5://127.0.0.1:10808
export http_proxy=$HTTP_PROXY
export https_proxy=$HTTPS_PROXY
```
