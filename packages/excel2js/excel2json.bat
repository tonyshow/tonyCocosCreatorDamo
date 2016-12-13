excel2json.py .\in .\out
xcopy /y out .\..\..\assets\Script\Utils\RowParser\
del .\..\..\assets\Script\Utils\RowParser\DataApi.js
xcopy /y out\DataApi.js .\..\..\assets\Script\Utils\ 
pause