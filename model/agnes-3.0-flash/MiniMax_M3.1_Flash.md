# Agnes 3.0 Flash — findings by MiniMax M3.1 Flash

- Source: Agnes AI (`agnes-3.0-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** The production/API text model of Agnes AI, a Singapore-based lab (listed by Artificial Analysis under the creator name "Sapiens AI"), released 2026-09-11 and positioned for agentic coding and tool-driven work — "stable execution, reliable tool use, long-task context retention and high-quality delivery" across the whole path from task understanding and planning through tool use to final delivery. It is a distinct checkpoint from the open-weights **Agnes-3.0-Flash Preview** released a few days later on Hugging Face: the preview is a 33B hybrid-attention model with a 262K window, while the API model is proprietary with a 1M-class window; the preview's benchmark numbers must not be attributed to the API model. Agnes AI has since shipped Agnes 3.0 Pro, so 3.0 Flash is no longer the current top of the line.
- **Provider / access:** Agnes AI API — model name `agnes-3.0-flash`, base URL `https://apihub.agnes-ai.com/v1`, with three surfaces: Chat Completions (`POST /v1/chat/completions`), Responses (`POST /v1/responses`) and the Anthropic-compatible Messages API (`POST /v1/messages`); an OpenAI-compatible body with `tools` / `tool_choice` function calling and image-URL content blocks. The open-weights Preview checkpoint `Agnes-AI/Agnes-3.0-Flash` is downloadable from Hugging Face under Apache 2.0 but is a different model. Artificial Analysis has **retired** Agnes 3.0 Flash from its live catalogue, so the public evaluation record is frozen; OpenCode Zen does not list this model.
- **Release / knowledge:** API model released **2026-09-11** (Artificial Analysis release date); the open-weights Preview checkpoint was published **2026-09-14**. Knowledge cutoff not disclosed.
- **IDs:** `agnes-3.0-flash` (Agnes AI API), `Agnes-AI/Agnes-3.0-Flash` (Hugging Face, preview weights), Artificial Analysis slug `agnes-3-0-flash`.
- **Context window:** **512K** in the official Agnes AI API documentation (512K input, **65,536** maximum output tokens). Conflict: Artificial Analysis and the Hugging Face model card both describe the production/API checkpoint as having a **1M-token** window, and the open-weights preview has 262,144. The official API documentation is the primary source for the served product and is what the Context score is based on.
- **Modalities:** **text and image-URL input; text output** on the API (image input is a documented capability with a worked `image_url` example). Video input exists only in the open-weights Preview checkpoint. Thinking mode is available through the OpenAI-compatible `enable_thinking` extra-body switch, or an Anthropic-style `thinking` block with a `budget_tokens` budget. Tool calling is a first-class feature (`tools`, `tool_choice`, `tool_calls` returned in responses); JSON-style response formats and streaming are supported.
- **Pricing (as of 2026-11-12):** **list price $0.05 in / $0.15 out per 1M tokens, cached input $0.005**; the **trial price is $0 for input, cached input and output**. That makes the cheapest mainstream API model in this dataset by a wide margin, at roughly a third of the $0.37/$1.25 GLM-5.3-FlashX-Legal rate and about a fortieth of the Qwen3.8-2.4T-A95B rate. Trial access is promotional and the data-usage terms for the zero-price tier are not stated on the model page.
- **Architecture:** proprietary for the API model — parameter count not disclosed. The open-weights Preview shares the family's design: a 33B hybrid-attention decoder with 72 layers (54 gated-delta-rule recurrent layers alternating 3:1 with 18 global grouped-query-attention layers, so only a quarter of the layers hold a growing KV cache), hidden size 5,120, vocabulary 248,320, a 27-layer vision tower, roughly 66 GB of bf16 weights and a single H100 80 GB / H200 minimum.

### Raw benchmarks found

> The four independent figures below are the production/API model's Artificial Analysis record, surfaced by the Franklin AI and Dataconomy trackers that sync AA daily; AA itself has retired the model page, so the per-evaluation detail is now second-hand. The preview-checkpoint numbers at the end are listed separately and are **not** the API model's.

Agent / tool use:

- Terminal-Bench 2.1 / 4.0, Tau3-Banking, GDPval-AA, AutomationBench-AA, OSWorld, Claw-Eval: **no verified public score found** for this model
- Tool calling, `tool_choice`, tool-call orchestration and the Responses API are documented first-class features, and the vendor's stated core direction for 3.0 Flash is "tool calling and orchestration — stronger function calling, tool selection, and multi-step tool orchestration for more stable agent execution"
- The AA Intelligence Index v4.3 that carries this model's 35.5 score aggregates AutomationBench-AA and Terminal-Bench v4.0 among its ten evaluations, but those component figures were not published for Agnes 3.0 Flash before AA retired the entry

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Artificial Analysis, via the Franklin AI AA sync) — above the rubric's 90% frontier anchor
- HLE: **38.5%** (AA, via Franklin AI) — just under the 40% frontier anchor
- AA-LCR: **81.0%** (AA, via Franklin AI)
- Artificial Analysis Intelligence Index: **35.5** (AA, via Franklin AI and Dataconomy) — the top of the rubric's mid band (Index 20–35 = 55–65); the model is marked retired in AA's catalogue
- CritPt, HLE-Diamond, AA-Omniscience accuracy and hallucination rate for the API model: **no verified public score found**

