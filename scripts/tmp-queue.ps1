"$covered = Get-ChildItem model -Recurse -Filter 'GLM_5.2_Coding.md' | ForEach-Object { $_.Directory.Name }
Get-ChildItem model -Directory | Where-Object { $_.Name -notin $covered } | ForEach-Object {
  $avgPath = Join-Path $_.FullName 'average.md'
  $score = '0'
  if (Test-Path $avgPath) {
    $m = Select-String -Path $avgPath -Pattern '(\d+(?:\.\d+)?)' | Select-Object -First 1
    if ($m) { $score = $m.Matches[0].Value }
  }
  Write-Output ($score + ' | ' + $_.Name)
} | Sort-Object { [double]($_ -split ' \| ')[0] } -Descending"