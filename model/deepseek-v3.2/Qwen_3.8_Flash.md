# DeepSeek V3.2 — findings by Qwen 3.8 Flash

- Source: DeepSeek-AI (curated id `opencode/deepseek-v3.2`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2 (served as `deepseek-chat` / `deepseek-reasoner`; weights `deepseek-ai/DeepSeek-V3.2`)
- **Short description:** DeepSeek's December 2025 open-weight flagship: a **685 B-total / 37 B-active MoE** that unifies casual chat and deep reasoning in one set of weights ("hybrid thinking modes") and introduces **DeepSeek Sparse Attention (DSA)** for long-context cost efficiency — the first strong open model to make sparse attention production-practical. Text-only. It has since been superseded in DeepSeek's own API catalogue (see pricing flag below), but the weights remain widely self-hosted.
- **Provider / access:** MIT-licensed weights on Hugging Face / ModelScope (671 B+ checkpoint, multi-node inference expected); served by third parties — DeepInfra, Novita, Fireworks — and previously by the official API. Function calling, JSON/structured output, FIM completion, chat-prefix completion (non-thinking mode only). No vision on this ID.
- **Release / knowledge:** released **2025-12-01** (llm-stats); tech report on arXiv **2512.02556** — "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models" (2025-12-02). Sibling checkpoints `DeepSeek-V3.2-Exp` (sparse-attention experiment release) and `DeepSeek-V3.2-Speciale` (reasoning-tuned) exist and are **not** the ID scored here. Knowledge cutoff not disclosed.
- **IDs:** `deepseek-chat` / `deepseek-reasoner` (API), `DeepSeek-V3.2` / `deepseek-ai/DeepSeek-V3.2` (HF), `deepseek-v3.2` (aggregators), curated id `opencode/deepseek-v3.2`.
- **Context window:** **163,840 tokens (≈164 K)** total. Max output is mode/provider dependent: llm-stats records **163.8 K in / 163.8 K out** for the nominal config, while Novita caps output at 65.5 K and DeepSeek's own historical listing was 8 K–128 K; BenchLM and Artificial Analysis both report the usable window as **128 K**. This folder's curated `meta.json` ("164,000 total; 8K–128K max output") is consistent with that spread, so the honest statement is: 164 K nominal, 128 K as measured by aggregators.
- **Modalities:** **text in / text out only** — hybrid thinking/reasoning, tool calls, structured JSON. No image, no video, no audio input; no non-text output. (DeepSeek's vision capability lives on a different, later ID; the current official page explicitly marks vision "Not supported" for the Pro tier.)
- **Pricing (as of 2026-10-07):** **flag** — DeepSeek's live "Models & Pricing" page no longer lists `deepseek-v3.2` at all: it now carries `deepseek-flash` (DeepSeek-V4.1-Flash) and `deepseek-v4-pro`, with cache-hit input at $0.003–$0.044 and cache-miss $0.15–$1.32 / output $0.60–$3.96. So the curated note ("~$0.21/$0.31 per 1M, cached input $0.022") is a **historical** DeepSeek price, not a currently verifiable one. Live evidence in this pass is third-party: DeepInfra **$0.260 in / $0.130 cached / $0.380 out**, Novita $0.270/$0.400, Fireworks $0.560/$1.68; MIT self-host is effectively $0.
- **Architecture:** 685 B total / 37 B active MoE, DeepSeek Sparse Attention (token-level selection) for sub-quadratic long-context cost, multi-token-prediction training objective, hybrid thinking mode toggled per request.
- **Identity flag:** the two aggregator pages for this model are split by mode — BenchLM's `deepseek-v3-2` (non-reasoning) page is ranked and carries 18 of 623 tracks, while `deepseek-v3-2-thinking` is **unranked with only 2 rows**. Scores below therefore describe the *same weights* measured mostly in non-thinking mode; the reasoning-tuned `Speciale` variant is excluded.

### Raw benchmarks found

BenchLM `deepseek-v3-2` (non-reasoning page, updated 2026-10-07): overall **49.47/100, rank #96 of 887**, 18 of 623 tracks covered, Open Weight, 128 K context. Artificial Analysis Intelligence Index **16.0**. BenchLM `deepseek-v3-2-thinking`: unranked, 2 tracks only.

Agent / tool use:

- τ²-bench: **78.9 %** (Artificial Analysis)
- Claw-Eval: **40.2 %**
- VITA-Bench: **18.5 %**
- Gert Labs long-context QA: **29.57 %**
- Terminal-Bench 2.1 / 4.0, τ³-bench, Toolathlon, GDPval-AA, AutomationBench, BrowseComp: **no verified public score found for this ID**

Reasoning / knowledge:

- AA GPQA-Diamond: **75.1 %**; AA HLE: **11.2 %**
- CritPt: **0.9 %**
- FrontierMath v2: Tiers 1–3 **22.1 %**, Tier 4 **2.1 %** (Epoch AI)
- AA Long Context Reasoning (AA-LCR): **45.7 %**
- Omniscience (Epoch): accuracy **24.0 %**, hallucination rate **93.3 %**, index **−46.9**
- AA-IFBench: **49.0 %**
- MMLU-Pro / MMLU-Redux / AIME: no aggregator rows surfaced for this exact ID in this pass (vendor-report only)

Coding:

- SWE-bench Rebench: **60.9 %**
- React Native Evals: **71.5 %**
- Design Arena (website): **1181** (OpenRouter-sourced)
- Vibe Code Bench: **5.11 %** (Vals AI, thinking page)
- LiveCodeBench v6, SWE-bench Verified, DeepSWE, SciCode, AA Coding Index: **no verified public score found for this ID** on the ranked page

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-bench 78.9 % and Claw-Eval 40.2 % put it above the methodology's mid reference, and this is one of the most heavily deployed open tool-calling models in agentic coding harnesses; but VITA-Bench 18.5 % is poor multi-turn interactive performance, and there is no Terminal-Bench, τ³, Toolathlon or GDPval row for the ID at all, so the strong τ² number cannot be corroborated.
- **Reasoning: 58/100.** GPQA-Diamond 75.1 % sits inside the mid band (60–80 %), while HLE 11.2 %, CritPt 0.9 %, FrontierMath Tier-4 2.1 % and an AA Intelligence Index of 16.0 sit at or below its floor (band expects Index 20–35). The **93.3 % hallucination rate** with only 24.0 % accuracy on Omniscience (index −46.9) is the worst self-knowledge profile measured in this pass and is why this lands low in the band rather than mid.
- **Context window: 56/100.** 164 K nominal / 128 K as measured lands squarely in the methodology's 100 K–200 K tier (50–64). DSA genuinely lowers the *cost* of long context, but the disclosed quality evidence for actually using it is weak-to-middling (AA-LCR 45.7 %, Gert Labs 29.57 %, no MRCR or AI-Needle row for the ID), and max output is provider-inconsistent (65.5 K–163.8 K), so it sits above the tier floor on window size and below it on verification.
- **Multimodal: 15/100.** Text-only in and out — the methodology's 10–20 band for text-only models. Nothing to award and no penalty to apply beyond that: no image, video, audio or non-text output on this ID.
- **Coding: 68/100.** SWE-Rebench 60.9 % and React Native Evals 71.5 % are respectable repository-level results for an open-weight model, and Design Arena 1181 shows real front-end utility — but Vibe Code Bench 5.11 % is exactly the "<10 %" signal the methodology uses to cap the 65–75 mid band, and the ranked page has no LiveCodeBench, SWE-bench Verified, DeepSWE or SciCode row to lift it further.
- **Cost efficiency: 95/100.** MIT weights self-host for $0 and third-party routes run $0.26–$0.56 in / $0.38–$1.68 out with 50 % cache-hit discounts — the cheapest serious open-weight frontier-adjacent tier. Held back from 97–99 by the `noFreeId` flag (no free hosted tier) and by the fact that DeepSeek's own price sheet no longer covers this ID, so the durable API path is reseller-dependent.
- **Overall Score: 53/100.** Mean of the five quality dimensions (66 + 58 + 56 + 15 + 68) / 5 = 52.6 → 53; Cost excluded per `RULES.md`. Best fit: high-volume, budget-constrained text-only agentic and coding pipelines that self-host or route through cheap third parties and can tolerate text-only modality; not the choice for deep research-grade reasoning, multimodal work, or long-context-critical retrieval where the verified numbers are thin.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (BenchLM `deepseek-v3-2` and `deepseek-v3-2-thinking` model pages, llm-stats `deepseek-v3.2`, Artificial Analysis reasoning rows surfaced via BenchLM, Epoch AI Omniscience/FrontierMath listings, Vals AI, DeepSeek API docs pricing page, Hugging Face `deepseek-ai/DeepSeek-V3.2` card + arXiv 2512.02556 abstract); scores are normalized 1–100 interpretations, not official vendor scores. Coverage is thin for this ID (18 of 623 BenchLM tracks, thinking page unranked), so every dimension above names the missing harnesses rather than inferring values for them.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
