# Muse Spark 1.2 Free — findings by GLM 5.3

- Source: Meta (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Free-tier variant of Meta's Muse Spark 1.2 agentic/coding model (Aug 2026) — same weights as standard 1.2; the Contributor Free tier trades discounted tokens for training-data consent. Top use case: free long-horizon agentic coding fallback when 1.3 Free is unavailable.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses-style); standard tier via Meta API / gateways.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (prior Zen free tier; current Zen list carries paid `muse-spark-1.2`); standard Meta ID `muse-spark-1.2`.
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (xhigh effort); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free during the limited-time Contributor tier (data used to train future Meta models — do not use for confidential code); standard tier $1.25 in / $4.25 out per 1M (cache discount 88%).
- **Architecture:** proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM `muse-spark-1-2`; Vals harness 69.7%)
- GDPval-AA: **1631 Elo** (BenchLM; normalized 49.1%)
- Claw-Eval / ClawProBench: **no verified public score found** for this ID
- MCP-Atlas: **90.3%** (Benchgen, per community coverage of the 1.2 release)
- Tau3-Banking / Toolathlon: **no verified public score found** for this ID
- AA Agentic Index: **44.0%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA-GPQA via BenchLM)
- HLE: **45.5%** (AA-HLE via BenchLM)
- AA-LCR: **79.0%**; CritPt **17.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **40** (xhigh, AA #47/211)
- Omniscience Accuracy / Hallucination Rate: **45.4% / 33.3%** (BenchLM — relatively low hallucination)
- MMLU-Pro (Vals): **88.3%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **86.6%**
- DeepSWE: **59.3%** (BenchLM)
- SciCode / AA-SciCode: **57.4%** (BenchLM)
- AA Coding Index: **72.2%**; VulcanBench v3 **87.0%**; FrontierSWE v2 **12.0%** (BenchLM)
- LiveCodeBench / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (AA/BenchLM); AA-LCR 79.0% at long context; no MRCR retrieval number published for 1.2.

Multimodal (grounding):

- Design Arena Website **1318** (BenchLM); full text/image/speech/video input verified via AA specs.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 82.9% and MCP-Atlas 90.3% are strong; GDPval 1631 and Agentic Index 44.0% sit just under the frontier bars — clearly a notch below 1.3.
- **Reasoning: 85/100.** GPQA 90.4% and HLE 45.5% clear the frontier refs; AA-LCR 79.0% solid; CritPt 17.7% and AA Index 40 keep it mid-high rather than elite.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 1.2 to justify 100.
- **Multimodal: 90/100.** Text+image+speech+video input (90–100 band); no per-modality benchmark numbers published for this ID.
- **Coding: 82/100.** SWE-bench V 86.6%, SciCode 57.4% and Coding Index 72.2% clear frontier refs; DeepSWE 59.3% is well under the 74% bar and FrontierSWE v2 12.0% drags.
- **Cost efficiency: 100/100.** $0 in/out on the limited-time Contributor Free tier (standard tier would be ≈88 at $1.25/$4.25); free-tier caveat: prompts/completions may train future Meta models.
- **Overall Score: 87.4/100.** (85 + 85 + 95 + 90 + 82) / 5 = 87.4. Best-fit: strong free fallback for agentic coding with full multimodal input; 1.3 Free supersedes it where available.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
