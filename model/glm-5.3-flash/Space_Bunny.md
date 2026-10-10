# GLM 5.3 Flash — findings by Space Bunny

- Source: Z.ai (`glm-5.3-flash`; `reasoning_effort` defaults to `max`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's first natively multimodal GLM-5 model — a 320B-total / 18B-active open-weight MoE built for low-cost, long-context, tool-using coding and agent workflows. Launched anonymously as **Ox Alpha** on OpenRouter/OpenCode on 2026-08-20, revealed by Z.ai on 2026-08-26. Still the current Flash-line flagship; **not deprecated** as of 2026-10-10.
- **Provider / access:** Z.ai API (`glm-5.3-flash`), OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, Baseten, DeepInfra, plus NVIDIA and Fireworks self-host endpoints; Hugging Face `zai-org/GLM-5.3-Flash` (BF16 + native FP8 safetensors, ungated); OpenCode Zen route `opencode/glm-5.3-flash`. Included in all Z.ai GLM Coding Plan tiers.
- **Serving tiers:** **GLM-5.3-FlashX** (2026-09-18) serves the *same* weights at up to **200 tok/s** for $0.37 / $1.25 per 1M. Not yet on the GLM Coding Plan. The speed difference is a property of the serving stack, not of the weights, and there is no separate Hugging Face repo for it.
- **Release / knowledge:** Released 2026-08-26; Hugging Face repo published 2026-08-25/27. No public knowledge cutoff disclosed.
- **IDs:** `glm-5.3-flash`; `zai-org/GLM-5.3-Flash`. It is a distinct checkpoint from the proprietary GLM-5.3 flagship (753B/40B, custom `glm-5.3` licence) — not a trimmed copy.
- **Context window:** **1,048,576 tokens**; max output **131,072 (128K)** tokens (docs.z.ai / LLM Reference / modelbenchmark.io, verified 2026-10-10). The previous pass recorded the output limit as unknown; it is now resolved.
- **Modalities:** Text, image, video, and file input; text output only (no image/audio generation). Function calling, tool use, structured outputs, reasoning, and prompt caching supported.
- **Pricing (as of 2026-10-10):** List rate **$0.15 per 1M input / $0.50 per 1M output**, cache read **$0.03** (docs.z.ai; OpenRouter rechecked 2026-09-22). The 50% launch promotion ($0.075 / $0.25 / $0.015 cache) **expired 2026-09-09 24:00 UTC+8** — any source still quoting it is stale.
- **Speed:** 48.0 output tokens/s and 3.30 s TTFT on standard hosting (Artificial Analysis, class medians 81.8 and 2.01) — the slow end of its class and **"very verbose"** (180M output tokens across the index vs. a 140M median). FlashX at 200 tok/s is the latency remedy.
- **Architecture:** Open-weights MoE, 321B total / 18B active, MIT licence. Newly trained base (not post-trained from GLM-5.2). 45 layers combining KDA linear-attention with NoPE sparse MLA, 288 routed experts (top-8) + 1 shared, one multi-token-prediction draft layer, Manifold-Constrained Hyper-Connections, dedicated vision encoder, 30T-token multimodal pre-training corpus. Z.ai reports ~3× less attention compute and a 4.4× smaller KV cache than the GLM-5.3 flagship — the design choice that makes 1M context affordable to serve.
- **Unresolved spec conflict (flagged, not settled):** Artificial Analysis's same-day model page describes the model as "Proprietary model", weights not publicly available, **text-only**, and **400k context**. The live Hugging Face repo shows MIT-licensed downloadable safetensors, a 1,048,576-token window, and a multimodal chat template, corroborated by OpenRouter and docs.z.ai. The verifiable weights win on the record, but the disagreement is unreconciled and AA's scoring may reflect the narrower spec.
- **Not to be confused with:** GLM-4.7-Flash (Jan 2026, 30B/3B active, 200K context, free API tier).

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **78.4%** — Z.ai self-reported at launch, but **confirmed independently on the official toolathlon.xyz board 2026-10-03** (status upgraded from vendor-claim to independent)
- Terminal-Bench 2.1: **84.3%** (Terminus-2 / Claude Code 2.1.207 harness). Z.ai self-reports 84.3; Artificial Analysis independently measured **84.27** (displays 84.3). Vals AI's archived Terminus 2 table lists the model at **62.92** under a different configuration — tracked discrepancy.
- AutomationBench-AA: **60.4%** (Artificial Analysis); Z.ai's own AutomationBench v1.0.6 figure is **48.8%** — different benchmark version, not a conflict.
- Agents' Last Exam: **26.3%** — still Z.ai self-reported only; trails Opus 4.8 (27.3), Gemini 3.7 Flash (28.0), GPT-5.6 Terra (28.0), Kimi K3 (28.3).
- AA Tau3 Banking: **47.2%**; AA ITBench: **51.2%**; AA EnterpriseOps-Gym: **33.2%**; AA-Briefcase v1.1: **1449–1454** Elo (Artificial Analysis)
- NL2Repo: **56.3%** (Z.ai)
- MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis, exact underlying value; on-screen rounds to 91); **90.2 ±1.7** (Epoch AI, `max` effort, Inspect harness); **86.4%** (Vals AI); **90.2** via Epoch AI Benchmarking Hub. Conflict logged — all readings cluster 86–91.
- MMLU-Pro: **86.1%** (Vals AI)
- HLE: **39.9%** no-tools (Artificial Analysis) vs. **55.3%** with tools (Z.ai, 300K context-management strategy, GPT-5.6-luna medium judge) — different harnesses, not comparable
- ARC-AGI-2 (max effort): **65.8%** (ARC Prize official, 2026-10-03)
- LiveBench: **71.6%** (livebench.ai, 2026-08-28)
- OTIS Mock AIME 2024-2025: **93.9 ±2.2** (Epoch AI, `max`); FrontierMath Tiers 1-3 v2: **55.8 ±2.9**; FrontierMath Tier-4 v2: **17.1 ±5.9** (Epoch AI)
- AA Index v4.3.2: **41.81/100** (vs. GLM-5.3 Max at 44.78). Component rows: CritPt **15%**, GDP.pdf **15.4%**, AA-LCR v1.1 **80%**, AA-Omniscience Index **7.5**

