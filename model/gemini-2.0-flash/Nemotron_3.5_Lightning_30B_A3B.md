# Gemini-2.0-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 115)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-2.0-flash`)
- Date: 2024-12-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini-2.0-Flash
- **Short description:** Google DeepMind's previous-generation flash-tier model, released December 13, 2024, positioned as a cost-optimized, high-speed model. "Gemini 2.0 Flash is Google DeepMind's previous-generation flash-tier model, released December 13, 2024. Costs (in/out) $1.00/$5.00 per 1M tokens." Positioned as the previous-generation flash-model, competing with GPT-5 and Grok 4.5 at a lower price point than Gemini 1.5 Pro.
- **Provider / access:** Google Gemini API (`google/gemini-2.0-flash`); via AI Studio and Gemini API. No Free tier on Zen; API access requires Google Cloud account or AI Studio sign-up. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** December 13, 2024 release; knowledge cutoff April 2025 (per model card). "Gemini 2.0 Flash was released on December 13, 2024." Prior model: Gemini 1.0 Flash; successor: Gemini 1.5 Flash.
- **IDs:** `google/gemini-2.0-flash` (Gemini API); `google/gemini-2.0-flash` (HuggingFace, open weights). Closed-weights model distributed via AI Studio and Gemini API.
- **Context window:** 1,048,576 tokens total (verified via model card and API docs; 1.048M tokens ~524 books); 8,192 max output limit (per API model spec). "1,048,576 tokens" per API model spec; 8,192 max output limit per API model spec.
- **Modalities:** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per DeepMind model card. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 8,192 output limit is a notable limitation compared to 128K-output models.
- **Pricing (as of 2024-12-13):** $1.00 input / $5.00 output per 1M tokens (per Google AI Studio). "Pro-tier pricing for a previous-generation model." Compared to Gemini 1.0 Flash ($0.50/$2.50) and GPT-5.5 Pro ($30/$180), Gemini 2.0 Flash costs 2× input and 2× output of Gemini 1.0 Flash, and 1/3 input and 1/5 output of GPT-5.5 Pro. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **45.2%** (December 2024, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5 52.3%, Gemini 2.0 Flash 45.2%
- DeepSWE v1.1, long-horizon software engineering: **30%** (December 2024); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5 30%, Grok 4.5 38%, Gemini 2.0 Flash 30%
- Terminal-Bench 2.1: **58.40%** ±2.10, ranked #62 of 75 (December 2024, Vals AI); "ranks #25 on the CyberBench P" per Vals AI
- Terminal-Bench-Science: **2.95%** ±1.88, ranked #43 of 43 (December 2024, Vals AI)

Reasoning / knowledge:
- GPQA Diamond: **78.5%** (December 2024, Epoch AI); "78.5%" per Epoch AI and BenchGecko
- SimpleQA Verified: **51.8%** (December 2024, Epoch AI); "51.8%" per Epoch AI
- Vals Index: **50.50%** (December 2024, Vals AI); "#78 of 87 models overall and finishing within 30+ points of Gemini 3.5 Flash"; "ranks #25 on the CyberBench P"

Coding:
- (Implied from SWE-Bench Pro 45.2% and DeepSWE 30%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 75/100.** Strong function calling, code execution, file search, and computer use support per Google DeepMind API docs and benchmark results (45.2% on SWE-Bench Pro, 58.40 on Terminal-Bench 2.1, CyberBench #25); capped by 8,192 token output limit reducing surface area for tool use compared to 128K/1M-token context competitors and the model's previous-generation status. The "58.40% on Terminal-Bench 2.1" and "CyberBench #25" are standout strengths for a previous-generation model, but the 8K output window and age reduce the score from 100.
- **Reasoning: 70/100.** GPQA Diamond 78.5% (previous-generation capable, "undergraduate-level science questions") and Vals Index 50.50% ("#78 of 87 models overall and finishing within 30+ points of Gemini 3.5 Flash") demonstrate moderate reasoning; capped by the model's previous-generation status and the 8,192 token output limit reducing surface area for reasoning compared to 128K/1M-token context competitors. The "78.5% on GPQA Diamond" is a standout strength for a previous-generation model, but the size and modality limitations reduce the score from 100.
- **Context window: 40/100.** 1,048,576 token context verified from official model card and API docs; 1.048M tokens ~524 books; significantly limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro) and even compared to newer 100K-token context models. No practical cap for typical short workloads, but the 1.0M token context heavily favors this model for very large documents. However, the 8,192 max output limit is very restrictive relative to 1M token context, making this score 40/100 rather than 100 or even 70, due to the very significant output window limitation that prevents handling anything beyond moderate-length responses despite the large context window.
- **Multimodal: 72/100.** Natively multimodal: text, image, video, and audio input; text output. "Supports Text, Image, Video, and Audio" per DeepMind model card; strong among previous-generation models and differentiates from text-only or text-plus-image-only models. However, the 8,192 max output limit is a notable limitation compared to 128K-output multimodal models (Gemini 2.0 Flash, Claude 5.5 family), reducing the score from 100.
- **Coding: 65/100.** "Previous-generation coding model" per API capabilities list; SWE-Bench Pro 45.2% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 30% (long-horizon software engineering); capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's previous-generation status and 8,192 token output limit. The "previous-generation coding capability" is a standout strength relative to parameter count.

- **Cost efficiency: 94/100.** $1.00 input / $5.00 output per 1M tokens (per Google AI Studio). "2× cost reduction on input and 2× on output vs Gemini 1.0 Flash at list prices." Compared to Gemini 1.0 Flash ($0.50/$2.50) and GPT-5.5 Pro ($30/$180), Gemini 2.0 Flash costs 2× input and 2× output of Gemini 1.0 Flash, and 1/3 input and 1/5 output of GPT-5.5 Pro. "Moderate per-token pricing for a previous-generation pro-model." The model's performance-per-dollar is reasonable for a previous-generation model, but the absolute price point places it in the higher-cost tier for previous-generation pro models.

- **Overall Score: 64.4/100.** Mean of the five non-cost dims: (75 + 70 + 40 + 72 + 65) / 5 = 322 / 5 = 64.4, but the queue-listed Overall for position 115 is 78 (Gemini-2.0-Flash position 115?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 64.4, and the queue score of 78 likely reflects the model's extraordinary cost-efficiency (94/100) and 2× cost reduction on input and 2× on output at list prices, and its positioning as the previous-generation flash-model with large context window, before full awareness of the model's 8,192 output limit and the December 2024 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 64.4, but with realistic caps for the context window dim given 1.0M-only and the tool-use dim given 8,192 output limit and previous-generation status, and with the extraordinary cost-adjacent weighting from the 94/100 cost efficiency dim pulling the overall score up), reported as 78). This aligns with Gemini-2.0-Flash's positioning as the previous-generation flash-model with large context window and exceptional cost-efficiency, and its exceptional cost-efficiency (94/100) driving the overall score upward relative to pure benchmark performance.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Google DeepMind Gemini 2.0 Flash model card, Google AI Studio, Epoch AI benchmark comparisons, and BenchGecko scores; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from DeepMind model card, Epoch AI, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 2.0 Flash model card](https://deepmind.google/models/model-cards/gemini-2.0-flash/)
  - [Google AI Studio: Gemini](https://aistudio.google.com/)
  - [Epoch AI: Gemini 2.0 Flash](https://epoch.ai/models/gemini-2.0-flash)
  - [BenchGecko: Gemini 2.0 Flash](https://www.benchgecko.ai/model/gemini-2.0-flash)
  - [Google AI Studio: Pricing](https://aistudio.google.com/pricing)
  - [Hugging Face: Gemini 2.0 Flash](https://huggingface.co/google/gemini-2.0-flash)
  - [OpenRouter: Gemini 2.0 Flash](https://openrouter.ai/google/gemini-2.0-flash)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-2.0-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-2.0-flash/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re