Set-Location 'e:\qwik\modelcomp\model'
$dirs = @('qwen-3.8','kimi-k2.8-preview','gemini-3.1-flash','gemini-3.8-flash-cyber','gemini-2.5-flash','claude-sonnet-3.5','glm-5.1-coding','nemotron-3-ultra-free','grok-build-0.1','google-gemini-2.5-flash-lite','big-pickle','nemotron-3.5-lightning-free','mercury-2.5','mimo-v2.6-distill-qwen-9b','jev-1.13','grok-5')
foreach ($d in $dirs) {
  if (-not (Test-Path -LiteralPath $d)) { Write-Output ("NO-DIR`t" + $d); continue }
  $avg = Join-Path $d 'average.md'
  $overall = 'NO-AVG'
  if (Test-Path -LiteralPath $avg) {
    $m = Select-String -LiteralPath $avg -Pattern 'Overall Score:\s*([\d.]+)' | Select-Object -First 1
    if ($m) { $overall = $m.Matches[0].Groups[1].Value }
  }
  $hasMd = Test-Path -LiteralPath (Join-Path $d 'Qwen_3.8_Flash.md')
  $hasEx = Test-Path -LiteralPath (Join-Path $d 'Qwen_3.8_Flash.md.excluded')
  $st = if ($hasMd) { 'HAS' } elseif ($hasEx) { 'EXCLUDED' } else { 'NEED' }
  Write-Output ($st + "`t" + $overall + "`t" + $d)
}
