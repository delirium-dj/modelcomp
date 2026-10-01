$dirs = Get-ChildItem 'e:\qwik\modelcomp\model' -Directory
$rows = foreach ($d in $dirs) {
  if (Test-Path (Join-Path $d.FullName 'Qwen_3.8_Flash.md')) { continue }
  $avg = Join-Path $d.FullName 'average.md'
  $score = -1
  if (Test-Path $avg) {
    $m = Select-String -Path $avg -Pattern 'Overall Score: (\d+(?:\.\d+)?)/100' | Select-Object -First 1
    if ($m) { $score = [double]$m.Matches[0].Groups[1].Value }
  }
  [pscustomobject]@{ Name = $d.Name; Score = $score }
}
$rows | Sort-Object @{Expression={$_.Score};Descending=$true},@{Expression={$_.Name};Descending=$false} |
  Select-Object -First 20 | ForEach-Object { '{0}  {1}' -f $_.Score, $_.Name }
