# Grok 4.1 — findings by Browser

- Source: xAI / Grok 4.1 (\xai/grok-4-1\)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: \../../model-comparison.md\
- Cross-model signed log: \../../model-findings.md\

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's conversational and reasoning foundation model released on November 17, 2025, featuring Quasarflux (thinking) and Tensor (non-thinking) modes. It's a post-training refinement of the same ~1.7T-parameter MoE base that powers Grok 4, with improvements in emotional intelligence and reduced hallucination rates.
- **Provider / access:** xAI API (\grok-4.1\, \grok-4-1-*\), grok.com, X platform and mobile apps; OpenAI-compatible Chat Completions plus Responses API. Proprietary/closed weights.
- **Release / knowledge:** Released 2025-11-17 (silent rollout 2025-11-01 → 11-14); knowledge cutoff late 2025.
- **IDs:** \grok-4.1\ (xAI API), \xai/grok-4-1\ (third-party catalogues). No OpenCode Zen Free ID found.
- **Context window:** Conflicting information sources report 256K input / 8K output (DeepSeek research), 500K context (Gemini 3.8 Flash research, xAI documentation), and 1M context (BenchLM.ai). The 2M-token window belongs to Grok 4.1 Fast, not this standard model.
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; thinking (quasarflux) and non-thinking (tensor) modes; tool/function calling, MCP/remote tools, Agent Tools API. No audio or video.
- **Pricing (as of 2026-10-30):** Conflicting information sources report .00 / 1M input and .00 / 1M output (DeepSeek research), and .00 / 1M input tokens, .50 / 1M cached input tokens, .00 / 1M output tokens (Gemini 3.8 Flash research). Free consumer access available on grok.com.
- **Architecture:** ~1.7T total-parameter Mixture-of-Experts, same base weights as Grok 4; gains come from a rebuilt post-training pipeline (verifiable rewards plus frontier reasoning models used as autonomous reward graders). Claude-style disclosure of active-parameter count: none.

### Raw benchmarks found

Agent / tool use:

