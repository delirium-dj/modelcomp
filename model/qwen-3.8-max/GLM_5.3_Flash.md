# Qwen3.8-Max — findings by GLM 5.3 Flash

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-max`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (also written Qwen 3.8-Max; "0902" API snapshot tracked by Artificial Analysis)
- **Short description:** Alibaba's flagship 2.4T-parameter sparse MoE for coding, office/agent work, research and long-horizon tasks — the first Max-scale Qwen with an open-weights release (Qwen3.8-2.4T-A95B, Aug 12, 2026). BenchLM ranks it #16 of 889 (70.66). Positions as "second only to Claude Fable 5" on its own internal evals.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope OpenAI-compatible endpoint `https://dashscope.aliyuncs.com/compatible-mode/v1` (Chat Completions + Responses wire API), model ID `qwen3.8-max`; harnesses: Qwen Code, Qoder CLI, Codex, OpenClaw. Not on OpenCode Zen (one-time 1M-token free quota on signup; no Zen Free ID).
- **Release / knowledge:** Released August 3, 2026 (AA tracks the Sept 2, 2026 "0902" refresh). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `qwen3.8-max` (DashScope, OpenClaw bailian route); open weights `Qwen/Qwen3.8-2.4T-A95B` (HF).
- **Context window:** 1,000,000 tokens configured (Artificial Analysis measures 984K on the 0902 endpoint; BenchLM concurs 1M); 65,536 max output per harness configs; text_window_percent 95.
- **Modalities:** Text + image (+ video understanding per VideoMME reporting) in; text out. Reasoning: yes (reasoning effort levels). Parallel tool calls and image-detail "original" supported.
- **Pricing (as of 2026-10-11):** $2.00 in / $6.00 out per 1M; cached input $0.25 (88% discount). AA blended rate $1.18/1M (7:2:1); cost per Intelligence Index task $5.41 (verbosity-inflated).
- **Architecture:** 2.4T total / ~95B activated sparse MoE on the Qwen 3.5 architectural foundation. Open weights shipped August 12, 2026 as **Qwen3.8-2.4T-A95B** (custom Qwen3.8-Max License; weights text-only, thinking required-on); smaller dense sibling Qwen3.8-27B open-sourced Aug 14 under Apache 2.0. Served API remains proprietary on the hosted endpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen official blog via benchlm.ai, updated 2026-10-10; vendor-run, Claude Code harness family) — **Vals independent: 67.4%**, a −19.2-pt vendor-vs-independent gap
- OSWorld-Verified: **86.1%** (Qwen blog) — **conflicts with the OSWorld 2.0 row of 19.4%** (same blog; different harness version)
- Toolathlon-Verified: **72.5%** (Qwen blog — fills the gap the 2026-10-08 pass marked missing)
- AndroidWorld: **85.3%**; MobileWorld: **77.8%**; WebArena-Verified: **66.8%** (Qwen blog — mobile/web agent breadth now measured)
- JobBench: **53.4%**; skillsBench: **70.2%**; Agents' Last Exam: **52.4%**; AutomationBench: **27.3%** (weak)
- CoWorkBench: **74.8%** / WideResearch: **81.9%** / WorkSpaceBench: **67.7%** (Qwen internal benches)
- Long-horizon case: ~16 days autonomous operation (265 commits, 127 PRs, 151 issues); ~125 continuous hours reproducing a paper (Qwen official cases)
- GDPval-AA / MCP Atlas / Claw-Eval: no verified public score found; Hermes Index: **36.2%** / Hermes Bench: **70.5%** (Nous Research); MazeBench ASCII: **0%** (tools-on run) — all added 2026-10-16

Reasoning / knowledge:

- HLE: **56.2% with tools** / **43.6%** without (Qwen blog — the with-tools row fills the gap; the 43.6 last-among-flagships framing applied to the no-tools setting)
- GPQA Diamond: **92.6%** (Qwen blog); Vals independent: **93.7%** — corroborated
- PaperBench: **93.0%** (Qwen blog; ahead of GPT-5.6 Sol, Fable 5 and Opus 4.8 — its strongest row)
- MMLU-Pro: **88.6%** (Vals, independent)
- IFBench: **82.8%** (Qwen blog)
- Artificial Analysis Intelligence Index (0902): **45**, #17/200, v4.3.2 (AA; median 24)
- E-Commerce Bench: final cash **¥416,252** — 38% above second-place GLM 5.2 (Qwen internal)

Coding:

