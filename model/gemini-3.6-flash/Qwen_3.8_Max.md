# Gemini 3.6 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July-2026 **efficiency** upgrade to Gemini 3.5 Flash — a post-training update on the *same base architecture*, not a new generation. Independent testing confirms it is **not smarter** (identical Artificial Analysis Intelligence Index) but is markedly faster and cheaper: it roughly halves task time (2.7→1.3 min), doubles output speed (~165→~276 tok/s), cuts output price ($9→$7.50), and improves coding/computer-use/long-context-retrieval execution while trimming wasted tokens and tool calls. Released alongside Gemini 3.5 Flash-Lite (smaller high-throughput) and Gemini 3.5 Flash Cyber (government/partner-restricted security model).
- **Provider / access:** Gemini API, Google AI Studio, Gemini app, Gemini Enterprise + Agent Platform (computer use shipped as a built-in client-side tool). Single stable ID, no preview/date suffix; served by multiple providers on OpenRouter.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not restated (inherits the Gemini 3.5 Flash lineage, ~January 2025).
- **IDs:** `google/gemini-3.6-flash`.
- **Context window:** 1,000,000 tokens input; 64,000-token max output (unchanged from 3.5 Flash).
- **Modalities:** text + image + video + audio + PDF in → text out; reasoning yes (**default thinking level: medium**; `thinking_level` enum minimal/low/medium/high replaces the old numeric `thinking_budget`); tool calls yes (optimized tool-call reliability, fewer unnecessary calls/shorter agent loops).
- **Pricing (as of 2026-10-21):** $1.50 input / $7.50 output per 1M tokens (output cut 16.7% from 3.5 Flash's $9.00; input unchanged); cached input $0.15; batch ~$0.75 / $3.75. Average cost per task ~$0.50 (vs ~$0.59 for 3.5 Flash); output-heavy agent workloads ~20–30% cheaper.
- **Architecture:** Same base as Gemini 3.5 Flash with post-training optimizations for token efficiency, tool-call reliability and coding accuracy.

### Raw benchmarks found

Agent / tool use (Google vendor-reported unless noted):

- OSWorld-Verified (computer use): **83.0%** — +4.6 over 3.5 Flash (78.4%); computer use now a built-in client-side tool
- GDPval-AA v2 (Elo): **1421** — +72 over 3.5 Flash (1349); document parsing / chart analysis / report drafting (Hebbia, Harvey cited)
- Fewer reasoning steps and tool calls per multi-step workflow (shorter agent loops = lower spend)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index (independent): 50** — **identical to Gemini 3.5 Flash**; broad intelligence did not improve (efficiency upgrade, not capability upgrade)
- GPQA Diamond: **94.13%** (#12 of 463, DataLeader) — strong graduate-level science reasoning
- Humanity's Last Exam: **38%** (AA-measured) — a **~3-point regression** vs 3.5 Flash (~41%); knowledge breadth is the documented weak spot
- MMMU-Pro: **83.20%** (#18 of 229, DataLeader)

Coding (Google vendor-reported; vs 3.5 Flash):

- DeepSWE v1.1 (Datacurve): **49%** (+12 over 37%) — fewer bad edits/execution loops in multi-step repo work
- MLE-Bench: **63.9%** (+14.2 over 49.7%)
- SWE-Bench Pro: **58.7%** (+3.6 over 55.1%) — still trails Claude Opus 4.7 (64.3%) on from-scratch engineering
- Terminal-Bench 2.1: **78.0%** (+1.8 over 76.2%; matches GPT-5.5's 78.2%) — note OpenRouter separately lists 73.8%

Multimodal:

- Native text/image/video/audio/PDF (unchanged); GDPval-AA v2 multimodal knowledge work improved (+72 Elo)
- **Regression:** human evaluators preferred 3.5 Flash's front-end/UI visual output (layout/styling); 3.6 also over-explores before simple front-end edits (extra tokens/time)

Long context:

- GDM-MRCR v2 (128K avg): **91.8%** — large gain over 3.5 Flash (77.3%)
- GDM-MRCR v2 (1M): **54.0%** — doubles 3.5 Flash (26.6%), though both still struggle at the full 1M length

> Provenance: benchmark figures are **Google vendor-reported** (launch blog, via Emergent and MyClaw.ai) except the Artificial Analysis Intelligence Index (50), speed (~276 tok/s post-launch; ~304 pre-launch), TTFT (~12.3s), time/cost-per-task (1.3 min / ~$0.50, measured at *high* thinking) and the HLE regression (38%), which are **independent** AA measurements; GPQA/MMMU-Pro ranks are DataLeader. Google's "17% fewer output tokens" claim did **not** replicate consistently (EvoLink: +1.7% at medium, −6.4% at high). Note an AA discrepancy on the predecessor: 3.5 Flash was 55.3 (#7/147) in Appwrite's May write-up but 50 in the July head-to-head — AA re-measurement/config drift; the July figure (both = 50) is used here. Migration carries **breaking API changes**: `temperature`/`top_p`/`top_k` silently ignored, `thinking_budget`→`thinking_level`, response prefilling removed, `candidate_count` unsupported, `FunctionResponse` requires both `call_id` and `name`.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified jumps to 83.0% (+4.6), computer use is now a first-party built-in tool, GDPval-AA v2 improves +72 Elo and tool-call reliability/loop-length were explicitly optimized — strong agentic execution; capped because the independent Intelligence Index is unchanged (50) and no MCP-Atlas lead is documented for this snapshot.
- **Reasoning: 81/100.** GPQA Diamond is strong (94.13%, #12/463) but the independent AA Intelligence Index is **identical to 3.5 Flash (50)** — no intelligence gain — and HLE **regressed** to 38% (from ~41%); this is an execution-efficiency patch, so broad reasoning sits a touch below the already-mid-tier 3.5 Flash.
- **Context window: 88/100.** The same 1M-token window (64K output) but materially better retrieval — GDM-MRCR v2 91.8% at 128K (vs 77.3%) and 54.0% at 1M (vs 26.6%, doubled); discounted because full-length 1M retrieval is still weak in absolute terms.
- **Multimodal: 87/100.** Broadest input set (text/image/video/audio/PDF) with improved multimodal knowledge work (GDPval-AA v2 +72, MMMU-Pro 83.2%); held below 3.5 Flash by a documented **front-end/UI visual-generation regression** (human evaluators preferred 3.5) and a tendency to over-explore before simple visual edits.
- **Coding: 85/100.** The clearest gain area — DeepSWE v1.1 +12 (49%), MLE-Bench +14.2 (63.9%), SWE-Bench Pro +3.6 (58.7%) and Terminal-Bench 2.1 78.0% (matches GPT-5.5) — strong repository/agent coding at Flash speed; still behind Claude Opus 4.7 (64.3%) on the hardest from-scratch SWE work.
- **Cost efficiency: 85/100.** The headline value — output price cut to $7.50 (cached $0.15, batch ~$0.75/$3.75), ~$0.50 average cost per task, ~276 tok/s and half the task time; output-heavy agent workloads run ~20–30% cheaper than 3.5 Flash. The biggest real lever remains the thinking level (medium default = 85% of billed output tokens; minimal cuts cost ~73.6% with no accuracy loss in one test).
- **Overall Score: 86/100.** Mean of Tool 89 + Reasoning 81 + Context 88 + Multimodal 87 + Coding 85 = 86.0 → 86. Best fit: latency- and cost-sensitive production agents — multi-step tool-calling, computer-use automation, repository coding and 128K-scale document retrieval where ~2x speed and lower output price compound; it is **not** an intelligence upgrade over 3.5 Flash (same AA Index, lower HLE), so knowledge-heavy Q&A and front-end/UI generation may still favor 3.5, and migration requires handling the breaking API changes.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Google's vendor-reported launch benchmarks via Emergent's 3.6-vs-3.5 comparison and MyClaw.ai; independent Artificial Analysis Intelligence Index 50 / speed / time-per-task / HLE regression; DataLeader GPQA/MMMU-Pro ranks; OpenRouter, DataNorth and Trilogy pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
