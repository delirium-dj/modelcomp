# MiMo-V2.6-Pro — findings by GLM 5.2 Coding

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (release name MiMo-V2.6-Pro-RL)
- **Short description:** Xiaomi's flagship open-weights checkpoint (1.02T total / 42B active MoE, MIT), released 2026-09-22, built on "Scaling RL Toward Self-Improvement": one mixed RL run across coding/general-agent/visual/cyber ("You Only RL Once"), fully async GRPO at 1,568 prompts × 16 rollouts/step, Groupwise Agentic Grading (GRS rubrics offline + GAR advantage redistribution online), MOPD2 multi-prefix multi-teacher on-policy distillation, and cold-start self-correction alignment. Native omnimodal (text/image/video/audio) with 1M context.
- **Provider / access:** Xiaomi MiMo Open Platform API ($0.435/$0.87), AI Studio, MiMo Code, Xiaomi MiMo Desktop; HuggingFace + ModelScope weights (MIT); OpenRouter; self-host recipes: SGLang (TP16/DP2/EP16, 2 nodes) and vLLM (TP8) with EAGLE speculative decoding.
- **Release / knowledge:** 2026-09-22 (LLM Stats). Knowledge cutoff not stated in model card.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF); platform APIs per above. Sibling: MiMo-V2.6-Flash-RL (67.9 DeepSWE tier).
- **Context window:** 1M tokens (model card; LLM Stats lists 1.0M in, output "—").
- **Modalities:** native omnimodal — text, image, video, audio in (681M MiMo ViT 28L 24SWA+4GA; AudioTokenizer 308M + 127M patch encoder); text out. MTP: 5-layer speculative decoder, 7 tokens/pass.
- **Pricing (as of 2026-10-09):** $0.435 in / $0.87 out / $0.0036 cached per 1M via Xiaomi — near the cheapest per-token tier tracked; note TTFT p95 23.93s, output p5 19 c/s (LLM Stats live) — hosted latency is the weak axis, not price.
- **License:** MIT (commercial use allowed) with use-restrictions notice (no military, no malicious cyber, no unlawful use — informational, doesn't amend MIT).
- **Architecture:** 70 layers (60 SWA + 10 GA), hidden 6144, 384 routed experts / 8 activated (no shared experts), QK/V head dims 192/128, sliding window 128; spec-decode EAGLE 5-layer SWA drafter.

### Raw benchmarks found

> Primary: official HF model card eval table (vendor-run; competitor columns: Claude Opus 5, GPT-5.6 Sol, Claude Fable 5 — run by Xiaomi or cited). LLM Stats tables JS-gated.

Agent / tool use:

- AutomationBench v1.0.6: **53.1** — beats Opus 5's 50.3 and Sol's 45.8 in that table; note scale mismatch with Anthropic/Zapier's own AutomationBench reporting (Opus 5.5 42.5% max) — likely different scoring rev; both logged.
- Toolathlon-Verified: **76.9** vs Opus 5's 80.6, Sol's 74.9, Fable 5's 77.9.
- GDPval-AA 2.1: **1,673 Elo** vs Opus 5's 1,708, Sol's 1,588, Fable 5's 1,595 (Anthropic's own table had Opus 5 1,824 on v2 — revision differences; both logged).
- Agents' Last Exam: **31.6** — ties Opus 5's 31.6, beats Sol's 30.8, Fable 5's 25.7.
- Terminal-Bench 4.0: **34.9** vs Opus 5's 49.0, Sol's 39.9, Fable 5's 42.4 — mid-field; MiMo's own MiMo 2.5 was 1.5 (generation jump 23x).
- Terminal-Bench 2.1: **89.9** — best in table vs Opus 5's 89.1, Sol's 88.8.
- OSWorld-Verified: **82.0** vs Opus 5's 83.4, Sol's 83.0, Fable 5's 86.0.
- JobBench: **62.0** vs Opus 5's 65.7, Sol's 45.4.

Coding:

- DeepSWE v1.1: **71.9** vs Opus 5's 74.0, Sol's 73.0, Fable 5's 70.0 — frontier-adjacent (Argon 77.9 SOTA).
- ProgramBench: **26.5** vs Opus 5's 37.0, Fable 5's 33.0, Sol's 25.0 — the weak row.
- MiMo Code Bench: **63.2** vs Opus 5's 68.6, Sol's 59.3.

Cybersecurity (RL-trained domain):

- CyberGym: **94.0** (Flash 95.1) — vs GLM-5.3's 84.5, MiMo 2.5's 40.0; no Claude/OpenAI rows.
- MiMo Cyber Bench: **80.2** (2.5: 0.0).
- ExploitGym: **17.8** vs Sol's 30.3, Fable 5's 28.4, Opus 5's 22.1.
- ExploitBench: **47.9** vs Sol's 78.5, Fable 5's 78.0, Opus 5's 70.0 — behind the frontier on exploitation.
- SEC Bench Pro: **66.3** vs Sol's 79.1.

Visual agent:

- MiMo VisualCoding: **72.3** vs Sol's 73.4, Opus 5's 70.0, Fable 5's 69.1.

Long context:

- 1M spec; no MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Vendor-table competitor columns carry harness-revision risk; noted inline.

- **Tool use: 85/100.** TB 2.1 89.9 best-in-table, OSWorld 82, ALE 31.6 tie with Opus 5, Toolathlon 76.9, JobBench 62, AutomationBench 53.1 (rev caveat) — a complete agent profile at $0.44/$0.87; capped by TB 4.0 34.9 (open-ended terminal work trails Opus 5's 49) and ProgramBench 26.5.
- **Reasoning: 82/100.** GDPval 1,673 + ALE 31.6 + JobBench 62 show near-frontier general reasoning; no HLE/GPQA/AA rows; MiMo Code Bench 63.2 implies strong but sub-Opus depth.
- **Context window: 95/100.** 1M verified spec with SWA+GA architecture and MTP acceleration; no retrieval benchmark; hosted output cap unstated (LLM Stats "—").
- **Multimodal: 88/100.** Native omnimodal (text+image+video+audio in) — the full input stack at open weights; VisualCoding 72.3 near Sol's 73.4; text-out only.
- **Coding: 87/100.** DeepSWE 71.9 within 2.1 of Opus 5, TB 2.1 89.9, MiMo Code Bench 63.2; ProgramBench 26.5 is the outlier weak row; no SWE-bench Verified/CursorBench rows.
- **Cost efficiency: 97/100.** $0.435/$0.87/$0.0036 cached + MIT weights + 2-node self-host recipes — cheapest frontier-class bundle tracked; docked for 23.93s TTFT / 19 c/s hosted latency (self-host TP16 needed for real throughput).
- **Overall Score: 87/100.** (85 + 82 + 95 + 88 + 87) / 5 = 87.4 → 87. Best-fit: the sovereign/price-tier workhorse — omnimodal 1M-context agent work at ~1/5th Sonnet 5.5's price with MIT self-host rights; accept slower hosted latency or run your own TP16 cluster; escalate to Opus 5.5/Argon for the hardest open-ended terminal + exploitation work.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (HuggingFace XiaomiMiMo/MiMo-V2.6-Pro-RL model card primary — eval table, architecture, deployment; LLM Stats page for pricing/latency/date); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.