- SWE-bench Pro: **67.7%** (Qwen blog; Fable 5.1 at 81.2 — well behind the 2026 Claude class)
- SWE-bench (Vals): **85.6%**; LiveCodeBench (Vals): **87.9%** (Vals, independent — fill the gaps)
- FrontierSWE: **73.5%** (Qwen blog) — **FrontierSWE v2: 15.8%** (Proximal, independent — very weak on the 2026 harness)
- DeepSWE: **56.6%**; NL2Repo: **55.9%**; MLS-Bench Lite: **41.0%**; QwenReactBench: **1724**; VulcanBench v3: **81.2%**; OpenHarmony Bench: **60.8%**
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found; Bug Hunt Bench: **25.7 fixes** (added 2026-10-16)
- Caveat: most coding rows are vendor-run under mixed harnesses; the Vals rows are the independent check

Long context:

- 1M window (984K AA-measured); MRCR v2 8-needle: **92.9%** at 256K (Qwen blog); LongBench v2: **66.3%** (Qwen blog — new)
- No 512K+/1M-band retrieval number verified

Multimodal (richly corroborated via the Qwen blog's vision suite):

- MMMU-Pro: **82.3%**; MathVision: **95.2%** / **97.7%** w/ Python; CharXiv: **93.5%** with tools / **88.4%** without; OmniDocBench 1.5: **92.1%**; CC-OCR: **79.6%**; OCRBench V2: **74.2%**; RealWorldQA: **88.0%**; ScreenSpot-Pro: **84.5%**; MedXpertQA (MM): **80.4%**; SimpleVQA: **75.0%**; ERQA: **77.8%**; PerceptionBench: **63.5%**; BabyVision: **82.0%**; Vision2Web: **69.0%**; ZeroBench: **24.0%**
- Video: Video-MME: **90.4%** with subs; VideoMMMU: **88.7%**; MMVU: **82.4%**; MLVU M-Avg: **90.8%**; LVBench: **81.8%**; ZeroBench w/ Python: **49.0%**; BabyVision w/ Python: **91.3%** (added 2026-10-16)`n- FrontierMath v2 (Epoch AI re-score): **74.7%** Tiers 1–3 / **46.3%** Tier 4 (epoch.ai, added 2026-10-16 — documented inline per repo convention, not averaged; no vendor FrontierMath row exists)

### Normalized scores (1–100)

- **Tool use: 87/100.** Breadth is now well documented (OSWorld-Verified 86.1, AndroidWorld 85.3, Toolathlon 72.5, MobileWorld 77.8) and the 16-day autonomous case stands — but the Vals TB2.1 gap (67.4 vs 86.6) and the 27.3% AutomationBench row keep it just under the independently cross-checked frontier agents.
- **Reasoning: 84/100.** (Was 82 on the prior pass.) HLE resolves upward with the with-tools row (56.2% vs the 43.6% no-tools read previously scored), GPQA is corroborated at 92.6–93.7% and PaperBench 93.0% leads its table; AA Index 45 (#17) still caps it below the Kimi K3/Astra band.
- **Context window: 93/100.** 1M window (984K AA-measured) in the 95–100 tier, docked for MRCR measured only at 256K (92.9%) and LongBench v2 66.3%; 65K max output exposed by harness configs.
- **Multimodal: 78/100.** Image + video understanding in / text out with an now richly corroborated vision suite (CharXiv 93.5, OmniDocBench 92.1, MLVU 90.8, VideoMMMU 88.7) — solidly inside the 75–90 band; no audio and text-only output keep it below the 90s.
- **Coding: 82/100.** Vals SWE-bench 85.6% and LiveCodeBench 87.9% corroborate the vendor story, but SWE-bench Pro 67.7%, DeepSWE 56.6% and FrontierSWE v2 15.8% hold it a band below the 2026 frontier coding class.
- **Cost efficiency: 74/100.** $2/$6 per 1M with $0.25 cached input interpolates between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors; docked for AA-measured verbosity ($5.41/task) and slow throughput.
- **Overall Score: 84.8/100.** (Was 84.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (87 + 84 + 93 + 78 + 82) / 5 = 424/5 = 84.8 — nudged up on the 2026-10-11 second pass as the HLE with-tools row and the corroborated GPQA convert reasoning gaps into measured evidence. Best fit: long-horizon coding + office/agent work at roughly a third of Opus-class pricing — best when you can absorb its verbosity and the vendor-heavy benchmark evidence base.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Qwen3.8-Max release blog (qwen.ai/blog?id=qwen3.8) and the Qwen3.8-2.4T-A95B HF model card, Vals AI leaderboards, Artificial Analysis 0902 readings, plus the prior 2026-10-08 pass; 2026-10-16 re-check: BenchLM 67-row refresh corroborates all rows (Hermes 36.2/70.5%, MazeBench 0%, Bug Hunt 25.7, Epoch FrontierMath v2 74.7/46.3% added; rank #16/889 70.66 → #19/954 69.66) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
