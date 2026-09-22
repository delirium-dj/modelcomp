# Muse Spark 1.3 Contributor Free — findings by GLM 5.2 Coding

- Source: Meta (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** Meta's frontier agentic coding/reasoning model (Muse Spark 1.3 weights), offered free on OpenCode Zen under the "Contributor" SKU where submitted data may be used to improve Meta products. Top use case: long-horizon agentic coding and knowledge work at zero cost.
- **Provider / access:** OpenCode Zen, Responses API endpoint `https://opencode.ai/zen/v1/responses` (AI SDK: `@ai-sdk/openai`). Also on Meta's first-party API / Muse Code as paid `muse-spark-1.3`.
- **Release / knowledge:** Muse Spark 1.3 released 2026-09-02 (fourth Muse Spark release in five months); Contributor Free tier live on Zen as of 2026-09-21. Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free ID exists on Zen; input/output/cached all Free per Zen pricing table). Sibling paid SKUs: `opencode/muse-spark-1.3`, `opencode/muse-spark-1.2`.
- **Context window:** 1M tokens total (unchanged from 1.2), per Artificial Analysis model details (xhigh variant). Zen-side per-request caps not separately published.
- **Modalities:** Text, image, video input; text output; explicit reasoning mode (live; "max" reasoning pending safety testing per BenchLM tracker); tool calls via Responses API; JSON mode via API.
- **Pricing (as of 2026-09-21):** Free ($0 in / $0 out / Free cached read) on OpenCode Zen. Equivalent paid tier: $1.25/$4.25 per 1M in/out ($0.15 cached) on Meta's API. Caveat: Contributor tier data may be used to improve Meta products — do not use for confidential code.
- **Architecture:** Proprietary (weights not released); parameter count undisclosed.

### Raw benchmarks found

> Benchmarks below were verified via Artificial Analysis's launch article (xhigh variant, which the Contributor SKU shares weights with per BenchLM's tracker note that the contributor SKU differs only in pricing/data-consent) on 2026-09-21. Zen free-tier SKU itself is not separately benchmarked publicly.

Agent / tool use:

- Terminal-Bench 2.1: **85%** (Artificial Analysis, xhigh; +5 vs 1.2's 80%; max variant 86%)
- Tau3-Bench Banking: **47%** (Artificial Analysis, xhigh; 12-pt gain vs 1.2's 35%; max variant 52% = #1 among all models)
- GDPval-AA: **1709 Elo** (GDPval-AA v2, xhigh, Artificial Analysis; max variant 1754)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94%** (Artificial Analysis, xhigh; +4 vs 1.2's 90%)
- HLE: **47%** (Humanity's Last Exam, Artificial Analysis, xhigh; 1.2 was 45%)
- LCR / MLCR: **79%** (AA-LCR, xhigh; −4 vs 1.2's 83%; max also 79%)
- CritPt: **26%** (Artificial Analysis, xhigh; +8 vs 1.2's 18%)
- Artificial Analysis Intelligence Index: **61** (v4.x at launch, xhigh; ties GPT-5.6 Sol (max) and Grok 4.6 (high); max variant 62, behind only Claude Fable 5.1 and Claude Opus 5)
- Omniscience Accuracy: **42%** (AA-Omniscience accuracy, xhigh; 1.2 was 45%; drop driven by higher abstention, which also lowered hallucination rate)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: **59%** (Artificial Analysis, xhigh; +2–3 vs 1.2's 56%)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (BenchLM profile has only 13/447 benchmark slots with displayable evidence; no coding numbers public)

Long context:

- 1M-token window confirmed (Artificial Analysis); no MRCR/RULER/GraphWalks retrieval number publicly verified for 1.3 — AA-LCR 79% (above) is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 85%, Tau3-Banking 47%, GDPval-AA 1709 all sit at or just under the frontier refs (88%+/50%+/1750+); capped by Claw-Eval/Toolathon being unverified.
- **Reasoning: 92/100.** GPQA 94% and Index 61 clear the frontier refs (90%+/60+), HLE 47% above the 40% frontier ref; capped by CritPt 26% and the AA-LCR regression (−4 vs 1.2).
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 85/100.** Text + image + video input with text-only output (no audio in, no non-text out) per Artificial Analysis.
- **Coding: 90/100.** TB2.1 85% + SciCode 59% (> 55% frontier ref) with agentic-coding called out as the core gain vs 1.2; capped by no public SWE-bench Verified/LiveCodeBench/DeepSWE numbers for 1.3.
- **Cost efficiency: 100/100.** $0 in/$0 out on Zen (Free ID exists); paid equivalent $1.25/$4.25 with the lowest cost per Intelligence Index task ($0.55) at its level. Free tier is time-limited and has a training-data caveat.
- **Overall Score: 91.4/100.** (90+92+100+85+90)/5 — best default for agentic coding/knowledge work while the free tier lasts; treat as near-frontier (Index 61, tied with GPT-5.6 Sol max / Grok 4.6 high).

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-21
- Method: public internet research (Artificial Analysis launch article + model tracker, OpenCode Zen docs) on 2026-09-21; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.