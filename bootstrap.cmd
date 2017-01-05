@echo off

echo.
echo ====
echo dotnet restore
echo ====

dotnet restore

echo.
echo ====
echo npm install
echo ====

call npm install

echo.
echo ====
echo webpack vendor
echo ====

webpack --config webpack.config.vendor.js