# Mistral Large 4 — findings by Qwen 3.7 Plus

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship 1T-parameter natively multimodal MoE (52B active), nicknamed "Le Chonk." Trained on 3,800 NVIDIA Grace Blackwell GPUs in European datacenters. Open-weight hybrid instruct-and-reasoning model with exceptional cybersecurity, finance, and agentic coding capabilities. Public preview released October 6, 2026; weights due end of October 2026.
- **Provider / access:** Mistral Studio API (public preview); OpenRouter `mistralai/mistral-large-4-0`. OpenCode Zen `opencode/mistral-large-4`.
- **Release / knowledge:** 2026-10-06 public preview; knowledge cutoff not publicly stated.
- **IDs:** `opencode/mistral-large-4` (OpenCode Zen), `mistralai/mistral-large-4-0` (OpenRouter).
- **Context window:** 1,000,000 tokens (1M) (per Mistral docs and BenchLM).
- **Modalities:** Text and image in; text out; hybrid reasoning (instruct + reasoning); tool calling; 160+ languages; natively multimodal.
- **Pricing (as of 2026-10-20):** $1.36/1M input, $0.14/1M cached input, $4.18/1M output (per Mistral API pricing docs).
- **Architecture:** Sparse MoE, ~1.05T total parameters, ~52B active per token; open weights pending (end of October 2026); trained with Mistral Forge (same RL/customization pipeline offered to enterprise customers).

### Raw benchmarks found

> Sources: Mistral AI announcement (mistral.ai/news/mistral-large-4, 2026-10-06), BenchLM (benchlm.ai/models/mistral-large-4, 2026-10-20), Artificial Analysis (via BenchLM), Vals AI (via Mistral announcement), cleverhack.com, llm-stats.com. Coverage note: BenchLM covers 20 of 666 benchmarks — score is conservative.

Agent / tool use:

- Cybench: **93.0%** (Mistral announcement — one of highest scores reported for open-weight model)
- AA Cyber Index: top 5 globally, 82% on vulnerability reproduction+patch task (Mistral announcement)
- AutomationBench-AA: **59.9%** (Artificial Analysis via BenchLM — ahead of Kimi K3, MiMo-V2.6-Pro, DeepSeek V4 Pro)
- GDPval-AA: **1422 Elo** / normalized **46.1%** (Artificial Analysis via BenchLM)
- Finance Agent v2: **54.7%** (Vals AI via Mistral announcement)
- AA-Briefcase: **1392 Elo** (Artificial Analysis via BenchLM — ahead of DeepSeek V4 Pro)
- AA Terminal-Bench 4.0: **26.8%** (Artificial Analysis via BenchLM)
- GDP.pdf: **18.6%** (Artificial Analysis via BenchLM)
- B3 Attack Resistance: **93.3%** (Mistral — highest among competitors on Lakera benchmark)

Reasoning / knowledge:

- AA-LCR: **81.3%** (Artificial Analysis via BenchLM — strong long-context reasoning)
- AA-HLE: **35.0%** (Artificial Analysis via BenchLM)
- CritPt: **10.6%** (Artificial Analysis via BenchLM)
- AA Intelligence Index: **38.4** (Artificial Analysis via BenchLM)
- STEMBench: **2.50** (Ulam STembench120 audit, Oct 14 2026)
- AA-Omniscience Accuracy: **25.8%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **41.9%** (Artificial Analysis via BenchLM)
- GPQA Diamond: no verified public score found on BenchLM; cleverhack.com reports 87.9% (unverified)

Coding:

- Vibe Code Bench: **78.40%** (Vals AI via BenchLM — strong end-to-end software delivery)
- DeepSWE v1.1: **61.7%** (Mistral announcement)
- SWE Atlas QnA: **59.4%** (Mistral announcement)
- Terminal-Bench 4.0: **28.3%** (Mistral announcement; AA: 26.8%)
- AA-SciCode: **54.2%** (Artificial Analysis via BenchLM)
- Coding Agent Index: **49.8%** (Mistral — ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max)
- Surge AI human eval (coding): **3.74/5** (2nd of 5 models, behind Claude Opus 5 at 4.22)

Multimodal & Grounded:

- AA-MMMU-Pro: **76.4%** (Artificial Analysis via BenchLM)
- Dense 200 (visual grounding): **42%** (Mistral — surpasses GPT-6 Astra at 41%)
- ChartQA Pro: score shown in Mistral charts (exact number not extracted)
- Design Arena Website: **1259** (OpenRouter benchmarks)

Long context:

- AA-LCR: **81.3%** at 1M context (Artificial Analysis via BenchLM)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: BenchLM covers only 20 of 666 benchmarks — partial coverage means scores are conservative.

- **Tool use: 77/100.** Exceptional cybersecurity: Cybench 93%, AA Cyber Index top 5 globally, B3 Attack Resistance 93.3%. AutomationBench 59.9% beats Kimi K3 and MiMo-V2.6-Pro. Finance Agent v2 54.7% is solid. However, GDPval-AA 46.1% and Terminal-Bench 4.0 26.8% lag frontier. Capped by weak Terminal-Bench 4.0 and GDP.pdf 18.6%.
- **Reasoning: 74/100.** AA-LCR 81.3% is strong long-context reasoning. AA Intelligence Index 38.4 is moderate. HLE 35.0% is below frontier (leaders at 46-67%). CritPt 10.6% and STEMBench 2.50 are very weak. GPQA Diamond not verified on BenchLM. Capped by poor performance on hardest reasoning benchmarks (CritPt, STEMBench, HLE).
- **Context window: 95/100.** 1M tokens native. AA-LCR 81.3% confirms effective long-context retrieval. Docked 5 for no MRCR/RULER/GraphWalks at specific window lengths.
- **Multimodal: 82/100.** Natively multimodal (text + image). MMMU-Pro 76.4% is solid. Dense 200 visual grounding 42% surpasses GPT-6 Astra (41%). Strong document/chart/video understanding per Mistral demos. GDP.pdf 18.6% is moderate. Capped by limited independent multimodal benchmark coverage.
- **Coding: 78/100.** Vibe Code Bench 78.4% is excellent for real-world delivery. DeepSWE 61.7% is competitive. Coding Agent Index 49.8% beats DeepSeek V4 Pro and Qwen3.8 Max. Surge AI human eval 2nd of 5 (behind only Claude Opus 5). However, Terminal-Bench 4.0 28.3% and SWE-Atlas QnA 59.4% are moderate. Capped by Terminal-Bench 4.0 gap.
- **Cost efficiency: 72/100.** $1.36/$4.18 per 1M is mid-range pricing — cheaper than frontier models (GPT-6 Astra, Claude Opus 5) but above budget-tier options. Cache hit at $0.14 helps. European-hosted option adds value for data-sovereignty requirements.
- **Overall Score: 81/100.** Mean of five non-cost dims: (77 + 74 + 95 + 82 + 78) / 5 = 81.2, half-up = 81. Europe's strongest open-weight flagship: exceptional cybersecurity (Cybench 93%, top 5 globally), strong Vibe Code Bench (78.4%), 1M context, and natively multimodal — at mid-range pricing. Best fit for: cybersecurity, finance/legal agents, European data-sovereignty deployments, and multimodal agentic workflows.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Mistral AI announcement, BenchLM, Artificial Analysis, Vals AI, cleverhack.com, llm-stats.com, OpenRouter, and Mistral API pricing docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
