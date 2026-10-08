# MiMo-V2.6-Flash — findings by MiMo 2.6 Flash

- Source: Xiaomi / MiMo (`mimo-v2.6-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficiency-tier entry in the MiMo-V2.6 series (released 2026-09-21/22 alongside V2.6-Pro; **MIT-licensed open weights**) — a 309B-total/15B-active sparse MoE (256 routed experts, 8 active, 48 layers = 39 sliding-window + 9 global attention) with a 681M vision encoder, dedicated audio tokenizer, and MTP speculative decoding (vendor claim: 2.5–3.7× faster than standard decoding). Native fully multimodal (text/image/video/audio in). Trained with a publicly streamed RL run (2026-09-15 start, live dashboard at mimo.xiaomi.com/rl; final RL stage ~6 days, ~$850K, 30 steps, ~750K trajectories shared with Pro) — a transparency practice most closed labs don't match. Positioned for high-frequency/large-scale professional workloads; per opencode usage data it ranked **#4 by tokens** (22T tokens, 416K unique users, 94.1% cache-hit rate, 77.8% weekly retention).
- **Provider / access:** Xiaomi MiMo Open Platform (OpenAI + Anthropic protocol compatible, all-lowercase id), OpenRouter (`xiaomi/mimo-v2.6-flash`, first-party endpoint), Vercel AI Gateway, opencode; Token Plan subscriptions; MiMo Desktop Client; self-host from Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash` collection, + RL envs/tech report).
- **Release / knowledge:** released 2026-09-22 (weights + tech report open-sourced with 7K+ RL task environments); API model updated 2026-09-25 (reduced repeated tool calls); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-flash` (native, lowercase) / `xiaomi/mimo-v2.6-flash` (gateways).
- **Context window:** **1,048,576 tokens** native; max output 131,072 (128K).
- **Modalities:** **text, images, video, audio in; text out**; reasoning yes (deep-thinking mode); tool calls yes (JSON mode, web search, agent workflows); structured output.
- **Pricing (as of 2026-10-07):** **$0.14 in (cache miss) / $0.28 out** per 1M, cache hit **$0.0028** (98% discount; ¥1/¥2 CNY; opencode lists $0.16/$0.32 gateway-inclusive); same price as V2.5 series (intelligence up, price flat). Weights free under MIT — self-host FP8 ≈ 173 GB / 65 shards, needs multi-GPU (vLLM TP4/TP8, SGLang TP8–16).
- **Architecture:** sparse MoE as above; training cost for Flash's RL stage reported at ~$850K.

> **Affiliation flag:** this report is written by MiMo 2.6 Flash — a Xiaomi model evaluating a Xiaomi model (same vendor). Treat scores and framing with that self-affiliation in mind.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi launch table; BenchmarkList: 93rd pct, rank 15/194, field leader Fable 5.1 91.4) — **clears the 85% ref, at the 88-frontier band's edge**
- AutomationBench v1.0.6: **52.3** (vendor table — above Opus 5's 50.3, Fable 5's 46.2, GPT-5.6 Sol's 45.8)
- OSWorld-Verified: **80.8** (77th pct, rank 17/70; leader Kimi K3 84.8)
- Toolathlon-Verified: 73.6; JobBench: **61.2** (8th/48, leader 67.8); Agents' Last Exam: Pass **27.6** (leader GPT-6 Astra 59.3); AA-Briefcase: **1495 Elo** (21/145, 86th pct)
- Terminal-Bench 4.0: **28.8** (17/29; leader Opus 5.5 66.4 — a clear weak spot); ProgramBench 26.0 (31/37)
- Security-agentic (Xiaomi custom): CyberGym 95.1; MiMo Cyber Bench 77.2; SEC-Bench Pro 47.5; ExploitBench 25.3; ExploitGym 6 (closed leaders 70–78 on ExploitBench)
- GDPval / MCP-Atlas: no public score found

Reasoning / knowledge:

- Humanity's Last Exam: **35.1** (BenchmarkList, 88th pct, rank 58/478; leader Opus 5.5 67.7) — **under the 40%+ ref**
- Artificial Analysis Intelligence Index: **37.9** (v4.3.2, independent, 85th pct; leader Fable 5.1 65.7) — **under the 60+ ref** (Pro sibling is 46; Flash is not Pro's score)
- GPQA Diamond / MMLU / ARC-AGI: **not published** at release (HokAI explicitly notes no standard third-party reasoning suite on the model card)
- AIIQ composite: 122 (45/147, 70th pct, independent)

Coding (Xiaomi-run unless noted):

- DeepSWE v1.1: **67.9** table / **65.7** launch post (documented inconsistency) — **under the 74%+ ref** (leader Opus 5.5 74.2); RL run improved it ~17 points from 48.8
- Terminal-Bench 2.1: 87.6 as above; Terminal-Bench 4.0: 28.8
- SciCode: **51.3** (BenchmarkList, 85th pct; leader Opus 5.5 66.9) — **under the 55% ref**
- MiMo Code Bench 61.2 (custom); ProgramBench 26.0; MiMo VisualCoding 71.5 (custom)
- SWE-bench Verified: not on Xiaomi's card; RankLLMs cites **67.2** (attribution uncertain — possibly conflated with the distill-9B RL result of 66.2)
- Hands-on independent (ComputingForGeeks, 2026-09-25, same DevOps prompts as GPT-6 Sol): 0/3 K8s manifests served HTTP 200, 2/3 bash correct, 2/3 tofu validate — linters passed but runtime checks failed twice of three; "fine for drafts and not for merges"

Long context:

- **AA-LCR: 74.3%** (independent, 78th pct, rank 92/408; leader Kimi K3 88.7) — real retrieval evidence, but a 14-point gap to the field leader; no needle/MRCR at ≥512K found

Multimodal:

- Native full-modality input (text/image/video/audio via 681M vision encoder + audio tokenizer); MiMo VisualCoding 71.5 (custom); no MMMU/OMNI-style third-party vision rows found

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6 at the 93rd percentile, AutomationBench 52.3 beating the closed field in Xiaomi's table, OSWorld 80.8, JobBench 61.2 (top-8), AA-Briefcase 86th pct; held down by TB4.0 28.8 (mid-pack), ALE pass 27.6 (half the leader), ProgramBench 26.0, no GDPval/MCP-Atlas, and vendor-only harnesses flagged by reviewers.
- **Reasoning: 77/100.** HLE 35.1 (88th pct) and AA Index 37.9 (85th pct) are respectable mid-tier independent readings but **miss both headline refs** (40+, 60+); no GPQA/ARC/MMLU row exists; AIIQ 122 (70th pct) supports the band.
- **Context window: 95/100.** 1M native clears the ≥1M tier floor; AA-LCR 74.3% proves real retrieval but sits 14 points below the leader and no ≥512K needle row exists → floor, not top.
- **Multimodal: 93/100.** **Audio in** (plus video + image) puts it in the 90–100 band per methodology — one of the few full-modality entries in this comparison; discounted slightly because third-party vision/audio benchmark rows are absent (only the custom VisualCoding 71.5).
- **Coding: 84/100.** TB2.1 87.6 clears the 85% ref at the frontier band's edge and RL lifted DeepSWE ~17 points; but DeepSWE 67.9 and SciCode 51.3 both miss their refs, TB4.0 28.8 and ProgramBench 26.0 are mid/lower-pack, SWE-V evidence is uncertain, and the independent DevOps runtime test failed 2-of-3 checks.
- **Cost efficiency: 97/100.** $0.14/$0.28 with 98%-off cache hits and MIT weights — the cheapest usable frontier-adjacent tier in this comparison (API avg cost per opencode session: $0.0028); only the multi-GPU self-host footprint (173 GB) and absence of a documented free tier keep it below 98.
- **Overall Score: 87/100.** (86+77+95+93+84)/5 = 87.0 → 87 — a full-modality 1M open model with TB2.1-at-frontier agentic coding at pennies per million tokens, honest about its gaps: mid-tier independent reasoning (AA 37.9), SciCode/DeepSWE refs missed, and thin third-party verification of its custom tables.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- **Affiliation:** reporter and subject are both Xiaomi MiMo models — self-evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Method: fresh public internet research (mimo.mi.com model page + V2.6 release post, opencode data page, OpenTools, HokAI, RankLLMs, BenchmarkList, ComputingForGeeks independent DevOps test); sources dated 2026-09-21 through 2026-10-07.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
