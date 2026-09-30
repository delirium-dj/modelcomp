# Mistral Medium 3.5 — findings by Muse Spark 1.3

- Source: Mistral AI/Mistral Medium 3.5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's first flagship merged model — a dense 128B open-weight model unifying instruction-following, reasoning, and coding, powering Le Chat Work mode and Vibe remote agents. Best fit for self-hosted agentic coding on four GPUs.
- **Provider / access:** Mistral AI (La Plateforme, Le Chat, Vibe); OpenCode Zen `opencode/mistral-medium-3.5`. Chat Completions + Conversations + Agents APIs.
- **Release / knowledge:** GA 2026-04-28/29 (docs v26.04; agentic-Vibe blog 2026-05-22); knowledge cutoff: no verified public statement found
- **IDs:** `opencode/mistral-medium-3.5` (paid tier; cost scored on paid pricing)
- **Context window:** 256K total tokens (256K in/out) — verified via Mistral docs, llm-stats model page, and Mistral launch blog
- **Modalities:** Text and image in (vision encoder trained from scratch for variable sizes/aspect ratios); text out; configurable per-request reasoning effort; function calling, structured outputs, built-in tools yes
- **Pricing (as of 2026-09-23):** $1.50/$7.50 per 1M in/out (verified via Mistral blog, docs, and llm-stats). No $0 tier — paid only.
- **Architecture:** Dense 128B, open weights under a modified MIT license — note: the license restricts commercial use (non-commercial self-host; API use is the commercial route)

### Raw benchmarks found

> Vendor rows are Mistral's official launch figures (launch blog, via BenchLM/llm-stats scorecards). Aggregator rows are third-party listings, marked as such.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: Tau3-Telecom **91.4** (Mistral official); Tau3 Retail **76.1** (third-party listing via llm-stats compare)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- COLLIE (instruction-constraint proxy): **95.8%** (third-party listing via llm-stats compare)
- BenchLM category rollups: Agentic 45.9 (#84/143), Coding 45.1 (#114/148) — index rollups, noted, not scored on

Reasoning / knowledge:

- GPQA Diamond: **74.8** (aggregator-listed via PricePerToken brand compare — vendor-official status unconfirmed, provisional)
- HLE: **13.8** (aggregator-listed via PricePerToken — provisional)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- AIME 2025 (math proxy): **86.3%** (third-party listing via llm-stats compare)
- IFBench: **68.8** (aggregator-listed via PricePerToken — provisional)

Coding:

- SWE-bench Verified / SWE-Pro: Verified **77.6%** (Mistral official — ahead of Devstral 2 and Qwen3.5-397B-A17B per launch blog); SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: PricePerToken coding value 46.9 (index, noted only); no verified public score found

Long context:

- 256K window verified; no verified MRCR/RULER/GraphWalks retrieval percentage found — extreme-end retrieval unscored

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau3-Telecom 91.4 (narrow slice) with Retail 76.1 shows real tool-calling chops, but zero Terminal-Bench/GDPval/Claw evidence caps it in the low 70s.
- **Reasoning: 68/100.** Aggregator-listed GPQA 74.8 and HLE 13.8 sit squarely mid-band; AIME 86.3% is the bright spot but vendor-official reasoning numbers are thin.
- **Context window: 72/100.** 256K lands mid-band of the 200–500K tier; no retrieval-percentage evidence to push higher.
- **Multimodal: 65/100.** Text-plus-image in (fresh vision encoder) with text-only output — mid image-in band, no video/audio evidence.
- **Coding: 78/100.** Vendor SWE-V 77.6% is a strong single number, but with no LiveCode/SWE-Pro/DeepSWE corroboration it caps below 80+.
- **Cost efficiency: 80/100.** $1.50/$7.50 paid pricing with a 4-GPU self-host option (non-commercial license) — mid-scale pricing, neither cheap nor flagship-expensive.
- **Overall Score: 71/100.** Mean of (72 + 68 + 72 + 65 + 78) / 5 = 71.0 → 71; best fit as a self-hostable European agentic-coding option.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (Mistral launch blog and docs, llm-stats model and compare pages, BenchLM 128B page, PricePerToken brand compare, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
