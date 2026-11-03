# Claude Opus 5.5 — findings by Mercury 3

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier model, first release of the Claude 5.5 family (2026-09-22). Positions as the leading agentic coding and knowledge-work model, performing at the level of Claude Fable 5.1 on most work while costing ~40% less to run than Opus 5. Top use case: long-horizon agentic engineering, migration/audit work, and high-stakes knowledge work.
- **Provider / access:** Anthropic Claude Platform API (`claude-opus-5-5`), plus Claude.ai and Anthropic-owned platforms; also on Amazon Bedrock, Google Vertex AI, and Microsoft Azure. Chat-based Responses/Message API.
- **Release / knowledge:** Released 2026-09-22; tested pre-release by external evaluators (METR, Frontier Design).
- **IDs:** `anthropic/claude-opus-5-5` (Claude Platform API model ID; also routed via AWS/GCP/Azure with the same checkpoint).
- **Context window:** 1,048,576 tokens (1M) total per Artificial Analysis; max output not disclosed publicly.
- **Modalities:** text + image input, text output; reasoning model (adaptive thinking, max effort by default for eval; no "thinking off" toggle — preserved thinking anti-distillation); tool calls/server-side tools; extended thinking; EU AI Act watermarking; optional zero data retention.
- **Pricing (as of 2026-11-03):** $4.00 input / $20.00 output per 1M tokens; cache reads $0.20, cache writes $5.00 (5-min) / $8.00 (1-hour); Batch API −50%; Fast mode (Claude Code/Platform) $8/$40 per 1M at up to 2.5× speed. 20% cheaper input/output and 60% cheaper cache reads than Opus 5; Anthropic states ~40% net cost reduction on typical workloads.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights (openness index N/A).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic official, xhigh effort, ±2.6 SE; leader-leading) vs **59.6%** (Artificial Analysis, harness difference — conflicting; both listed)
- FrontierCode v1.1 (Main): **54.4%**; FrontierCode v1.1 Extended: **63.6%**; FrontierCode 2.0: **45.5%** (Cognition)
- CursorBench 4.0: **57.8%** (Cursor evals)
- GDPval-AA v2.1: **1846 Elo** (official; AA-normalized ~68.3%; highest public Elo among compared frontier models)
- AutomationBench: **40.0%** (Zapier, no fallback models — safeguard interventions counted as failures) vs **69.5%** (Artificial Analysis AutomationBench-AA — conflicting harnesses)
- OSWorld 2.1: **81.8%** (partial, official); OSWorld 2.0: **48.7%** (system card)
- Toolathlon-Verified: **77.8%** (Pass@3 82.4%; avg 26.9 turns)
- AA-AnalystAgent: **56.3%**; AA ITBench: **38.2%**; Hermes Index 63.3% / Hermes Bench 76.7% (Nous)
- CWE-bench v1: **67.0%** (Collinear); AA Cyber Index 28.7%, CWE-Bench-AA 58.3%, DeepsecBench-AA 26.9%
- Terminal-Bench-Science 0.1: **58.7%** (official, ±3.5–5 SE)
- AA-Briefcase v1.1 Elo: **1800**

Reasoning / knowledge:

- HLE: **67.7%** with tools (official) / **64.4%** without tools (system card) vs **61.4%** (Artificial Analysis — conflicting)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **91.7%** (ARC Prize, published semi-private)
- CritPt (AA): **31.7%**; AA-LCR: **84.7%**; MLCR-AA: **27.8%**
- Artificial Analysis Intelligence Index v5.0: **58/100**, **#2 of 60** evaluated (mode: Max, default fallback; 57 at xhigh — trailing only Gemini 4 Carbon High at 59)
- AA-Omniscience: accuracy **65.5%**, hallucination rate **50.3%**
- GMMLU **94.3%**; MILU **93.1%**; ArXivMath Aug-2026 **96.9%** with tools / 91.2% without; FrontierMath v2 Tiers 1–3 **91.2%**, Tier 4 **95.0%** (Epoch AI)

