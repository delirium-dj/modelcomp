# Qwen 3.8 (2.4T-A95B flagship) — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.8-2.4T-A95B`, open weights)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-2.4T-A95B (the Qwen3.8 flagship; open-weights release of the Qwen-Max-class model — distinct from the separate `Qwen/Qwen3.8-27B` dense model, which is a different folder)
- **Short description:** Alibaba's most powerful Qwen model to date: a 2.4T-total / 95B-active mixture-of-experts flagship with a 1M-token context and multimodal input, whose weights were open-sourced August 17, 2026 on Hugging Face and ModelScope — "the first time that Qwen3.8 brings a Qwen-Max-class model to open release". Independent placements: #3 on Arena AI's CodeArena (webdev) and #3 on Artificial Analysis' Agentic Index. Shares the Max-class training recipe; Alibaba's API model `qwen3.8-max` is the hosted form of the same Max-class flagship.
- **Provider / access:** Open weights on HF `Qwen/Qwen3.8-2.4T-A95B` + ModelScope (free download); hosted via Alibaba Cloud Model Studio `qwen3.8-max` (OpenAI-compatible + Anthropic-compatible APIs). No Free ID on OpenCode Zen.
- **Release / knowledge:** Flagship API release August 3, 2026 (preview July 19); open weights released 2026-08-17. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (open weights); `qwen3.8-max` (Model Studio hosted ID).
- **Context window:** up to 1,000,000 tokens (1M; Alibaba model card / theairankings / benchlm).
- **Modalities:** text, image, video input (first Max-line release with multimodal input); text output; reasoning yes — defaults to `reasoning_effort: xhigh` on the API; tool calls (agentic benchmarks run with the Claude Code harness); Anthropic-compatible endpoint.
- **Pricing (as of 2026-10-09):** hosted $2.00 in / $6.00 out per 1M (Model Studio pricing); open weights free to self-host ($0/token with your own GPUs).
- **Architecture:** 2.4 trillion total parameters / 95 billion active, mixture-of-experts; open weights (Qwen's open license; Apache-family per Alibaba's open-source posture).

### Raw benchmarks found

> Alibaba's vendor-run release table (August 3, 2026, via apidog.com — footnoted: coding rows ran on the Claude Code harness; in-house benchmarks (QwenSWEBench, CoWorkBench) built by the Qwen team; "Fable5 results may involve fallbacks" per Alibaba's own footnote). Independent placements as noted.

Agent / tool use:

