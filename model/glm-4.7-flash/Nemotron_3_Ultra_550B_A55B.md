# GLM 4.7 Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash (GLM-4.7-Flash)
- **Short description:** Z.ai (Zhipu AI)'s lightweight MoE model, released January 19, 2026 (announced) / August 2025 (HF). 30B total / 3B active MoE. Strongest model in 30B class per Z.ai. Open weights (MIT license). Text-only. Reasoning model with configurable thinking. 128K context (model card says 131K max new tokens). Optimized for local deployment, low latency.
- **Provider / access:** Hugging Face (`zai-org/GLM-4.7-Flash`), Z.ai API (`glm-4.7-flash`), OpenRouter (`z-ai/glm-4.7-flash`), Lambda Labs, Cerebras, vLLM, SGLang, llama.cpp, Ollama. Self-hosted (MIT). Z.ai chat free. No managed API free tier for text model.
- **Release / knowledge:** 2026-01-19 release (Z.ai blog); HF repo created 2025-08-08; knowledge cutoff not published.
- **IDs:** `z-ai/glm-4.7-flash` (OpenRouter/Z.ai API), `zai-org/GLM-4.7-Flash` (HF). MIT license = self-host free.
- **Context window:** 128K–131K tokens (model card: `max_new_tokens: 131072`, Z.ai docs: 128K). Verified via HF model card, Z.ai docs, Lambda Labs, Artificial Analysis, benchgap.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Z.ai docs, HF, Lambda Labs, glm-ai.chat). GLM-4.6V-Flash is vision variant. Reasoning: yes (preserved thinking mode, configurable). Tool calls: yes (function calling, browsing, terminal). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (MIT). VRAM: ~16GB fp16 / ~6GB Q4. Z.ai API: not published. OpenRouter: $0.0605/M in, $0.40/M out, cache $0.01/M. Lambda Labs: not published. Cerebras: not published. Blended ~$0.06–0.40/M in.
- **Architecture:** 30B total / 3B active MoE. 128K context (RoPE, YaRN). MIT license. Preserved thinking mode for agentic tasks (`clear_thinking: false`).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-Bench: **79.5%** (temp 0, 16K tokens, preserved thinking) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured) / benchgap (measured)
- τ²-Bench: **79.5%** — benchgap (measured)
- BrowseComp: **42.8%** (temp 1.0, top-p 0.95, 131K tokens) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured)
- SWE-bench Verified: **59.2%** (temp 0.7, top-p 1.0, 16K tokens) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured) / benchgap (measured)
- SWE-bench Pro: **35.3%** (benchgap estimate ±4.6pp) — benchgap (estimated)
- Terminal-Bench Hard: **no score** for 4.7-Flash (GLM-4.7 base: 41% per Z.ai blog)
- Terminal-Bench 2.0: **no score** for 4.7-Flash
- IFBench: **no score** for 4.7-Flash specifically (Artificial Analysis had for 4.6-Flash)
- Toolathlon / MCP-Atlas / PinchBench / ClawEval / AutomationBench / OfficeQA / JobBench: **no scores**

Reasoning / knowledge:

- AIME 2025: **91.6%** (measured) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured) / benchgap (measured)
- AIME 2024: **92.8%** (benchgap estimate ±2.6pp) — benchgap (estimated)
- GPQA Diamond: **75.2%** (measured) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured) / benchgap (measured)
- GPQA Diamond: **75.4%** (benchgap estimate ±1.2pp) — benchgap (estimated)
- GPQA: **73.8%** (AA estimate ±3.9pp) — benchgap (estimated)
- HLE: **14.4%** (measured) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured) / benchgap (measured)
- HLE: **12.1%** (benchgap estimate ±5.2–6.5pp) — benchgap (estimated)
- HLE w/o tools: **12.1%** (benchgap estimate) — benchgap (estimated)
- LiveCodeBench v6: **64.0%** (measured) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis (measured) / benchgap (measured)
- LiveCodeBench v6: **65.4%** (benchgap estimate ±14.6pp) — benchgap (estimated)
- MMLU: **88.0%** (benchgap estimate ±4.3pp) — benchgap (estimated)
- MMLU-Pro: **82.3%** (benchgap estimate ±5.9pp) — benchgap (estimated)
- MMLU-Pro: **85.4%** (AA estimate ±1.0pp, low conf) — benchgap (estimated)
- C-Eval: **89.8%** (benchgap estimate ±1.2pp) — benchgap (estimated)
- MATH-500: **98.6%** (benchgap estimate ±2.1pp) — benchgap (estimated)
- MMMLU: **85.1%** (benchgap estimate ±1.7pp) — benchgap (estimated)
- CritPt: **0.4%** (benchgap estimate ±4.0pp) — benchgap (estimated)
- AA Intelligence Index: **11.4%** (benchgap estimate ±6.2pp) — benchgap (estimated)
- AA AIME 2025: **92.5%** (benchgap estimate ±0.7pp) — benchgap (estimated)
- AA GPQA Diamond: **73.8%** (AA estimate ±3.9pp) — benchgap (estimated)
- AA HLE: **10.2%** (AA estimate ±4.9pp) — benchgap (estimated)
- AA SciCode: **38.2%** (AA estimate ±3.9pp) — benchgap (estimated)
- AA Coding Index: **27.7%** (AA estimate ±5.3pp) — benchgap (estimated)
- AA Omniscience Accuracy: **18.3%** (AA estimate ±7.7pp) — benchgap (estimated)
- AA LCR: **no score** for 4.7-Flash specifically
- Vals GPQA Diamond: **63.1%** (benchgap estimate ±4.8pp) — benchgap (estimated)
- Vals LiveCodeBench: **43.4%** (benchgap estimate ±9.9pp) — benchgap (estimated)
- Vals MMLU-Pro: **48.4%** (benchgap estimate ±1.2pp) — benchgap (estimated)
- Vals SWE-bench: **47.8%** (benchgap estimate ±6.8pp) — benchgap (estimated)
- SWE-Rebench: **57.0%** (benchgap estimate ±3.6pp) — benchgap (estimated)
- SimpleQA: **35.4%** (benchgap estimate ±14.6pp) — benchgap (estimated)
- HMMT Feb 2025: **91.0%** (benchgap estimate ±3.1pp) — benchgap (estimated)
- MMLU-Redux: **91.7%** (benchgap estimate ±1.7pp) — benchgap (estimated)
- NL2Repo: **11.2%** (benchgap estimate ±6.2pp) — benchgap (estimated)
- SuperGPQA: **55.6%** (benchgap estimate ±8.2pp) — benchgap (estimated)
- React Native Evals: **71.4%** (benchgap estimate ±2.3pp) — benchgap (estimated)
- Vibe Code Bench: **0.6%** (benchgap estimate ±8.1pp) — benchgap (estimated)
- ARC-AGI-1: **32.0%** (benchgap estimate ±7.0pp) — benchgap (estimated)
- ARC-AGI-2: **0.0%** (benchgap estimate ±11.6pp) — benchgap (estimated)