Coding:

- SWE-bench (Vals AI): **92.0%**
- LiveCodeBench (Vals AI): **80.5%**
- DeepSWE v1.1: **63.4%** (Z.ai, mini-swe-agent, 400K context) — official Datacurve leaderboard independently reports **63% ±4% Pass@1**, avg cost $0.24, 73k output tokens, 123 steps, entry labelled `glm-5.3-flash [max]`
- Terminal-Bench 2.1: **84.3%**; Terminal-Bench 4.0: **32.8%** (Artificial Analysis, mini-swe-agent, pass@1 over 3 full passes on all 66 tasks); the grant-funded official Terminal-Bench board (Claude Code, 5-trial pass@1) lists **35.76 ± 3.54**
- AA-SciCode: **51.6%**
- **FrontierSWE v2: 18.1%** (Proximal leaderboard) — the model's weakest published coding result and a material counterweight to the SWE-bench/LiveCodeBench numbers
- OpenHarmony Bench: **57.3%**; Bug Hunt Bench: **17.7** fixes
- SWE-bench Verified, Vibe Code Bench: **no verified public exact value found**

Long context:

- No third-party retrieval-at-length benchmark for this exact model was found. AA-LCR v1.1 at **80%** is the closest long-context reasoning measurement; the 1M window and 128K output cap are vendor-documented.

Vision / multimodal:

- CharXiv Reasoning w/ Tools: **89.4%** (vs. Opus 4.8 89.9, GPT-5.6 Terra 88.0, Gemini 3.7 Flash 88.7)
- Chartography w/ Tools: **78.0%** (vs. Opus 4.8 75.0)
- OfficeQA Pro: **62.4%** (vs. Opus 4.8 48.9, DeepSeek-V4-Vision-Exp 57.9)
- BabyVision: **53.4%** (vs. Opus 4.8 46.8, GPT-5.6 Terra 61.6, Gemini 3.7 Flash 70.9)

