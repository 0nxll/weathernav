@echo off

echo Deleting Windows temporary files...

REM Change directory to the Windows Temp folder
cd /D C:\Windows\Temp

REM Deleting files in the Temp folder, skipping those that throw access denied errors
for /f "delims=" %%F in ('dir /b /a:-D 2^>nul') do (
    del "%%F" 2>nul
)

echo Temporary files deletion completed.
echo Press any key to exit...
pause >nul
