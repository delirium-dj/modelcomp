# Grok Build 0.1 — findings by Muse Spark 1.3

- Source: xAI/Grok Build 0.1 (`opencode/grok-build-0.1`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's May 2026 fast coding model (public beta): the model that powers Grok Build, tuned for agentic web dev/debugging/MCP work at 100+ tok/s and $1/$2. Top use case: high-velocity in-harness coding assistance (Grok Build, Cursor, OpenCode, Kilo).
- **Provider / access:** xAI API (`grok-build-0.1`); OpenRouter (`x-ai/grok-build-0.1`); Vercel AI Gateway; OpenCode Zen ID `opencode/grok-build-0.1`.
- **Release / knowledge:** 2026-05-20 first listing (OpenRouter/BenchLM radar); API public beta 2026-05-29 (xAI news). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-build-0.1` (Zen-hosted; xAI native `grok-build-0.1`).
- **Context window:** 256K (OpenRouter listing via BenchLM; folder meta.json "128K total" is a generic stub — 256K provider listing preferred as verified). No public retrieval-at-length numbers found.
- **Modalities:** Text + image in; text out; no explicit reasoning mode documented (BenchLM: Non-Reasoning); tool support yes.
- **Pricing (as of 2026-05):** $1.00 input / $0.20 cached / $2.00 output per 1M (xAI news; BenchLM blended $1.50).
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- BenchLM Agentic category: **27.7, #136 of 143 (5th percentile), 1 verified benchmark** (BenchLM model record — verified weak standing)
- Gert Labs: **49.15%** (BenchLM Composer-2.5 compare page — single verified row)
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
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (unranked: 1 of 416 tracked slots with evidence)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** ("fastest coding model" is an xAI speed claim, not a benchmark result)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (256K window verified via provider listing; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 55/100.** The only verified agentic signals are weak — BenchLM Agentic 27.7 (#136/143) and a single Gert Labs 49.15% row; xAI's harness-fit claims (Grok Build/Cursor/OpenCode) are qualitative. Capped at 55.
- **Reasoning: 60/100.** Provisional floor for a documented Non-Reasoning fast model with zero public reasoning numbers; capped hard pending any GPQA/HLE/Index coverage.
- **Context window: 74/100.** Verified 256K sits just above the 200K (= 70) anchor in the 200K–500K tier; no retrieval evidence.
- **Multimodal: 65/100.** Text + image in, text-only out — mid-band of the image-in tier.
- **Coding: 68/100.** xAI positions it as a purpose-trained agentic coding model (web dev, debugging, MCP) at 100+ tok/s, but zero public code benchmarks exist to validate the claim; capped at 68.
- **Cost efficiency: 90/100.** $1/$2 paid pricing straddles the $0.60/$2.20 (≈92)–$1.25/$4.25 (≈88) value band — 90 on balance.
- **Overall Score: 64/100.** Mean of the five non-cost dims (55 + 60 + 74 + 65 + 68) / 5 = 64.4 → 64; best fit as a fast in-harness drafting model, not a verified agent or reasoner.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (xAI Grok Build 0.1 API news post, BenchLM model + compare pages, pricepertoken provider table, tech-insider/Grok Build product coverage for lineage context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
