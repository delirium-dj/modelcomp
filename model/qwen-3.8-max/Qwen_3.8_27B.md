# Qwen3.8-Max — findings by Qwen 3.8 27B

- Source: Alibaba/qwen3-8-max
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (0902)
- **Short description:** Alibaba Cloud's flagship Qwen 3.8 sparse-MoE model with ~1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value; proprietary.
- **Provider / access:** Alibaba/DashScope API (1 provider per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-02 (Artificial Analysis FAQ, "0902" snapshot); knowledge cutoff not publicly stated.
- **IDs:** `alibaba/qwen3-8-max` (no Zen Free ID exists).
- **Context window:** ~984K tokens (Artificial Analysis technical specs; repo meta rounds to 1M / 131K out).
- **Modalities:** Text + image in; text out (AA verified); repo meta additionally lists video in — not confirmed on AA. Reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $2.00 in / $6.00 out per 1M on Alibaba API (Artificial Analysis; 88% cache discount); one-time 1M-token free quota per repo meta.
- **Architecture:** Proprietary; repo meta describes a ~2.4T sparse MoE (vendor parameter count not re-verified on AA).

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
- Artificial Analysis Intelligence Index: **45 / #24 of 211** (AA v4.3.2; median 26; 190M output tokens, very verbose; 39.3 t/s #162 speed; TTFT 2.98s; $5.41 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- ~984K context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 75/100.** AA Intelligence Index 45 (#24/211) with agentic evals in the composite; very verbose (190M tokens) and slow decode (39.3 t/s) cap agentic efficiency; low TTFT is a partial offset; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 77/100.** Index 45 interpolates between methodology mid-band (Index 20–35 → 55–65) and frontier band (Index 60+ → 90–100); no direct GPQA/HLE numbers found.
- **Context window: 94/100.** ~984K context per AA specs sits at the very top of the 500K–1M tier (85–94); just short of a full 1M window.
- **Multimodal: 65/100.** AA verifies text + image in, text out only (+image in = 60–70 band).
- **Coding: 76/100.** Composite (Index 45) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 73/100.** $2/$6 per 1M on Alibaba API sits between methodology's ~$1.25/$4.25 → ~88 and $3/$15 → ~60 bands; no sustained free tier.
- **Overall Score: 77/100.** (75 + 77 + 94 + 65 + 76) / 5 = 77.4 → 77. Best fit: long-context reasoning/research work at a flat, predictable price; budget for slow, verbose generation.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
