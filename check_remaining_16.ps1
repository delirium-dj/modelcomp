$missing = @('exo-free','fledge-alpha','gpt-5-nano','gpt-oss-120b-lite','hy3','hy3-preview','mai-code-1-flash','mai-experimental-test','mai-thinking-1','nemotron-3-nano-omni','nemotron-3-ultra-free','owl-alpha','solar-mini-4','solar-open-2','solar-pro-4','union-alpha')
$aliases = Get-Content model-aliases.generated.md | Select-String '`' | ForEach-Object {
    $line = $_.Line
    # extract the slug inside backticks at start of alias line
    if ($line -match '- `([a-z0-9-]+)`') { $matches[1] }
}
Write-Output "Aliases found: $($aliases -join ', ')"
Write-Output "---"
foreach ($slug in $missing) {
    $folderExists = Test-Path "model/$slug"
    $avgExists = Test-Path "model/$slug/average.md"
    $isAlias = $aliases -contains $slug
    $label = if ($isAlias) { "ALIAS-SKIP" } elseif (-not $folderExists) { "NO-FOLDER" } else { "REAL" }
    Write-Output "$slug | folder=$folderExists | avg=$avgExists | label=$label"
}
