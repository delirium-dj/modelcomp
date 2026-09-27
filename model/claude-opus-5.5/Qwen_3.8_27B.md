# Claude Opus 5.5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-opus-5-5
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family; enterprise Opus workhorse with adaptive thinking and 1M context; proprietary.
- **Provider / access:** Anthropic API (6 providers per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-09-22 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `anthropic/claude-opus-5-5` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs); 128K max output per repo meta.
- **Modalities:** Text + image in; text out; reasoning (adaptive) yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $4.00 in / $20.00 out per 1M on Anthropic API (Artificial Analysis; 95% cache discount).
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
- Artificial Analysis Intelligence Index: **58 / #1 of 211** (AA v4.3.2; median 26; 260M output tokens, very verbose; $5.98 per Index task)
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

- **Tool use: 88/100.** Top-of-class AA Intelligence Index 58 (#1/211) with agentic evals (AA-Briefcase, GDPval-AA, AutomationBench-AA) in the composite; 260M tokens (very verbose) and $5.98/task cap it below a perfect agentic-efficiency score; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 88/100.** Index 58 (#1/211) just under the frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image in, text out only (+image in = 60–70 band).
- **Coding: 88/100.** Composite includes SciCode and Terminal-Bench 4.0; #1 overall supports elite coding, but no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 50/100.** $4/$20 per 1M on Anthropic API sits between methodology's $3/$15 → ~60 and $10/$50 → ~30 bands; no free tier.
- **Overall Score: 85/100.** (88 + 88 + 95 + 65 + 88) / 5 = 84.8 → 85. Best fit: highest-stakes reasoning/coding runs where top intelligence beats cost; very verbose, so budget tokens accordingly.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
