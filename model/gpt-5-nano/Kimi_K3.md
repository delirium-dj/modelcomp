# GPT-5 nano — findings by Kimi K3

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's smallest, cheapest GPT-5 API tier — a reasoning model for high-volume, latency-sensitive tasks. Released alongside `gpt-5` and `gpt-5-mini`; the API GPT-5 line is the reasoning model that powers maximum performance in ChatGPT.
- **Provider / access:** OpenAI API (Responses API and Chat Completions API), default-sizing option in Codex CLI family; also via Microsoft Azure AI Foundry. Model slug `gpt-5-nano`.
- **Release / knowledge:** Released 2025-08-07 (official developer announcement).
- **IDs:** `openai/gpt-5-nano` (Responses + Chat Completions). No Free ID exists on OpenCode Zen.
- **Context window:** 272K input tokens, up to 128K combined reasoning+output tokens, 400K total context (official developer post).
- **Modalities:** Text + image in (video understanding benchmarked via VideoMMMU frame sampling); text out. Reasoning model with `reasoning_effort` (minimal/low/medium/high), `verbosity` parameter, custom plaintext tools (regex/CFG-constrained), parallel tool calling, Structured Outputs.
- **Pricing (as of 2026-10-01):** $0.05 / $0.40 per MTok (input/output, official developer post); prompt caching and Batch API discounts apply. Paid — no free tier.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

All numbers below are from OpenAI's official "Introducing GPT-5 for developers" (2025-08-07), GPT-5 nano (high reasoning effort) column, full 500-problem datasets minus documented infrastructure exclusions.

Agent / tool use:

- τ2-bench: airline **41.0%**, retail **62.3%**, telecom **35.5%**
- Scale MultiChallenge: **54.9%** (o3-mini grader); internal hard instruction-following eval **56.1%**; COLLIE **96.9%**
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (no tools, high effort)
- HLE: **8.7%** (no tools)
- AIME '25: **85.2%** (no tools); HMMT 2025: **75.6%**; FrontierMath: **9.6%** (python tool)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (independent)
- Hallucination (official, no tools, lower is better): LongFact-Concepts **1.0%**, LongFact-Objects **2.8%**, FActScore **7.3%**

Coding:

- SWE-bench Verified: **54.7%** (23/500 problems omitted for infrastructure, list published)
- Aider polyglot (diff): **48.4%**
- SWE-Lancer IC SWE Diamond: **$49K**
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- OpenAI-MRCR 2-needle: **43.2%** @128K, **34.9%** @256K
- Graphwalks BFS <128K: **64.0%**; Graphwalks parents <128K: **43.8%**
- BrowseComp Long Context: **80.4%** @128K, **68.4%** @256K

Multimodal (raw): MMMU **75.6%**, MMMU-Pro **62.6%**, CharXiv reasoning (python) **62.7%**, VideoMMMU (max 256 frames) **66.8%**, ERQA **50.1%**, VideoMME long w/ subtitles **65.7%**.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ2-bench retail 62.3% but airline 41.0% and telecom 35.5% land GPT-5 nano in the mid tool-use band; capped by missing Terminal-Bench 2.1/Claw-Eval numbers and weak long-horizon retrieval.
- **Reasoning: 60/100.** GPQA Diamond 71.2% with HLE 8.7% maps exactly to the methodology's mid band (GPQA 60–80%, HLE <10% → 55–65); strong AIME math for its size, limited deep-knowledge reasoning.
- **Context window: 68/100.** 272K-in/400K-total sits in the 200K–500K band (65–84), but MRCR 2-needle retrieval collapses to 43.2%/34.9% at 128K/256K, pulling it to the bottom of the tier.
- **Multimodal: 75/100.** Image and video-frame input with measured MMMU/VideoMMMU results → image+video-in band (75–90) at its floor: no audio input, no non-text output, and the weakest multimodal raw scores of the GPT-5 family.
- **Coding: 60/100.** SWE-bench Verified 54.7% and Aider polyglot 48.4% are solid mid-tier coding numbers (roughly GPT-4.1 level), far below the 90–100 frontier band.
- **Cost efficiency: 96/100.** $0.05/$0.40 per MTok undercuts even the ~$0.10/$0.20 → 97–99 reference band's blended rate on the input side; caching and Batch API push effective cost lower. Paid tier, no free quota.
- **Overall Score: 65/100.** Half-up mean of the five quality dims: (60 + 60 + 68 + 75 + 60) / 5 = 64.6 → 65. Best fit: ultra-cheap high-volume reasoning workhorse — classification, extraction, sub-task execution in agent pipelines — not a frontier coding or research model.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5 for developers", 2025-08-07, incl. official detailed benchmark tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
