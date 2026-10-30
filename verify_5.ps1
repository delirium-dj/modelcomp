$slugs = @('gpt-6-luna','gemma-4-31b','muse-glimmer-30b','gpt-5-codex','qwen3-max')
foreach ($slug in $slugs) {
    $md = Test-Path "model/$slug/Inkling.md"
    $exc = Test-Path "model/$slug/Inkling.md.excluded"
    $avg = Test-Path "model/$slug/average.md"
    Write-Output "$slug | Inkling.md=$md | .excluded=$exc | average.md=$avg"
}
