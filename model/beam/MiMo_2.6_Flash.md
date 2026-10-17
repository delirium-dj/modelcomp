# Beam — findings by MiMo 2.6 Flash

- Source: Reflection (`opencode/beam` on OpenCode Zen; weights `reflection/Beam-1.0-501B-A23B`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam
- **Short description:** Reflection AI's first open-weight model — a sparse MoE with 501B total / 23B active parameters built for coding, reasoning, and agentic workloads; positioned as the Western open-weight frontier with ~3x token-efficient reasoning. Weights released 2026-10-16 after a 2026-10-05 preview.
- **Provider / access:** OpenCode Zen `opencode/beam` (Chat Completions; free route $0/$0 per opencode.ai/zen/pricing, 1M in/1M out). Also Reflection API (free beta at filing) and open weights on Hugging Face with 40+ day-one partners (vLLM, Ollama, AWS, Google Cloud — Ridge).
- **Release / knowledge:** weights 2026-10-16 (preview 2026-10-05); knowledge cutoff 2026-06-30 (Reflection model card).
- **IDs:** `opencode/beam` (Zen free route); HF `reflection/Beam-1.0-501B-A23B`.
- **Context window:** 1M tokens total (Reflection model card; Artificial Analysis confirms 1M); Zen free route lists 1M in / 1M max out.
- **Modalities:** text in; text out; reasoning yes (effort labels minimal/low/medium/high/xhigh/max → 8–512 reasoning-token budget); tool calls yes (modified-Harmony XML wire; trained built-ins `search`/`browse`/`bash`); no image/audio/video; JSON mode not stated.
- **Pricing (as of 2026-10-17):** OpenCode Zen free route $0 in / $0 out (free-tier data-usage caveat applies); paid provider median $0.70/$2.10 per 1M (Artificial Analysis, 4 providers); Reflection API free beta.
- **Architecture:** 501.3B total / 23.4B active MoE; 52 layers (3 dense + 49 MoE); 256 experts; gated GQA + sliding-window attention; 152K vocabulary; 23.8T-token pretrain + 100M-rollout RL on 10.5K GB300 GPUs; BF16/FP8/NVFP4 numerics; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (Reflection model card, BF16, temp 0.7/top_p 0.99; FP8 78.9, NVFP4 78.4)
- Tau3-Banking: **38.0%** (Reflection preview blog); AA-harness estimate 25.9% (benchgap, low confidence — conflict noted)
- MCP Atlas: **78.7%** (preview blog) / **80.8%** (benchgap measured)
- AutomationBench public: **37.0%** (preview blog); benchgap AA-harness estimate 26.7% (low confidence)
- BrowseComp w/ context management: **77.4%** (blog) / 76.8% (benchgap measured)
- DeepSearchQA w/ context management: **80.1%** (blog) / 80.5% (benchgap measured)
- GDPval-AA: **34.6%** (benchgap estimate, medium confidence — no verified Elo found)
- Claw-Eval: no verified public score found (benchgap 71.5% model-based estimate only, low confidence)
- Toolathon / MCP-Atlas: no verified Toolathon public score found (benchgap Toolathlon-Verified 66.9% estimate only)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (model card BF16; blog 90.5)
- HLE: **36.0%** no-tools / **51.1%** with-tools (model card BF16; blog 36.2 no-tools)
- LCR: **78.2%** (AA-LCR via benchgap)
- CritPt: **16.3%** (model card, "CriPT AA")
- AIME 2026: **97.7%** (model card; blog 97.8)
- Artificial Analysis Intelligence Index: **30** — #19/120 on the model page; Ridge's ledger snapshot ranks it joint #32 of 33 on its own board (behind GLM-5.3 45, Kimi K3 44)
- Omniscience Accuracy: 34.4% (benchgap estimate, medium confidence)
- MMLU-Pro: 85.5% (benchgap estimate, medium confidence); ARC-AGI-1 90.0% / ARC-AGI-2 58.4% (benchgap estimates, low confidence)

Coding:

- SWE-bench Verified: **81.6%** (model card BF16; preview blog said 80.9 — earlier run, conflict noted)
- SWE-bench Pro v1: **66.1%** (model card; blog 65.5); v2-Hard **76.5%** (model card; blog 77.2)
- DeepSWE v1.1: **43.3%** (model card BF16; blog 44.4)
- SWE-bench Multilingual: **78.3%** (model card; blog 78.0)
- SWE-Atlas Codebase QnA: **31.8%** (model card; blog 34.6 — earlier run)
- LiveCodeBench: **88.3%** (model card BF16; benchgap v6 estimate 91.8%)
- SciCode: **49.2%** (model card; blog 49.7)
- Vibe Code Bench: no verified public score found (benchgap 57.5% estimate, medium confidence)
- AA Terminal-Bench 4.0: **3.0%** per Ridge citing AA's own run (benchgap lists 18.7% estimate — conflicting, neither is a vendor number)

Long context:

- LongBench v2: **67.5%** (benchgap measured); MRCRv2 85.5% (benchgap estimate, low confidence) — no long-context retrieval ≥98% at 512K+ reported.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 80.1% and Tau3-banking 38.0% land between the mid (TB2.1 45–60, Tau3 10–25) and frontier (TB2.1 88+, Tau3 50+) anchors, with MCP Atlas 78.7 and BrowseComp 77.4; capped by weak AA-harness AutomationBench (26.7 est.) and no verified GDPval-AA Elo.
- **Reasoning: 83/100.** GPQA 90.6 (frontier-tier), AIME26 97.7, HLE 36.0/51.1-with-tools, LCR 78.2 — but the AA Intelligence Index (30) stays in the mid band (20–35) behind GLM-5.3 (45) and Kimi K3 (44), and CritPt 16.3 is mid.
- **Context window: 95/100.** 1M window (model card + AA) is the 95–100 tier; no ≥98% retrieval verified at 512K+ (LongBench v2 67.5 measured), so 95 rather than 100.
- **Multimodal: 15/100.** Text-only in/out (model card).
- **Coding: 84/100.** SWE-bench Verified 81.6, TB2.1 80.1, LiveCodeBench 88.3, SciCode 49.2 sit just under the frontier anchors; capped by DeepSWE 43.3 (vs 74.2 for DeepSeek V4.1 Flash in the vendor's own comparison table) and SWE-Atlas QnA 31.8 (vs 61–68 frontier).
- **Cost efficiency: 100/100.** Zen free route $0/$0 (free tier may use prompts for data; paid provider median $0.70/$2.10 would be ~92 if the free route ends).
- **Overall Score: 72/100.** (82 + 83 + 95 + 15 + 84) / 5 = 71.8 → 72. Best fit: fast (228 t/s, AA), Apache-licensed US open model for free-tier agentic/coding work; escalate to GLM-5.3 / Kimi K3 for the deepest agentic tasks and hardest harnesses (AA Terminal-Bench 4.0).

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-17
- Method: public internet research (official Reflection blog, model card, Hugging Face card; Artificial Analysis; Ridge; benchgap/BenchLM-derived measurements; LLMRates; OpenCode Zen pricing) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

