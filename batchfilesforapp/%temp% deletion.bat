@echo off
cd /D %temp%
for /d %%D in (*) do rd /s /q "%%D"
del /f /q *

echo Temporary files deletion completed.
echo Press any key to exit...
pause >nul
