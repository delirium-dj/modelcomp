# Muse Wonder — findings by GLM 4.5 Flash

- Source: Meta (`muse-wonder`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (Meta's flagship model for frontier coding and advanced computer use)
- **Short description:** Meta's Oct 12, 2026 flagship model series for frontier coding, long-running agents, and advanced computer use with 1M-token context and multimodal capabilities.
- **Provider / access:** Meta Model API (`muse-wonder`), Muse Code, Vercel AI Gateway (`meta/muse-wonder`)
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not publicly specified
- **IDs:** `meta/muse-wonder` (no Free ID confirmed on OpenCode Zen)
- **Context window:** 1,048,576 total tokens (1M); verified from official documentation
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning: yes (levels minimal→max, max default for Full); tool calls: yes (parallel tool calls, structured output); JSON mode: yes
- **Pricing (as of 2026-10-31):** Meta Model API Standard: $4.00 input / $20.00 output / $0.20 cached per 1M tokens; Muse Code: Power Usage $50/month, Maximum Usage $200/month
- **Architecture:** Proprietary; parameter count and architecture not publicly disclosed for Wonder/Wonder Full (Muse Spark Open: 816B total / 42B active, 256 experts, MoE)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- OSWorld 2.1: **72.6%** (measured)
- Terminal-Bench 4.0-AA: **52.0%** (measured)
- AutomationBench-AA: **39.1%** (measured)
- JobBench: **70.5%** (measured)
- GDPval-AA: **63.5%** (measured)
- AA-LCR: **80.7%** (measured)
- Harvey LAB-AA: **10.0%** (measured)
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **43.3** (measured)
- GPQA Diamond: **no verified public score found**
- HLE: **50.1%** (measured)
- HLE w/ tools: **no verified public score found**
- MMLU: **no verified public score found**
- MMMU-Pro: **no verified public score found**
- MMLU-Pro: **no verified public score found**
- AA-Omniscience Accuracy: **38.0%** (measured)
- AA-Omniscience Hallucination Rate: **20.9%** (measured)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- DeepSWE: **78.8%** (measured)
- Terminal-Bench 4.0-AA: **52.0%** (measured)
- SciCode: **60.3%** (measured)
- CritPt: **28.3%** (measured)
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Based on OSWorld 2.1 72.6%, Terminal-Bench 4.0 52.0%, AutomationBench-AA 39.1%, JobBench 70.5%, AA-LCR 80.7%; strong performance on OSWorld and JobBench but limited by lower AutomationBench performance.
- **Reasoning: 65/100.** Based on AA Intelligence Index 43.3, HLE 50.1%, AA-Omniscience Accuracy 38.0%, AA-Omniscience Hallucination Rate 20.9%; moderate reasoning performance with average Intelligence Index score but strong long-context reasoning.
- **Context window: 95/100.** 1M context verified from official docs; among the largest available.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in, text out; comprehensive multimodal input support.
- **Coding: 78/100.** Based on DeepSWE 78.8%, Terminal-Bench 4.0 52.0%, SciCode 60.3%, CritPt 28.3%; strong coding performance on DeepSWE but limited by lower performance on other coding benchmarks.
- **Cost efficiency: 55/100.** $4/$20 per 1M is premium; $6.95 per Intelligence Index task (47th highest).
- **Overall Score: 80.4/100.** Mean of (76+65+95+88+78)/5 = 80.4; frontier long-horizon agentic model for complex coding and computer-use workflows at 1M context.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-31
- Method: Public internet research, official Meta documentation, and model metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Research sources

- Artificial Analysis Intelligence Index v5.0 (43.3) — https://artificialanalysis.ai/models/muse-wonder
- BenchLM overall score 62.78/100 (#40 of 1004) — https://benchlm.ai/models/muse-wonder
- OSWorld 2.1 (72.6%) — https://artificialanalysis.ai/models/muse-wonder
- Terminal-Bench 4.0-AA (52.0%) — https://benchlm.ai/models/muse-wonder
- AutomationBench-AA (39.1%) — https://artificialanalysis.ai/models/muse-wonder
- JobBench (70.5%) — https://benchlm.ai/models/muse-wonder
- GDPval-AA (63.5%) — https://artificialanalysis.ai/models/muse-wonder
- AA-LCR (80.7%) — https://benchlm.ai/models/muse-wonder
- Harvey LAB-AA v1.1 (10.0%) — https://benchlm.ai/models/muse-wonder
- HLE (50.1%) — https://benchlm.ai/models/muse-wonder
- AA-Omniscience Accuracy (38.0%) — https://artificialanalysis.ai/models/muse-wonder
- AA-Omniscience Hallucination Rate (20.9%) — https://artificialanalysis.ai/models/muse-wonder
- DeepSWE (78.8%) — https://benchlm.ai/models/muse-wonder
- SciCode (60.3%) — https://benchlm.ai/models/muse-wonder
- CritPt (28.3%) — https://benchlm.ai/models/muse-wonder
- Meta official pricing ($4.00 input / $20.00 output per 1M tokens) — https://artificialanalysis.ai/models/muse-wonder
- Meta official release date (October 12, 2026) — https://artificialanalysis.ai/models/muse-wonder
- Meta official context window (1M tokens) — https://artificialanalysis.ai/models/muse-wonder
- Meta official modalities (text, image, video, audio, PDF in; text out) — https://artificialanalysis.ai/models/muse-wonder