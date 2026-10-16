# GPT-5.5 — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources; the earlier pass had no vendor card and rested on one aggregator).
> Re-sourced this pass. **OpenAI is now confirmed** as the vendor: `gpt-5.5` (API 2026-04-24), **$5/$30 per 1M with a 1M context window**, long-context surcharge above 272K; Pro variant $30/$180. OpenAI launch rows: Terminal-Bench 2.0 **82.7%**, Expert-SWE (internal, 20h tasks) **73.1%**, GDPval (wins/ties) **84.9%**, SWE-Bench Pro **58.6%**, Tau2-bench Telecom **98.0%**, FinanceAgent 60.0%, OfficeQA Pro 54.1%, internal investment-banking 88.5%. Artificial Analysis (xhigh): **Intelligence Index 38 (#65/227)** with AA-Briefcase 1000/1218, AutomationBench-AA **40%**, Terminal-Bench 4.0 5%, SciCode 55%, HLE 42%, GDP.pdf 21%, CritPt 19%, AA-Omniscience 18; **93.8 tok/s**, **$2.63/task**. Vals AI: Terminal-Bench 2.1 **76.4%**, SWE-bench **82.6%**, LiveCodeBench 85.3%, Vibe Code Bench 69.85%, React Native Evals 84.7%, FrontierCode 1.1 Main 43.0%, CyberGym 81.8%. BenchLM (2026-10-08): overall **68.42**, agentic 61.5, coding 62.1; OSWorld 2.0 13.0%, BrowseComp 84.4%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, MRCR v2 128K–256K **87.5%**, ARC-AGI-2 85.0%, MMMU-Pro 81.2%, GPQA 93.6%, HLE 52.2% (w/tools), FrontierMath v2 T4 35.4%. LLMReference: SWE-bench Verified **82.6**, GPQA 93.6, HLE 41.4, MMMU-Pro 88.3, MMLU-Pro 88.1, ARC-AGI-2 85.0, Chatbot Arena 1488.
> **Conflicts surfaced:** (1) **AA Intelligence Index rebase** — 38 (xhigh) / 34 (medium) on **v4.3.2**, versus "unavailable" in the prior pass and versus the launch-era basket; not comparable across versions. (2) **Pricing tiers** — $5/$30 standard vs **$8/$36 long-context (>272K)** vs Pro **$30/$180**; the prior pass's "$7.78 blended" aggregator rate is a blend, not a list price. (3) **Context** — OpenAI says 1M; LLMReference/BenchLM say **1.05M**; no vendor max-output figure published. (4) **HLE** — **41.4% without tools / 52.2% with tools**; the prior pass cited only the with-tools row. (5) **Harness-sensitive coding** — Terminal-Bench 2.0 82.7% (Codex CLI) vs AA Terminal-Bench 4.0 just 5%; OSWorld-Verified 78.7% vs OSWorld 2.0 13.0%.
> Sources: https://openai.com/index/introducing-gpt-5-5 · https://artificialanalysis.ai/models/gpt-5-5 · https://www.vals.ai/benchmarks/vals_index · https://benchlm.ai/compare/claude-sonnet-5-vs-gpt-5-5 · https://www.llmreference.com/compare/gpt-5.4/gpt-5.5 · https://benchlm.ai/models/gpt-5-5

## Model card

- **Name:** GPT-5.5 (OpenAI flagship between GPT-5.4 and GPT-5.6). Not an alias of GPT-5.5 Pro — the Pro variant is a separate, differently priced SKU.
- **Short description:** OpenAI's flagship reasoning/coding model of the GPT-5.5 generation, sold on terminal-agent coding (Codex CLI), computer-use automation and knowledge work; premium priced relative to its GPT-5.6 successors and notably token-efficient on Codex tasks.
- **Provider / access:** OpenAI platform (Responses/Chat Completions) and Codex CLI; also OpenRouter, Vercel AI Gateway, AWS Bedrock. Proprietary; no open weights. No OpenCode Zen Free ID.
- **Release / knowledge:** API availability 2026-04-24 (OpenAI launch post update); knowledge cutoff not published.
- **IDs:** `gpt-5.5`; Pro sibling `gpt-5.5-pro`.
- **Context window:** **1M tokens** per OpenAI (LLMReference/BenchLM track 1.05M); long-context surcharge above 272K input tokens; no vendor max-output figure published.
- **Modalities:** text and image input (vision yes), text out; reasoning; tools, structured outputs, code execution.
- **Pricing (as of 2026-10-16):** $5.00 / 1M in, $30.00 / 1M out; **$8 / $36 above 272K** input; Batch and Flex at half rate; Priority at 2.5×. Pro variant $30/$180. Paid only.
- **Architecture:** proprietary; parameter count, MoE layout and training details not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI + BenchLM), via Codex CLI; Terminal-Bench 2.1 **76.4%** (Vals); AA Terminal-Bench 4.0 **5%**
- GDPval (wins or ties): **84.9%** (OpenAI); GDPval-AA v2.1 1218 (AA); AA-Briefcase 1000
- OSWorld-Verified: **78.7%**; OSWorld 2.0: **13.0%** (BenchLM); MCP Atlas: 75.3%; BrowseComp: 84.4%
- Tau2-Bench Telecom: **98.0%** (OpenAI); FinanceAgent 60.0%; CyberGym 81.8%; AA AutomationBench-AA **40%**; JobBench 42.7%
- Tau3-Banking / Claw-Eval / Toolathon / SWE-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI/BenchLM; Vals 93.2%); HLE: **41.4% without tools / 52.2% with tools**
- MMLU-Pro: **88.1%** (Vals); ARC-AGI-1: **95.0%**; ARC-AGI-2: **85.0%**; ARC-AGI-3: 0.4%
- Artificial Analysis Intelligence Index: **38 (#65/227, v4.3.2, xhigh)** / 34 (medium); AA-Omniscience 18; CritPt 19%; SciCode 55%
- FrontierMath v2: Tiers 1–3 **51.7%**, Tier 4 **35.4%** (BenchLM); AIME 2025 81.2%; HealthBench Pro 51.8%
- Chatbot Arena: **1488 Elo**; internal investment-banking modeling 88.5%

Coding:

- SWE-bench Verified: **82.6%** (Vals/LLMReference; prior pass's 75.6% was understated); SWE-bench Pro: **58.6%**
- Expert-SWE (internal, median ~20h human completion): **73.1%**; LiveCodeBench: **85.3%** (Vals); Vibe Code Bench: 69.85%
- Terminal-Bench 2.0: **82.7%** (Codex CLI); CursorBench 3.2: 58.4%; FrontierCode 1.1 Main: 43.0%; React Native Evals 84.7%; Aider Polyglot 88.0%
- DeepSWE / SciCode (vendor) / SWE-Atlas: **no verified public score found**

Multimodal:

- MMMU-Pro: **81.2% (BenchLM) / 88.3% (LLMReference)**; MMMU-Pro with Python: 83.2%; OfficeQA Pro: **54.1%**; Blueprint-Bench 2 (spatial): 36.2%
- Input is text+image only; no audio/video; no media generation

Long context:

- MRCR v2 64K–128K **83.1%** and MRCR v2 128K–256K **87.5%** (BenchLM); no full-1M MRCR/RULER result published. The 1M/1.05M window is vendor (OpenAI) plus tracker-confirmed.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 82.7%, Tau2-Telecom 98.0%, GDPval 84.9% wins-or-ties, OSWorld-Verified 78.7% and MCP Atlas 75.3% are strong; capped by AA Terminal-Bench 4.0 just 5%, OSWorld 2.0 13.0% on the harder harness, and no Tau3/Claw-Eval data.
- **Reasoning: 86/100.** GPQA Diamond 93.6%, HLE 52.2% with tools, ARC-AGI-2 85.0% and FrontierMath v2 T4 35.4% are solidly above mid-band; the AA Intelligence Index of 38 (xhigh) and ARC-AGI-3 0.4% keep it below the newer GPT-6 tier.
- **Context window: 94/100.** A 1M-token window (1.05M tracked) with 128K-class output and no long-context surcharge until 272K; MRCR 128K–256K 87.5% is good but no full-window recall figure exists.
- **Multimodal: 78/100.** Text + image input with MMMU-Pro 81–88% and OfficeQA Pro 54.1%, but no audio/video, no media generation, and text-only output.
- **Coding: 86/100.** SWE-bench Verified 82.6%, SWE-bench Pro 58.6%, Expert-SWE 73.1%, TB2.0 82.7% and LiveCodeBench 85.3% make it a credible coding agent; behind the GPT-5.6 siblings tracked here and weak on the harder terminal harness (AA TB4.0 5%).
- **Cost efficiency: 55/100.** $5/$30 per 1M (and $8/$36 long-context) is a premium rate; 94 tok/s helps per-task wall-clock, but there is no free tier or Zen ID and GPT-5.6 Sol undercuts it at $4/$20.
- **Overall Score: 86/100.** (84 + 86 + 94 + 78 + 86) / 5 = 85.6 → 86. Best fit: Codex-CLI-style terminal coding, Tau2-class customer-service agents and computer-use automation where GDPval-grade knowledge work and token efficiency matter; a poor fit for budget-sensitive or high-volume workloads.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (OpenAI launch post + API update, Artificial Analysis model + comparison pages, Vals AI Vals Index leaderboard, BenchLM model/comparison pages and 2026-10-08 panel snapshot, LLMReference comparisons). The prior pass's single-aggregator, largely unverified record was replaced with vendor + independent data; the AA-index rebase, pricing-tier spread, context rounding, HLE with/without tools and harness-sensitive coding rows are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
