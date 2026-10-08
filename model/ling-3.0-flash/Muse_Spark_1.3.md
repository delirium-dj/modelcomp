# Ling 3.0 Flash — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's open-weight reasoning MoE (124B total / 5.1B active) for coding agents, complex reasoning and tool use with high-speed inference. Successor to Ling 2.6 Flash.
- **Provider / access:** InclusionAI + OpenCode Zen `opencode/ling-3.0-flash`; also OpenRouter `inclusionai/ling-3.0-flash`, Novita, DeepInfra.
- **Release / knowledge:** 2026-08-02/04 release (HF created 2026-08-02, AA Aug 4 2026); knowledge cutoff not disclosed.
- **IDs:** `opencode/ling-3.0-flash` (no Free ID on Zen — paid only).
- **Context window:** 262,144 total (AA 262K/260K) — verified.
- **Modalities:** Text in/out; reasoning (thinking on/off, Bailing V3 template); tool calls yes (Novita + DeepInfra live, toolCalling true).
- **Pricing (as of 2026-10-08):** $0.075/$0.22 per 1M (AA InclusionAI API, 80% cache discount, blended $0.05); OpenRouter $0.021/$0.063 (cache read $0.0042); HF inference 184 t/s Novita. MIT open weights (free self-host).
- **Architecture:** Hybrid-linear MoE 124B total / 5.1B active, MIT license, weights `inclusionAI/Ling-3.0-flash`.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- SWE-bench Pro (**agentic coding**): **56.6%** (HF model card eval-results, rank 18)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **22.7%** (HF model card eval-results, rank 42)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **20 / #3 of 65 open reasoning medium class** (AA; well above class median 8; speed #1/65 at 332.1 t/s, verbosity #10/65 at 260M tokens)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- AIME 2026: **93.2%** (HF model card, rank 17); HMMT Feb 2026: **87%** (HF model card, rank 7, size-rank 2 under 128B)

Coding:

- SWE-bench Verified / SWE-Pro: **56.6% Pro (HF model card rank 18)**; SWE-bench Multilingual **72.4% resolved** (HF model card, rank 13, size-rank 1 under 128B)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total.

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-Pro 56.6pct rank 18 is a real agentic-coding row + live tool-calling inference; capped with no Tau/GDPval/Claw rows.
- **Reasoning: 74/100.** HLE 22.7pct + AIME 93.2pct + HMMT 87pct + AA Index 20 (#3/65, above median 8); capped with no GPQA/LCR/CritPt/Omniscience rows.
- **Context window: 82/100.** 262K total verified (256K+ tier below 1M; speed #1/65 a plus); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only (no image input per AA) — floor tier.
- **Coding: 76/100.** SWE-Pro 56.6pct + Multilingual 72.4pct (size-rank 1 <128B); capped with no Verified/LCB/SciCode/Vibe rows.
- **Cost efficiency: 96/100.** MIT open weights + $0.021/$0.063 cheapest API (80pct cache discount, blended $0.05) — near-free frontier value.
- **Overall Score: 63/100.** Mean of five non-cost dims (70+74+82+15+76)/5 = 63.4 → 63; best for budget agentic coding where $0.02-in pricing + SWE-Pro signal beats text-only limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Ling 3.0 Flash page, HF model card eval-results, LLM Reference page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
