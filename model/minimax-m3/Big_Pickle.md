# MiniMax M3 — findings by Big Pickle

- Source: MiniMax (`minimax-m3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 2026 open-weight flagship — a small-active-param multimodal MoE (428B total / ~23B active) with MiniMax Sparse Attention for economical 1M-token context, native image/video input, and agentic coding. Top open-source model on PostTrainBench; long-context leader (AA-LCR #1).
- **Provider / access:** MiniMax API / miniMax.io Token Plan, OpenRouter, Fireworks ($0.30/$1.20), DeepInfra, Together, Nebius, Novita, Azure AI Foundry, Volcengine Ark, plus a `-free` tier ($0, deal ended 2026-09-05). Weights on Hugging Face (MiniMax Community License, commercial use conditional, code MIT).
- **Release / knowledge:** 2026-05-31/06-01.
- **IDs:** `minimax-m3` / `minimaxai/minimax-m3` / `FW-MiniMax-M3` (12+ providers).
- **Context window:** 1,048,576 tokens; max output up to 512K on most providers (131K on some; 16K on NVIDIA).
- **Modalities:** text, image, video, PDF input; text output; thinking (default) and standard modes; tools, parallel function calling, structured/JSON output, prompt caching.
- **Pricing (as of 2026-09-20):** $0.30 in / $1.20 out per 1M, cache read $0.06 (MiniMax/fireworks). Cheapest frontier-tier multimodal class pricing.
- **Architecture:** Sparse MoE, ~428B total / 23B active; MiniMax Sparse Attention + hybrid; open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **83.50%** (#15/58) (datalearner/AA).
- SWE-bench Pro: **59.0%** (#15/60, MiniMax-reported via llmreference; wheel-track agreed #14/46 ladder).
- MCP-Atlas / GDPval-AA: MiniMax-referenced but no clean public figure surfaced in my trail.
- PostTrainBench: **0.371** (#2/7 overall, **#1 open-source**) (llm-stats).
- Terminal-Bench 2.1: **66.0%** (MiniMax) vs **53.56%** (Vals #12) — harness-dependent.

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA via commandcode) / **81.31%** standard-mode (datalearner #132/270) / **0.90 #14** (cloudprice AA) — spread across evaluators and modes.
- IFBench: **0.8 (#3)**; HLE: **0.4 (#37)**; LiveBench Reasoning **74.5**; LiveBench Data Analysis **76.2** (cloudprice/benchgecko).
- SimpleBench (thinking): 45.80 (#56/92).

Coding:

- SWE-bench Verified: **80.5%** (llmreference, #14/81) / **75.00%** (Vals #17).
- Terminal-Bench 2.1 (Vals): 53.56% #12; Vibe Code Bench: **47.57%** — massive +35-point jump over MiniMax M2.7 (Vals).
- AA Coding Index: **58.6** (#33); LiveBench Coding 68.2, Agentic Coding 60.0 (benchgecko).
- Text Arena (Coding Elo 1527.75 #14); Chatbot Arena Overall 1448.2, Math 77.0 (benchgecko).
- SciCode (thinking): 45.37 (#10/15); TerminalBench Hard: 0.4 (#36) (AA).

Long context:

- **AA-LCR: 80.33% (#1/28)** (datalearner/AA); RAG and long-context-arena work verified; LCR 0.8 (#12, cloudprice AA); 512K max output on most providers.
- Context Arena (thinking): 51.15 (#87/126).

Multimodal:

- MMMU-Pro: **78.1** (LLM-Stats via llmreference); native text/image/video/PDF intake (cloudprice 4/5 input modalities); weak-to-absent audio support.

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 83.5% and SWE-bench Pro 59% are solid; Terminal-Bench 2.1 is inconsistent across harnesses (53–66%) — strong but not frontier. PostTrainBench #2 overall shows real autonomous-work capability.
- **Reasoning: 81/100.** GPQA spread (81–93) and IFBench #3 (AA) indicate good reasoning; HLE #37 keeps it off the frontier.
- **Context window: 90/100.** AA-LCR #1 (80.33%) plus 1M window and 512K output is genuinely elite long-context territory.
- **Multimodal: 80/100.** Native image/video/PDF with MMMU-Pro 78.1; a purpose-built multimodal foundation — absent audio only.
- **Coding: 78/100.** SWE-bench Verified ~75–80% and a 35-pt Vibe Code jump are strong open-source coding; AA Coding Index 58.6 trails the frontier tier.
- **Cost efficiency: 93/100.** $0.30/$1.20 with $0.06 cache reads, plus 12+ hosting options and open weights — among the best capability-per-dollar in 2026. Sparse attention keeps long-context real.
- **Overall Score: 81/100.** Mean of the five quality dims (78+81+90+80+78)/5 = 81.4 → 81. The best-value open multimodal workhorse of mid-2026: long-context champion at commodity prices.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (datalearner, cloudprice/models.dev, llm-stats PostTrainBench, benchgecko, llmreference, vals.ai, commandcode, inferencex semianalysis, minimax.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.