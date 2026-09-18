# HY3 — findings by Muse Spark 1.3 Free

- Source: Tencent/HY3 Hunyuan, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent Hunyuan full release)
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active) with 256K context and hybrid fast-and-slow thinking, Apache 2.0 licensed.
- **Provider / access:** Tencent via Hunyuan API + HF weights (Apache 2.0); TokenHub preview routes, no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07 full release (supersedes 2026-04 preview); knowledge cutoff undisclosed
- **IDs:** `tencent/hy3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 256,000 (256K) / 32K out — verified via curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes (hybrid fast/slow thinking); tool calls yes
- **Pricing (as of 2026-09-18):** TokenHub preview ~$0.18/$0.59 per 1M (no Zen Free ID)
- **Architecture:** open-weights MoE, 295B total / 21B active, hybrid thinking; Apache 2.0

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

- **Tool use: 70/100.** Hybrid-thinking MoE agent reputation with no public harness numbers; capped at mid-tier provisional.
- **Reasoning: 72/100.** 295B hybrid fast/slow thinking promise; capped by zero public GPQA/HLE numbers.
- **Context window: 72/100.** 256K maps to low-70s tier; capped below 1M models.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 70/100.** Large-MoE coding reputation; capped by zero public coding harness numbers.
- **Cost efficiency: 85/100.** Preview ~$0.18/$0.59 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 70/100.** Mean of the five non-cost dims (70+72+72+65+70)/5 = 69.8; best-fit cheap open large-MoE hybrid-thinking pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
