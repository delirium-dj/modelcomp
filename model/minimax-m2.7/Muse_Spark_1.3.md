# MiniMax M2.7 — findings by Muse Spark 1.3 Contributor

- Source: MiniMax/M2.7, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC); re-verified 2026-09-29 (UTC, user-signed-off re-research: AA independent set — Index 22.8/GPQA 87.4/HLE 29.6/Tau2 84.8/LCR 78.3/SciCode 50.1 — + LiveCode 79.9 + AIME 91 + SWE-Multi 76.5 + PinchBench 86.2 + Modified-MIT note added; Tool 80 → 83, Reasoning 75 → 82, Context 70 → 72, Coding 82 → 85, Overall 64 → 67)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (self-improving frontier MoE, no Zen Free ID)
- **Short description:** MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity; scored on paid pricing as no Zen Free ID exists.
- **Provider / access:** MiniMax via api.minimax.io (`MiniMax-M2.7`, Chat Completions v2.1); OpenCode Zen paid `opencode/minimax-m2.7`.
- **Release / knowledge:** 2026-03-18 release (MiniMax; open weights Apr 2026); knowledge cutoff undisclosed (re-verified 2026-09-29)
- **IDs:** `opencode/minimax-m2.7` (state explicitly: no Free ID exists on Zen)
- **Context window:** 196K–205K (200K class) / 131K out — verified via Groq docs (196K) + LLMRef (205K)
- **Modalities:** text in/out only; reasoning yes; tool calls yes; multi-agent collaboration yes
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (cached $0.06; HighSpeed variant $0.60/$2.40; no $0 tier — re-verified 2026-09-29)
- **Architecture:** sparse MoE, 230B total / 10B active (256 experts, 8 active); open weights (Modified-MIT — commercial use needs written authorization, changed from MIT post-release — re-verified 2026-09-29)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1495 Elo** (MiniMax official page; highest among open-source per vendor)
- Terminal Bench 2: **57.0%** (MiniMax official page)
- Toolathon: **46.3%** (MiniMax official page)
- MM Claw (OpenClaw usage): **62.7%** (MiniMax official page, approaching Sonnet 4.6)
- Tau2-Telecom: **84.8%** (AA OpenRouter set — re-verified 2026-09-29); Tau3-Banking: **no verified public score found**
- PinchBench: **86.2%** (vendor; within 1.2 of Opus 4.6 — re-verified 2026-09-29); Terminal-Bench Hard: **39.4%** (AA set — re-verified 2026-09-29)
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (AA set — re-verified 2026-09-29)
- HLE: **29.6%** (AA set — re-verified 2026-09-29)
- AIME 2025: **91.0%**; MMLU PRO: **80.4%** (Vals); Google-Proof Q&A: **87.4%** (llmreference third-party evals — re-verified 2026-09-29)
- IFBench: **75.7%** (AA set — re-verified 2026-09-29)
- LCR: **78.3%** (AA set — re-verified 2026-09-29); MLCR: **no verified public score found**
- CritPt: **0.6%** (AA set — very low — re-verified 2026-09-29)
- Artificial Analysis Intelligence Index: **22.8**; Coding Index **52.6**; Agentic Index **15.3** (AA OpenRouter set — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy: **26.8%** / Non-Hallucination: **64.4%** (AA set — re-verified 2026-09-29)

Coding:

- SWE-bench Verified / SWE-Pro: **56.22% SWE-Pro** (MiniMax official page, near Opus best)
- LiveCodeBench v6: **79.9%** (llmreference — re-verified 2026-09-29)
- SciCode: **50.1%** (AA set — re-verified 2026-09-29)
- SWE Multilingual: **76.5%**; Multi SWE-Bench: **52.7%**; SWE-rebench: **51.9% pass@1** (vendor/llmreference — re-verified 2026-09-29)
- Vibe Code Bench: **55.6% VIBE-Pro** (MiniMax official via Groq docs: end-to-end project delivery)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **LCR 78.3% measured (AA set); no MRCR/RULER number found**

### Normalized scores (1–100)

- **Tool use: 83/100.** GDPval 1495 plus Tau2 84.8%, PinchBench 86.2% and MM Claw 62.7% show strong productivity tool use; capped by TB 57% and Toolathon 46.3% below leaders.
- **Reasoning: 82/100.** GPQA 87.4% plus AIME 91.0%, Google-Proof 87.4% and IFBench 75.7% show strong code-adjacent reasoning; capped by HLE 29.6% and CritPt 0.6%.
- **Context window: 72/100.** 200K class with LCR 78.3% measured; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 85/100.** SWE-Pro 56.2% plus LiveCode 79.9%, SWE-Multilingual 76.5% and VIBE-Pro 55.6% show strong paid-tier coding; capped by SWE-rebench 51.9% and no DeepSWE numbers.
- **Cost efficiency: 90/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 67/100.** Mean of the five non-cost dims (83+82+72+15+85)/5 = 67.4 → 67; best-fit cheap paid agentic coding and office productivity pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (MiniMax official M2.7 page, Groq docs, Hugging Face, LLMRef); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
