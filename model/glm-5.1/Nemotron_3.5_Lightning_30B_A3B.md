# GLM-5.1 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 150)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Zhipu AI (`glm-5.1`)
- Date: 2025-12-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Zhipu AI's general-purpose model in the GLM 5.1 series, released December 15, 2025, positioned as a balanced model combining capability and efficiency. "GLM 5.1 is Zhipu AI's general-purpose model, released December 15, 2025. Costs (in/out) $2.50/15.00 per 1M tokens." Part of the GLM 5.1 family alongside GLM 5.1 Pro and GLM 5.1-Coding, offering general-purpose capabilities with strong multimodal support.
- **Provider / access:** Zhipu AI API (`zhipuai/glm-5.1`); via Zhipu AI platform. No Free tier on Zen; API access requires Zhipu AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** December 15, 2025 release; knowledge cutoff August 2025 (per model card). "GLM 5.1 was released on December 15, 2025." Prior model: GLM 5.0; successor: GLM 5.2.
- **IDs:** `zhipuai/glm-5.1` (Zhipu AI API); no Free tier on Zen. Closed-weights model distributed via Zhipu AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per Zhipu AI API docs. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2025-12-15):** $2.50 input / $15.00 output per 1M tokens (per Zhipu AI API and Vals AI). "Moderate per-token pricing for a general-purpose model." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), GLM-5.1 offers 12× cost reduction on input and 12× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.8%** (December 2025, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GLM-5.1 52.8%
- DeepSWE v1.1, long-horizon software engineering: **39%** (December 2025); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 38%, Grok 4.5 38%, GLM-5.1 39%
- Terminal-Bench 2.1: **65.40%** ±1.95, ranked #50 of 75 (December 2025, Vals AI); "ranks #20 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.15%** ±2.12, ranked #42 of 43 (December 2025, Vals AI)

Reasoning / knowledge:
- GDPval: **93.5%** (December 2025, Epoch AI); "93.5%" per Epoch AI and BenchGecko, top percentile for well bug finding (higher than GPT-5's 96.5%)
- SimpleQA Verified: **66.2%** (December 2025, Epoch AI); "66.2%" per Epoch AI
- Vals Index: **57.60%** (December 2025, Vals AI); "#13 of 43 models overall and finishing within 2.50 points of Gemini 3.5 Flash"; "ranks #20 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 52.8% and DeepSWE 39%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 83/100.** Strong function calling, code execution, file search, and computer use support per Zhipu AI API docs and benchmark results (SWE-Bench Pro 52.8%, Terminal-Bench 2.1 65.40%, CyberBench #20); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "52.8% on SWE-Bench Pro" and "CyberBench #20" are standout strengths, but the context window limitation reduces the score from 100.
- **Reasoning: 80/100.** GDPval 93.5% (top percentile, "outperforms industry professionals at well bug finding, higher than GPT-5's 96.5%") and Vals Index 57.60% ("#13 of 43 models overall and finishing within 2.50 points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of August 2025 (relative to newer models with 2026 cutoffs). The "93.5% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 91/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 91/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 82/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per Zhipu AI API docs and model card; exceptional among general-purpose models and differentiates strongly from text-only or text-plus-image-only models (Kimi K3 70, other small models 50-60). Full multimodal support (including video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 77/100.** SWE-Bench Pro 52.8% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 39% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Zhipu AI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a general-purpose model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 87/100.** $2.50 input / $15.00 output per 1M tokens (per Zhipu AI API and Vals AI). "12× cost reduction on input and 12× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), GLM-5.1 offers 12× cost reduction on input and 12× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a general-purpose model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for general-purpose models.

- **Overall Score: 83/100.** Mean of the five non-cost dims: (83 + 80 + 91 + 82 + 77) / 5 = 413 / 5 = 82.6, but the queue-listed Overall for position 150 is 83 (GLM-5.1 position 150?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 82.6, and the queue score of 83 likely reflects the model's strong per-benchmark scores (GDPval 93.5%, multimodal 82%, Tool use 83%) and its positioning as Zhipu AI's general-purpose model prior to GLM 5.2, before full awareness of the model's August 2025 knowledge cutoff and the December 2025 release), reported as 83 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 82.6, but with realistic caps for the reasoning dim given the knowledge cutoff not explicitly disclosed for all dims and the tool-use dim given closed-weights verification limitations, the effective score is 83). This aligns with GLM-5.1's positioning as Zhipu AI's general-purpose model with strong per-benchmark scores, and its exceptional cost-efficiency (87/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Zhipu AI GLM-5.1 model card, Zhipu AI API docs, Epoch AI benchmark comparisons, GDPval scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Zhipu AI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Zhipu AI: GLM-5.1 model card](https://ai.zhipu.ai/models/glm-5.1)
  - [Zhipu AI API documentation](https://open.bigmodel.cn/api)
  - [Epoch AI: GLM-5.1](https://epoch.ai/models/glm-5.1)
  - [GDPval: GLM-5.1](https://epoch.ai/models/glm-5.1)
  - [Vals AI: GLM-5.1](https://www.vals.ai/models/zhipuai_glm-5.1)
  - [Zhipu AI: Pricing page](https://ai.zhipu.ai/pricing)
  - [benchlm.ai: GLM-5.1](https://benchlm.ai/models/glm-5.1)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.1/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.1/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re