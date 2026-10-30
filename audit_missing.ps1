$queue = Get-Content model-queue.md | Select-String '^\d+\.\d+ [a-z0-9-]+$' | ForEach-Object { ($_ -split ' ')[1] }
$existing = Get-ChildItem model -Directory | ForEach-Object { $slug = $_.Name; $path = "model/$slug/Inkling.md"; if (Test-Path $path) { $slug } }
$missing = $queue | Where-Object { $existing -notcontains $_ } | Sort-Object
Write-Output "Total queued slugs: $($queue.Count)"
Write-Output "Folders with Inkling.md: $($existing.Count)"
Write-Output "Missing count: $($missing.Count)"
Write-Output "First 20 missing (top of queue):"
$missing | Select-Object -First 20 | ForEach-Object { Write-Output "  $_" }
