$files = @('qwen-3.5-0.8b','qwen-3.5-2b','qwen-3.5-4b','qwen-3.5-flash-lite','qwen-3.7-flash')
foreach ($f in $files) {
  $path = "model/$f/Big_Pickle.md"
  $content = Get-Content $path
  $newContent = @()
  foreach ($line in $content) {
    if ($line -match '^-\s+\*\*.+:\*\*\s+[\d\.]+/100$') {
      $newContent += $line + '.'
    } else {
      $newContent += $line
    }
  }
  $newContent | Set-Content $path
}
Write-Host "done"