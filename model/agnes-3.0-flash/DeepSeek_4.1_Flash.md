# Agnes 3.0 Flash — findings by DeepSeek 4.1 Flash

- Source: Sapiens AI (Agnes AI) / Agnes 3.0 Flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Singapore-based Sapiens AI's (commercial brand: Agnes AI) next-generation text model positioned as an execution engine for coding agents, tool calling and long multi-step tasks. Not to be confused with the separate open-weight "Agnes-3.0-Flash Preview" checkpoint (33B, 262K context, Apache 2.0) — different checkpoint; its benchmark numbers do not apply here.
- **Provider / access:** Agnes AI omni-modal API (`https://apihub.agnes-ai.com/v1`) with Chat Completions, Responses and Anthropic-compatible Messages endpoints; also free via OpenRouter-style aggregators (`agnes-ai/agnes-3.0-flash:free` on unorouter). No OpenCode Zen route.
- **Release / knowledge:** 2026-09-11; knowledge cutoff not published.
- **IDs:** `agnes-3.0-flash` (Agnes AI API); no Zen Free ID.
- **Context window:** 512K total; 65,536 max output (official docs, verified 2026-11-12).
- **Modalities:** text and image-URL input; text out; optional Thinking mode (`enable_thinking` / Anthropic `thinking` block); tool calling; streaming.
- **Pricing (as of 2026-11-12):** list $0.05 in / $0.15 out / $0.005 cached input per 1M; currently $0 on all three items during an ongoing free period (no announced end date; free usage may be used to improve the models).
- **Architecture:** proprietary; no open weights for the production checkpoint. The hybrid-attention design (54 of 72 layers gated delta rule + 18 global attention, 27-layer vision tower) belongs to the Preview release only.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: **48%** (Artificial Analysis v4.3 — ahead of DeepSeek V4 Pro's 39.6%)
- AutomationBench-AA: **51%** (AA v4.3; DeepSeek V4 Pro 57%)
- Terminal-Bench v4.0: **7%** (AA v4.3; a clear weak spot vs DeepSeek V4 Pro 14%)
- GDPval-AA v2: **1573 Elo** (AA)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Franklin AI, synced from independent third-party evaluations)
- HLE: **38%** (AA v4.3; Franklin AI lists 38.5%)
- LCR / AA-LCR v1.1: **81%** (AA v4.3; Franklin AI 81.0%)
- CritPt: **15%** (AA v4.3)
- GDP.pdf: **10%** (AA v4.3)
- Artificial Analysis Intelligence Index v4.3: **36** — rank 1 of 61 models in its class; currently marked an estimate pending independent evaluation
- Omniscience Accuracy / reliability index: **25% / −11** (AA; answered slightly more questions incorrectly than correctly)
- Creative/roleplay (Caliper Bench): **63.0/100** headline; Classic RP 74.1, Dark RP 67.8, ERP 47.6

Coding:

- SciCode: **52%** (AA v4.3; Franklin AI 51.6%)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found
- Coding Index / DeepSWE: not published

Long context:

- AA-LCR v1.1: **81%** at a 512K window — strong for the class; no MRCR/RULER retrieval tables published

### Normalized scores (1–100)

- **Tool use: 73/100.** Strong banking tool use (τ3-Banking 48%) and a coding-agent focus with multi-step orchestration, but the 7% Terminal-Bench v4.0 and 51% AutomationBench cap it in the solid-mid band.
- **Reasoning: 72/100.** Frontier-adjacent GPQA (92.4%) and HLE (38%) with 81% long-context reasoning; pulled down by weak factual reliability (Omniscience −11) and a mid 36 composite index.
- **Context window: 88/100.** 512K-token tier (500K–1M band) with 65,536 max output; 81% AA-LCR validates real long-context use but there is no retrieval-at-depth table for the 95+ band.
- **Multimodal: 76/100.** Text plus image-URL input, text out; no video, audio or image generation.
- **Coding: 72/100.** SciCode 52% is above the mid band and the model is tuned for agentic coding, but Terminal-Bench v4.0 (7%) shows end-to-end terminal autonomy is the binding constraint.
- **Cost efficiency: 100/100.** Currently $0 across input/output/cached during the free period; the standing list price ($0.05/$0.15) would still score near the top — flagged as time-limited and free-usage-may-train.
- **Overall Score: 76/100.** (73 + 72 + 88 + 76 + 72) / 5 = 76.2 — an unusually cheap, fast (~235 t/s) mid-tier agent model with frontier-adjacent science benchmarks; best for generation-heavy, interactive agent loops, not terminal automation or cache-heavy pipelines.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-12
- Method: public internet research (official Agnes AI docs, Artificial Analysis-reported figures via press, Franklin AI benchmark page, Hugging Face model card for the Preview-vs-production clarification); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes AI — Agnes 3.0 Flash official documentation](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Intelligent Living — Agnes 3.0 Flash: Free Singapore AI Catches Up To DeepSeek V4 Pro](https://www.intelligentliving.co/agnes-3-0-flash-matches-deepseek/)
  - [Franklin AI — Agnes 3.0 Flash benchmark page](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [Hugging Face — Agnes-3.0-Flash (Preview checkpoint; production-vs-preview clarification)](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)
  - [Caliper Bench — Agnes 3.0 Flash (creative/roleplay scores)](https://caliperbench.com/m/agnes-3.0-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
