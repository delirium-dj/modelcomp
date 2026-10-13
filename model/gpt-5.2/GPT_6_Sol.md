# GPT-5.2 — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December 2025 mainline reasoning model for professional work and coding; API `gpt-5.2` corresponds to ChatGPT 5.2 **Thinking**, not the separately priced Pro or Instant variant ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-2/)).
- **Provider / access:** OpenAI API `gpt-5.2` snapshot `gpt-5.2-2025-12-11` via **Responses and Chat Completions** ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.2)); [OpenCode Console](https://opencode.ai/docs/zen/) has a paid `gpt-5.2` Responses route. No verified Zen free ID.
- **Release / knowledge:** December 11, 2025; August 31, 2025 cutoff ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.2)).
- **IDs:** `openai/gpt-5.2`, snapshot `gpt-5.2-2025-12-11`; **not** `gpt-5.2-pro` or `gpt-5.2-chat-latest`.
- **Context window:** [OpenAI](https://developers.openai.com/api/docs/models/gpt-5.2) **400,000 total / 128,000 max output**; compaction can extend workflow history but not a single native request window.
- **Modalities:** Text/image input → text output; reasoning effort none (default)/low/medium/high/xhigh, tools and structured output ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.2)); no native video/audio input claimed by the model docs, even if benchmark wrappers sample video as images.
- **Pricing (as of 2026-10-13):** [OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.2) **$1.75 input / $0.175 cached input / $14 output per 1M**; Pro is separately $21/$168, not a tier price of the same API ID ([OpenAI launch](https://openai.com/index/introducing-gpt-5-2/)).
- **Architecture:** Proprietary; parameter count unpublished ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.2)).

### Raw benchmarks found

[OpenAI's original xhigh Thinking evaluation table](https://openai.com/index/introducing-gpt-5-2/) identifies tools and effort; [Vals](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11) tests xhigh independently on several current rows and [BenchLM](https://benchlm.ai/models/gpt-5-2) attributes AA's later measurements. The OpenAI intro also lists Pro separately; do not borrow its figures. The Vals December news cites an earlier smaller cohort than current page ranking.

Agent / tool use:

- [OpenAI τ²-bench Telecom **98.7%** with an added helpful system instruction, Retail **82.0%**, MCP Atlas **60.6%**, Toolathlon **46.3%**, BrowseComp **65.8%**](https://openai.com/index/introducing-gpt-5-2/). [Later OpenAI comparison OSWorld-Verified **47.3%**](https://openai.com/index/introducing-gpt-5-4/); [Vals Terminal-Bench 2.0 **51.69% ±5.33**](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11).
- [Vals SAGE **49.27% ±3.35**, TaxEval v2 **75.76% ±0.84**](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11). No independently tested Claw-Eval or TB4.0 score found for this Thinking snapshot.

Reasoning / knowledge:

- [OpenAI GPQA Diamond **92.4%** no tools, HLE **34.5% no tools / 45.5% with search+Python**, ARC-AGI-2 Verified **52.9%**, AIME 2025 **100%**](https://openai.com/index/introducing-gpt-5-2/). [Vals GPQA **91.67% ±1.84**, MMLU Pro **86.23% ±0.34**](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11).
- [AA-attributed Intelligence Index **30.4**, HLE **37.7%**, CritPt **11.6%**](https://benchlm.ai/models/gpt-5-2) come from AA's methodology, not the OpenAI launch's xhigh research harness.

Coding:

- [OpenAI SWE-bench Pro Public **55.6%**, SWE Verified **80.0%**, SWE-Lancer IC Diamond **74.6%** on runnable subset](https://openai.com/index/introducing-gpt-5-2/); [Vals SWE-bench **75.80% ±1.92**, LiveCodeBench **85.36% ±1.03**, Vibe Code Bench v1.1 **53.50% ±5.07**](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11). SWE Verified is not SWE Pro.

Long context / vision:

- [OpenAI MRCRv2 eight-needle **85.6% at 64–128K / 77.0% at 128–256K** and GraphWalks BFS **94.0% below 128K**](https://openai.com/index/introducing-gpt-5-2/). No verified 400K full-window MRCR result for this snapshot in reviewed launch table; capacity is 400K.
- [OpenAI MMMU-Pro **79.5% without tools / 80.4% with Python**, CharXiv **82.1% without / 88.7% with Python**](https://openai.com/index/introducing-gpt-5-2/); independent [Vals MMMU-Pro **86.67% ±0.82**](https://www.vals.ai/models/openai_gpt-5.2-2025-12-11).

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong instructed Telecom 98.7% and MCP Atlas 60.6%, but Vals TB2.0 51.7%, OSWorld-Verified 47.3% and Toolathlon 46.3% limit autonomy.
- **Reasoning: 83/100.** GPQA ~92%, HLE 34.5–45.5% and ARC-AGI-2 52.9%; CritPt 11.6% and AA Index 30.4 cap the frontier claim.
- **Context window: 85/100.** 400K/128K with MRCR 77% at 128–256K; no full-400K retrieval measurement confirmed.
- **Multimodal: 66/100.** Good image/chart understanding but only text/image in and text out natively.
- **Coding: 79/100.** SWE Verified 76–80%, Pro 55.6%, LiveCodeBench 85.4%, yet Vibe Code 53.5% under independent conditions.
- **Cost efficiency: 63/100.** $1.75/$14 with $0.175 cache read; more recent models offer better quality/cost, and no free API ID.
- **Overall Score: 78/100.** (76 + 83 + 85 + 66 + 79) / 5 = 77.8, half-up 78; effective for bounded image-assisted code and professional questions at xhigh with longer-agent outcomes checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh official OpenAI docs and original Thinking-column benchmarks compared with Vals and AA-attributed data; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