- Terminal Bench 2.1: **86.6** (Alibaba table; vs Opus 4.8 84.6, Fable 5 84.6, GPT-5.6 Sol 88.8 — beats both Claude flagships; generational jump from Qwen3.7-Max 74.5) — CONFLICT: Vals independent reads **67.4%** (added 2026-10-16, harness difference, both cited)
- OSWorld-Verified: **86.1** (Alibaba multimodal table)
- Artificial Analysis Agentic Index: **#3 globally** (independent placement, per Alibaba's announcement citing AA)
- PaperBench: **93.0** (Alibaba table; best row — GPT-5.6 Sol 90.5, Fable 5 88.8, Opus 4.8 80.3; +28.2 over Qwen3.7-Max's 64.8)
- Added 2026-10-16 (Qwen3.8-Max release tables via BenchLM): Agents' Last Exam **52.4%**; WideResearch **81.9%**; CoWorkBench **74.8%**; Toolathlon-Verified **72.5%**; SkillsBench **70.2%**; WebArena-Verified **66.8%**; AndroidWorld **85.3%**; MobileWorld **77.8%**; JobBench **53.4%**; AutomationBench **27.3%**; OSWorld 2.0 **19.4%**; Hermes Bench **70.5%** / Hermes Index **36.2%**; MazeBench ASCII **0%**; GDPval/Tau2/Tau3/Claw-Eval: still no verified public score found
- HLE w/ tools: **56.2%** (added 2026-10-16 — clears the 40% bar strongly)

Reasoning / knowledge:

- GPQA Diamond: **92.6** (Alibaba table; ties Fable 5 92.6, above Opus 4.8 92.0, below Sol 94.1)
- HLE: **43.6** (Alibaba table — last among the four flagships; Fable 5 53.3, Sol 47.2, Opus 4.8 45.7)
- IFBench: **82.8** (Alibaba table — widest margin; Sol 72.7, Fable 5 63.5, Opus 4.8 62.2; durable Qwen strength, 3.7-Max led at 79.1)
- FrontierMath v2: Tiers 1–3 **74.7%**, Tier 4 **46.3%** (Epoch AI leaderboard — added 2026-10-16, previously unmeasured; strong)
- Artificial Analysis Intelligence Index: no verified public number found for the flagship (AA hadn't scored it at the table's publication; later AA page covers the Max config)
- MRCRv2: **92.9%** and LongBench v2: **66.3%** (added 2026-10-16 — fills the previously-missing long-context retrieval rows)
- LCR / MLCR beyond the above, CritPt, Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **67.7** (Alibaba table, Claude Code harness; just behind Opus 4.8 69.2, 12.3 behind Fable 5's 80.0, above Sol 64.6; +7.1 over Qwen3.7-Max)
- Added 2026-10-16: SWE-bench (Vals) **85.6%** (independent — fills the missing SWE-V-class row); LiveCodeBench (Vals) **87.9%**; DeepSWE **56.6%** (fills the "trailing frontier" note with a number — well under the 74% threshold); FrontierSWE **73.5%**; VulcanBench v3 **81.2%**; NL2Repo **55.9%**; OpenHarmony **60.8%**; FrontierSWE v2 **15.8%** (weak); Bug Hunt **25.7 fixes**
- CodeArena (webdev, independent): **#3 globally** (Arena AI leaderboard, per Alibaba's announcement)
- PaperBench (research reproduction): **93.0** (see above)
- SWE-bench Verified / LiveCodeBench (official) / SciCode / Vibe Code Bench: no verified public score found

Long context:

- Window: **1M tokens**; MRCRv2 **92.9%** and LongBench v2 **66.3%** now measured (added 2026-10-16 — resolves the old "no retrieval verified" gap; 92.9% is frontier-grade at the measured depth, though not at 512K+ of the 1M window)

Multimodal / vision:

- MathVision: **95.2**; LogicVista: **91.9**; OSWorld-Verified: **86.1** (Alibaba multimodal table vs Gemini 3.1 Pro and GPT-5.6 Sol; leads nearly every OCR row)

### Normalized scores (1–100)

- **Tool use: 90/100.** CHANGED from 88 — TB2.1 86.6 (beats both Claude flagships on the vendor table), OSWorld-Verified 86.1, and the newly surfaced Agents' Last Exam 52.4%, WideResearch 81.9%, CoWorkBench 74.8% and Toolathlon 72.5% clear the top of the mid band; the Vals TB2.1 67.4% conflict and MazeBench 0% cap it.
- **Reasoning: 93/100.** CHANGED from 92 — GPQA Diamond 92.6 (ties Fable 5; Vals 93.7%), HLE 43.6 / w-tools 56.2, and the newly measured FrontierMath v2 74.7%/46.3% all clear the frontier references; PaperBench 93.0 and IFBench 82.8 corroborate; HLE is last among the four flagships, capping it below 95.
- **Context window: 96/100.** CHANGED from 95 — 1M tokens (≥1M tier = 95–100) with the previously-missing MRCRv2 92.9% now measured (frontier-grade retrieval at depth); LongBench v2 66.3% is the far-end caveat.
- **Multimodal: 92/100.** Text, image, video in with a near-sweep multimodal table (MathVision 95.2, LogicVista 91.9, OCR leadership) — now massively expanded (CharXiv 93.5%, Video-MME 90.4%, MLVU 90.8%, OmniDocBench 92.1%, MMMU-Pro 82.3%); text-only output caps it at the band top.
- **Coding: 87/100.** CHANGED from 85 — the independent SWE-bench (Vals) 85.6%, LCB (Vals) 87.9%, FrontierSWE 73.5% and VulcanBench 81.2% lift the band; SWE-Pro 67.7 and DeepSWE 56.6 (both official) keep it below 90.
- **Cost efficiency: 92/100.** Open weights free to self-host; hosted $2.00/$6.00 per 1M sits between the ~$0.60/$2.20 = 92 and ~$1.25/$4.25 = 88 anchors; the open-weights release is the cost story.
- **Overall Score: 92/100.** CHANGED from 90 — mean of the five quality dims (90 + 93 + 96 + 92 + 87) / 5 = 458/5 = 91.6 → 92. Best fit: the most capable open-weights release of the summer — multimodal, 1M-context frontier-class work where self-hosting or the $2/$6 hosted price matters; Fable 5 stays ahead on deep software engineering and broad-knowledge exams.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (Alibaba Cloud announcement, Alibaba's vendor-run benchmark table via apidog.com, benchlm.ai, theairankings, DuckDuckGo search cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: corrects the model identity — the 2026-09-24 draft described `Qwen/Qwen3.8-27B` (a different model/folder); this report covers the actual Qwen3.8 flagship (2.4T-A95B open weights, released 2026-08-17) with its full vendor table; 2026-10-16 re-research: 67-row BenchLM profile added (SWE-Vals 85.6%, MRCRv2 92.9%, FrontierMath 74.7/46.3) — Tool 88→90, Reasoning 92→93, Context 95→96, Coding 85→87, Overall 90→92).
- Future sources: add a new file next to this one, e.g. `Qwen_3.9.md`, using the same headings.
