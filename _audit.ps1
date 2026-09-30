Set-Location 'e:\qwik\modelcomp'
$me = 'DeepSeek_4.1_Flash'
$rows = @()
foreach ($r in 'model', 'models_voice') {
    Get-ChildItem $r -Directory | Sort-Object Name | ForEach-Object {
        $e = Get-ChildItem $_.FullName -File -Filter 'DeepSeek_4.1_Flash*' | Select-Object -First 1
        if (-not $e) {
            $rows += [pscustomobject]@{ Root = $r; Dir = $_.Name; File = 'NO_FILE'; Agent = '-'; Mine = $false; Ver = '-'; Hdg = '-' }
        }
        else {
            $t = Get-Content $e.FullName -Raw
            $al = ($t -split "`n") | Where-Object { $_ -match 'Agent' -and $_.Contains(':') } | Select-Object -First 1
            $ag = '?'
            if ($al) {
                $mm = [regex]::Matches($al, '\*\*(.+?)\*\*')
                if ($mm.Count -ge 2) { $ag = $mm[$mm.Count - 1].Groups[1].Value.Trim() }
                elseif ($mm.Count -eq 1) { $ag = $mm[0].Groups[1].Value.Trim() }
                else { $ag = $al.Substring($al.IndexOf(':') + 1).Trim() }
            }
            $hdg = 0
            foreach ($h in '## Model Name', '## Model ID', '## Category', '## Overall Score') {
                if ($t.Contains($h)) { $hdg += 1 }
            }
            $rows += [pscustomobject]@{
                Root  = $r
                Dir   = $_.Name
                File  = $e.Name
                Agent = $ag
                Mine  = ($ag -like ('*' + $me + '*'))
                Ver   = $(if ($t.Contains('Research Verification')) { 'VER' } else { '-' })
                Hdg   = $hdg
            }
        }
    }
}
$rows | Export-Csv 'e:\qwik\modelcomp\_audit.csv' -NoTypeInformation -Encoding UTF8

$withFile = @($rows | Where-Object { $_.File -ne 'NO_FILE' })
$mine = @($rows | Where-Object { $_.Mine })
Write-Output ('TOTAL DIRS           = ' + $rows.Count)
Write-Output ('  dirs WITH a file   = ' + $withFile.Count)
Write-Output ('  dirs WITHOUT file  = ' + ($rows.Count - $withFile.Count))
Write-Output ('  MY files           = ' + $mine.Count)
Write-Output ('  other-agent files  = ' + (@($withFile | Where-Object { -not $_.Mine }).Count))

Write-Output ''
Write-Output '=== dirs with NO DeepSeek_4.1_Flash file (any agent) ==='
$rows | Where-Object { $_.File -eq 'NO_FILE' } | ForEach-Object { '  {0,-13} {1}' -f $_.Root, $_.Dir }

Write-Output ''
Write-Output '=== MY files: verification status ==='
$mine | ForEach-Object { '  {0,-13} {1,-32} {2,-27} {3,-4} hdg={4}' -f $_.Root, $_.Dir, $_.File, $_.Ver, $_.Hdg }

Write-Output ''
Write-Output '=== MY files that are NOT verified or have wrong heading count ==='
$bad = @($mine | Where-Object { $_.Ver -ne 'VER' -or $_.Hdg -ne 4 })
if ($bad.Count -eq 0) { Write-Output '  (none - all clean)' } else { $bad | Format-Table Dir, File, Ver, Hdg -AutoSize | Out-String -Width 110 }

Write-Output ''
Write-Output '=== files renamed .excluded (who owns them) ==='
$rows | Where-Object { $_.File -like '*.excluded' } | ForEach-Object { '  {0,-13} {1,-32} agent={2}' -f $_.Root, $_.Dir, $_.Agent }

Write-Output ''
Write-Output '=== ownership breakdown by agent ==='
$withFile | Group-Object Agent | Sort-Object Count -Descending | ForEach-Object { '  {0,-30} {1}' -f $_.Name, $_.Count }

Write-Output ''
Write-Output '=== dirs whose report MENTIONS DeepSeek_4.1_Flash anywhere ==='
$mentions = @()
foreach ($r in 'model', 'models_voice') {
    Get-ChildItem $r -Directory | Sort-Object Name | ForEach-Object {
        $hits = Get-ChildItem $_.FullName -File -Filter '*.md*' | Where-Object { (Get-Content $_.FullName -Raw).Contains('DeepSeek_4.1_Flash') }
        if ($hits) { $mentions += ('  {0,-13} {1,-32} {2}' -f $r, $_.Name, (($hits | ForEach-Object { $_.Name }) -join ',')) }
    }
}
$mentions | ForEach-Object { $_ }
Write-Output ('  mention count = ' + $mentions.Count)

Write-Output ''
Write-Output '=== probe: paths I edited this session still exist on disk? ==='
$paths = @(
    'model\gpt-5\DeepSeek_4.1_Flash.md',
    'model\pixel_canary\DeepSeek_4.1_Flash.md',
    'model\google-gemini-2.5-flash-lite\DeepSeek_4.1_Flash.md',
    'model\gemini-2.5-flash-lite\DeepSeek_4.1_Flash.md',
    'model\gemini-2.0-flash\DeepSeek_4.1_Flash.md',
    'model\omen-alpha\DeepSeek_4.1_Flash.md',
    'model\claude-opus-4.5\DeepSeek_4.1_Flash.md',
    'model\claude-sonnet-4\DeepSeek_4.1_Flash.md',
    'model\grok-4-fast\DeepSeek_4.1_Flash.md',
    'model\grok-4.1\DeepSeek_4.1_Flash.md',
    'model\grok-4\DeepSeek_4.1_Flash.md',
    'model\longcat_2.5_preview\DeepSeek_4.1_Flash.md.excluded',
    'models_voice\gemini-3.8-live\DeepSeek_4.1_Flash.md',
    'models_voice\gpt-live-1-astra\DeepSeek_4.1_Flash.md',
    'models_voice\gpt-realtime-2\DeepSeek_4.1_Flash.md',
    'models_voice\grok-voice-think-fast-2.0\DeepSeek_4.1_Flash.md'
)
foreach ($p in $paths) {
    $full = Join-Path 'e:\qwik\modelcomp' $p
    if (Test-Path $full) {
        $t = Get-Content $full -Raw
        $who = if ($t.Contains('DeepSeek_4.1_Flash')) { 'MINE' } else { 'other' }
        '  OK   {0,-52} {1}' -f $p, $who
    }
    else { '  MISS {0}' -f $p }
}