Coding:

- SciCode: **51.6%** (AA, via Franklin AI) — below the rubric's 55% frontier anchor
- SWE-bench Verified / SWE-Pro, LiveCodeBench, Vibe Code Bench, DeepSWE, Terminal-Bench: **no verified public score found**
- Artificial Analysis Coding Index and Math Index: **no score recorded** for this model (Franklin AI's own catalogue note says so explicitly)
- The vendor positions the model for "Agnes Code task execution" and "coding-agent workflows", but publishes no coding benchmark of its own

Long context:

- 512K context window with 65,536 maximum output per the official API documentation; AA-LCR **81.0%** is the only independent long-context figure
- Open-weights Preview checkpoint (different model): **262,144** tokens, AA-LCR **68.33%**

Multimodal:

- Text and image input, text output (official API documentation). No video on the API.
- MMMU-Pro, Video-MME, audio benchmarks: **no verified public score found**

Speed (AA record, via the Dataconomy tracker): **226 tok/s** output, **1.21 s** time to first token; the same tracker's AA-based figures quote 244.8 tok/s and a 1.79 s TTFT. Blended price at a 7:2:1 cache-hit/input/output ratio: **$0.07 per 1M**.

Open-weights Preview checkpoint benchmarks (Agnes-AI/Agnes-3.0-Flash — **different weights from the API model**, listed for completeness only): IFBench **74.20**, SciCode **38.08**, GPQA Diamond **85.05**, AA-LCR **68.33**, AA-Omniscience accuracy **23.00**.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 45/100.** Tool calling is a documented, first-class capability (`tools`, `tool_choice`, `tool_calls`, a Responses API, and multi-step tool orchestration as the vendor's headline design goal), and the model's stated strengths — stable execution, reliable tool use, objective and constraint retention over long multi-turn tasks — are exactly the tool-use behaviours the rubric rewards. It is capped at 45 because **not one agentic or tool benchmark has been published for this model**: no Terminal-Bench, no Tau3, no GDPval, no AutomationBench-AA, no OSWorld, no Claw-Eval. The rubric's missing-Claw-Eval rule applies, and the AA Intelligence Index of 35.5 — which does aggregate agentic evaluations — is evidence of mid-tier rather than frontier agentic performance.
- **Reasoning: 70/100.** GPQA Diamond **92.4%** is the strongest reasoning number anywhere in this entry and clears the rubric's 90% frontier anchor, and AA-LCR **81.0%** is well above the mid band. It is held at 70 because AA's composite **Intelligence Index is only 35.5** — the very top of the rubric's mid band, far from the 60+ frontier — because HLE **38.5%** sits just under the 40% anchor, because the AA record for the API model contains no CritPt, HLE-Diamond or omniscience figures, and because the API model's own evaluation history is sparse enough that AA retired the entry.
- **Context window: 88/100.** The official Agnes AI API documentation specifies a **512K** window with 65,536 maximum output, which places the model in the rubric's 500K–1M band (85–94), and the only independent long-context number, AA-LCR **81.0%**, shows workable retrieval rather than degradation. It is not scored in the 95–100 band because the documented served window is 512K rather than 1M; Artificial Analysis and the Hugging Face card both describe the production checkpoint as 1M-token, so if the larger figure is confirmed the score moves into the 95+ tier.
- **Multimodal: 62/100.** The API takes **text and image-URL input** with text output, which is the rubric's "+image in = 60–70" band; image understanding is a documented, worked-through capability of the served model. It is held at 62 because **no MMMU-Pro, ChartQA, Video-MME or any other multimodal benchmark is published**, because video input is not available on the API (that belongs to the open-weights Preview checkpoint), and because output remains text-only.
- **Coding: 62/100.** SciCode **51.6%** is the only independent coding figure for the API model — a respectable result that sits below the rubric's 55% frontier anchor and well below the SciCode 55%+ / Coding Index 70%+ combination that the frontier band requires. Capped further because **no SWE-bench Verified, no LiveCodeBench, no DeepSWE, no Terminal-Bench and no AA Coding Index exist** for this model, and because the 76% instruction-following-style weakness seen across this price tier is a real risk on repository-scale work. The vendor's "Agnes Code" positioning is unaccompanied by any published coding number.
- **Cost efficiency: 98/100.** The list price is **$0.05 in / $0.15 out per 1M** with cached input at **$0.005**, and the **trial price is $0** across all three components — cheaper than the rubric's ~$0.10/$0.20 = 97–99 anchor, which prices out in the high 90s, and the blended 7:2:1 rate of **$0.07 per 1M** is the lowest in this dataset. It is held at 98 rather than 100 because the zero-price tier is a promotional trial whose data-usage terms are not stated, because the list price still applies once the trial ends, and because Artificial Analysis has retired the model, which raises the practical risk that the route disappears rather than gets cheaper.
- **Overall Score: 65.4/100.** (45 + 70 + 88 + 62 + 62) / 5 = 65.4 — best-fit: an extraordinarily cheap, fast (226 tok/s) 512K-context text-and-image model with one standout independent reasoning score, aimed squarely at tool-driven agent work but with essentially no public benchmark record; use it for high-volume extraction, classification, summarisation and cheap tool-orchestration steps, and keep a benchmarked model in reserve for anything that has to be right.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Context window: 512K (official API documentation) versus 1M (Artificial Analysis and the Hugging Face model card).** The vendor's own API reference is the primary source for the served product and is the figure scored; the 1M claim is recorded as an open question that would move the score into the 95+ tier if confirmed.
2. **Preview weights versus API weights.** The Agnes-3.0-Flash Preview repository (33B, 262,144 tokens, Apache 2.0) and the production API model (proprietary, 512K or 1M) are different checkpoints. The model card itself warns that the preview's benchmark results "should not be attributed to the Preview weights released here" in the opposite direction — the preview scores are not the API model's. Only the AA figures for the API model are scored; the preview table is listed separately and excluded.
3. **AA score 35.5 versus AA score 36 (estimated) versus AA "36" in trackers.** Dataconomy's model card carries a 36 "estimated" Intelligence Index next to the 35.5 measured value; the measured 35.5 is used.
4. **Speed 226 tok/s versus 244.8 tok/s, and TTFT 1.21 s versus 1.79 s.** Two tracker snapshots of AA's record taken on different dates; both are listed and the difference is immaterial to the scoring.
5. **Retired versus current.** AA marks the model retired in its catalogue while the Agnes AI documentation still documents it as a current API model and Agnes 3.0 Pro as the newer sibling. The evaluation record is therefore frozen, which is a reason to score conservatively on unmeasured dimensions rather than to assume the documented capability translates into measured capability.
6. **Creator naming.** Agnes AI (Singapore; Hugging Face org `Agnes-AI`) is the vendor; Artificial Analysis labels the creator "Sapiens AI". Both names are given so the records can be matched.

### Notes on identity

- `agnes-3.0-flash` (this entry) is the **proprietary API model**. The Hugging Face repository `Agnes-AI/Agnes-3.0-Flash` is the open-weights **Preview** checkpoint — a different model with different parameters, context window and benchmark scores.
- Agnes 3.0 Flash is a generation entry, not a tier or a subscription plan; the zero-price route is a time-limited trial of the same model, not a separate SKU.
- There is no OpenCode Zen route for this model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — the official Agnes AI developer documentation for Agnes 3.0 Flash (API surfaces, context and output limits, pricing and trial pricing, thinking-mode and tool-calling formats, product positioning), the Hugging Face model card for the open-weights Agnes-3.0-Flash Preview (architecture, capabilities and its own benchmark table, used only to document the preview/API distinction), the Artificial Analysis evaluation record for Agnes 3.0 Flash as surfaced by the Franklin AI and Dataconomy AA syncs, the LLM Releases catalog entry for the release chronology, and the OpenCode Zen catalogue for route availability. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes 3.0 Flash — Developer Guide (Agnes AI documentation)](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Agnes-AI/Agnes-3.0-Flash — Preview model card and weights (Hugging Face)](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)
  - [Agnes 3.0 Flash — AI Benchmark record (Franklin AI, syncing Artificial Analysis)](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [Agnes 3.0 Flash — model page (Dataconomy, citing Artificial Analysis)](https://dataconomy.com/ai-models/agnes-3-0-flash/)
  - [Agnes 3.0 Flash — release date and context (LLM Releases catalog)](https://www.llm-releases.com/models/agnes-3-0-flash)
  - [OpenCode Zen — model list and per-1M pricing](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `Agnes_3.0_Flash.md`, using the same headings.
