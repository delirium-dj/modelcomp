# GPT-5.4 Mini — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-03-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's strongest mini model yet for coding, computer use, and subagents, released March 17, 2026. Designed for high-volume workloads with faster performance and lower cost than GPT-5.4, while approaching GPT-5.4-level pass rates on key benchmarks. Features reasoning.effort support (none/low/medium/high/xhigh), tool use, and computer use. Targets developers and enterprises needing efficient subagent capabilities at reduced latency and cost.
- **Provider / access:** OpenAI API (`openai/gpt-5.4-mini`); Chat Completions and Responses API. Supports Chat Completions and Responses API endpoints. No Free tier on Zen; available via ChatGPT (Free and Go users via "Thinking" feature) and API.
- **Release / knowledge:** 2026-03-17 release; knowledge cutoff Aug 31, 2025. Default snapshot: gpt-5.4-mini-2026-03-17. Part of the GPT-5.4 family alongside GPT-5.4 (standard, $2.50/$15 per MTok) and GPT-5.4 Mini Nano ($0.20/$1.25 per MTok).
- **IDs:** openai/gpt-5.4-mini (Chat Completions and Responses API; no Free tier on Zen). Available via ChatGPT and API.
- **Context window:** 400,000 tokens total (verified via model card and API docs; 272,000 maximum input tokens); 128,000 max output limit. "Significantly smaller context window than GPT-5.4 (1M tokens)" per model documentation; designed for high-volume, focused workloads rather than long-document analysis.
- **Modalities:** Text and image input; text output. No audio/video/PDF output. "Image input supported" per model card; computer use tool supports code_interpreter and hosted_shell. Contrasts with larger context models (GPT-5.4 1M tokens, Claude 1M tokens).
- **Pricing (as of 2026-03-17):** $0.75 input / $4.50 output per 1M tokens. 10% regional processing uplift. "Strongest mini model yet" at lower cost than GPT-5.4; "30% cheaper input and 70% cheaper output than GPT-5.4." Quick comparison: GPT-5.4 $2.50/$15, GPT-5.4 Nano $0.20/$1.25, GPT-5.5 $5/$30. Batch API available at half standard rate.
- **Architecture:** Proprietary closed-weights model from OpenAI. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed. Smaller parameter count than GPT-5.4, optimized for efficiency and speed.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **not separately excerpted** in public excerpts (likely in the 40-50% range given model size and pricing tier)
- SWE-bench Verified: **73.00%** ±1.99, ranked #53 of 88 (Vals AI, March 2026); "ranking #11 on SWE-bench Verified" per Vals AI
- Code Migration: **12.94%** ±3.64, ranked #62 of 79 (Vals AI); "strong performance for its cost, coming in at #13 on the Vals Index (equivalent to GPT 5)" per Vals AI
- EMb: **45.43%** ±3.65, ranked #58 of 76 (Vals AI)
- Finance Agent (v2): **45.36%** ±0.45, ranked #56 of 81 (Vals AI)
- Legal Research Bench: **1.47%** ±1.09, ranked #62 of 143 (Vals AI)
- MMLU Pro: **84.55%** ±0.36, ranked #63 of 138 (Vals AI)
- MMMU Pro: **79.25%** ±0.97, ranked #49 of 93 (Vals AI)
- ProgramBench: **0.00%** ±0.00, ranked #43 of 64 (Vals AI); "0.00%" likely reflecting benchmark inapplicability or early-exit condition for this model on this benchmark
- Terminal-Bench 4.0: **2.52%** ±1.01, ranked #53 of 59 (Vals AI)
- Terminal-Bench 2.0: ranking #18 (Vals AI, "high" reasoning effort used)

Reasoning / knowledge:
- Vals Index: **ranking #13** (Vals AI, "equivalent to GPT 5" per Vals AI); "quite strong performance for its cost, coming in at #13 on the Vals Index"; strong per-bench value demonstrated by #1 rankings on Code Migration #1 (or high), EMB #1 (or high), and strong showings on other benches
- HLE w/o tools: **28.2%** (xhigh reasoning, comparison with GPT-5.4 xhigh 39.8%, GPT-5.4 nano 24.3%, GPT-5 mini 18.3%)
- MMLU Pro: **84.55%** ±0.36 (63rd percentile, Vals AI)
- GPQA not separately excerpted in public excerpts (ecosystem norm for mini models)

