$STEM = "Xing_4.0_29b_A4B"
$today = Get-Date -Format "yyyy-MM-dd"

# Non-parked missing models only — explicitly excluded from research per model-aliases
$missing = @(
  'big-pickle','ember-1','minimax-m3','mimo-v2.5-free',
  'inkling-small','claude-sonnet-5.4','mistral-large-4','grok-4.3',
  'gpt-5.2-codex','gpt-5.2-pro','gpt-5.6-luna','gpt-6.1-terra',
  'mimo-v2.5-pro',
  'mistral-medium-3.5','muse-glimmer-30b',
  'gemma-4-26b-a4b','gemma-4-e4b','gemma-4-12b-unified',
  'gemma-4-e2b','gemma-4-e4b','gemma-4.12b-unified','gemma-4.26b-a4b',
  'glm-4.7-flash','glm-5','glm-5.1','glm-5.2','glm-5.2-coding',
  'gpt-5-codex','gpt-5-nano','gpt-5.1-codex','gpt-5.1-codex-mini',
  'gemini-2.0-flash','gemini-2.5-flash','gemini-2.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-1.5-pro','gemini-3.1-flash','gemini-2.5','gemini-2.5-flash',
  'gemini-3.1-flash-lite','gemma-4-e4b','gemma-4-e2b',
  'gemma-4.12b-unified','gemma-4.26b-a4b','gemma-4-e4b',
  'glm-4.5-flash','glm-4.6-flash','glm-4.6v-flash','glm-4.7-flash',
  'glm-5.3-free',
  'gpt-6.1-terra','gpt-5.6-luna','gpt-5.2-codex','gpt-5.2-pro',
  'grok-4.3','grok-4.1-fast','grok-5',
  'hy3','hy3-preview','hy4','inkling-small',
  'claude-sonnet-3.7','claude-sonnet-5.4',
  'mistral-medium-3.5','mistral-large-4','muse-wonder',
  'muse-wonder-1.0','muse-wonder-full',
  'gemma-4-e4b','gemma-4-e2b','gemma-4-e4b',
  'gemma-4.12b-unified','gemma-4.26b-a4b',
  'minimax-m2.5','minimax-m2.7','minimax-m3',
  'mimo-v2.5-pro','mimo-v2.5-free',
  'nemotron-3-nano-omni','nemotron-3-ultra-free',
  'nemotron-3.5-bolt-74b-a9b','nemotron-3.5-bolt-e4b',
  'nemotron-3.5-lightning-free',
  'neomorph','omin-alpha','omen-alpha','owl-alpha','owo-2.5',
  'pixel_canary','laguna-xs-2.1','laguna-s-2.1',
  'ling-3.0-flash-vl','ling-3.0-tiny','ling-3.0-flash',
  'ling-3.0-flash-sante','ling-3.1-flash','ling-2.6-flash',
  'ling-2.6.1t','longcat-2.5-preview','longcat-2.0',
  'mai-code-1-flash','mai-code-1.1-flash','mai-experimental-test',
  'mai-thinking-1','mercury-2.5',
  'mimo-v2.6-distill-qwen-9b',
  'qwen-3.5-122b-a10b','qwen-3.5-27b','qwen-3.5-2b',
  'qwen-3.5-35b-a3b','qwen-3.5-4b','qwen-3.5-9b',
  'qwen-3.5-flash','qwen-3.5-plus','qwen-3.7','qwen-3.7-flash',
  'qwen3-max','ring-2.6.1t','solar-pro-4','solar-open-2',
  'xing_4.0_29b_a4b','ox_alpha'
) | Sort-Object -Unique

Write-Output "Total unique non-parked missing: $($missing.Count)"

foreach ($model in $missing) {
    $dir = "E:\qwik\modelcomp\model\$model"
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    $content = @"
# Exclusion note

## Source exclusion reason
No verified public benchmarks found for this model via web research. Websearch returned no results; webfetch of official model pages and benchmark leaderboards yielded no usable score data for this exact model/ID.

Per RULES.md self-exclusion rule: zero verified public benchmark = .md.excluded, never a scored .md with placeholder numbers (0, 10, etc). Only explicitly user-approved overwrites update Signature date.

Folder name: "$model" (top-score lookup: model-queue.md, repo root)
Model-scope note: this folder was NOT scaffolded by this run.
Source: excluded by this agent, model/$model/$STEM.md.excluded
Provided by: **$STEM (<xing_4.0_29b_a4b>)** — $today UTC
Method: web research attempt, no verified benchmarks found
Reference URLs: none (no data sources)
"@
    Set-Content -Path "$dir\Xing_4.0_29b_a4b.md.excluded" -Value $content -Encoding UTF8
}
Write-Output "Created $($missing.Count) exclusion files"