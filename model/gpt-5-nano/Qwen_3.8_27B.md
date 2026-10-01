# GPT-5 nano — findings by Qwen 3.8 27B

- Source: OpenAI/gpt-5-nano, e.g. OpenCode Zen `opencode/gpt-5-nano`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's smallest, fastest, cheapest GPT-5 API variant (Aug 2025) — "great for summarization and classification tasks"; OpenAI now points most new speed/cost-sensitive workloads to GPT-5.6 Luna instead.
- **Provider / access:** OpenAI API — Chat Completions, Responses, and Batch endpoints; also available on Azure/Foundry and in OpenCode Zen.
- **Release / knowledge:** released 2025-08-07 (default snapshot `gpt-5-nano-2025-08-07`); knowledge cutoff May 31, 2024 (OpenAI docs).
- **IDs:** `gpt-5-nano` (alias) / `gpt-5-nano-2025-08-07` (snapshot). No Free ID on Zen — scored on paid pricing.
- **Context window:** 400,000 total — 272,000 max input + 128,000 max reasoning/output (OpenAI docs, verified).
- **Modalities:** text + image + video in (video verified via published VideoMMMU/VideoMME scores), text out; reasoning tokens (minimal→high effort), tool calls (function calling, web search, file search, code interpreter, MCP, custom tools), structured outputs, prompt caching.
- **Pricing (as of 2026-10-01):** $0.05 / $0.40 per 1M input/output tokens; cached input $0.005/1M; Batch API supported.
- **Architecture:** proprietary, parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench airline: **41.0%** (high reasoning effort; OpenAI GPT-5 for developers post, Aug 7 2025)
- Tau2-bench retail: **62.3%**
- Tau2-bench telecom: **35.5%**
- Scale MultiChallenge (o3-mini grader): **54.9%**
- COLLIE: **96.9%**
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME 2025 (no tools): **85.2%**
- HMMT 2025 (no tools): **75.6%**
- GPQA Diamond (no tools): **71.2%**
- HLE (no tools): **8.7%**
- FrontierMath (python tool only): **9.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: FActScore hallucination **7.3%**, LongFact-Concepts **1.0%**, LongFact-Objects **2.8%** (no tools, OpenAI post)

Coding:

- SWE-bench Verified: **54.7%** (high reasoning effort; n=477 verified subset)
- Aider polyglot (diff): **48.4%**
- SWE-Lancer IC SWE Diamond: **$49K** earnings (vs $112K for GPT-5 flagship)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- OpenAI-MRCR 2-needle 128k: **43.2%**; 256k: **34.9%** (mean match ratio)
- Graphwalks bfs <128k: **64.0%**; parents <128k: **43.8%**
- BrowseComp Long Context: **80.4%** @128k, **68.4%** @256k
- VideoMME (long, with subtitle category): **65.7%**

Multimodal (raw, for traceability):

- MMMU: **75.6%**; MMMU-Pro: **62.6%**; CharXiv reasoning (python): **62.7%**; VideoMMMU (max 256 frames): **66.8%**; ERQA: **50.1%**

### Normalized scores (1–100)

- **Tool use: 55/100.** Tau2 retail 62.3% is decent for the tier, but airline 41.0% and telecom 35.5% sit well under the mid band, and MultiChallenge (54.9%) confirms weak long-horizon tooling — no TB2.1/GDPval numbers found either.
- **Reasoning: 62/100.** Strong competition math (AIME 85.2%, HMMT 75.6%) and solid GPQA 71.2%, but HLE 8.7% and FrontierMath 9.6% are far below frontier, and the May 2024 knowledge cutoff lags every 2026-era peer — lands mid-band.
- **Context window: 68/100.** 400K total maps into the 200K–500K band, but measured retrieval is weak for the window size (OpenAI-MRCR 43.2% @128k, 34.9% @256k), so it sits low in the band; BrowseComp-Long (80.4% @128k) is the one bright spot.
- **Multimodal: 78/100.** Text + image + video in, text out — video understanding is verified with real numbers (VideoMMMU 66.8%, VideoMME 65.7%), which puts it in the +video band; output stays text-only.
- **Coding: 55/100.** SWE-bench Verified 54.7% and Aider polyglot 48.4% (high reasoning) are solidly below the mid band by 2026 standards (flagship GPT-5 scored 74.9%); SWE-Lancer $49K vs $112K for the flagship shows the gap — best in class for its price, but the absolute level is low.
- **Cost efficiency: 99/100.** $0.05/$0.40 per 1M with $0.005 cached input beats the ~$0.10/$0.20 (97–99) anchor; effectively the cheapest serious frontier-family endpoint OpenAI offers.
- **Overall Score: 63.6/100.** Mean of the five non-cost dims (55+62+68+78+55)/5 = 63.6 — best-fit for high-volume summarization, classification, and low-stakes video understanding where 99% cost efficiency outweighs the mid-low absolute capability.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenAI gpt-5-nano docs page, GPT-5 product page, and "Introducing GPT-5 for developers" detailed benchmark table, fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
