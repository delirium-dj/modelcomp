# GPT-5.5 — findings by Solar_Mini_4

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's fully retrained base model (released 2026-04-23) for real work: agentic coding, complex knowledge tasks, computer use, scientific research. First fully retrained base since GPT-4.5. Premium pricing but strong per-task efficiency gains.
- **Provider / access:** OpenAI API `gpt-5.5` (ChatGPT Plus/Pro/Business/Enterprise; API GA 2026-04-24), Codex, Azure. Paid.
- **Release / knowledge:** Released 2026-04-23 (version `gpt-5.5-2026-04-23`); knowledge cutoff December 1, 2025 (vendor API docs).
- **IDs:** `openai/gpt-5.5`, `gpt-5.5-2026-04-23`.
- **Context window:** 1,050,000 tokens (vendor API docs); marketing shorthand "1M". Max output 128,000.
- **Modalities:** Text in and out; image input only; audio/video unsupported. Reasoning: up to 5 effort levels (none/low/medium default/high/xhigh). Tooling: web search, file search, image generation, code interpreter, hosted shell, skills, computer use, MCP.
- **Pricing (as of 2026-09-01):** $5.00 input / $0.50 cached input / $30.00 output per 1M tokens (batch prices); GPT-5.4 was $2.50/$15 (doubled). GPT-5.5 Pro: $30/$180 per 1M. >272K input tokens priced 2× input / 1.5× output; regional endpoints +10%.
- **Architecture:** proprietary; params undisclosed; fully retrained base (first since GPT-4.5); parallel test-time compute for GPT-5.5 Pro.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 2.0: **82.7%** (OpenAI) — vs GPT-5.4 75.1%, Claude Opus 4.7 69.4%, Gemini 3.1 Pro 68.5% (+7.6 pts vs GPT-5.4). Agentic public lane (BenchLM): 62.7 (#23/128).
- GDPval (wins or ties): **84.9%** (vs GPT-5.4 83.0%, GPT-5.5 Pro 82.3%, Opus 4.7 80.3%, Gemini 3.1 Pro 67.3%).
- Expert-SWE (internal): **73.1%** (GPT-5.4 68.5%).
- OSWorld-Verified: **78.7%** (Opus 4.7 78.0%).
- Toolathlon: **55.6%** (Gemini 3.1 Pro 48.8%).
- CyberGym: **81.8%** (GPT-5.4 79.0%, Opus 4.7 73.1%).
- BrowseComp: **84.4%** (GPT-5.5 Pro 90.1%, GPT-5.4 82.7%, Opus 4.7 79.3%, Gemini 3.1 Pro 85.9%).
- Tau2-bench Telecom: **98.0%** (per independent trackers).

**Reasoning / knowledge:**
- FrontierMath Tier 4: **35.4%** (GPT-5.5 Pro 39.6%; Opus 4.7 22.9%; Gemini 3.1 Pro 16.7%) — Pro is 2× the nearest competitor.
- FrontierMath Tier 1–3: **51.7%** (GPT-5.5 Pro 52.4%).
- GPQA: **93.6%**; ARC-AGI-1: **95.0%**; ARC-AGI-2: **85.0%**; HLE: **52.2%**; MRCR v2 64K–128K: **83.1%**, 128K–256K: **87.5%**; HLE without tools 39.8%.

**Coding:**
- SWE-bench Verified: **82.6%** (Vals) — vs GPT-5.4 68.5%; SWE-bench Pro: **58.6%**; LiveCodeBench: **85.3%**; Vibe Code Bench: **69.85%**.
- Terminal-Bench 2.0 (independent run): **82.0%**; Agentic public lane (BenchLM): **62** (#14/150).

**Multimodal:**
- MMMU-Pro: **81.2%**; MMMU-Pro w/ Python: **83.2%**; Vals Multimodal Index: **66.9%** (per independent trackers).

**Artificial Analysis (Apr 23, 2026):**
- Intelligence Index 50 (v4.3.2, #13/58) per AA model page; independent April-2026 summaries (Stack Futures) reported 60 at the same period — index version / refresh conflict (see research report). GPT-5.5 (xhigh) tops the Index by 3 points, breaking the Anthropic/Google/OpenAI tie.
- GDPval-AA Elo: **1785** (xhigh) — leads Opus 4.7 (max) by ~30 points and Gemini 3.1 Pro Preview by ~470.
- AA-Omniscience: accuracy **57%** (highest ever recorded by AA) but hallucination rate **86%** (worst at the frontier vs Opus 4.7 max 36% and Gemini 3.1 Pro 50%) — "confidently wrong" is the named deployment risk.
- τ²-Bench Telecom: +7 pts over GPT-5.4 — largest gain on that customer-service agent benchmark.
- Output efficiency: ~40% fewer output tokens than GPT-5.4 → net Index cost ≈ +20% (not +100%).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 82.7%, GDPval 84.9%, BrowseComp 84.4%, CyberGym 81.8%, Tau2-bench Telecom 98.0%; caps at Agentic public-lane 62.7 (#23/128) and OSWorld-Verified 78.7% (vs Opus 78.0%).
- **Reasoning: 82/100.** ARC-AGI-1 95.0%, ARC-AGI-2 85.0%, GPQA 93.6%, FrontierMath Tier 4 35.4% (Pro 39.6% double the next); caps at ARC-AGI-3 0.4% and HLE 52.2%.
- **Context window: 84/100.** 1,050,000-token window with MRCR v2 64K–128K 83.1% and 128K–256K 87.5%; max output 128K.
- **Multimodal: 84/100.** Text + image input; MMMU-Pro 81.2%, Vals Multimodal Index 66.9%.
- **Coding: 78/100.** SWE-bench Verified 82.6%, LiveCodeBench 85.3%, Vibe Code Bench 69.85%; coding public lane 62 (#14/150).
- **Cost efficiency: 50/100.** Premium $5/$30 per 1M tokens; ~40% fewer output tokens than GPT-5.4 but premium pricing keeps cost efficiency mid-tier.
- **Overall Score: 82/100.** (82+82+84+84+78)/5 = 82.0. Best fit: agentic coding + knowledge work at 2× API cost — provided factual-hygiene layers exist for regulated use (86% omniscience hallucination rate is a real constraint).

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-01
- Method: public internet research (OpenAI API docs, Artificial Analysis article + model page, The Decoder, Stack Futures, AgentBreaking, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs — GPT-5.5](https://developers.openai.com/api/docs/models/gpt-5.5)
  - [Artificial Analysis — OpenAI's GPT-5.5 is the new leading AI model (Apr 23, 2026)](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model)
  - [The Decoder — OpenAI unveils GPT-5.5 at double the API price (Apr 25, 2026)](https://the-decoder.com/openai-unveils-gpt-5-5-claims-a-new-class-of-intelligence-at-double-the-api-price/)
  - [Stack Futures — GPT-5.5 leads Intelligence Index at 60 and hallucinates at 86% (Apr 24, 2026)](https://stackfutures.com/blog/gpt-5-5-hallucination-benchmark-analysis/)
  - [AgentBreaking — GPT-5.5 & GPT-5.5 Pro deep dive: 86% hallucination problem (Apr 25, 2026)](https://agentbreaking.com/blog/gpt-5-5-gpt-5-5-pro-review-benchmarks-pricing/)
  - [LLM Reference — GPT-5.5 model page](https://www.llmreference.com/model/gpt-5.5)
  - [Artificial Analysis — GPT-5.5 model page](https://artificialanalysis.ai/models/gpt-5.5)

---

---

## Archived research pass — `Solar_Mini_4.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Solar_Mini_4.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

**Agent / tool use:**
- Terminal-Bench 2.0: **82.7%** (OpenAI) — vs GPT-5.4 75.1%, Claude Opus 4.7 69.4%, Gemini 3.1 Pro 68.5% (+7.6 pts vs GPT-5.4). Agentic public lane (BenchLM): 62.7 (#23/128).
- GDPval (wins or ties): **84.9%** (vs GPT-5.4 83.0%, GPT-5.5 Pro 82.3%, Opus 4.7 80.3%, Gemini 3.1 Pro 67.3%).
- Expert-SWE (internal): **73.1%** (GPT-5.4 68.5%).
- OSWorld-Verified: **78.7%** (Opus 4.7 78.0%).
- Toolathlon: **55.6%** (Gemini 3.1 Pro 48.8%).
- CyberGym: **81.8%** (GPT-5.4 79.0%, Opus 4.7 73.1%).
- BrowseComp: **84.4%** (GPT-5.5 Pro 90.1%, GPT-5.4 82.7%, Opus 4.7 79.3%, Gemini 3.1 Pro 85.9%).
- Tau2-bench Telecom: **98.0%** (per independent trackers).

**Reasoning / knowledge:**
- FrontierMath Tier 4: **35.4%** (GPT-5.5 Pro 39.6%; Opus 4.7 22.9%; Gemini 3.1 Pro 16.7%) — Pro is 2× the nearest competitor.
- FrontierMath Tier 1–3: **51.7%** (GPT-5.5 Pro 52.4%).
- GPQA: **93.6%**; ARC-AGI-1: **95.0%**; ARC-AGI-2: **85.0%**; HLE: **52.2%**; MRCR v2 64K–128K: **83.1%**, 128K–256K: **87.5%**; HLE without tools 39.8%.

**Coding:**
- SWE-bench Verified: **82.6%** (Vals) — vs GPT-5.4 68.5%; SWE-bench Pro: **58.6%**; LiveCodeBench: **85.3%**; Vibe Code Bench: **69.85%**.
- Terminal-Bench 2.0 (independent run): **82.0%**; Agentic public lane (BenchLM): **62** (#14/150).

**Multimodal:**
- MMMU-Pro: **81.2%**; MMMU-Pro w/ Python: **83.2%**; Vals Multimodal Index: **66.9%** (per independent trackers).

**Artificial Analysis (Apr 23, 2026):**
- Intelligence Index 50 (v4.3.2, #13/58) per AA model page; independent April-2026 summaries (Stack Futures) reported 60 at the same period — index version / refresh conflict (see research report). GPT-5.5 (xhigh) tops the Index by 3 points, breaking the Anthropic/Google/OpenAI tie.
- GDPval-AA Elo: **1785** (xhigh) — leads Opus 4.7 (max) by ~30 points and Gemini 3.1 Pro Preview by ~470.
- AA-Omniscience: accuracy **57%** (highest ever recorded by AA) but hallucination rate **86%** (worst at the frontier vs Opus 4.7 max 36% and Gemini 3.1 Pro 50%) — "confidently wrong" is the named deployment risk.
- τ²-Bench Telecom: +7 pts over GPT-5.4 — largest gain on that customer-service agent benchmark.
- Output efficiency: ~40% fewer output tokens than GPT-5.4 → net Index cost ≈ +20% (not +100%).

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

## GPT-5.5 — findings by Solar_Mini_4

- Source: OpenAI (`openai/gpt-5.5`)
- Archived date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's fully retrained base model (released 2026-04-23) for real work: agentic coding, complex knowledge tasks, computer use, scientific research. First fully retrained base since GPT-4.5. Premium pricing but strong per-task efficiency gains.
- **Provider / access:** OpenAI API `gpt-5.5` (ChatGPT Plus/Pro/Business/Enterprise; API GA 2026-04-24), Codex, Azure. Paid.
- **Release / knowledge:** Released 2026-04-23 (version `gpt-5.5-2026-04-23`); knowledge cutoff December 1, 2025 (vendor API docs).
- **IDs:** `openai/gpt-5.5`, `gpt-5.5-2026-04-23`.
- **Context window:** 1,050,000 tokens (vendor API docs); marketing shorthand "1M". Max output 128,000.
- **Modalities:** Text in and out; image input only; audio/video unsupported. Reasoning: up to 5 effort levels (none/low/medium default/high/xhigh). Tooling: web search, file search, image generation, code interpreter, hosted shell, skills, computer use, MCP.
- **Pricing (as of 2026-09-01):** $5.00 input / $0.50 cached input / $30.00 output per 1M tokens (batch prices); GPT-5.4 was $2.50/$15 (doubled). GPT-5.5 Pro: $30/$180 per 1M. >272K input tokens priced 2× input / 1.5× output; regional endpoints +10%.
- **Architecture:** proprietary; params undisclosed; fully retrained base (first since GPT-4.5); parallel test-time compute for GPT-5.5 Pro.

## Raw benchmarks found

## GPT-5.5 — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.


### Model card
- **Name:** GPT-5.5
- **Short description:** OpenAI GPT-5.5 flagship for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** OpenAI GPT API, GPT Console; OpenCode Zen `opencode/gpt-5.5`; GitHub `openai/gpt-5.5`.
- **Release / knowledge:** Released 2026-09-18; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `openai/gpt-5.5` (Hugging Face registry slug); GitHub `openai/gpt-5.5`.
- **Context window:** **1M** total, **256K** max output (verified by official OpenAI API docs).
- **Modalities:** text in/out; vision not consistently advertised.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M output` (official OpenAI API).
- **Architecture:** proprietary OpenAI LLM; not open weights.

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out
- Status: Superseded by GPT-6.1 Sol.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
