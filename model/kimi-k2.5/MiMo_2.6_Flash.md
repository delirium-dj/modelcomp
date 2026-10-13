# Kimi K2.5 — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's native multimodal open-weight model with state-of-the-art visual coding capability and a self-directed agent-swarm paradigm; built on Kimi K2 with continued pretraining over ~15T mixed visual and text tokens. Successor to Kimi K2, predecessor to K2.6/K2.7 Code/K3.
- **Provider / access:** Moonshot AI API (`moonshot/kimi-k2.5`); multi-provider (Requesty and aggregators). Chat Completions.
- **Release / knowledge:** January 2026 (Requesty listing date); knowledge cutoff not disclosed.
- **IDs:** `moonshot/kimi-k2.5`; open weights on Hugging Face (MoonshotAI).
- **Context window:** 262K tokens; max output 262K (Requesty); some trackers list 256K.
- **Modalities:** text + image (+ video via multimodal stack) in; text out; non-reasoning base (separate Kimi K2.5 Reasoning variant exists); tool calls; JSON schema; caching; web search.
- **Pricing (as of 2026-10-13):** $0.60 / 1M input, $3.00 / 1M output; cache read $0.10 / 1M (Requesty/Moonshot).
- **Architecture:** open-weight; parameter count not re-verified in this pass (Kimi K2 lineage is 1T-class MoE; K2.5 specific count not disclosed in reviewed sources). License: open (Apache-family per Moonshot releases).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (BenchLM)
- BrowseComp: **60.6%** (BenchLM)
- Toolathlon: **27.8%** (implied by K2.6 DeepInfra card upgrade note 27.8→50.0)
- Agent Swarm paradigm: self-directed multi-agent orchestration (K2.5 baseline for K2.6's 300-sub-agent upgrade)

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (BenchLM)
- MMLU-Pro: **87.1%** (BenchLM Reasoning variant row)
- SuperGPQA: **69.2%** (BenchLM)
- LongBench v2: **61%** (BenchLM)
- HLE: no verified public score found for K2.5 specifically (K2.6 reported 36.4% closed / 54.0% with tools)

Coding:

- SWE-bench Verified: **76.8%** (BenchLM; #34–35 on BenchLM SWE-V table)
- LiveCodeBench v6: **85.0%** (BenchLM; strong for open-weight class)
- SWE-bench Pro: **50.7%** (BenchLM)
- SWE Multilingual: **73%** (BenchLM)
- SWE-Rebench: **58.5%** (BenchLM)
- React Native Evals: **77.2%** (BenchLM)
- SciCode: **48.7%** (BenchLM)
- Vibe Code Bench: **17.54%** (BenchLM Reasoning row; weak spot)

Multimodal:

- MMMU-Pro: **78.5%** (BenchLM)
- Video-MME: **87.4%** (BenchLM)
- MMVU: **80.4%** (BenchLM)
- VideoMMMU: **86.6%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 50.8% and BrowseComp 60.6% are solid agentic results; agent-swarm paradigm is a differentiator. Capped by Toolathlon 27.8% still lagging later Kimi releases and no BFCL figure found.
- **Reasoning: 84/100.** GPQA Diamond 87.6% and MMLU-Pro 87.1% are strong open-weight reasoning numbers; SuperGPQA 69.2% solid. Capped by no HLE figure for this exact model and LongBench v2 61% leaving long-context reasoning headroom.
- **Context window: 82/100.** 262K window with 262K max output is above average but well below the 1M+ frontier class; LongBench v2 61% shows usable but imperfect long-context performance.
- **Multimodal: 88/100.** Exceptional for an open-weight model: MMMU-Pro 78.5%, Video-MME 87.4%, VideoMMMU 86.6%, MMVU 80.4% — native video understanding without a separate pipeline. Capped only by no audio modality.
- **Coding: 80/100.** LiveCodeBench v6 85.0% is elite; SWE-bench Verified 76.8% strong; SWE-Pro 50.7% respectable. Capped by Vibe Code Bench 17.54% (weak) and still trailing K2.6/K3 generation on agentic coding.
- **Cost efficiency: 82/100.** $0.60/$3.00 with open weights and $0.10 cache reads is excellent value for a multimodal agentic model; self-hostable. Capped by 397B+-class serving cost if self-hosted (Kimi lineage is large MoE).
- **Overall Score: 81/100.** Mean of (72 + 84 + 82 + 88 + 80) / 5 = 81.2 → **81**. Best-fit recommendation: open-weight multimodal workhorse with elite video understanding and strong coding — ideal when you need vision+video+agentic tool use on a budget; upgrade to K2.6/K3 for harder agentic long-horizon work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (BenchLM comparison pages, Requesty provider listing, DeepInfra K2.6 API review for K2.5 baseline deltas, Vals AI K2.6 update note referencing K2.5 Vals Index 59.6%); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
