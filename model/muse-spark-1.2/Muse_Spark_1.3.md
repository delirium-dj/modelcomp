# Muse Spark 1.2 Free — findings by Muse Spark 1.3 Contributor

- Source: Meta/Muse Spark 1.2, e.g. Meta (`muse-spark-1.2-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: Tau3/Index corrected, LCR gap filled, Reasoning 88 → 89, Overall holds 91); re-research pass 2026-10-07 adds Oct-2026 third-party confirmations, scores unchanged at 91
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Meta, Contributor Free tier)
- **Short description:** Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation; near-frontier free fallback when 1.3 Free is unavailable.
- **Provider / access:** Meta via Meta Model API; OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions, tool calling + MCP supported).
- **Release / knowledge:** 2026-08-05 release (1.2 standard); Contributor tier 2026-08-21; knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free Contributor tier exists on Zen)
- **Context window:** 1,048,576 (1M) — verified via Artificial Analysis 1.2 article (retains 1.1 1M window)
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (xhigh); tool calls yes; structured output yes
- **Pricing (as of 2026-09-18):** Free $0 Zen Contributor tier; Contributor $0.10/$0.20; Standard $1.25 in / $0.15 cached / $4.25 out per 1M
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1631 Elo** (Artificial Analysis 1.2 article, #5 overall, +260 vs 1.1, ahead of Opus 4.8 max 1588); AA 1.3 article restates the 1.2 baseline as 1615 — variant-config lane variance
- Terminal-Bench 2.1: **80%** (Artificial Analysis 1.2 article, +2 vs 1.1; BenchLM reports 82.9% variant config); **82.90%** (llmboard.ai independent eval, rank 19/42, evaluated 2026-10-06 — confirms the variant-config lane)
- Tau3-Banking: **35%** (AA 1.3 article restating 1.2 xhigh baseline; corrects filed 27% — amended 2026-09-27)
- MCP Atlas: **90.3%** (Benchgen model page meta/muse-spark-1-2)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM muse-spark-1-2); **90.40%** (llmboard.ai, rank 33/199, evaluated 2026-10-06 — confirms); Sophon tracks 17 evals across 9 domains with GPQA 90.4% as best (#40/511)
- HLE: **45.5%** (BenchLM muse-spark-1-2; AA reports 44% Intelligence Index config)
- LCR / MLCR: **83.3% AA-LCR** (DeepLearning.ai, #1 of all tested models at xhigh reasoning)
- CritPt: **18%** (Artificial Analysis 1.2 article, +3 vs 1.1)
- Artificial Analysis Intelligence Index / BenchLM overall: **57 Index (xhigh, $0.40/task)** (DeepLearning.ai Aug 2026; corrects filed 54 — amended 2026-09-27); **71.88 BenchLM #11** (BenchLM); GDPval v2 predecessor read **1615** (AA 1.3 article; filed 1631 is a variant-config lane)
- Omniscience Accuracy / Hallucination Rate: **38% accuracy / 28% hallucination / 67% attempt** (Artificial Analysis AA-Omniscience, heavy-abstention pattern)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **56%** (Artificial Analysis 1.2 article, -2 vs 1.1)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **59.3% DeepSWE** (BenchLM muse-spark-1-2); **59.30%** (llmboard.ai, rank 24/40, evaluated 2026-10-06 — confirms); Meta's 1.2 methodology page documents the Daytona-sandbox + Muse Code harness setup (5 attempts, pass@1) behind the vendor TB2.1/DeepSWE runs

Long context:

- **AA-LCR 83.3% (#1, xhigh)** fills the long-document reasoning slot; no MRCR/RULER percentage found

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval 1631 (#5), TB 80% and MCP Atlas 90.3% show frontier-adjacent tool orchestration; capped below 1.3 (GDPval 1754, TB 88.8%).
- **Reasoning: 89/100.** GPQA 90.4%, Index 57 and AA-LCR 83.3% (#1) are strong; capped by HLE mid-40s and CritPt 18%.
- **Context window: 100/100.** Verified 1M window; top tier mapping.
- **Multimodal: 90/100.** Full text/image/audio/video/PDF input coverage like 1.3; capped slightly as visual-reasoning execution evidence is thinner than 1.3.
- **Coding: 88/100.** TB 80% + DeepSWE 59.3% are strong but a clear step below 1.3 DeepSWE 75.4%; caps the score.
- **Cost efficiency: 100/100.** $0 Free Zen Contributor tier.
- **Overall Score: 91/100.** Mean of the five non-cost dims (90+89+100+90+88)/5 = 91.4; best-fit near-frontier free fallback.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Artificial Analysis 1.2 article, BenchLM, Benchgen) + 2026-10-07 re-research pass (Meta 1.2 model + methodology pages, llmboard.ai Oct-2026 independent eval, Sophon tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
