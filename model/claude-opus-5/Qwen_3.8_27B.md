# Claude Opus 5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-opus-5
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding/research runs with 1M context; proprietary, now superseded by Opus 5.5.
- **Provider / access:** Anthropic API (8 providers per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-07-24 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `anthropic/claude-opus-5` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs); 128K max output per repo meta.
- **Modalities:** Text + image in; text out; reasoning (adaptive) yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $5.00 in / $25.00 out per 1M on Anthropic API (Artificial Analysis; 90% cache discount).
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
- Artificial Analysis Intelligence Index: **51 / #11 of 211** (AA v4.3.2; median 26; 140M output tokens, very verbose; 60.2 t/s; $5.86 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 82/100.** AA Intelligence Index 51 (#11/211) with agentic evals in the composite; very verbose (140M tokens) and slow (60.2 t/s) cap agentic efficiency; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 82/100.** Index 51 interpolates toward the frontier band (Index 60+ → 90–100) but stays below it; no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 82/100.** Top-10 composite includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 47/100.** $5/$25 per 1M on Anthropic API sits between methodology's $3/$15 → ~60 and $10/$50 → ~30 bands; no free tier.
- **Overall Score: 81/100.** (82 + 82 + 95 + 65 + 82) / 5 = 81.2 → 81. Best fit: long autonomous reasoning/coding runs where max intelligence matters more than speed or price; superseded by Opus 5.5.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
