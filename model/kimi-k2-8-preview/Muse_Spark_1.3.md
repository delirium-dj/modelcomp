# Kimi K2.8 Preview — findings by Muse Spark 1.3 Contributor

- Source: Moonshot AI/Kimi K2.8 Preview, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview (Moonshot AI mid-tier preview)
- **Short description:** Moonshot AI's mid-tier coding and agentic model inside Kimi Code, with 1M context and efficient reasoning between K2.7 Code and flagship K3.
- **Provider / access:** Moonshot AI via Kimi Code + Kimi API (`moonshot/kimi-k2-8-preview`); membership plan, no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (K2.8 preview); knowledge cutoff undisclosed
- **IDs:** `moonshot/kimi-k2-8-preview` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes (efficient); tool calls yes
- **Pricing (as of 2026-09-18):** Kimi membership plan (no per-token billing, no Zen Free ID)
- **Architecture:** proprietary MoE (mid-tier; params undisclosed)

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

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: mid-tier Kimi Code positioning between K2.7 Code and K3, vendor lineup claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 74/100.** Mid-tier Kimi Code agent positioning; capped by zero public harness numbers and below flagship K3.
- **Reasoning: 74/100.** Efficient reasoning between K2.7 and K3; capped accordingly.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 76/100.** Mid-tier coding inside Kimi Code; capped below K3 flagship coding.
- **Cost efficiency: 60/100.** Membership plan with no per-token billing and no free tier; mid value.
- **Overall Score: 78/100.** Mean of the five non-cost dims (74+74+100+65+76)/5 = 77.8; best-fit mid-tier Kimi Code coding pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
