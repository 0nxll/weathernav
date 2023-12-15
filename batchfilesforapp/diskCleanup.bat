@echo off

echo Setting up Disk Cleanup options...

:: Configure Disk Cleanup settings (sageset)
cleanmgr /sageset:1

:: Run Disk Cleanup with the configured settings (sagerun)
cleanmgr /sagerun:1
