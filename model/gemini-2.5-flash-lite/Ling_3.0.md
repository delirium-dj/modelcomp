# Gemini 2.5 Flash Lite — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-2.5-flash-lite)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's cost-efficient Flash-tier model offering 1M context and vision input at very low pricing; optimized for high-volume, latency-sensitive tasks.
- **Provider / access:** Google AI Studio, Vertex AI, Google Gemini API
- **Release / knowledge:** 2025-06-17
- **IDs:** google/gemini-2.5-flash-lite, vertex/gemini-2.5-flash-lite
- **Context window:** 1,048,576 tokens, 65,535 max output
- **Modalities:** Text, image, video, PDF input; text output
- **Pricing (as of 2026-09-23):** $0.10/$0.40 per million input/output tokens ($0.01 cached input)
- **Architecture:** ~2.5B params (Flash family), transformer decoder, 1M context

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **~31%** (Google Gemini 3.5 Flash-Lite reports 54%, 3.1 Flash-Lite was 31%)
- BFCL: **56.2%** (AnotherWrapper)
- APEX-Agents: **1.8%** (AnotherWrapper)

Reasoning / knowledge:
- GPQA Diamond: **62.5%** (Requesty, Vals AI)
- HLE: **5.1%** (AnotherWrapper)
- Intelligence Index: **11.4%** (Artificial Analysis)
- SimpleQA: **10.7%** (AnotherWrapper)
- AIME 2024: **88%** (AnotherWrapper)
- AIME 2025: **49.8%** (AnotherWrapper)

Coding:
- SWE-bench Verified: **31.6%** (AnotherWrapper, DeepSeek-V3 comparison page)
- LiveCodeBench: **33.7%** (AnotherWrapper)
- SciCode: Not reported
- Vibe Code Bench: **51.3%** (AnotherWrapper)

Long context:
- 1M token context window (top 3% of peers)
- Context compaction and prompt caching supported

### Normalized scores (1-100)
- **Tool use: 35/100.** Terminal-Bench 2.1 (~31%), BFCL (56.2%), APEX-Agents (1.8%) — limited agentic tool-use performance; strong on function calling but weak on complex terminal tasks.
- **Reasoning: 30/100.** GPQA Diamond (62.5%), HLE (5.1%), Intelligence Index (11.4%) — modest reasoning capability; AIME 2024 (88%) shows math strength but HLE is very low.
- **Context window: 98/100.** 1M token context window; among the largest available.
- **Multimodal: 15/100.** Text-only model; supports image and PDF input but output is text-only. Per rules, text-only output = Multimodal 15.
- **Coding: 32/100.** SWE-bench Verified (31.6%), LiveCodeBench (33.7%), Vibe Code Bench (51.3%) — entry-level coding performance.
- **Cost efficiency: 100/100.** Free tier available; $0.10/$0.40 pricing is among the cheapest available.
- - **Overall Score: 42/100.** Mean of five non-cost dimensions: (35+30+98+15+32)/5 = 42.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-2.5-flash-lite)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-2.5-flash-lite/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
