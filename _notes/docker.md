- https://www.cnblogs.com/me115/p/5539047.html

启动容器并启动bash（交互方式）:
$docker run -i -t <image_name/continar_id> /bin/bash

启动容器以后台方式运行(更通用的方式）：
$docker run -d -it  image_name
ps：这里的 image_name 包含了tag：hello.demo.kdemo:v1.0


附着到正在运行的容器
```
docker attach <id、container_name>
```

进入正在运行的容器内部，同时运行bash(比attach更好用)
```
docker exec -t -i <id/container_name>  /bin/bash
```

列出当前所有正在运行的container
$docker ps
用一行列出所有正在运行的container（容器多的时候非常清晰）
$docker ps | less -S
列出所有的container
```
$docker ps -a 
``` 
列出最近一次启动的container
$docker ps -l 
显示一个运行的容器里面的进程信息
$docker top Name/ID  
查看容器内部详情细节：
$docker inspect <id/container_name>
在容器中安装新的程序
$docker run image_name apt-get install -y app_name  
Note： 在执行apt-get 命令的时候，要带上-y参数。如果不指定-y参数的话，apt-get命令会进入交互模式，需要用户输入命令来进行确认，但在docker环境中是无法响应这种交互的。apt-get 命令执行完毕之后，容器就会停止，但对容器的改动不会丢失。

从容器里面拷贝文件/目录到本地一个路径