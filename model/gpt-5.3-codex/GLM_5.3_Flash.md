# GPT 5.3 Codex — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's Codex-line agentic coding model from the GPT-5.3 generation (Feb 2026) — the reasoning model tuned for agentic coding work in Codex CLI and coding agents; BenchLeader scores its agents & tools category at 80 with Terminal-Bench 78.4% (#6) and SWE-bench Verified 74.8% (#15).
- **Provider / access:** OpenCode Zen `opencode/gpt-5.3-codex` via `https://opencode.ai/zen/v1/responses` (paid, $1.75/$14.00); OpenAI API (the AA-tracked provider; Azure also serves at $1.75/$14.00). GPT-5.3 Codex Spark sibling exists (`gpt-5.3-codex-spark`).
- **Release / knowledge:** Released 2026-02-05 (Artificial Analysis); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.3-codex` (Zen, paid); `gpt-5.3-codex` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages; BenchLeader 400k)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-09):** Paid — $1.75 / 1M input, $14.00 / 1M output (OpenAI first-party; identical on Zen and Azure, cache read $0.175; blended $4.81/M per BenchLeader). AA blended rate $1.87/1M. Output speed 84 tok/s (AA-measured, faster than most), first token 2.42s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> BenchLeader full tables (data as of 2026-10-09) citing AA and Vals boards; xhigh best config unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench: **78.4%** #6 (tbench.ai, not-stated effort — fills the previously-missing TB row); Terminal-Bench Hard (AA): **53.0%** #17
- Terminal-Bench 2.0 (Vals): **64.0%** #6 — CONFLICT: the official system card reads **77.3%** (added 2026-10-16); τ²-Bench Telecom (AA): **86.0%**
- OSWorld-Verified: **64.7%**; Gert Labs: **57.47%**; JobBench: **33.7%** (all from the official system card via BenchLM — added 2026-10-16)
- METR Time Horizons: **74.5%** #6 (METR — new long-horizon evidence)
- Vending-Bench 2: **5940.1** #20 (Andon Labs); HiL-Bench: 4.3% #17
- GDPval-AA / Tau2-Bench / Claw-Eval: no verified public score found
- Artificial Analysis Intelligence Index v4.3.2: **32.5** #104 (AA — updates the earlier "33" estimate); BenchLeader Index: **63.9 ±5.0** #56 of 760 (xhigh best; Agents & tools 80, Coding 61, Composite 66)

Reasoning / knowledge:

- GPQA Diamond: **91.5%** #46 (AA — fills the previously-missing GPQA; clears the 90% frontier reference)
- HLE: **42.5%** #61 (AA — fills the previously-missing HLE; clears the 40% reference)
- CritPt: **16.9%** #77 (AA — fills the previously-missing CritPt)
- AA-LCR: **83.3%** #19 (AA long-context-reasoning board — fills the previously-missing LCR)
- IFBench: **75.4%** #33 (AA); AA-Omniscience: Index 10.9, accuracy **52.9%**, non-hallucination **10.8%** #392 (severe hallucination at xhigh)
- Epoch Capabilities Index: **156.8** #18 (Epoch)

Coding:

- SWE-bench Verified: **85%** (OpenAI system card — added 2026-10-16) / **74.8%** #15 (Epoch, high effort) — CONFLICT, both cited
- SWE-bench Pro: **56.8%** (OpenAI system card — fills the previously-missing row, added 2026-10-16); SWE-Rebench: **58.2%** (independent leaderboard, added 2026-10-16)
- LiveCodeBench: **87.3%** #15 (Vals — fills the previously-missing LCB)
- SWE-bench (Vals): **78.0%** #33; Vibe Code Bench v1.1: **61.8%** #41 (Vals)
- IOI: **53.8%** #19 (Vals); WeirdML: **77.9%** #22 (xhigh); ALE-Bench: **1655.2** #12 (Epoch)
- LMArena WebDev: 1409 (not-stated); SWE-Bench Pro: no verified public score found
- SciCode: no verified public score found for `gpt-5.3-codex`

Long context:

- AA-LCR **83.3%** #19 (AA — fills the previously-missing long-context measurement); 400K window

Multimodal / vision:

- MMMU-Pro: **78.5%** #69 (AA — fills the previously-missing vision measurement)

### Normalized scores (1–100)

- **Tool use: 86/100.** CHANGED from 85 — TB 78.4% (#6), official TB2.0 77.3% (vs Vals 64.0%), τ² Telecom 86.0%, METR 74.5% (#6), and the new OSWorld 64.7%/Gert 57.5%/JobBench 33.7% rows; BenchLeader's Agents & tools 80 corroborates; GDPval row still missing and HiL-Bench 4.3% cap it below 90.
- **Reasoning: 85/100.** GPQA 91.5% (#46) and HLE 42.5% (#61) now clear both frontier references (90%/40%); AA-LCR 83.3% (#19) is strong; CritPt 16.9%, AA Index 32.5 and the severe 10.8% non-hallucination rate cap it below 90.
- **Context window: 78/100.** 400K tokens — top of the 200K–500K tier (65–84); measured AA-LCR 83.3% is strong for the tier; no ≥1M window or ≥98% retrieval at 512K+.
- **Multimodal: 72/100.** Text + image input, text output only, with measured MMMU-Pro 78.5% — above the 60–70 image-in band on measured vision.
- **Coding: 88/100.** CHANGED from 85 — the official system card now reports SWE-V 85% and SWE-Pro 56.8% (previously missing), alongside LCB 87.3% (#15), SWE-bench (Vals) 78.0%, Vibe 61.8%, SWE-Rebench 58.2% and ALE-Bench 1655 #12; the Epoch SWE-V 74.8% conflict is noted.
- **Cost efficiency: 66/100.** $1.75/$14.00 per 1M tokens — between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, closer to $3/$15 on output; AA blended $1.87/1M.
- **Overall Score: 82/100.** CHANGED from 81 — mean of the five quality dims (86 + 85 + 78 + 72 + 88) / 5 = 409/5 = 81.8 → 82. Best fit: agentic coding in Codex CLI/coding agents — now benchmark-verified strong on both agentic and coding rows; for long-horizon work, step up to GPT-5.4/5.5-class models.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (BenchLeader full tables data as of 2026-10-09 citing AA and Vals boards, OpenCode Zen docs cross-checked; re-researched 2026-10-16: official system-card SWE-V 85%, SWE-Pro 56.8% filled, OSWorld 64.7% added — Tool 85→86, Coding 85→88, Overall 81→82); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing SWE-V 74.8% #15, LCB 87.3% #15, TB 78.4% #6, GPQA 91.5% #46, HLE 42.5% #61, AA-LCR 83.3% #19, CritPt 16.9%, Vibe 61.8%, MMMU-Pro 78.5%, METR 74.5% #6 — Tool 54→85, Reasoning 63→85, Context 75→78, Multimodal 65→72, Coding 64→85, Overall 64→81.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.
