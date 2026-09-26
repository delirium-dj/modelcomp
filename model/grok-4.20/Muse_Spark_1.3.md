# Grok 4.20 — findings by Muse Spark 1.3

- Source: xAI/Grok 4.20 (`opencode/grok-4.20`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (beta)
- **Short description:** xAI's early-2026 Grok 4.20 beta line (single + multi-agent deep-research variants): 2M-context reasoning tier with solid SWE-bench Verified (76.7%) at $1.25/$2.50. Top use case: value agentic coding with parallel multi-agent research options.
- **Provider / access:** xAI API (`grok-4.20-beta`, `grok-4.20-multi-agent-0309` family); OpenCode Zen ID `opencode/grok-4.20`.
- **Release / knowledge:** Beta cut tracked from Mar 2026 (BenchLM record Mar 10, 2026; multi-agent 0309 naming); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.20` (Zen-hosted; xAI native beta IDs above).
- **Context window:** 2,000,000 tokens for the beta single-agent cut (BenchLM record; pricepertoken); multi-agent variant 1M (xAI docs — verified). Higher rates at ≥200K prompt tokens on the multi-agent SKU.
- **Modalities:** Text + image in; text out; reasoning yes; function calling + structured outputs yes (xAI docs).
- **Pricing (as of 2026-09):** $1.25 input / $0.20 cached / $2.50 output per 1M below 200K prompt tokens ($2.50/$5.00 above on multi-agent SKU; batch −20%) — xAI docs + pricepertoken.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- ARC-AGI-2: **53.3%** (BenchLM Fable-5.1-vs-Grok-4.20 compare page, Sep 2026; vs Fable 5.1 90%)
- MMLU (full): **91.2%** (Tokenmix Grok 4 benchmark review, 2026)
- HLE without tools: **31.6%** (BenchLM compare page; vs Fable 5.1 60.9%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **54.33/100, #95 of 218** (BenchLM model record, 18 benchmark rows)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **76.7%** (BenchLM compare page; Tokenmix reports 78% on the same family)
- SWE-bench Pro: **51.8%** (BenchLM compare page; vs Fable 5.1 81.2%)
- LiveCodeBench Pro: **74.2%** (BenchLM compare page)
- Vibe Code Bench: **4.06%** (BenchLM compare page — verified weak spot)
- Coding Arena Elo: **1,385** (Tokenmix review)
- SciCode / AA-SciCode: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (2M window verified via BenchLM/pricepertoken; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 68/100.** Function-calling + multi-agent deep-research design is verified, but zero public agentic benchmark numbers (TB/Tau/GDPval/Claw) exist for this beta; capped at 68.
- **Reasoning: 76/100.** MMLU 91.2% is strong and ARC-AGI-2 53.3% mid-pack, but HLE-without-tools 31.6% is a clear knowledge-depth discount; capped at 76.
- **Context window: 98/100.** Verified 2M window (beta cut; multi-agent SKU 1M noted) clears the ≥1M tier; held below 100 for lack of any published full-length retrieval measurement.
- **Multimodal: 65/100.** Text + image in, text-only out — mid-band of the 60–70 image-in tier.
- **Coding: 77/100.** SWE-Verified 76.7% + LiveCodeBench Pro 74.2% with 1,385 Arena Elo is a credible value-coding triple, but SWE-Pro 51.8% trails the frontier and Vibe 4.06% is a verified floor; capped at 77.
- **Cost efficiency: 89/100.** $1.25/$2.50 paid pricing matches the ~$1.25/$4.25 (≈88) input reference with a much cheaper output leg — 89.
- **Overall Score: 77/100.** Mean of the five non-cost dims (68 + 76 + 98 + 65 + 77) / 5 = 76.8 → 77; best fit as a long-window value coder while it stays in beta pricing.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (xAI multi-agent beta docs, BenchLM model + compare pages, Tokenmix benchmark review, pricepertoken pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
