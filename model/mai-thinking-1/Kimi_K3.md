# MAI-Thinking-1 — findings by Kimi K3

- Source: Microsoft AI (`MAI-Thinking-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house reasoning model (public preview 2026-08-12 via Microsoft Foundry): 35B-active / ~1T-total sparse MoE trained from scratch (MAI-Base-1) with no third-party distillation. Claimed toe-to-toe with Claude Opus 4.6 on SWE-Bench Pro at mid-weight price.
- **Provider / access:** Microsoft Foundry catalog (`MAI-Thinking-1`) + playground (`mai-thinking-1-latest`); Chat Completions API-compatible; enterprise eval/observability stack via Foundry.
- **Release / knowledge:** announced Build 2026 (2026-06-02); public preview 2026-08-12; pre-training corpus spans code, academic, PDF text — cutoff not published.
- **IDs:** `MAI-Thinking-1` (Foundry). No OpenCode Zen Free ID verified; no public per-token price sheet found (Foundry preview billing).
- **Context window:** 256K tokens ("600-page document", microsoft.ai); max output not published.
- **Modalities:** text in → text out; adaptive internal chain-of-thought; function calling; multi-layer dev instructions; no vision/audio documented.
- **Pricing (as of 2026-10-09):** not published per-token; positioned as "mid-weight price" (vendor). Foundry preview access.
- **Architecture:** sparse MoE, 35B active / ~1T total (Foundry catalog + launch post); own RL framework + verified, deterministic, test-suite-graded coding environments; safety trained in the same RL reward loop.

### Raw benchmarks found

(Microsoft launch post = vendor; benchgen/evals.report = secondary aggregators; no AA/vals independent runs found)

Reasoning / knowledge:

- AIME 2025: **97.0%**; AIME 2026: **94.5%** (microsoft.ai launch post)
- MMLU-Pro: **85%** (benchgen)
- Blind human side-by-side (Surge raters, 1,276 tasks, single+multi-turn): **preferred over Claude Sonnet 4.6** (vendor)
- GPQA Diamond / HLE / CritPt / AA Intelligence Index: no verified public score found

Agent / tool use:

- BFCL v3: **72.0%** (benchgen)
- Function calling supported (Foundry card)
- Tau/Tau3 / Terminal-Bench / MCP Atlas: no verified public score found

Coding:

- SWE-Bench Pro: "toe-to-toe with Claude Opus 4.6" (vendor claim; exact % in image-only launch table, not text-extractable)
- SWE-Bench Verified: **73.5%** (benchgen)
- MAI-Thinking-1's launch table "leads with the highest scores across most [STEM and agentic coding] benchmarks" vs Sonnet 4.6 / Opus 4.6 / GPT-5.4 (image-only table — flagged)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 256K window documented; no MRCR/RULER/AA-LCR public score found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** BFCL 72% + native function calling + multi-instruction-layer training; capped by no independent agentic-suite runs (Tau, Terminal-Bench).
- **Reasoning: 84/100.** AIME 97.0/94.5 is near-ceiling math for the class, and winning blind human evals vs Sonnet 4.6 is a credible quality signal; capped by missing GPQA/HLE and an entirely vendor-sourced evidence base.
- **Context window: 74/100.** 256K token window documented; no independent long-context retrieval measurements.
- **Multimodal: 15/100.** Text-only per Foundry card and launch material — methodology floor.
- **Coding: 82/100.** Claimed parity with Opus 4.6 on SWE-Bench Pro plus 73.5% SWE-Bench Verified and purpose-built verified coding environments; capped because headline numbers are vendor-only.
- **Cost efficiency: 60/100.** "Mid-weight price" positioning with a 35B-active footprint suggests good $/quality for the class, but no public per-token pricing exists to verify — provisional.
- **Overall Score: 65/100.** Mean of 72/84/74/15/82 = 65.4 → 65. Best fit: Azure/Foundry enterprises wanting a clean-provenance reasoning model for math-heavy and agentic coding work, inside Microsoft's compliance stack.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (microsoft.ai launch post + Foundry model catalog, benchgen/evals.report benchmark aggregators, creeta Build-2026 coverage, awesomeagents profile); scores are normalized 1–100 interpretations, not official vendor scores. Note the benchmark evidence is predominantly vendor-reported; independent suites had no runs as of 2026-10-09.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
