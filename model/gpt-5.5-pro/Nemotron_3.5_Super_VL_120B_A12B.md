# GPT-5.5 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-5-pro (OpenAI GPT-5.5 launch page), llm-stats.com, developers.openai.com API docs
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium GPT-5.5 variant (released April 2026); 1.05M context / 922K max input / 128K max output; reasoning effort levels; text+image input → text out; $5/$30 per MTok (per llm-stats), $30/$180 per MTok (per aiapiindex.com — conflicting pricing sources); knowledge cutoff not stated.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), native OpenAI API; no third-party OpenAI-compatible route confirmed.
- **Release / knowledge:** Release date not confirmed in fetched sources; knowledge cutoff not stated.
- **IDs:** `gpt-5.5-pro` (OpenAI API); no Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai), 1.05M tokens (llm-stats, contextwindows.dev); max input 922K, max output 128K; prompts >272K priced at 2x input/cache rates and 1.5x output.
- **Modalities:** Text and image in; text out per OpenAI docs; reasoning yes; tool use not explicitly specified for this variant; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Conflicting sources: llm-stats lists $5/$30 per MTok; aiapiindex.com lists $30/$180 per MTok. Cached input $0.500/M per llm-stats.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI GPT-5.5 launch page — benchlm.ai)

Reasoning / knowledge:

- ARC-AGI-1: **95.00%** (ARC Prize verified)
- ARC-AGI-2: **84.2%** (ARC Prize verified)
- CritPt: **30.6%** (Artificial Analysis)
- HLE: **57.2%** (OpenAI GPT-5.5 launch page)
- HLE w/o tools: **43.1%** (OpenAI GPT-5.5 launch page)
- Artificial Analysis Intelligence Index: not found for this exact variant
- FrontierMath legacy: **52.4%** (OpenAI GPT-5.5 launch page)
- FrontierMath v2 (Tiers 1-3): **87.719%** (Epoch AI)
- FrontierMath v2 (Tier 4): **78.049%** (Epoch AI)

Coding:

- Vibe Code Bench: not found for this variant
- No verified public SWE-bench/LiveCodeBench/DeepSWE numbers found for this exact variant

Multimodal & grounded:

- No verified public multimodal benchmark numbers found for this exact variant (text+image input per OpenAI docs)

Long context:

- AA-LCR: not found for this variant; declared 1.05M context (benchlm.ai, llm-stats); no public full-depth needle-recall score beyond AA-LCR (not found)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (benchlm 9 of 638 slots) — several dims rest on a single number each or nothing; treat all scores as highly provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** BrowseComp 90.1%; capped by absence of Terminal-Bench/OSWorld/MCP Atlas numbers for this exact variant.
- **Reasoning: 74/100.** ARC-AGI-1 (95.00%), ARC-AGI-2 (84.2%), FrontierMath v2 Tiers 1-3 (87.719%), AA-LCR (82.7%); capped by CritPt (30.6%), HLE (57.2%), no AA-Omniscience number found for this variant.
- **Context window: 80/100.** Verified 1.05M tokens (benchlm.ai); capped because no public full-depth needle-recall score at 1M.
- **Multimodal: 65/100.** Text+image in, text out per OpenAI docs; no verified public multimodal benchmark numbers found for this exact variant — scored conservatively.
- **Coding: 60/100.** Positioned as reasoning model per benchlm; no verified SWE-bench/LiveCodeBench numbers found for this exact variant — scored conservatively.
- **Cost efficiency: 45/100.** Pricing $5/$30 or $30/$180 per MTok depending on source — expensive frontier pricing; not counted toward Overall.
- **Overall Score: 69.4/100.** Half-up mean of (68 + 74 + 80 + 65 + 64) / 5 = 71.8 → 72. Best-fit recommendation: proprietary reasoning model at 500K–1.05M context with strong ARC-AGI-1 score; verify on coding and agentic tasks given thin public coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.5 launch page + Artificial Analysis + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
