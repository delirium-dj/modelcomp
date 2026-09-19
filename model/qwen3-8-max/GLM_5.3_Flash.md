# Qwen3.8-Max — findings by GLM 5.3 Flash

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-max`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (also written Qwen 3.8-Max; "0902" API snapshot tracked by Artificial Analysis)
- **Short description:** Alibaba's flagship 2.4T-parameter sparse MoE for coding, office/agent work, research and long-horizon tasks — the first Max-scale Qwen with a promised open-weights release (tracked as proprietary on aggregators as of 2026-09-19). Positions as "second only to Claude Fable 5" on its own internal evals.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope OpenAI-compatible endpoint `https://dashscope.aliyuncs.com/compatible-mode/v1` (Chat Completions + Responses wire API), model ID `qwen3.8-max`; harnesses: Qwen Code, Qoder CLI, Codex, OpenClaw. Not on OpenCode Zen (one-time 1M-token free quota on signup; no Zen Free ID).
- **Release / knowledge:** Released August 3, 2026 (AA tracks the Sept 2, 2026 "0902" refresh). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `qwen3.8-max` (DashScope, OpenClaw bailian route).
- **Context window:** 1,000,000 tokens configured (Artificial Analysis measures 984K on the 0902 endpoint); 65,536 max output per harness configs; text_window_percent 95. Meta carries "1M / 131K out" — the 65K output cap is what harness configs expose.
- **Modalities:** Text + image (+ video understanding per VideoMME reporting) in; text out. Reasoning: yes (reasoning effort levels). Parallel tool calls and image-detail "original" supported.
- **Pricing (as of 2026-09-19):** $2.00 in / $6.00 out per 1M; cached input $0.25 (88% discount). AA blended rate $1.18/1M (7:2:1); cost per Intelligence Index task $5.41 (verbosity-inflated).
- **Architecture:** 2.4T total / ~95B activated sparse MoE on the Qwen 3.5 architectural foundation. Vendor announced open-weights plans at launch; parameter details per official blog. Proprietary served API; AA lists size as undisclosed.

### Raw benchmarks found

Agent / tool use:

Agent / tool use:

- Terminal-Bench 2.1: **86.6** (Qwen official table, Aug 3, 2026; vendor-run, Claude Code harness family)
- OSWorld-Verified: **86.1** (Qwen official table)
- CoWorkBench: **74.8** / WorkSpaceBench: **67.7** / WideSearch: **81.9** (Qwen internal benches)
- Long-horizon case: ~16 days autonomous operation (265 commits, 127 PRs, 151 issues); ~125 continuous hours reproducing a paper (7,600 lines, 33 GPU training rounds) (Qwen official cases)
- GDPval-AA / AutomationBench / MCP Atlas: no verified public score found (AA's AutomationBench and TB 4.0 values feed its Index but are not itemized publicly for this model)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6** (Qwen official table)
- HLE: **43.6** — last among the four flagships compared (Qwen table; ~10 pts behind Fable 5 per Emergent's read)
- PaperBench: **93.0** (Qwen table; ahead of GPT-5.6 Sol, Fable 5 and Opus 4.8 — its strongest row)
- MRCR v2 (8-needle): **92.9 @256K** (Qwen table)
- IFBench: **82.8** (Qwen table)
- Artificial Analysis Intelligence Index (0902): **45**, #17/200, v4.3.2 (AA; median 24). AA did not have independent scores at the Aug 3 launch — all vendor numbers until the 0902 AA run
- E-Commerce Bench: final cash **¥416,252** — 38% above second-place GLM 5.2, 152% above Qwen3.7-Max (Qwen internal)

Coding:

- SWE-bench Pro: **67.7** (Qwen table; Fable 5 at 80.0 — ~12 pts behind per Emergent's cross-read)
- Terminal-Bench 2.1 (coding harness): **86.6** (Qwen table)
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Caveat: most coding rows are vendor-run under the Claude Code harness; treat as vendor claims (Emergent methodology note)

Long context:

- 1M window (984K AA-measured); MRCR v2 8-needle **92.9%** at 256K (Qwen table); no 512K+/1M-band retrieval number verified

Multimodal (reported):

- MMMU-Pro: **82.3**; MathVision: **95.2** / **97.7**; VideoMME (with subtitles): **90.4** (Qwen table)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 86.6 and OSWorld-Verified 86.1 are frontier-band, and 16-day autonomous runs are compelling — but all tool rows are vendor-run (mixed harnesses) and no AA itemization of AutomationBench/GDPval exists, so it sits just under Kimi K3's independently cross-checked tool profile.
- **Reasoning: 82/100.** GPQA 92.6 and PaperBench 93.0 lead the flagship table, but HLE 43.6 (last of four flagships) and AA Intelligence Index 45 (#17) — vs 57–59.7 for Kimi K3 and 53 for GPT-6 Astra — cap it mid-frontier.
- **Context window: 93/100.** 1M window (984K AA-measured) in the 95–100 tier, docked for the 92.9% MRCR retrieval measured only at 256K and the 65K max output exposed by harness configs.
- **Multimodal: 78/100.** Image + video understanding in / text out with strong scores (MMMU-Pro 82.3, MathVision 95.2, VideoMME 90.4) — inside the 75–90 video/PDF band; no audio and text-only output keep it below the 90s.
- **Coding: 82/100.** TB2.1 86.6 is excellent, but SWE-bench Pro 67.7 (12 pts behind Fable 5's 80.0) and the all-vendor, mixed-harness evidence base hold it below Kimi K3's coding profile.
- **Cost efficiency: 74/100.** $2/$6 per 1M with $0.25 cached input interpolates between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors; docked for AA-measured verbosity ($5.41/task vs Kimi K3's $0.94) and slow 37.2 tok/s throughput.
- **Overall Score: 84.4/100.** (87+82+93+78+82)/5 = 84.4. Best fit: long-horizon coding + office/agent work at roughly a third of Opus-class pricing — best when you can absorb its verbosity and vendor-only benchmark evidence.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Qwen official blog via Tabbit curation, Emergent benchmark breakdown, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


