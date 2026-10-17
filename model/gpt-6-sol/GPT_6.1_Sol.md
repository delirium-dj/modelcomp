# GPT-6 Sol — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-6-sol`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6 Sol
- **Short description:** September Sol coding/professional model; not GPT-6 Astra or newer6.1Sol [S1].
- **Provider / access:** OpenAI Responses for built-in tools/function calls. Chat Completions function calling only at reasoning none; Batch supported [S1].
- **Release / knowledge:** September22,2026; April20,2026 cutoff [S1,S2].
- **IDs:** `gpt-6-sol`; no separately dated snapshot or Free API route verified.
- **Context window:** 1,050,000 total/922,000 max input/128,000 output [S1].
- **Modalities:** Text/image input, text output; files/search, computer use, MCP, shell, code interpreter, apply_patch, structured output. Efforts none–max, medium default [S1].
- **Pricing (as of 2026-10-16):** $2 input/$0.20 cache/$2.50 write/$10 output per million; >272K input doubles input/cache and1.5× output full request. Batch/Flex half, Fast2×, regional+10% [S1].
- **Architecture:** Proprietary; parameters not verified.

### Raw benchmarks found
Agent / tool use:
- Vals max/128K default, no fallback: TB4 **44.44% ±3.54**, SRE **30.53% ±2.85**, financev2 **49.05% ±0.58**, legal-agent **1.67% ±0.82**, tax-agent **15% ±2.58** [S2]. Overrides possible.
- Historical September TB2.1 **83.15%**, TB4 **34.34%**, science **31.43%** kept separate from current rows [S2]. Tau3/Tau2/MCP-Atlas/Claw exact numbers not verified.
Reasoning / knowledge:
- Vals ProofBench1.1 **83% ±3.77**, BioMystery **74.81% ±2.43**, Science Index **45% ±2.26**, current Vals Index **57.54% ±1.01 (#13/49)** [S2]. Historical Index62.57%/#8 of65 is another snapshot.
- GPQA/HLE/CritPt/Omniscience/LCR/MLCR exact figures not verified in inspected sources. Reasoning assessment rests on directly measured proof/scientific/professional tasks, not copied successor numbers.
Coding:
- Vals Vibe1.1 **87.82% ±2.53**, migration **57.20% ±4.21**, IOI **82.61% ±9.24**, ProgramBench **2% ±0.99**, terminal-science **30% ±5.52** [S2]. Exact conventional SWE/LiveCode/DeepSWE/SciCode not verified.
Long context / multimodal:
- Official1.05M capacity; no exact full-window MRCR/RULER found [S1]. Verified image/document inputs, no exact visual benchmark percentage found in inspected sources; native audio/video/media output not verified.

### Evidence comparison and research trail
Three fresh Google queries: `GPT-6 Sol official model`, `GPT-6 Sol independent benchmark`, `GPT-6 Sol review pricing limitations`; interstitials. Direct primary model card and independent Vals read. Vals explicitly counts refusals/policy blocks as failures and uses no fallback, strengthening route attribution. Current TB4 changes from launch snapshot are retained rather than interpreted as a same-test capability gain. Profile **$7.581/index test /29m11s** is workload-specific, not ordinary chat economics. Strong Vibe/proof/migration coexist with low legal/tax/full-program success. Cheap standard rates do not eliminate long-context/Fast premiums;6.1Sol's cheaper cache and improved evaluations are not transferred [S1,S2].

### Normalized scores (1–100)
- **Tool use: 88/100.** Stronger modern terminal/SRE evidence, capped by legal/tax failures [S1,S2].
- **Reasoning: 89/100.** Proof83 and scientific/workflow evidence, capped by missing exact academic/calibration reruns [S2].
- **Context window: 95/100.** Official1.05M, no≥98% retrieval bonus [S1].
- **Multimodal: 75/100.** Verified image/document workflows; narrower verified visual scores and no native audio/video [S1,S2].
- **Coding: 91/100.** Strong Vibe/migration/science, capped by2% full programs and incomplete conventional benchmark coverage [S2].
- **Cost efficiency: 75/100.** Moderate$2/$10 plus cache; task costs and surcharges constrain value [S1,S2].
- **Overall Score: 88/100.** (88 +89 +95 +75 +91)/5=87.6 →88. Best fit supervised coding/proof/document agents; cost excluded.

### Sources
- [S1] https://developers.openai.com/api/docs/models/gpt-6-sol — exact primary protocols, limits, tools and prices.
- [S2] https://www.vals.ai/models/openai_gpt-6-sol — independent max/no-fallback suite and historical launch snapshot.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research; three searches and direct primary/independent inspection, missing measurements explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
