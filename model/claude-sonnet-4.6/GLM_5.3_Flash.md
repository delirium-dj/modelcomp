# Claude Sonnet 4.6 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-4-6`, proprietary, paid — free on claude.ai Free/Pro plans as chat default, not as an API free tier)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Anthropic)
- **Short description:** Anthropic's Feb-2026 mid-tier flagship — billed as its "most capable Sonnet model yet", a full upgrade across coding, computer use, long-context reasoning, agent planning, knowledge work and design. It became the default model on claude.ai and Claude Cowork for Free and Pro plans. Now deprecated by Anthropic's line-up: Artificial Analysis recommends Claude Sonnet 5 instead. The 2026-10-11 second pass fills the reasoning/knowledge gaps (GPQA 89.9%, HLE 49%, ARC-AGI-2 58.3% verified) but shows the age vs the 2026 class.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`, Anthropic Messages/Chat Completions), 4 API providers per AA; also default chat model on claude.ai Free/Pro plans. No API free tier; no Free ID on OpenCode-style gateways found.
- **Release / knowledge:** 2026-02-17 (Anthropic "Introducing Claude Sonnet 4.6"); knowledge cutoff not stated on fetched pages — not verified.
- **IDs:** `claude-sonnet-4-6` (Anthropic API naming; AA slug `claude-sonnet-4-6`). **No Free ID** — API access is paid.
- **Context window:** 1,000,000 tokens **in beta** (announcement; AA spec 1M) — **BenchLM's 2026-10-10 page lists 200K, an unresolved conflict**; the 1M-beta claim stays primary on the announcement + AA verification, with the conflict noted.
- **Modalities:** text + image input, text output (AA spec); reasoning variant exists — AA shows the non-reasoning High-Effort page (BenchLM classifies the base variant as non-reasoning); Anthropic's benchmark footnotes reference thinking budgets (120k), adaptive thinking and max reasoning effort. No audio/video in or out.
- **Pricing (as of 2026-10-11):** $3.00 / $15.00 per 1M in/out — unchanged from Sonnet 4.5; AA blended $2.31/1M (7:2:1 cache ratio) with a 90% prompt-cache discount.
- **Architecture:** proprietary, closed weights; parameters undisclosed (AA FAQ).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **79.5%** (AA, independent — fills the Tau2 gap)
- Claw-Eval: **67.8%** (Claw-Eval leaderboard via benchlm.ai — fills the gap); CyberGym: **65.2%** (CyberGym leaderboard)
- OSWorld-Verified: **72.1%** (OSWorld-Verified leaderboard; system card read 72.5% — consistent) — **conflicts with the OSWorld 2.0 paper reading of 8.3%** (arxiv 2606.29537; different harness version)
- Terminal-Bench 2.0: **59.1%** (system card, max effort; Vals TB2.1: **57.3%** — consistent)
- JobBench: **36.9%** (JobBench paper); ApprenticeBench (GUI): **2%** (NeoCognition — very weak); Gert Labs: **62.92%**
- GDPval-AA / MCP-Atlas: no verified public score found for 4.6
- AA Intelligence Index: **24.7** (AA current board, 2026-10-10 — the 2026-10-05 "25, #5/62 non-reasoning, estimate pending independent eval" is now a measured reading at the same level)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Anthropic Sonnet 4.6 system card via benchlm.ai — fills the gap); Vals: **85.6%**; AA: **79.9%**
- HLE: **49.0%** (system card — upgrades the 46.8% with-tools prior read); AA-HLE: **13.3%** (AA non-reasoning base — very weak)
- ARC-AGI-2: **58.3%** (ARC Prize verified, Sonnet 4.6 Max) — **slightly below the 60.4% high-effort vendor claim**; ARC-AGI-1: **86.0%** (ARC Prize verified Max)
- FrontierMath v2: **32.4%** Tiers 1–3 / **8.3%** Tier 4 (Epoch AI — weak)
- CritPt: **0.9%** (AA — effectively zero)
- AA-LCR v1.1: **68.3%** (AA — fills the long-context gap, mid)
- SuperGPQA: **95%** (Qwen3.6-Plus comparison table, competitor-cited); MMLU-Pro: **87.3%** (Vals) — **conflicts with the Qwen-table 79.2% reading**; AA-Omniscience: **38.6% accuracy / 68.5% non-hallucination row / −3.5 index** (AA)

Coding:

- SWE-bench Verified: **79.6%** (system card via benchlm.ai; the 2026-10-05 pass cited 80.2% from the announcement — consistent within trial variance)
- LiveCodeBench (Vals): **82.1%** (Vals — fills the gap); SWE-bench (Vals): **77.4%**; Vibe Code Bench v1.1: **51.48%** (Vals)
- SWE-Rebench: **60.7%**; React Native Evals: **80.6%**; FrontierCode 1.1 Main: **24.3%** (Cognition — weak); CursorBench 3.1: **48.8%**
- SWE-bench Pro / DeepSWE / SciCode (4.6): no verified public score found

Long context:

- AA-LCR v1.1: **68.3%** (AA — first measured long-context number, mid)
- MRCR/RULER: no verified public score for 4.6; 1M-beta vs BenchLM's 200K listing unresolved

Multimodal:

- CharXiv: **77.4%** (system card); AA-MMMU-Pro: **70.6%** (AA) — measured vision is mid-band; Design Arena Website: **1291** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 86/100.** (Was 90 on the prior pass.) τ²-bench 79.5%, Claw-Eval 67.8% and CyberGym 65.2% fill prior gaps with measured evidence, but the age shows against the 2026 class (Opus 4.8's τ² is 94.4%) and ApprenticeBench 2%/JobBench 36.9% are weak — a one-band correction.
- **Reasoning: 82/100.** (Was 85 on the prior pass.) GPQA 89.9% and HLE 49.0% fill the gaps positively and ARC-AGI-2 verifies at 58.3%, but CritPt 0.9%, FrontierMath T4 8.3%, AA-HLE 13.3% and the negative Omniscience index place the Feb-2026 generation measurably below its successors.
- **Context window: 90/100.** (Was 95 on the prior pass.) The 1M-beta claim stays primary but BenchLM now lists 200K — an unresolved conflict — and the first measured long-context evidence (AA-LCR 68.3%) is mid; docked below the GA-1M tier.
- **Multimodal: 85/100.** Text + image in, text out; measured vision is mid-band (MMMU-Pro 70.6, CharXiv 77.4); no audio/video.
- **Coding: 85/100.** (Was 87 on the prior pass.) SWE-bench Verified 79.6–80.2% and Vals LiveCodeBench 82.1% hold mid-frontier, but FrontierCode 24.3%, SWE-Rebench 60.7% and Vibe Code Bench 51.5% trail the 2026 class — a one-band correction.
- **Cost efficiency: 40/100.** $3/$15 — 60% of Opus 4.6's price point, still ~4–10× the paid open-model tier in this repo; 90% cache discount (blended $2.31) helps. Paid API; the "Free plan" access is chat-product usage, not an API free tier.
- **Overall Score: 85.6/100.** (Was 88.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (86 + 82 + 90 + 85 + 85) / 5 = 428/5 = 85.6 — lowered on the 2026-10-11 second pass: the newly measured rows (CritPt 0.9%, FrontierMath 8.3%, FrontierCode 24.3%, the 200K listing) document the Feb-2026 age against the 2026 class even as GPQA/HLE/Tau2/Claw gaps filled. Best fit: the value play of the 4.6 generation at Sonnet pricing; superseded by Sonnet 5 and the 5.5 family — pick it only for existing 4.6-pinned stacks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Anthropic Sonnet 4.6 system card, Vals AI / Claw-Eval / CyberGym / OSWorld / Cognition / Epoch AI / ARC Prize leaderboards via benchlm.ai, plus the prior 2026-09-17/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
