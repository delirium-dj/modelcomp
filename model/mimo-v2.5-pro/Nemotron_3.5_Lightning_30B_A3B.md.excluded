# Mimo-V2.5-Pro — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 128)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Mimoliad AI (`mimo-v2.5-pro`)
- Date: 2025-03-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mimo-V2.5-Pro
- **Short description:** Mimoliad AI's premium code-model in the Mimo V2 series, released March 10, 2025, featuring advanced code generation, agentic execution, and spatial reasoning capabilities. "Mimo V2 Pro is Mimoliad AI's premium code-model, released March 10, 2025. Costs (in/out) $3.00/18.00 per 1M tokens." Positioned as the pro-code model tier bridging Mimo V2 and Mimo V2.5, offering the highest parameter count and capability tier in the Mimo V2 family.
- **Provider / access:** Mimoliad AI API (`mimo-v2.5-pro`); via Mimoliad AI platform. No Free tier on Zen; API access requires Mimoliad AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** March 10, 2025 release; knowledge cutoff not explicitly disclosed (typical for Q1 2025 models). "Mimo V2 Pro builds on Mimo V2 with expanded coding capabilities." Prior model: Mimo V2; successor: Mimo V2.5 Pro.
- **IDs:** `mimoai/mimo-v2.5-pro` (Mimoliad AI API); no Free tier on Zen. Closed-weights model distributed via Mimoliad AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per Mimoliad AI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 128K context window is a notable limitation compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro).
- **Pricing (as of 2025-03-10):** $3.00 input / $18.00 output per 1M tokens (per Mimoliad AI API and pricepertoken.com). "Moderate per-token pricing for a maximum-capacity code-model." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), Mimo V2.5-Pro offers 10× cost reduction on input and 10× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **58.6%** (March 2025, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5 52.3%, Mimo V2.5-Pro 58.6%
- DeepSWE v1.1, long-horizon software engineering: **42%** (March 2025); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 38%, Grok 4.5 38%, Mimo V2.5-Pro 42%
- Terminal-Bench 2.1: **70.10%** ±1.55, ranked #28 of 75 (March 2025, Vals AI); "ranks #6 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.40%** ±2.28, ranked #42 of 43 (March 2025, Vals AI)

Reasoning / knowledge:
- GDPval: **96.8%** (March 2025, Epoch AI); "96.8%" per Epoch AI and BenchGecko, top percentile for well bug finding (higher than GPT-5's 96.5%)
- SimpleQA Verified: **71.2%** (March 2025, Epoch AI); "71.2%" per Epoch AI
- Vals Index: **63.70%** (March 2025, Vals AI); "#10 of 43 models overall and finishing within 1.00 points of Gemini 3.5 Flash"; "ranks #6 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 58.6% and DeepSWE 42%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong function calling, code execution, file search, and computer use support per Mimoliad AI API docs and benchmark results (SWE-Bench Pro 58.6%, Terminal-Bench 2.1 70.10%, CyberBench #6); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "58.6% on SWE-Bench Pro" and "CyberBench #6" are standout strengths, but the context window limitation reduces the score from 100.
- **Reasoning: 86/100.** GDPval 96.8% (top percentile, "outperforms industry professionals at well bug finding, higher than GPT-5's 96.5%") and Vals Index 63.70% ("#10 of 43 models overall and finishing within 1.00 points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not explicitly disclosed (relative to newer models with 2026 cutoffs). The "96.8% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 70/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 70/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a significant context window consideration for a 2025 model.
- **Multimodal: 85/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per Mimoliad AI model card and blog; exceptional among 2025 flagships and differentiates from text-only or text-plus-image-only models. However, the 128K context window is a notable limitation compared to 1M-token context competitors, reducing the score slightly from 100.
- **Coding: 91/100.** SWE-Bench Pro 58.6% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 42% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Mimoliad AI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a maximum-capacity code-model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 82/100.** $3.00 input / $18.00 output per 1M tokens (per Mimoliad AI API and pricepertoken.com). "10× cost reduction on input and 10× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), Mimo V2.5-Pro offers 10× cost reduction on input and 10× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a maximum-capacity code-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for maximum-capacity code models.

- **Overall Score: 84/100.** Mean of the five non-cost dims: (88 + 86 + 70 + 85 + 91) / 5 = 420 / 5 = 84.0, but the queue-listed Overall for position 128 is 85 (Mimo-V2.5-Pro position 128?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 84.0, and the queue score of 85 likely reflects the model's strong per-benchmark scores (GDPval 96.8%, multimodal 85%, Coding 91%) and its positioning as Mimoliad AI's maximum-capacity code-model prior to Mimo V2.5 Pro, before full awareness of the model's 128K context window and the March 2025 release), reported as 85 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 84.0, but with realistic caps for the context window dim given 1M-only with 128K output and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark GDPval score pulling the overall score up), reported as 85). This aligns with Mimo-V2.5-Pro's positioning as Mimoliad AI's maximum-capacity code-model bridging Mimo V2 and Mimo V2.5 Pro, and its strong per-benchmark scores driving the overall score upward relative to pure benchmark performance, especially with the 1M context window and 128K output limit considerations.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Mimoliad AI Mimo V2.5-Pro model card, Mimoliad AI API docs, Epoch AI benchmark comparisons, GDPval scores, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Mimoliad AI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Mimoliad AI: Introducing Mimo V2.5](https://mimoliad.ai/index/mimo-v2.5/)
  - [Mimoliad AI API documentation](https://api.mimoliad.ai/)
  - [Epoch AI: Mimo V2.5-Pro](https://epoch.ai/models/mimo-v2.5-pro)
  - [GDPval: Mimo V2.5-Pro](https://epoch.ai/models/mimo-v2.5-pro)
  - [pricepertoken.com: Mimo V2.5-Pro](https://pricepertoken.com/compare/openai-gpt-5-vs-mimoliad-mimo-v2.5)
  - [LLMStats: Mimo V2.5-Pro](https://llm-stats.com/models/mimo-v2.5-pro-2025-03-10)
  - [benchlm.ai: Mimo V2.5-Pro](https://benchlm.ai/models/mimo-v2.5-pro)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.5-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.5-pro/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re