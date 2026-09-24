# Muse Spark 1.3 Contributor Free — findings by GLM 5.3

- Source: Meta (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** Free Zen tier of Meta's Muse Spark 1.3 agentic/coding flagship (Sept 2026). Same weights as standard 1.3; pricing + data-consent differ. Top use case: long-horizon coding/agentic work at $0.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses-style, `@ai-sdk/openai`). Also Meta API and other gateways for the standard tier.
- **Release / knowledge:** 2026-09-02; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Zen Free ID, limited time); standard tier `opencode/muse-spark-1.3` / Meta `muse-spark-1.3`.
- **Context window:** 1M tokens total (verified via Artificial Analysis technical specs and BenchLM).
- **Modalities:** text/image/video in; text out; reasoning yes (xhigh effort default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free on Zen (limited-time Contributor tier: heavily discounted tokens in exchange for permission to use prompts/completions to train future Meta models — do not use for confidential code); standard tier $1.25 in / $4.25 out per 1M (Meta API, cache discount 88%).
- **Architecture:** proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM `muse-spark-1-3`; Vals harness 72.3%)
- Tau3-Banking (AA harness): **50.5%** (BenchLM `aatau3banking`)
- GDPval-AA: **1754 Elo** (BenchLM; normalized 58.7%)
- Claw-Eval / ClawProBench: **no verified public score found**
- AA Briefcase Elo: **1597** (BenchLM); AA Agentic Index **55.7%**; OSWorld 2.0 **66.9%**; AA AutomationBench **57.9%**; JobBench **64.9%**; DeepSearchQA **89.4%**
- MCP-Atlas: **90.3%** (Benchgen, per Meta/community coverage of the 1.2→1.3 line; treat as provisional for 1.3)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA-GPQA via BenchLM)
- HLE: **48.7%** (AA-HLE via BenchLM)
- MRCR v2: **98.5%** (256K–512K) / **98.1%** (512K–1M) (BenchLM); AA-LCR **83.0%**; MLCR-AA **43.3%**
- CritPt: **24.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **45** (xhigh, AA #25/211; BenchLM lists 48.1)
- Omniscience Accuracy / Hallucination Rate: **43.6% / 32.9%** (BenchLM AA-Omniscience)

Coding:

- DeepSWE: **75.4%** (BenchLM)
- SWE-Atlas Codebase QnA: **59.4%** (BenchLM)
- SciCode / AA-SciCode: **58.8%** (BenchLM)
- AA Coding Index: **75.8%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found** for this exact ID (DeepSWE/SWE-Atlas used as primary coding evidence)
- Terminal-Bench 4.0: **no verified public score found**

Long context:

- MRCR v2 98.5% at 256K–512K and 98.1% at 512K–1M (BenchLM) — verified ≥98% retrieval into the 1M band.

Multimodal (grounding):

- Design Arena Website **1365** (BenchLM); image/video input supported per AA specs.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 88.8%, Tau3 50.5% and GDPval 1754 all sit at the frontier references (88%+/50%+/1750+); OSWorld 66.9% and AA Agentic Index 55.7% are class-leading. Only missing Claw-Eval keeps it from 100-band top.
- **Reasoning: 92/100.** GPQA 93.5% and HLE 48.7% clear the frontier bars; MRCR 98%+ to 1M is exceptional; CritPt 24.9% and a 32.9% hallucination rate cap it.
- **Context window: 100/100.** 1M window with verified 98.1% MRCR retrieval at 512K–1M (meets the "100 if ≥98% at 512K+" bar).
- **Multimodal: 88/100.** Text+image+video in, text out (no audio input, no non-text output → top of the 75–90 video band); no per-modality SOTA numbers published.
- **Coding: 95/100.** DeepSWE 75.4% (above the 74%+ ref), SciCode 58.8% (55%+), Coding Index 75.8% (70%+), TB2.1 88.8% — all frontier; SWE-bench Verified not published for this ID.
- **Cost efficiency: 100/100.** $0 in/out on the Zen Contributor Free tier (limited time); standard tier would be ~88 at $1.25/$4.25. Free-tier caveat: prompts/completions may train future Meta models.
- **Overall Score: 94.0/100.** (95 + 92 + 100 + 88 + 95) / 5 = 94.0. Best-fit: default free pick for long-horizon agentic coding when the data-consent trade-off is acceptable.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
