excel2json.py .\in .\out
xcopy /y out .\..\..\assets\Script\MgData\PlanData\

del .\..\..\assets\Script\MgData\PlanData\PlanApi.js

xcopy /y out\PlanApi.js .\..\..\assets\Script\FrameWork\Utils\ 

pause