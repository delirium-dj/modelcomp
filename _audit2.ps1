Set-Location 'e:\qwik\modelcomp'
$root = 'e:\qwik\modelcomp'
$mine = @(); $other = @(); $nofile = @()
foreach ($r in 'model', 'models_voice') {
    Get-ChildItem (Join-Path $root $r) -Directory | Sort-Object Name | ForEach-Object {
        $rel = $r + '/' + $_.Name
        $e = Get-ChildItem $_.FullName -File -Filter 'DeepSeek_4.1_Flash.md*' | Select-Object -First 1
        if (-not $e) { $nofile += $rel; return }
        $t = Get-Content $e.FullName -Raw
        $title = ($t -split "`n" | Select-Object -First 1).Trim()
        $byMe = $title.Contains('findings by DeepSeek 4.1 Flash')
        $hdg = 0
        foreach ($h in '## Model Name', '## Model ID', '## Category', '## Overall Score') { if ($t.Contains($h)) { $hdg += 1 } }
        $dims = @()
        foreach ($k in 'Tool use', 'Reasoning', 'Context window', 'Multimodal', 'Coding') {
            if ($t -match ('\*\*' + $k + ':\s*([0-9][0-9.]*)/100')) { $dims += [double]$Matches[1] } else { $dims += -1 }
        }
        $ov = -1; if ($t -match '\*\*Overall Score:\s*([0-9][0-9.]*)/100') { $ov = [double]$Matches[1] }
        $mean = 'n/a'; $chk = 'excluded/unscored'
        if ($dims[0] -ge 0 -and $dims[4] -ge 0 -and $ov -ge 0) {
            $mean = [math]::Round((($dims | Measure-Object -Sum).Sum) / 5, 2)
            $chk = $(if ([math]::Abs($mean - $ov) -le 0.5) { 'OK' } else { 'MISMATCH' })
        }
        $mine += [pscustomobject]@{
            Rel = $rel; Name = $e.Name; Title = $byMe; Ver = $t.Contains('Research Verification')
            Hdg = $hdg; Dims = ($dims -join '/'); Ov = $ov; Mean = $mean; Math = $chk
            Excl = $t.Contains('[EXCLUDED'); Legacy6 = $t.Contains('/ 6 ='); Sixty = $t.Contains('voicemodels/')
        }
    }
}
Write-Output ('DIRS total = ' + ($mine.Count + $nofile.Count) + ' | with MY filename = ' + $mine.Count + ' | NO DeepSeek_4.1_Flash file = ' + $nofile.Count)
Write-Output ''
Write-Output '=== MY FILE INVENTORY ==='
$mine | ForEach-Object { '  {0,-46} {1,-27} title={2,-5} ver={3,-5} hdg={4} {5,-14} ov={6,-6} mean={7}' -f $_.Rel, $_.Name, $_.Title, $_.Ver, $_.Hdg, $_.Math, $_.Ov, $_.Mean }
Write-Output ''
Write-Output '=== PROBLEMS ==='
$p = @($mine | Where-Object { -not $_.Title -or -not $_.Ver -or $_.Hdg -ne 4 -or $_.Math -eq 'MISMATCH' -or $_.Legacy6 -or $_.Sixty })
if ($p.Count -eq 0) { Write-Output '  (none)' } else {
    $p | ForEach-Object { '  {0}  titleOK={1} ver={2} hdg={3} math={4} legacy6={5} staleVoicePath={6}' -f $_.Rel, $_.Title, $_.Ver, $_.Hdg, $_.Math, $_.Legacy6, $_.Sixty }
}
Write-Output ''
Write-Output '=== dirs with NO DeepSeek_4.1_Flash report at all (coverage gaps) ==='
$nofile | ForEach-Object { '  ' + $_ }
