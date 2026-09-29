# Grok Build 0.1 — findings by Qwen 3.8 27B

- Source: xAI (opencode/grok-build-0.1)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding-focused model for agentic software, engineering, and workflow tasks; per xAI docs its aliases are `grok-code-fast-1` / `grok-code-fast` / `grok-code-fast-1-0825`, so BenchLM's "Grok Code Fast 1" listing is the same model under its alias.
- **Provider / access:** OpenCode Zen `opencode/grok-build-0.1` via `https://opencode.ai/zen/v1/responses` (Responses API, `@ai-sdk/openai`); xAI native API model `grok-build-0.1` (docs.x.ai; regions us-east-1, us-west-2; 37 req/s, 10M tok/min).
- **Release / knowledge:** release date not stated on fetched pages; alias suffix `grok-code-fast-1-0825` suggests an Aug 25 snapshot; knowledge cutoff not disclosed.
- **IDs:** `opencode/grok-build-0.1` on Zen (verified present in the live `https://opencode.ai/zen/v1/models` list); xAI API ID `grok-build-0.1`; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` (xAI docs). No Free ID on Zen.
- **Context window:** 256,000 total with up to 256,000 output tokens (xAI docs + models.dev opencode toml, fetched this session; BenchLM lists 256K; repo meta.json says 128K — contradicted by both fetched sources).
- **Modalities:** text + image in, text out (xAI docs model page); function calling yes, structured outputs yes, reasoning yes (xAI docs). Repo meta.json says text in/out only — unverified conflict, image input noted as vendor-stated only.
- **Pricing (as of 2026-09-29):** Zen paid: $1.00 input / $2.00 output / $0.20 cached read per 1M (no Free ID). xAI native: <200k prompt tokens $1.00/$0.20 cached/$2.00; ≥200k prompt tokens $2.00/$0.40 cached/$4.00 per 1M (all prompts billed at the higher rate once the 200k threshold is reached).
- **Architecture:** proprietary; parameter count not disclosed (BenchLM tags it Proprietary / Non-Reasoning, while xAI docs list reasoning support — noted discrepancy).

### Raw benchmarks found

Agent / tool use:

- Gert Labs (agentic): **49.15%** (BenchLM `grok-build-0-1`, direct listing, 1 of 486 benchmarks covered)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: τ²-bench **75.7%** (BenchLM "Grok Code Fast 1" listing — xAI docs list grok-code-fast-1 as an alias of grok-build-0.1, so treat as provisional for this exact ID)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.7%** (AA-GPQA, BenchLM "Grok Code Fast 1" alias listing)
- HLE: **8.0%** (AA-HLE, BenchLM alias listing)
- LCR / MLCR: AA-LCR **53.0%** (BenchLM alias listing)
- CritPt: **0.0%** (BenchLM alias listing)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **14.1**; BenchLM overall **32.07 / #157 of 514** (alias listing; the direct `grok-build-0-1` entry is unranked with no overall score)
- Omniscience Accuracy / Hallucination Rate: **23.5% / 79.3%** (AA, BenchLM alias listing)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified **70.8%** (BenchLM alias listing); SWE-Pro: no verified public score found
- LiveCodeBench: **62.0%** (Vals harness, BenchLM alias listing)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found; AA-IFBench **41.4%** (BenchLM alias listing)

Long context:

- no long-context retrieval benchmark (MRCR/RULER) reported; 256K window per xAI docs and models.dev toml

### Normalized scores (1–100)

- **Tool use: 55/100.** Gert Labs 49.15% is the only direct agentic row (TB-class, inside the mid 45–60% → 50–70 band) and the alias-listed τ²-bench 75.7% is mid-strong, but the absence of any TB2.1, Tau3, GDPval, or Claw-Eval evidence caps the score.
- **Reasoning: 48/100.** GPQA 72.7% is mid-band and LCR 53.0% is upper-mid, but AA Index 14.1 sits below the mid 20–35 band, HLE 8.0% is under 10%, and a 79.3% hallucination rate hold it under 55.
- **Context window: 72/100.** 256K total lands in the 200K–500K tier (65–84, with 200K = 70), slightly above the floor with no measured retrieval score.
- **Multimodal: 60/100.** xAI docs list image input (+image in = 60–70 band), scored at the band bottom because no image benchmarks exist and the repo meta lists text-only.
- **Coding: 62/100.** SWE-bench Verified 70.8% is respectable but LiveCodeBench 62.0% is far below the ~80% mid anchor and no SciCode or SWE-Pro numbers exist, capping it under the frontier band.
- **Cost efficiency: 90/100.** $1.00/$2.00 per 1M on Zen ($0.20 cached read) sits between the ~$0.60/$2.20 ≈92 and ~$1.25/$4.25 ≈88 anchors, with the xAI ≥200k tier rising to $2.00/$4.00.
- **Overall Score: 59.4/100.** Mean of the five quality dims (55+48+72+60+62)/5 = 59.4 — a mid-tier agentic coding model worth using mainly for its cheap token pricing, not its benchmark profile.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (opencode.ai/docs/zen + /zen/v1/models, docs.x.ai model and models pages, models.dev opencode toml, benchlm.ai grok-build-0-1 and grok-code-fast-1, benchmarklist.com and artificialanalysis.ai lookups — both 404; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
