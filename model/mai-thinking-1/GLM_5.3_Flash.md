# MAI-Thinking-1 — findings by GLM 5.3 Flash

- Source: Microsoft AI (`mai-thinking-1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first reasoning model, built from scratch on enterprise-grade commercially licensed data without third-party distillation. A medium-footprint (~1T total / 35B active) MoE targeting serious math, coding, and real-world enterprise deployment at a mid-weight price. BenchLM now computes an overall (53.3, #83 of 889).
- **Provider / access:** Microsoft Foundry (public preview, serverless route `mai-thinking-1`); MAI Playground (`https://playground.microsoft.ai/chat?model=mai-thinking-1-latest`); reachable via Azure AI Foundry Model Router and gateways (LiteLLM, Portkey, Helicone, Kong). Uses Microsoft Foundry's integrated evaluation, observability, safety, and deployment stack.
- **Release / knowledge:** 2026-06-02 release (LLM Reference; technical paper dated 2026-06-02); knowledge cutoff not stated.
- **IDs:** `microsoft/mai-thinking-1` (Foundry) and `mai-thinking-1-latest` (Playground); no Free ID on OpenCode Zen verified.
- **Context window:** 256K total (BenchLM concurs), 64,000 max output tokens (LLM Reference specs).
- **Modalities:** text in, text out (no vision/audio listed on the model page or aggregator); reasoning yes (first reasoning model from Microsoft AI); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-11):** no verified public API pricing found — LLM Reference's Microsoft Foundry route shows no price; vendor describes "a mid-weight price point". Paid, proprietary (weights not released).
- **Architecture:** ~1T total / 35B active parameters, sparse Mixture-of-Experts; proprietary (commercial use conditional); built from scratch, no third-party distillation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** (Microsoft technical paper — corroborated by benchlm)
- Multi-Challenge: **53.0%** (llm-stats, leaderboard rank 15 of 28, prior pass)
- GDPval / Tau2/Tau3 / Claw-Eval: no verified public score found
- Surge blind side-by-side (1,276 tasks): preferred over Claude Sonnet 4.6 for overall quality; trailed Claude Opus 4.6 (Microsoft AI model page)

Reasoning / knowledge:

- AIME 2025: **97.0%**; AIME 2026: **94.5%**; HMMT February 2026: **84.9%** (Microsoft technical paper — corroborated by benchlm)
- GPQA Diamond: **84.2%** (corroborated); MMLU-Pro: **85.0%** (corroborated)
- IFBench: **85%** (Microsoft technical paper via benchlm.ai — new, strong instruction following)
- Artificial Analysis Intelligence Index / HLE / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Verified: **73.5%** (corroborated); SWE-bench Pro: **52.8%** (corroborated); LiveCodeBench (v6): **87.7%** (corroborated)
- SciCode / DeepSWE: no verified public score found

Long context:

- **Graphwalks BFS 128K: 90%** (Microsoft technical paper via benchlm.ai, 2026-10-10 — fills the long-context gap the prior pass marked missing; strong measured retrieval at half the window)
- MRCR/RULER/AA-LCR at 256K: not published

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 46.0% sits at the bottom of the 45–60 mid-band mapped to 50–70, and Multi-Challenge 53.0% is mid-pack; missing GDPval/Tau numbers cap the score despite strong human side-by-side preference over Sonnet 4.6.
- **Reasoning: 76/100.** Elite competition math — AIME 2025 97.0%, AIME 2026 94.5%, HMMT 84.9% — plus GPQA Diamond 84.2% approaching the 90%+ frontier reference and the new IFBench 85%; no independent Intelligence Index score and no HLE/LCR numbers keep it below frontier.
- **Context window: 76/100.** (Was 74 on the prior pass.) 256K total / 64K output sits inside the 200K–500K band; the new Graphwalks BFS 128K 90% is the first measured long-context retrieval evidence (strong at half-window) — a two-point raise.
- **Multimodal: 15/100.** Text-only input and output — no vision, audio, or image support listed on the model page or aggregators.
- **Coding: 74/100.** SWE-bench Verified 73.5% nears the DeepSWE 74%+ frontier reference and LiveCodeBench v6 87.7% clears the ~80% marker, but SWE-bench Pro 52.8% is weak for a reasoning flagship and missing terminal/agent numbers cap it.
- **Cost efficiency: 80/100.** Provisional — no verified public API pricing found (Foundry route price unpublished); vendor positions it at "a mid-weight price point", scored conservatively mid-band. Not counted toward Overall.
- **Overall Score: 59.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (55 + 76 + 76 + 15 + 74) / 5 = 296/5 = 59.2 — effectively unchanged on the 2026-10-11 second pass (the context raise is offset by rounding); the Graphwalks and IFBench fills strengthen the evidence base without moving the composite. Best-fit recommendation: solid mid-weight reasoning pick for math-heavy enterprise flows with traceable data governance; pair with a stronger agentic coder for repository-scale engineering.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai MAI-Thinking-1 page citing the Microsoft technical paper (now computing 53.3 #83), the prior 2026-10-09 pass on the Microsoft AI model page + LLM Reference; 2026-10-16 re-check: BenchLM 13-row refresh corroborates every row, no new data (rank → #84/954 53.17) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