Sources consulted: [GLM-5.3-Flash Hugging Face model card](https://huggingface.co/zai-org/GLM-5.3-Flash), [GLM-5.3-Flash launch blog (Z.ai)](https://z.ai/blog/glm-5.3-flash), [zai-org/GLM-5 GitHub](https://github.com/zai-org/GLM-5), [Artificial Analysis GLM 5.3 Flash](https://artificialanalysis.ai/models/glm-5-3-flash), [BenchLM GLM-5.3-Flash](https://benchlm.ai/models/glm-5-3-flash), [The Model Gap GLM-5.3-Flash](https://themodelgap.com/models/glm-5-3-flash), [LLM Reference GLM-5.3-Flash](https://www.llmreference.com/model/glm-5.3-flash), [modelbenchmark.io GLM-5.3-Flash](https://modelbenchmark.io/models/glm-5-3-flash), [packet.ai GLM-5.3-Flash explained (2026-10-05)](https://packet.ai/blog/glm-5-3-flash-explained), [Codersera GLM-5.3 Prime / FlashX guide (2026-10-05)](https://codersera.com/blog/glm-5-3-prime-flashx-guide-2026/), all accessed 2026-10-10. Benchmark harness and configuration labels are retained.

### Normalized scores (1–100)

- **Tool use: 92/100.** Raised from 91. Toolathlon Verified **78.4%** moved from vendor claim to a confirmed independent leaderboard entry (2026-10-03), and Terminal-Bench 2.1 at **84.3%** is now independently reproduced by Artificial Analysis (84.27) matching the vendor exactly. AutomationBench-AA 60.4%, Tau3 Banking 47.2%, ITBench 51.2% fill out the agent profile. Held below the low 90s by Terminal-Bench 4.0 at **32.8%** (the current hard harness), EnterpriseOps-Gym 33.2%, and the absence of an MCP-Atlas row.
- **Reasoning: 89/100.** Raised from 86. The previous pass recorded "no verified GPQA value"; there are now four readings — AA **91.2**, Epoch AI **90.2 ±1.7**, Epoch Google-Proof **90.2**, Vals **86.4** — plus MMLU-Pro **86.1%**, ARC-AGI-2 **65.8%**, LiveBench **71.6%**, and OTIS Mock AIME **93.9 ±2.2**. Capped by the weak spots: HLE no-tools **39.9%**, AA-Omniscience **7.5**, FrontierMath Tier-4 **17.1 ±5.9**, and the Jan-era uncertainty around FrontierMath T4 showing the model falls off on the hardest frontier maths.
- **Context window: 94/100.** Slightly reduced from 95. The 1M window is confirmed and the previously unknown output cap is now documented at **131,072 tokens**; the hybrid sparse+linear attention design is specifically built for cheap long-context serving. Still no independent retrieval-at-length result, and AA-LCR v1.1 at 80% is the only long-context evidence.
- **Multimodal: 82/100.** Raised from 65 — the largest correction in this report. The prior pass capped at 65 because only "text and image input" was verified. Z.ai's launch table publishes a full vision suite: CharXiv Reasoning w/ Tools **89.4%** (essentially matching Opus 4.8's 89.9), Chartography w/ Tools **78.0%**, OfficeQA Pro **62.4%** (beating Opus 4.8's 48.9). Native video and file input are documented. Held at 82 rather than higher because BabyVision is only **53.4%** (well behind Gemini 3.7 Flash's 70.9) and because Artificial Analysis still lists the model as text-only with a 400k window.
- **Coding: 88/100.** Reduced from 92. SWE-bench (Vals) **92.0%**, LiveCodeBench (Vals) **80.5%**, DeepSWE v1.1 **63.4%** (independently confirmed at 63% ±4%), and Terminal-Bench 2.1 **84.3%** remain excellent. The new decisive datum is **FrontierSWE v2 at 18.1%** — real-world, long-horizon frontend/engineered work is where the model falls apart, a gap that SWE-bench Verified-style subsets do not surface. Terminal-Bench 4.0 at 32.8% points the same way.
- **Cost efficiency: 96/100.** Reduced from 97. The list rate of **$0.15 / $0.50** with a $0.03 cache read remains exceptional for a 1M-context multimodal open-weight model, and the MIT licence means self-hosting has no licence fee. The promo-era pricing that some sources still quote expired 2026-09-09, and the FlashX speed tier costs 2.5× the list rate.
- **Overall Score: 89.0/100.** (92 + 89 + 94 + 82 + 88) / 5 = 445 / 5 = 89.0, up from 85.8. Best fit: cheap, self-hostable, 1M-context multimodal agents and coding work where you can steer around the FrontierSWE-class weaknesses. Two practical notes: standard hosting is slow and verbose (48 tok/s, 180M output tokens on the index) — use FlashX when latency matters — and the flagship GLM-5.3 at 44.78 vs. 41.81 on the AA Index is only ~3 points better for ~9× the price, so Flash is the correct default.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research across the official Z.ai launch blog and Hugging Face model card, the zai-org/GLM-5 GitHub repository, Artificial Analysis component rows, Vals AI, BenchLM, The Model Gap, LLM Reference, modelbenchmark.io, ARC Prize, Datacurve DeepSWE, and the official Terminal-Bench and toolathlon.xyz boards; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash_Recheck.md`, using the same headings.