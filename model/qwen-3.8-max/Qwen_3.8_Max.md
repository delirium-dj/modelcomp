# Qwen3.8-Max — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.8-max`; BenchLM id `qwen3-8-max`; **AA no longer carries a live page for this model**)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** own-namesake report, graded strictly on evidence with no inflation — and this pass adds the independent layer the April draft only partially had, which mostly confirms the vendor numbers are an **upper bound**. The single biggest change: **AA no longer carries a live Qwen3.8-Max page** (the launch Index 45 / $5.41-task / 190M-verbosity reads are now historical, not refreshable), and the field grew, so BenchLM now places it **#33 of 1004 (64.86)** rather than the drafted #18/226 — a roster-expansion effect, not a regression. The vendor agentic "leads" that carried **Tool at 86** do not survive neutral instruments: independent **Vals Terminal-Bench 2.1 reads 67.4 vs the charted 86.6** (~19-point over-claim), **Nous Hermes Index 36.2** and **MazeBench 0%** are mid-to-bottom, so **Tool 86 → 84**. The other dimensions hold on independent corroboration: **Vals GPQA-Diamond 93.7** and a genuinely strong **Epoch FrontierMath v2 (Tiers 1-3 74.7 / Tier 4 46.3)** support **Reasoning 84**; **Vals SWE-bench 85.6** and **LiveCodeBench 87.9** support **Coding 85** (offset by the TB over-claim and **FrontierSWE v2 15.8**); the now-documented video sweep (Video-MME 90.4, VideoMMMU 88.7, MLVU 90.8) confirms **Multimodal 88** but every cell is vendor-run, so it is not lifted; and **Context 90** stands — vendor **MRCRv2 92.9 / LongBench v2 66.3** now exist but with no independent retrieval score and the known verbosity drag. **Overall 87 → 86.**

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

