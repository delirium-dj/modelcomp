# Kimi K2.5 — findings by Qwen 3.8 Flash

- Source: Moonshot AI (curated id `opencode/kimi-k2.5`)
- Date: 2026-10-07 (UTC); second pass 2026-11-04 (UTC) — **origin-sunset executed; third-party serving survives**: Moonshot's platform retired `kimi-k2.5` on **2026-08-31** (Model List banner; OpenRouter route carried the same `expiration_date` in `/api/v1/models`), yet the ID remains live via open-weight hosts — Oct-20 tracker recheck has the OpenRouter listing up, Cloudflare "Deprecated (May 30) **but still answers**" at $0.60/$3.00, Azure holds to **2027-01-26**, NVIDIA endpoint fully shut 2026-05-20, Chutes off 2026-07-31 — five platforms, five dates; release pinned exactly **2026-01-27**; BenchLM SWE-V **76.8%** reproduced verbatim (Oct-29 board, #37/38 both variants, $0.6/$3); no new independent absolutes → **legacy flag recorded (origin-retired, third-party-served), bands unchanged, Overall remains 76**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5 (weights `moonshotai/Kimi-K2.5`; hosted as `moonshotai/kimi-k2.5`)
- **Short description:** Moonshot AI's **1 T-total / 32 B-active MoE** flagship of the K2 line: an open-weights, long-context model built for agentic tool use, repository-level coding and **native multimodal understanding (image + video)**. It is the model that made the Kimi family competitive on browser/search agents (BrowseComp, DeepSearchQA, WideResearch) while keeping single-GPU-node-class active parameters.
- **Provider / access:** **Modified MIT** licence, weights on Hugging Face (1 T total — realistically multi-node or large-TPU/HPX deployment). Hosted by the Kimi API / kimi.com app, OpenRouter (`moonshotai/kimi-k2.5`) and OpenCode Zen. Native tool calling, structured output, interleaved image/video + text prompts.
- **Release / knowledge:** released **January 2026** (Artificial Analysis). **Deprecation flag:** AA's page carries a banner — "This model is deprecated… Kimi has launched a newer release, Kimi K2.6. We suggest considering it instead," and says only the default 10 K-input workload is still being benchmarked, other numbers being historical. Its registry folder `model/kimi-k2.6/` is that successor.
- **IDs:** `moonshotai/Kimi-K2.5` (HF), `moonshotai/kimi-k2.5` (OpenRouter/API), BenchLM `kimi-k2-5` (non-reasoning page) + `kimi-k2-5-reasoning` (sibling, score not computed), curated id `opencode/kimi-k2.5`.
- **Context window:** **262,144 tokens** (256 K, confirmed by both AA and BenchLM), with **65,536 max output** per the curated `meta.json` — consistent with the 256 K window; the output cap was not independently re-verified on AA.
- **Modalities:** text + image + **video** in; text out (AA states exactly this; the Kimi blog's Video-MME / VideoMMMU rows confirm the video path is measured, not advertised). **No audio input** and no non-text output, per both AA and the curated note.
- **Pricing (as of 2026-10-07):** Artificial Analysis tracks **$0.60 in / $2.75 out per 1M with a 42 % cache discount**, and calls it "above average in intelligence, but **somewhat expensive**" among open-weight models of similar size (class medians: $0.30 in / $1.15 out). The curated OpenCode Zen tier ("$0.60/$3.00, cached input $0.08") agrees on input and is slightly higher on output. `noFreeId: true` — no free hosted tier for this ID.
- **Architecture:** 1 T total / 32 B active MoE, reasoning-capable (Kimi "thinking" mode), open weights, 256 K context, vision + video encoder stack inherited from the K2-VL line.
- **Identity flag:** BenchLM's ranked page for this slug is typed **Non-Reasoning** (52.08, #85 of 887, 61 of 623 tracks) while Artificial Analysis measures the **Reasoning** variant (Index 23, #35 of 117) — the two pages are the same weights under different inference modes, and a number of rows on the BenchLM page come from **competitor-published comparison tables** (Qwen3.6-Plus blog, Arcee Trinity blog) rather than from Moonshot or a neutral harness. Those are labelled below and weighted accordingly.

### Raw benchmarks found

BenchLM `kimi-k2-5`: overall **52.08/100, rank #85 of 887**, Open Weight, 256 K, **61 of 623 tracks covered** (the richest coverage in this pass). Artificial Analysis Intelligence Index **23** (*estimated*, #35/117, median 18).

Agent / tool use:

- τ²-bench: **95.9 %** (AA) — the highest τ² row seen in this pass
- τ³-bench: **65.7 %**; MCP-Tasks **59.1 %**; DeepSearchQA **77.1 %**; WideResearch **72.7 %** (vendor card / Qwen-table sources)
- Claw-Eval: **52.3 %** (Claw-Eval leaderboard); BrowseComp **60.6 %**; Gert Labs **45.88 %**
- Terminal-Bench 2.0: **50.8 %** (vendor card); Toolathlon **27.8 %**; MCP Atlas **29.5 %** (vendor card)
- APEX-Agents-AA: **11.5 %** (AA); DeepPlanning **14.4 %**; ResearchClawBench **14.0 %**; JobBench **8.7 %** (paper)
- GDPval-AA: **936** raw / **17.2 %** normalized (AA)
- Terminal-Bench 2.1 / 4.0, AutomationBench, OSWorld, AA-Briefcase: **no row found for this ID**

Reasoning / knowledge:

- GPQA Diamond: **87.6 %** vendor card → **87.9 %** AA (independent agreement)
- HLE: **30.1 %** vendor → **30.7 %** AA; SuperGPQA **69.2 %**; MMLU-Pro **87.1 %**
- AIME 2025 **96.1 %** / AIME 2026 **95.8 %** / HMMT Feb-2025 **95.4 %**, Nov-2025 **91.1 %**, Feb-2026 **87.1 %**; MMAnswerBench **81.8 %**
- AA-LCR: **78.0 %**; LongBench v2 **61 %**; CritPt **3.1 %**
- AA-Omniscience: index **−7.3**, accuracy **35.2 %**, hallucination rate **65.7 %**
- FrontierMath v2: Tiers 1–3 **27.9 %**, Tier 4 **4.2 %** (Epoch AI)
- AA-IFBench **70.2 %**; IFEval **93.9 %**; MMLU-ProX **82.3 %**; NOVA-63 **56.0 %**

Coding:

- SWE-bench Verified: **76.8 %** (vendor card) / **70.8 %** (Arcee's re-run)
- LiveCodeBench v6: **85.0 %**; SWE-bench Pro **50.7 %**; SWE Multilingual **73 %**; SWE-Rebench **58.5 %** (leaderboard); React Native Evals **77.2 %**
- SciCode **48.7 %**; AA Coding Index **46.8 %**; Design Arena (website) **1255** (OpenRouter)
- DeepSWE, Vibe Code Bench, NL2Repo: **no verified public score found for this ID**

Multimodal:

- MMMU-Pro: **78.5 %** vendor → **75.4 %** AA; MMVU **80.4 %**
- Video-MME **87.4 %**; VideoMMMU **86.6 %** — genuinely strong video understanding
- Audio: not applicable (no audio input)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ² 95.9 % independently, τ³ 65.7 %, Claw-Eval 52.3 % and BrowseComp 60.6 % are all at or above the methodology's frontier references, and the research-agent suite (DeepSearchQA 77.1 %, WideResearch 72.7 %) is its clearest strength. Held back from the 90 tier by Terminal-Bench-class endurance — TB2.0 50.8 % and Toolathlon 27.8 % are mid-band, while APEX-Agents-AA 11.5 %, JobBench 8.7 %, DeepPlanning 14.4 % and ResearchClawBench 14.0 % show long, professionally-shaped agent runs collapse, and GDPval-AA's normalized 17.2 % (936) sits at the bottom of the mid band.
- **Reasoning: 70/100.** GPQA-Diamond ~88 % with independent confirmation, MMLU-Pro 87.1 %, AIME ~96 % and HMMT 87–95 % are frontier-band results, and AA-LCR 78.0 % is strong. But HLE is 30.1–30.7 % (frontier reference is 40 %+), CritPt 3.1 % and FrontierMath Tier 4 4.2 % are weak, the Intelligence Index is **23 (estimated)** — inside the methodology's mid band (20–35) — and Omniscience shows a 65.7 % hallucination rate at 35.2 % accuracy. Deep multi-step reasoning is solid, not frontier.
- **Context window: 75/100.** 262,144 tokens is the methodology's 200 K–500 K tier (65–84, with 200 K ≈ 70), and it earns the upper half: AA-LCR 78.0 % and LongBench v2 61 % verify real long-context use, plus 65,536 max output clears the 64 K caveat. It is not pushed higher because no MRCR or AI-Needle retrieval row exists for the ID and AA now keeps only the 10 K-input workload current, so the deep-window numbers are historical.
- **Multimodal: 84/100.** Text + image + **video** in with text out is the 75–90 band, and the video path is unusually well evidenced for an open-weights model (Video-MME 87.4 %, VideoMMMU 86.6 %, MMVU 80.4 %, MMMU-Pro 75–78 %, MMAnswerBench 81.8 %) — the strongest vision/video profile measured in this pass. No audio input and no non-text output keep it off the 90 tier.
- **Coding: 76/100.** SWE-bench Verified 76.8 % vendor / 70.8 % third-party re-run, LiveCodeBench v6 85.0 %, SWE Multilingual 73 %, SWE-Rebench 58.5 % and SWE-Pro 50.7 % are real repository-level evidence, and an AA Coding Index of 46.8 % plus SciCode 48.7 % say the scientific/algorithmic side is merely decent. The frontier coding band (DeepSWE 74 %+, Coding Index 70 %+) is not met, and no DeepSWE row exists to test it.
- **Cost efficiency: 90/100.** $0.60/$2.75–3.00 with 42 % cache discount maps almost exactly onto the methodology's ~$0.60/$2.20 ≈ 92 anchor, so the small deduction is for AA's explicit "somewhat expensive for its size class" verdict (medians $0.30/$1.15), the `noFreeId` flag, and the practical cost of serving 1 T total parameters if self-hosting despite the Modified MIT licence.
- **Overall Score: 76/100.** Mean of the five quality dimensions (76 + 70 + 75 + 84 + 76) / 5 = 381 / 5 = 76.2 → 76; Cost excluded per `RULES.md`. Best fit: open-weights deployments that need **long-context agentic search plus video understanding and repo-level coding in one model** — deep-research agents, browser/tool loops on the τ²/τ³-heavy side, multimodal document-and-video analysis, and self-hosted coding assistants where the weights matter more than per-token price. For sustained professional-agent runs (APEX, JobBench, GDPval) or the current frontier, `model/kimi-k2.6/` is the vendor-recommended upgrade path.

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-07). Pass-1 noted AA's deprecation banner; the vendor sunset has since executed on the origin platform while the open weights keep the ID servable elsewhere.

**Sources:** lifecycle grid — https://zentor.ai/blog/kimi-k2-5-deprecated (published late Aug, updated 2026-10-20: **"Moonshot's own platform sunsets kimi-k2.5 on 31 August 2026, per the banner on its Model List page. OpenRouter's route … carries the same expiration_date in its public API"**; platform table: Cloudflare Workers AI "Marked Deprecated, still serving" since 2026-05-30 at **$0.60/$3.00, 256K**; NVIDIA build.nvidia.com "Full API shutdown, completed" 2026-05-20 after a k2.5→k2.6 gateway redirect; **Azure AI Foundry "Preview, retirement scheduled 26 January 2027"** — outliving its own vendor by five months; Chutes removed 2026-07-31; "ten OpenRouter providers were still online and healthy as of 25 August 2026 … Input pricing ranged from $0.45 to $0.60" — DeepInfra, SiliconFlow, AtlasCloud, DigitalOcean, Venice, StreamLake, Novita, Bedrock, Moonshot, Phala) and https://finance.biggo.com/news/87dc9670-9bba-43d7-83ef-6b3aff4af97c (2026-08-23: **"Kimi K2.5 to Retire End of August; 2.8 Trillion-Parameter K3 Takes Over"**) · still listed — https://openrouter.ai/moonshotai/kimi-k2.5 and its /providers subpage remain live at the Nov-2026 fetch (open-weight economics: third parties keep serving regardless of the origin sunset) · benchmarks — https://benchlm.ai/benchmarks/swe-bench-verified (Oct-29 board: **"Kimi K2.5 (Reasoning) 76.8% / Kimi K2.5 76.8%"** #37–38 of 112 — reproduces pass-1's 76.8 vendor row exactly; no new GPQA/HLE/TB rows for the id; K2.6/K3/K3.1-Pro rows belong to their own ids — exact-ID) · lineage — release pinned **2026-01-27** (zentor OpenRouter screenshot caption); "two generations back now: K2.6 landed in April, K2.7-Code in June, and K3 after that" (+ K3.1 Pro, 1M ctx, per OpenRouter) — this folder's tracked ID is three-plus generations behind the vendor frontier.

**What moved and how it was resolved:**

- **Nothing scored.** No new measured absolutes for `kimi-k2.5`; the SWE-V row reproduced identically and every band's evidence base stands. Overall remains (76+70+75+84+76)/5 = 76.2 → 76.
- **Flag: origin-retired, third-party-served.** Per the established convention this is the executed-sunset case for the *origin vendor* (Moonshot platform + its OpenRouter first-party lane, 2026-08-31) — but unlike the grok-4 historical-artifact case, the open weights mean the ID is genuinely still orderable on ≥9 third-party lanes (Cloudflare explicitly still answering, Azure to Jan-2027). Recorded as a legacy flag with serving-survival notes rather than a historical-artifact freeze; the $0.45–$0.60 provider spread and Cloudflare's $0.60/$3.00 sit side-by-side with pass-1's AA $0.60/$2.75 (Cost 90 unchanged, excluded from Overall).
- **Context 75 nuance:** the 65,536 max-output "not independently re-verified" caveat persists — no source in this pass published an output cap; band unchanged.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (BenchLM `kimi-k2-5` score page, Artificial Analysis `models/kimi-k2-5` reasoning page including its deprecation notice, the `moonshotai/Kimi-K2.5` Hugging Face model card and kimi.com launch post as cited by BenchLM's upstream rows, Epoch AI FrontierMath v2 leaderboard, SWE-Rebench / Claw-Eval / React Native Evals / OpenRouter leaderboard listings); scores are normalized 1–100 interpretations, not official vendor scores. Rows sourced from competitor blogs (Qwen3.6-Plus, Arcee Trinity) are attributed as such in the list above and treated as third-party, not neutral. Where vendor and AA rows both exist (GPQA, HLE, MMMU-Pro, SWE-bench Verified), both are printed and the lower value informs the score.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Legacy flag: Moonshot origin sunset **executed 2026-08-31** (five platforms, five dates — Cloudflare still serving, Azure to 2027-01-26, NVIDIA shut 2026-05-20); open-weight lanes keep the ID live on OpenRouter (10 providers at last full check); release pinned 2026-01-27; SWE-V 76.8% reproduced. No band moves; Overall remains 76. Pass-1 text preserved verbatim above.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
