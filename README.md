server A run on localhost:3000
server B run on localhost:3001

index.html (from server A) ajax for 3001/abc, this encounter cross domain

in serverB, if enable cors,
the ajax request could success, otherwise it will block by broswer


get start
simple run 

```
./a_start.sh
```

and

```
./a_start.sh
```

only one config : serverB/index.js, enable_cors = true -> false
when change -> false, you need clean browser cache
