# GPT-6 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model "built to power complex coding and agentic workflows," launched ~3 weeks after flagship GPT-6 Astra; an efficiency release bringing Astra's professional-work, factuality, coding and computer-use gains to a $2/$10 price point. Not a new capability ceiling — its best DeepSWE/OSWorld scores sit below GPT-5.6 Sol's peaks.
- **Provider / access:** OpenAI API (`gpt-6-sol`) via Responses and Chat Completions APIs, with Batch, Flex, Fast and regional data-residency processing options; also in ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu). Available through 6 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff April 20, 2026 (verified via OpenAI API docs and Kingy AI launch analysis).
- **IDs:** `gpt-6-sol` (OpenAI API). No Free ID on OpenCode Zen.
- **Context window:** 1,050,000 total tokens (OpenAI docs; Artificial Analysis lists 872k, vals.ai says 1M) / 128,000 max output. Long-context surcharge: requests over 272K input tokens billed at 2x input / 1.5x output rates.
- **Modalities:** text and image input; text output; reasoning yes with six effort settings (none, low, medium, high, xhigh, max); tool calls: function calling, web search, file search, computer use; structured outputs / JSON mode.
- **Pricing (as of 2026-09-24):** $2.00 / $10.00 per 1M in/out; cached input reads $0.20 per 1M (90% discount); cache writes $2.50 per 1M; Batch/Flex 50%, Fast 2x. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15%** (vals.ai, #6 of 73, reasoning effort max)
- Vals Index: **62.57%** (#8 of 65, $7.56/test; vals.ai)
- AutomationBench 1.0.6: **33.2%** at xhigh ($0.27/task) / 32.0% max (OpenAI vendor-reported chart data; beats Claude Opus 5 max 26.9% at 11.1x the cost)
- Agents' Last Exam V1: **56.4%** max ($2.93/task; above Opus 5's best 55.9%)
- OSWorld 2.0 offline: **64.4%** max ($3.25/task; below Opus 5 max 70.2% and GPT-5.6 Sol max 66.2%)
- Finance Agent v2: **49.05%** (vals.ai, #37 of 68)
- Harvey's Legal Agent Benchmark: **1.67%** (vals.ai, #41 of 69 — outlier weakness on fully-correct-answer tasks)
- Legal Research Bench: **28.85%** (#38 of 68); MedScribe: **82.03%** (#45 of 100); Tax Agent Bench: **53.05%** (#22 of 26); MedCode: **47.07%** (#31 of 98); SAGE: **44.79%** (#39 of 85) (vals.ai)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- IOI: **82.61%** (vals.ai, #7 of 32)
- ProofBench v1.1: **83.00%** (vals.ai, #9 of 40)
- BioMysteryBench: **74.81%** (vals.ai, #4 of 16)
- EMB: **71.53%** (vals.ai, #8 of 65)
- SNAP: **56.63%** (vals.ai, #30 of 40)
- Artificial Analysis Intelligence Index: **48 / #18 of 211** (Artificial Analysis model page, Sep 2026)
- Factual error rate (lower is better): **4.5%** xhigh / 4.6% max (OpenAI vendor-reported; 41–54% fewer errors than GPT-5.6 Sol)
- LCR / MLCR, CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **68.8%** max ($2.74/task; OpenAI vendor-reported — below GPT-5.6 Sol 72.7% and Claude Opus 5 73.7%)
- FrontierCode 1.1 Main: **49.3%** max ($2.14/task; below Opus 5 53.4% and Fable 5.1 medium 50.9%)
- Vibe Code Bench v1.1: **87.82%** (vals.ai, #6 of 103)
- Code Migration: **57.20%** (vals.ai, #4 of 68)
- ProgramBench: **2.00%** fully resolved (vals.ai, #6 of 51)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- No long-context retrieval reported (1.05M-token window claimed; no MRCR/RULER/GraphWalks value verified)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 83.15% (#6/73), leading AutomationBench (33.2% vs Opus 5's 26.9%) and strong OSWorld 64.4% put it in the upper band; the near-zero 1.67% Harvey LAB and weak professional rows (Legal Research #38, SAGE #39) plus missing GDPval keep it under 90.
- **Reasoning: 80/100.** AA Intelligence Index 48 (#18 of 211) sits well above the 20–35 mid band but short of the 60+ frontier ref; IOI 82.61%, ProofBench 83.00% and EMB 71.53% are strong; no GPQA/HLE number found, which caps the score.
- **Context window: 95/100.** 1.05M tokens (≥1M tier, 95–100) with 128K output; no measured retrieval at 512K+ and the >272K long-context surcharge keep it off the maximum.
- **Multimodal: 65/100.** Text + image input only, text output, no audio/video/PDF input — per methodology the image-in band is 60–70.
- **Coding: 85/100.** Vibe Code Bench 87.82% (#6/103) and DeepSWE 68.8% ($2.74/task, near Opus 5 medium) are strong; FrontierCode 49.3% trails Opus 5.5/Opus 5 peaks and missing SWE-bench Verified/LiveCodeBench numbers prevent 90+.
- **Cost efficiency: 85/100.** $2/$10 per 1M with a 90% cache discount ($0.20 cached, AA blended $1.54) sits between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references; large per-task advantages (11.1x cheaper than Opus 5 on AutomationBench, $7.56/test on the Vals Index) support the upper end of that band.
- **Overall Score: 82/100.** Mean of the five quality dims (85 + 80 + 95 + 65 + 85) / 5 = 82. Best-fit: default model for agent pipelines and business automation where score-per-dollar matters more than peak coding/computer-use performance.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page, vals.ai model page, OpenAI launch-chart analysis via Kingy AI, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
