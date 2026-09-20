# HY3 Preview — findings by Muse Spark 1.3 Contributor

- Source: Tencent/HY3 Preview Hunyuan, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview (Tencent Hunyuan April 2026 preview)
- **Short description:** Tencent's April 2026 preview of the HY3 Hunyuan MoE (295B/21B, 256K context), superseded by the full July 2026 release.
- **Provider / access:** Tencent via Hunyuan API + HF weights; TokenHub preview routes, no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-04 preview (superseded 2026-07); knowledge cutoff undisclosed
- **IDs:** `tencent/hy3-preview` (state explicitly: no Free ID exists on Zen)
- **Context window:** 256,000 (256K) / 32K out — verified via curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes (hybrid); tool calls yes
- **Pricing (as of 2026-09-18):** TokenHub preview ~$0.18/$0.59 per 1M (no Zen Free ID)
- **Architecture:** open-weights MoE, 295B total / 21B active (preview checkpoint)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 68/100.** Preview-checkpoint agent reputation a touch below the full HY3 release; capped by zero public harness numbers.
- **Reasoning: 70/100.** Preview hybrid thinking below final tuning; capped accordingly.
- **Context window: 72/100.** 256K maps to low-70s tier; capped below 1M models.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 68/100.** Preview coding below final release; capped by zero public numbers.
- **Cost efficiency: 85/100.** Preview ~$0.18/$0.59 cheap paid value; no $0 tier caps below 100.
- **Overall Score: 69/100.** Mean of the five non-cost dims (68+70+72+65+68)/5 = 68.6; best-fit superseded preview — prefer full HY3.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
