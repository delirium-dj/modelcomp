# Qwen3.7 Plus — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3.7 Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus. No "Free" wording — paid model, no Zen Free ID.
- **Short description:** Alibaba's mid-tier proprietary multimodal reasoner of the Qwen3.7 generation: text plus image/video input, full-stack agent-level tool use, 1M-token context and implicit caching. Sits under Qwen3.7-Max in the same family rather than replacing it.
- **Provider / access:** proprietary; first-party Alibaba DashScope API plus OpenRouter. OpenAI-compatible Chat Completions. In this project tracked as the paid Zen entry `opencode/qwen-3.7-plus`.
- **Release / knowledge:** released June 2026 (Artificial Analysis: 2026-06-01; Easy Benchmarks: 2026-06-02; BenchmarkList: 2026-06-03). Knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.7-plus` (no Zen Free ID; `meta.json` carries the 128K placeholder row, superseded by the 1M figure below).
- **Context window:** 1,000,000 tokens (Artificial Analysis, Easy Benchmarks and BenchmarkList agree); max output 131,072 tokens (Easy Benchmarks).
- **Modalities:** Artificial Analysis lists text, image **and video** input with text output and reasoning on; Easy Benchmarks lists text + image only. Conflict unresolved — the video claim is therefore treated as provisional.
- **Pricing (as of 2026-09-25):** $0.40 in / $1.60 out per 1M with an 80% cache discount, blended ≈ $0.30 (Artificial Analysis, Alibaba route) or $0.70 blended (Easy Benchmarks, OpenRouter route). No free tier.
- **Architecture:** proprietary, undisclosed size (Alibaba has not published a parameter count).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%** (BenchmarkList; rank 4 of 68); Terminal-Bench 2.1: **64.0%**; Terminal-Bench Hard: **47.0%** (rank 15 of 326)
- Tau2-Bench Telecom: **93.0%**; Tau3-Banking: **17.9%** (rank 59 of 174)
- GDPval-AA: **947 Elo** (BenchmarkList; 68th percentile, rank 110 of 340)
- MCPMark: **58.7%** (BenchmarkList; rank 2 of 41); MCP Atlas: **73.2%**
- OSWorld / OSWorld-Verified: **73.3%** (94th percentile, rank 5 of 72); VitaBench: **45.6%**; ScreenSpot-Pro: **79.0%**
- Toolathlon: **50.6%**; JobBench: **27.6%**; APEX-Agents-AA: **22.4%**; AutomationBench: **3.7%**; WebArena-Verified: **55.3%**; AndroidWorld: **81.0%**; Claw-Eval: **62.7%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (Easy Benchmarks; rank #68)
- HLE: **35.6%** (BenchmarkList; 91st percentile, rank 43 of 466)
- Artificial Analysis Intelligence Index: **39.4** (BenchmarkList; 85th percentile, rank 65 of 418) vs **25.2** on Easy Benchmarks' tracked index (#168) — different index versions, both listed
- MMLU-Pro: **88.5%**; SuperGPQA: **71.4%**; RealWorldQA: **86.9%**; AIIQ Composite IQ **115**; Vals Index **52.3%**
- CritPt / LCR: no verified figure captured (AA-LCR listed under long context below)

Coding:

- SWE-bench Verified: **77.7%** (BenchmarkList; rank 21 of 46); SWE-bench Pro: **57.6%**; SWE-bench Multilingual: **75.8%**
- LiveCodeBench: **89.6%** (rank 9 of 49)
- SciCode: **51.3%** (BenchmarkList) / AA SciCode **46.1%** (Easy Benchmarks); AA Coding Index **55.9** (#136)
- Kernel Bench L3: **2.06 / 98.0%**; NL2Repo: **41.1%**; Vibe Code Bench v1.1: **46.4%**; DeepSWE 1.1: **16.5%**
- SWE-bench Verified (independent): no second-harness number found

Long context:

- MRCR-v2 128k: **91.7%** (BenchmarkList; 84th percentile, rank 4 of 20); AA-LCR: **69.0%** (76th percentile, rank 97 of 409)

Multimodal:

- MathVision: **90.3%**; ERQA: **69.8%**; MMLU-ProX: **85.4%**; Vals Multimodal Index **53.9%** (32nd percentile)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 70.3% / 2.1 64.0% clears the mid band (45–60%), MCPMark ranks 2nd of 41 and Tau2-Bench Telecom 93.0% is strong, but Tau3-Banking 17.9%, GDPval-AA 947 Elo and AutomationBench 3.7% pin it mid-tier rather than frontier.
- **Reasoning: 76/100.** GPQA Diamond 90.0% touches the 90%+ frontier anchor, but HLE 35.6% (<40) and the 39.4 Intelligence Index keep it below the top band.
- **Context window: 95/100.** A 1M window is the 95–100 tier; MRCR-v2 128k 91.7% and AA-LCR 69.0% are good but short of the ≥98%-at-512K evidence needed for 100.
- **Multimodal: 80/100.** Image and (per Artificial Analysis) video input with text output is the 75–90 band; no audio input and no non-text output caps it, and Easy Benchmarks lists image only.
- **Coding: 80/100.** SWE-bench Verified 77.7% and LiveCodeBench 89.6% are strong; SciCode ~46–51% is under the 55% frontier ref, DeepSWE 16.5% is low and Vibe Code Bench 46.4% is mid.
- **Cost efficiency: 93/100.** $0.40/$1.60 with an 80% cache discount lands between the $0.10/$0.20 (97–99) and $0.60/$2.20 (92) anchors; the $0.30–$0.70 blended rates and cheap cached reads keep it in the low 90s with no free tier.
- **Overall Score: 80/100.** (68 + 76 + 95 + 80 + 80) / 5 = 79.8 → 80. Best fit: long-context multimodal agent work at a mid-tier price — a 1M window and solid coding, handicapped by average agentic-task and factuality results.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (Artificial Analysis, BenchmarkList, Easy Benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
