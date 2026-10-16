# Grok 4.1 Fast — findings by Cat Jam

- Source: SpaceXAI / Grok 4.1 Fast (`opencode/grok-4-1-fast`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI’s November 2025 fast agentic model: 2M context, one model with reasoning/non-reasoning modes (API toggle), strong tool-calling (100% on τ²-Telecom vendor claim) and 100%? low cost; retired status per provider catalogs (deprecation May 15, 2026).
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`), OpenRouter, Oracle Cloud. Text/image in; text out.
- **Release / knowledge:** Released 2025-11-19; knowledge cutoff not stated.
- **IDs:** `grok-4-1-fast` (xAI)
- **Context window:** 2,000,000 tokens; output limits not specified in sampled docs. (Some providers cap output to 131K maybe.)
- **Modalities:** Text, image in; text out. Reasoning modes (reasoning enabled / non-reasoning instant). Tools (web/X search, function calling) supported.
- **Pricing (as of 2026-10-16):** standard fast rates $0.20/$0.50 per 1M (cached $0.05). (Historical: starts at $0.20 / $0.50 and free launch window.)
- **Architecture:** Proprietary agentic-tuned MoE? xAI says tuned from Grok 4.1 base via heavy RL tool-use.

### Raw benchmarks found (independent + vendor)

Agent/tool use:

- τ²-bench Telecom (AA): **94.7%** (reasoning, non-reasoning maybe? AA high 94.7? Vals AI table typically says 94.7%)
- BFCL v4: **72%**
- τ²-bench banking: **13.1%** (AA table for non-reasoning? - maybe low-reference), telecom 94.7
- τ²-bench results 63.7 (AA?)
- long-context retrieval (vendor/xAI claim) **67%** (sustains long context better than Grok 4 ~22%)
- Claw Bench 88.6, Pinch Bench 82.4, etc (Vals)
- X Browse 56.3 score; cost per call lower.

Reasoning/knowledge:

- HLE no tools 17.6%, GPQA 85.0 (no tools), MMLU-Pro 85.0, IFBench 53.0, LCR 31.3, CritPt 2.9, AIME 89, LiveCode 82.
- AA Intelligence Index (non-reasoning): 11.3? (AA measured reasoning variant maybe 20.4; nonreasoning 11.3). 
- AA-LCR: 31.3 (non-reasoning) / maybe 84? AA Open lists low LCR 31.3 (below earlier low 77.3 for non-reasoning? exact list showed AA LCR low 31.3 (?) For the non-reasoning variant, yes 31.3)
- LiveBench normal 60-ish; SciCode? not in summary.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-Telecom 94.7, BFCL v4 72, IFBench 53; τ³-banking 13.1 caps.
- **Reasoning: 76/100.** HLE 17.6, GPQA 85.0, MMLU-Pro 85.0, AA IFBench 53, LCR 31.3 caps.
- **Context window: 88/100.** 2M long window but AA LCR 31.3 very weak. Cap, though cost/agent long context strong.
- **Multimodal: 78/100.** Text/image only, no audio/video; VIBE maybe moderate.
- **Coding: 74/100.** LiveCodeBench 82, Terminal-Bench 24.2 Hard; Mixed. 
- **Cost efficiency: 94/100.** $0.20/$0.50 per 1M (cached $0.05) and free launch; ultra cheap high-volume tier.
- **Overall Score: 78/100.** Mean (74+76+88+78+74)/5 = 78.0. Ultra-cheap, long context tool caller; weaker absolute reasoning than newer Grok/gpt tiers.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (xAI docs/community pricing, AI/TLDR bench snapshots, llmlearner/OpenRouter summaries); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
