# GLM 5.2 — findings by MiniMax M3.1 Flash

- Source: Z.ai (Zhipu) (GLM-5.2), `zai-org/GLM-5.2`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.ai's June 2026 MIT-licensed 753B/40B-active MoE for long-horizon software-engineering agents — 1M context with IndexShare sparse attention, AIME 2026 99.2%, HLE-with-tools 54.7% and Terminal-Bench 2.1 81.0% (vendor) — superseded by GLM-5.3 but still the cheapest route to that capability tier.
- **Provider / access:** Z.ai platform (`glm-5.2`), OpenCode Zen `opencode/glm-5.2` (**$1.40/M in, $4.40/M out, $0.26/M cached** — Zen price equals Z.ai's list price), OpenRouter `z-ai/glm-5.2` (snapshot `20260616`), Hugging Face `zai-org/GLM-5.2` (MIT, self-hostable; BF16 and FP8 checkpoints).
- **Release / knowledge:** **2026-06-16** (AA release date; HF repo created 2026-06-16; OpenRouter snapshot `20260616`). Knowledge cutoff not published.
- **IDs:** `glm-5.2` (Z.ai / OpenCode Zen), `z-ai/glm-5.2` (OpenRouter), `zai-org/GLM-5.2` (HF).
- **Context window:** **1,048,576** tokens (`max_position_embeddings: 1048576`), max output 131,072 (models.dev).
- **Modalities:** text in / text out only — **not multimodal**. Reasoning effort none/xhigh/high (default high).
- **Pricing (as of 2026-10-20):** **$1.40/M in, $4.40/M out, $0.26/M cached** (Z.ai pricing page and OpenCode Zen; cached storage free for a limited time).
- **Architecture:** MoE, **753,329,921,024** parameters (HF safetensors; AA lists 753B total / 40B active), 78 layers (3 dense + 75 sparse), 256 routed + 1 shared expert, top-8, hidden 6144, 1 MTP layer.

### Raw benchmarks found

> Z.ai's own card against independent Vals AI / Artificial Analysis runs — the agentic numbers diverge by harness, so both are listed.

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.ai card, Terminus-2 harness; 82.7% best reported harness) vs **77.9%** (AA) vs **67.8%** (Vals AI) — conflict flagged
- Tau2-bench: **99.12%** (AA) · Terminal-Bench 3.0: **4.6%** (frontierbench.ai, via BenchLM) · Terminal-Bench Hard: **50.8%** (AA)
- MCP-Atlas: **76.8%** (Z.ai card) · Tool-Decathlon: **48.2%** (Z.ai card) · GDPval-AA: **1418 Elo / 43.6% normalized** (AA)
- APEX-Agents: **33.7%** (AA) · AutomationBench: no verified public score found · CursorBench 3.2: **55.0%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.ai card) vs **89.49%** (AA) vs **85.6%** (Vals AI) — conflict flagged
- HLE: **40.5%** (text-only) / **54.7%** (with tools) (Z.ai card) vs **41.15%** (AA) · CritPt: **20.9%** (Z.ai card) / **2.6%** (AA)
- MMLU-Pro: **86.7%** (Vals AI) · AIME 2026: **99.2%** (Z.ai card) · HMMT Feb 2026: **92.5%** / Nov 2025: **94.4%** (Z.ai card) · IMOAnswerBench: **91.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **33.71** (#16/121 among open-weight models); output speed **87.8 tok/s**, TTFT 3.34s
- FrontierMath v2 Tiers 1–3: **59.2%** · Tier 4: **29.3%** (BenchLM)

Coding:

- SWE-bench: **82.8%** (Vals AI independent) — Z.ai publishes **no** SWE-bench Verified for GLM-5.2 · SWE-bench Pro: **62.1%** (Z.ai card)
- LiveCodeBench: **69.5%** (Vals AI) · DeepSWE: **46.2%** (Z.ai card) · ProgramBench: **63.7%** (BenchLM) · NL2Repo: **48.9%** (BenchLM) · SciCode: **51.16%** (AA) · FrontierSWE (dominance): **74.4** (Z.ai card)

Long context:

- No MRCR / RULER measurement published for GLM-5.2 despite the 1M window (IndexShare targets 2.9× fewer per-token FLOPs at 1M per the card).

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 81.0% (vendor) / 67.8% (Vals), τ²-bench 99.1%, MCP-Atlas 76.8% and GDPval-AA 1418 are frontier-adjacent, held back by Tool-Decathlon 48.2%, APEX-Agents 33.7% and Terminal-Bench 3.0 at 4.6%.
- **Reasoning: 84/100.** GPQA 85.6–91.2%, HLE 40.5–54.7%, MMLU-Pro 86.7%, AIME 2026 99.2% and FrontierMath T1–3 59.2% are frontier-tier, capped by an AA Intelligence Index of 33.7 and a CritPt spread of 2.6% (AA) vs 20.9% (vendor).
- **Context window: 92/100.** 1,048,576 tokens with 131,072 max output is the top tier; no long-context retrieval test is published, so it sits below the 95+ band.
- **Multimodal: 15/100.** Text-in/text-out only — Z.ai ships separate vision models (GLM-4.6V, GLM-OCR) for image work.
- **Coding: 79/100.** SWE-bench 82.8% (independent), SWE-bench Pro 62.1%, ProgramBench 63.7% and SciCode 51.2% are strong mid-to-high band results, pulled down by DeepSWE 46.2% and the missing LiveCodeBench in the vendor card.
- **Cost efficiency: 78/100.** $1.40/M in and $4.40/M out for a 753B open-weight flagship is mid-market — good value next to the Claude tier, and MIT weights make self-hosting free.
- **Overall Score: 70/100.** Mean of the five quality dims = (78 + 84 + 92 + 15 + 79) / 5 = 69.6 → **70**. Best fit: long-horizon software-engineering agents on a self-hostable MIT MoE — and verify agentic claims on your own harness, since vendor and independent Terminal-Bench runs differ by 13 points.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Z.ai pricing page, docs and Hugging Face model card/config, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
