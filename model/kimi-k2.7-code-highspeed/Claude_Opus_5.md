# Kimi K2.7 Code Highspeed — findings by Claude Opus 5

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** A **serving tier, not a different model** — and Moonshot says so in plain language: "Kimi K2.7 Code HighSpeed (`kimi-k2.7-code-highspeed`) is the high-speed version of Kimi K2.7 Code, **the same model as Kimi K2.7 Code**, but with an output speed of approximately 180 Tokens/s and up to 260 Tokens/s in short context scenarios" ([Kimi API Platform](https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart)). Alibaba Cloud Model Studio, which also resells it, quantifies the delta: "shares the same model as the standard version but delivers **5-6× faster output speed**" ([Model Studio](https://help.aliyun.com/en/model-studio/kimi-k2-7-code-highspeed)). It costs **exactly 2× the base tier** on every line item. This matters for how the report is scored: the five quality dimensions are properties of weights that are identical to `kimi-k2.7-code`, so they are assessed on the same public evidence; only **cost efficiency** can legitimately differ, and it does.
- **Provider / access:** Kimi API Platform as `kimi-k2.7-code-highspeed` (OpenAI-compatible, `https://api.moonshot.ai/v1`); Alibaba Cloud Model Studio as `kimi/kimi-k2.7-code-highspeed`; OpenCode Zen as `kimi-k2.7-code-highspeed` per this repo's local route. Moonshot also documents Claude Code integration for the K2 series. **Capacity caveat published by the vendor:** "Currently, the resource is limited, and the experience of the high-speed model may be slightly fluctuate，we are gradually increasing the resource" — i.e. the throughput you are paying double for is not guaranteed.
- **Release / knowledge:** No explicit release date published on the model guide. The Alibaba Cloud Model Studio listing is dated **2026-09-27**, which bounds it. It is derived from Kimi K2.7 Code, which itself builds on Kimi K2.6. Knowledge cutoff: no verified public date found. I am not going to invent either date.
- **IDs:** `kimi-k2.7-code-highspeed` (Kimi API), `kimi/kimi-k2.7-code-highspeed` (Alibaba Model Studio), `opencode/kimi-k2.7-code-highspeed` (Zen). **No free tier** — billing is pay-as-you-go with no subscription plan on the Kimi platform.
- **Context window:** **262,144 tokens (256K)** — Moonshot states `kimi-k2.7-code`, `kimi-k2.7-code-highspeed` and `kimi-k2.6` "all provide a 256K context window". **Max output: default `max_tokens` 32,768**, documented directly in the parameter table — a notably low generation ceiling against a 256K input window, and worth knowing before planning long-form output.
- **Modalities:** **Text + image + video in → text out.** Precisely documented, unlike most entries in this dataset: images in **png, jpeg, webp, gif**; video in **mp4, mpeg, mov, avi, x-flv, mpg, webm, wmv, 3gpp**; recommended ceilings of 4K (4096×2160) for images and FHD (1920×1080) for video, with Moonshot stating higher resolutions "will only increase processing time and will not improve the model's understanding". **URL-format images are not supported — base64 only**, and request bodies are capped at 100MB, so very large videos *must* go through the file-upload API. Notably it supports a **multimodal tool API**: tool *results* can return video, and Moonshot ships a worked `watch_video_clip` agent-loop example. Reasoning: **forced on** — `thinking` defaults to `{"type": "enabled"}` and the model **throws an error if thinking is disabled**; there is no non-thinking mode. Sampling is locked: `temperature` fixed at 1.0, `top_p` at 0.95, `n` at 1, both penalties at 0.0 — **any other value is an error** — and `tool_choice` accepts only `"auto"` or `"none"`.
- **Pricing (as of 2026-10-08):** **$1.90 / MTok input (cache miss), $0.38 / MTok input (cache hit), $8.00 / MTok output** ([Kimi model pricing](https://platform.kimi.ai/docs/pricing/chat)). Against the base tier's $0.95 / $0.19 / $4.00 this is **exactly double on all three lines**, for identical weights. Prices exclude tax; file content extraction and file storage APIs are **temporarily free**, which materially reduces the cost of the video workflows this model is built for.
- **Architecture:** Identical to `kimi-k2.7-code` — Mixture-of-Experts, **1T total parameters / 32B activated**, 61 layers (1 dense), 384 experts with 8 selected per token plus 1 shared, 64 attention heads, MLA attention, SwiGLU, 160K vocabulary, and a **MoonViT** vision encoder at 400M parameters; shipped with native INT4 quantization under the **Modified MIT License**. The "highspeed" designation is an inference-serving configuration, not an architectural change.

### Raw benchmarks found

> **Attribution discipline:** Moonshot states this tier is the same model as `kimi-k2.7-code`, so the benchmark record for that checkpoint is the benchmark record for this one. No aggregator publishes a separate `-highspeed` row ([BenchLM](https://benchlm.ai/models/kimi-k2-7-code) tracks only the base ID). Every figure below is therefore labelled with the checkpoint it was measured on, and **nothing is attributed to the highspeed tier that was not measured on identical weights**. No claim is made that the faster serving configuration reproduces these scores — only that the weights are the same.

Agent / tool use (measured on `kimi-k2.7-code`):

- τ²-bench: **90.1%** ([Artificial Analysis](https://artificialanalysis.ai/models/kimi-k2-7-code))
- MCPMark-Verified: **81.1%** ([Kimi K2.7 Code model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code)) — human-verified MCP tool use across Notion, GitHub, Filesystem, Postgres and Playwright, 100-step budget, 3-run average
- MCP-Atlas: **76.0%** (model card, official config, 100 tool-call budget, 3-run average)
- Terminal-Bench 2.1: **67.0%** ([Vals AI](https://www.vals.ai/models/kimi_kimi-k2.7-code))
- Kimi Claw 24/7 Bench: **46.9%** (model card) — in-house long-horizon multi-day coworking benchmark, 17 scenarios / 610 evaluation points
- GDPval-AA: **1114 Elo** / **27.0%** normalized; AA Agentic Index: **22.5%** (Artificial Analysis)
- Vendor claim for the K2.7 Code generation: **~10% improvement in agentic capabilities over K2.6** in external benchmark evaluations — stated as a chart without extractable values, so recorded but not scored
- OSWorld, Toolathon, Claw-Eval: no verified public score found

Reasoning / knowledge (measured on `kimi-k2.7-code`):

- AA-GPQA Diamond: **89.6%**; AA-HLE: **35.0%**; AA-LCR: **79.3%**; CritPt: **10.0%**; AA-IFBench: **63.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **25.8**; BenchLM overall for the base checkpoint **52.21/100, rank #84 of 889**
- AA-Omniscience: Index **−10.2**, Accuracy **39.6%**, **Hallucination Rate 82.4%**
- Vendor claim: **~30% average reduction in "overthinking" tendencies** versus K2.6 — relevant here because thinking cannot be disabled, so token efficiency is the only lever
- MMLU-Pro, AIME, FrontierMath: no verified public score found for this checkpoint

Coding (measured on `kimi-k2.7-code`):

- SWE-bench Verified: **78.2%**; LiveCodeBench: **82.1%** ([Vals AI](https://www.vals.ai/models/kimi_kimi-k2.7-code))
- Kimi Code Bench v2: **62.0%** (model card; K2.6 50.9, GPT-5.5 69.0, Claude Opus 4.8 67.4)
- Program Bench: **53.6%** (model card) — 200 tasks reconstructing program behaviour from a compiled binary plus docs, judged against 248,000+ fuzz-generated behavioural tests
- MLS-Bench Lite: **35.1%** (model card, 30-task subset, 5-hour agent budget)
- CursorBench 3.2: **49.7%** ([Cursor evals](https://cursor.com/cursorbench)); OpenHarmony Bench: **52.1%** ([official leaderboard](https://bench.matrix.openharmony.cn/))
- AA-SciCode: **47.8%**; AA Coding Index: **60.8%** (Artificial Analysis)
- SWE-bench Pro, FrontierCode: no verified public score found

Multimodal (measured on `kimi-k2.7-code`):

- Design Arena — Website: **1270 Elo** ([OpenRouter](https://openrouter.ai/moonshotai/kimi-k2.7-code/benchmarks))
- **No MMMU, MathVision, CharXiv, Video-MME, OmniDocBench or OCR number exists for this checkpoint.** The image and video pathways are precisely documented at the API level and architecturally real (MoonViT), but unmeasured.

Long context:

- No MRCR / RULER / LongBench / needle-retrieval number at any depth. **AA-LCR 79.3%** is the only quantified long-context signal. Moonshot ran its own K2.7 Code benchmark suite at the full 262,144-token setting, which is better practice than most.

Throughput (the only dimension where this tier differs, and it *is* measured):

- **~180 tokens/s** median programming scenarios; **~260 tokens/s** short-context scenarios (Kimi API Platform)
- **5–6× faster output** than the standard tier (Alibaba Cloud Model Studio)
- Vendor-disclosed caveat: resource-limited, experience "may slightly fluctuate"

### Normalized scores (1–100)

- **Tool use: 80/100.** Scored on identical weights, and the evidence is the best tool-use record in this batch: **MCPMark-Verified 81.1%** (beating Claude Opus 4.8's 76.4%) and **MCP-Atlas 76.0%**, both human-verified or official-config with published tool-call budgets and 3-run averages, plus τ²-bench 90.1% and an independent Terminal-Bench 2.1 of 67.0%. Capped by Kimi Claw 24/7 at 46.9% on Moonshot's own long-horizon test and an AA Agentic Index of 22.5% that contradicts the MCP picture. One tier-specific concern I will name but not double-count: the vendor's own "resource is limited … may slightly fluctuate" warning is a poor property for the multi-hour agent loops this tier is marketed at, and I treat it as an operational risk priced into cost rather than capability.
- **Reasoning: 73/100.** AA-GPQA Diamond 89.6% and AA-LCR 79.3% are genuinely strong independent results and AA-HLE 35.0% is good for an open-weight model. Hard-capped by an **82.4% hallucination rate** against 39.6% accuracy, CritPt 10.0%, an AA Intelligence Index of 25.8, and no MMLU-Pro or competition-math coverage. The locked sampling parameters (temperature 1.0 and top-p 0.95 are *errors* to change) remove the usual lever for trading creativity against determinism.
- **Context window: 74/100.** 262,144 tokens, vendor-stated for this exact ID, on an MLA backbone, with AA-LCR 79.3% showing real usability and Moonshot's own suite run at the full window. Held in the mid-70s because 256K is mid-pack against the 1M–2M windows here, no retrieval curve exists at any depth, and the **32,768-token default output ceiling** is a real constraint — this is a model that can read a great deal and write comparatively little per call.
- **Multimodal: 70/100.** Architecturally and operationally real, and better *documented* than most: a 400M-parameter MoonViT encoder, nine supported video container formats, four image formats, published resolution guidance, and a genuine **multimodal tool API** where tool results can hand video back to the model. Scored at 70 rather than higher because the measurement is essentially absent — one Design Arena Elo and nothing else — and because base64-only image input with a 100MB request cap pushes any serious vision workload through the file API.
- **Coding: 79/100.** Same weights, same strong record: SWE-bench Verified **78.2%** and LiveCodeBench **82.1%** from an independent lab, Program Bench 53.6% on binary-to-source reconstruction, and a vendor-measured 30% cut in thinking tokens versus K2.6. Capped because Moonshot's own table shows GPT-5.5 and Claude Opus 4.8 ahead on Kimi Code Bench v2, Program Bench and MLS-Bench Lite, and because CursorBench 3.2 at 49.7% and AA-SciCode 47.8% are mid-band.
- **Cost efficiency: 74/100.** This is the only dimension where the tier genuinely differs, and it is strictly worse than the base: **$1.90 / $8.00 per MTok is exactly double `kimi-k2.7-code`'s $0.95 / $4.00 for byte-identical weights.** You are buying throughput only — 5–6× output speed, ~180 tok/s median and ~260 tok/s short-context — and for interactive edit-run-fix loops where a developer is waiting, that is a defensible trade. It still scores well in absolute terms (a 1T-parameter model at $1.90 input is cheap, cache hits drop input to $0.38, the Modified MIT licence permits self-hosting instead, native INT4 makes that tractable, and file extraction/storage APIs are temporarily free). Docked from the base tier's rating for the 2× multiplier, for no free tier, for $8.00 output on a model that **cannot turn thinking off**, and for the vendor's own admission that the premium throughput is resource-limited and may fluctuate.
- **Overall Score: 75.2/100.** Mean of the five non-cost dims (80 + 73 + 74 + 70 + 79) / 5 = 75.2 — necessarily identical to the base checkpoint, because the weights are identical and Moonshot says so. Best fit: **interactive** coding agents where latency is the binding constraint — tight edit-run-fix loops, live pair-programming, MCP-driven automation against Notion/GitHub/Postgres/Playwright — and short-context work where the ~260 tok/s figure applies. Choose the base `kimi-k2.7-code` tier instead for batch, overnight or CI workloads: identical output quality at half the price, with no exposure to the highspeed pool's resource limits.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the Kimi API Platform's K2.7 Code guide (the explicit "same model" statement, 180/260 tok/s figures, resource-limited caveat, 256K window, 32,768 default `max_tokens`, forced-thinking behaviour, locked sampling parameters, `tool_choice` constraints, image/video format and resolution rules, base64-only and 100MB limits, and the multimodal tool-API example), the Kimi model-pricing page (exact per-million rates for `kimi-k2.7-code-highspeed` versus the base tier, and the temporarily-free file APIs), Alibaba Cloud Model Studio's listing (the 5–6× figure, dated 2026-09-27), the `moonshotai/Kimi-K2.7-Code` Hugging Face model card for architecture and vendor benchmark table, BenchLM, and the underlying Artificial Analysis, Vals AI, Cursor, OpenHarmony and OpenRouter leaderboards. Because the vendor states the weights are identical, quality-dimension evidence is drawn from the `kimi-k2.7-code` checkpoint and **every such figure is explicitly labelled with the checkpoint measured**; no benchmark is attributed to the highspeed serving configuration itself. No release date was published on any source consulted, so none is asserted. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
