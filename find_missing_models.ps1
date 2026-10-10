Get-Content model-queue.md | Where-Object { $_ -match '^\d+\.' } | ForEach-Object { ($_ -split '\s+')[1] } | Sort-Object | Get-Unique > all_models_in_queue.txt

$missingModels = @()
Get-Content all_models_in_queue.txt | ForEach-Object {
    $slug = $_
    if (-not (Test-Path "model\$slug\Laguna_XS_2.1.md")) {
        $missingModels += $slug
    }
}

Write-Host "Models missing Laguna_XS_2.1.md:" -ForegroundColor Yellow
$missingModels | Write-Host

Write-Host "`nTotal count: $($missingModels.Count)" -ForegroundColor Cyan