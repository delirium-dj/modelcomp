# GPT 5 Nano — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5 Nano
- **Short description:** The smallest of OpenAI's three GPT-5 API sizes (Aug 2025) — a fast, low-cost reasoning model for latency- and cost-sensitive tasks; weaker than gpt-5/mini on coding and agentic work but with surprisingly strong math and long-context Q&A per-token economics.
- **Provider / access:** OpenCode Zen `opencode/gpt-5-nano` via `https://opencode.ai/zen/v1/responses` (paid, $0.05/$0.40); OpenAI Responses API + Chat Completions API; default in Codex CLI for lightweight tasks; also Azure AI Foundry / GitHub Copilot.
- **Release / knowledge:** Released 2025-08-07 (OpenAI "Introducing GPT-5 for developers"); knowledge cutoff: not stated on the dev page (GPT-5 family cutoffs published in the research blog).
- **IDs:** `opencode/gpt-5-nano` (Zen, paid); `gpt-5-nano` (OpenAI). Non-reasoning ChatGPT variant is `gpt-5-chat-latest` (different model).
- **Context window:** 272,000 input tokens max + 128,000 reasoning & output tokens = 400,000 total (verified via OpenAI dev post); Zen prices to 272K tier.
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`: `minimal`/`low`/`medium` default/`high`; verbosity `low`/`medium`/`high`); parallel tool calling; custom tools (plaintext + CFG-constrained); structured outputs; prompt caching; Batch API; built-in tools (web search, file search, image generation)
- **Pricing (as of 2026-10-01):** Paid — $0.05 / 1M input, $0.40 / 1M output (OpenAI; identical on Zen, cache read $0.005). Batch API discount available.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> All numbers below are OpenAI-reported, GPT-5 nano at HIGH reasoning effort, from "Introducing GPT-5 for developers" (Aug 7, 2025) detailed-benchmark tables.

Agent / tool use:

- Tau2-bench airline: **41.0%**
- Tau2-bench retail: **62.3%**
- Tau2-bench telecom: **35.5%**
- COLLIE (instruction following): **96.9%**
- Scale MultiChallenge (o3-mini grader): **54.9%**
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **71.2%**
- AIME '25 (no tools): **85.2%**
- HMMT 2025 (no tools): **75.6%**
- HLE (no tools): **8.7%**
- FrontierMath (python tool only): **9.6%**
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified (23/500 problems omitted): **54.7%**
- Aider polyglot (diff): **48.4%**
- SWE-Lancer IC SWE Diamond: **$49K** earned
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- OpenAI-MRCR 2-needle 128k: **43.2%**; 256k: **34.9%**
- Graphwalks bfs <128k: **64.0%**; parents <128k: **43.8%**
- BrowseComp Long Context 128k: **80.4%**; 256k: **68.4%**

Multimodal:

- MMMU: **75.6%**; MMMU-Pro (avg std+vision): **62.6%**
- CharXiv Reasoning (python enabled): **62.7%**
- VideoMMMU (max frame 256): **66.8%**; VideoMME (long, subtitle): **65.7%**
- ERQA: **50.1%**

Hallucinations (lower is better):

- LongFact-Concepts: **1.0%**; LongFact-Objects: **2.8%**; FActScore: **7.3%**

## Normalized scores (1–100)

- **Tool use: 55/100.** Tau2-bench retail 62.3% is solid but airline 41.0% and telecom 35.5% lag badly (vs GPT-5's 96.7% telecom); COLLIE 96.9% shows excellent instruction following. No Terminal-Bench 2.1/GDPval numbers. Mid band (Tau3 ~10–25% → 50–70) fits.
- **Reasoning: 62/100.** GPQA Diamond 71.2% and AIME '25 85.2% are strong for the size class, but HLE 8.7% and FrontierMath 9.6% cap hard-research depth; GPQA in the 60–80% band → 55–65 per methodology.
- **Context window: 68/100.** 272K input / 400K total puts it in the 200K–500K tier (65–84), but weak needle retrieval (MRCR 2-needle 128k only 43.2%) drags it below the 70 baseline; BrowseComp LC 80.4% partially offsets.
- **Multimodal: 68/100.** Image input with strong image benchmarks (MMMU 75.6%, CharXiv 62.7%) and video-understanding scores (VideoMMMU 66.8%), text output only → top of the +image-in 60–70 band.
- **Coding: 56/100.** SWE-bench Verified 54.7% and Aider polyglot 48.4% are well below gpt-5 (74.9%/88.0%); SWE-Lancer $49K confirms entry-level coding economics. No LiveCodeBench/SciCode numbers.
- **Cost efficiency: 97/100.** $0.05/$0.40 per 1M tokens — cheaper input than the ~$0.10/$0.20 = 97–99 reference with a higher output price; cache read $0.005. Paid, so short of $0 = 100.
- **Overall Score: 62/100.** Mean of the five quality dims (55+62+68+68+56)/5 = 61.8 → 62. Best fit: high-volume, low-latency tasks (classification, extraction, lightweight chat) where its price/performance dominates — not for serious coding or agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official OpenAI developer blog with detailed benchmark tables, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