Coding:

- SWE-bench Verified: **59.2%** (measured) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis / benchgap
- SWE-bench Pro: **35.3%** (benchgap estimate ±4.6pp) — benchgap (estimated)
- LiveCodeBench v6: **64.0%** (measured) — HF card / Z.ai blog / Lambda Labs / Artificial Analysis / benchgap
- LiveCodeBench: **65.4%** (benchgap estimate ±14.6pp) — benchgap (estimated)
- Terminal-Bench Hard: **no score**
- Terminal-Bench 2.0: **no score**
- HumanEval / MBPP / Codeforces: **no scores** in model card
- SciCode: **37.9%** (benchgap estimate ±3.4pp) — benchgap (estimated)
- AA SciCode: **38.2%** (AA estimate ±3.9pp) — benchgap (estimated)

Long context:

- Native 128K–131K context verified
- Max new tokens 131,072 per model card
- AA-LCR / RULER / MRCR / GraphWalks / LongBench / LOFT: **no scores** for 4.7-Flash specifically

Multimodal:

- **No native multimodal** (text-only per Z.ai docs, HF, Lambda Labs, glm-ai.chat). GLM-4.6V-Flash / GLM-5.3-Flash are vision variants.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** τ²-Bench 79.5% (measured, open-source SOTA for size), BrowseComp 42.8% (measured), SWE-bench Verified 59.2% (measured). Exceptional τ²-Bench (79.5% vs Qwen 49%, gpt-oss-20b 47.7%). Capped by no MCP-Atlas/PinchBench/ClawEval/Toolathlon/Terminal-Bench 2.0/2.1, BrowseComp 43% modest.
- **Reasoning: 70/100.** AIME 2025 91.6% (measured), GPQA Diamond 75.2% (measured), HLE 14.4% (measured), MMLU 88% (est), MMLU-Pro 82% (est), MATH-500 98.6% (est), CritPt 0.4% (est). Strong math (AIME 92%) but HLE low (14%) and CritPt near-zero. Capped by HLE 14% and CritPt ~0%.
- **Context window: 80/100.** 128K–131K native (128K tier = 75–80, but measured 131K max new tokens). No RULER/MRCR/GraphWalks/LongBench/LOFT/AA-LCR scores. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 70/100.** SWE-bench Verified 59.2% (measured, open-source SOTA for size), LiveCodeBench 64% (measured), SWE-bench Pro 35% (est), SciCode 38% (est). Exceptional SWE-Verified for 3B active (beats gpt-oss-20b 34%, Qwen3-30B-A3B 22%). Capped by no Terminal-Bench 2.0/2.1/HumanEval/Codeforces, LiveCodeBench 64% vs Qwen 66%.
- **Cost efficiency: 95/100.** MIT open weights = self-host free. 30B/3B MoE = ~16GB fp16 / ~6GB Q4 (consumer hardware). OpenRouter $0.06/$0.40 (very cheap). Z.ai chat free. Best-in-class value for capability tier.
- **Overall Score: 62/100.** Mean of (75+70+80+15+70)/5 = 62.0 → 62. Queue shows 58.3 — slightly higher due to exceptional τ²-Bench (79.5%) and SWE-Verified (59.2%) for size. ModelComp: not listed separately. Best fit: **open-source SOTA for agentic coding at 3B active params**; τ²-Bench 79.5% and SWE-Verified 59.2% lead size class; text-only limits generalist use; HLE 14% modest.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Z.ai blog/docs, HF model card, Lambda Labs, Artificial Analysis, benchgap, OpenRouter, glm-ai.chat, unsloth GGUF, Hugging Face discussions); scores normalized 1–100 per model-comparison.md methodology. **Conflicting HLE** (14.4% measured vs 12.1% benchgap est) noted; **many benchgap estimates** (marked estimated) vs few measured; text-only confirmed; preserved thinking mode for agentic tasks documented.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.