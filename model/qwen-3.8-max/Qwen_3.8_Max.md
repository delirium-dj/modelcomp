# Qwen3.8-Max — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.8-max`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's hosted flagship — a 2.4-trillion-parameter mixture-of-experts model (95B active per token), natively multimodal (text + image + video) with a 1M-token context window, aimed at autonomous coding and long-horizon "cowork" agent work. It is a data-center-scale model, **not** the unrelated small Qwen3-8B (April 2025) it is sometimes confused with. A September-1 in-place upgrade (**Qwen3.8-Max-0902**, alias `qwen3.8-max-2026-09-02`) kept the same price/context and roughly doubled the weak August coding rows via further "Coding & Cowork" post-training.
- **Provider / access:** Qwen Cloud / Alibaba Cloud Model Studio (OpenAI-compatible Chat Completions + DashScope; Anthropic-compatible endpoint also used for harness testing). Open checkpoint **Qwen3.8-2.4T-A95B** (text-only, custom license, released Aug 12) — the hosted Max adds vision + non-thinking mode not present in the open weights.
- **Release / knowledge:** Released 2026-08-03; 0902 snapshot 2026-09-01. Knowledge cutoff not published ("further post trained" is the entire stated change).
- **IDs:** `qwen/qwen-3.8-max` (aliases `qwen3.8-max-0902`, `qwen3.8-max-2026-09-02`; open checkpoint `Qwen3.8-2.4T-A95B`).
- **Context window:** 1,000,000 tokens; 991K max input (983K with thinking on), 131K max output, 262K max reasoning tokens. Rate limits 1M tokens / 15K requests per minute.
- **Modalities:** text + image + video in → text out; reasoning yes (thinking **and** non-thinking modes; open checkpoint cannot disable thinking); tool calls yes (built-in code interpreter, web search, web extractor, image search; function calling).
- **Pricing (as of 2026-10-21):** $2.00 input / $6.00 output per 1M tokens — roughly 1/3 of Claude Opus 5 and 1/4 of GPT-5.6 Sol's standard rate. Cache lanes: $0.25 implicit cache hit, $0.17 explicit cache read, $2.50 explicit cache creation. (Cheaper than the model it replaces: Qwen3.7-Max was $2.50/$7.50.)
- **Architecture:** MoE, 2.4T total / 95B active. Reasoning-effort levels (open cards default to `xhigh`, the top of three). Notably **verbose** — Artificial Analysis measured 190M output tokens across its eval vs an 88M median for comparable models.

### Raw benchmarks found

Agent / tool use (Alibaba vendor-run; 0902 snapshot where noted):

- OSWorld-Verified (computer-use agents): **86.1** — leads its table (Fable 5 85.0, GPT-5.6 Sol 83.2)
- Automation Bench v1.0.6 (agentic SaaS workflow): **50.8** (0902) — a hair over Claude Opus 5's 50.3 (Fable 5 46.2, GPT-5.6 Sol 45.8)
- Toolathlon Verified (real-world tool use): **72.5 → 73.3** (0902) — **trails** Opus 5 (77.6), Fable 5 (77.9), GPT-5.6 Sol (74.9)
- ERQA (embodied intelligence): **78.3** (0902) — leads Opus 5 (67.3), Fable 5 / GPT-5.6 Sol (70.0)

Reasoning / knowledge:

