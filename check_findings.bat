@echo off
setlocal enabledelayedexpansion
set HAS=0
set EXCL=0
set MISS=0
for /d %%i in (model\*) do (
    set "FOLDER=%%~ni"
    if exist "%%i\Nemotron_3_Ultra_550B_A55B.md" (
        set /a HAS+=1
        echo HAS: !FOLDER!
    ) else if exist "%%i\Nemotron_3_Ultra_550B_A55B.md.excluded" (
        set /a EXCL+=1
        echo EXCL: !FOLDER!
    ) else (
        set /a MISS+=1
        echo MISS: !FOLDER!
    )
)
echo.
echo TOTAL HAS: %HAS% EXCL: %EXCL% MISS: %MISS%