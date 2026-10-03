# GPT-5 nano — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5-nano`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's smallest, cheapest GPT-5 tier (August 2025 generation) — a fast, cost-efficient utility model with reasoning-token support, positioned by OpenAI for summarization and classification workloads. Artificial Analysis marks it deprecated in favor of GPT-5.4 nano.
- **Provider / access:** OpenAI API (`v1/chat/completions` + `v1/responses`, both supported; batch supported, fine-tuning not) and OpenCode Zen `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5-nano`). OpenCode's own docs note low-cost models "such as Haiku, Nano, or Flash" are used to generate session titles — illustrating its utility tier.
- **Release / knowledge:** released 2025-08-07 (sole snapshot `gpt-5-nano-2025-08-07`); knowledge cutoff May 31, 2024.
- **IDs:** `gpt-5-nano` (OpenAI), `opencode/gpt-5-nano` (OpenCode Zen)
- **Context window:** 400,000 tokens total; 272,000 max input; 128,000 max output — verified from OpenAI's official model documentation (fetched 2026-10-03).
- **Modalities:** text and image in; text out; reasoning tokens yes; tools: function calling, web_search, file_search, code_interpreter, MCP; structured outputs, prompt caching, file uploads, streaming supported.
- **Pricing (as of 2026-10-03):** $0.05 input / $0.40 output / $0.005 cached per 1M tokens (identical on OpenAI and OpenCode Zen).
- **Architecture:** proprietary — parameter count undisclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/field) from BenchmarkList's 103-benchmark profile for `gpt-5-nano-2025-08-07` plus Artificial Analysis and OpenAI docs, all fetched 2026-10-03.

Agent / tool use:

- Terminal-Bench Hard: **17.4%** (AA Terminal-Bench hard subset, rank 118/326)
- Tau2-Bench Telecom: **36.5%** (AA, rank 164/332)
- GDPval-AA: **756 Elo** (AA, rank 165/352; field leader 1861)
- Berkeley Function-Calling Leaderboard: **51.5%** overall (rank 20/85; multi-turn 34.5%, web search 72.5%)
- MCPMark: **6.3% pass@1** (rank 38/41)
- AndroidWorld: **91.4%** (rank 4/22, small field); MiniWoB++ 64.8%; WorkArena-L1 40.6% / L2 3.4% (BrowserGym)
- PinchBench: **68.8%** best score (rank 63/73)

Reasoning / knowledge:

- GPQA Diamond: **63.4%** (vals.ai, rank 87/117) / **67.6%** (Epoch, rank 227/468)
- HLE: **9.5%** (rank 204/471)
- AIME 2025: **83.7%** (rank 49/226); MATH 500: 93.8% (rank 16/58)
- MMLU-Pro: **78.0%** (rank 132/312)
- ARC-AGI-2: **2.6%** (ARC Prize, rank 69/99)
- Artificial Analysis Intelligence Index: **20.1** (rank 168/418; AA's own page shows 13 estimated for the high-effort variant)
- AA-LCR: **43.7%** (rank 200/411)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (no row on BenchmarkList; OpenAI's GPT-5 launch announcement publishes no nano numbers)
- LiveCodeBench: **70.2%** (vals.ai, thinking: high, rank 77/123)
- SciCode: **36.6%** (AA, rank 168/460)
- Vibe Code Bench / DeepSWE: **no verified public score found**
- ALE-Bench: 718.67 (rank 42/83); MLX Benchmark V2: 41.92 (rank 4/7); MedCode: 30.4% (rank 62/67)

Long context:

- OpenAI-MRCR 2-needle 128k: **43.2%** (rank 7/8) — weak measured retrieval at 128K
- AA-LCR: 43.7%; GraphWalks BFS <128k: 64.0%
- Speed: 153.8 output tok/s; time-to-first-token 67.90s (AA, high reasoning effort)

Multimodal (input evidence):

- MMMU Pro: **70.9%** (rank 57/79); OpenVLM Leaderboard: 72.2 (85th percentile); AI2D: 81.9%; MMBench: 80.3% (small fields)

### Normalized scores (1–100)

- **Tool use: 55/100.** Basic function calling is solid (BFCL 51.5% at 77th percentile; AndroidWorld 91.4% in a small field), but hard agentic work is weak — GDPval-AA 756 sits below the methodology's 900–1200 mid band, Terminal-Bench Hard 17.4% and MCPMark 6.3% cap the score at utility-tier agent level.
- **Reasoning: 60/100.** GPQA Diamond 63.4–67.6% and HLE 9.5% land mid-band (methodology: GPQA 60–80%, HLE <10% → 55–65); AIME 2025 83.7% is strong for the tier, but ARC-AGI-2 2.6% and AA Intelligence Index 20.1/13 cap it at mid.
- **Context window: 70/100.** Verified 400K window (OpenAI docs) sits in the 200K–500K tier (65–84); weak measured long-context quality (MRCR 2-needle 43.2%, AA-LCR 43.7%) keeps it in the lower half of the band despite the large headline number.
- **Multimodal: 68/100.** Verified text + image input with decent measured vision for a nano tier (MMMU-Pro 70.9%, OpenVLM 72.2); no audio/video input, text-only output caps it in the 60–70 image-in band.
- **Coding: 60/100.** LiveCodeBench 70.2% and SciCode 36.6% (64th percentile) are mid-pack; Terminal-Bench Hard 17.4% and the absence of any public SWE-bench Verified score cap agentic/production coding well below frontier.
- **Cost efficiency: 97/100.** $0.05/$0.40 with $0.005 cached reads is cheaper than the methodology's ~$0.10/$0.20 → 97–99 reference point; the cheapest OpenAI tier on Zen.
- **Overall Score: 63/100.** Half-up mean of the five quality dims (55+60+70+68+60)/5 = 62.6 → 63 — a near-free utility pick for summarization, classification, and high-volume tool glue; not a frontier reasoning/coding agent.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-03
- Method: public internet research (OpenAI model documentation, BenchmarkList's 103-benchmark profile with per-row sources, Artificial Analysis, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
