# Agnes 3.0 Flash — findings by GLM 5.3 Flash

- Source: Agnes AI (`agnes-3.0-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's next-generation text model for agentic coding ("Agnes Code") and tool-driven tasks — an execution-focused Flash-tier model emphasizing end-to-end delivery quality, stable tool orchestration, long-task context retention, and trustworthy, grounded output. Franklin AI's catalogue attributes the model to "Sapiens AI" and marks it retired (historical record); Agnes AI's own documentation remains live with current pricing.
- **Provider / access:** Agnes AI API hub, base URL `https://apihub.agnes-ai.com/v1` — OpenAI-compatible Chat Completions (`POST /v1/chat/completions`), Responses (`POST /v1/responses`), and an Anthropic-compatible Messages API (`POST /v1/messages`). A third-party free variant (`agnes-ai/agnes-3.0-flash:free`) is listed on UnoRouter for OpenAI-compatible clients. A tier sibling, "Agnes 3.0 Flash Max", has retired documentation (tier variant, not tracked separately here).
- **Release / knowledge:** released 2026-09-11 (Franklin AI release field); knowledge cutoff not published.
- **IDs:** `agnes-3.0-flash` (Agnes AI), `agnes-ai/agnes-3.0-flash:free` (UnoRouter free variant).
- **Context window:** 512K tokens total; maximum output 65,536 tokens — verified from the official model documentation (limits table). No independent long-context retrieval measurement published.
- **Modalities:** text + image-URL input, text output; Thinking mode (OpenAI-style `chat_template_kwargs.enable_thinking` or Anthropic-style `thinking.budget_tokens`); function calling with `tools`/`tool_choice`. No audio/video/PDF input documented; no non-text output.
- **Pricing (as of 2026-11-13):** list price $0.05 in / $0.15 out / $0.005 cached-input per 1M tokens (blended ≈ $0.07 per Franklin's sample workload math); an "Angel User Trial Price" of $0 applies to all three items for eligible trial accounts. UnoRouter serves a `:free` variant.
- **Architecture:** not published — parameter count, MoE structure and weights availability are unverified (no Hugging Face weights found under the Agnes name in this pass); proprietary API model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau3-Banking / GDPval-AA / Claw-Eval / MCP Atlas: no verified public score found (vendor claims "stronger function calling, tool selection, and multi-step tool orchestration" are positioning, not measurements)

Reasoning / knowledge:

- GPQA (Diamond-class reasoning): **92.4%** (Franklin AI, synced from independent third-party evaluations; highest of its four published results)
- LCR (long-context reasoning): **81.0%** (Franklin AI)
- HLE: **38.5%** (Franklin AI; lowest of its four published results)
- Artificial Analysis Intelligence Index: **35.5** (Franklin AI, data changed 2026-09-24)
- MRCR / CritPt / Omniscience: no verified public score found

Coding:

- SciCode: **51.6%** (Franklin AI)
- SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe Code Bench / Coding Index: no verified public score found (Franklin explicitly lists "no Coding Index, Math Index or speed measurement")

Long context:

- LCR 81.0% (above) is the only long-context reasoning figure; no MRCR / RULER / GraphWalks retrieval value at a stated window length

### Normalized scores (1–100)

- **Tool use: 60/100.** Zero measured tool-use rows (no Terminal-Bench/Tau3/GDPval); scored mid-band on the verified agentic design (native function calling, orchestration-focused positioning, thinking mode) and capped hard by the missing measurements.
- **Reasoning: 78/100.** GPQA 92.4% clears the 90% frontier reference and HLE 38.5% sits at the 40% mark, but the broad AA Intelligence Index 35.5 lands at the top of the mid band (20–35 → 55–65) — the narrow-benchmark frontier signals are dragged down by the aggregate, settling at 78.
- **Context window: 85/100.** 512K (524,288) tokens places it at the bottom edge of the 500K–1M tier (85–94); 65,536 max output is a modest caveat; no retrieval measurement to push it higher.
- **Multimodal: 65/100.** Verified image-URL input + text out — the +image tier (60–70); no video/PDF/audio input documented.
- **Coding: 70/100.** SciCode 51.6% is just under the 55% frontier reference, but with no SWE-bench/LiveCodeBench/Coding-Index rows the evidence base is thin; the Agnes Code execution focus is vendor positioning, not a measurement.
- **Cost efficiency: 99/100.** $0.05/$0.15 per 1M (blended ≈ $0.07) undercuts the ~$0.10/$0.20 = 97–99 reference band; the $0 Angel User Trial tier and the UnoRouter `:free` variant are time-limited lanes on top of an already rock-bottom list price.
- **Overall Score: 71.6/100.** Mean of the five quality dims (60+78+85+65+70)/5 — a very cheap, long-context, image-capable reasoner whose measured strengths (GPQA, LCR) outrun its unmeasured agentic/coding claims; best fit for cost-sensitive long-context assistant workloads rather than hard agentic coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research (Agnes AI official documentation, Franklin AI benchmark pages, UnoRouter listing, DuckDuckGo-indexed coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes AI docs — Agnes 3.0 Flash (official model page: endpoints, 512K context, limits, pricing)](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Franklin AI — Agnes 3.0 Flash benchmark page (GPQA 92.4%, HLE 38.5%, LCR 81.0%, SciCode 51.6%, Index 35.5)](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [UnoRouter — agnes-ai/agnes-3.0-flash:free (free OpenAI-compatible variant)](https://unorouter.com/en/models/agnes-ai/agnes-3.0-flash:free)
  - [There's An AI For That — Agnes 3.0 Flash model profile](https://theresanaiforthat.com/model/agnes-3-0-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
