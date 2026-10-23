# GPT 5.1 — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.1 (`openai/gpt-5.1`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-1`, 3 rows) computes an overall **57.2/100 (#62 of 227)** and confirms the deep pass. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from OpenAI's developer launch post + independent sources: **τ²-bench Telecom 95.6%**, Airline 67.0%, Retail 77.9%; Terminal-Bench Hard 45.5%; **GPQA Diamond 88.1%** (87.3% Epoch), HLE 28.5%, **AIME 2025 94.0%**, MMLU-Pro 87.0%; **SWE-bench Verified 76.3%** (OpenAI, all 500) / 69.8% (Vals), LiveCodeBench 86.5%, Terminal-Bench 2.1 52.4%, Vibe Code Bench 24.61%; MMMU 85.4%, MMMU-Pro 75.5–83.2%; **ARC-AGI-1 72.8%**, ARC-AGI-2 17.6%; AA-LCR 80.0%; BrowseComp Long-Context 128k 90.0%. Independent: AA Intelligence Index **25**, BenchLM overall 56.59 (#60/891), BenchmarkList AA index 36.87 (#8 board rank).
> **Conflicts surfaced:** (1) **Context** — 400K (official docs) vs **200K** (BenchLM). (2) **SWE-bench Verified** — 76.3% (OpenAI) vs 69.8% (Vals). (3) **τ²-bench Telecom** — 95.6% (OpenAI) vs 81.9% (AA) vs 59.0% pass_rate (Codesota) — harness/effort differences. (4) **MMMU-Pro** 75.5–83.2% spread. (5) The prior file's "no SWE-bench number" is now resolved by the official table.
> **Adjusted dimensions:** Tool 78→80 (τ²-Telecom 95.6%, GDPval/APEX surfaced), Reasoning 84→85, Coding 76→82 (**SWE-bench Verified 76.3%** / LCB 86.5% now public); Overall 77 → **79**.
> Sources: https://developers.openai.com/api/docs/models/gpt-5.1 · https://openai.com/index/gpt-5-1-for-developers/ · https://benchlm.ai/models/gpt-5-1 · https://benchmarklist.com/models/openai-gpt-5.1/ · https://artificialanalysis.ai/models/gpt-5-1

## Model card

- **Name:** GPT-5.1
- **Short description:** The primary full-capability successor to GPT-5 — adaptive reasoning with improved instruction adherence, longer-context performance and a more natural conversational style (variants: GPT-5.1 Instant, GPT-5.1 Thinking).
- **Provider / access:** OpenAI API, plus OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** ChatGPT rollout 2025-11-12, API snapshot `gpt-5.1-2025-11-13`; knowledge cutoff 2024-09-30.
- **IDs:** `gpt-5.1` (`gpt-5.1-chat-latest` = Instant); OpenCode Zen `opencode/gpt-5.1`. No Zen Free ID.
- **Context window:** 400,000 tokens input; max output **128,000**.
- **Modalities:** text and image in; text out. Adaptive reasoning (`reasoning.effort` none/low/medium/high), tool use, structured outputs.
- **Pricing (as of 2026-10-11):** **$1.25 / $0.125 cached / $10.00 per 1M** in/out (90% cache discount); Flex tier lower.
- **Architecture:** proprietary decoder-only; adaptive-reasoning frontier model. Not released.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom **95.6%** (OpenAI) / 81.9% (AA); Airline 67.0%, Retail 77.9%; Terminal-Bench Hard 45.5%
- GDPval-AA 994 Elo; APEX-Agents 31.5%; IFBench 72.9% (high) / 43.2% (non-reasoning); MultiChallenge 63.4%
- Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **88.1%** (OpenAI) / 87.3% (Epoch) / 86.6% (Vals); HLE 28.5% (23.7% Codesota); AIME 2025 94.0%; MMLU-Pro 87.0%
- ARC-AGI-1 72.8%; ARC-AGI-2 17.6%; FrontierMath (Python) 26.7%
- AA Intelligence Index **25**; BenchLM overall 56.59 (#60/891); AA-Omniscience accuracy 37.7% / non-hallucination 48.1%

Coding:

- SWE-bench Verified: **76.3%** (OpenAI, all 500) / 69.8% (Vals); LiveCodeBench 86.5%; Terminal-Bench 2.1 52.4% / TB 2.0 44.9%
- Vibe Code Bench v1.1 24.61%; IOI 21.5%; WebDev Arena 1391 Elo

Long context:

- AA-LCR **80.0%**; BrowseComp Long-Context 128k 90.0%; 400K-token window; no MRCR/RULER/GraphWalks retrieval score published.

Multimodal:

- MMMU 85.4% (high); MMMU-Pro 75.5–83.2% (spread); text+image in, text out.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-Telecom 95.6%, GDPval-AA 994 Elo and APEX-Agents 31.5% (now surfaced) lift it from 78; capped by Terminal-Bench Hard 45.5% and the τ² harness spread.
- **Reasoning: 85/100.** GPQA 86.6–88.1%, AIME 94.0% and AA-LCR 80.0% are near-frontier; HLE 28.5%, ARC-AGI-2 17.6% and AA index 25 cap it.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85); BenchLM's 200K reading is rejected against the official docs.
- **Multimodal: 68/100.** Text and image input, text output (`+image band = 60–70`); strong MMMU 85.4% does not change the modality band; no audio/video.
- **Coding: 82/100.** SWE-bench Verified 76.3% and LiveCodeBench 86.5% (now public) raise it from 76; capped by Vibe Code Bench 24.61% and TB 2.1 52.4%.
- **Cost efficiency: 76/100.** $1.25 / $10 per 1M is mid-frontier pricing (below the $1.25/$4.25 reference, above $3/$15).
- **Overall Score: 79/100.** (80 + 85 + 80 + 68 + 82) / 5 = 79.0 → 79. Best fit: reliable general-purpose agentic and analysis work at moderate cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (OpenAI GPT-5.1 developer launch post + API docs, BenchLM, BenchmarkList, Artificial Analysis, Codesota, OpenRouter). The official launch table resolved the prior "no SWE-bench number" gap; the context, SWE and τ² spreads are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