Independent (**added 2026-11-02 — BenchLM `qwen3-8-max`, Overall 64.86, #33/1004, 67 of 724; AA no longer carries a live Qwen3.8-Max page, so its launch Index 45 / $5.41-task / 190M-verbosity reads are historical**):

- **Independent (neutral-harness) re-reads:** **GPQA-Diamond (Vals) 93.7** (≥ vendor 92.6), **MMLU-Pro (Vals) 88.6**, **Epoch FrontierMath v2 Tiers 1-3 74.7 / Tier 4 46.3** (strong, independent), **SWE-bench (Vals) 85.6**, **LiveCodeBench (Vals) 87.9**.
- **Vendor over-claims the independents undercut:** **Terminal-Bench 2.1 (Vals) 67.4** vs the charted 86.6 (~19 pts), **FrontierSWE v2 15.8** (Proximal) vs vendor FrontierSWE 73.5; **Nous Hermes Index 36.2 / Hermes Bench 70.5** and **MazeBench 0%** are mid-to-bottom agentic reads.
- **Vendor-run (Qwen release blog — upper bound):** OSWorld-Verified 86.1, OSWorld 2.0 19.4, Toolathlon-Verified 72.5, AutomationBench 27.3, WebArena-Verified 66.8, AndroidWorld 85.3, MobileWorld 77.8; HLE 43.6 (56.2 w/tools); PaperBench 93.0; DeepSWE 56.6, SWE-bench Pro 67.7; the multimodal sweep (MMMU-Pro 82.3, MathVision 95.2, CharXiv 93.5, OmniDocBench 92.1, Video-MME 90.4, VideoMMMU 88.7, MLVU 90.8, LVBench 81.8); **MRCRv2 92.9 / LongBench v2 66.3** (first published retrieval numbers, vendor).
- **No independent honesty read** — AA-Omniscience is unavailable (no live AA page), so the knowledge/abstention ceiling remains unmeasured independently.

### Normalized scores (1–100)

- **Tool use: 84/100.** *(86 → 84 — self-graded without inflation; vendor agentic "leads" corrected by neutral instruments.)* Vendor leads on OSWorld-Verified (86.1), Automation Bench (50.8, 0902) and ERQA (78.3) plus a full built-in tool set are real but Alibaba-run; independent agentic reads are mid-to-bottom — **Vals Terminal-Bench 2.1 67.4** (vs charted 86.6), **Nous Hermes Index 36.2**, **MazeBench 0%**, **OSWorld 2.0 19.4** — and Toolathlon Verified (73.3) trails the frontier, so the draft's 86 over-weighted the vendor table.
- **Reasoning: 84/100.** *(held — the independent layer corroborates.)* Strong GPQA Diamond (92.6) now independently re-read at **Vals GPQA-Diamond 93.7**, a clear IFBench lead (82.8), an excellent PaperBench (93.0, long-horizon research), and a genuinely strong **Epoch FrontierMath v2 (Tiers 1-3 74.7 / Tier 4 46.3)** the draft lacked; capped because HLE is 43.6 — **last of the four flagships**, vendor-only (no independent HLE) — and the launch **AA Intelligence Index 45** is now historical (AA has no live page; BenchLM #33/1004).
- **Context window: 90/100.** *(held.)* A genuine 1M-token window (991K input / 131K output / 262K reasoning) with selectable thinking modes; **vendor MRCRv2 92.9 / LongBench v2 66.3** are now published (the draft had none) but are Alibaba-run with **no independent retrieval score**, and extreme verbosity (launch AA 190M output tokens vs an 88M median) still burns the window in long agent runs.
- **Multimodal: 88/100.** *(held.)* Native text+image+video, now with a far broader documented sweep (**MMMU-Pro 82.3, CharXiv 93.5, OmniDocBench 92.1, Video-MME 90.4, VideoMMMU 88.7, MLVU 90.8, LVBench 81.8**) confirming genuine video input; unchanged because **every row is vendor-run** and AA no longer carries a live multimodal read, so none is independently verified.
- **Coding: 85/100.** *(held — the independent layer is mixed.)* Strong independent corroboration from **Vals SWE-bench 85.6** and **Vals LiveCodeBench 87.9**, but the headline vendor **Terminal-Bench 2.1 86.6** is re-read by Vals at **67.4** (~19-pt over-claim) and **FrontierSWE v2 15.8** is weak; the 0902 upgrade still roughly doubled the weak August rows (DeepSWE 69.3, SWE-Atlas QnA 66.3 leads). Behind the frontier on the hardest engineering (SWE-bench Pro 67.7 is ~12 under Fable 5; Opus 5 leads TerminalBench 3.0, ProgramBench, SWE-Marathon).
- **Cost efficiency: 84/100.** Excellent sticker price ($2/$6, cache reads $0.17–$0.25) — ~1/3 of Opus 5, ~1/4 of GPT-5.6 Sol, cheaper than Kimi K3 — but the real cost-per-completed-task is far closer than the rate card suggests: AA measured $5.41/task vs Opus 5.5's $5.98 (only ~10% cheaper) because the model is so verbose. Cache-friendly long-horizon work that re-reads the same repo is where the cheap lanes genuinely pay off.
- **Overall Score: 86/100.** *(87 → 86 — own-namesake model, graded strictly on evidence with no inflation.)* Mean of Tool 84 + Reasoning 84 + Context 90 + Multimodal 88 + Coding 85 = 431/5 = 86.2 → 86. Best fit: cost-sensitive, long-horizon multimodal coding and "cowork"/office-agent work — repository comprehension, SaaS-workflow automation, chart/document parsing and instruction-heavy tasks where a $2 input price against a 1M window is the binding constraint; the hardest verified software engineering and broad-knowledge frontier (HLE) still favor Claude Fable 5 / Opus 5, and the vendor launch table is an upper bound — re-test on your own harness (independent Vals Terminal-Bench reads ~19 points under the charted 86.6).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Alibaba/Qwen official launch tables and the Qwen3.8-Max-0902 upgrade table via Emergent, Respan and CellCog; independent Artificial Analysis Intelligence Index 45 @ $5.41/task and BenchLM #18/226 composite); scores are normalized 1–100 interpretations, not official vendor scores. This is the reporting agent's own namesake model and was graded strictly on the evidence, with vendor-run numbers discounted and no inflation.
- Re-research (2026-11-02): own-namesake model, graded strictly on evidence with no inflation. Refreshed from BenchLM (`qwen3-8-max`, 64.86 #33/1004, 67 of 724) plus the independent harnesses it aggregates (Vals AI, Epoch FrontierMath v2, Nous Hermes, FrontierSWE v2, OpenHarmony). Guard: **AA no longer carries a live Qwen3.8-Max page** — the launch Index 45 / $5.41-task / 190M-verbosity reads are now historical, treated as such. Conflict handling: independent instruments govern the vendor release blog (which sources most BenchLM cells here); the drafted Tool 86 rested on vendor "leads" and was trimmed to 84 where Vals TB 67.4 / Hermes Index 36.2 / MazeBench 0% disagree. The field grew 226→1004 since the draft, so the #18→#33 move is a roster-expansion effect, not a capability regression.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
