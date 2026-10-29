$slugs = @('gpt-5-codex','qwen3-max','ling-3.0-flash','longcat-2.0','mimo-v2.5-free')
foreach ($slug in $slugs) {
    $folder = "model/$slug"
    $avg = Test-Path "$folder/average.md"
    $ink = Test-Path "$folder/Inkling.md"
    $inkExc = Test-Path "$folder/Inkling.md.excluded"
    Write-Output "$slug | avg=$avg | ink=$ink | inkExc=$inkExc"
}
