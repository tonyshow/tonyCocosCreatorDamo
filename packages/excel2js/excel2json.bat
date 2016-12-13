excel2json.py .\in .\out
xcopy /y out .\..\..\assets\Script\util\rowParser\
del .\..\..\assets\Script\util\rowParser\dataApi.js
xcopy /y out\dataApi.js .\..\..\assets\Script\util\ 
pause