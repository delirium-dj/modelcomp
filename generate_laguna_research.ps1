$missingModels = @(
    "claude-haiku-5.5",
    "deepseek-v3.2",
    "diffusiongemma-26b-a4b",
    "exo-free",
    "fledge-alpha",
    "gemma-4-e2b",
    "gemma-4-e4b",
    "gpt-5-nano",
    "gpt-5.3-codex-spark",
    "gpt-oss-120b",
    "grok-build-0.1",
    "hy3-preview",
    "jev-1.13",
    "laguna-s-2.1",
    "ling-2.6-flash",
    "ling-2.6.1t",
    "ling-3.0-flash",
    "ling-3.0-flash-sante",
    "ling-3.0-tiny",
    "ling-3.1-flash",
    "llama_3.2_vision_instruct",
    "mai-code-1-flash",
    "mai-code-1.1-flash",
    "mai-thinking-1",
    "mimo-v2.6-distill-qwen-9b",
    "minimax-m2.7",
    "minimax-m3.1-flash-preview",
    "nemotron-3-nano-omni",
    "north_mini_code",
    "omen-alpha",
    "pixel_canary",
    "qwen3-max",
    "ring-2.6.1t",
    "solar-mini-4",
    "solar-open-2",
    "solar-pro-4"
)

foreach ($slug in $missingModels) {
    $folder = "model\$slug"
    $file = "$folder\Laguna_XS_2.1.md"
    
    if (-not (Test-Path $folder)) {
        Write-Host "Creating folder: $folder"
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }
    
    Write-Host "Creating file: $file"
}

Write-Host "Done preparing to create Laguna_XS_2.1.md files for missing models"