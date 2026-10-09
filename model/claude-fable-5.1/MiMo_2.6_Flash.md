# Claude Fable 5.1 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Fable-line capability ceiling (released 2026-09-01) for the hardest reasoning, long-horizon agentic coding, and knowledge work — a step up from Fable 5 with a 75% cheaper cache-read price. Same underlying model as the restricted Claude Mythos 5.1 (different safeguard configuration; Mythos requires Cyber/Life-Sciences Verification Program access) — Mythos is the trusted-access sibling, not a separate model entry.
- **Provider / access:** Claude API (`claude-fable-5-1`), Amazon Bedrock, Google Cloud, Microsoft Foundry/Azure, Claude Platform on AWS; Claude Pro/Max/Team/Enterprise apps. Messages API (Anthropic format).
- **Release / knowledge:** released 2026-09-01; reliable knowledge cutoff June 2026 (training-data cutoff also Jun 2026).
- **IDs:** `anthropic/claude-fable-5-1` (gateway routes) / `claude-fable-5-1` (native).
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (300K batch beta on the platform).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking always on; efforts low/medium/high/xhigh/max; default `high` in Claude Code, `medium` in Cowork/claude.ai); tool calls yes (computer use, code execution, web tools).
- **Pricing (as of 2026-10-07):** $10 in / $50 out per 1M (unchanged from Fable 5); **cache read $0.25/M (75% cut → ~25% lower typical workload cost, up to ~45% on agentic workloads)**; 5m cache write $12.50, 1h $20; Batch API 50% off ($5/$25). Paid, no free tier.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic, max effort; Mythos 5.1 sibling 60.9%) — AA-independent runs put other models at 57–59%, so this is board-competitive. Terminal-Bench 2.1: no verified public score found for Fable 5.1.
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic, ±3.5–4.5 pts; vs Fable 5 24.7%).
- GDPval-AA v2: **1853** Elo (Anthropic; vs Opus 5 1824, GPT-5.6 Sol 1711).
- OSWorld 2.0 (computer use, Aug 2026 task release): **77.9% partial / 41.7% strict** (Anthropic).
- AutomationBench: **31.4%** (Anthropic/Zapier-style run; Fable 5 17.1%). CursorBench 3.2.0: **73.4%** (Anthropic; new reported high).
- Tau3/Tau2 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE: **60.9%** no tools, **65.0%** with tools (Anthropic).
- GPQA Diamond: **92.6%** (Data Science Dojo summary of Anthropic figures) / 93.7% (cross-vendor comparison table) — third-party default-effort harnesses report much lower (72–75%), so the number is setting-dependent.
- Artificial Analysis Intelligence Index: **66** at max effort (AA launch analysis; Opus 5 63, Fable 5 62) — one tracker lists 53.1 on a different (v4.3 fallback) config.
- ProofBench v1.1: **100%** formal proofs. ARC-AGI-2/3, LCR, CritPt, Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **95.0%** (Anthropic, per Data Science Dojo compilation). SWE-bench Pro: **80.0%**.
- LiveCodeBench: **90.52%** (rank 1 at launch). DeepSWE v1.1: **67.4%** (OpenAI's cross-vendor launch table).
- CursorBench 3.2.0 73.4% as above; SciCode / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR / RULER / ProgramBench retrieval number found — "no long-context retrieval reported" beyond the 1M window spec.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA v2 1853 clears the 1750+ frontier ref, TB4.0 55.8% and TB-Science 52.6% are field-leading, OSWorld 77.9% partial and CursorBench 73.4% are top-tier; capped below 94 by AutomationBench 31.4% (mid) and no TB2.1/Tau3/Claw-Eval row.
- **Reasoning: 94/100.** HLE 60.9 no-tools far above the 40% ref, AA Index 66 above the 60+ ref, GPQA 92.6–93.7 above the 90% ref — three of four frontier refs cleared; no MRCR/LCR number holds it below 95.
- **Context window: 95/100.** 1M window at the ≥1M tier floor; no needle-retrieval result published to justify more.
- **Multimodal: 68/100.** Text + image in, text out = the 60–70 band; no video/audio/PDF input, no non-text output.
- **Coding: 93/100.** SWE-bench Verified 95.0%, SWE-bench Pro 80.0%, LiveCodeBench 90.52% (rank 1), TB4.0 55.8%, ProofBench 100% are all frontier-grade; capped at 93 by DeepSWE 67.4% (below the 74% ref) and no SciCode/Vibe rows.
- **Cost efficiency: 36/100.** Headline $10/$50 is the methodology's 30 anchor, but the $0.25 cache reads (2.5% of input, 4× cheaper than GPT-6 Astra's $1.00) and 50% batch discount cut agentic cost ~25–45% — worth +6 over the raw anchor, still an expensive model.
- **Overall Score: 88/100.** (91+94+95+68+93)/5 = 88.2 → 88 — Anthropic's top general-purpose reasoning/coding ceiling for the hardest long-horizon work, best when cache-heavy agent loops amortize the $10/$50 rate.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement + platform docs, Benchgen, Data Science Dojo, EyesTech, ModelRegistry, cross-vendor launch tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Fable 5.1 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-fable-5-1`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's most capable generally available model (released 2026-09-01), successor to Fable 5, aimed at long-running agentic coding, multistep research, and document/spreadsheet/slide work. Restricted twin: Claude Mythos 5.1 (Project Glasswing only).
- **Provider / access:** Claude API `claude-fable-5-1` (Messages API); also Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude apps. Chat Completions-compatible via Anthropic endpoints.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-fable-5-1` (Anthropic); no OpenCode Zen Free ID identified — scored on paid pricing.
- **Context window:** 1M tokens (default and max); 128K max output; tokenizer introduced with Opus 4.7.
- **Modalities:** text + image in; text out; adaptive thinking always on (effort low/medium/high); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-06):** $10 in / $50 out per 1M; cache read $0.25 (75% cut vs Fable 5's $1.00); 5m cache write $12.50; batch $5/$25 — re-confirmed by The Model Gap (platform docs checked 2026-09-02–09-29) and AA leaderboard 2026-10-06. Paid only — no free tier (Pro/Max/Team/Enterprise chat plans included; Free plan not).
- **Architecture:** proprietary (closed weights; same underlying weights as Mythos 5.1 with different safeguards).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic; Mythos 5.1 60.9%)
- Terminal-Bench 2.1 (independent): **91.4%** (Artificial Analysis) / **85.02%** (Vals AI; falls to **79.03%** once refusal→Opus fallback answers are recounted as failures) / **none yet** from tbench.ai's canonical board — three numbers for the identical model (The Model Gap, 2026-10-06)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic; public leaderboard ±3.5–4.5 pts)
- GDPval-AA v2: **1853** (Anthropic; vs Opus 5 1824)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic, Aug 2026 task release; safeguards zeroed some tasks)
- AutomationBench: **31.4%** (Anthropic)
- CursorBench 3.2.0: **73.4%** (Anthropic)
- Tau3-Banking: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **60.9% no tools / 65.0% with tools** (Anthropic); independent no-tools head-to-heads (The Model Gap, 2026-10-06): −2.3 vs Claude Opus 5.5 (only model ahead), +4.1 vs Sonnet 5.5, +4.4 vs GPT-6 Astra, +6.2 vs GPT-6.1 Sol, +10.4 vs Opus 4.8, +17.8 vs Sonnet 5 — 2nd of the tracked field on that harness
- GPQA Diamond: **93.7%** (reported in OpenAI comparison table citing Anthropic runs)
- FrontierMath Tier 4 v2: **87.8** (Epoch AI, max)
- FrontierMath Tiers 1–3 v2: **90.2** (Epoch AI)
- SimpleQA Verified: **70.8** (Epoch AI)
- LiveBench: **83.8** (max, 23 runs)
- Artificial Analysis Intelligence Index: **53** (AA v4.3.2 model page, 2026-09-28 — #5/216 at max effort; launch-era 65.7/66 superseded, see Fresh-source note; AA leaderboard FAQ 2026-10-06 re-confirms 53, 5th of 198 tracked models); llm-stats composite **53.8, rank 7 of 400** (2026-10-06)
- OTIS Mock AIME 2024–2025: **100.0** (Epoch AI)

Coding:

- DeepSWE v1.1: **67.4%** (OpenAI comparison table citing Anthropic)
- MirrorCode: **73.3** (Epoch AI, high)
- SWE-bench Verified: no verified public score found for 5.1 specifically (The Model Gap's 2026-09-02 board check: SWE-V, DeepSWE, Toolathlon-Verified, Agents' Last Exam and HMMT Feb 2026 had not added the model; re-checked 2026-10-06 — still absent)
- LiveCodeBench: no verified public score found for 5.1 specifically (LiveBench composite 83.8 covers the LiveBench board only)

Long context:

- 1M window documented; no MRCR/RULER published row for Fable 5.1 — long-context retrieval: no verified public score found.

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 53** (#5/216, v4.3.2) contradicts the launch-era 65.7/66 originally cited (AA rescale/index vintage) — scores unchanged (index is one input among several; full re-derivation not part of this refresh).

### Normalized scores (1–100)

- **Tool use: 97/100.** TB4.0 55.8%, TB-Science 52.6%, GDPval 1853, OSWorld 77.9 partial, AutomationBench 31.4%; capped slightly by safeguard-zeroed tasks and missing Tau3/Claw rows.
- **Reasoning: 97/100.** HLE 60.9/65.0, FrontierMath T4 87.8, AA Index ~66 (field-leading), SimpleQA 70.8; capped just below 100 by GPQA 93.7 not fully saturated and no CritPt/LCR rows.
- **Context window: 95/100.** 1M window confirmed; no measured ≥98% retrieval at 512K+ published for this model, so 95 not 100.
- **Multimodal: 65/100.** Text + image in, text out (strong chart/filing vision work claimed); no video/audio/non-text out → 60–70 band.
- **Coding: 95/100.** TB4.0 55.8% (frontier), TB-Science 52.6%, DeepSWE 67.4%, MirrorCode 73.3; capped by DeepSWE below the 74%+ top tier and missing SWE-bench/LCB rows for 5.1.
- **Cost efficiency: 30/100.** $10/$50 list maps to the ~$10/$50 ≈ 30 anchor; cache-read cut to $0.25 softens agentic bills ~25–45% but list price stays top-tier.
- **Overall Score: 90/100.** Mean of five quality dims (97+97+95+65+95)/5 = 89.8 → 90. Best-fit: premium long-horizon agentic coding and hard reasoning when budget allows; prefer Opus 5 or a Flash-class model for cost-sensitive work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic platform/announcement, Epoch AI, Better Stack, Capital & Compute, LLM Stats, modelbenchmark.io); re-run 2026-10-06 (user-approved enrichment): The Model Gap independent-run ledger (7 scores, checked 2026-09-02–09-29) + AA leaderboard FAQ + llm-stats — added Terminal-Bench 2.1 three-way harness split (AA 91.4 / Vals 85.02 / fallback-corrected 79.03), HLE no-tools head-to-head deltas, llm-stats composite rank; SWE-V/LCB gaps re-confirmed absent. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

