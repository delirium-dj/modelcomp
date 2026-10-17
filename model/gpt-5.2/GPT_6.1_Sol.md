# GPT-5.2 — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.2`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.2
- **Short description:** Previous professional reasoning/coding flagship; not5.2Pro, Instant or Codex [S1].
- **Provider / access:** OpenAI Responses/Chat Completions, Batch; function calling, file/search, shell, code interpreter, apply_patch, skills, MCP and structured output [S1].
- **Release / knowledge:** December11,2025; August31,2025 cutoff [S1,S2].
- **IDs:** `gpt-5.2`, `gpt-5.2-2025-12-11`; no verified Free API ID.
- **Context window:**400,000 total/128,000 output, not later5.4/6's1M [S1].
- **Modalities:** Text/image input, text output; file tools. None(default)/low/medium/high/xhigh; external image-generation tool not native output [S1].
- **Pricing (2026-10-17):** $1.75 input/$0.175 cache/$14 output per million, tool fees separate [S1].
- **Architecture:** Proprietary, size unverified.

### Raw benchmarks found
Agent / tool use:
- Vals xhigh/128K default: TB2.0 **51.69% ±5.33**, RSI Index **15.80%** [S2]. Benchmark-specific overrides possible. Tau3/Tau2/GDPval/Claw/MCP-Atlas exact numbers not verified in inspected direct material; family search claims excluded.
Reasoning / knowledge:
- Vals GPQA **91.67% ±1.84**, MMLU **86.23% ±0.34**, LegalBench **82.76% ±0.40**, SAGE **49.27% ±3.35** [S2]. Profile accuracy68.27% has no ranked current Index row. Exact HLE/CritPt/AA Index/Omniscience/LCR/MLCR not verified here.
Coding:
- Vals SWE **75.80% ±1.92**, LiveCode **85.36% ±1.03**, Vibe1.1 **53.50% ±5.07** [S2]. Historical Vibe41.31 is dated launch result, not averaged. Exact SWE-Pro/DeepSWE/SciCode/ProgramBench not verified.
Long context / multimodal:
- Official400K capacity, no exact full-window retrieval result verified [S1]. Vals MMMU **86.67% ±0.82**, no native audio/video/media output [S1,S2].

### Evidence comparison and research trail
Three distinct DuckDuckGo queries: `GPT-5.2 official model card`, `GPT-5.2 independent benchmarks`, `GPT-5.2 review limitations pricing`; first two successful, third challenged. Direct exact primary API and independent Vals read; search snippets only discovery, not claimed tested. GPT5 family system card is not5.2 exact evidence. Vals notes high/xhigh tricky questions can think **over30minutes**, and more tokens on long agent tasks; current profile **394m33s** latency is its suite, not normal per-request guarantee. Launch “SOTA” is historical. Compare directly read5.4 Vals: GPQA tied91.67, LiveCode5.2 85.36 slightly above5.4 84.14, while SWE/Vibe/terminal improve in5.4. Different dates/harnesses prevent causal model-only deltas. None default is not xhigh benchmark behavior. Initial own report, no existing scores revised.

### Normalized scores (1–100)
- **Tool use: 75/100.** Useful terminal/tool surface, capped by modest measured execution and incomplete modern-suite coverage [S1,S2].
- **Reasoning: 86/100.** Strong GPQA, useful MMLU/domain evidence, capped by latency/calibration and hard-suite gaps [S2].
- **Context window: 82/100.** Verified400K tier, no1M or perfect-retrieval claim [S1].
- **Multimodal: 80/100.** Strong image/document evaluation, no native audio/video/output [S1,S2].
- **Coding: 82/100.** Good LiveCode/SWE, middling Vibe and absent modern-hard-suite corroboration [S2].
- **Cost efficiency: 65/100.** Moderate input but$14 output and long xhigh traces can be expensive [S1,S2].
- **Overall Score: 81/100.** (75+86+82+80+82)/5=81.0 →81; established supervised reasoning/document/coding workflows. Cost excluded.

### Sources
- [S1] https://developers.openai.com/api/docs/models/gpt-5.2 — exact primary context/rates/defaults/tools.
- [S2] https://www.vals.ai/models/openai_gpt-5.2-2025-12-11 — independent xhigh suite, dated launch/latency observations.
- Contextual comparison: https://www.vals.ai/models/openai_gpt-5.4-2026-03-05 — directly inspected this batch, distinct model results not transferred.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three search attempts and direct primary/evaluator comparison; family, effort, context and dated leadership distinguished. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
