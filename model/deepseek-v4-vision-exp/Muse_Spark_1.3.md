# DeepSeek V4 Vision Exp — findings by Muse Spark 1.3

- Source: DeepSeek/DeepSeek V4 Flash Vision Exp (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (DeepSeek-V4-Flash-Vision-Exp, experimental multimodal)
- **Short description:** DeepSeek's first experimental vision-capable V4-Flash model, continued-trained for multimodal agent workflows, UI automation and chart analysis, holding text parity with V4-Flash while closing the multimodal gap to Opus 4.8.
- **Provider / access:** DeepSeek via API (`deepseek-v4-flash-vision-exp`, image input JPEG/PNG/GIF/WebP); OpenCode Zen `opencode/deepseek-v4-vision-exp` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-08-21 API launch; 2026-08-31 open weights (Hugging Face, MIT license); knowledge cutoff undisclosed
- **IDs:** `opencode/deepseek-v4-vision-exp` (Free experimental ID exists on Zen; native `deepseek-v4-flash-vision-exp` on DeepSeek API)
- **Context window:** 1,048,576 in / 393,216 out — verified via llm-stats provider comparison (1,048,576 vs V4.1-Flash 1,040,000, both 393,216 out)
- **Modalities:** text, image in; text out; reasoning yes (max effort, temp 1.0 top_p 0.95 per model-card eval setup); tool calls yes; document/chart screenshot understanding yes
- **Pricing (as of 2026-09-21):** $0.22 in / $0.66 out per 1M off-peak ($0.44/$1.32 peak; $0.007 cached input) — verified via llm-stats pricing panel and chat-deep API matrix; Free Zen experimental tier available
- **Architecture:** open-weights MoE, ~284–305B total (Flash base 284B total / 13B active per DeepSeek paper; model card 305B with MIT license), vision encoder + aligner + DFlash attention + Hyper-Connections, continued training (not stitched adapter)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Vision-Exp model-card table compares against the 0731 text-only baseline and Anthropic Opus 4.8 under DeepSeek Harness 0.1.1 minimal mode, max reasoning effort.

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (DeepSeek model-card table via AILog, vs 0731 baseline 82.7)
- Toolathlon-Verified: **75.9%** (same table, vs 0731 70.3)
- Agents' Last Exam: **27.3** (same table, vs Opus 4.8 25.7 — win)
- ZeroBench Pass@5: **35.0** (same table, vs Opus 4.8 34.0 — win)
- ApexBench Pass@1: **36.5** (same table, vs 0731 26.2 ignoring multimodal inputs; vs Opus 4.8 39.4 — loss)
- Chartography: **64.3** (same table, vs Opus 4.8 65.0 — loss)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.1% GPQA Pass@1** (chat-deep V4 Flash Max official table — text-parity proxy; Vision-Exp holds small leads over 0731 across text-agent side per model card)
- HLE: **no verified public score found**
- DSBench-Hard: **63.6** (model-card table, vs 0731 59.6)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **0.52 Intelligence Index #28 / 0.53 Agentic Index #12** (apxml benchmark panel)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **79.0% SWE Verified Resolved** (chat-deep V4 Flash Max official table — text-parity proxy)
- LiveCodeBench: **91.6% LiveCodeBench-v6 Pass@1-CoT** (same official table — text-parity proxy); LiveBench Coding **0.68 #60** (apxml panel)
- DeepSWE: **59.3** (model-card table, vs 0731 54.4)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Coding Index / other: **0.65 Coding Index #30** (apxml panel); LiveBench Agentic **0.65 #3**, Reasoning 0.85 #32, Mathematics 0.88 #45

Long context:

- **78.7 MRCR 1M MMR** (chat-deep V4 Flash Max official table — shared-stack proxy; V4 natively supports 1M per DeepSeek-V4 paper)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 84/100.** TB2.1 83.9%, Toolathlon 75.9% and Agents' Last Exam win over Opus 4.8 show strong multimodal agency; capped by missing Tau3/GDPval harnesses.
- **Reasoning: 80/100.** GPQA 88.1% text-parity proxy plus DSBench-Hard 63.6 and ApexBench vision lift show solid reasoning; capped by no published HLE/LCR/CritPt absolutes.
- **Context window: 96/100.** Verified 1,048,576 in / 393,216 out with MRCR-1M 78.7 proxy maps to the top tier; capped below 100 without Vision-Exp-labeled retrieval saturation proof.
- **Multimodal: 85/100.** Native image-in continuation training with ZeroBench/Agents-Exam wins and Chartography near-parity to Opus 4.8; capped by text-only output with no video/audio synthesis.
- **Coding: 84/100.** DeepSWE 59.3, SWE 79.0 proxy and LiveCode 91.6 proxy with DSBench-Hard gains show strong multimodal coding; capped by missing SWE-Pro/Vibe absolutes.
- **Cost efficiency: 95/100.** $0.22/$0.66 off-peak with a Free Zen experimental tier approaches the ~$0.10/$0.20 band.
- **Overall Score: 86/100.** Mean of the five non-cost dims (84+80+96+85+84)/5 = 85.8; best-fit free experimental multimodal agent pick for UI automation and chart-grounded coding.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (DeepSeek model-card benchmark table via AILog, llm-stats provider comparison, chat-deep V4 spec/benchmark matrix, apxml benchmark panel, DeepSeek-V4 paper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
