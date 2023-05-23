## WSL

[文档](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual)

1. `\\wsl$` 可在文件管理中查看

2. git 管理
```sh
# 复制ssh
cp -r /mnt/c/Users/<username>/.ssh ~/
```
3. 代理 proxy.sh
```sh
#!/bin/sh
hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
wslip=$(hostname -I | awk '{print $1}')
port=10809

PROXY_HTTP="http://${hostip}:${port}"

set_proxy(){
    export http_proxy="${PROXY_HTTP}"
    export HTTP_PROXY="${PROXY_HTTP}"

    export https_proxy="${PROXY_HTTP}"
    export HTTPS_proxy="${PROXY_HTTP}"

    git config --global http.proxy "${PROXY_HTTP}"
    git config --global https.proxy "${PROXY_HTTP}"
}
# git config --global https.proxy http://192.168.9.1:10809
unset_proxy(){
    unset http_proxy
    unset HTTP_PROXY
    unset https_proxy
    unset HTTPS_PROXY
    git config --global --unset http.proxy
    git config --global --unset https.proxy
}

test_setting(){
    echo "Host ip:" ${hostip}
    echo "WSL ip:" ${wslip}
    echo "Current proxy:" $https_proxy
}

if [ "$1" = "set" ]
then
    set_proxy

elif [ "$1" = "unset" ]
then
    unset_proxy

elif [ "$1" = "test" ]
then
    test_setting
else
    echo "Unsupported arguments."
fi
```
```sh
source ./proxy.sh set
source ./proxy.sh test
source ./proxy.sh unset

vi /root/.zshrc
alias proxy="source /home/wht/tools/proxy.sh"
. /home/wht/tools/proxy.sh set
```
