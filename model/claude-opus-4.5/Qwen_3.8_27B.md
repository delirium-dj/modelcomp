# Claude Opus 4.5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-opus-4.5
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 Opus flagship (SOTA real-world software engineering at launch, 67% price cut vs prior Opus); deprecated on AA in favor of Opus 4.6+.
- **Provider / access:** Anthropic API (4 providers per AA); OpenCode Zen `opencode/claude-opus-4.5` (Messages API; paid).
- **Release / knowledge:** 2025-11-24 (Artificial Analysis FAQ); knowledge cutoff 2025-08-01.
- **IDs:** `anthropic/claude-opus-4.5`, `opencode/claude-opus-4.5` (no Free ID on Zen).
- **Context window:** 200K tokens (Artificial Analysis technical specs; matches repo meta).
- **Modalities:** Text + image in; text out (AA verified); reasoning no (AA tracks the non-reasoning variant; a reasoning variant may exist); tool calls yes.
- **Pricing (as of 2026-09-27):** $5.00 in / $25.00 out per 1M on Anthropic API (Artificial Analysis; 90% cache discount; Zen docs match).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase / GDPval-AA / AutomationBench-AA / Terminal-Bench 4.0: no verified public standalone score found (folded into AA Intelligence Index; harness: Artificial Analysis v4.3.2).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public standalone score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (included in AA Intelligence Index)
- LCR / MLCR: no verified public score found (AA-LCR included in Index)
- CritPt: no verified public score found (included in AA Intelligence Index)
- Artificial Analysis Intelligence Index: **24 (estimated) / #8 of 60** (AA v4.3.2, non-reasoning class; class median 15; 44.9 t/s #38 speed; TTFT 1.26s; $5/$25; deprecated status)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200K context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 64/100.** AA Index 24 (#8/60 non-reasoning class, above class median 15) with agentic evals in the composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 58/100.** Non-reasoning variant (direct responses); estimated Index 24 sits in methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 70/100.** 200K total context per AA specs (200K–500K tier, 200K = 70 per methodology).
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 64/100.** Composite (Index 24) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 47/100.** $5/$25 per 1M sits between methodology's $3/$15 → ~60 and $10/$50 → ~30 bands; no free tier.
- **Overall Score: 64/100.** (64 + 58 + 70 + 65 + 64) / 5 = 64.2 → 64. Best fit: direct-response Opus-class coding turns where 200K context suffices; superseded by Opus 4.6–5.5 for new work.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page + OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
