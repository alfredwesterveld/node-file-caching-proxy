# node-file-caching-proxy

first time

```bash
curl http://localhost:8888?http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4 > bunny
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 61.6M  100 61.6M    0     0  2940k      0  0:00:21  0:00:21 --:--:-- 2942k
```

Second time when cached

```bash
$ curl http://localhost:8888?http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4 > bunny2
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 61.6M    0 61.6M    0     0   638M      0 --:--:-- --:--:-- --:--:--  635M
```
