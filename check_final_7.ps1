$remaining = @('mai-code-1-flash','mai-experimental-test','mai-thinking-1','owl-alpha','solar-mini-4','solar-open-2','solar-pro-4')
foreach ($s in $remaining) {
    $md = Test-Path "model/$s/Inkling.md"
    $exc = Test-Path "model/$s/Inkling.md.excluded"
    Write-Output "$s | md=$md | exc=$exc"
}
