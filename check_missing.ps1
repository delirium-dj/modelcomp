$slugs = Get-Content "model-queue.md" | Where-Object { $_ -match '^\d+\.' } | ForEach-Object { ($_ -split '\s+')[1] }
$missing = $slugs | Sort-Object | Where-Object { -not (Test-Path "model\$_\Laguna_XS_2.1.md") }
$missing