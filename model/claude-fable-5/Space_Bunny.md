# Claude Fable 5 — findings by Space Bunny

- Source: Anthropic (`claude-fable-5`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-09 (Overall 91).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally-available **Mythos-class** model (a capability tier above Opus), released 2026-06-09 — the same underlying weights as the restricted Claude Mythos 5, shipped with the strongest cyber/biology safeguards Anthropic has applied, so cyber/biology requests fall back to Opus 4.8. Top use case: days-long asynchronous long-horizon agentic coding and knowledge work. Now a **legacy-line model**: Anthropic's own page badges it *Legacy* and steers users to Claude Fable 5.1.
- **Provider / access:** Anthropic Messages API (`claude-fable-5`); Amazon Bedrock (`anthropic.claude-fable-5`); **Google Cloud / Vertex `claude-fable-5`** (confirmed on the model page this pass); **Microsoft Foundry `claude-fable-5`** and **Claude Platform on AWS `claude-fable-5`** — both first-party-run, so Anthropic's 60-day retirement notice applies to them; Bedrock and Vertex set their own dates. Chat Completions-style Messages API. No OpenCode Zen ID; no Free tier.
- **Release / knowledge:** released 2026-06-09; access was suspended 2026-06-12 (US export controls) and restored 2026-07-01 (first pass). **Reliable knowledge cutoff Jan 2026; training data cutoff Jan 2026** — both re-confirmed on the official model page this pass, and unchanged from Fable 5.1's Jun 2026. Retirement **not sooner than 2027-06-09**.
- **IDs:** `claude-fable-5` (Claude API, Vertex, Foundry, Claude Platform on AWS), `anthropic.claude-fable-5` (Bedrock). `claude-fable-5` is a pinned snapshot, not a floating alias — the alias row on the models overview repeats the same ID.
- **Context window:** **1,000,000 tokens** (~555k words on the current tokenizer); **max output 128K tokens** synchronous. Both re-verified on the official model page and the models-overview comparison table this pass. (Note the overview's 300K-output batch beta header list does **not** include Fable 5 — only Opus 5.5/5, Sonnet 5.5/5, Haiku 5.5 and Opus 4.8/4.7/4.6.)
- **Modalities:** text and images in → text out. Adaptive thinking (always on, `high` default effort). Tool calls: yes. JSON mode: yes. No video, no audio, no non-text output.
- **Pricing (as of 2026-10-17) — unchanged and re-verified on the official model page:** **$10 / MTok input, $50 / MTok output**; 5m cache write $12.50, 1h cache write $20, **cache read $1.00 (10% of base input)**; Batch API 50% off. Artificial Analysis computes a blended **$7.70/1M** at 7:2:1 and **$8.75 per Intelligence Index task**. Paid only. Two live caveats: Fable 5 requires **30-day data retention** for safety monitoring by default; and the cache-read discount is the weak one — **Fable 5.1 reads at 2.5% of base input ($0.25) versus Fable 5's 10% ($1.00)**, so cached-prefix workloads are 4× cheaper on the successor at identical list price.
- **Architecture:** proprietary (closed weights). Parameter count not disclosed.

### Raw benchmarks found

> Vendor-reported rows are labelled **Anthropic**; independent rows name the measuring party. This pass changed no benchmark number — it changed what several of them *mean* (see conflicts), and added the rows marked new.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Anthropic system card); **80.5%** (Vals AI harness, independent).
- Terminal-Bench 2.1, Mythos 5 unrestricted: **88.0%** (Anthropic) — the starred row; Fable 5 lands closer to Opus 4.8 because cyber/biology prompts fall back to Opus 4.8.
- Terminal-Bench 3.0: **34.0%** (frontierbench.ai leaderboard) — unchanged, and the single biggest weakness in an otherwise frontier profile. **Terminal-Bench Hard: 62.9%** (AA).
- OSWorld-Verified **85%** (Anthropic); GDPval-AA **1747 Elo** on BenchLM's row, attributed to the Anthropic system card — the first pass recorded **1932 Elo** from the Anthropic launch post and 1747 from benchlm under a "different harness". See conflicts.
- τ²-bench **98.5%** (Artificial Analysis); AA Harvey LAB **93.6%**; AA EnterpriseOps-Gym **51.1%**; AA Agentic Index **51.0%**; AA-AnalystAgent **48.8%**; AA GDPval-AA normalized **55.5%**.
- ApprenticeBench **34%** (NeoCognition); **MazeBench 11%** (MazeBench AI leaderboard, ASCII mode with tools).
- **AA-IFBench 63.5%** (Artificial Analysis) — **new this pass.** Instruction following is a genuine soft spot for a frontier reasoning model, and no vendor row exists to cross-check it.
- Claw-Eval / ClawProBench, Toolathlon, MCP-Atlas, SWE Atlas Codebase QnA: **still no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond **94.1%** (Anthropic system card); **92.6%** (AA, independent); **93.2%** (Vals). Aggregators quote ~94.6%; the Anthropic figure is used.
- HLE **59.0%** no tools / **64.5%** with tools (Anthropic); **AA-HLE 55.5%** (independent, different harness).
- **FrontierMath v2: Tiers 1–3 87.018%, Tier 4 90.200%** (Epoch AI leaderboard) — **new this pass, and the strongest new evidence in this report.** On the hardest math tier this model scores 90.2% versus Qwen3.8 Max's 46.3%.
- AA Intelligence Index: **50** (Artificial Analysis, #20 of 217, measured in the Max-effort + Opus 4.8 fallback configuration). BenchLM lists 49.6% — the same measurement at different rounding. The Intelligence Index was re-based between passes (Terminal-Bench 2.1 → 4.0, AutomationBench-AA added), so 50 now and 50 before is a level coincidence, not proof of no change.
- AA-LCR v1.1 **82.3%**; MLCR-AA **64.4%**; CritPt **28.6%**; ARC-AGI-1 **98.50%**; ARC-AGI-2 **89.2%** (ARC Prize verified); MMLU-Pro **91.5%** (Vals).
- AA-Omniscience Index **43.3%**, Accuracy **65.4%**, **Hallucination Rate 63.6%** — unchanged and still the cap on this dimension.

Coding:

- SWE-bench Verified **95.0%** (Anthropic system card; four independent mirrors agree) — and now **SWE-bench (Vals) 95.0%** independently reproduces the same number, which is the strongest single coding data point in this comparison group.
- SWE-bench Pro **80.3%** (Anthropic).
- FrontierCode 1.1 **Diamond 29.3%** (Anthropic) and **Main 53.5%** (Cognition's own FrontierCode 1.1 leaderboard) — two different slices of the same benchmark; both retained rather than merged.
- FrontierSWE v2 **47.0%**; LiveCodeBench **89.8%** (Vals); AA Coding Index **76.5%**; AA-SciCode **61.0%**; cursorBench 3.1 **70.6%** / 3.2 **70.5%** (Cursor's own evals); **VulcanBench v3 89.5%** (VulcanBench technical report).
- Vibe Code Bench and DeepSWE: **no verified public score found** for Fable 5 (the 67.4% DeepSWE figure belongs to Fable 5.1 and is not merged here).

Long context:

- 1M verified on the official model page; AA-LCR **82.3%** is the only retrieval proxy. Still no MRCR/RULER/GraphWalks row at 512K+ for Fable 5 specifically (Fable 5.1's MRCR 83.1%/87.5% belongs to the successor and is kept separate).
- Anthropic's long-horizon evidence remains qualitative (50-million-line Ruby migration in one day; vision-only Pokémon FireRed play).

Multimodal:

- Blueprint-Bench 2 **38.6%** (Anthropic); OfficeQA Pro **57.9%** (Anthropic); **Design Arena Website Elo 1297** (OpenRouter model benchmarks) — new this pass.
- No MMMU-Pro row for Fable 5 was found on any source checked this pass; text+image in / text out is confirmed on the official capabilities table. No video, audio, or non-text output.

Speed / cost efficiency inputs:

- **Output speed 70.6 tok/s** (Artificial Analysis, #117/188 in price tier) — revised **up** from the first pass's 57–68 tok/s range. **TTFT 94.17 s** (median tier 3.74 s) and **time to first answer token** dominated by adaptive thinking; 130M output tokens per index run; **$8.75 per Intelligence Index task**, $11,161 to run the full index; blended $7.70/1M at 7:2:1.

### Normalized scores (1–100)

- **Tool use: 97/100.** Unchanged. Terminal-Bench 2.1 at 84.3% (Vals 80.5%), OSWorld-Verified 85%, τ²-bench 98.5%, GDPval-AA 1747–1932 Elo, Harvey LAB 93.6% remain in or above the frontier band, and nothing found this pass contradicts them. Two caps are unchanged in kind and one is new: **Terminal-Bench 3.0 at 34.0%**, MazeBench 11% and ApprenticeBench 34% show the frontier-agent tail is short; **AA-IFBench at 63.5%** is a newly visible instruction-following soft spot; and the Opus 4.8 fallback on cyber/biology prompts means real-world agentic behaviour sits below the Mythos 5 headline. No Claw-Eval/Toolathon/MCP-Atlas numbers exist to widen the base.
- **Reasoning: 97/100.** Unchanged, but the supporting evidence is stronger. **FrontierMath v2 Tier 4 at 90.2% and Tiers 1–3 at 87.0%** (Epoch AI) is the new anchor: it is the only model in this comparison group that is strong on the hardest math tier, and it makes HLE 59.0%/64.5%, ARC-AGI-2 89.2%, GPQA 94.1% and MLCR 64.4% read as a coherent frontier profile rather than a scatter. It stays at 97, not higher, because **CritPt is only 28.6%** and **the Omniscience Hallucination Rate is 63.6%** — Fable 5 omits facts often despite reasoning well — and because **AA-IFBench 63.5%** cuts against the instruction-following claim.
- **Context window: 96/100.** Unchanged. 1M tokens and 128K max output re-verified on the official model page and the models-overview table this pass. It is not 100 because long-context *retrieval* evidence is still one number: AA-LCR 82.3%, with no MRCR/RULER at 512K+ for this model, and no batch 300K-output beta on this model line.
- **Multimodal: 68/100.** Unchanged. Text and image in, text out, verified on the official capabilities table; Blueprint-Bench 2 38.6% and OfficeQA Pro 57.9% are grounded-document results, and vision-only agentic play is real. It cannot go higher: **no video, PDF-as-input or audio input, no non-text output**, and no MMMU-Pro row exists for this ID to corroborate vision reasoning against peers.
- **Coding: 97/100.** Unchanged. SWE-bench Verified 95.0% now has independent corroboration from Vals at the same 95.0%, alongside SWE-bench Pro 80.3%, LiveCodeBench 89.8% (Vals), VulcanBench v3 89.5%, AA Coding Index 76.5% and AA-SciCode 61.0%. It stays below the very top of the band for the same reason as the first pass: on the hardest code-quality evals — FrontierCode 1.1 Diamond 29.3% (Main 53.5%) and FrontierSWE v2 47.0% — there is clear headroom, and no Vibe Code Bench or DeepSWE row exists.
- **Cost efficiency: 30/100.** Unchanged. **$10 in / $50 out with a $1.00 cache read**, re-confirmed on the official model page, is still the most expensive generally-available model in this comparison group, and the measured **$8.75 per Intelligence Index task** with a **94-second time-to-first-token** makes interactive use impractical. Batch API at 50% off and prompt caching soften it only slightly. The comparison sharpened rather than changed: **Claude Opus 5.5 is now $4/$20** and Anthropic's own models-overview recommends Opus 5.5 "for most workloads", while Fable 5.1 holds the same $10/$50 list but reads cache at 2.5% instead of 10%. Excluded from Overall regardless.
- **Overall Score: 91/100.** (97 + 97 + 96 + 68 + 97) / 5 = 455 / 5 = 91.0, rounded half-up to **91**, cost excluded. Unchanged from the first pass: the new FrontierMath v2 evidence is the best addition this model received in the window, and it is offset by the newly visible AA-IFBench 63.5% and by an unchanged 63.6% hallucination rate. Best fit: highest-stakes long-horizon agentic coding and deep knowledge-work runs where budget is secondary to capability — but migrate. **Both successors are now live: Claude Fable 5.1** (same $10/$50, Jun 2026 knowledge cutoff, 4× cheaper cache reads, stronger on every published benchmark) and **Claude Opus 5.5** ($4/$20 — 2.5× cheaper on input and 2.5× on output, which Anthropic now recommends for most workloads). BenchLM's own composite rates Opus 5.5 at 86.56 vs Fable 5's 81.27.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: public internet research. The **search API was rate-limiting this session (HTTP 429 on six attempts)**, so the work was done through **5 direct page fetches of primary and first-party sources** plus the BenchLM/BenchmarkList/Epoch-AI rows those pages link. No claim below rests on an unopened search snippet.
- **Primary sources fetched this pass:** [Anthropic — models overview (pricing, IDs, cutoffs, retirement for the whole lineup)](https://platform.claude.com/docs/en/models/overview) · [Anthropic — Claude Fable 5 model page (status, specs, pricing, availability)](https://platform.claude.com/docs/en/models/fable-5/overview) · [Anthropic — model deprecations (lifecycle table)](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- **New independent sources fetched this pass:** [BenchLM — Claude Fable 5 (upd. 2026-10-17, 45 sourced rows)](https://benchlm.ai/models/claude-fable-5) · [Artificial Analysis — Claude Fable 5 (Max, Opus 4.8 fallback)](https://artificialanalysis.ai/models/claude-fable-5)
- Key sources carried from the first pass: Anthropic system card (SWE-bench Verified 95.0%, SWE-bench Pro 80.3%, Terminal-Bench 2.1 84.3%, OSWorld 85%, GPQA 94.1%, HLE 59.0/64.5%, FrontierCode Diamond 29.3%), Artificial Analysis evaluation leaderboards, ARC Prize verified results, Vals AI, Cursor evals, VulcanBench v3, NeoCognition ApprenticeBench.
- **Lifecycle conflict recorded, not smoothed:** three sources disagree on Fable 5's status. (1) Anthropic's model page badges it **Legacy** and its Availability table says "Active (legacy)". (2) Anthropic's own deprecations table lists `claude-fable-5` as **Active**, not deprecated, retirement not sooner than 2027-06-09. (3) Artificial Analysis labels it **deprecated** and points at Fable 5.1. Prefer Anthropic's own lifecycle table for the contractual position (Active, ≥2027-06-09 horizon) and read AA's "deprecated" as a tracker recommendation, not a vendor status. **What changed since the first pass is the recommendation, not the contract: Anthropic's models overview now says "use Claude Opus 5.5 for most workloads"**, with Fable 5.1 reserved for demanding long-horizon work.
- Other conflicts retained: GDPval-AA **1932 Elo** (Anthropic launch post) vs **1747** (BenchLM row, which now attributes 1747 to the system card rather than a third-party harness) — both kept, neither averaged; FrontierCode 1.1 **Diamond 29.3%** vs **Main 53.5%** (different slices, not a discrepancy); AA Intelligence Index 50 vs BenchLM 49.6; output speed revised up to 70.6 tok/s from 57–68.
- **Still unmeasured for this exact ID:** Vibe Code Bench, DeepSWE, Claw-Eval/Toolathlon/MCP-Atlas, MMMU-Pro, any MRCR/RULER retrieval at 512K+, and no independent run of the FrontierMath or FrontierCode rows.
- **Re-run when:** Anthropic sets an actual deprecation date for `claude-fable-5` (the deprecations table currently carries "N/A") · Fable 5.1 or Opus 5.5 publishes an Fable-5-comparable row on the harder evals where Fable 5 is weak (Terminal-Bench 3.0, FrontierCode Diamond, FrontierSWE v2, CritPt, hallucination rate) · Anthropic changes Fable 5's cache-read rate from 10% toward Fable 5.1's 2.5% · a 300K-output batch beta header is extended to the Fable line · BenchLM or AA publishes a Terminal-Bench 4.0 row for this ID.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1.md`, using the same headings.