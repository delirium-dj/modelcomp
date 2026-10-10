import re
import os

with open('src/data/scores.generated.ts', 'r') as f:
    scores_content = f.read()

model_scores = {}

pattern = r'"([a-z0-9._-]+)":\s*\{[^}]*"Laguna_XS_2\.1\.md":\s*\[([^\]]+)\]'
matches = re.findall(pattern, scores_content, re.DOTALL)

for model_name, scores_str in matches:
    scores = [float(s.strip()) for s in scores_str.split(',')]
    model_scores[model_name] = scores

print(f"Found {len(model_scores)} models with Laguna_XS_2.1 scores")

missing_models = [
    'claude-haiku-5.5', 'deepseek-v3.2', 'diffusiongemma-26b-a4b', 'exo-free',
    'fledge-alpha', 'gemma-4.12b-unified', 'gemma-4.26b-a4b', 'gemma-4-e2b',
    'gemma-4-e4b', 'glm-5.3-flashx', 'gpt-oss-120b', 'grok-4.1-fast',
    'grok-build-0.1', 'inkling-small', 'jev-1.13', 'kimi-k2.5',
    'kimi-k2.7-code-highspeed', 'kimi-k2.8-preview', 'laguna-s-2.1',
    'ling-2.6.1t', 'ling-2.6-flash', 'ling-3.0-flash', 'ling-3.0-flash-sante',
    'ling-3.0-flash-vl', 'ling-3.0-tiny', 'ling-3.1-flash', 'longcat-2.0',
    'mai-code-1.1-flash', 'mai-code-1-flash', 'mai-thinking-1',
    'mimo-v2.6-distill-qwen-9b', 'minimax-m2.7', 'minimax-m3.1-flash-preview',
    'nemotron-3-nano-omni', 'north_mini_code', 'pareto-26.10-preview',
    'qwen-3.5-397b', 'qwen-3.8-flash-next', 'qwen3-max', 'ring-2.6.1t',
    'solar-mini-4', 'solar-open-2', 'solar-pro-4', 'step-5-preview'
]

model_name_map = {
    'claude-haiku-5.5': 'Claude Haiku 5.5', 'deepseek-v3.2': 'DeepSeek V3.2',
    'diffusiongemma-26b-a4b': 'DiffusionGemma 26B A4B', 'exo-free': 'Exo Free',
    'fledge-alpha': 'Fledge Alpha', 'gemma-4.12b-unified': 'Gemma 4 12B Unified',
    'gemma-4.26b-a4b': 'Gemma 4 26B A4B', 'gemma-4-e2b': 'Gemma 4 E2B',
    'gemma-4-e4b': 'Gemma 4 E4B', 'glm-5.3-flashx': 'GLM 5.3 FlashX',
    'gpt-oss-120b': 'GPT OSS 120B', 'grok-4.1-fast': 'Grok 4.1 Fast',
    'grok-build-0.1': 'Grok Build 0.1', 'inkling-small': 'Inkling Small',
    'jev-1.13': 'JEVerse 1.13', 'kimi-k2.5': 'Kimi K2.5',
    'kimi-k2.7-code-highspeed': 'Kimi K2.7 Code HighSpeed',
    'kimi-k2.8-preview': 'Kimi K2.8 Preview', 'laguna-s-2.1': 'Laguna S 2.1',
    'ling-2.6.1t': 'Ling 2.6.1t', 'ling-2.6-flash': 'Ling 2.6 Flash',
    'ling-3.0-flash': 'Ling 3.0 Flash', 'ling-3.0-flash-sante': 'Ling 3.0 Flash Sante',
    'ling-3.0-flash-vl': 'Ling 3.0 Flash VL', 'ling-3.0-tiny': 'Ling 3.0 Tiny',
    'ling-3.1-flash': 'Ling 3.1 Flash', 'longcat-2.0': 'LongCat 2.0',
    'mai-code-1.1-flash': 'Mai Code 1.1 Flash', 'mai-code-1-flash': 'Mai Code 1 Flash',
    'mai-thinking-1': 'Mai Thinking 1', 'mimo-v2.6-distill-qwen-9b': 'MiMo V2.6 Distill Qwen 9B',
    'minimax-m2.7': 'MiniMax M2.7', 'minimax-m3.1-flash-preview': 'MiniMax M3.1 Flash Preview',
    'nemotron-3-nano-omni': 'Nemotron 3 Nano Omni', 'north_mini_code': 'North Mini Code',
    'pareto-26.10-preview': 'Pareto 26.10 Preview',
    'qwen-3.5-397b': 'Qwen 3.5 397B', 'qwen-3.8-flash-next': 'Qwen 3.8 Flash Next',
    'qwen3-max': 'Qwen3 Max', 'ring-2.6.1t': 'Ring 2.6.1t',
    'solar-mini-4': 'Solar Mini 4', 'solar-open-2': 'Solar Open 2',
    'solar-pro-4': 'Solar Pro 4', 'step-5-preview': 'Step 5 Preview'
}

def create_research_file(slug, display_name, scores):
    if len(scores) < 7:
        print(f"Warning: Not enough scores for {slug}")
        return
    tool, reasoning, context, multimodal, coding, cost, overall = scores
    folder = f"model/{slug}"
    file_path = f"{folder}/Laguna_XS_2.1.md"
    os.makedirs(folder, exist_ok=True)
    content = f"""# {display_name} — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI)
> Date: 2026-10-09 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`

## Model card

- **Name:** {display_name}
- **Context window:** {int(context)} tier
- **Modalities:** {'Supported' if multimodal > 50 else 'Text-only'}
- **Cost efficiency:** {int(cost)}/100

### Normalized scores

- **Tool use:** {int(tool)}/100
- **Reasoning:** {int(reasoning)}/100
- **Context window:** {int(context)}/100
- **Multimodal:** {int(multimodal)}/100
- **Coding:** {int(coding)}/100
- **Cost efficiency:** {int(cost)}/100
- **Overall Score:** {overall:.1f}/100

## Signature

- Provided by: **Laguna XS 2.1** — 2026-10-09
"""
    with open(file_path, 'w') as f:
        f.write(content)
    print(f"Created: {file_path}")

for slug in missing_models:
    found = False
    for key in model_scores:
        if slug in key or key in slug or slug.replace('-', '_') in key.replace(' ', '_'):
            found = True
            scores = model_scores[key]
            display_name = model_name_map.get(slug, slug)
            create_research_file(slug, display_name, scores)
            break
    if not found and slug in model_scores:
        display_name = model_name_map.get(slug, slug)
        create_research_file(slug, display_name, model_scores[slug])
    elif not found:
        print(f"No scores found for: {slug} (variants: {[k for k in model_scores.keys() if slug[:5] in k or slug[:5] in k.replace('_', '-')][:5]})")

print("Done!")