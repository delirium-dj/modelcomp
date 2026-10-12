# GLM-5.1-Coding — findings by Step 5 Preview

- Source: Z.ai / Zhipu (`glm-5.1`, weights `zai-org/GLM-5.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 (Z.ai's coding-first flagship; the roster's `glm-5.1-coding` entry)
- **Short description:** Z.ai's April 2026 flagship built for agentic engineering — a 744B-A40B MoE (MIT open weights) whose selling point is not single-turn benchmarks but duration: it "can work independently and continuously on a single task for more than 8 hours," running an autonomous experiment→analyze→optimize loop. Vendor demos: a complete Linux desktop built from scratch in 8 hours, 655 iterations of vector-database optimization reaching 6.9× production throughput, and KernelBench Level-3 work at a 3.6× geometric-mean speedup (vs torch.compile max-autotune's 1.49×). At launch it set an open-weights SOTA on SWE-bench Pro (58.4, beating GPT-5.4, Opus 4.6 and Gemini 3.1 Pro) and reached 94.6% of Claude Opus 4.6's coding-leaderboard score with Claude Code as the harness. Superseded by GLM-5.2 (June 2026) and GLM-5.3 (later in 2026 — Z.ai now auto-routes GLM-5.1/5.2 requests to 5.3), with some hosts retiring it 2026-07-10.
- **Provider / access:** Open weights (MIT) on Hugging Face/ModelScope; Z.ai API; OpenRouter via 9+ providers.
- **Release:** 2026-04-07.
- **Context window:** 200K tokens (202,752 per OpenRouter); up to 128K max output.
- **Modalities:** Text in → text out (text-only); configurable extended reasoning.
- **Pricing (as of 2026-10-09):** Z.ai list $1.40/M input, $4.40/M output, $0.26 cache read; cheapest hosts $0.96–1.00 in / $3.03–3.20 out; MIT weights free to self-host.
- **Architecture:** MoE 744B total / 40B active (inherited from GLM-5), DSA sparse attention.

### Raw benchmarks found

Vendor (Z.ai blog, GLM-5.1 vs GLM-5 / Qwen3.6-Plus / MiniMax M2.7 / DeepSeek-V3.2 / Kimi K2.5 / Opus 4.6 / Gemini 3.1 Pro / GPT-5.4):

- SWE-bench Pro: **58.4** (GLM-5 55.1, GPT-5.4 57.7, Opus 4.6 57.3, Gemini 3.1 Pro 54.2)
- NL2Repo: **42.7**; Terminal-Bench 2.0 (Terminus-2): **63.5** (69.0 best self-reported harness; 66.5 with Claude Code)
- CyberGym: **68.7** (GLM-5 48.3)
- BrowseComp: **68.0** (79.3 with context management); τ³-Bench: **70.6**; MCP-Atlas public: **71.8**; Tool-Decathlon: 40.7
- GPQA-Diamond: **86.2**; HLE: **31.0**; HLE w/ tools: **52.3**; AIME 2026: **95.3**; HMMT Nov 25 94.0 / Feb 26 82.6; IMOAnswerBench 83.8
- Vending Bench 2: $5,634.41 (GLM-5 $4,432; Opus 4.6 $8,017)

Third-party:

- Artificial Analysis (OpenRouter): Intelligence Index **26.1**; Coding Index **55.8**; Agentic Index **23.9**; GPQA Diamond 86.8%; HLE 30.1%; IFBench 76.3%; τ²-Telecom 97.7%; AA-LCR 73.7%; τ-Banking 13.6%; GDPval-AA 31.0%; CritPt 4.6%; SciCode 44.8%; TB 2.1 61.8%; TB Hard 43.2%; TB 4.0 2.0%; AA-Omniscience 23.7% accuracy / 70.1% non-hallucination
- Epoch AI: SWE-bench Verified **74.2%**; GPQA Diamond 89.9%; SimpleQA Verified 34.0%; FrontierMath v1 56.7%; OTIS Mock AIME 93.3%
- Vals AI: SWE-bench 76.4%; LiveCodeBench 81.4%; TB 2.1 56.9%; Vibe Code Bench 31.5%; ProgramBench 0.0%; Vals Index 52.5%
- Inference Hub: 45.3 coding-leaderboard score with Claude Code harness (Opus 4.6: 47.9 — 94.6% of Opus)
- Design Arena: 1,194–1,336 Elo across code/3D/dataviz/game-dev categories

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP-Atlas 71.8%, τ³-Bench 70.6% and AA's τ²-Telecom 97.7% are solid upper-mid tool use; Tool-Decathlon 40.7%, τ-Banking 13.6%, GDPval-AA 31.0% and AA Agentic Index 23.9% hold it below the frontier band (Opus 4.6's MCP-Atlas 73.8 is only +2 points, but Tool-Decathlon is 47.2).
- **Reasoning: 74/100.** GPQA Diamond 86.2–89.3%, AIME 95.3%, HLE 30.1% (52.3% with tools) and MMLU-Pro 86.9% are upper-mid-band — the strongest open-weights reasoning of its spring-2026 moment; CritPt 4.6% and SimpleQA 34.0% cap it below frontier.
- **Context window: 76/100.** 200K is the 200K–500K band (65–84), near its top on AA-LCR 73.7% (with tools/context management, BrowseComp rises 68.0→79.3) — but it predates GLM-5.2's verified 1M-context capability.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20); vision lives in the separate GLM-5.3-Flash MCP stack.
- **Coding: 74/100.** SWE-bench Pro 58.4% (open-weights SOTA at launch), SWE-V 74.2–76.4% (Epoch/Vals), TB 2.0 63.5–69.0 and CyberGym 68.7% are strong agentic coding at 94.6% of Opus 4.6's leaderboard score; TB 2.1 61.8%, SciCode 44.8% and Vibe Code Bench 31.5% show the remaining gap — 8-hour autonomy is proven by demos, not benchmarks.
- **Cost efficiency: 88/100.** $1.40/$4.40 list (cheapest $0.96/$3.03) with $0.26 cache reads maps to the methodology's ~$1.25/$4.25 ≈ 88 point — 80–87% cheaper than Opus 4.6 at 94% of its coding score.
- **Overall Score: 61/100.** Best-fit recommendation: the long-horizon agentic-coding open model of spring 2026 — 8-hour autonomous task execution and SWE-Pro-leading coding at a third of Opus pricing; superseded by GLM-5.2/5.3, text-only.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Z.ai docs + GLM-5.1 blog + GitHub README benchmark tables, Artificial Analysis/OpenRouter, Epoch AI and Vals AI via modelbenchmark.io, InferenceHub); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5_3.md`, using the same headings.
