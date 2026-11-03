# Claude Sonnet 4.6 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Sonnet 4.6 (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 60 provisional→verified ($3/$15 per pecollective/OpenRouter band); lifecycle: **4.5 retires 2026-11-30 while 4.6 stays listed** (Copilot keeps it as the annual-plan Sonnet); AA now shows a **1M-context row** vs curated 200K — logged unresolved, Context 63 kept on the two-source 200K agreement; hallucination 68.5% reconfirmed 2026-10-29; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (base)
- **Short description:** Anthropic's efficiency-tuned Sonnet refresh (between 4.5 and Sonnet 5). BenchLM places it mid-pack (38/618 rows; 56.86/100, #57 of 645, **Non-Reasoning**): genuinely good at real-world coding (SWE-bench Verified 79.6%, LiveCodeBench Vals 82.1%, React Native Evals 80.6%) and computer-use (OSWorld-Verified 72.1%), but with a big vendor-vs-independent reasoning gap — Anthropic cites GPQA 89.9% / HLE 49%, while Artificial Analysis's independent AA-GPQA is 79.9% and AA-HLE only 13.3%, alongside a low Intelligence Index (24.7) and 68.5% hallucination rate. 200K window.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), OpenRouter, Bedrock, Vertex. Tool calls; image input; `noFreeId`.
- **Release / knowledge:** 2026 (Sonnet 4.6); cutoff not disclosed.
- **IDs:** `anthropic/claude-sonnet-4.6`.
- **Context window:** BenchLM and curated `meta.json` agree at **200K**.
- **Modalities:** Text + image in; text out (BenchLM and curated meta agree).
- **Pricing (as of 2026-10-02):** Paid tier (Anthropic Sonnet band; exact per-1M not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (38 of 618 rows; 56.86/100, #57 of 645, Non-Reasoning), citing the Anthropic Sonnet 4.6 system card, Artificial Analysis, Vals AI, OSWorld, Claw-Eval, CyberGym, Gert Labs, Cursor, Cognition, React Native Evals, SWE-Rebench, Epoch AI and OpenRouter (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- OSWorld-Verified **72.1%** (strong computer use); τ²-bench **79.5%**; Claw-Eval 67.8%; CyberGym 65.2%; Gert Labs 62.92%
- Terminal-Bench 2.0 59.1% (Vals 2.1 57.3); weak newest-GUI tiers: OSWorld 2.0 8.3%, ApprenticeBench 2.0%, JobBench 36.9%

Coding:

- SWE-bench Verified **79.6%** (Vals 77.4); LiveCodeBench (Vals) **82.1%**; React Native Evals 80.6%; SWE-Rebench 60.7%; Vibe Code 51.48%; CursorBench 3.1 48.8%; FrontierCode 1.1 24.3%

Reasoning / knowledge (vendor vs independent gap flagged):

- Anthropic system card: GPQA **89.9%** / HLE **49%** (both clear bars); Artificial Analysis independent: AA-GPQA Diamond **79.9%** (under 90) / AA-HLE **13.3%** (well under 40); SuperGPQA 95; MMLU-Pro 79.2 (Vals 87.3)
- AA Intelligence Index **24.7** (low); CritPt 0.9%; AA-LCR 68.3; FrontierMath v2 Tiers 1-3 32.4% / Tier 4 8.3%
- AA-Omniscience Index -3.5 / Accuracy 38.6% / **Hallucination 68.5%** (severe)

Multimodal / long context:

- CharXiv 77.4; AA-MMMU-Pro 70.6; Design Arena Website 1293
- 200K window; AA-LCR 68.3 (no ≥98% MRCR at 512K+ reported)

Instruction:

- AA-IFBench 41.2%

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Where Anthropic's system-card figure and Artificial Analysis's independent run disagree (GPQA/HLE), the verified AA read anchors the score.

- **Tool use: 72/100.** OSWorld-Verified 72.1%, τ²-bench 79.5%, Claw-Eval 67.8% and CyberGym 65.2% are solid broad tool/computer-use signals, but Terminal-Bench 2.0 (59.1%) is only middling and the hardest new GUI tiers collapse (OSWorld 2.0 8.3%, ApprenticeBench 2%).
- **Reasoning: 55/100.** The verified independent read governs: AA-GPQA 79.9% is under the 90 bar and AA-HLE 13.3% is far under the 40 bar (vs Anthropic's own 89.9/49), with a low Intelligence Index (24.7), CritPt 0.9% and a severe 68.5% hallucination rate all dragging unaided reliability down.
- **Context window: 63/100.** A 200K window sits at the top of the 100–200K (50–64) band; AA-LCR 68.3 offers moderate long-context support and no ≥98% MRCR is demonstrated (both sources agree at 200K), so an upper-band placement.
- **Multimodal: 68/100.** Text+image in with competent document/chart reads (CharXiv 77.4, AA-MMMU-Pro 70.6, Design Arena 1293) — a +image band (60–70); no audio/video rows and text-only output keep it out of the higher tiers.
- **Coding: 78/100.** SWE-bench Verified 79.6%, LiveCodeBench Vals 82.1% and React Native Evals 80.6% clear the ~74 bar and read strongly, tempered by weaker hard/long-horizon code (SWE-Rebench 60.7%, CursorBench 48.8%, FrontierCode 24.3%, Vibe Code 51.5%).
- **Cost efficiency: 60/100.** (Verified by the 2026-11-03 second pass: Anthropic list **$3 per 1M input / $15 per 1M output** — pecollective's Sept-2026 rate table **"Sonnet 4.6 at $3 / $15"** and the OpenRouter/Inworld listings agree — exactly the methodology's $3/$15 ≈ 60 anchor; pass 1's provisional band confirmed to the dollar. Cost is excluded from Overall.
- **Overall Score: 67/100.** Mean of Tool 72, Reasoning 55, Context 63, Multimodal 68, Coding 78 = 67.2 → 67. Best fit: an efficient, cost-conscious coding and computer-use assistant (SWE/LCB/OSWorld strength) with solid image understanding; its headline vendor reasoning numbers are not corroborated by Artificial Analysis, and it is weak on unaided hard reasoning (low HLE/Intelligence Index, high hallucination) and on the newest GUI-agent tiers — step up to Opus/Sonnet 5+ for frontier reasoning or autonomy.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://pecollective.com/tools/anthropic-api-pricing/ (**"September 2026 per-million-token rates: Opus 5 and Opus 4.6-4.8 at $5 / $25. Sonnet 4.6 at $3 / $15"**) and https://openrouter.ai/anthropic/claude-sonnet-4.6 (**"Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work"** — live listing) and https://inworld.ai/models/anthropic-claude-sonnet-4-6 (**"Priced at $3 per million input tokens and $15 per million output tokens"**) · lifecycle — https://endoflife.date/claude (**"Claude Sonnet 4.6, 8 months ago. (17 Feb 2026). Yes"** — still supported) and https://www.reddit.com/r/ClaudeAI/comments/1wud81i/ + https://qcode.cc/en/claude-sonnet-4-5-api-retirement (**"Sonnet 4-5 is deprecated and will be fully decommissioned on November 30, 2026"**; deprecations page notified 2026-09-30) and https://www.highcircl.com/en/blog/claude-sonnet-4-5-retirement (same, **"Deprecated since September 30, 2026, with retirement on November 30, 2026"**) and https://github.blog/changelog/2026-07-31-upcoming-august-2026-model-deprecations-in-github-copilot/ (**"Claude Sonnet 4.6 will remain available to individual GitHub Copilot subscribers on annual plans so they retain a Sonnet offering"**) · current profiles — https://artificialanalysis.ai/models/claude-sonnet-4-6 (**"Claude Sonnet 4.6 (Non-reasoning, High) … supports text and image input, outputs text, and has a 1M tokens context window"**) and https://artificialanalysis.ai/zh/models/claude-sonnet-4-6 (**"得分为25，在同类模型中远高于平均水平（中位数：16）"** — Index 25 non-reasoning vs pass 1's 24.7) and https://benchlm.ai/benchmarks/omnisciencehallucinationrate (2026-10-29 snapshot: **"Claude Sonnet 4.6 … 68.5%"**) and https://x.com/ArtificialAnlys/status/2072062592923930666 (Sonnet 5 **"achieves 53 … a 6-point score increase"** over the 4.6-era scale).

**What moved and how it was resolved:**

1. **Cost provisional→verified:** the pass-1 guess ("~$3/$15 mid band") is confirmed exactly — $3/$15 on three independent listings. 60/100 stands on the documented anchor; no arithmetic move.
2. **Lifecycle: superseded but NOT deprecated.** The 2026-09-30 deprecation wave and 2026-11-30 retirement hit **Sonnet 4.5**, not 4.6 — endoflife.date still marks 4.6 "Yes" (supported), and GitHub's changelog keeps 4.6 as the surviving Sonnet for annual-plan users once 4.5 goes. Watch-list entry: if Anthropic's next wave targets 4.6, re-verify before delisting. Successors Sonnet 5 / 5.5 ($2/$10 permanent / $2 −30% cheaper) live in their own folders per the exact-ID rule.
3. **Context-window conflict opened, not resolved:** AA's current page lists **1M tokens** for this model, while BenchLM and curated `meta.json` agreed at 200K (pass 1). Likely the long-context beta lane (64K output on Inworld's 1M spec sheet vs Anthropic's standard 200K tier). Conservative resolution: **Context 63 stays scored on the two-source 200K agreement**; flagged for curation review — do not upgrade the band on a single aggregator's spec line.
4. **Quality rows reconfirmed:** AA Omniscience hallucination **68.5%** verbatim on BenchLM's 2026-10-29 snapshot; AA non-reasoning-High Index 25 ≈ pass 1's 24.7 (same scale, no drift event). Reasoning 55, Tool 72, Coding 78, Multimodal 68 untouched — no new independent measurement contradicts them.

**Scores changed by this pass:** none. Tool 72, Reasoning 55, Context 63, Multimodal 68, Coding 78 → mean 67.2 → **Overall 67 unchanged**; Cost 60 now verified (was provisional).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Sonnet 4.6 system card, Artificial Analysis, Vals AI, OSWorld, Claw-Eval, CyberGym, Gert Labs, Cursor, Cognition, React Native Evals, SWE-Rebench, Epoch AI and OpenRouter); partial coverage (38/618, Non-Reasoning). Reasoning scored from the independently-verified AA reads (vendor system-card figures noted where they disagree). Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (pecollective, OpenRouter, Inworld, endoflife.date, Reddit/qcode/highcircl retirement coverage, GitHub changelog, AA EN/zh pages, BenchLM hallucination snapshot); Cost 60 provisional→verified at $3/$15; 4.5's Nov-30 retirement explicitly does NOT cover 4.6; AA's 1M-context line logged as an unresolved single-source conflict (200K kept) — **no dimension changed and Overall remains 67**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
