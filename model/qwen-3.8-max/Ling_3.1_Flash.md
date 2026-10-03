# Qwen 3.8 Max — findings by Ling 3.1 Flash

- Source: Alibaba Cloud (`alibaba/qwen3-8-max`; Model Studio, QwenCloud, QwenWork, OpenRouter)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's 2.4-trillion-parameter MoE flagship (GA 2026-08-03) — first open-sourced Qwen-Max-class weights (hosted API stays proprietary); leads PaperBench (93.0) and IFBench (82.8), Terminal-Bench 2.1 86.6% ahead of Opus 4.8 and Fable 5, GPQA Diamond 92.6, with a flat-priced 1M multimodal context at $1.65–2/$4.95–6 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio (default reasoning level xhigh; low/medium/xhigh selectable; thinking mode on by default, preserved reasoning_content billed as input), QwenCloud, QwenWork, OpenRouter; `noFreeId`. Function calling, structured outputs, web search, context caching, batch inference; no fine-tuning. Open-weight checkpoint (2026-08-13) is text-only with a smaller context under a restricted custom license — not a drop-in for the hosted API.
- **Release / knowledge:** 2026-08-03 GA (snapshot `qwen3.8-max-0902` = 2026-09-02 upgrade); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3-8-max` / `qwen3.8-max` (alias `qwen3.8-max-2026-09-02`).
- **Context window:** 1,000,000 tokens (991,808 input non-thinking / 983,616 thinking; 131,072 output; 262,144 max chain-of-thought) — one flat pricing tier across the whole window, no step-up.
- **Modalities:** text, image, video in; text out.
- **Pricing (as of 2026-10-02):** $1.65/$4.951 per 1M (Model Studio international) / $2/$6 (QwenCloud); implicit cache $0.206–0.25/M, explicit cache create $2.063–2.5/M, read $0.137–0.17/M; batch file/chat at half output; AA blended $1.18/M; one-time 1M-token free quota (Singapore region); 15K RPM.
- **Architecture:** 2.4T-parameter sparse MoE (hosted API proprietary; open checkpoint text-only).

### Raw benchmarks found

Agent / tool use (Qwen launch table, 2026-08-02; harnesses per table footnotes):

- Terminal-Bench 2.1: **86.6%** (Claude Code, avg@10, 5h timeout) — ahead of Opus 4.8 and Fable 5 (84.6 each), behind GPT-5.6 Sol (88.8)
- OSWorld-Verified: **86.1%** (ahead of GPT-5.6 Sol 83.2, Fable 5 85.0, Opus 4.8 83.4); OSWorld 2.0: 19.4 / 46.7
- Toolathlon Verified: **72.5%** pass@1 (behind Sol 74.9, Fable 5 77.9, Opus 4.8 76.2)
- Agents' Last Exam: Pass **27.0** / Score **52.4** (Sol: 30.6 / 53.6; Opus 4.8: 27.0 / 45.1)
- CoWorkBench: **74.8**; WorkSpaceBench: **67.7**; JobBench: **53.4**; SkillsBench: **70.2**; Automation-Bench: **27.3** pass@1; WideSearch: **81.9** (Fable 5 81.2, Opus 4.8 72.9)
- WebArena-Verified: **66.8%**; AndroidWorld: **85.3%**; MobileWorld: **77.8%**; ClawEval-MM: 77.2 / 74.8; Vision2Web: 69.0
- MCP Atlas / τ-Bench / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (level with Fable 5; behind GPT-5.6 Sol's 94.1)
- Humanity's Last Exam: **43.6%** (no tools) / **56.2%** (w/ tools; behind Fable 5's 64.5, ahead of Sol's 58.0 and Opus 4.8's 57.9)
- IFBench: **82.8** — #1 (ahead of Sol's 72.7, Opus 4.8's 62.2)
- $OneMillion-Bench (expert score): **52.5** (Fable 5 55.9, Sol 53.8)
- HealthBench: **60.2** — #1 in the table (Sol 55.3, Opus 4.8 52.4)
- PLawBench: **73.2**; PRBench-Legal: **57.6**; PRBench-Finance: **58.3**
- AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Pro: **67.7%** (Claude Code harness, 256K ctx; behind Fable 5's 80.0 and Opus 4.8's 69.2, ahead of Sol's 64.6)
- DeepSWE 1.1: **56.6%** (best of Claude Code + mini-SWE-agent; best on Claude Code) — under the 74% frontier bar (Sol 73.0, Fable 5 70.0, Opus 4.8 59.0)
- FrontierSWE: **73.5** (official leaderboard MEAN@5 as of 2026-08-03; Fable 5 88.8, Opus 4.8 70.0)
- PaperBench: **93.0** — #1 (BasicAgent, Code-Dev mode, judged by Opus 4.6; ahead of Sol's 90.5, Fable 5's 88.8, Opus 4.8's 80.3)
- NL2Repo-Bench: **55.9** (behind Opus 4.8's 69.4); MLS-Bench-Lite: **41.0**; AndroidBench: **75.1**
- Inhouse (Qwen, Claude Code harness): QwenSWEBench 80.7, QwenQoderBench 58.4, QwenReactBench 1724 Elo, QwenSVGBench 1713 Elo
- SciCode / SWE-bench Verified / LiveCodeBench / Vibe Code Bench / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M window; MRCR v2 256K (8-needle): **92.9%** (behind Sol's 93.8, ahead of Qwen 3.7 Max's 86.7 and Opus 4.8's 83.2) — strong but under the ≥98%-at-512K+ bar; LongBench v2: **66.3**
- MMMU-Pro: **82.3%**; MathVision 95.2 / 97.7; BabyVision 82.0 / 91.3; HLE-VL (w/ tools) **52.2%** — #1 (ahead of Sol's 51.2); ZeroBench-Sub 48.5; CharXiv 88.4 / 93.5; MedXpertQA-MM 80.4
- Video: VideoMME (w/ sub) **90.4%**; VideoMMMU 88.7; MLVU 90.8; LVBench 81.8; LVBench (w/ mem) 85.6; VideoDR (w/ search) 73.2
- Arena.AI: **#2 globally on multimodal** (behind Fable 5); LMArena rank #2 (HokAI)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 86.6% (Qwen's own Claude Code run) clears the 85% frontier bar and OSWorld-Verified 86.1% leads the table, with WideSearch 81.9%, SkillsBench 70.2% and CoWorkBench 74.8% supporting; Toolathlon 72.5% pass@1, Agents' Last Exam 52.4 score and the vendor-run harnesses keep this under 88.
- **Reasoning: 87/100.** GPQA Diamond 92.6% sits in the frontier's top band (level with Fable 5) and HLE 56.2% with tools clears the 40%+ bar, with IFBench 82.8 (#1), HealthBench 60.2 (#1) and $OneMillion-Bench 52.5 supporting; HLE 43.6% without tools and the missing AA Intelligence Index cap the score.
- **Context window: 95/100.** 1M-token window, flat-priced across its whole length; MRCR v2 92.9% at 256K is strong but under the ≥98%-at-512K+ bar for 100 (no 512K–1M MRCR figure published).
- **Multimodal: 85/100.** text/image/video in with text out — the +video/PDF band (75–90), corroborated by MMMU-Pro 82.3%, the strong video suite (VideoMME 90.4%, MLVU 90.8%), HLE-VL 52.2% (#1) and the #2 Arena.AI multimodal rank.
- **Coding: 79/100.** Terminal-Bench 2.1 86.6% clears the 85% bar and FrontierSWE 73.5 and PaperBench 93.0 (#1) are strong, but DeepSWE 1.1 56.6% is well under the 74% bar and SWE-bench Pro 67.7% is mid-tier; SciCode and the AA Coding Index are unpublished.
- **Cost efficiency: 85/100.** $1.65/$4.951 per 1M (Model Studio) to $2/$6 (QwenCloud) sits just above the ~88 ($1.25/$4.25) anchor; the AA blended $1.18/M, half-rate batch and implicit-cache $0.206–0.25/M are offsets; no free tier (`noFreeId`).
- **Overall Score: 86/100.** (86+87+95+85+79)/5 = 86.4 → 86 — a strong-value flagship: frontier GPQA (92.6%), #1 PaperBench and IFBench, TB2.1 86.6% ahead of Opus 4.8/Fable 5, 1M multimodal context at ~$1.65–2/$4.95–6; the DeepSWE 56.6% gap and vendor-run harnesses are the caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Alibaba Cloud Model Studio docs, Qwen launch blog, QwenCloud, HokAI, OpenLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_8_Max.md`, using the same headings.
