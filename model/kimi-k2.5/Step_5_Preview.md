# Kimi K2.5 — findings by Step 5 Preview

- Source: Moonshot AI / Kimi K2.5 (`opencode/kimi-k2.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's January 2026 open-weight flagship — a 1T/32B MoE unifying vision+text, thinking+non-thinking and single+multi-agent (Agent Swarm, up to 100 sub-agents) in one model, with AIME 96.1%, τ²-bench 95.9%, SWE-bench Verified 76.8% and native video input at $0.60/$3.00.
- **Provider / access:** Open weights (`moonshotai/Kimi-K2.5`, HF); Moonshot API, OpenRouter (`moonshotai/kimi-k2.5`), OpenCode Zen (`opencode/kimi-k2.5`), Opper (EU hosting); vLLM/SGLang/KTransformers serving.
- **Release / knowledge:** released 2026-01-27 (oppr.ai, aireleasetracker, llm-stats); knowledge cutoff not published; superseded by K2.6 (April 2026) and the K2.7 Code cut (June 2026).
- **IDs:** `opencode/kimi-k2.5` (Zen), `moonshotai/kimi-k2.5` (OpenRouter), `moonshotai/Kimi-K2.5` (HF).
- **Context window:** 262,144 total (256K); 65,536 max output (folder meta; DeepWiki standardizes benchmarks to ~128K inputs).
- **Modalities:** text, image, video in; text out; thinking + non-thinking modes; tool calling; Agent Swarm (main agent 15 steps / sub-agents 100 steps on BrowseComp).
- **Pricing (as of 2026-10-21):** $0.60/$3.00 per 1M in/out (folder meta, serenitiesai), cached input $0.08; Opper route $0.60/$3.14 with EU zero-data-retention.
- **Architecture:** 1T-total / 32B-active MoE (folder meta); open weights; MoonViT vision encoder; PARL multi-agent training technique (serenitiesai).

### Raw benchmarks found

Moonshot model card via DeepWiki (thinking mode unless noted) + Artificial Analysis / leaderboard figures via BenchLM:

Agent / tool use:

- τ²-bench: **95.9%** (Artificial Analysis via BenchLM)
- τ³-bench: **65.7%** (Qwen3.6-Plus comparison table via BenchLM)
- DeepSearchQA: **77.1%** (model card via BenchLM)
- BrowseComp: **60.6%** / **74.9%** (context-managed) / **78.4%** (Agent Swarm) (model card via DeepWiki)
- WideSearch: **72.7%** (item-f1) / **79.0%** (Agent Swarm) (model card)
- OSWorld-Verified: **63.3%** (K2.6 model card via BenchLM)
- BFCL v4: **68.3%** (Qwen3.5-397B comparison table via BenchLM)
- MCP-Tasks: **59.1%** (Qwen3.6-Plus table via BenchLM); Claw-Eval: **52.3%** (Claw-Eval leaderboard via BenchLM)
- Seal-0: **57.4%** (model card)
- GDPval-AA: **936 Elo / 17.0%** normalized (Artificial Analysis via BenchLM) — low
- APEX-Agents (AA): **11.5%**; JobBench: **8.7%**; ResearchClawBench: **14.0%**; DeepPlanning: **14.4%**; Toolathlon: **27.8%**; MCP Atlas: **29.5%**; Gert Labs: **45.9%** (all via BenchLM)
- Terminal-Bench 2.0: **50.8%** (listed under coding)

Reasoning / knowledge:

- AIME 2025: **96.1%** (avg@32); AIME 2026: **95.8%** (model card via BenchLM)
- HMMT Feb 2025: **95.4%** / Nov 2025: **91.1%** / Feb 2026: **87.1%** (model card)
- HLE-Full: **30.1%**; **50.2%** with tools (text 51.8 / image 39.8) (model card via DeepWiki)
- GPQA Diamond: **87.6%** (model card); **87.9%** (Artificial Analysis via BenchLM)
- MMLU-Pro: **87.1%**; MMLU-Redux: **94.5%**; SuperGPQA: **69.2%** (model card / comparison tables)
- IMO-AnswerBench: **81.8%**; MMAnswerBench: **81.8%** (model card)
- AA-LCR (long-context reasoning): **78.0%** (Artificial Analysis via BenchLM)
- AA Intelligence Index: **23.5%** (Artificial Analysis via BenchLM — mid band)
- CritPt: **3.1%** (Artificial Analysis via BenchLM) — very weak
- AA-Omniscience: Accuracy **35.2%**, Hallucination Rate **65.7%** (Artificial Analysis via BenchLM)
- AA-IFBench: **70.2%** / IFEval: **93.9%** (Artificial Analysis / Qwen table via BenchLM)

Coding:

- SWE-bench Verified: **76.8%** (model card, non-thinking mode; Arcee re-run 70.8%)
- LiveCodeBench v6: **85.0%** (model card)
- SWE-bench Pro: **50.7%**; SWE Multilingual: **73.0%** (model card)
- Terminal-Bench 2.0: **50.8%** (model card, non-thinking mode)
- SciCode: **48.7%** (model card); AA Coding Index: **46.8%** (AA via BenchLM)
- PaperBench: **63.5%**; CyberGym: **41.3%**; OJBench (cpp): **57.4%** (model card)
- SWE-Rebench: **58.5%**; NL2Repo: **32.0%**; React Native Evals: **77.2%** (leaderboards via BenchLM)
- Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **78.0%** and LongBench v2 **61.0%** (AA / model card via BenchLM) on the full 256K window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU-Pro 78.5% (AA 75.4%), MathVision 84.2%, MathVista mini 90.1%, OCRBench 92.3%, OmniDocBench 1.5 88.8%, InfoVQA 92.6%, SimpleVQA 71.2%; video: VideoMME 87.4%, VideoMMMU 86.6%, MMVU 80.4%, MotionBench 70.4%, LongVideoBench 79.8%, LVBench 75.9% (model card via DeepWiki/BenchLM).

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench 95.9%, τ³-bench 65.7%, DeepSearchQA 77.1%, BrowseComp 78.4% (swarm) and OSWorld-Verified 63.3% show strong search/computer-use agents with a genuine multi-agent mode; capped hard by GDPval 936 Elo (17.0%), APEX-Agents 11.5%, JobBench 8.7%, ResearchClawBench 14.0%, Toolathlon 27.8%, MCP Atlas 29.5% and DeepPlanning 14.4% — the knowledge-work agentic boards are its weak half.
- **Reasoning: 86/100.** AIME 96.1%, HMMT 95.4%, GPQA Diamond 87.6–87.9% and MMLU-Pro 87.1% are frontier-adjacent, and HLE-Full doubles to 50.2% with tools; capped by HLE 30.1% text-only, AA Intelligence Index 23.5% (mid band), CritPt 3.1% and a 65.7% hallucination rate.
- **Context window: 78/100.** 262,144 native (256K) with 65,536 max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 78.0% / LongBench v2 61.0% are solid mid-band, with no ≥512K retrieval evidence.
- **Multimodal: 88/100.** Native text, image and video input (video-in tier 75–90) with text-only output — a genuine unified VLM: OCRBench 92.3%, VideoMME 87.4%, MathVista 90.1% and MathVision 84.2% are excellent for a 1T open model; no audio input or non-text output.
- **Coding: 78/100.** SWE-bench Verified 76.8% and LiveCodeBench v6 85.0% are strong mid-to-upper band (SWE-bench peaked in non-thinking mode), but SWE-bench Pro 50.7%, SciCode 48.7%, AA Coding Index 46.8%, CyberGym 41.3% and Terminal-Bench 2.0 50.8% sit well below the frontier DeepSWE/TB2.1 reference levels.
- **Cost efficiency: 90/100.** $0.60/$3.00 with $0.08 cached sits near the ~$0.60/$2.20 ≈ 92 reference band; open weights (free self-host) keep the floor at $0.
- **Overall Score: 81/100.** Mean of (74 + 86 + 78 + 88 + 78) / 5 = 80.8 → 81. Best fit: the do-everything open-weight 1T — math, OCR/document and video agents at near-free self-host prices; the hardest knowledge-work and repo-coding benchmarks still belong to the closed frontier.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Moonshot model card via DeepWiki, Artificial Analysis/Claw-Eval/JobBench/SWE-Rebench figures via BenchLM, opper.ai, serenitiesai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
