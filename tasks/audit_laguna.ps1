$base = "E:\qwik\modelcomp\model"
Get-ChildItem -Directory $base | ForEach-Object {
    $slug = $_.Name
    $hasFile = Test-Path "$base\$slug\Laguna_S_2.1.md"
    $hasExcluded = Test-Path "$base\$slug\Laguna_S_2.1.md.excluded"
    $avgPath = "$base\$slug\average.md"
    $overall = "NO_AVERAGE"
    if (Test-Path $avgPath) {
        $content = Get-Content $avgPath -Raw
        $match = Select-String -InputObject $content -Pattern 'Overall Score:\s*([\d.]+)/100' -AllMatches
        if ($match -and $match.Matches.Count -gt 0) {
            $overall = $match.Matches[0].Groups[1].Value
        }
    }
    "$slug`t$hasFile`t$hasExcluded`t$overall"
}
