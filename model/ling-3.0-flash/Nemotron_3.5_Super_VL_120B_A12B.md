# Ling 3.0 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: inclusionAI/Ling-3.0-flash Hugging Face model card + README (eval_results), benchlm.ai/models/ling-3-0-flash (aggregator), benchlm.ai comparisons (vs MiniMax M2.7, o3, Qwen3.6-35B-A3B, Qwen3.6-27B, A.X series, Agents-A1-Q4_K_M-GGUF, Gemini 3.5 Flash, Qwen3.8-Flash-Next), artificialanalysis.ai/models/ling-3-0-flash (independent Intelligence Index), openrouter.ai/inclusionai/ling-3.0-flash, opencode.ai/data/inclusionai (usage), franklineh.com benchmark, lmmarketcap.com (Ling 3.0 Flash VL sibling), blog.buildfastwithai.com review (Ling 3.1 Flash sibling context), arxiv 2606.15079 (Ling and Ring 2.6 technical report family context)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash (InclusionAI / Ant Group)
- **Short description:** Open-weight native hybrid-reasoning MoE instruct model, 124B total / 5.1B active parameters (~12.4% of the 1T-class Ring-2.6-1T), 262K context; MIT license; released 2026-07-23. Native hybrid-linear architecture (5:1 Kimi Delta Attention : MLA stacking, fine-grained diagonal gating, 1/64 sparse MoE, 512 routed experts, 8 activated per token). Designed for speed, compute efficiency, and production agent deployment; strong on coding/agent benchmarks (SWE-Bench Pro, SWE-Bench Multilingual, Tau3-banking-AA, MCP-Atlas, SkillsBench).
- **Provider / access:** Hugging Face (inclusionAI/Ling-3.0-flash), OpenRouter, Vercel AI Gateway, Novita; MIT license.
- **Release / knowledge:** Released 2026-07-23; knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-flash` (HF), `inclusionai/ling-3.0-flash` (OpenRouter/Novita/Vercel).
- **Context window:** 262,000 tokens (benchlm.ai; HF README; opencode.ai). Verified.
- **Modalities:** Text in, text out (text-only — NOT multimodal; vision arrived with the separate Ling-3.0-flash-VL); reasoning yes (thinking enabled by default, temperature=0.6, top_p=0.95, top_k=20); tool calls yes; structured outputs/JSON mode yes.
- **Pricing (as of 2026-10-16):** $0.07/M input, $0.22/M output (Vercel AI Gateway / opencode.ai); MIT open weights (self-host effectively $0).
- **Architecture:** 124B total / 5.1B active per token, 35 KDA + 7 Gated MLA layers (5:1), 512 routed experts / 8 activated, hidden size 2560, expert intermediate 768, 32 attention heads, Kimi Delta Attention + MLA hybrid linear, SGLang HiCache + Mooncake hierarchical caching.

### Raw benchmarks found

InclusionAI HF model card eval_results + benchlm.ai aggregator (Artificial Analysis + Vals AI + inclusionAI), franklineh.com, modelscope.cn (architecture details), aimadetools.com guide (family context).

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (inclusionAI model card; benchlm) / **50.2%** (Vals AI leaderboard)
- AA Tau3 Banking: **28.0%** (inclusionAI)
- MCP Atlas: **65.5%** (inclusionAI)
- skillsBench: **44.8%** (inclusionAI)
- BFCL v4: **73.0%** (inclusionAI)
- GDPval-AA: **1107** (inclusionAI)
- WideResearch: **73.6%** (inclusionAI)
- BrowseComp: **72.2%** (inclusionAI)
- DRACO: **70.4%** (inclusionAI)
- Terminal-Bench 2.1 (Vals AI): **50.2%**

Reasoning / knowledge:

- GPQA: **85.0%** (inclusionAI); GPQA-D: **85.0%** (inclusionAI) / **84.8%** (Vals AI GPQA Diamond) / **85.5%** (AA-GPQA Diamond)
- HLE: **22.7%** (inclusionAI)
- MMLU-Pro: **82.0%** (Vals AI MMLU Pro leaderboard)
- AA-LCR: **73.0%** (benchlm)
- CritPt: **1.7%** (benchlm)
- Artificial Analysis Intelligence Index: **20.1%** (benchlm)
- AA-HLE: **23.7%** (benchlm); AA-Omniscience: index -17.9%, accuracy 18.2%, hallucination 44.1% (benchlm)

Coding:

- SWE-bench Pro: **56.6%** (inclusionAI)
- SWE-bench Multilingual: **72.4%** (inclusionAI)
- SciCode: **41.2%** (benchlm); AA-SciCode: **42.0%** (benchlm)
- LiveCodeBench v5: **82.8%** (inclusionAI)
- LiveCodeBench (Vals): **84.0%** (benchlm)
- SWE-bench (Vals): **65.2%** (benchlm)
- AA Coding Index: **50.6%** (benchlm)

Multimodal & grounded: Text-only — NOT multimodal (vision arrived with separate Ling-3.0-flash-VL, released 2026-09-10).

Long context: Declared 262K; no public needle-recall curve beyond.

Instruction following:

- IFBench: **74.5%** (inclusionAI)

### Conflicting results noted

- benchlm.ai overall 45.11 (#123/954) vs raw GPQA 85/AIME 93.2 — composite is conservative (24 of 639 benchmarks covered).
- Terminal-Bench 2.1: 57.0% (inclusionAI card) vs 50.2% (Vals AI) — different harnesses; both cited.
- GPQA: 85.0% (inclusionAI) vs 84.8% (Vals) — minor variance, both cited.
- ling-3.0-flash-sante (health/medicine variant) and ling-3.0-flash-fin (finance variant) are separate siblings — not scored here.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 64/100.** Terminal-Bench 2.1 57/50.2, MCP Atlas 65.5, skillsBench 44.8, GDPval-AA 1107 Elo, WideResearch 73.6, BrowseComp 72.2 — solid agent profile; capped by no public OSWorld/BrowseComp-v2 scores and moderate DRACO 70.4.
- **Reasoning: 68/100.** GPQA-D 85.0, MMLU-Pro 82.0, AIME26 93.2, HMMT 87.0, IMOAnswerBench 83.7 — strong math/reasoning; capped by HLE 22.7, CritPt 1.7, AA-Omniscience accuracy 18.2/hallucination 44.1, AA Intelligence Index 20.1 modest.
- **Context window: 75/100.** Declared 262K; no public retrieval curve beyond.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 68/100.** SWE-bench Pro 56.6, SWE Multilingual 72.4, LiveCodeBench v5 82.8, SciCode 41.2, BFCL v4 73.0, AA Coding Index 50.6 — strong agentic coder; SciCode and AA Coding Index moderate.
- **Cost efficiency: 90/100.** MIT open weights, $0.07/$0.22 per M, token-efficient hybrid-linear design; not counted toward Overall.
- **Overall Score: 65/100.** Half-up mean of (64 + 68 + 75 + 50 + 68) / 5 = 65.0 → 65. Let me recompute: (64+68+75+50+68) = 325; 325/5 = 65.0 → 65.

- **Overall Score: 65/100.** Best-fit recommendation: efficient open-weight hybrid-reasoning coding/agent model; strong terminal-agent and math/reasoning profile; HLE weakness and text-only modality noted.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (inclusionAI HF model card + eval_results + arxiv 2606.15079 family report + benchlm.ai + Artificial Analysis + Vercel/Novita pricing + modelscope architecture); scores are normalized 1–100 interpretations, not official vendor scores. Siblings Ling-3.0-flash-VL/-Fin/-FP8/-Sante/-Tiny are separate models and not scored here.
- Future sources: add a new file next to this one, using the same headings.
