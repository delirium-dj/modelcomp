# Ox Alpha — findings by GLM 5.3

- Source: OpenCode Zen stealth listing, revealed as Z.ai GLM-5.3-Flash (`opencode/ox-alpha`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-28 report and its 2026-09-29 addendum
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth alias; revealed as Z.ai GLM-5.3-Flash). **Alias/variant flag:** this entry is the OpenCode/OpenRouter stealth listing — the same weights now live as the named `glm-5.3-flash` (see `model/glm-5.3-flash/`, second-passed 2026-10-11); this report scores the ox-alpha alias on the revealed model's verified benchmarks.
- **Short description:** The unattributed free stealth reasoning model that appeared on OpenRouter at 20:04 UTC on 2026-08-20 (`stealth/ox-alpha`) for long-horizon coding agents — "within four days it had processed more tokens than most commercial models see in a month" (appz) — revealed 2026-08-26 by Z.ai as GLM-5.3-Flash. Second-pass forensics note: the identity is now backed by a public fingerprinting corpus — **30/30 and 44-tokenizer-match evidence against the GLM-5.3 family** (Emrevrg, Mich404elle repos, FlunkyGraphics), compression-style tests clustering with GLM-5.3 (talkingtech), audio-endpoint refusal behavior matching the GLM-5V family (aimodeling — ruling out MiMo v2.5/Qwen 3.8 Max/GLM-4.6V), and a leaked stealth system prompt instructing the model to "never reveal its true identity" (elderplinius via AGI Hunt).
- **Provider / access:** OpenCode Zen `opencode/x-preview-f-free` (stealth-period ID; free window ended ~2026-08-27), OpenRouter `stealth/ox-alpha` (listing now gone); named access via ~20+ API providers as GLM-5.3-Flash (30+-provider OpenRouter ecosystem per the sibling pass). Reasoning variants low/high/max; JSON mode without schema enforcement.
- **Release / knowledge:** stealth listing 2026-08-20; named GLM-5.3-Flash release 2026-08-26 (Z.ai's own confirmation). Knowledge cutoff unknown. The "100T tokens/day capacity" was OpenCode's stealth-week claim, not a measured figure (developersdigest).
- **IDs:** `opencode/x-preview-f-free` (Zen stealth), `openrouter/stealth/ox-alpha`, `zai-org/GLM-5.3-Flash` (HF, MIT).
- **Context window:** 1,048,576 total / 131,072 max output (OpenRouter + OpenCode catalog, re-verified).
- **Modalities:** text / image / video / PDF in; text out; refuses audio on every route (fingerprint-verified GLM-5V-family behavior); reasoning yes; tool calls yes; JSON partial.
- **Pricing (as of 2026-10-12):** the free stealth window ($0, ended) is history; current verified list pricing is the revealed model's — $0.15 in / $0.50 out per 1M, ~83-99% cache discounts across the provider ecosystem. An `oxalpha.io` site offering "Tokenra API access" appeared post-reveal — unaffiliated provenance, treat with caution (flagged).
- **Architecture:** sparse MoE, 320B total / 18B active; hybrid sparse+linear attention; MIT open weights since the reveal; stealth week reportedly served on ~100,000 Chinese domestic AI chips (launch coverage).

### Raw benchmarks found

> All rows measure GLM-5.3-Flash (the revealed ox-alpha) — AA/Vals/Epoch via BenchLM. Second-pass rank reveals added (BenchLeader data as of 2026-10-11/12); no benchmark ever existed under the "ox-alpha" name while it was stealth.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor = AA's own run #30) / **62.9% #38** (Vals, common harness — spread retained); Terminal-Bench 4.0: **32.8% #38** (AA)
- GDPval-AA: **1773 Elo** raw / **57.2% #17 normalized** (AA — rank revealed this pass: near-frontier)
- AA Tau3-Banking: **47.2% #8** (top-10); AA ITBench: **51.2% #4** (top-5); Finance Agent v2: **57.9% #12**; SkillsBench: **59.2% #9**; AA-Briefcase: **1452-1454 #31** (mid)
- Toolathlon-Verified **78.4%**; AutomationBench **48.8%** / AA harness **60.4% #20**; Agents' Last Exam **26.3%**; AA EnterpriseOps-Gym **33.2% #14**; GDP.pdf **15.4% #38**; Harvey LAB **0.8% #16**
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **91.2% #49** (AA) / **86.4% #41** (Vals) / 90.2% #43 (Epoch, max)
- HLE: **39.9% #81** (AA — just under the 40% reference) / **55.3% with tools**
- CritPt: **15.4% #83** (AA — weak, rank confirmed); AA-LCR: **80.0% #73**; MLCR: **51.1% #10** (good rank)
- AA Intelligence Index v4.3.2: **41.8 #51 overall** (#4/116 in the large open-weights class at launch — both views retained)
- Omniscience: index **7.5 #94**, accuracy **27.5% #193** (very weak breadth), non-hallucination **72.4% #31** (good honesty)
- LMArena (revealed model): Text **1475 #37**, Hard Prompts **1501 #30**, Maths **1502 #13**, Vision **1296 #23**; MMLU-Pro **86.1% #47**
- Claw-adjacent: unchanged

Coding:

- SWE-bench Verified (Vals): **92.0% — #10 of all measured**; LiveCodeBench: **80.5% #66**; LiveBench Coding **79.0% #25**; LMArena Coding **1525 #27** / WebDev **1609-1610 #25**
- **DeepSWE controversy (resolved):** the stealth-week viral **80%** was a subset artifact; the corrected full-DeepSWE v1.1 value is **63.4% #30** (OxAlpha's own editorial correction + Z.ai's launch number)
- SciCode: **51.6% #82-87** (below the 55% reference); IOI **52.5% #20**; FrontierSWE **18.1% #15**; Vibe Code **30.8% #62**; Code Migration **20.5% #43**; Bug Hunt **17.7 fixes**; NL2Repo **56.3%**; OpenHarmony **57.3%**
- Composites: **BenchLM 57.36, #55 of 889** (39 rows — the composite drifted from the first-pass 60.62 #44-47 of 512 as the cohort grew to 889; the underlying rows are unchanged); BenchLeader **62.2, #82 of 760** for the revealed model (rising trend); Epoch ECI **151.9 #46**; Vals Index **49.3 #27**

Long context:

- 1M/131K limits verified; AA-LCR 80.0% #73; MLCR 51.1% #10; no MRCR/RULER/GraphWalks number at 1M (unchanged).

Multimodal (grounded):

- CharXiv **89.4%**; MMVU **80.5%** (video); Chartography w/ tools **78.0%**; OfficeQA Pro **62.4%**; MMMU-Pro (Vals) **86.0% #23**; LMArena Vision **1296 #23**; BabyVision **53.4%** (mid); Design Arena **1278-1280** — video/file input verified (fingerprint + official docs), no audio.

### Normalized scores (1–100)

- **Tool use: 85/100.** Held: the rank reveals confirm the first-pass read — GDPval 57.2% #17 and τ³ #8, ITBench #4, Finance #12, Skills #9 near the top; Briefcase #31, GDP.pdf #38, ALE 26.3%, TB4 32.8% #38, and the Vals TB2.1 harness gap cap it.
- **Reasoning: 77/100.** Held: GPQA 91.2% and HLE 39.9% straddle their bars with MLCR #10 and good honesty (72.4% non-hallucination); CritPt 15.4% #83, Omniscience accuracy 27.5% #193, and AA II 41.8 #51 keep it mid-high.
- **Context window: 95/100.** Held: 1M/131K verified; no ≥512K retrieval bar met.
- **Multimodal: 88/100.** Held: text/image/video/PDF input with CharXiv 89.4%, MMVU 80.5%, MMMU-Pro 86.0% #23; no audio (fingerprint-verified refusal), text-only output. *Harmonization note:* the sibling `glm-5.3-flash` file's second pass (2026-10-11) places the same weights at 71 using a stricter video-band comparison (below Argon's 76) — the two independent assessments bracket the same evidence; readers should treat the video-input band as 71-88 pending more measured video quality rows.
- **Coding: 80/100.** Held: SWE-bench V 92.0% #10 anchors; DeepSWE 63.4% #30 (corrected from the viral 80%), SciCode below the reference, Vibe Code 30.8% #62, Code Migration #43 cap.
- **Cost efficiency: 92/100.** Held: the free window is over; $0.15/$0.50 list with steep cache discounts and a 30+-provider floor (to $0.04/$0.23) keeps it near the top of the value band, minus verbosity drag.
- **Overall Score: 85/100.** (85 + 77 + 95 + 88 + 80) / 5 = 85.0 — unchanged from 2026-09-28: the second pass confirmed every cited row, closed the identity question with a public forensics corpus, and revealed mid-field ranks exactly where the first pass placed them. Best-fit unchanged: the stealth-season's free frontier find, now an excellent-value open-weights agent under its real name — see `model/glm-5.3-flash/` for the named-model view.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-28 report and its 2026-09-29 addendum (OpenCode/OpenRouter stealth-period listings and announcements, the public fingerprint-forensics corpus — phuryn, Mich404elle, Emrevrg, FlunkyGraphics, talkingtech compression tests, aimodeling audio-endpoint analysis, laura-martel, singularitymoments — plus the revealed model's AA/Vals/Epoch/BenchLeader data as detailed in the sibling `glm-5.3-flash` second pass; three successful ox-alpha-specific web searches; stealth-period coverage: developersdigest, appz, officechai, mindstudio, automater, mimran-khan, iphoster, codersera, AGI Hunt); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
