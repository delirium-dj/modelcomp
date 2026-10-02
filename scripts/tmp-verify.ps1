Set-Location 'e:\qwik\modelcomp\model'
$total = 0; $missing = 0
foreach ($d in (Get-ChildItem -Directory)) {
  $total++
  $md = Join-Path $d.FullName 'Qwen_3.8_Flash.md'
  $ex = Join-Path $d.FullName 'Qwen_3.8_Flash.md.excluded'
  if ((-not (Test-Path -LiteralPath $md)) -and (-not (Test-Path -LiteralPath $ex))) {
    $missing++
    Write-Output ('MISSING: ' + $d.Name)
  }
}
Write-Output ('Total folders: ' + $total + ' | Missing: ' + $missing)
