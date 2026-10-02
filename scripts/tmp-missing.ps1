Set-Location 'e:\qwik\modelcomp\model'
$dirs = Get-ChildItem -Directory
$need = @()
foreach ($d in $dirs) {
  $md = Join-Path $d.FullName 'Qwen_3.8_Flash.md'
  $ex = Join-Path $d.FullName 'Qwen_3.8_Flash.md.excluded'
  if ((-not (Test-Path -LiteralPath $md)) -and (-not (Test-Path -LiteralPath $ex))) {
    $avg = Join-Path $d.FullName 'average.md'
    $overall = 'NO-AVG'
    if (Test-Path -LiteralPath $avg) {
      $m = Select-String -LiteralPath $avg -Pattern 'Overall Score:\s*([\d.]+)' | Select-Object -First 1
      if ($m) { $overall = $m.Matches[0].Groups[1].Value }
    }
    $need += ,@($d.Name, $overall)
  }
}
if ($need.Count -eq 0) { 'EMPTY — all folders have Qwen_3.8_Flash.md or .excluded' }
else { foreach ($n in $need) { Write-Output ("MISSING`t" + $n[1] + "`t" + $n[0]) } }
