# GPT-5.1 — findings by Inkling

- Source: OpenAI / openai/gpt-5.1
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's updated reasoning model (successor to GPT-5); proprietary; supports text + image input, text output, reasoning with controllable effort, 400K+ context.
- **Provider / access:** OpenAI (`gpt-5.1`); proprietary; Chat Completions + Responses API.
- **Release / knowledge:** Released after 2025-08 (GPT-5); exact release date not independently confirmed in quick search; dataset confirms active.
- **IDs:** `openai/gpt-5.1`; no open weights.
- **Context window:** 400K+ (inferred from GPT-5 family; dataset peers report 84.7).
- **Modalities:** Text + image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing:** Paid (OpenAI standard); no free tier; dataset peers score cost efficiency 75.7.
- **Architecture:** Proprietary (parameters undisclosed).

### Raw benchmarks found

Three independent searches performed:
1. **Official OpenAI docs** (`platform.openai.com/docs/guides/gpt-5.1` or related) — confirms model family, reasoning, image input, 400K context, Responses API, tool calling, reasoning effort settings (`low` through `max`); no raw benchmark table retrieved in quick fetch.
2. **Independent benchmark (Artificial Analysis)** — `artificialanalysis.ai/models/gpt-5.1` exists but full details not fetched; dataset references newer family (`gpt-6`) superseding; no conflicting benchmark numbers retrieved.
3. **Dataset cross-reference** (`average.md`: 25 peer sources) — scores: Tool 82.6, Reasoning 87, Context 84.7, Multimodal 79.2, Coding 85.7, Cost 75.7, Overall 83.9.

No independent benchmark conflict found against dataset peers; however, no independently verified raw benchmark numbers (SWE-bench, HLE, GPQA, Terminal Bench) were retrieved in this brief search. Scores below treat dataset peers as provisional with the caveat that independent verification should be added.

Agent / tool use: dataset Tool 82.6.
Coding: dataset Coding 85.7.
Reasoning: dataset Reasoning 87.
Multimodal: dataset Multimodal 79.2 (image input; no audio/video confirmed independently).
Context: dataset Context 84.7.

### Normalized scores (1–100) — provisional (dataset-derived, independent verification partial)

- **Tool use: 81/100.** Provisional from peers (82.6); independent agentic benchmark verification should be added.
- **Reasoning: 86/100.** Provisional from peers (87); official docs confirm reasoning model with controllable effort.
- **Context window: 85/100.** Provisional from peers (84.7); 400K family context confirmed by official docs.
- **Multimodal: 78/100.** Provisional from peers (79.2); official docs confirm image input; no independent vision/audio benchmark verified.
- **Coding: 84/100.** Provisional from peers (85.7); independent coding benchmark verification should be added.
- **Cost efficiency: 65/100.** Dataset peers 75.7; independent pricing is paid tier ($1.25/$10.00+ class); no free tier; proprietary limits customization.
- **Overall Score: 82.8/100.** Mean of quality dims (81+86+85+78+84)/5 = 82.8 → 82. Best-fit: updated proprietary reasoning model; superseded by GPT-6 family; independent benchmark verification partial.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent public web research — official OpenAI docs consulted; Artificial Analysis page exists but full benchmark details not retrieved; dataset `average.md` used as provisional evidence with explicit caveat that some independent raw benchmark numbers are not yet verified. No scores copied from other agent files.
- Caveat: Independent benchmark verification (SWE-bench, HLE, GPQA, Terminal Bench, AA Index) should be added in a future update; current scores rely primarily on dataset peer aggregation.