- GPQA Diamond: **92.6** — ties Fable 5, a touch below GPT-5.6 Sol (94.1) and above Opus 4.8 (92.0)
- IFBench (instruction following): **82.8** — clear lead (GPT-5.6 Sol 72.7; both Claude flagships low-60s); a durable Qwen3.7-Max strength (79.1)
- PaperBench (research-paper reproduction, long-horizon): **93.0** — leads (GPT-5.6 Sol 90.5, Fable 5 88.8, Opus 4.8 80.3); a +28 jump over Qwen3.7-Max
- HLE (broad-knowledge frontier exam): **43.6** — **last of the four flagships** (Fable 5 53.3, GPT-5.6 Sol 47.2, Opus 4.8 45.7); barely up from Qwen3.7-Max's 41.4 — the clearest weak spot
- **Artificial Analysis Intelligence Index (independent): 45** at $5.41/task (vs Claude Opus 5.5's 58 at $5.98/task) — mid-tier; BenchLM aggregator ranks it #18 of 226 (69.73/100 composite)

Coding (Alibaba vendor-run, most via Anthropic's Claude Code harness; Aug → 0902 where noted):

- Terminal Bench 2.1: **86.6** — beats Opus 4.8 & Fable 5 (84.6), below GPT-5.6 Sol (88.8)
- TerminalBench 3.0 (agentic terminal coding): **11.3 → 29.0** (0902) — still well below Opus 5 (42.7), GPT-5.6 Sol (34.6), Fable 5 (34.0)
- SWE-bench Pro: **67.7** — ahead of GPT-5.6 Sol (64.6), behind Opus 4.8 (69.2) and **12 points behind Fable 5 (80.0)**
- DeepSWE 1.1: **56.6 → 69.3** (0902) — near Fable 5 (69.7), below Opus 5 (73.6) and GPT-5.6 Sol (72.7)
- ProgramBench (black-box replication): **10.5 → 28.0** (0902) — below Opus 5 (41.5), Fable 5 (33.0)
- SWE-Marathon (ultra-long-horizon): **39.1 → 44.8** (0902) — below Opus 5 (50.0), Fable 5 (45.0)
- SWE-Atlas QnA (repo-level understanding): **60.3 → 66.3** (0902) — **leads** Opus 5 (63.2), GPT-5.6 Sol (46.0), Fable 5 (39.0)
- JobBench (professional job tasks): **53.4 → 64.0** (0902) — below Opus 5 (67.8), above Fable 5 (57.4)
- In-house rows: QwenSWEBench V2 70.0, CoWorkBench 76.1, WorkArena Elo 1348 → 1468 (0902; GPT-5.6 Sol 1482, Opus 5 1437)

Multimodal:

- MathVision: **95.2** (leads its table); LogicVista (visual logic): **91.9** (leads); BabyVision (general visual reasoning): **91.3 → 93.8** (0902, leads)
- Native chart-reasoning and document-parsing vision refined in 0902; the open 2.4T checkpoint is text-only, so vision is hosted-API-only

Long context:

- 1M-token window (991K input / 131K output / 262K reasoning) with both thinking and non-thinking modes; no MRCR / needle-in-a-haystack retrieval score published, and heavy token verbosity erodes the practical window.

> Provenance: launch benchmark figures are **Alibaba vendor-run** (Qwen official release / model cards, Aug–Sept 2026), and most coding rows ran inside Anthropic's Claude Code harness pointed at Qwen's Anthropic-compatible API — so they are "Qwen-inside-Anthropic's-harness" scores, and harness choice can swing agentic results by several points. Several rows are Qwen in-house evals (QwenSWEBench V2, CoWorkBench, WorkArena, QwenQoderBench, RecreationBench). The table carries a "Fable5 results may involve fallbacks" footnote on the column Qwen trails most. **Independent** verification is thinner: the Artificial Analysis Intelligence Index (45, $5.41/task, 190M output tokens) and the BenchLM composite (#18/226, 69.73). Treat vendor numbers as an upper bound; Alibaba's own framing ("second only to Fable 5") rests on internal evals. As this is the reporting agent's own namesake, scores below are graded strictly on the evidence with no inflation.

### Normalized scores (1–100)

- **Tool use: 86/100.** Vendor-reported leads on OSWorld-Verified (86.1), Automation Bench (50.8, 0902) and ERQA (78.3) plus a full built-in tool set (code interpreter, web search/extractor, image search); held below the frontier because Toolathlon Verified (73.3) trails Opus 5 / Fable 5 / GPT-5.6 Sol and the leads are Alibaba-run, not independently verified.
- **Reasoning: 84/100.** Strong GPQA Diamond (92.6), a clear IFBench lead (82.8) and an excellent PaperBench (93.0, long-horizon research); capped because HLE is 43.6 — **last of the four flagships**, barely above Qwen3.7-Max — and the independent AA Intelligence Index is only 45 (mid-tier, well below Opus 5.5's 58).
- **Context window: 90/100.** A genuine 1M-token window (991K input / 131K output / 262K reasoning) with selectable thinking modes; discounted by the absence of any published retrieval (MRCR/needle) benchmark and by extreme verbosity (190M output tokens vs an 88M median) that burns the window fast in long agent runs.
- **Multimodal: 88/100.** Native text+image+video with a dominant vendor multimodal sweep (MathVision 95.2, LogicVista 91.9, BabyVision 93.8, OSWorld-Verified 86.1) and refined chart/document parsing; capped because the open checkpoint is text-only (vision is hosted-only) and none of the vision rows are independently verified.
- **Coding: 85/100.** Terminal Bench 2.1 86.6 beats both Claude flagships (vendor-run) and the 0902 upgrade roughly doubled the weak August rows (DeepSWE 69.3, SWE-Atlas QnA 66.3 leads, TerminalBench 3.0 29.0); still behind the frontier on the hardest engineering — SWE-bench Pro 67.7 is 12 points under Fable 5, and Opus 5 leads TerminalBench 3.0, ProgramBench and SWE-Marathon by 4–14 points.
- **Cost efficiency: 84/100.** Excellent sticker price ($2/$6, cache reads $0.17–$0.25) — ~1/3 of Opus 5, ~1/4 of GPT-5.6 Sol, cheaper than Kimi K3 — but the real cost-per-completed-task is far closer than the rate card suggests: AA measured $5.41/task vs Opus 5.5's $5.98 (only ~10% cheaper) because the model is so verbose. Cache-friendly long-horizon work that re-reads the same repo is where the cheap lanes genuinely pay off.
- **Overall Score: 87/100.** Mean of Tool 86 + Reasoning 84 + Context 90 + Multimodal 88 + Coding 85 = 86.6 → 87. Best fit: cost-sensitive, long-horizon multimodal coding and "cowork"/office-agent work — repository comprehension, SaaS-workflow automation, chart/document parsing and instruction-heavy tasks where a $2 input price against a 1M window is the binding constraint; the hardest verified software engineering and broad-knowledge frontier (HLE) still favor Claude Fable 5 / Opus 5, and every launch number is vendor-run, so re-test on your own harness before trusting the "second only to Fable 5" claim.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Alibaba/Qwen official launch tables and the Qwen3.8-Max-0902 upgrade table via Emergent, Respan and CellCog; independent Artificial Analysis Intelligence Index 45 @ $5.41/task and BenchLM #18/226 composite); scores are normalized 1–100 interpretations, not official vendor scores. This is the reporting agent's own namesake model and was graded strictly on the evidence, with vendor-run numbers discounted and no inflation.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
