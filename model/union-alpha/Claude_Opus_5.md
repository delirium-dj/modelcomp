# Union Alpha — findings by Claude Opus 5

- Source: Circuit & Chisel, distributed by Unbiased (`unbiased/pareto`, formerly the stealth ID `union-alpha`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha — **now publicly revealed as Pareto 26.9**
- **Short description:** Not a trained model but a **blended multi-model synthesis service**. Union Alpha was the stealth codename under which Circuit & Chisel's **Pareto 26.9** ran a free preview on OpenCode, OpenRouter and Cloudflare; the identity was confirmed on **2026-09-18**. Architecturally it dispatches the same task to several existing open and frontier models, runs a harness that evaluates and synthesises their work, and escalates to a stronger model when the task demands it — **with no new foundation-model training run of its own** ([union-alpha.com independent portal](https://union-alpha.com/); [Unbiased model card](https://unbiased.ai/model-card/)). This is a genuine variant/alias relationship and must be flagged as such: **`union-alpha` and `unbiased/pareto` are the same service**, and the repo's `model/pareto-26.10-preview/` folder tracks the *successor* release, not this one.
- **Provider / access:** OpenRouter as **`unbiased/pareto`** (text + image input, `tools` and `tool_choice` supported); also Cloudflare's Pareto route and the Unbiased platform directly. Previously on OpenCode Zen as the free stealth model `union-alpha` — **that free tier has ended**, and Zen's current published catalogue no longer lists it ([Zen docs](https://opencode.ai/docs/zen/)). A revealing documentation artefact: Cloudflare's Pareto docs still return `"model": "union-alpha"` in sample responses, with embedded example costs matching the earlier **$1.25 input / $6.25 output** rates.
- **Release / knowledge:** Stealth preview ran through mid-September 2026; **identity revealed and paid launch 2026-09-18**. Knowledge cutoff: **not meaningful for this model** — it is an ensemble whose component models are undisclosed and, per Unbiased's own composition policy, **can change without notice** so long as functionality is not materially reduced. The free preview was terminated early because demand outran capacity, despite a reported threefold overnight capacity increase with AWS and throughput in the billions of tokens per minute.
- **IDs:** `unbiased/pareto` (OpenRouter, current canonical), `union-alpha` (retired stealth ID, still leaking through Cloudflare examples). **No free ID any more** — the free stealth preview is over, and the folder's metadata correctly sets `noFreeId: true`.
- **Context window:** **262,144 tokens total**, with a **131,072-token maximum output** — the output ceiling is the standout spec, higher than Claude Opus 5's 128K and higher than almost anything else in this dataset. Verified against the portal's specification table, which cross-references the OpenRouter catalogue.
- **Modalities:** **Text + image in → text out.** Tool calling: listed. **Explicitly *not* listed on its OpenRouter catalogue entry: `response_format`, structured-output metadata, and reasoning controls** — three omissions that matter for production integration and that the portal itself highlights when comparing against Claude Opus 5. No audio, no video, no PDF/file input, no generated media (the SVG gallery is text-generated vector markup, not image generation).
- **Pricing (as of 2026-10-08):** **$2.50 / MTok input, $0.25 / MTok cached input, $7.50 / MTok output** — the published Pareto 26.9 rate card. This is a **doubling of the input rate and a 20% rise in output** versus the $1.25 / $6.25 figures still embedded in Cloudflare's examples, i.e. the economics of this service have already moved once since launch. No free tier.
- **Architecture:** **Ensemble / harness, not a monolithic model.** Unbiased states plainly that no new foundation-model training run was involved: multiple undisclosed open and frontier models process the same task, a harness performs evaluation and synthesis, and a stronger model is invoked when needed. The component list is **not public and may change at any time**. Weights for the complete system are not published and cannot be, since the system is an orchestration layer rather than a checkpoint.

### Raw benchmarks found

> **Two-tier provenance problem, stated up front.** The official 26.9 card covers five benchmarks. Everything else — LiveBench, GPQA Diamond, ARI Bench — was measured on the **free Union Alpha preview**, not the paid 26.9 endpoint, and the portal itself warns that scores do not carry across Pareto releases ("Pareto 26.8 scores are not carried over to the 26.9 release"). Combined with a composition that may change without notice, **every number below has a shorter shelf life than usual**, and I weight the official card and the post-reveal paid test above the preview results.

Agent / tool use:

- **Terminal-Bench 4.0: 51** ([Unbiased Pareto 26.9 model card](https://unbiased.ai/model-card/)) — in the card's own four-model table this places it **3rd of 4**: GPT-6 Astra 58, Claude Fable 5.1 56, **Pareto 26.9 51**, DeepSeek 4.1 Flash 31
- LiveBench "agentic coding" subscore: **54.7** (preview snapshot, 2026-09-17, [LiveBench](https://union-alpha.com/))
- AI BENCHY (independent, **paid endpoint**, 2026-09-18): passed **1/1 tool-calling test** but **missed a combined/tool task** — so tool use is competent in isolation and fails when composed
- **τ²-bench: no result published — the portal explicitly lists it as "awaiting result"**
- GDPval-AA, OSWorld, MCP-Atlas, Toolathon, BrowseComp, Claw-Eval: no verified public score found

Reasoning / knowledge:

- **GPQA Diamond: 90.9%** (OpenRouter AutoExacto, recorded under Union Alpha, 2026-09-17) — a frontier-grade figure, but a **preview** measurement
- **HLE without tools: 49** (official 26.9 card; GPT-6 Astra 54) — genuinely strong; for scale, Claude Fable 5 measures 55.5% on the AA harness
- ArXivMath: **88** (official card; GPT-6 Astra 91)
- LiveBench **76.1 overall, #26 of 58** (preview): Reasoning **80.8**, Mathematics **95.3**, Language **85.9**, Data analysis **74.6**, Instruction following **59.5**
- **ARI Bench: 32/100, #2 of 36** (preview, **1 of 3 seeds, flagged provisional**) — public calibration 25/25, hidden exact match 32/100. A #2 placement on one seed is a weak claim and I treat it as such.
- AI BENCHY: **8.9/10, rank #34 of 330** on a private 22-test suite — 18/22 tests fully passed, **86.4% attempt pass rate**, consistency **9.2/10**; misses were puzzles, domain tasks, trivia and the combined/tool task. Operational data from the same run: **$1.172 total suite cost, 31.51s average response, 143.33s maximum**
- **No composite score and no measured task costs are published for 26.9** by Unbiased — their own card declines to give one
- CritPt, AA-Omniscience, Artificial Analysis Intelligence Index, AA-IFBench, AA-LCR: no verified public score found. BenchLM lists Pareto 26.9 as **unranked with no computed overall score** (4 of 625 benchmarks) ([BenchLM](https://benchlm.ai/models/pareto-26-9))

Coding:

- **DeepSWE: 74** (official 26.9 card) — the headline result, and it **ties GPT-6 Astra's 74**, the only one of five published benchmarks where Pareto is not behind
- LiveBench coding subscore: **82.1** (preview)
- AI BENCHY: passed **3/3 coding tests** (paid endpoint)
- **SWE-bench Verified: no 26.9 result published** — the portal states this explicitly rather than substituting an older release's number
- SWE-bench Pro, LiveCodeBench, FrontierCode, SciCode: no verified public score found

Multimodal:

- **MMMU-Pro: 78** (official 26.9 card; GPT-6 Astra 87) — a 9-point deficit to the comparison model
- Qualitative only: a four-prompt SVG generation gallery (pelican on a bicycle, raccoon on a jet ski, Mona Lisa, beach scene) published as visual evidence. Interesting, unscored, and not a benchmark.
- No MathVision, CharXiv, OmniDocBench, document/OCR, video or audio number found — consistent with image being the only non-text input

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth.** A 262K window and a 131K output ceiling are both entirely unvalidated by public retrieval or long-generation measurement.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 4.0 at 51 is a real, vendor-published, comparatively-framed result and it beats DeepSeek 4.1 Flash by 20 points — but Unbiased's own table puts it third of four, behind GPT-6 Astra and Claude Fable 5.1, and the independent AI BENCHY run shows the characteristic ensemble failure mode: **1/1 isolated tool-calling test passed, the combined/tool task failed**. Add a LiveBench agentic-coding subscore of 54.7, a τ²-bench result the vendor admits is still outstanding, and an OpenRouter entry with **no reasoning controls and no structured-output support**, and 68 is as high as the evidence supports.
- **Reasoning: 82/100.** The strongest dimension and the clearest justification for the ensemble approach: **HLE 49 without tools** on the official card and **GPQA Diamond 90.9%** are both frontier-class, ArXivMath 88 and LiveBench Mathematics 95.3 are excellent, and LiveBench Reasoning 80.8 corroborates. Capped below the mid-80s by three real problems — GPQA and LiveBench were measured on the **free preview** rather than the paid 26.9 endpoint, ARI Bench's #2 placement rests on **1 of 3 seeds**, and LiveBench instruction following is only **59.5**, which is exactly what one would expect from a synthesis layer reconciling several models' outputs.
- **Context window: 73/100.** 262,144 tokens is mid-upper, and the **131,072-token maximum output is genuinely exceptional** — higher than Claude Opus 5's 128K and most of this dataset, which matters for long-document generation. Held at 73 because there is **zero** public validation of either number: no retrieval benchmark at any depth, and no long-generation test confirming the 131K output is usable rather than nominal.
- **Multimodal: 64/100.** Text and images in, text only out, with **MMMU-Pro 78** as the sole hard number — respectable, but 9 points behind the model Unbiased chose for its own comparison table. Capped by the narrowest input surface of any model in this batch (no PDF/file input, which the portal itself concedes Claude Opus 5 has and Pareto lacks), no audio, no video, and no document, chart or OCR measurement at all. The SVG gallery is charming and evidentially worthless.
- **Coding: 76/100.** **DeepSWE 74 tying GPT-6 Astra** is the single most impressive thing on the official card — the only published benchmark where the ensemble matches a frontier model outright — and it is backed by LiveBench coding 82.1 and 3/3 coding tests on an independent paid-endpoint run. Capped by the absence of **any** SWE-bench Verified figure (which Unbiased transparently declines to publish rather than substituting an older release's), no SWE-bench Pro, no LiveCodeBench, and an agentic-coding subscore of 54.7 that is far below the static-coding one.
- **Cost efficiency: 72/100.** $2.50 in / $0.25 cached / $7.50 out per MTok is real value for GPQA 90.9% and DeepSWE 74 — half Claude Opus 5's input price and 70% below its output price, and the independent AI BENCHY run cost **$1.172 for a 22-test suite**, which is concrete rather than theoretical. Three deductions, all evidenced: the **free tier is gone** (and ended early, abruptly, because demand outran capacity), the rate has **already doubled on input** from the $1.25/$6.25 figures still visible in Cloudflare's docs, and a **31.5s average / 143.3s maximum response time** is a hidden cost of running several models per request that per-token pricing does not capture.
- **Overall Score: 72.6/100.** Mean of the five non-cost dims (68 + 82 + 73 + 64 + 76) / 5 = 72.6. Best fit: hard reasoning and code-repair tasks where answer quality justifies latency and you want frontier-adjacent HLE/GPQA/DeepSWE results at a third of frontier output cost — plus long-form generation, where the 131K output ceiling is a genuine edge. The structural caveat is unavoidable and should be weighted heavily by anyone deploying it: **the component models are undisclosed and may change without notice**, so every benchmark here describes a configuration that may no longer exist, and there are no reasoning controls or structured-output guarantees to stabilise behaviour.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — the `stealth-model/union-alpha` Hugging Face card (which identifies the model as blended LLM synthesis and points to the canonical portal), the independent union-alpha.com information portal (identity reveal, specifications, official 26.9 card figures with their four-model comparison table, AI BENCHY / LiveBench / GPQA / ARI results with their dates and seed counts, pricing history including the Cloudflare $1.25/$6.25 artefact, architecture and composition policy), BenchLM's Pareto 26.9 page, and the OpenCode Zen catalogue (checked; the free `union-alpha` stealth route is gone). Preview-era measurements are labelled as such and weighted below the official card and the post-reveal paid-endpoint test, in line with the portal's own warning that scores do not carry across Pareto releases. No number was imported from `pareto-26.10-preview`, which is the successor release and has its own folder. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
