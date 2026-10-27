$modelDir = 'E:\qwik\modelcomp\model'
$folders = Get-ChildItem $modelDir -Directory | Select-Object -ExpandProperty Name
$missing = @()
$hasFindings = @()
$excluded = @()
foreach ($folder in $folders) {
  $mdPath = Join-Path $modelDir $folder 'Nemotron_3_Ultra_550B_A55B.md'
  $exclPath = Join-Path $modelDir $folder 'Nemotron_3_Ultra_550B_A55B.md.excluded'
  if (Test-Path $mdPath) { $hasFindings += $folder }
  elseif (Test-Path $exclPath) { $excluded += $folder }
  else { $missing += $folder }
}
Write-Host '=== HAS FINDINGS (' $hasFindings.Count ') ==='
$hasFindings | Sort-Object | ForEach-Object { Write-Host $_ }
Write-Host ''
Write-Host '=== EXCLUDED (' $excluded.Count ') ==='
$excluded | Sort-Object | ForEach-Object { Write-Host $_ }
Write-Host ''
Write-Host '=== MISSING (' $missing.Count ') ==='
$missing | Sort-Object | ForEach-Object { Write-Host $_ }