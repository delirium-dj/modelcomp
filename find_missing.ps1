$lines = Get-Content model-queue.md | Select-String '^\d+\.\d+ [a-z0-9-]+$'
$count = 0
$result = @()
foreach ($l in $lines) {
    $slug = ($l.ToString() -split ' ')[1]
    $path = "model/$slug/Inkling.md"
    $exists = if (Test-Path $path) { 'YES' } else { 'NO' }
    $result += [PSCustomObject]@{Slug=$slug; Line=$l.ToString(); Exists=$exists}
    if ($exists -eq 'NO') { $count++ }
}
Write-Output "First 5 MISSING from top of queue:"
$result | Where-Object { $_.Exists -eq 'NO' } | Select-Object -First 5 | Format-Table -AutoSize