Coding:

- SWE-bench Pro: **89.9%**; SWE Multilingual: **93.9%**; SWE Multimodal: **61.4%**; DeepSWE: **74.2%** (system card)
- AA-SciCode: **66.9%**; ProgramBench: **91.2%**; FrontierSWE v2: **62.3%** (Proximal)
- ExtractBench **86.06%** / ExtractBench Pro 51% / ParseBench 78.89% (LlamaIndex, 2026-10-28 snapshot)

Long context:

- 1M context (~1500 A4 pages); GraphWalks BFS 256K–1M: **66.8%**; AA-MLCR 27.8%; AA-LCR 84.7% — strong but not perfect long-context retrieval at depth.

Multimodal:

- Chartography **89.0%** with tools / 64.4% without; AA-MMMU-Pro **87.7%**; OfficeQA 78.9% / Pro 67.7%; biomedical image analysis 71.4%; BenchCAD Vision2Code 0.962 (tools).

### Normalized scores (1–100)

- **Tool use: 96/100.** Elite agentic stack: GDPval-AA 1846 Elo (highest public), TB4.0 66.4% (leading), Toolathlon-Verified 77.8%, AA-Briefcase 1800. Capped just shy of 100 by the TB4.0 harness gap (AA 59.6%) and cyber-eval softness (CyberGym-E2E 0.8%).
- **Reasoning: 97/100.** HLE 67.7% with tools is the best public figure, ARC-AGI-2 91.7%, Index #2/60 at 58. Capped by AA hallucination rate 50.3% and CritPt 31.7%.
- **Context window: 96/100.** 1M window with strong LCR 84.7%, but GraphWalks 256K–1M at 66.8% and MLCR 27.8% fall short of the ≥98%-retrieval bar for 100.
- **Multimodal: 82/100.** Image input only (no video/audio in, no non-text out) — above the 60–70 image-in band for frontier visual reasoning (MMMU-Pro 87.7%, Chartography 89%), capped by missing video/audio modalities.
- **Coding: 95/100.** SWE-bench Pro 89.9%, DeepSWE 74.2%, FrontierCode main 54.4%, SciCode 66.9% — top-tier; capped by FrontierCode 2.0 at 45.5% and mixed SWE-Multimodal 61.4%.
- **Cost efficiency: 58/100.** Paid: $4/$20 with $0.20 cache reads; $10.04 per Intelligence Index task (AA #56/58 — expensive). 40% cheaper than Opus 5 and 20% cheaper tokens, but a premium-priced flagship.
- **Overall Score: 93/100.** Mean of (96+97+96+82+95)/5 = 93.2 → 93. Best-in-class agentic coding/knowledge-work flagship; choose it when budget tolerates its input/cache economics.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic official model card, system card, Artificial Analysis model page + leaderboards, BenchLM aggregation, ARC Prize, Cursor evals, Zapier, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB4.0, HLE, AutomationBench) listed side by side.
- Reference URLs:
  - [Introducing Claude Opus 5.5 (Anthropic, 2026-09-22)](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 System Card (Anthropic)](https://www.anthropic.com/claude-opus-5-5-system-card)
  - [Claude Opus 5.5 model docs — API overview/pricing (Anthropic)](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Claude Opus 5.5 — Artificial Analysis model page (Index 58 #2/60, 1M, $4/$20)](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [Artificial Analysis Intelligence Index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Claude Opus 5.5 — BenchLM benchmark aggregation (86.29/100, #2/1004)](https://benchlm.ai/models/claude-opus-5-5)
  - [ARC Prize results — Claude Opus 5.5 (ARC-AGI-1/2)](https://arcprize.org/results/anthropic-claude-opus-5-5)
  - [CursorBench 4.0 (Cursor evals)](https://cursor.com/cursorbench)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
