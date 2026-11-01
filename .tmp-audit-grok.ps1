$queue = Get-Content "E:\qwik\modelcomp\model-queue.md" | Where-Object { $_ -match "^\d" }
$have = Get-ChildItem "E:\qwik\modelcomp\model" -Directory | ForEach-Object {
  if (Test-Path (Join-Path $_.FullName "Grok_4.6.md")) { $_.Name }
}
$haveSet = [System.Collections.Generic.HashSet[string]]::new([string[]]$have)
$missing = @()
foreach ($line in $queue) {
  $parts = $line -split "\s+", 2
  $slug = $parts[1].Trim()
  if (-not $haveSet.Contains($slug)) {
    $ex = Test-Path "E:\qwik\modelcomp\model\$slug\Grok_4.6.md.excluded"
    $missing += "{0} {1} excluded={2}" -f $parts[0], $slug, $ex
  }
}
Write-Host "HAVE" $have.Count
Write-Host "MISSING FROM QUEUE" $missing.Count
$missing | Select-Object -First 40
Write-Host "--- folders not in queue with no Grok file ---"
Get-ChildItem "E:\qwik\modelcomp\model" -Directory | ForEach-Object {
  $n = $_.Name
  $inQ = $queue | Where-Object { $_ -match [regex]::Escape($n) + "$" }
  $has = Test-Path (Join-Path $_.FullName "Grok_4.6.md")
  if (-not $has -and -not $inQ) { $n }
}