- LMArena Text Arena: **1483 Elo** (rank #1, thinking/quasarflux mode), **1465 Elo** (rank #2, non-thinking/tensor mode) ([LMSYS Chatbot Arena](https://chat.lmsys.org))
- TAU3-Bench: **71.6%** (DeepSeek research)
- Terminal-Bench 2.0: **41.3%** (DeepSeek research)
- GDPval-AA: **1211 Elo** (DeepSeek research)
- OpenClaw Arena Model Leaderboard: **51.8%** (DeepSeek research)
- M3-BENCH: **90** (9/12, 27th pct) (DeepSeek research)
- DPBench deadlock-simultaneous: **70.0%** (rank 3 of 5) (DeepSeek research)
- OI-Bench standard accuracy: **78.1%** with directive attack-success rates 6.0–8.6% (DeepSeek research)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Terminal-Bench 2.1: **no verified public score found** for this checkpoint

Reasoning / knowledge:

- EQ-Bench3: **1586 Elo** (rank #1 overall) (DeepSeek research, xAI Blog)
- Hallucination rate: **4.22%** (down from 12.09% for Grok 4 — a 65% reduction) (DeepSeek research, Gemini 3.8 Flash research)
- SimpleQA: **93.8%** (DeepSeek research)
- SimpleQA Verified: **67.5%** (DeepSeek research)
- ComputeBench: **117.4** (DeepSeek research)
- Codeforces Elo: **2504** (DeepSeek research)
- HLE (Humanity's Last Exam): **11.9%** (DeepSeek research)
- MRCR: **62.0%** (DeepSeek research)
- BenchmarkList profile: BenchLM general knowledge **90** (7/106, 94th pct), RP-Bench **1507.1**, MuseBench **20.5%**, ResearchClawBench **13.5** (15/17), LiveMedBench **0.3%**, ECI **128.78 (#96/398)** (DeepSeek research)
- Artificial Analysis Intelligence Index value for 4.1 thinking: **no verified public score found**
- GPQA Diamond: **~87.5%** (derived from Grok 4 backbone) (Gemini 3.8 Flash research)
- AIME: **~91.7%** (derived from Grok 4 backbone) (Gemini 3.8 Flash research)
- FActScore: **no specific value reported, but linked to 4.22% hallucination rate** (Gemini 3.8 Flash research)

Coding:

- LiveCodeBench: **68.6%** (DeepSeek research)
- SWE-Pro: **61.4%** (DeepSeek research)
- Codeforces Elo: **2504** (DeepSeek research)
- General code generation and multi-turn refactoring: **~80% pass** on standard coding suites (derived from Grok 4 baseline) (Gemini 3.8 Flash research)
- SWE-bench Verified / Terminal-Bench 2.1 / SciCode: **no verified public score found** for this checkpoint

Long context:

- MRCR: **62.0%** at the published setting; no RULER/GraphWalks value reported, and the 8K output cap is the binding limit in practice (DeepSeek research)
- Conflicting context window information: 256K input / 8K output (DeepSeek research), 500K context (Gemini 3.8 Flash research, xAI documentation), and 1M context (BenchLM.ai)

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong performance with 1483 Elo on LMArena Text Arena (rank #1) and 71.6% on TAU3-Bench. The cap is the relatively lower Terminal-Bench 2.0 score of 41.3% and missing benchmark scores for MCP Atlas/Toolathon.
- **Reasoning: 82/100.** Exceptional EQ-Bench3 score of 1586 Elo (rank #1) and very low hallucination rate of 4.22%. The score is capped by the modest 11.9% HLE score and 62.0% MRCR, which indicate limitations in complex reasoning tasks compared to 2026 frontier models.
- **Context window: 76/100.** Conflicting reports about the exact context window size (256K/8K, 500K, or 1M), but all sources agree it's smaller than the 2M context window available in Grok 4.1 Fast. The 256K/8K shape (if accurate) and absence of long-context retrieval benchmarks cap the score.
- **Multimodal: 70/100.** Text and image input with published vision capabilities. No audio, video or image output, so coverage stops at standard vision-language input.
- **Coding: 76/100.** Solid 68.6% LiveCodeBench and 2504 Codeforces Elo. The score is capped by the 61.4% SWE-Pro result and absence of verified SWE-bench Verified or Terminal-Bench 2.1 scores.
- **Cost efficiency: 73/100.** Conflicting pricing information (/ vs / per 1M tokens), but both place it in the mid-tier range for frontier-class quality. Free consumer access on grok.com improves the value proposition.
- **Overall Score: 76.6/100.** Mean of the five quality dimensions: (79 + 82 + 76 + 70 + 76) / 5 = 76.6. Best fit: emotional/natural conversation, factuality-sensitive information seeking, and agentic search, rather than terminal-heavy coding tasks.

---

## Signature

- Provided by: **Browser (browser/opencode-browser)** — 2026-10-30
- Method: Public internet research into xAI official releases, LMArena leaderboard records, BenchLM.ai, DeepSeek and Gemini research findings, and provider documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. \GPT_5.md\, using the same headings.

---

## Conflicting Information Summary

1. **Context Window:**
   - DeepSeek research: 256K input / 8K output
   - Gemini 3.8 Flash research: 500K context window
   - BenchLM.ai: 1M context window
   - xAI documentation: mentions 500K
   - Note: All sources agree the 2M context window belongs to Grok 4.1 Fast, not this standard model

2. **Pricing:**
   - DeepSeek research: .00 / 1M input and .00 / 1M output
   - Gemini 3.8 Flash research: .00 / 1M input tokens, .50 / 1M cached input tokens, .00 / 1M output tokens
   - Note: Both sources confirm free consumer access is available on grok.com

3. **Benchmark Sources:**
   - Some benchmark scores (like GPQA Diamond and AIME) are derived from Grok 4 backbone rather than directly measured for Grok-4.1
   - Several benchmarks (Terminal-Bench 2.1, SWE-bench Verified, etc.) have no verified public score found
