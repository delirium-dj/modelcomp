# Grok 4.5 — findings by Big Pickle

- Source: xAI (`grok-4.5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (SpaceXAI / xAI)
- **Short description:** xAI's July 2026 frontier model for coding, agentic tasks and knowledge work — strong open-run terminal/SWE agent with vision input, positioned as an Opus-class alternative at lower price.
- **Provider / access:** xAI API (`grok-4.5`), OpenRouter, Amazon Bedrock, wired into Cursor at launch; OpenCode Zen `opencode/grok-4.5`. Chat Completions-compatible.
- **Release / knowledge:** Released 2026-07-08; knowledge cutoff not documented.
- **IDs:** `grok-4.5` / `opencode/grok-4.5` (paid on Zen; no Free ID known).
- **Context window:** 500,000 tokens (500K); verified via provider listings.
- **Modalities:** Text + image input (vision), text output; reasoning/tool calling, caching. No audio input / non-text output.
- **Pricing (as of 2026-09-23):** $2.00 in / $6.00 out per 1M (cached input $0.30). Zen "standard pricing", exact rate not verified.
- **Architecture:** Proprietary; params undisclosed; not open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **83.3%** (xAI; vs GPT-5.4 75.1%)
- GDPval-AA: **1430** (modelscale)
- AA Agentic index: **81.7** (modelscale capability evidence)
- Tau3-Banking: **beats GPT-Live-1's 32.0%** (llm-stats shared eval; exact Grok 4.5 value not printed)
- Terminal-Bench 3.0: **15.7%** (xhigh; leader = Claude Opus 5 at 42.7%)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.0–93.1%** (xAI; AA GPQA 93.1)
- HLE: **42.7%** (AA)
- AA-Omniscience Index: **63.0** (xAI via llm-stats)
- Artificial Analysis Intelligence Index: **38.8** (modelscale; modest vs frontier 55+)
- BenchLM public estimate: **74.71/100, rank #18** (vs GPT-5.4 72.89)
- MMLU: no verified public score found

Coding:

- SWE-Bench Pro: **64.7%** (vs GPT-5.4 57.7%, most published leaders 60-63%)
- DeepSWE 1.0: **62.0%**
- LiveCodeBench (Vals AI run): **87.4%**; SWE-bench Verified (Vals run): **86.6%**
- AA Coding Index: **72.5**; AA SciCode: **55.0%**

Long context:

- 500K documented with no verified MRCR/RULER-type retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.0 83.3% and Agentic index 81.7 sit just under the 88%+ frontier ref; GDPval-AA 1430 and a Tau3 edge are strong, but TB3.0 15.7% and no TB2.1/Toolathon proof cap it.
- **Reasoning: 87/100.** GPQA 93.1% and HLE 42.7% reach frontier refs; the AA Intelligence Index 38.8 is comparatively modest and drags the otherwise elite profile down a notch.
- **Context window: 88/100.** 500K places it in the 500K–1M tier (85-94); without published retrieval numbers it holds mid-tier of that band.
- **Multimodal: 65/100.** Vision (image) input supported; no audio/video input or non-text output.
- **Coding: 84/100.** SWE-Bench Pro 64.7% and DeepSWE 62.0% are top-tier open numbers; AA Coding Index 72.5 and LCB 87.4 support a high-80s reading, capped below DeepSWE-74%+/90+.
- **Cost efficiency: 85/100.** $2/$6 is the budget frontier price (~85 on the $1.25/$4.25→88 / $3/$15→60 scale); cache rates are cheap.
- **Overall Score: 82/100.** (87 + 87 + 88 + 65 + 84) / 5 = 82.2 → 82. Best-fit: high-value agentic coding/SWE at mid price; watch the 500K window if you need full codebase retrieval.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (xAI listings, BenchLM, llm-stats, modelscale, price trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.1_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).