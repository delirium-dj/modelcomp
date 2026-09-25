# GPT-6 Luna — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's budget volume tier of the GPT-6 family — "our most efficient model for focused, high-volume tasks" at $0.10/$0.50 per million tokens (roughly half its GPT-5.6 Luna predecessor's prices); the standout of the GPT-6 launch with near-frontier DeepSWE at a fraction of the cost. Trained "with similar methods as GPT-6 Astra."
- **Provider / access:** OpenAI API (`gpt-6-luna`) via Responses and Chat Completions APIs with Batch, Flex, Fast and regional processing; ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu); free/Go users can use GPT-6 Luna in the desktop app. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-22 (same day as GPT-6 Sol); knowledge cutoff May 18, 2026 (verified via OpenAI API docs and Kingy AI launch analysis).
- **IDs:** `gpt-6-luna` (OpenAI API). No Free ID on Zen.
- **Context window:** 1,050,000 total tokens; 128,000 max output (verified via Kingy AI launch analysis; same specs as GPT-6 Sol). Long-context surcharge: requests over 272K input tokens billed at 2x input / 1.5x output rates.
- **Modalities:** text and image input; text output; reasoning yes with six effort settings (none, low, medium — default, high, xhigh, max); tool calls: function calling, web search, file search, computer use; model page also lists structured outputs, code interpreter, image generation, MCP and skills.
- **Pricing (as of 2026-09-24):** $0.10 / $0.50 per 1M in/out; cached input reads $0.01 per 1M (90% discount); cache writes $0.125 per 1M; Batch/Flex 50%, Fast 2x. Paid API; a free desktop-app route exists for ChatGPT Free/Go users (not a developer API free tier).
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **20.7%** max ($0.037/task; OpenAI vendor-reported chart data — beats GPT-5.6 Luna's 17.0%; unusable at low effort: 1.2%)
- Agents' Last Exam V1: **50.9%** max ($0.15/task; roughly matches GPT-5.6 Luna's 50.4% at ~6% of the cost; within 5 points of Opus 5's best 55.9%)
- OSWorld 2.0 offline: **52.7%** max ($0.27/task; flat vs predecessor at ~45% lower cost)
- Terminal-Bench, Tau3, GDPval-AA: no verified public score found (OpenAI didn't report Terminal-Bench for Luna)

Reasoning / knowledge:

- Factual error rate (lower is better): **7.6%** max ($0.012/prompt; beats GPT-5.6 Sol's best 8.5% at ~1/70th of the cost)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **66.6%** max ($0.22/task; OpenAI vendor-reported — close to Opus 5 at medium (68.9%, $3.29) and Fable 5 at medium (65.4%, $6.09); 93–96% cheaper per task)
- FrontierCode 1.1 Main: **42.4%** max ($0.11/task; beats GPT-5.6 Luna's 39.8%)
- Vibe Code Bench: no verified public score found
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- No long-context retrieval reported (1.05M-token window claimed; >272K surcharge; no MRCR/RULER/GraphWalks value verified)

### Normalized scores (1–100)

- **Tool use: 70/100.** Agents' Last Exam 50.9% at $0.15/task and OSWorld 52.7% are solid mid-band results at remarkable cost; AutomationBench 20.7% is low and missing Terminal-Bench/Tau3/GDPval numbers cap the score.
- **Reasoning: 62/100.** No GPQA/HLE/index run exists — only a 7.6% factual error rate at max (better than GPT-5.6 Sol's best); "Sol and Luna have no published results" on hard reasoning per launch coverage, so the score rests on thin evidence.
- **Context window: 95/100.** 1.05M tokens maps to the ≥1M tier (95–100) with 128K output; no measured ≥98% retrieval at 512K+ and the >272K surcharge keep it off the maximum.
- **Multimodal: 65/100.** Text + image input only, text output, no audio/video/PDF input — per methodology the image-in band is 60–70.
- **Coding: 82/100.** DeepSWE 66.6% at $0.22/task (near Opus 5 at medium) and FrontierCode 42.4% are strong cost-adjusted results; trailing the flagship peaks and missing SWE-bench Verified/LiveCodeBench prevent 85+.
- **Cost efficiency: 99/100.** $0.10/$0.50 per 1M with a 90% cache discount ($0.01 cached) is the cheapest frontier-lab model tracked — at the top of the ~$0.10/$0.20 = 97–99 methodology band.
- **Overall Score: 75/100.** Mean of the five quality dims (70 + 62 + 95 + 65 + 82) / 5 = 74.8 → 75. Best-fit: high-volume classification, extraction, routing and cheap coding sub-agents where cost per token matters more than frontier capability.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (OpenAI launch-chart analysis via Kingy AI with full per-effort tables, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
