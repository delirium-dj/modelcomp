# Union Alpha (Pareto 26.9) — findings by Nemotron 3.5 Super VL 120B A12B

- Source: union-alpha.com (official), kingy.ai (independent review), OpenRouter
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (revealed as Pareto 26.9; stealth preview ended September 2026)
- **Short description:** Circuit & Chisel's multi-model AI service (Pareto 26.9), offered through Unbiased; combines GPT-6 Astra, DeepSeek, and GLM into one answer; not a new foundation model; hosted API-only service.
- **Provider / access:** OpenRouter (`unbiased/pareto`, `unbiased/pareto-latest`), Cloudflare AI Gateway, Unbiased platform; OpenAI-compatible API. Hosted service only — no downloadable weights. No Free ID on Zen (free stealth preview ended).
- **Release / knowledge:** Stealth preview September 16, 2026; official reveal September 18, 2026; Pareto Latest (26.10) released October 13, 2026.
- **IDs:** `unbiased/pareto` (OpenRouter), `unbiased/pareto-latest` (OpenRouter, now Pareto 26.10). Parameter count not disclosed.
- **Context window:** 262,144 tokens (262K) per union-alpha.com and kingy.ai; OpenRouter Pareto Latest routes to models with up to 1,048,576 tokens.
- **Max output:** 131,072 tokens (131K) per union-alpha.com.
- **Modalities:** Text and image input; text output; tool calling supported (tools, tool_choice); response_format supported; JSON-schema enforcement not listed; no reasoning_effort control.
- **Pricing (as of 2026-10-17):** $2.50 input / $7.50 output per 1M tokens; cached input $0.25/1M (union-alpha.com). Free stealth preview ended.
- **Architecture:** Multi-model orchestration service — combines GPT-6 Astra, DeepSeek, and GLM; not a single foundation model; no new training run involved; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **51** (official Pareto 26.9 model card); DeepSeek 4.1 Flash scored 31, Claude Fable 5.1 scored 56, GPT-6 Astra scored 58
- AI BENCHY: **8.9/10**, rank #34/330, 18/22 tests fully passed (independent test of paid endpoint, Sept 18, 2026)

Reasoning / knowledge:
- GPQA Diamond: **90.9%** (Union Alpha preview, AutoExacto, Sept 17, 2026)
- HLE without tools: **49** (official Pareto 26.9 model card); GPT-6 Astra scored 54
- LiveBench: **76.1** (Union Alpha preview snapshot, Sept 17, 2026); #26/58 evaluated entries
  - Reasoning 80.8, Coding 82.1, Agentic coding 54.7, Mathematics 95.3, Data analysis 74.6, Language 85.9, Instruction following 59.5
- ARI Bench: **32/100** (Union Alpha preview, 1/3 seeds); #2/36 ranked entries
- ArXivMath: **88** (official Pareto 26.9 model card); GPT-6 Astra scored 91

Coding:
- DeepSWE: **74** (official Pareto 26.9 model card); ties GPT-6 Astra (74)
- AI BENCHY coding tests: 3/3 passed (independent)

Long context:
- 262K context window declared; no public needle-recall score at full window.

Multimodal:
- MMMU-Pro: **78** (official Pareto 26.9 model card); GPT-6 Astra scored 87
- Text + image input per union-alpha.com and kingy.ai; limited independent multimodal benchmark data.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Terminal-Bench 4.0 (51), AI BENCHY tool-calling (1/1 passed), DeepSWE (74). Capped by weaker agentic coding (54.7 on LiveBench) and limited tool-specific benchmark coverage.
- **Reasoning: 72/100.** Strong on GPQA Diamond (90.9%), LiveBench reasoning (80.8), LiveBench mathematics (95.3). Capped by HLE without tools (49) and ARI Bench (32/100).
- **Context window: 78/100.** Declared 262K context; below 1M frontier models. OpenRouter Pareto Latest routes up to 1M but that's a different model (26.10).
- **Multimodal: 60/100.** Text + image input; MMMU-Pro (78). Capped by limited independent multimodal benchmark coverage and text-only output.
- **Coding: 72/100.** LiveBench coding (82.1), DeepSWE (74), AI BENCHY coding (3/3 passed). Capped by agentic coding weakness (54.7).
- **Cost efficiency: 65/100.** $2.50/$7.50 per 1M — mid-range; not free anymore (stealth preview ended). Not counted toward Overall.
- **Overall Score: 70/100.** Half-up mean of (68 + 72 + 78 + 60 + 72) / 5 = 70.0 → 70. Best-fit recommendation: a multi-model orchestration service with strong reasoning benchmarks but limited independent verification; verify on your own tasks before production use given the stealth-to-paid transition and lack of published model card details.

### Conflicts vs existing meta.json / queued average

- meta.json for this folder needs to be checked separately.
- Union Alpha = Pareto 26.9 identity confirmed by official site (union-alpha.com).
- Official Pareto 26.9 scores (DeepSWE 74, Terminal-Bench 4.0 51, MMMU-Pro 78, HLE 49, ArXivMath 88) come from Unbiased model card — single-source, unverified independently.
- AI BENCHY independent test (8.9/10) provides some third-party validation but uses a private suite.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official union-alpha.com + kingy.ai independent review + OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.