# Claude Fable 5.1 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-fable-5-1`); independent: Artificial Analysis (`claude-fable-5-1`, Max with Default Fallback) model page + Sept 1 launch article, BenchLM.ai aggregator (2026-10-29) routing to Vals AI, ARC Prize, Epoch AI, Proximal, Cursor, Cognition, Collinear, NeoCognition, LlamaIndex and OpenRouter; Anthropic Fable 5.1 / Mythos 5.1 system card (vendor, via BenchLM)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-01 (UTC) — enrichment pass; original findings preserved below and marked where superseded
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-01):** the 2026-10-20 draft read like a **transcript of Anthropic's own Opus 5.5 launch table** — every agent/coding row was vendor-relative, and GPQA, SWE-bench and the AA composite were blank. The pass closes all three: **GPQA Diamond 93.7% (AA) / 93.4% (Vals)** — double-replicated at the top of the tier; **LiveCodeBench 90.5% (Vals)** and **AA Coding Index 81.6%**; and **AA Intelligence Index v5.0 49 — #17 of 58** (launch-vintage 66 was on the pre-v5 basket, **not comparable**, same rebasketing effect seen across this batch). Two vendor rows get independently **corrected**: AA's own rerun of **Terminal-Bench 4.0 reads 52.0% against Anthropic's 55.8%**, and **GDPval-AA lands at 1764 Elo / 62.7% against the launch table's 1735** (AA's launch article had measured 1853 — the trackers disagree with the vendor in both directions, so the in-flight AA numbers govern). **FrontierMath v2 Tier 4 87.8% (Epoch AI)** is the standout: it more than triples Gemini 4 Argon's 78.0 and collapses Flash's 22.0. Fresh adverse evidence: **$12.99 per Index task — #57 of 57, the most expensive model measured in this entire batch** — and **AA-Omniscience hallucination 70.0%** — in fact the worst honesty profile measured in this batch (worse than Flash's 55.1%; compare Argon's 4.3%), driven by a 93.4% attempt rate that AA's launch article flagged from day one. AA also **confirms the modality claim** (text + image in, 1M window). Tool 91→92 (independent agent battery: AA Agentic Index 58.0%, Toolathlon-Verified 77.8%, TB 2.1 91.4%), Reasoning 93→94 (GPQA double-replicated lifts the discount), Coding 91→92 (corroboration), Cost 55→45. Multimodal 88 **unchanged** — still vendor-only rows, so no discount lift is justified. **Overall 92 → 93** (mean 92.8 → 93).

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's generally-available premium flagship of the Fable line — the top-tier Claude model that Opus 5.5 was benchmarked against ("performs at the level of Fable 5.1 on most work at 40% less cost"). Shares weights with the verification-gated Claude Mythos 5.1; Fable 5.1 is the public route with standard cyber/biology safeguards and transparent fallback.
- **Provider / access:** Claude Platform (`claude-fable-5-1`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Messages API.
- **Release / knowledge:** Released 2026-09-01 (announced together with Mythos 5.1); reliable knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-fable-5-1` (no free Zen ID; premium paid tier).
- **Context window:** 1,000,000 tokens input (~555k words on the current tokenizer); 128,000 tokens max output.
- **Modalities:** text + image in → text out; reasoning yes (Adaptive thinking, always on; default effort `high`); tool calls yes; comparative latency "Slower"; strong visual/chart understanding.
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output; 5m cache write $12.50, cache read $0.25 (2.5% of input); Batch API 50% off.
- **Architecture:** proprietary (closed weights); preserved-thinking anti-distillation safeguard.
- **Independently measured (Artificial Analysis, `claude-fable-5-1`, Max with Default Fallback, added 2026-11-01):** Intelligence Index v5.0 **49 — #17 of 58** (class median 37; AA: *"above average in intelligence"*) · Speed **68.7 tok/s, #126 of 196** ("slower than average", median 81) · **Cost per Index task $12.99 — #57 of 57** at **$10.00 in / $50.00 out per 1M with a 98% cache discount** (AA: *"particularly expensive"*) · Verbosity **160 M tokens — #54 of 57** ("very verbose", median 70 M) · **input modality text and image**, output text, reasoning **Yes**, **context 1M**. AA's Sept 1 launch article measured **66 at max (then the highest score AA had recorded)** with the server-side fallback (routes safety-flagged requests to Opus 4.8/Opus 5; served ~4% of output tokens) — pre-v5 basket, **not comparable** to today's 49. Effort span across five settings: 58→66 Index, 13.1M→143.7M output tokens.
- **Pricing confirmation (BenchLM, 2026-10-29):** $10/$50 with cached input at $0.25 confirmed; Anthropic estimates the 75% cache-read cut reduces typical usage-based Fable workloads ~25% and highly agentic workloads up to 45%.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic's Opus 5.5 launch table; behind Opus 5.5 66.4%, ahead of Opus 5 52.3%) → **independent rerun disagrees: AA Terminal-Bench 4.0 reads 52.0%** (added 2026-11-01); both recorded, AA governs the score as the in-flight tracker.
- OSWorld 2.1 (computer use): **80.7%** partial (behind Opus 5.5 81.8%) — corroborated via the Opus 5.5 system card row on BenchLM; the **Fable 5.1 system card itself reports OSWorld 2.0 41.7%** (different harness generation — both recorded, never mixed).
- AutomationBench (Zapier): **31.4%** (behind Opus 5.5 40.0%) → **AA's independent rerun reads AA AutomationBench 59.4%** (different harness/scaffold; direction of the Opus 5.5 lead untested by AA, so kept as recorded).
- GDPval-AA v2.1: **1735 Elo** (behind Opus 5.5 1846, ahead of Opus 5 1708) → **in-flight AA: 1764 Elo / 62.7% normalized**; AA's Sept 1 launch article measured **1853** — vendor and tracker never agree exactly; the AA live number is used for scoring.
- **New independent agent rows (2026-11-01):** **aaTerminalBench21 91.4% (AA) / 85.0% (Vals)** — elite on the 2.x generation; **Toolathlon-Verified 77.8% / pass@3 81.5% / Pass³ 73.1%, avg 23.7 turns** (system card, vendor); **AA Agentic Index 58.0%**, **AA Briefcase 1669 Elo** (launch measured 1694; ±30 drift), **AA Harvey LAB v1.0 93.0%**, **AA Tau3-Banking 47.2%**, **AA ITBench 49.5%**, **GDP.pdf 26.2%**, **AA-AnalystAgent 57.5%**, **ApprenticeBench 72%** (NeoCognition — vs Flash's 24%), **MazeBench 10%**.

Reasoning / knowledge:

- Humanity's Last Exam: **65.6%** with tools (behind Opus 5.5 67.7%, ahead of Opus 5 63.6%) — system card also gives **HLE w/o tools 60.9%**; **AA's independent HLE reads 59.1%** (launch article: "ahead of the previous best of 55.5% from Fable 5" — corroborates the vendor ordering).
- Terminal-Bench-Science 0.1: **52.6%** (behind Opus 5.5 58.7%, GPT-6 Astra 64.6%) — vendor (system card via BenchLM), no independent rerun found.
- GPQA Diamond: no verified public score found → **gap closed twice over (2026-11-01): 93.7% (Artificial Analysis) and 93.4% (Vals AI)** — double independent replication at the top of the frontier tier.
- **New independent reasoning rows (2026-11-01):** **FrontierMath v2 Tiers 1–3 90.175% / Tier 4 87.805% (Epoch AI)** — the Tier 4 figure is the highest measured in this batch by a wide margin (Argon 78.0, Flash 22.0); **AA-Omniscience: hallucination rate 70.0% against accuracy 68.4% (Index 46.3%)** — the worst honesty profile in this batch, driven by a 93.4% attempt rate (AA launch article: the higher attempts and higher hallucination "cancel out" on their Index); **CritPt 29.7% (AA)**; **MMLU-Pro 92.4% (Vals)**; **AA-LCR 85.3%** with **MLCR-AA 15.6%**.

Coding:

- FrontierCode v1.1 (Main): **50.3%** (behind Opus 5.5 54.4%) — note the **current-generation AA-basket sibling FrontierCode 2.0 reads 32.4% (Cognition)**; different version, both recorded (compare Argon 26.3% on the same 2.0).
- CursorBench 4.0: **51.8%** (behind Opus 5.5 57.8%) — **independently confirmed by Cursor's own leaderboard at 51.8%**; **CursorBench 3.2 73.4%** (Cursor) added.
- SWE-bench Verified / LiveCodeBench: no verified public score found in accessible sources → **partially closed (2026-11-01): LiveCodeBench 90.5% (Vals AI, independent).** No canonical SWE-bench Verified row found for this SKU; the system card's **SWE-bench Pro 81.2%, SWE Multilingual 89.1%, SWE Multimodal 54.7%, DeepSWE 67.4%, ProgramBench 87.6%** are vendor rows (the DeepSWE figure is system-card-published — check against DataCurve's public board before quoting as verified; recorded as vendor here). Independent additions: **FrontierSWE v2 56.3% (Proximal)**, **AA-SciCode 63.1%** (launch article measured 62.0%, corroborated), **AA Coding Index 81.6%**, **Bug Hunt Bench 43.0 fixes**, **CWE-bench v1 58.0% (Collinear)**.

Multimodal:

- Chartography (visual chart recognition): **88.4%** with tools (just behind Opus 5.5's 89.0% with tools) — vendor; no independent MMMU-Pro-style rerun found for this SKU on re-check (2026-11-01).
- **New rows (2026-11-01):** **ParseBench 78.12% (LlamaIndex, independent)**, **Design Arena Website 1312 (OpenRouter)**. Modality set **confirmed by AA: text + image in → text out** — no audio/video, matching the draft.
- **Caveat for cautious use:** the 70.0% Omniscience hallucination rate is a text-knowledge result, but combined with very verbose output (160 M Index tokens) and the safety-fallback architecture (safety-flagged requests route to Opus 4.8/Opus 5; ~4% of Index output tokens), behavior can be less predictable than the headline reasoning rows suggest.

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".
- **Status 2026-11-01:** window **confirmed at 1M by AA**; independent long-context evidence now exists: **AA-LCR 85.3%** (strong; batch-comparable: Argon-tier 79–82, Flash 81.3) but **MLCR-AA 15.6%** (multi-document retrieval — weak in absolute terms) and **GraphWalks BFS 256K–1M 65.0%** (from Google's Argon launch chart — competitor-published about a rival, direction only). No MRCR/RULER from Google/Anthropic for this SKU.

> Provenance: exact percentages are from Anthropic's Opus 5.5 launch comparison table (which reran Fable 5.1) and the Claude Platform docs. Fable 5.1 and Mythos 5.1 are the same model — scores should be read as equivalent to `model/claude-mythos-5.1/`.

### Normalized scores (1–100)

- **Tool use: 92/100.** *(91 → 92 — the vendor-relative draft is now backed by a large independent battery.)* OSWorld 2.1 80.7% and GDPval-AA 1764 (AA live; 1735 vendor) are frontier-class; **aaTerminalBench21 91.4% (AA) / 85.0% (Vals)**, **Toolathlon-Verified 77.8%**, **AA Harvey LAB 93.0%**, **AA Agentic Index 58.0%**, **ApprenticeBench 72%** and **SciCode-style analytical agent rows** push the ceiling up. Held back by **Terminal-Bench 4.0 52.0% on AA's rerun (55.8% vendor)**, **AutomationBench 31.4% vendor framing**, **MazeBench 10%** and **GDP.pdf 26.2%**.
- **Reasoning: 94/100.** *(93 → 94 — the draft's 'absent GPQA' discount is closed, twice.)* **GPQA Diamond 93.7% (AA) / 93.4% (Vals)** double independent replication; **FrontierMath v2 Tier 4 87.8% (Epoch AI)** — best measured in this batch, more than triple Flash's 22.0; **HLE 65.6% with tools** corroborated by AA ordering; **MMLU-Pro 92.4%**. Capped — not higher — by **AA-Omniscience hallucination 70.0%** (worst honesty profile in this batch; attempt rate 93.4%) and **CritPt 29.7%**.
- **Context window: 98/100.** 1M-token input (AA-confirmed) with 128K output; **AA-LCR 85.3%** is now independent long-context evidence at the strong end of this batch, keeping the 98; **MLCR-AA 15.6%** (multi-doc retrieval) is the soft spot preventing a bump.
- **Multimodal: 88/100.** *(unchanged — re-verified 2026-11-01.)* Chartography 88.4% with tools and text+image input remain **vendor-only**; independent rows this pass (ParseBench 78.12% doc-grounding, Design Arena 1312) are document/tooling proxies, not image-reasoning benchmarks, so no discount lift is justified. Modality set confirmed by AA: no audio/video.
- **Coding: 92/100.** *(91 → 92 — corroboration of previously vendor-only rows.)* **CursorBench 4.0 51.8% confirmed by Cursor's own leaderboard**; **LiveCodeBench 90.5% (Vals)** closes the draft's blank; **AA Coding Index 81.6%**, **FrontierSWE v2 56.3% (Proximal)**, **CWE-bench v1 58.0% (Collinear)**, **Bug Hunt 43.0 fixes** are new independent mid-strong rows. Still capped because Opus 5.5 now leads the key vendor rows (FrontierCode, CursorBench 4.0, Terminal-Bench 4.0) at under half the cost, and **FrontierCode 2.0 reads only 32.4% (Cognition)** on the current generation.
- **Cost efficiency: 45/100.** *(55 → 45 — independent measurement sharpens the draft's judgment.)* The draft called it 'the most expensive Claude tier'; **AA measures $12.99 per Index task — #57 of 57, dead last among the 57 costed models** (vs Opus 5.5 $10.04, Astra $6.24, Fable 5-era ~$3.14 at launch vintage), driven by 160 M verbose Index tokens (#54/57). The 98% cache discount and Batch 50% off soften list price but not measured per-task cost; capability is now matched by both Opus 5.5 and Astra.
- **Overall Score: 93/100.** Mean of Tool 92 + Reasoning 94 + Context 98 + Multimodal 88 + Coding 92 = 92.8 → 93. *(92 → 93: the double-replicated GPQA and confirmed Cursor/SciCode rows lift Tool/Reasoning/Coding by one point each; Cost — never in the mean — absorbs the real downgrade.)* Best fit: teams that specifically need the Fable-tier flagship with standard safeguards and transparent fallback; for most work Opus 5.5 delivers the same or better at 40–60% lower cost, and verified orgs get identical weights via Mythos 5.1.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20; re-researched 2026-11-01 (enrichment pass)
- Method: public internet research (Claude Platform docs "Claude Fable 5.1 / Mythos 5.1" model overview for specs/pricing/identity; Anthropic's Opus 5.5 launch table for the benchmark rows); 2026-11-01 pass adds ≥3 independent sources — Artificial Analysis model page (Index v5.0 49, $12.99/task #57/57, modality confirmation) + AA Sept 1 launch-prep article, BenchLM.ai aggregator (2026-10-29) routing to Vals AI, Epoch AI, Proximal, Cursor, Cognition, Collinear, NeoCognition, LlamaIndex, OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Conflict handling (2026-11-01): where AA's in-flight rerun disagrees with Anthropic's launch table (Terminal-Bench 4.0 52.0 vs 55.8; GDPval-AA 1764 vs 1735), both are recorded and the independent tracker governs the score — never averaged. Launch-vintage AA numbers (Index 66, $3.76/task, Briefcase 1694, GDPval 1853) are pre-v5-basket and are **not comparable** to the 2026-10-27 rebasketed values; only the live cells drive scores. Google's Argon-launch-chart rows about Fable (GraphWalks, PostTrainBench 40.2%, Gray Swan IPI 1.0%) are competitor-published about a rival: recorded, direction-only, never primary and never merged. Fable 5 ≠ Fable 5.1 — no row transferred between siblings; Mythos 5.1 shares weights but its verification-gated access is documented under its own folder only.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
