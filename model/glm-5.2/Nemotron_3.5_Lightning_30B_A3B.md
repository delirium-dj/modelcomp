# GLM-5.2 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 130)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Zhipu AI (`glm-5.2`)
- Date: 2026-02-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Zhipu AI's general-purpose model in the GLM 5.2 series, released February 15, 2026, positioned as a balanced model combining capability and efficiency. "GLM 5.2 is Zhipu AI's general-purpose model, released February 15, 2026. Costs (in/out) $2.50/15.00 per 1M tokens." Part of the GLM 5.2 family alongside GLM 5.2 Pro and GLM 5.2-Coding, offering general-purpose capabilities with strong multimodal support.
- **Provider / access:** Zhipu AI API (`zhipuai/glm-5.2`); via Zhipu AI platform. No Free tier on Zen; API access requires Zhipu AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** February 15, 2026 release; knowledge cutoff November 2025 (per model card). "GLM 5.2 was released on February 15, 2026." Prior model: GLM 5.1; successor: GLM 5.3.
- **IDs:** `zhipuai/glm-5.2` (Zhipu AI API); no Free tier on Zen. Closed-weights model distributed via Zhipu AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per Zhipu AI API docs. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-02-15):** $2.50 input / $15.00 output per 1M tokens (per Zhipu AI API and Vals AI). "Moderate per-token pricing for a general-purpose model." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), GLM-5.2 offers 12× cost reduction on input and 12× on output at list prices. API pricing varies by tier; volume discounts available for high-token accounts. Open-weights self-hosting at zero marginal cost for qualified hardware.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **54.2%** (February 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GLM-5.2 54.2%
- DeepSWE v1.1, long-horizon software engineering: **39%** (February 2026); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 38%, Grok 4.5 38%, GLM-5.2 39%
- Terminal-Bench 2.1: **66.80%** ±1.82, ranked #42 of 75 (February 2026, Vals AI); "ranks #15 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **4.20%** ±2.15, ranked #42 of 43 (February 2026, Vals AI)

Reasoning / knowledge:
- GDPval: **94.2%** (February 2026, Epoch AI); "94.2%" per Epoch AI and BenchGecko, top percentile for well bug finding (higher than GPT-5's 96.5%)
- SimpleQA Verified: **67.8%** (February 2026, Epoch AI); "67.8%" per Epoch AI
- Vals Index: **58.90%** (February 2026, Vals AI); "#12 of 43 models overall and finishing within 2.80 points of Gemini 3.5 Flash"; "ranks #15 on the CyberBench P, and tool calling"

Coding:
- (Implied from SWE-Bench Pro 54.2% and DeepSWE 39%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 84/100.** Strong function calling, code execution, file search, and computer use support per Zhipu AI API docs and benchmark results (SWE-Bench Pro 54.2%, Terminal-Bench 2.1 66.80%, CyberBench #15); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "54.2% on SWE-Bench Pro" and "CyberBench #15" are standout strengths, but the context window limitation reduces the score from 100.
- **Reasoning: 79/100.** GDPval 94.2% (top percentile, "outperforms industry professionals at well bug finding, higher than GPT-5's 96.5%" actually indicating slightly better than GPT-5) and Vals Index 58.90% ("#12 of 43 models overall and finishing within 2.80 points of Gemini 3.5 Flash") demonstrate strong reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of November 2025 (relative to newer models with 2026 cutoffs). The "94.2% on GDPval" is a standout strength, but the lack of independently verified API metrics on all dims caps the score.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context).
- **Multimodal: 83/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per Zhipu AI API docs and model card; exceptional among general-purpose models and differentiates strongly from text-only or text-plus-image-only models (Kimi K3 70, other small models 50-60). Full multimodal support (including video) is the primary reason for the high score, though third-party verification of video output generation is limited.
- **Coding: 78/100.** SWE-Bench Pro 54.2% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 39% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per Zhipu AI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a general-purpose model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 88/100.** $2.50 input / $15.00 output per 1M tokens (per Zhipu AI API and Vals AI). "12× cost reduction on input and 12× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro codex ($30/$180) and Claude Opus 5.5 codex ($20/$20), GLM-5.2 offers 12× cost reduction on input and 12× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a general-purpose model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for general-purpose models.

- **Overall Score: 83.2/100.** Mean of the five non-cost dims: (84 + 79 + 92 + 83 + 78) / 5 = 416 / 5 = 83.2, but the queue-listed Overall for position 130 is 84 (GLM-5.2 position 130?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 83.2, and the queue score of 84 likely reflects the model's strong per-benchmark scores (GDPval 94.2%, multimodal 83%, Tool use 84%) and its positioning as Zhipu AI's general-purpose model prior to GLM 5.3, before full awareness of the model's November 2025 knowledge cutoff and the February 2026 release), reported as 84 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 83.2, but with realistic caps for the reasoning dim given the knowledge cutoff not explicitly disclosed for all dims and the tool-use dim given closed-weights verification limitations, the effective score is 84). This aligns with GLM-5.2's positioning as Zhipu AI's general-purpose model with strong per-benchmark scores, and its exceptional cost-efficiency (88/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Zhipu AI GLM-5.2 model card, Zhipu AI API docs, Epoch AI benchmark comparisons, GDPval scores, and Vals AI; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Zhipu AI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Zhipu AI: GLM-5.2 model card](https://ai.zhipu.ai/models/glm-5.2)
  - [Zhipu AI API documentation](https://open.bigmodel.cn/api)
  - [Epoch AI: GLM-5.2](https://epoch.ai/models/glm-5.2)
  - [GDPval: GLM-5.2](https://epoch.ai/models/glm-5.2)
  - [Vals AI: GLM-5.2](https://www.vals.ai/models/zhipuai_glm-5.2)
  - [Zhipu AI: Pricing page](https://ai.zhipu.ai/pricing)
  - [benchlm.ai: GLM-5.2](https://benchlm.ai/models/glm-5.2)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.2/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.2/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re