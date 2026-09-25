# Grok 4.20 — findings by ChatGPT 5 (openai/gpt-5)

- Source: xAI (`grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (available in Reasoning, Non-Reasoning, and Multi-Agent variants; no Free-tier ID on OpenCode Zen — paid API only)
- **Short description:** xAI's flagship reasoning model line, released March 2026. Emphasizes industry-leading inference speed, agentic tool calling, low hallucination rate, and strict prompt adherence. Aliases: `grok-4.20-beta`, `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`. Top use case: complex multi-step reasoning, agentic workflows, and long-context document analysis.
- **Provider / access:** xAI API (`docs.x.ai`); also available via OpenRouter (`x-ai/grok-4.20`), Oracle OCI Generative AI (`xai.grok-4.20-0309-reasoning` / `xai.grok-4.20-0309-non-reasoning`), Google Cloud Vertex AI (`grok-4.20-reasoning`). Uses Chat Completions API. Oracle docs list model IDs and aliases explicitly.
- **Release / knowledge:** Released 2026-03-31 (OpenRouter) / 2026-03-10 (some trackers); knowledge cutoff Sep 1, 2025. Oracle documentation updated 2026-06-18.
- **IDs:** `x-ai/grok-4.20` (OpenRouter); `xai.grok-4.20-0309-reasoning` / `xai.grok-4.20-0309-non-reasoning` (OCI); `grok-4.20-reasoning` (Google Cloud). No Free ID exists on OpenCode Zen — paid API only.
- **Context window:** 1,000,000 tokens (OCI docs: "maximum prompt + response length is 1 million tokens"). OpenRouter lists 2,000,000 tokens. Verified via vendor documentation (docs.x.ai, Oracle). Output limit: 131,000 tokens per playground run.
- **Modalities:** Text and image input → text output. Reasoning: yes (Reasoning variant); non-reasoning variant also available. Tool calls: yes. JSON mode / structured outputs: yes. No audio or video input reported by official sources.
- **Pricing (as of 2026-09-25):** Short context (<200k tokens): $1.25/M input, $2.50/M output, $0.20/M cached. Long context (≥200k tokens): $2.50/M input, $5.00/M output, $0.40/M cached. OpenRouter shows $2/M input, $6/M output for the beta routing. Paid only; no free tier. US regional endpoint incurs 10% premium.
- **Architecture:** Proprietary. Parameter count undisclosed. Multi-agent variant orchestrates multiple agents in parallel for deep research tasks. Open-weights license: no (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench Hard 37.9% reported by Artificial Analysis via Ominigate; Terminal-Bench 4.0 shows 0% in AA comparison table, but no TB2.1 score)
- Tau3-Banking / Tau2-Bench: **τ²-Bench 59.9%** (Design for Online, non-reasoning variant); **τ²-Bench 93%** (olud.ai, reasoning variant); Multi-Agent Beta τ²-Bench 96.5%. Tau3-Banking specifically: no verified public score found.
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AI Flash Report, rank #9); **88.5%** (Design for Online, Multi-Agent Beta); **83–88%** (Y Build review range)
- HLE: **32.2%** (llmbase.ai); **30.0%** (Design for Online); **34.5%** (olud.ai); Multi-Agent Beta: 26.7%
- LCR / MLCR: **LCR 58.0%** (llmbase.ai); **LCR 68.0%** (Multi-Agent, AgentBreaking); **LCR 62.3%** (olud.ai)
- CritPt: **2.0%** (Multi-Agent, AgentBreaking)
- Artificial Analysis Intelligence Index / BenchLM overall: **AA Index 36.5** (ChatBench ingestion); **BenchLM 67.27/100** (public rank #29)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (low hallucination rate claimed by xAI but no numeric AA-Omniscience score surfaced)

Coding:

- SWE-bench Verified / SWE-Pro: **76.7%** (BenchLM secondary row); **78%** (TokenMix blog); **80.8%** (agentmarketcap.ai, April 2026 trajectory); SWE-bench Pro: 51.8% (LMSpeed rank #44)
- LiveCodeBench: **74.2%** (LiveCodeBench Pro, BenchLM via therouter.ai)
- SciCode / AA-SciCode: **45.6%** (llmbase.ai / Ominigate); **44.7%** (Design for Online, Multi-Agent Beta)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **Coding Index 59.4** (ChatBench, coding rank #59); LiveBench Coding 58.54/100

Long context:

- **No long-context retrieval reported** for MRCR, RULER, or GraphWalks at specific window lengths. Context window is documented at 1M–2M tokens, but no retrieval accuracy at 512K+ was verified.

### Normalized scores (1-100)

- **Tool use: 58/100.** Terminal-Bench Hard 37.9% and τ²-Bench 59.9–93% place it in the mid tier (TB2.1 45-60%, Tau3 10-25% range). Agent tasks rank #27, browser use #30, computer use #19 on ChatBench. Capped by lack of Terminal-Bench 2.1 and Tau3-Banking verification.
- **Reasoning: 91/100.** GPQA Diamond 91.1% is frontier-level (90%+); HLE 30–34.5% is competitive but below the 40%+ frontier threshold; AA Index 36.5 and LCR 58–68% cap the score. Strongest dimension.
- **Context window: 95/100.** 1M tokens verified via Oracle and xAI docs; OpenRouter lists 2M. Tier: ≥1M = 95-100. Not 100 because no ≥98% retrieval at 512K+ (MRCR/RULER) is publicly reported.
- **Multimodal: 65/100.** Text and image input → text output. No video, audio, or PDF input reported. +image in = 60-70 tier. Multi-Agent variant supports "screenshots, documents, charts" per BenchLM but no modality expansion beyond image.
- **Coding: 72/100.** SWE-bench Verified 76.7–80.8% is mid-to-high (frontier DeepSWE 74%+, TB2.1 85%+ = 90-100). LiveCodeBench Pro 74.2%, SciCode 45.6%, Coding Index 59.4. Capped by lack of DeepSWE and Terminal-Bench 2.1 scores.
- **Cost efficiency: 88/100.** Paid value at $1.25/$2.50 per 1M (short context) and $2.50/$5.00 (long context). Maps to ~$1.25/$4.25 = ~88 tier. No free tier. Cached input at $0.20–0.40/M offers cost reduction for repetitive prompts.
- **Overall Score: 76.2/100.** Mean of Tool use (58) + Reasoning (91) + Context window (95) + Multimodal (65) + Coding (72) = 381 / 5 = 76.2. Best-fit: long-context reasoning and agentic document analysis where speed and 1M-token context outweigh the mid-tier tool-use and coding scores.

---

## Signature

- Provided by: **ChatGPT 5 (openai/gpt-5)** — 2026-09-25
- Method: Public internet research across xAI official docs (docs.x.ai), Oracle OCI documentation, OpenRouter, Artificial Analysis aggregators (ChatBench, BenchLM, LMSpeed), and independent review sites (Y Build, Design for Online, TokenMix). Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
