$names = 'mistral-large-4','ring-2.6.1t','ling-2.6.1t','owl-alpha','solar-open-2','ling-3.0-flash','ling-3.0-flash-sante','ling-2.6-flash','ling-3.0-tiny'
foreach ($n in $names) {
  $p = Join-Path 'model' (Join-Path $n 'Qwen_3.8_Flash.md')
  if (-not (Test-Path -LiteralPath $p)) { Write-Output "$n MISSING"; continue }
  $r = Get-Content -LiteralPath $p -Raw
  $d = [regex]::Matches($r, '\*\*(Tool use|Reasoning|Context window|Multimodal|Coding): (\d+)/100') | ForEach-Object { [int]$_.Groups[2].Value }
  $s = ($d | Measure-Object -Sum).Sum
  $m = $s / 5
  $printed = [regex]::Match($r, 'Overall Score: (\d+)').Groups[1].Value
  $sumTok = [regex]::Match($r, '/ 5 = (\d+) / 5')
  $cost = [regex]::Match($r, 'Cost efficiency: (\d+)').Groups[1].Value
  $bytes = (Get-Item -LiteralPath $p).Length
  $ok = if ([int]$printed -eq [math]::Floor($m + 0.5)) { 'OK' } else { 'MISMATCH' }
  Write-Output ("{0} bytes={1} dims={2} sum={3} mean={4} halfup={5} printed={6} cost={7} {8}" -f $n, $bytes, ($d -join '+'), $s, $m, [math]::Floor($m + 0.5), $printed, $cost, $ok)
}
