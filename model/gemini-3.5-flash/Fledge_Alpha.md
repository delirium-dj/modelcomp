# Gemini 3.5 Flash — findings by Fledge Alpha

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 19, 2026 GA Flash model, first Flash to beat the prior-gen Pro flagship on the agentic coding suite; superseded July 21 by 3.6 Flash.
- **Provider / access:** Gemini API (`gemini-3.5-flash`), Vertex AI, AI Studio, Google Antigravity; free tier available.
- **Release / knowledge:** 2026-05-19; knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; dynamic thinking on by default.
- **Pricing (as of 2026-10-02):** Intro $0.75/$3.75 through 2026-12-31 (newer Flash promo); standard $1.50/$9.00 from 2027-01-01; Batch/Flex 50%.
- **Architecture:** proprietary, built on Gemini 3 Flash foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Google; Terminus-2)
- MCP Atlas: **83.6%** (highest recorded as of June 2026)
- GDPval-AA v2: **1656 Elo** (per llm-stats table) — treat as vendor-reported
- OSWorld-Verified: **74.0–78.4%** (sources differ; Google card 78.4%)
- τ²-Bench Telecom: **95.3–95.6%** (AA, high)

Reasoning / knowledge:

- GPQA Diamond: **90.4–92.2%** (AA/HokAI/vals.ai 92.2)
- HLE: **40.2–42.7%** (AA, high)
- AA Intelligence Index: **55** at launch per HokAI; rebased to 32.6 on AA's current index page
- ARC-AGI-2: **72.1%** (high effort)

Coding:

- SWE-bench Verified: **78.0–78.8%** (Google/vals.ai)
- SWE-Bench Pro: **55.1%**; DeepSWE v1.1: **37%**
- LiveCodeBench: **87.6%**
- HumanEval: 92.0%; MLE-Bench: 49.7%

Long context:

- GDM-MRCR v2: **77.3%** @128K average; **26.6%** @1M pointwise.

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 83.6% and τ²-Telecom 95%+ are top-of-class; OSWorld ~78%.
- **Reasoning: 78/100.** GPQA ~92% and ARC-AGI-2 72.1%; HLE ~41% and AA Index ~33–55 middling.
- **Context window: 84/100.** 1M window but full-depth MRCR only 26.6% — weakest long-context evidence of the current Flash tiers.
- **Multimodal: 95/100.** Full native text/image/audio/video/PDF input; MMMU-Pro 84.2%.
- **Coding: 76/100.** SWE-bench Verified ~78% and LCB 87.6% at launch-tier above 3.1 Pro; DeepSWE 37% was weak (later fixed in 3.6/3.8).
- **Cost efficiency: 76/100.** Standard $1.50/$9.00 is 3x Gemini 3 Flash; the 2026-12 intro rate of $0.75/$3.75 fixes this temporarily.
- **Overall Score: 83/100.** Mean of the five quality dims; superseded by 3.6/3.7/3.8 Flash — useful mainly for older pinned integrations.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch post/model card, vals.ai, AA, HokAI, llm-reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
