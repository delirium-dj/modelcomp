# Gemini 2.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-2-5-flash`) carries **no source-displayable benchmark rows**; no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Re-read live: Artificial Analysis (AA), BenchLeader, BenchmarkList, BenchLM,
> LLM-Stats, Vals AI and Roboflow. Top-line composites disagree sharply —
> BenchLM 41.8/100 (#127 of 891), BenchLeader Index 52.7 (#289 of 760), LLM-Stats
> 21.7 — and AA flags the model **deprecated** with the page defaulting to the
> **non-reasoning** variant. New numbers: GPQA Diamond **79.0% (thinking) / 68.3%
> (non-reasoning)** vs **57.6%** (Vals) and **39.0%** (HELM); HLE **12.1%
> (thinking)** vs **4.7% (non-reasoning)**; τ²-bench Telecom **31.6% / 14.9%**;
> SWE-bench Verified **28.7%** (new); LiveCodeBench **69.5%** (prior) vs **56.9%
> / 46.9%** (Vals); AA Intelligence Index v4.3.2 **9.8 / 13.1** vs **20.06**
> (BenchmarkList cites); MMMU-Pro **65.5–69.1%**; AA-Omniscience **-42.6 / -29.8**;
> cached input **$0.03/1M** confirmed (90% discount). Conflicts surfaced: (1)
> release date Apr 17 vs May 20 vs Jun 17 2025; (2) GPQA/HLE/LiveCode split by
> reasoning mode and harness; (3) MMLU-Pro 83.2% (BenchmarkList) vs 63.9% (HELM);
> (4) AA Intelligence Index 13.1 vs 20.06. Sources:
> https://artificialanalysis.ai/models/gemini-2-5-flash ,
> https://www.benchleader.com/models/gemini-2-5-flash ,
> https://benchlm.ai/models/gemini-2-5-flash ,
> https://benchmarklist.com/models/google-gemini-2.5-flash/ ,
> https://llm-stats.com/models/gemini-2.5-flash ,
> https://www.vals.ai/models/google_gemini-2.5-flash ,
> https://playground.roboflow.com/models/google/gemini-2-5-flash .

## Model card

- **Name:** Gemini 2.5 Flash (no "Free"-tier wording; free AI Studio quota exists)
- **Short description:** Google DeepMind's 2025-generation workhorse Flash model for advanced reasoning, coding, maths and science at low latency. As of 2026 it is several Flash generations behind (Gemini 3.x/3.5–3.8 Flash supersede it) and AA now lists the model card as deprecated, though the ID still serves on Vertex/Google API.
- **Provider / access:** Google — Gemini API, Google AI Studio (free tier with rate limits, no card) and Google Vertex; also resold via OpenRouter/DeepInfra. Proprietary, no open weights.
- **Release / knowledge:** catalogue release date **2025-04-17** (BenchmarkList / BenchLeader); AA and LLM-Stats list **2025-05-20**, Roboflow/OpenRouter **2025-06-17** (preview vs cloud-GA vs OpenRouter-GA date disagreement). GA 2025-09-25. Knowledge cutoff **January 2025** (AA, LLM-Stats).
- **IDs:** `gemini-2.5-flash`. No OpenCode Zen Free ID. Lines: `gemini-2.5-flash-preview-04-17` (AI Studio).
- **Context window:** 1,000,000 tokens documented (1,048,576 in provider tables); max output **65,535** (65.5K) tokens (some pages 66K).
- **Modalities:** text, image, audio/speech, video and file/PDF input; text out; tool calls, code execution, search grounding and structured output; reasoning yes (configurable thinking budget, plus a dedicated non-reasoning mode).
- **Pricing (as of 2026-10-11):** $0.30 / 1M in and $2.50 / 1M out (list); cached input **$0.03 / 1M** (90% cache discount, confirmed AA/Roboflow/BenchLeader); free AI Studio tier with account-specific limits.
- **Architecture:** proprietary, closed; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **13.6%** (rank 137 of 326); Terminal-Bench (Epoch): **17.1%** (BenchmarkList / AA / BenchLeader)
- Tau2-Bench Telecom (τ²-bench): **31.6%** (thinking) / **14.9%** (non-reasoning) (AA); APEX-Agents: **6.4%**; GDPval-AA: **742 Elo** (rank 169 of 352)
- BFCL Overall: **56.2%** (rank 12 of 85); Claw Bench: **88**; MCP-Universe: **21.6%**
- AMA-Bench: **0.51** (rank 3 of 19); AgentDrive: **75.5%**
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (thinking) / **68.3%** (non-reasoning) (AA); **57.6%** (Vals); **39.0%** (HELM)
- HLE: **12.1%** (thinking, BenchmarkList/AA) / **4.7%** (non-reasoning, AA); MMLU-Pro: **83.2%** (BenchmarkList) / **63.9%** (HELM)
- ARC-AGI-1: **33.3%**; ARC-AGI-2: **2.5%**; CritPt: **1.4%** (non-reasoning) / **1.1%** (thinking)
- AA-LCR: **49.9%** (non-reasoning) / **65.3%** (thinking); AA Intelligence Index v4.3.2: **9.8** (non-reasoning) / **13.1** (thinking); **20.06** as cited by BenchmarkList
- Epoch Capabilities Index: **143.0**; SimpleBench: **41.2%**; AIME 2025: **73.3%**; FrontierMath v2 (Tiers 1–3): **4.844%**
- AA-Omniscience Index: **-42.6** / **-29.8** (hallucination rate 93.0%); IFBench: **39.0%** (non-reasoning) / **50.3%** (thinking)

Coding:

- LiveCodeBench: **69.5%** (prior pass, BenchmarkList) / **56.9%** (not-stated) and **46.9%** (thinking) (Vals)
- SciCode: **39.4%** (AA, flagged "under review"); SWE-bench Verified: **28.7%** (bash-only, rank 38 of 226)
- Aider Polyglot: **55.1%** (rank 18)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- the 1M (1,048,576) window is documented; recall evidence is mixed: AA-LCR **49.9% / 65.3%**, LongBench v2 **62.1%**, LongBench Pro **55.9%**, Fiction.LiveBench 120k **68.8%**, extended needle-in-haystack **98.4%** (small field, weak signal)

Multimodal:

- MMMU-Pro: **65.5%** (non-reasoning) / **69.1%** (thinking) (AA); **71.9%** / **68.0%** (Vals); MMMU (validation): **79.7%**
- Roboflow legacy Vision Evals: OCR **79.04%** (#23 of 58), Visual Understanding **55.22%** (#59 of 77); Video SimpleQA: **57.0%**; MMAU: **67.4%**
- input text/image/speech/video/PDF; **text out only** (no media generation in this SKU)

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 17.1%, APEX-Agents 6.4% and GDPval-AA 742 Elo keep it below the agentic class, but BFCL **56.2%** (rank 12 of 85) and BenchLeader's independent **Agents & tools 48** lift it just under mid (previous 35 was too harsh). A chat/analysis workhorse, not an agent.
- **Reasoning: 65/100.** GPQA Diamond 79.0% (thinking) and MMLU-Pro 83.2% are upper-mid, but the newer composites are weak: AA Intelligence Index v4.3.2 **13.1** (thinking), BenchLeader **Reasoning 42**, HLE 12.1%, FrontierMath v2 4.8%, ARC-AGI-2 2.5%. Mid band per `model-comparison.md` → lowered from 68 (https://artificialanalysis.ai/models/gemini-2-5-flash , https://www.benchleader.com/models/gemini-2-5-flash).
- **Context window: 95/100.** A documented 1M-token window at $0.30/1M input; no source shows ≥98% retrieval at 512K+ (AA-LCR only 49.9–65.3%), so it stays below the 100 cap.
- **Multimodal: 90/100.** Text, image, **speech/audio**, video and PDF input in one call with text output — the methodology's "+audio in" band (90–100) now that AA/LLM-Stats explicitly confirm speech input; quality is mid (MMMU-Pro 65.5–69.1%, OCR 79%). Raised from 85; no media generation caps it at the band floor.
- **Coding: 58/100.** LiveCodeBench 69.5% is decent for the class, but SciCode 39.4%, SWE-bench Verified **28.7%** (new) and BenchLeader **Coding 44** keep it out of agentic-coding contention; lowered from 60.
- **Cost efficiency: 85/100.** $0.30/$2.50 per 1M is cheap in absolute input terms, and cached input is now confirmed at **$0.03/1M** (90% discount) with a free AI Studio tier; $2.50/1M output is at the higher end (AA median $0.77) and newer Flash tiers are better value, holding it below 90.
- **Overall Score: 70/100.** Mean of the five quality dims (40+65+95+90+58)/5 = 69.6 → 70. Best fit: high-volume multimodal ingestion and cheap long-context analysis where agentic tool use is not required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research via Bing and DuckDuckGo HTML search plus direct model pages — Artificial Analysis, BenchLeader, BenchmarkList, BenchLM, LLM-Stats, Vals AI and Roboflow (≥3 independent sources); deep second pass over the 2026-10-01 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
