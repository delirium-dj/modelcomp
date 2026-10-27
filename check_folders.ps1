$queue = @(
    'glm-5.3-flash','gpt-5.4-pro','gemini-3.5-flash','gpt-5.6-terra','claude-opus-4.6','gemini-3.6-flash','muse-wonder-1.0','deepseek-v4.1-flash','qwen-3.8','claude-sonnet-5','mimo-v2.6-flash','muse-spark-1.1','gpt-6-sol','gemini-3-flash','gemini-3.8-flash-cyber','glm-5.3-flashx','qwen-3.8-flash','claude-sonnet-5.4','minimax-m3','claude-sonnet-4.6','gpt-5.4','grok-4.6','ember-1','mimo-v2.6-free','step-5-preview','gemini-2.5-pro','gpt-5.2','qwen-3.7-plus','inkling-small','qwen-3.8-27b','qwen-3.6-plus','grok-4.7','kimi-k2.6','muse-wonder-full','Inkling','deepseek-v4-vision-exp','grok-4.5','gpt-5.3-codex','qwen-3.8-flash-next','qwen-3.5-plus','seed-2.0-pro','deepseek-v4-pro','gpt-5.6-luna','mistral-large-4','grok-4.3','gpt-5.1','pareto-26.10-preview','gpt-5','qwen-3.5-397b','qwen-3.7','gpt-6-luna','claude-haiku-5.5','deepseek-v4.1-flash-1017','qwen-3.7-max','kimi-k2.5','claude-opus-4.5','nemotron-3.5-super-vl','gemini-3.5-flash-lite','kimi-k2.7-code','mimo-v2.5-free','glm-5.3-flash-x','claude-sonnet-4.5','grok-4.1-fast','grok-4','gpt-5.2-codex','gemma-4-31b','grok-4-fast','gpt-5.2-pro','grok-4.20','kimi-k2.8-preview','qwen-3.5-122b-a10b','gpt-5.4-mini','glm-5.3','grok-4.1','qwen-3.5-27b','union-alpha','gemini-2.5-flash','claude-sonnet-4','minimax-m3.1-flash-preview','gemini-3.1-flash-lite','claude-sonnet-3.7','qwen-3.5-35b-a3b','gemini-1.5-pro','glm-5.2-coding','gpt-5.1-codex','muse-glimmer-30b'
)
$missing = 0
foreach ($f in $queue) {
    $path = "model\$f\Laguna_S_2.1.md"
    if (Test-Path $path) {
        # has file, skip
    } else {
        Write-Host "MISSING: $f"
        $missing++
    }
}
Write-Host "`nTotal MISSING: $missing"