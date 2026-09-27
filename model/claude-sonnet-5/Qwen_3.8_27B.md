# Claude Sonnet 5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-sonnet-5
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus; proprietary.
- **Provider / access:** Anthropic API (9 providers per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-06-30 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `anthropic/claude-sonnet-5` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs); 128K max output per repo meta.
- **Modalities:** Text + image in; text out (AA verified); repo meta additionally lists file in — not confirmed on AA. Reasoning (adaptive) yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $2.00 in / $10.00 out per 1M on Anthropic API (Artificial Analysis; 90% cache discount).
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
- Artificial Analysis Intelligence Index: **38 / #54 of 211** (AA v4.3.2; median 26; 370M output tokens, very verbose (#97/211); 83.9 t/s; $5.09 per Index task; TTFT 161.7s)
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

- **Tool use: 72/100.** AA Intelligence Index 38 (#54/211) includes agentic evals; very verbose (370M tokens, #97) and high TTFT cap agentic efficiency; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 71/100.** Index 38 interpolates between methodology mid-band (Index 20–35 → 55–65) and frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** AA verifies text + image in, text out only (+image in = 60–70 band).
- **Coding: 72/100.** Composite (Index 38) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 73/100.** $2/$10 per 1M on Anthropic API sits between methodology's ~$1.25/$4.25 → ~88 and $3/$15 → ~60 bands; no free tier.
- **Overall Score: 75/100.** (72 + 71 + 95 + 65 + 72) / 5 = 75. Best fit: agentic-era coding/agent work at Sonnet prices with 1M context; watch token budgets (very verbose at max effort).

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