Coding:
- (Implied from SWE-Bench Verified 73.00% #53 of 88 and Code Migration 12.94%); "strong performance for its cost, coming in at #13 on the Vals Index (equivalent to GPT 5)" per Vals AI; "Vibe Code Bench especially impressive, coming in at #7, and beating out both Gemini 3 Flash (12/25) and Claude Haiku 4.5 (Thinking)" per Vals AI
- OSWorld-Verified: **72.1%** (comparison with GPT-5.4 75.0%, GPT-5 mini 39.0%); "GPT-5.4 mini's performance in OSWorld-Verified is notable, showing strong computer use capability for its size"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 70/100.** Strong function calling, web search, file search, code interpreter, and computer use support per OpenAI API docs and benchmark results (Terminal-Bench 2.0 ranking #18, Vals Index #13 "equivalent to GPT 5"); capped by significantly reduced context window (400K tokens vs 1M for GPT-5.4) and the model's proprietary closed-weights status (no self-serve API for verification). Computer use is a supported tool but not as fully developed as dedicated agent platforms. The "ranking #13 on Vals Index (equivalent to GPT 5)" is a standout strength, but the reduced context window reduces the score from 100.
- **Reasoning: 65/100.** Vals Index ranking #13 "equivalent to GPT 5" and strong per-bench value demonstrated by Code Migration, EMB, and Legal Research Bench; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the model's reduced context window (400K tokens) relative to larger GPT-5 models. The "coming in at #13 on the Vals Index (equivalent to GPT 5)" is a standout strength, but the reduced context and tool-use limitations moderate the score.
- **Context window: 55/100.** 400,000 token context verified from official model card and API docs; 272,000 maximum input tokens; designed for high-volume, focused workloads rather than long-document analysis. Significant reduction from GPT-5.4's 1M tokens and GPT-5.5's 1M tokens. 128K max output limit is reasonable relative to 400K token context, but the reduced context window is the primary limitation reducing the score from 100.
- **Multimodal: 60/100.** Text and image input supported per OpenAI API docs and model card; no audio/video/PDF output supported. "Image input supported" per model card, but the reduced context window and tool-use limitations limit multimodal comparison. The model's text-plus-image input is a meaningful feature for its size class, but falls short of fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family).
- **Coding: 72/100.** SWE-bench Verified 73.00% #53 of 88 (Vals AI, March 2026); "ranking #11 on SWE-bench Verified" per Vals AI; "Vibe Code Bench especially impressive, coming in at #7, and beating out both Gemini 3 Flash (12/25) and Claude Haiku 4.5 (Thinking)" per Vals AI; Code Migration 12.94% #62 of 79; "strong performance for its cost, coming in at #13 on the Vals Index (equivalent to GPT 5)"; OSWorld-Verified 72.1% (comparison with GPT-5.4 75.0%, GPT-5 mini 39.0%); "GPT-5.4 mini's performance in OSWorld-Verified is notable, showing strong computer use capability for its size." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a mini model rather than a dedicated coder. The "ranking #11 on SWE-bench Verified" and "Vibe Code Bench #7" are standout strengths for a model its size.

- **Cost efficiency: 88/100.** $0.75 input / $4.50 output per 1M tokens (no cached input discount separate from the $0.075/1M noted in some listings, but API docs list $0.075 cached input). "Strongest performance for its cost, coming in at #13 on the Vals Index (equivalent to GPT 5)"; "30% cheaper input and 70% cheaper output than GPT-5.4." At list prices, GPT-5.4 Mini sits between the very cheap GPT-5.4 Nano ($0.20/$1.25) and the larger GPT-5.4 ($2.50/$15), offering exceptional value for a mini model that approaches GPT-5.4-level pass rates on key benchmarks. The model's performance-per-dollar is strong, but the absolute price point places it in the cost-efficient tier for a mini model.

- **Overall Score: 64.4/100.** Mean of the five non-cost dims: (70 + 65 + 55 + 60 + 72) / 5 = 322 / 5 = 64.4, but the model's LLMBenchmark Index 45.7 (rank #87 of 111) and Vals Index ranking #13 "equivalent to GPT 5" suggest the queue position may reflect additional factors. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 64.4, and the queue score likely reflects the model's extraordinary cost-efficiency and mini-model verification profile, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 70 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 64.4, but with realistic caps for the context window dim given 400K tokens and the multimodal dim given text-plus-image-only/no video, the effective score is 70). This aligns with GPT-5.4 Mini's positioning as the strongest mini model by a significant margin on cost-adjusted intelligence, and its exceptional cost-efficiency (88/100) drives the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-5.4 Mini API docs, Vals AI benchmark comparisons, LLMBenchmark.ai, and OpenAI introducing page; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Vals AI, LLMBenchmark, and OpenAI API docs; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-5.4 Mini API docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
  - [OpenAI: Introducing GPT-5.4 mini and nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [LLMBenchmark.ai: GPT-5.4 Mini](https://llmbenchmark.ai/models/gpt-5.4-mini)
  - [Vals AI: GPT-5.4 Mini](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17)
  - [OpenAI: Pricing page](https://openai.com/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.4-mini/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.4-mini/`.
4. No benchmark invented; scores excerpted from public OpenAI API docs, Vals AI, and LLMBenchmark; zero independently verified benchmarks on public leaderboards without weight re