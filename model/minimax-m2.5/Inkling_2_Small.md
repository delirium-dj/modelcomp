# MiniMax M2.5 — findings by Inkling 2 Small

- Source: MiniMax (`minimax-m2.5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax's open-weight frontier coding/agentic model — 229B-class MoE trained with agent-native RL (Forge) for SWE-bench-class tasks, search and tool calling, at frontier-coding cost leadership ("$1/hour at 100 tok/s"). Released 2026-02-12; modified-MIT license.
- **Provider / access:** Open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`); MiniMax API platform (platform.minimax.io); hosted by Novita et al.; MiniMax Code; MCP server available.
- **Release / knowledge:** Released 2026-02-12; knowledge cutoff not publicly stated.
- **IDs:** `MiniMaxAI/MiniMax-M2.5` (HF); `MiniMax-M2.5` (MiniMax API); highspeed twin variant is a separate SKU (`MiniMax-M2.5-highspeed`), not this file.
- **Context window:** 204,800 tokens input / 131,072 max output (models.dev); 1M-class for the M3 line, not this one.
- **Modalities:** text in → text out; reasoning yes (thinking); tool calls yes (strongly measured); SWE/agentic scaffolds (Claude Code, Droid, OpenCode).
- **Pricing (as of 2026-11-10):** M2.5 ≈ half of M2.5-Lightning's $0.30/$2.40 per 1M (approx $0.15/$1.20, vendor-stated "one-tenth to one-twentieth of Opus/Gemini 3 Pro/GPT-5"); OpenCode/Novita hosting varies; open weights (modified-MIT) free to self-host.
- **Architecture:** Mixture-of-Experts, 229B total parameters; MiniMax M2 series.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **76.3%** (with context management; vendor)
- GDPval-MM (internal office-work eval): **59.0% average win rate** (vendor)
- APEX-Agents: **6.2%** (HF eval results, harness-dependent)
- Multi-SWE-Bench: **51.3%** (vendor)

Reasoning / knowledge:

- GPQA-D: **85.2%** (vendor internal AAI-index-style testing; HF eval results 8.52)
- AIME 2025: **86.3%** (vendor)
- HLE w/o tools: **19.4%** (vendor / HF eval results)
- SciCode: **44.4%** (vendor)
- AA-LCR: **69.5%** (vendor)
- MMLU-Pro: **80.1%** (HF eval results)
- IFBench: **70.0%** (vendor / HF eval results)

Coding:

- SWE-bench Verified: **80.2%** (vendor, Claude-Code-scaffold avg of 4 runs); **75.8%** (HF eval results, swebench.com harness)
- SWE-bench (Vals) — not listed; Vibe Code Bench: **14.85%** (Vals AI)
- Multi-SWE-Bench: **51.3%** (vendor)
- SciCode: **44.4%** (vendor)

Long context:

- AA-LCR: **69.5%** at ~200K context.

Multimodal:

- Text-only — score 15 by the text-only rule; no verified public multimodal evidence exists (MiniMax API has separate multimodal SKUs).

### Normalized scores (1–100)

- **Tool use: 74/100.** BrowseComp 76.3% and GDPval-MM 59.0% win rate (vendor) — strong search/tool autonomy; capped by APEX-Agents ~6.2 (HF evals) and Multi-SWE 51.3%.
- **Reasoning: 66/100.** GPQA-D 85.2%, AIME 2025 86.3%, MMLU-Pro 80.1%; capped by HLE 19.4% and vendor-only provenance of the headline rows.
- **Context window: 78/100.** 204,800 tokens input; AA-LCR 69.5% verified; not a 1M-class model.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 76/100.** SWE-bench Verified 80.2% (vendor) / 75.8% (HF evals), Multi-SWE 51.3%, SciCode 44.4%; capped by Vibe Code Bench 14.85% (Vals).
- **Cost efficiency: 95/100.** Open weights + ~$0.15/$1.20 hosted — the cost-efficiency leader of this class.
- **Overall Score: 62/100.** (74 + 66 + 78 + 15 + 76) / 5 = 61.8 → 62. Best fit: cost-leader agentic coding and search workloads via API/self-host; text-only — pick a multimodal SKU for vision.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (MiniMax HF model card, models.dev catalog, Vals AI, HF eval-results); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax-M2.5 — Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)
  - [MiniMax-M2.5 — BenchLM](https://benchlm.ai/models/minimax-m2-5)
  - [MiniMax provider/lab page — models.dev](https://models.dev/labs/minimax)
  - [MiniMax M2.5 blog — MiniMax](https://www.minimax.io/news/minimax-m2-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
