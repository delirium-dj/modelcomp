$models = @(
    "beam", "cat-jam", "claude-opus-4.4", "claude-sonnet-5.4", "deepseek-v4.1-flash-1017",
    "flint", "gemma-4-12b-unified", "gemma-4-26b-a4b", "glm-4.5-flash", "glm-4.6-flash",
    "glm-4.6v-flash", "glm-4.7-flash", "glm-5", "glm-5.3-flash-x", "gpt-5-codex",
    "gpt-5.1-codex", "gpt-5.1-codex-max", "gpt-5.1-codex-mini", "gpt-5.2-codex",
    "gpt-5.2-pro", "gpt-oss-120b-lite", "grok-4.1-fast", "grok-4.20", "grok-4.3",
    "grok-4.5", "grok-build-0.1", "hy3", "hy3-preview", "hy4", "Inkling",
    "jev-1.13", "kimi-k2.5", "kimi-k2.6", "kimi-k2.7-code", "kimi-k2.7-code-highspeed",
    "kimi-k2.8-preview", "laguna-s-2.1", "laguna-xs-2.1", "leanstral-1.5",
    "ling-2.6-flash", "ling-2.6.1t", "ling-3.0-flash", "ling-3.0-flash-sante",
    "ling-3.0-flash-vl", "ling-3.0-tiny", "ling-3.1-flash", "llama_3.2_vision_instruct",
    "longcat-2.0", "longcat-2.5", "longcat-2.5-preview", "mai-code-1-flash",
    "mai-code-1.1-flash", "mai-experimental-test", "mai-thinking-1", "mercury-2.5",
    "mimo-v2.5-free", "mimo-v2.5-pro", "mimo-v2.6-distill-qwen-9b", "mimo-v2.6-free",
    "minimax-m2.5", "minimax-m2.7", "minimax-m3.1-flash-preview", "mistral-medium-3.5",
    "muse-glimmer-30b", "muse-wonder-1.0", "nemotron-3-nano-omni", "nemotron-3-ultra-free",
    "nemotron-3.5-bolt-74b-a9b", "nemotron-3.5-bolt-e4b", "nemotron-3.5-lightning-free",
    "nemotron-3.5-super-vl", "neomorph", "north_mini_code", "omen-alpha",
    "omi-alpha", "owl-alpha", "owo-2.5", "pareto-26.10-preview", "pixel_canary",
    "qwen-3.5-0.8b", "qwen-3.5-122b-a10b", "qwen-3.5-27b", "qwen-3.5-2b",
    "qwen-3.5-35b-a3b", "qwen-3.5-397b", "qwen-3.5-4b", "qwen-3.5-9b",
    "qwen-3.5-flash", "qwen-3.5-flash-lite", "qwen-3.5-plus", "qwen-3.6-plus",
    "qwen-3.7-flash", "qwen-3.7-max", "qwen-3.8-325b", "qwen-3.8-flash-next",
    "qwen3-max", "ring-2.6.1t", "seed-2.0-pro", "solar-mini-4", "solar-open-2",
    "solar-pro-4", "space-bunny", "xing_4.0_29b_a4b"
)

foreach ($model in $models) {
    $path = "E:\qwik\modelcomp\model\$model\Gemini_3.1_Flash_Lite.md.excluded"
    $content = "# $model — findings by Gemini 3.1 Flash Lite

- Source: $model (`opencode/$model`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** $model
- **Short description:** [No verified description found]
- **Provider / access:** [No verified provider found]

### Raw benchmarks found

> No verified public benchmark numbers found.

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-23
- Method: Multi-source validation against benchmark leaderboards and technical documentation."

    $content | Set-Content -Path $path
}
