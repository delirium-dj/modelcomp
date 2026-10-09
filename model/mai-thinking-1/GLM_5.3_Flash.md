# MAI-Thinking-1 — findings by GLM 5.3 Flash

- Source: Microsoft AI (`mai-thinking-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first reasoning model, built from scratch on enterprise-grade commercially licensed data without third-party distillation. A medium-footprint (~1T total / 35B active) MoE targeting serious math, coding, and real-world enterprise deployment at a mid-weight price.
- **Provider / access:** Microsoft Foundry (public preview, serverless route `mai-thinking-1`); MAI Playground (`https://playground.microsoft.ai/chat?model=mai-thinking-1-latest`); reachable via Azure AI Foundry Model Router and gateways (LiteLLM, Portkey, Helicone, Kong). Uses Microsoft Foundry's integrated evaluation, observability, safety, and deployment stack.
- **Release / knowledge:** 2026-06-02 release (LLM Reference; technical paper dated 2026-06-02); knowledge cutoff not stated.
- **IDs:** `microsoft/mai-thinking-1` (Foundry) and `mai-thinking-1-latest` (Playground); no Free ID on OpenCode Zen verified.
- **Context window:** 256K total, 64,000 max output tokens (LLM Reference specs) — verified against the LLM Reference aggregator; no first-party docs page states the window.
- **Modalities:** text in, text out (no vision/audio listed on the model page or aggregator); reasoning yes (first reasoning model from Microsoft AI); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** no verified public API pricing found — LLM Reference's Microsoft Foundry route shows no price; vendor describes "a mid-weight price point". Paid, proprietary (weights not released).
- **Architecture:** ~1T total / 35B active parameters, sparse Mixture-of-Experts; proprietary (commercial use conditional); built from scratch, no third-party distillation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** (Microsoft technical paper main_20260602_2.pdf via LLM Reference)
- Multi-Challenge: **53.0%** (llm-stats, leaderboard rank 15 of 28)
- GDPval / Tau2/Tau3 / Claw-Eval: no verified public score found
- Surge blind side-by-side (1,276 tasks): preferred over Claude Sonnet 4.6 for overall quality; trailed Claude Opus 4.6 (Microsoft AI model page / LLM Reference)

Reasoning / knowledge:

- AIME 2025: **97.0%** (Microsoft via LLM Reference)
- AIME 2026: **94.5%** (Microsoft via LLM Reference)
- HMMT February 2026: **84.9%** (Microsoft technical paper via LLM Reference)
- GPQA Diamond: **84.2%** (Microsoft technical paper via LLM Reference)
- MMLU-Pro: **85.0%** (llm-stats)
- Artificial Analysis Intelligence Index: no verified public score found
- HLE / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Verified: **73.5%** (Microsoft technical paper via LLM Reference, rank 48 of 90)
- SWE-bench Pro: **52.8%** (Microsoft technical paper via LLM Reference, rank 35 of 49)
- LiveCodeBench (v6): **87.7%** (Microsoft technical paper via LLM Reference, rank 12 of 67)
- SciCode / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (MRCR/RULER/AA-LCR not published; 256K is the stated window)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 46.0% sits at the bottom of the 45–60 mid-band mapped to 50–70, and Multi-Challenge 53.0% is mid-pack; missing GDPval/Tau numbers cap the score despite strong human side-by-side preference over Sonnet 4.6.
- **Reasoning: 76/100.** Elite competition math — AIME 2025 97.0%, AIME 2026 94.5%, HMMT 84.9% — plus GPQA Diamond 84.2% approaching the 90%+ frontier reference; no independent Intelligence Index score and no HLE/LCR numbers keep it below frontier.
- **Context window: 74/100.** 256K total / 64K output sits inside the 200K–500K band; no measured long-context retrieval benchmark is published to climb toward the 1M tiers.
- **Multimodal: 15/100.** Text-only input and output — no vision, audio, or image support listed on the model page or aggregators.
- **Coding: 74/100.** SWE-bench Verified 73.5% nears the DeepSWE 74%+ frontier reference and LiveCodeBench v6 87.7% clears the ~80% marker, but SWE-bench Pro 52.8% is weak for a reasoning flagship and missing terminal/agent numbers cap it.
- **Cost efficiency: 80/100.** Provisional — no verified public API pricing found (Foundry route price unpublished); vendor positions it at "a mid-weight price point", scored conservatively mid-band. Not counted toward Overall.
- **Overall Score: 59/100.** Mean of the five quality dims (55 + 76 + 74 + 15 + 74) / 5 = 58.8 → 59. Best-fit recommendation: solid mid-weight reasoning pick for math-heavy enterprise flows with traceable data governance; pair with a stronger agentic coder for repository-scale engineering.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Microsoft AI model page, LLM Reference aggregator, Microsoft technical paper via LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
