# Claude Haiku 5.5 — findings by Space Bunny

- Source: Anthropic (`claude-haiku-5-5`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-09 (Overall 83).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's cheapest, fastest and most capable small model, released **2026-10-07** — the first Haiku-class model with an **adjustable effort parameter** (low/medium/high/xhigh/max). Built for high-volume, cost-sensitive work: classification, routing, extraction, compaction, summarization, subagent roles and browser/computer use. It is Anthropic's fastest model to date and, per Anthropic, costs ~75% less to run than Haiku 4.5 on average (90% cheaper for prompts ≤100K tokens). Second pass adds no successor and no deprecation: the official deprecation table still lists `claude-haiku-5-5` as **Active, retirement not sooner than 2027-10-07**.
- **Provider / access:** Claude Platform / Messages API (`claude-haiku-5-5`); Amazon Bedrock (`anthropic.claude-haiku-5-5`, geo + global inference profiles), Google Cloud Vertex AI, Microsoft Foundry, LiteLLM gateway; OpenRouter (`anthropic/claude-haiku-5.5`). Computer use and browser use are beta in the Python/TypeScript SDKs. No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-10-07**. Knowledge cutoff **June 2026** (Anthropic system card + Bedrock card agree). Retirement not sooner than 2027-10-07 (official table); Bedrock adds a 6-month legacy period.
- **IDs:** `claude-haiku-5-5` (Claude API), `anthropic.claude-haiku-5-5` (Bedrock)
- **Context window:** **1,000,000 tokens**; max synchronous output **128K tokens**; up to **300K output tokens** on the Message Batches API via the `output-300k-2026-03-24` beta header. Confirmed this pass on the Anthropic model reference, the Bedrock model card (1M / 128K) and independently by Vals AI (1M / 128K).
- **Modalities:** Text, **image** and **file** in → text out. Vals AI's capability probe independently confirms text/image/file input supported and **video input NOT supported** — so the input surface is broader than "text+image" (it takes documents) but strictly narrower than K2.5-style video. Adaptive thinking (on by default, `medium` default effort, steerable via `effort`; Bedrock documents that effort is **capped at `high` when thinking is disabled**). Tool calls: yes; computer use and browser use: beta. JSON mode: yes. **Caveat:** the newer Claude 4.7-era tokenizer makes the same text cost ~**30% more tokens** than on Haiku 4.5.
- **Pricing (as of 2026-10-17):** Unchanged from the first pass and this is **list price, not a promotion** — there is no published discount and therefore no published end date. Split at a 100K prompt boundary (~90% of Haiku traffic falls in the lower tier): ≤100K prompts — **$0.10 in / $0.50 out**, cache write $0.125, cache read $0.01; >100K prompts — **$0.50 in / $2.50 out**, cache write $0.625, cache read $0.05. Batch API 50% off. No Free tier on the API.
- **Architecture:** proprietary (closed weights). Weights preserved for the lifetime of the company under Anthropic's November 2025 deprecation-and-preservation commitment.

### Raw benchmarks found

> Anthropic figures come from the official launch page performance table (2026-10-07) and the system card, evaluated at the **default `medium` effort** unless the row says otherwise. Independent figures are from Artificial Analysis, Vals AI and benchlm.ai. Vals ran the full suite on the native Anthropic API at **compute effort `max`**, temperature 1, 128K max output, with **no refusal fallback** (content-filter refusals scored as failures).

Agent / tool use:

- GDPval-AA v2.1: **1620 Elo** (Anthropic) / **1618 Elo** (Artificial Analysis, own run) — vs Haiku 4.5 735, GPT-6 Luna 1437, Sonnet 5.5 1840. Vendor and independent now agree within noise.
- AA-Briefcase v1.1: **1578 Elo at Max effort**, **1443 Elo at High effort** (Artificial Analysis; Anthropic quotes 1578) — vs Haiku 4.5 614, Sonnet 5.5 1824
- OSWorld 2.1 (offline subset): **72.4%** (Anthropic) — vs Haiku 4.5 15.7%, GPT-6 Luna 48.9%, Sonnet 5.5 83.9%. No independent rerun published.
- AA Harvey LAB v1.0: **89.9%** (Artificial Analysis, criterion-pass)
- AA AutomationBench: **35%** (Artificial Analysis) — **explicitly flagged by AA as understated**: during pre-release testing a safety-refusal issue caused the model to over-refuse; Anthropic is fixing it and AA says it will re-run and expects the score to rise. Treat 35% as a floor, not a measurement.
- NEW — Vals vertical/agentic suite at max effort: Finance Agent v2 **54.14%** (#27/79), Tax Agent Bench **31.92%** (#20/70), Public Benefits Bench v1.1 **63.19%** (#25/50), EMB **59.02%** (#36/75), Legal Research Bench **43.27%** (#22/79), MedCode **51.54%** (#15/107), MedScribe **89.54%** (#6/109), ProofBench v1.1 **89.00%** (#10/50), Code Migration **44.57%** (#21/78), BioMysteryBench **70.37%** (#12/27)
- NEW — Vals weaknesses: ProgramBench **2.50%** (#8/64), SRE Bench **5.72%** (#16/35), Harvey's Legal Agent Benchmark **1.25%** (#58/80), Terminal-Bench-Science **10.00%** (#17/41), MysteryMechanism **35.13%** (#10/27)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench: no verified public score found (ValS ran Terminal-Bench **4.0**, not 2.1)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- **Customer-reported (Anthropic launch, production evals):** Asana — >30% lower task-completion latency, up to 2.5× faster inference per agent turn; HubSpot simulated-portal CRM suite **92.8%**; AlphaSense "Ask in Document" (~8M calls/week) **0.84 vs 0.76** over 400 queries; Box — +11 points at ~half the latency. Vendor-reported, customer-supplied, not independently reproduced.

Reasoning / knowledge:

- Humanity's Last Exam: **45.9% no tools / 57.4% with tools** (Anthropic); Artificial Analysis's own harness scores **44% at Max / 37% at High effort**
- NEW — AA effort sweep: Intelligence Index **43 (Max) vs 38 (High)**; Terminal-Bench 4.0 **33% (Max) vs 22% (High)**; SciCode **55% vs 49%**; GDP.pdf **21% vs 17%**; CritPt **19% at both**; AutomationBench 35% vs 34%. The step from `xhigh` to `max` buys ~2 Index points for ~1.8× the tokens — `high` is the efficient operating point.
- Artificial Analysis Intelligence Index: **43** (v4.3.2, max effort, #4-unit rating) — up 26 points year-over-year from Haiku 4.5's 15–17
- NEW — Vals Index: **54.44% ±1.41** (#18/49) at **$3.00 per test**, 47m24s latency, **0.00% fallback rate, 0.22% refusal rate** — 0.51 points behind Gemini 3.8 Flash (54.83%). Vals Science Index **38.50% ±1.67** (#11/21). Note: Vals' own header block separately prints "45.78% ±3.42" against the SAGE row; the two are different benchmarks, not a contradiction, but do not conflate them.
- NEW — Vals CyberBench v1.1 **75.48% ±5.21** (#6/47), ahead of Sonnet 5.5 (59.58%)
- NEW — Vals IOI **47.28% ±10.72** (#29/44)
- AA-LCR v1.1: **82.7%** (Artificial Analysis long-context reasoning leaderboard)
- CritPt: **19%** (Artificial Analysis)
- AA-Omniscience Index: **10.7%** (Artificial Analysis)
- GDP.pdf (professional document reasoning, all-pass): **21%** (Artificial Analysis; vs MiMo-V2.6-Pro 19.2%, GPT-6 Astra 32.2%)
- GPQA Diamond / MMLU-Pro: **still no verified public score found** for Haiku 5.5 on any harness — the largest evidence gap in the reasoning column.

Coding:

- Terminal-Bench 4.0 — **three harness values, all retained, not averaged**: **39.2%** (Anthropic, pass@1, default effort), **33%** (Artificial Analysis, max effort), **36.36% ±2.31** (Vals, max effort, #15/49). The spread is scaffold + effort, not model disagreement; I prefer Vals' 36.36% because it carries an error bar and a rank.
- NEW — **Vibe Code Bench v1.1: 90.44% ±1.73 (#3 of 113)** (Vals, independent) — behind only Gemini 4 Argon (91.91%) and Sonnet 5.5 (92.39%), and a jump from Haiku 4.5 (Thinking)'s 11.39%. Counterintuitive but reproducible: Vibe Code Bench v1.1 is a *quality-weighted* rubric and the complementary "Vibe Code Bench 1-100" (raw pass rate) is only **20.41%** (#10/25). Both numbers are real and measure different things.
- NEW — **SWE-bench Multimodal: 43.96% ±2.27 (#9 of 20)** (Vals, independent) — the first real coding-adjacent SWE-family score published for this model
- FrontierCode 1.1 (Main): **46.4%** (Anthropic system card) — above GPT-6 Luna 42.4%, below Sonnet 5.5 52.1% (xhigh). Cognition's 66.2 for Devin Fusion *with Haiku 5.5 as sidekick* is a system result, not a single-model number.
- AA-SciCode: **55%** (Artificial Analysis)
- Bug Hunt Bench: **21.5 fixes** (public data)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE: no verified public score found for this model

Multimodal / grounded:

- Chartography (no tools): **46.4%** (Anthropic) — vs Haiku 4.5 6.4%, GPT-6 Luna 29.1%, Sonnet 5.5 61.6%
- GDP.pdf: **21%** (Artificial Analysis)
- SWE-bench Multimodal: **43.96%** (Vals, #9/20)
- Vals capability probe: **video input not supported**; file (PDF/document) input supported, max image payload limited at some hosts (Bedrock's equivalent Kimi card caps at 3 MB — Moonshot's, not Anthropic's; no Anthropic payload cap found).
- MMMU-Pro / OfficeQA Pro: no verified public score found for this model

Long context:

- 1M-token context verified three ways this pass (Anthropic reference page, Bedrock model card, Vals). **AA-LCR v1.1 82.7%** remains the only long-context retrieval measurement, and it runs at ~100K-token inputs. No MRCR / RULER / GraphWalks at 512K+ have been published by anyone. The 300K batch-output beta extends *output*, not the input window.

Speed / cost efficiency inputs:

- **235–237 tokens/s at Max effort**, 157 tokens/s at High (Artificial Analysis) — Anthropic calls it the fastest model it has shipped
- Independent measurement (ComputingForGeeks, 2026-10-08): low effort / thinking off → 0.59s TTFT, **183 tokens/s**; medium (default) → 2.66s to first visible word, 1,534 tokens including thinking, 8.4s total
- **NEW — verbosity penalty:** AA ranks it **#66 of 66** for verbosity; it burns ~**162k output tokens per Intelligence Index task at Max** (~3× GPT-6 Luna's ~50k) and 440M tokens across the whole Index run. AA's current pages give **$0.21 per Intelligence Index task** at Max and $0.08/1M blended (7:2:1 cache:input:output). *This supersedes the first pass's "$0.02 cost per Intelligence Index task (Low effort)" — that figure is not reproducible on AA's current model pages and should be treated as withdrawn.*
- Anthropic: ~75% average cost reduction vs Haiku 4.5; Sonnet 5.5 cache reads halved to $0.10/MTok at the same launch

Safety / alignment:

- Anthropic reports major alignment improvements over Haiku 4.5: far fewer misaligned behaviors, lower willingness to cooperate with misuse. Cybersecurity safeguards are **more restrictive than Haiku 4.5's** but less restrictive than Sonnet 5.5's — they block penetration testing and attacker-likely techniques while permitting a wider range of defensive work than Sonnet 5.5 allows. Biology safeguards match Sonnet 5 / 5.5 / Opus 5.
- NEW (system card): **BioMysteryBench has been deprecated** from Anthropic's own Life Sciences panel; Vals independently still scores Haiku 5.5 on it (70.37%) — the vendor dropping an eval is not evidence the capability is gone, but it does mean Anthropic will stop publishing it.
- The AutomationBench over-refusal issue (above) is a live, vendor-acknowledged artifact of those safeguards.

### Normalized scores (1–100)

- **Tool use: 90/100.** Unchanged. OSWorld 2.1 at 72.4%, GDPval-AA 1620 (Anthropic) / 1618 (AA), AA-Briefcase 1578 at Max, Harvey LAB 89.9% and the Vals vertical suite (Finance Agent 54.14%, Public Benefits 63.19%, MedScribe 89.54%, ProofBench 89.00%) all sit in or near the frontier band. Held there rather than pushed higher by AA's own admission that AutomationBench 35% is depressed by a fix-in-progress refusal bug (so it should rise), and capped by ProgramBench 2.50%, SRE Bench 5.72% and the total absence of Terminal-Bench 2.1, Tau3, MCP-Atlas and Claw-Eval numbers.
- **Reasoning: 83/100.** Raised from 82. The first pass rested on AA alone; this pass adds a second, independent, differently-scoped index — Vals Index **54.44% (#18/49)** at $3.00/test, level with Gemini 3.8 Flash — plus Vals Science Index 38.50%, CyberBench 75.48% (#6/47) and IOI 47.28%, on top of the unchanged HLE 44%–57.4%, AA-LCR 82.7% and AA Index 43 (Max). The cap is unchanged in kind: no GPQA Diamond or MMLU-Pro exists for this model on any harness, CritPt is 19%, Omniscience 10.7%, and AA ranks it dead last of 66 on verbosity, so a "43 Index" score costs ~3× the tokens of a comparable one.
- **Context window: 96/100.** Unchanged. 1M tokens re-verified this pass on the Anthropic reference, the Bedrock card and Vals independently. Still not 100: the only published retrieval evidence is AA-LCR at ~100K inputs, with no MRCR/RULER at 512K+ from any party.
- **Multimodal: 72/100.** Raised from 68. Vals' capability probe this pass establishes **file (document) input as supported alongside text and image**, and adds an independent multimodal-grounded coding number (SWE-bench Multimodal 43.96%, #9/20) alongside GDP.pdf 21% and Anthropic's Chartography 46.4%. Capped because Vals explicitly records **video input as not supported**, there is no audio path, and output is text-only.
- **Coding: 82/100.** Raised from 78 on one decisive piece of independent evidence: **Vals Vibe Code Bench v1.1 90.44% ±1.73, #3 of 113** — top-three in the entire field and a jump from Haiku 4.5's 11.39% — backed by AA SciCode 55% and Anthropic's FrontierCode 1.1 46.4%. Deliberately not scored higher: the *raw pass-rate* companion benchmark (Vibe Code Bench 1-100) is only 20.41%, Terminal-Bench 4.0 lands at 33–39.2% across three harnesses, and ProgramBench (2.50%), SRE Bench (5.72%) and Terminal-Bench-Science (10.00%) are all weak.
- **Cost efficiency: 98/100.** Unchanged. $0.10 in / $0.50 out with $0.01 cache reads for prompts ≤100K is the cheapest frontier-family Claude by a wide margin, with a 50% Batch discount and ~235 tokens/s at Max. Three caveats keep it out of 100: the >100K tier jumps 5× to $0.50/$2.50, there is no Free API tier, and the real cost per task is higher than the sticker rate implies — AA measures $0.21/Index task at Max because the model is #66-of-66 verbose, so `high` effort (157 tok/s, Index 38) is roughly the same work at a fraction of the tokens. No discounted/promo price exists for this model, so there is no expiry to track.
- **Overall Score: 85/100.** (Tool 90 + Reasoning 83 + Context 96 + Multimodal 72 + Coding 82) / 5 = **84.6 → 85**; Cost efficiency 98 is scored but excluded per `RULES.md`. Up one point from 83 on second-pass independent evidence. Best fit: high-volume subagent, routing and compaction workloads — classification, extraction, summarization, live support, browser automation — where near-frontier agentic quality at $0.10/$0.50 and 180–240 tok/s matters more than frontier reasoning depth. Run it at `effort: high` (Index 38, 157 tok/s) rather than `max` (Index 43, 237 tok/s, 1.8× the tokens) unless a task genuinely needs the last 5 points.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass; first pass 2026-10-09)
- Searches run this pass: **6** (1 deep + 5 targeted).
- NEW sources used this pass (none cited in the first pass):
  - https://www.vals.ai/models/anthropic_claude-haiku-5-5 — full independent suite at max effort (Vals Index 54.44% #18/49, Vibe Code Bench v1.1 90.44% #3/113, SWE-bench Multimodal 43.96%, Terminal-Bench 4.0 36.36%, CyberBench 75.48%, capability probe: video not supported / file supported)
  - https://platform.claude.com/docs/en/about-claude/model-deprecations — **official** deprecation table: `claude-haiku-5-5` Active, not sooner than 2027-10-07; preferred over eosl.date and llmlatency.dev aggregator lifecycle labels
  - https://artificialanalysis.ai/articles/claude-haiku-5-5 — AA launch analysis: effort sweep, verbosity, AutomationBench refusal-bug disclosure
  - https://artificialanalysis.ai/models/comparisons/claude-haiku-5-5-high-vs-claude-haiku-5-5 — High vs Max per-benchmark numbers and speed (157.4 vs 236.7 tok/s)
  - https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-haiku-5-5.html — effort capped at high when thinking disabled; 6-month legacy period; 1M/128K
  - https://docs.litellm.ai/blog/claude-haiku-5-5 — day-0 gateway pricing confirmation (corroborates tiered $0.10/$0.50 → $0.50/$2.50)
- Method: public internet research. Cross-checked the official Anthropic launch page, the Haiku 5.5 system card, Anthropic's official model reference and deprecation table, the Bedrock model card, Artificial Analysis (launch article + model/comparison pages), Vals AI's independent suite, and benchlm.ai. Kept all three Terminal-Bench 4.0 harness values (39.2% Anthropic / 33% AA / 36.36% Vals) separate rather than averaging. Corrected one first-pass error: the "$0.02 AA cost per Intelligence Index task" figure is not reproducible on AA's current pages and has been withdrawn in favour of $0.21 at Max effort. Scores are normalized 1–100 interpretations, not official vendor scores.
- Conflicts left standing: Terminal-Bench 4.0 across three harnesses (39.2 / 33 / 36.36); AA Index 43 vs Vals Index 54.44 (different suites — I credit both); AA AutomationBench 35% flagged by AA itself as depressed by a refusal bug pending re-run; Vals' Vibe Code Bench v1.1 90.44% vs its companion 1-100 pass rate 20.41% (rubric-weighted vs raw — both real).
- **Re-run when:** (1) AA publishes its promised AutomationBench re-run after the Anthropic refusal fix; (2) any GPQA Diamond / MMLU-Pro / SWE-bench Verified / Terminal-Bench 2.1 number appears for this model; (3) Anthropic changes the tiered pricing split or adds a promo with an end date; (4) the official deprecation table moves `claude-haiku-5-5` off Active; (5) a successor Haiku-class model ships.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.6.md`, using the same headings.