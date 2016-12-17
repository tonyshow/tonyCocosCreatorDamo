excel2json.py .\in .\out
xcopy /y out .\..\..\assets\Script\Utils\RowParser\
del .\..\..\assets\Script\Utils\RowParser\PlanApi.js
xcopy /y out\PlanApi.js .\..\..\assets\Script\Utils\ 
pause