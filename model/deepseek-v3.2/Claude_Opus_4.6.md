# DeepSeek V3.2 — findings by Claude Opus 4.6

- Source: DeepSeek / DeepSeek-V3.2
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's open-weight frontier MoE (late 2025). ~671B total params. IMO/CMO/IOI gold-medal math. Sparse Attention (DSA). Trained on 1,800+ agentic environments. Thinking-in-Tool-Use architecture. Speciale variant matches Gemini 3.0 Pro. Open weights.
- **Provider / access:** DeepSeek API, OpenRouter, DeepInfra, Fireworks, SiliconFlow. Open weights.
- **Release / knowledge:** Late 2025.
- **IDs:** `deepseek/deepseek-chat` (V3.2 backend), `deepseek/deepseek-reasoner`
- **Context window:** ~164,000 tokens (163,840).
- **Modalities:** Text in; text out; tool calls (thinking + non-thinking modes). Agentic synthesis pipeline.
- **Pricing (as of 2026-10-13):** ~$0.21 / $0.31 per 1M tokens (blended). Open weights for self-hosting.
- **Architecture:** ~671B total MoE parameters. DeepSeek Sparse Attention (DSA). RL-trained reasoning. Agent data synthesis from 1,800+ environments.

### Raw benchmarks found

- IMO 2025: **Gold medal** (source: deepseek.com, huggingface.co)
- CMO, IOI 2025: **Gold medal** (source: deepseek.com)
- Strong on MMLU-Pro, GPQA-Diamond, AIME, LiveCodeBench, Codeforces, SWE-bench Verified (source: github.com)
- Strong on BrowseComp, Terminal-bench, SimpleQA (source: github.com)
- V3.2-Speciale outperforms GPT-5 on specific reasoning criteria (source: infoq.com)

### Normalized scores (1–100)

- **Tool use: 84/100.** Thinking-in-Tool-Use architecture. Trained on 1,800+ agentic environments. Strong Terminal-bench, BrowseComp. Both thinking/non-thinking tool modes.
- **Reasoning: 90/100.** IMO/CMO/IOI gold medals. Strong GPQA-Diamond, AIME. Speciale matches Gemini 3.0 Pro. Among the best open-weight reasoners.
- **Context window: 68/100.** ~164K (ref: 128K=65, 200K=75 → 164K ≈ 68). Moderate by 2026 standards.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 86/100.** Strong LiveCodeBench, Codeforces, SWE-bench Verified. IOI gold medal. Comprehensive coding capabilities.
- **Cost efficiency: 96/100.** ~$0.21/$0.31 is exceptionally cheap for frontier performance. Open weights.
- **Overall Score: 69/100.** Mean of (84 + 90 + 68 + 15 + 86) / 5 = 68.6, rounded to 69. Brilliant open-weight reasoner with gold-medal math/coding; text-only modality severely limits overall score despite frontier-class reasoning.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (deepseek.com, github.com, infoq.com, openrouter.ai, huggingface.co, apxml.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
