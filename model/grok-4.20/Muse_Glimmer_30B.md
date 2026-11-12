# Grok 4.20 0309 v2 — findings by Muse Glimmer 30B

- Source: SpaceXAI / grok-4-20
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.20 0309 v2 (Reasoning)
- **Short description:** SpaceXAI proprietary reasoning model released April 2026 with 2M token context and text+image input. Deprecated in favor of Grok 4.3; reasoning variant with extended thinking.
- **Provider / access:** SpaceXAI API `x-ai/grok-4-20` and Microsoft Azure OpenAI Service. Chat Completions API with function calling and JSON mode support per provider benchmark.
- **Release / knowledge:** 2026-04-07 per Artificial Analysis FAQ; knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4-20` ; `groq/grok-4-20` via providers.
- **Context window:** 2.0M tokens total, verified by Artificial Analysis technical specifications.
- **Modalities:** Input text and image; Output text. Reasoning yes, tool calls/function calling yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** SpaceXAI $1.25 / 1M input, $2.50 / 1M output, cache discount 84% per Artificial Analysis; blended ~$0.64 / 1M. Azure ~ $2.00/$6.00.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Sources: Artificial Analysis model page for Grok 4.20 0309 v2 2026-10, provider comparison page 2026-10, and FAQ section. No official xAI model card publicly reachable; data from independent benchmarking.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **26 estimated** — #118/215, below median 27
- Terminal-Bench 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **26 estimated** — composite of AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR v1.1 included in Intelligence Index; no separate public long-context retrieval score found. Context window verified 2M.

### Normalized scores (1–100)

- **Tool use: 40/100.** Function calling supported via providers and Intelligence Index includes agentic evaluations, but no independent Terminal-Bench/Claw scores and low composite Intelligence Index caps score.
- **Reasoning: 35/100.** Artificial Analysis Intelligence Index 26 estimated places it below median for price tier; no public GPQA/HLE numbers to offset.
- **Context window: 95/100.** 2.0M tokens verified on independent benchmark page; competitive with frontier multimodal models. No public RULER/GraphWalks number.
- **Multimodal: 60/100.** Text and image input with text output verified; no independent MMMU-Pro or visual reasoning score found.
- **Coding: 35/100.** No verified SWE-bench/LiveCodeBench/SciCode public scores; composite Index includes SciCode/Terminal-Bench but overall low.
- **Cost efficiency: 85/100.** $1.25/$2.50 pricing is competitively priced vs median $2.00/$10.00 and fast 116.6 t/s output speed.
- **Overall Score: 53/100.** Mean of five quality dims (40+35+95+60+35)/5 = 53.0. Best-fit as low-intelligence, large-context reasoning model with strong price/performance but limited independent benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Grok 4.20 — findings by Muse Glimmer 30B

- Source: xAI / grok-4.20
- Archived date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

### Model card

- **Name:** Grok 4.20
- **Short description:** xAI March/April 2026 reasoning flagship with 2M window and multi-agent mode per repo meta.
- **Provider / access:** xAI API docs.x.ai/developers/models/grok-4.20 referenced in repo meta; OpenRouter x-ai/grok-4.20.
- **Release / knowledge:** Conflicting internal findings: 2026-03-31 vs 2026-03-10; knowledge cutoff Sep 1 2025 per GPT_5.md.
- **IDs:** x-ai/grok-4.20
- **Context window:** Repo meta 1,000,000-2,000,000 tokens; conflicting reports.
- **Modalities:** Text, image, file/PDF in; text out per repo meta.
- **Pricing as of 2026-10-24:** Conflicting: $1.25/$2.50 vs $2.00/$6.00 per repo findings.
- **Architecture:** Proprietary; parameter count undisclosed.

## Raw benchmarks found

SELF-EXCLUSION: No verified public benchmark numbers found for this exact model/ID in independent, citable sources at time of research via public web search 2026-10-24. Public web searches for `grok-4.20` / `grok 4.20 x.ai` return only generic Grok pages; no official xAI model card, benchmark review or independent article for `grok-4.20` is publicly reachable. All verifiable data is internal to the modelcomp repo.

Agent / tool use:
- no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:
- no long-context retrieval reported in publicly accessible numeric form

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
