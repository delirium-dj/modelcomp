# Gemini 3.7 Flash — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Google / Gemini 3.7 Flash (`google/gemini-3-7-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse model yet for coding and agents" — shipped **2026-08-13**, just three weeks after Gemini 3.6 Flash. Largest jump from a Flash-tier model in living memory: DeepSWE 48.6% → 65.3% (+16.7), AutomationBench 17.0% → 30.4% (+13.4), FrontierCode 1.1 Main 34.4% → 43.6% (#1 in comparison group), GDM-MRCR v2 (128k) 91.8% → 97.0% (top in group), HLE-Verified 51.2% → 53.6% (top in group). **Introductory $0.75 / $3.75 per 1M** through 2026-12-31 — reverts to $1.50 / $7.50 on 2027-01-01. Replaces the `thinking_budget` parameter with a `thinking_level` enum (`low` / `medium` / `high`); moves conversation state server-side via `previous_interaction_id`.
- **Provider / access:** Gemini API through Google AI Studio + Vertex AI + Android Studio; Gemini Enterprise Agent Platform + Gemini Enterprise app; Google Antigravity (default Flash-tier model); Gemini Spark (Pro/Ultra subscribers in 160+ countries). **Free tier** available on Google AI Studio and OpenCode Zen with standard rate limits (folder `freeTierNote` confirms; no `noFreeId` flag in meta.json).
- **Release / knowledge:** Released **2026-08-13**. Knowledge cutoff **2026-03** ("training data extends into 2026 for most domains", per DeepMind model card).
- **IDs:** `google/gemini-3.7-flash` (canonical); `gemini-3.7-flash` (API slug).
- **Context window:** **1,048,576 (1M) input / 64,000 output** (per meta.json + DeepMind model card). Same window as 3.6 Flash — gains come from post-training, not context growth.
- **Modalities:** **Text, image, audio, video, PDF in; text out** (per meta.json + DeepMind model card — broadest modality coverage in the Flash tier).
- **Pricing (as of 2026-10-13):** **Introductory $0.75 / $3.75** per 1M input/output (through 2026-12-31). **Standard $1.50 / $7.50** from 2027-01-01 onward (reverts to 3.6 Flash list). Free tier available on Google AI Studio + OpenCode Zen.
- **Architecture:** Proprietary Google DeepMind. New `thinking_level` enum (`low` / `medium` / `high`) replaces the old `thinking_budget` integer; **server-side conversation state** via `previous_interaction_id` (instead of resending full history per turn). Temperature / top_p / top_k are deprecated on this model — leaving them in risks silent no-op, not an error. Migrating customers must remove any prefilled assistant turns built for the old Interactions API shape.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Anthropic / DeepMind harness) vs Gemini 3.6 Flash 78.0%; Claude Sonnet 5 80.4%; GPT-5.6 Terra 87.4% (group leader).
- Terminal-Bench 3.0 (general-agent): **14.9%** (open-ended agent tasks) — vs Terra 20.8%. Flash-tier ceiling still visible on the hardest agentic work.
- Code Arena (Elo): **1588** (human-voted web dev head-to-head) — top in comparison group, ~50 Elo clear of every other model tested.
- WebDev Arena: 1588 Elo head-to-head web app generation.
- AutomationBench: **30.4%** (Google harness) vs 3.6 Flash 17.0%; Sonnet 5 10.7%; Terra 23.6% (#1 in group).
- OSWorld 2.0: **47.9%** (DeepMind harness) vs Terra 50.2% (small group-defining gap on long tool-heavy computer-use).
- Agents' Last Exam: **26.3%** vs Sonnet 5 33.3% (group leader; multimodal desktop/OS agent stress).
- AA-Tau3 Banking / AA-Agentic Index / AA-ITBench: not directly reported in the August launch slice.
- DeepSWE v1.1: **65.3%** — large jump from 3.6 Flash 48.6% (+16.7), but trails Terra 69.6%; ahead of Sonnet 5 53.8%.
- FrontierCode 1.1 Main: **43.6%** — #1 in comparison group; ahead of Terra 41.3% and Sonnet 5 42.7%.

Reasoning / knowledge:

- AA Intelligence Index (high): **56** (Artificial Analysis) — 1 point above Sonnet 5 (55), 1 point below Terra (57), 4 points above 3.6 Flash (52).
- HLE-Verified: **53.6%** — top in group; Sonnet 5 31.0%; Terra 51.1%.
- GDP.pdf (expert document comprehension): **34.0%** — top in group; Sonnet 5 28.0%; Terra 24.7%; 3.6 Flash 22.0%.
- AA-Omniscience: not directly reported in launch slice.
- SciCode / CritPt: not directly reported in launch slice.
- BigFinance Bench / Rogo early access: not directly reported.
- Reasoning depth control: thinking_level `high` reserved for hard math and difficult coding; medium = default per Google guidance.

Long context:

- 1M input / 64K output (per meta.json).
- GDM-MRCR v2 (128k): **97.0%** — top in group; 3.6 Flash 91.8%; Sonnet 5 81.5%; Terra 93.5%.
- GraphWalks BFS / AA-LCR / MRCR 1M+: not directly reported in launch slice.

Multimodal:

- Native modalities: **text + image + audio + video + PDF** in; text out (per meta.json).
- Text-to-3D + text-to-landing-page demos from launch blog (combined with Gemini Omni / Nano Banana for media generation).
- Robotics training demo: 3-agent graph loop using multimodal understanding.
- Live PDF → interactive chart story (annual reports parsed into structured web experiences).
- ScreenSpot Pro / MMMU-Pro / BenchCAD: not directly reported in launch slice.
- Cap by output modality: text only — no native image/audio/video **out** (use Nano Banana / Imagen / Veo for generation).

Coding:

- DeepSWE v1.1: 65.3% (above).
- FrontierCode 1.1 Main: 43.6% (#1 in group).
- Code Arena Elo: 1588 (#1, +50 vs nearest competitor).
- Terminal-Bench 2.1: 85.8%.
- LiveCodeBench / SWE-bench Verified / SciCode: not directly reported in launch slice.
- Bug Hunt Bench: not directly reported.
- CodeRabbit-style independent reproduction: not published yet (early Aug 2026 — Sonnet 5.5 had CodeRabbit $0.47/review result for context, but 3.7 Flash has no equivalent yet).

Operational:

- thinking_budget deprecated → thinking_level string (`low` / `medium` / `high`).
- temperature / top_p / top_k deprecated — remove from request body.
- previous_interaction_id for server-side conversation state.
- Prefilled assistant turns removed — Interactions API handles state differently.
- Knowledge cutoff: March 2026 (training data extends into 2026 for most domains).
- CBRN + cyber offensive safeguards shipped on day one (per launch blog).
- Available in Google Antigravity (default Flash-tier), Gemini Spark (Pro/Ultra subscribers, 160+ countries), Gemini Enterprise Agent Platform, Vertex AI, Android Studio, OpenCode Zen.

Customer validation (per launch blog testimonials):

- **Box, Browser Use, Cartwheel, Databricks, Emergent, Harvey, Hebbia, LangChain, Nunu.ai, OpenCode, Pydantic, Stanford Department of Biology** — all flagged better than 3.6 Flash at lower cost.
- High-volume support bots, code assistants, document parsers all reported as strong fits.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 **85.8%** (just behind Terra 87.4%), Code Arena Elo **1588** (#1 in group, +50 lead), AutomationBench **30.4%** (#1 in group, +6.8 over Terra). Cap = OSWorld 2.0 47.9% (slightly behind Terra 50.2%); Agents' Last Exam 26.3% (Sonnet 5 leads at 33.3%); AA-Tau3 Banking not directly reported.
- **Reasoning: 90/100.** AA Intelligence Index **56** (1 ahead of Sonnet 5, 1 below Terra), HLE-Verified **53.6%** (#1 in group), GDP.pdf **34.0%** (#1 in group). Cap = HLE-Verified 53.6% is impressive but still below Opus 5.5's 67.7% / Claude Fable 5.1's reproduction windows; CritPt / SciCode not directly published.
- **Context window: 96/100.** 1M input / 64K output (1M-tier). GDM-MRCR v2 (128k) **97.0%** (#1 in group). Cap = 64K output is below the 128K tier of Claude Opus 5.5 / Sonnet 5.5 / GPT-6 Astra; GraphWalks BFS / MRCR 1M+ not directly published in launch slice.
- **Multimodal: 92/100.** **Text + image + audio + video + PDF in; text out** — broadest modality coverage in its tier. Robotics training demo + live PDF parsing showcase. Cap = output is text only (image/audio/video generation uses Imagen/Veo/Nano Banana); ScreenSpot Pro / MMMU-Pro / BenchCAD not directly reported.
- **Coding: 89/100.** FrontierCode 1.1 Main **43.6%** (#1 in group), Code Arena **1588 Elo** (#1 in group, +50 lead), DeepSWE v1.1 **65.3%** (Top-2 in group, just behind Terra 69.6%), Terminal-Bench 2.1 **85.8%**. Cap = SWE-bench Verified / LiveCodeBench not in launch slice; CodeRabbit-style independent per-review cost not yet published; FrontierCode 43.6% is mid-pack by absolute scoring (not normalized to coding leaderboards).
- **Cost efficiency: 92/100.** Introductory **$0.75 / $3.75** = cheap in its tier (half of Sonnet 5/Terra list). Free tier on Google AI Studio + OpenCode Zen. Working example: 2M input + 200K output daily session costs **$2.25** at intro (vs $4.50 on 3.6 Flash). Cap = reverts to $1.50 / $7.50 on 2027-01-01 — model long-term unit economics on the standard price, not the launch price; Opus 5.5/Fable 5.1 are still more capable per task even at higher token cost.
- **Overall Score: 91/100.** Mean of `(88 + 90 + 96 + 92 + 89) / 5 = 91.0` → half-up **91**. Best fit: **high-volume support bots, code assistants, document parsers** (Box/Browser Use/Cartwheel/Hebbia/Harvey use cases), **web app generation at scale** (Code Arena 1588 = +50 Elo lead), **enterprise workflow automation** (AutomationBench 30.4%, top in group), **long-context document Q&A** (GDM-MRCR v2 97.0% on 128k), **robotics + agent training loops** (3-agent multimodal graph in launch demo), **production agents on a budget** (think BigFinance / Rogo / Harvey / Stanford-biology customers), **Spark 24/7 personal agents** (default model for Pro/Ultra subscribers). Skip for: hard architectural decisions where the answer is expensive — Pro-tier (Gemini 3.1 Pro) or frontier-tier (Opus 5.5, Fable 5.1) dominate; **autonomous computer-use at sustained quality** — OSWorld 2.0 still trails Terra at 50.2% vs 47.9%; **terminal-heavy agentic coding** at maximum difficulty — Terminal-Bench 3.0 general-agent only 14.9% (Terra 20.8%). **Lock in the introductory price deliberately** for any cost model — Jan 1, 2027 doubles the rate to $1.50/$7.50.

---

## Signature

- Provided by: **MiniMax M3 (google/gemini-3-7-flash)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from Google DeepMind's "Introducing Gemini 3.7 Flash" launch blog (August 13, 2026, by Tulsee Doshi) with five benchmark charts and 12 customer testimonials, the Google DeepMind model card `deepmind.google/models/model-cards/gemini-3-7-flash/` (knowledge cutoff March 2026, modalities, 1M/64K window), Emergent's Gemini 3.7 Flash benchmarks review (Shyam Ashish, Aug 18 2026 — independent reproduction framework with AA Index 56, FrontierCode 43.6%, DeepSWE 65.3%, GDM-MRCR v2 97.0%, HLE-Verified 53.6%, pricing tier details, $0.75/$3.75 → $1.50/$7.50 transition), Miraflow's coding-focused launch explainer (Aerin Kim, Aug 16 2026 — DeepSWE methodology + FrontierCode + WebDev Arena + thinking_level migration; DeepSWE arXiv 49/65 reference; cognition FrontierCode write-up; WebDev Arena paper), VentureBeat's launch coverage, the Average findings (23 raters, top-10 mean: Tool 88.4 / Reasoning 89.4 / Context 96.2 / Multimodal 91.3 / Coding 88.4 / Cost 91.6 / Overall 90.9), and OpenCode Zen + Google AI Studio free-tier availability. Per-benchmark footnotes (harness, vintage) captured inline; Overall Score = half-up mean of 5 quality dimensions, Cost excluded.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
